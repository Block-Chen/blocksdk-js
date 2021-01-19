const Base = require('./base');
var BlockSDK = BlockSDK || {};

const util = require('util');

	BlockSDK.Dash = function(api_token = ''){

		Base.apply(this, arguments);

		this.api_token = api_token;


		this.getBlockChain = function (){
			return this.request("GET","/dash/info");
		}

		this.getBlock = function (request = {}){
			if (typeof request['limit'] == 'undefined') request['limit'] = 10;
			if (typeof request['offset'] == 'undefined') request['offset'] = 0;
			if (typeof request['rawtx'] == 'undefined') request['rawtx'] = false;


			return this.request("GET",`/dash/blocks/${request['block']}`,{
				"rawtx": request['rawtx'],
				"offset": request['offset'],
				"limit": request['limit']
			});
		}

		this.getMemPool = function (request = {}){
			if (typeof request['limit'] == 'undefined') request['limit'] = 10;
			if (typeof request['offset'] == 'undefined') request['offset'] = 0;
			if (typeof request['rawtx'] == 'undefined') request['rawtx'] = false;

			return this.request("GET","/dash/mempool",{
				"rawtx": request['rawtx'],
				"offset": request['offset'],
				"limit": request['limit']
			});
		}

		this.getAddressInfo = function (request = {}){
			if (typeof request['limit'] == 'undefined') request['limit'] = 10;
			if (typeof request['offset'] == 'undefined') request['offset'] = 0;
			if (typeof request['rawtx'] == 'undefined') request['rawtx'] = null;

			return this.request("GET",`/dash/addresses/${request['address']}`,{
				"reverse":request['reverse'],
				"rawtx":request['rawtx'],
				"offset":request['offset'],
				"limit":request['limit']
			});
		}


		this.getAddressBalance = function (request = {}){

			return this.request("GET",`/dash/addresses/${request['address']}/balance`);
		}


		this.getWallets = function (request = {}){
			if (typeof request['limit'] == 'undefined') request['limit'] = 10;
			if (typeof request['offset'] == 'undefined') request['offset'] = 0;

			return this.request("GET","/dash/wallets",{
				"offset":request['offset'],
				"limit":request['limit']
			});
		}
		
		
		this.getWallet = function (request = {}){

			return this.request("GET",`/dash/wallets/${request['wallet_id']}`);
		}

		this.createHdWallet = function (request = {}){
			if (typeof request['name'] == 'undefined') request['name'] = null;

			return this.request("POST","/dash/wallets/hd",{
				"name": request['name']
			});
		}

		this.loadWallet = function (request = {}){
			return this.request("POST",`/dash/wallet/${request['wallet_id']}/load`,{
				"wif": request['wif'],
				"password": request['password']
			});
		}

		this.unloadWallets = function (request = {}){
			return this.request("POST",`/dash/wallets/${request['wallet_id']}/unload`);
		}


		this.getWalletAddresses = function (request = {}){
			if (typeof request['address'] == 'undefined') request['address'] = null;
			if (typeof request['hdkeypath'] == 'undefined') request['hdkeypath'] = null;

			if (typeof request['limit'] == 'undefined') request['limit'] = 10;
			if (typeof request['offset'] == 'undefined') request['offset'] = 0;

			return this.request("GET",`/dash/wallets/${request['wallet_id']}/addresses`,{
				"address": request['address'],
				"hdkeypath": request['hdkeypath'],
				"offset": request['offset'],
				"limit": request['limit']
			});
		}


		this.createWalletAddress = function (request = {}){
			if (typeof request['wif'] == 'undefined') request['wif'] = null;
			if (typeof request['password'] == 'undefined') request['password'] = null;

			return this.request("POST",`/dash/wallets/${request['wallet_id']}/addresses`,{
				"wif": request['wif'],
				"password": request['password']
			});
		}

		this.getWalletBalance = function (request = {}){

			return this.request("GET",`/dash/wallets/${request['wallet_id']}/balance`);
		}


		this.getWalletTransactions = function (request = {}){

			if (typeof request['type'] == 'undefined') request['type'] = 'all';
			if (typeof request['order'] == 'undefined') request['order'] = 'desc';

			if (typeof request['limit'] == 'undefined') request['limit'] = 10;
			if (typeof request['offset'] == 'undefined') request['offset'] = 0;

			return this.request("GET",`/dash/wallets/${request['wallet_id']}/transaction`,{
				"type": request['type'],
				"order": request['order'],
				"offset": request['offset'],
				"limit": request['limit']
			});
		}

		this.sendToAddress = function (request = {}){

			if(typeof request['kbfee'] == 'undefined'){
				var blockChain = this.getBlockChain();
				if(typeof blockChain['medium_fee_per_kb'] !== 'undefined'){
				request['kbfee'] = blockChain['medium_fee_per_kb'];
			}
			}

			if (typeof request['wif'] == 'undefined') request['wif'] = null;
			if (typeof request['password'] == 'undefined') request['password'] = null;
			if (typeof request['subtractfeefromamount'] == 'undefined') request['subtractfeefromamount'] = false;

			return this.request("POST",`/dash/wallets/${request['wallet_id']}/sendtoaddress`,{
				"address": request['address'],
				"amount": request['amount'],
				"wif": request['wif'],
				"password": request['password'],
				"kbfee": request['kbfee'],
				"subtractfeefromamount" : request['subtractfeefromamount']
			});
		}

		this.sendMany = function (request = {}){

			if (typeof request['wif'] == 'undefined') request['wif'] = null;
			if (typeof request['password'] == 'undefined') request['password'] = null;
			if (typeof request['subtractfeefromamount'] == 'undefined') request['subtractfeefromamount'] = false;

			return this.request("POST",`/dash/wallets/${request['wallet_id']}/sendmany`,{
				"to" : request['to'],
				"wif" : request['wif'],
				"password" : request['password'],
				"subtractfeefromamount" : request['subtractfeefromamount']
			});
		}

		this.sendTransaction = function (request = {}){

			return this.request("POST","/dash/transactions/send",{
				"hex" : request['hex']
			});
		}

		this.getTransaction = function (request = {}){

			return this.request("GET",`/dash/transactions/${request['hash']}`);
		}
	};


util.inherits(BlockSDK.Dash, Base);
module.exports = BlockSDK.Dash;
// var dash = new BlockSDK.Dash('B1zZARyW1d2FdqWxPUpB79izHmtAc2Az693WF9DD');
// console.log(dash.getTransaction({
//        "hash" : "fa6c191a429d65552b9f0a572e24d8edbfb5e08ab4c41afc1914e60d14be14fc"
//  }));
