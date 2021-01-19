const Base = require('./base');
var BlockSDK = BlockSDK || {};

const util = require('util');
	
	BlockSDK.Tool = function(api_token = ''){

	this.api_token = api_token;

	Base.apply(this, arguments);
		
	this.getHashType = function(request = {}){
		
		return this.request("GET",`/tools/hash-type/${request['hash']}`);
	}
		
};

util.inherits(BlockSDK.Tool, Base);

module.exports = BlockSDK.Tool;


//var price = new BlockSDK.Tool('B1zZARyW1d2FdqWxPUpB79izHmtAc2Az693WF9DD'); console.log(price.listPrice());
