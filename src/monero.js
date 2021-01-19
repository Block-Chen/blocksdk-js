const Base = require('./base');
var BlockSDK = BlockSDK || {};

const util = require('util');

	BlockSDK.Monero = function(api_token = ''){

		Base.apply(this, arguments);

		this.api_token = api_token;

		this.getBlockChain = function (){
			return this.request("GET","/xmr/info");
		}

		this.getBlock = function (request = {}){
			if (typeof request['limit'] == 'undefined') request['limit'] = 10;
			if (typeof request['offset'] == 'undefined') request['offset'] = 0;
			if (typeof request['rawtx'] == 'undefined') request['rawtx'] = false;


			return this.request("GET",`/xmr/blocks/${request['block']}`,{
				"rawtx": request['rawtx'],
				"offset": request['offset'],
				"limit": request['limit']
			});
		}

		this.getMemPool = function (request = {}){
			if (typeof request['limit'] == 'undefined') request['limit'] = 10;
			if (typeof request['offset'] == 'undefined') request['offset'] = 0;
			if (typeof request['rawtx'] == 'undefined') request['rawtx'] = false;

			return this.request("GET","/xmr/mempool",{
				"rawtx": request['rawtx'],
				"offset": request['offset'],
				"limit": request['limit']
			});
		}
		this.getAddresses = function (request = {}){
			if (typeof request['limit'] == 'undefined') request['limit'] = 10;
			if (typeof request['offset'] == 'undefined') request['offset'] = 0;

			return this.request("GET","/xmr/addresses",{
				"offset": request['offset'],
				"limit": request['limit']
			});
		}

		this.createAddress = function (request = {}){
			if (typeof request['name'] == 'undefined') request['name'] = null;

			return this.request("POST","/xmr/addresses",{
				"name": request['name']
			});
		}

		this.getAddressInfo = function (request = {}){

			if (typeof request['limit'] == 'undefined') request['limit'] = 10;
			if (typeof request['offset'] == 'undefined') request['offset'] = 0;

			return this.request("GET",`/xmr/addresses/${request['address_id']}`,{
				"private_spend_key":request['private_spend_key'],
				"offset":request['offset'],
				"limit":request['limit']
			});
		}


		this.getAddressBalance = function (request = {}){

			return this.request("GET",`/xmr/addresses/${request['address_id']}/balance`,{
				"private_spend_key":request['private_spend_key'],
			});
		}

		this.loadAddress = function (request = {}){

			return this.request("POST",`/xmr/addresses/${request['address_id']}/load`,{
				"private_spend_key":request['private_spend_key'],
				"password":request['password'],
			});
		}

		this.unloadAddress = function (request = {}){

			return this.request("POST",`/xmr/addresses/${request['address_id']}/unload`);
		}

		this.sendToAddress = function (request = {}){

			if(typeof request['kbfee'] == 'undefined'){
				var blockChain = this.getBlockChain();
				request['kbfee'] = blockChain['medium_fee_per_kb'];
			}

			if (typeof request['password'] == 'undefined') request['password'] = null;
			if (typeof request['private_spend_key'] == 'undefined') request['private_spend_key'] = null;
			if (typeof request['subtractfeefromamount'] == 'undefined') request['subtractfeefromamount'] = false;

			return this.request("POST",`/xmr/addresses/${request['address_id']}/sendtoaddress`,{
				"address": request['address'],
				"amount": request['amount'],
				"private_spend_key": ['private_spend_key'],
				"password": request['password'],
				"kbfee": request['kbfee'],
				"subtractfeefromamount": request['subtractfeefromamount']
			});
		}
		
		this.sendTransaction = function (request = {}){

			return this.request("GET","/xmr/transactions/send",{
				"hex":request['hex'],
			});
		}

		this.getTransaction = function (request = {}){

			return this.request("GET",`/xmr/transactions/${request['hash']}`);
		}
	};


util.inherits(BlockSDK.Monero, Base);
module.exports = BlockSDK.Monero;
// var monero = new BlockSDK.Monero('B1zZARyW1d2FdqWxPUpB79izHmtAc2Az693WF9DD'); console.log(monero.getBlockChain());
