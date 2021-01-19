const Base = require('./base');
var BlockSDK = BlockSDK || {};

const util = require('util');
	
	BlockSDK.Market = function(api_token = ''){

	this.api_token = api_token;

	Base.apply(this, arguments);
  
  this.getExchanges = function (){
			return this.request("GET","/market/exchanges");
		}
    
  this.getTrades = function (request = {}){
			if (typeof request['from'] == 'undefined') request['from'] = null;
			if (typeof request['to'] == 'undefined') request['to'] = "USD";


			return this.request("GET","/market/trades",{
				"from": request['from'],
				"to": request['to']
			});
		}
		
	this.getRates = function(request = {}){
		
		return this.request("GET",`/market/rates/${request['from']}`,{
				"to": request['to'],
				"from_amount": request['from_amount']
			});
	}
  
  this.getExchangeTrades = function (request = {}){
			if (typeof request['from'] == 'undefined') request['from'] = null;
			if (typeof request['to'] == 'undefined') request['to'] = "USD";


			return this.request("GET",`/market/trades/${request['exchage_id']}`,{
				"from": request['from'],
				"to": request['to']
			});
		}
    
    this.getExchangeTrades = function (request = {}){
			if (typeof request['to'] == 'undefined') request['to'] = "USD";


			return this.request("GET",`/market/rates/${request['exchage_id']}/${request['from']}`,{
				"to": request['to'],
        "from_amount": request['from_amount']
			});
		}
		
};

util.inherits(BlockSDK.Market, Base);

module.exports = BlockSDK.Market;


//var token = new BlockSDK.Token('B1zZARyW1d2FdqWxPUpB79izHmtAc2Az693WF9DD'); console.log(price.listPrice());
