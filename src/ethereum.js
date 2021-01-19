const Base = require('./base');
var BlockSDK = BlockSDK || {};

const util = require('util');

	BlockSDK.Ethereum = function(api_token = ''){

			Base.apply(this, arguments);

			this.api_token = api_token;

		    this.getBlockChain = function (){
			return this.request("GET","/eth/info");}

            this.getBlock = function(request={}){

            if ( typeof request['rawtx'] == 'undefined') request['rawtx']=false;

            if ( typeof request['offset'] == 'undefined') request['offset']=0;

			if ( typeof request['limit'] == 'undefined') request['limit']=10;

			return this.request("GET",`/eth/blocks/${request['block']}`,{
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

		  this.getAddress = function(request = {}){
			if ( typeof request['offset'] == 'undefined') request['offset']=0;

			if ( typeof request['limit'] == 'undefined') request['limit']=10;

			return this.request("GET",`/eth/addresses`,{
				"offset" : request['offset'],
				"limit" : request['limit']
			});
		}

		this.loadAddress = function(request = {}){
			return this.request("POST",`/eth/addresses/${request['address']}/load`,{
				"private_key" : request['private_key'],"password" : request['password']});
		}

		this.unloadAddress = function(request = {}){
			return this.request("POST",`/eth/addresses/{$request['address']}/unload`);
		}

		this.createAddress = function(request = {}){
			if ( typeof request['name'] == 'undefined') request['name'] = null;
			return this.request("POST",`/eth/addresses`,{
				"name" : request['name']});
		}

		this.getAddressInfo = function(request = {}){
			if ( typeof request['reverse'] == 'undefined' ) request['reverse']=true;

			if ( typeof request['rawtx'] == 'undefined' ) request['rawtx']=null;

			if ( typeof request['offset'] == 'undefined') request['offset']=0;

			if ( typeof request['limit'] == 'undefined') request['limit']=10;


			return this.request("GET",`/eth/addresses/${request['address']}`,{
				"reverse" : request['reverse'],
				"rawtx"  : request['rawtx'],
				"offset" : request['offset'],
				"limit"  : request['limit']
			});
		}

		 this.getAddressBalance = function(request = {}){

			return this.request("GET",`/eth/addresses/${request['address']}/balance`); }


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

			return this.request("POST",`/eth/addresses/${request['from']}/sendtoaddress`,{
				"to" : request['to'],
				"amount" : request['amount'],
				"private_key" : request['private_key'],
				"password" : request['password'],
				"gwei" : request['gwei'],
				"gas_limit" : request['gas_limit']
			});
		}



		this.sendTransaction = function(request = {}){
			return this.request("POST",`/eth/transactions/send`,{
				"hex" : request['hex']
			});
		}

		this.getTransaction = function(request = {}){
			return this.request("GET",`/eth/transactions/${request['hash']}`); }
		}

		this.getErc20 = function(request = {}){
			return this.request("GET",`/eth/erc20-tokens/${request['contract_address']}`); }
		}
		
		this.getErc20Balance = function(request = {}){
			return this.request("GET",`/eth/erc20-tokens/${request['contract_address']}/${request['from']}/balance`); }
		}
		
		this.getErc20Transfer = function(request = {}) {
			if ( typeof request['gwei'] == 'undefined')
			{
			    var blockChain = this.getBlockChain();
        	    if ( typeof request['medium_gwei'] !== 'undefined')
        		request['gwei'] = blockChain['high_gwei'] ;
			}

			if(typeof request['private_key'] == 'undefined') request['private_key']=null;

			if(typeof request['password'] == 'undefined') request['password']=null;

			if(typeof request['gas_limit'] == 'undefined') request['gas_limit']=null;

			return this.request("POST",`/eth/erc20-tokens/${request['contract_address']}/${request['from']}/transfer`,{
				"to" : request['to'],
				"amount" : request['amount'],
				"private_key" : request['private_key'],
				"password" : request['password'],
				"gwei" : request['gwei'],
				"gas_limit" : request['gas_limit']
			});
		}

}
module.exports = BlockSDK.Ethereum;
util.inherits(BlockSDK.Ethereum, Base);

//  var ethereum = new BlockSDK.Ethereum('B1zZARyW1d2FdqWxPUpB79izHmtAc2Az693WF9DD');
//  console.log(ethereum.getTransaction({
//     "hash" : "0x123456789"
// }));
