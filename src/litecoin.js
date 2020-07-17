const Base = require('./base');
var BlockSDK = BlockSDK || {};

const util = require('util');

	BlockSDK.Litecoin = function(api_token = ''){

		this.api_token = api_token;

		Base.apply(this, arguments);

		this.getBlockChain = function (){
			return this.request("GET","/ltc/block");
		}

		this.getBlock = function (request = {}){
			if (typeof request['limit'] == 'undefined') request['limit'] = 10;
			if (typeof request['offset'] == 'undefined') request['offset'] = 0;
			if (typeof request['rawtx'] == 'undefined') request['rawtx'] = false;


			return this.request("GET",`/ltc/block/${request['block']}`,{
				"rawtx": request['rawtx'],
				"offset": request['offset'],
				"limit": request['limit']
			});
		}

		this.getMemPool = function (request = {}){
			if (typeof request['limit'] == 'undefined') request['limit'] = 10;
			if (typeof request['offset'] == 'undefined') request['offset'] = 0;
			if (typeof request['rawtx'] == 'undefined') request['rawtx'] = false;

			return this.request("GET","/ltc/mempool",{
				"rawtx": request['rawtx'],
				"offset": request['offset'],
				"limit": request['limit']
			});
		}

		this.getAddressInfo = function (request = {}){
			if (typeof request['reverse'] == 'undefined') request['reverse'] = true;
			if (typeof request['limit'] == 'undefined') request['limit'] = 10;
			if (typeof request['offset'] == 'undefined') request['offset'] = 0;
			if (typeof request['rawtx'] == 'undefined') request['rawtx'] = false;

			return this.request("GET",`/ltc/address/${request['address']}`,{
				"reverse":request['reverse'],
				"rawtx":request['rawtx'],
				"offset":request['offset'],
				"limit":request['limit']
			});
		}

		this.getAddressBalance = function (request = {}){

			return this.request("GET",`/ltc/address/${request['address']}/balance`);
		}


		this.listWallet = function (request = {}){
			if (typeof request['limit'] == 'undefined') request['limit'] = 10;
			if (typeof request['offset'] == 'undefined') request['offset'] = 0;

			return this.request("GET","/ltc/wallet",{
				"offset":request['offset'],
				"limit":request['limit']
			});
		}

		this.createWallet = function (request = {}){
			if (typeof request['name'] == 'undefined') request['name'] = null;

			return this.request("POST","/ltc/wallet",{
				"name": request['name']
			});
		}

		this.loadWallet = function (request = {}){

			return this.request("POST",`/ltc/wallet/${request['wallet_id']}/load`,{
				"seed_wif": request['seed_wif'],
				"password": request['password']
			});
		}

		this.unLoadWallet = function (request = {}){

			return this.request("POST",`/ltc/wallet/${request['wallet_id']}/unload`);
		}


		this.listWalletAddress = function (request = {}){

			if (typeof request['address'] == 'undefined') request['address'] = null;
			if (typeof request['hdkeypath'] == 'undefined') request['hdkeypath'] = null;

			if (typeof request['limit'] == 'undefined') request['limit'] = 10;
			if (typeof request['offset'] == 'undefined') request['offset'] = 0;

			return this.request("GET",`/ltc/wallet/${request['wallet_id']}/address`,{
				"address": request['address'],
				"hdkeypath": request['hdkeypath'],
				"offset": request['offset'],
				"limit": request['limit']
			});
		}


		this.createWalletAddress = function (request = {}){

			if (typeof request['seed_wif'] == 'undefined') request['seed_wif'] = null;
			if (typeof request['password'] == 'undefined') request['password'] = null;

			return this.request("POST",`/ltc/wallet/${request['wallet_id']}/address`,{
				"seed_wif": request['seed_wif'],
				"password": request['password']
			});
		}

		this.getWalletBalance = function (request = {}){

			return this.request("GET",`/ltc/wallet/${request['wallet_id']}/balance`);
		}


		this.getWalletTransaction = function (request = {}){

			if (typeof request['category'] == 'undefined') request['category'] = 'all';
			if (typeof request['order'] == 'undefined') request['order'] = 'desc';

			if (typeof request['limit'] == 'undefined') request['limit'] = 10;
			if (typeof request['offset'] == 'undefined') request['offset'] = 0;

			return this.request("GET",`/ltc/wallet/${request['wallet_id']}/transaction`,{
				"category": request['category'],
				"order": request['order'],
				"offset": request['offset'],
				"limit": request['limit']
			});
		}


		this.sendToAddress = function (request = {}){

			if(typeof request['kbfee'] == 'undefined'){
				var blockChain = this.getBlockChain();
				request['kbfee'] = blockChain['medium_fee_per_kb'];
			}

			if (typeof request['seed_wif'] == 'undefined') request['seed_wif'] = null;
			if (typeof request['password'] == 'undefined') request['password'] = null;
			if (typeof request['subtractfeefromamount'] == 'undefined') request['subtractfeefromamount'] = false;

			return this.request("POST",`/ltc/wallet/${request['wallet_id']}/sendtoaddress`,{
				"address": request['address'],
				"amount": request['amount'],
				"seed_wif": request['seed_wif'],
				"password": request['password'],
				"kbfee": request['kbfee'],
				"subtractfeefromamount" : request['subtractfeefromamount']
			});
		}

		this.sendMany = function (request = {}){

			if (typeof request['seed_wif'] == 'undefined') request['seed_wif'] = null;
			if (typeof request['password'] == 'undefined') request['password'] = null;
			if (typeof request['subtractfeefromamount'] == 'undefined') request['subtractfeefromamount'] = false;

			return this.request("POST",`/ltc/wallet/${request['wallet_id']}/sendmany`,{
				"to" : request['to'],
				"seed_wif" : request['seed_wif'],
				"password" : request['password'],
				"subtractfeefromamount" : request['subtractfeefromamount']
			});
		}

		this.sendTransaction = function (request = {}){

			return this.request("POST","/ltc/transaction",{
				"sign_hex" : request['sign_hex']
			});
		}

		this.getTransaction = function (request = {}){

			return this.request("GET",`/ltc/transaction/${request['hash']}`);
		}
	};

util.inherits(BlockSDK.Litecoin, Base);
module.exports = BlockSDK.Litecoin;
//var litecoin = new BlockSDK.Litecoin('B1zZARyW1d2FdqWxPUpB79izHmtAc2Az693WF9DD'); console.log(litecoin.getBlockChain());
