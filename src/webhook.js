const Base = require('./base');
var BlockSDK = BlockSDK || {};

const util = require('util');
	
	BlockSDK.WebHook = function(api_token = ''){

		this.api_token = api_token;
		
		Base.apply(this, arguments);

		this.create = function(request = {}){ 
			
			return this.request("POST","/hooks",{
				"callback_url": request['callback_url'],
				"symbol": request['symbol'],
				"address": request['address']
			});
		}
		
		this.getWebhooks = function(request = {}){ 
			if (typeof request['offset'] == 'undefined') request['offset'] = 0;
			if (typeof request['limit'] == 'undefined') request['limit'] = 10;
			
			return this.request("GET","/hooks",{
				"offset": request['offset'],
				"limit": request['limit']
			});
		}
		
		this.get = function(request = {}){ 

			return this.request("GET",`/hooks/${request['hook_id']}`);
		}
		
		this.delete = function(request = {}){ 

			return this.request("DELETE",`/hooks/${request['hook_id']}`);
		}
		
		this.getResponses = function(request = {}){ 
			if (typeof request['offset'] == 'undefined') request['offset'] = 0;
			if (typeof request['limit'] == 'undefined') request['limit'] = 10;
			
			return this.request("GET","/hooks/responses",{
				"offset": request['offset'],
				"limit": request['limit']
			});			
		}		
		
		this.getHookResponses = function(request = {}){ 

			if (typeof request['offset'] == 'undefined') request['offset'] = 0;
			if (typeof request['limit'] == 'undefined') request['limit'] = 10;

			return this.request("GET",`/hooks/${request['hook_id']}/responses`,{
				"offset": request['offset'],
				"limit": request['limit']
			});			
		}
	};

util.inherits(BlockSDK.WebHook, Base);
module.exports = BlockSDK.WebHook;
//var webHook = new BlockSDK.WebHook('B1zZARyW1d2FdqWxPUpB79izHmtAc2Az693WF9DD');console.log(webHook.list({"offset":0,"limit":10}));
