const Base = require('./base');
var BlockSDK = BlockSDK || {};

const util = require('util');
	
	BlockSDK.Price = function(api_token = ''){

	this.api_token = api_token;

	Base.apply(this, arguments);
		
	this.listPrice = function(request = {}){
		
		return this.request("GET","/price");
	}
		
};

util.inherits(BlockSDK.Price, Base);

module.exports = BlockSDK.Price;


//var price = new BlockSDK.Price('B1zZARyW1d2FdqWxPUpB79izHmtAc2Az693WF9DD'); console.log(price.listPrice());