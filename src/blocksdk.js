const Base = require('./base');
const util = require('util');
var bitcoinInstance = require('./bitcoin');
var ethereumInstance = require('./ethereum');
var litecoinInstance = require('./litecoin');
var moneroInstance = require('./monero');
var priceInstance = require('./price');
var webhookInstance = require('./webhook');
var dashInstance = require('./dash');
var bitcoincashInstance = require('./bitcoincash');

	
var BlockSDK = function(api_token = ''){
		Base.apply(this, arguments);

		this.api_token = api_token;

		this.createBitcoin = function(){

			return new bitcoinInstance(this.api_token);
		}

		this.createEthereum = function(){

			return new ethereumInstance(this.api_token);
		}

		this.createLitecoin = function(){

			return new litecoinInstance(this.api_token);
		}


		this.createMonero = function(){

			return new moneroInstance(this.api_token);
		}


		this.createPrice = function(){

			return new priceInstance(this.api_token);
		}


		this.createWebHook = function(){

			return new webhookInstance(this.api_token);
		}


		this.createDash = function(){

			return new dashInstance(this.api_token);
		}

		
		this.createBitcoinCash = function(){

			return new bitcoincashInstance(this.api_token);
		}


};
//util.inherits(BlockSDK, BlockSDK.Base);
module.exports = BlockSDK;


// var blockSDKInstance  =  new BlockSDK('B1zZARyW1d2FdqWxPUpB79izHmtAc2Az693WF9DD'); 
// var ethClient = blockSDKInstance.createEthereum();	
// var output = ethClient.getBlockChain();
// console.log(output);

// var btcClient = blockSDKInstance.createBitcoin();		

// var output = btcClient.getTransactionTracking({  "hash":"407f7a89c29bbf5f268ea4e78ad40feb380391acc71d4f79f911391dccfbf54a"});
// console.log(output);
