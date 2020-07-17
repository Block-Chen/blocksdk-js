const Base = require('./base');
var BlockSDK = BlockSDK || {};

const util = require('util');
	
	BlockSDK.WebHook = function(api_token = ''){

		this.api_token = api_token;
		
		Base.apply(this, arguments);

		this.create = function(request = {}){ 
			
			return this.request("POST","/hook",{
				"callback": request['callback'],
				"category": request['category'],
				"address": request['address']
			});
		}
		
		this.list = function(request = {}){ 
			if (typeof request['offset'] == 'undefined') request['offset'] = 0;
			if (typeof request['limit'] == 'undefined') request['limit'] = 10;
			
			return this.request("GET","/hook",{
				"offset": request['offset'],
				"limit": request['limit']
			});
		}
		
		this.get = function(request = {}){ 

			return this.request("GET",`/hook/${request['hook_id']}`);
		}
		
		this.delete = function(request = {}){ 

			return this.request("POST",`/hook/${request['hook_id']}/delete`);
		}
		
		this.listResponse = function(request = {}){ 
			if (typeof request['offset'] == 'undefined') request['offset'] = 0;
			if (typeof request['limit'] == 'undefined') request['limit'] = 10;
			
			return this.request("GET","/hook/response",{
				"offset": request['offset'],
				"limit": request['limit']
			});			
		}		
		
		this.getResponse = function(request = {}){ 

			if (typeof request['offset'] == 'undefined') request['offset'] = 0;
			if (typeof request['limit'] == 'undefined') request['limit'] = 10;

			return this.request("GET",`/hook/${request['hook_id']}/response`,{
				"offset": request['offset'],
				"limit": request['limit']
			});			
		}
	};

util.inherits(BlockSDK.WebHook, Base);
module.exports = BlockSDK.WebHook;
//var webHook = new BlockSDK.WebHook('B1zZARyW1d2FdqWxPUpB79izHmtAc2Az693WF9DD');console.log(webHook.list({"offset":0,"limit":10}));