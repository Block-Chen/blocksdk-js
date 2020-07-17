const Base = require('./base');
var BlockSDK = BlockSDK || {};

const util = require('util');

	BlockSDK.Ethereum = function(api_token = ''){

			Base.apply(this, arguments);

			this.api_token = api_token;

		    this.getBlockChain = function (){
			return this.request("GET","/eth/block");}

            this.getBlock = function(request={}){

            if ( typeof request['rawtx'] == 'undefined') request['rawtx']=false;

            if ( typeof request['offset'] == 'undefined') request['offset']=0;

			if ( typeof request['limit'] == 'undefined') request['limit']=10;

			return this.request("GET",`/eth/block/${request['block']}`,{
				"rawtx" : request['rawtx'],"offset": request['offset'],"limit" : request['limit']
			});
		}

		   this.getMemPool = function(request = {}) {
			if ( typeof request['rawtx'] == 'undefined') request['rawtx']=false;

			if ( typeof request['offset'] == 'undefined') request['offset']=0;

			if ( typeof request['limit'] == 'undefined') request['limit']=10;

			return this.request("GET",`/eth/mempool`,{
				"rawtx" : request['rawtx'],
				"offset" : request['offset'],
				"limit" : request['limit']
			});
		}

		  this.listAddress = function(request = {}){
			if ( typeof request['offset'] == 'undefined') request['offset']=0;

			if ( typeof request['limit'] == 'undefined') request['limit']=10;

			return this.request("GET",`/eth/address`,{
				"offset" : request['offset'],
				"limit" : request['limit']
			});
		}

		this.loadAddress = function(request = {}){
			return this.request("POST",`/eth/address/${request['address']}/load`,{
				"seed_wif" : request['seed_wif'],"password" : request['password']});
		}

		this.unLoadAddress = function(request = {}){
			return this.request("POST",`/eth/address/{$request['address']}/unload`);
		}

		this.createAddress = function(request = {}){
			if ( typeof request['name'] == 'undefined') request['name'] = null;
			return this.request("POST",`/eth/address`,{
				"name" : request['name']});
		}

		this.getAddressInfo = function(request = {}){
			if ( typeof request['reverse'] == 'undefined' ) request['reverse']=true;

			if ( typeof request['rawtx'] == 'undefined' ) request['rawtx']=null;

			if ( typeof request['offset'] == 'undefined') request['offset']=0;

			if ( typeof request['limit'] == 'undefined') request['limit']=10;


			return this.request("GET",`/eth/address/${request['address']}`,{
				"reverse" : request['reverse'],
				"rawtx"  : request['rawtx'],
				"offset" : request['offset'],
				"limit"  : request['limit']
			});
		}

		 this.getAddressBalance = function(request = {}){

			return this.request("GET",`/eth/address/${request['address']}/balance`); }


		this.sendToAddress = function(request = {}) {
			if ( typeof request['gwei'] == 'undefined')
			{
			    var blockChain = this.getBlockChain();
        	    if ( typeof request['medium_gwei'] !== 'undefined')
        		request['gwei'] = blockChain['medium_gwei'] ;
			}

			if(typeof request['private_key'] == 'undefined') request['private_key']=null;

			if(typeof request['password'] == 'undefined') request['password']=null;

			if(typeof request['gas_limit'] == 'undefined') request['gas_limit']=null;

			return this.request("POST",`/eth/address/${request['from']}/sendtoaddress`,{
				"address" : request['to'],
				"amount" : request['amount'],
				"private_key" : request['private_key'],
				"password" : request['password'],
				"gwei" : request['gwei'],
				"gas_limit" : request['gas_limit']
			});
		}



		this.sendTransaction = function(request = {}){
			return this.request("POST",`/eth/transaction`,{
				"sign_hex" : request['sign_hex']
			});
		}

		this.getTransaction = function(request = {}){
			return this.request("POST",`/eth/transaction`,{
				"sign_hex" : request['sign_hex']
			});
		}

}
module.exports = BlockSDK.Ethereum;
util.inherits(BlockSDK.Ethereum, Base);

//  var ethereum = new BlockSDK.Ethereum('B1zZARyW1d2FdqWxPUpB79izHmtAc2Az693WF9DD');
//  console.log(ethereum.getTransaction({
//     "hash" : "0x123456789"
// }));
