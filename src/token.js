const Base = require('./base');
var BlockSDK = BlockSDK || {};

const util = require('util');
	
	BlockSDK.Token = function(api_token = ''){

	this.api_token = api_token;

	Base.apply(this, arguments);
		
	this.getUsages = function(request = {}){
		
		return this.request("GET","/token/usage",{
				"stat_date": request['stat_date'],
				"end_date": request['end_date']
			});
	}
		
};

util.inherits(BlockSDK.Token, Base);

module.exports = BlockSDK.Token;


//var token = new BlockSDK.Token('B1zZARyW1d2FdqWxPUpB79izHmtAc2Az693WF9DD'); console.log(price.listPrice());
