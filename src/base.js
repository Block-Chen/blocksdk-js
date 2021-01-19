var BlockSDK = BlockSDK || {};

BlockSDK.Base = function (api_token = ''){

    this.api_token = api_token; 

    function DateAdd(date, type, amount){
    var y = date.getFullYear(),
        m = date.getMonth(),
        d = date.getDate();
    if(type === 'y'){
        y += amount;
    };
    if(type === 'm'){
        m += amount;
    };
    if(type === 'd'){
        d += amount;
    };
    return new Date(y, m, d);
	}

	this.request = function(method,path,data = {}){

			var url = "https://api.blocksdk.com/v1".concat(path); 
			var len_dict = Object.keys(data).length; 

			if(method == "GET" && len_dict > 0)
			{
				url = url.concat("?");

				for (var key in data){

					var value = data[key];

					if(value == true){
						url = url.concat(key,"=true&");
					}

					else if(value == false){
						url = url.concat(key,"=false&");
					}

					else
					{
						url = url.concat(key,"=",value,"&");
					}
				}
			}

			const request = require('request');
			var deasync = require('deasync');
			var ultimate_result = null;
			if(method == "POST"){
				request({
				    url: url,
				    method: "POST",
				    json: true,
				    body: data,
				    headers: { 'Content-Type': 'application/json','x-api-key': this.api_token}
	       
				}, function (error, response, body){
				    //console.log(response);
			var result = response;
			var header_array = {}; 
			var result_decode = {}; 
			if (result.body){
				result_decode = result.body;
			}			

			result_decode['HTTP_HEADER'] = result.headers;
			result_decode['HTTP_HEADER']['statusCode'] = result.statusCode;
			var result_row = result_decode['HTTP_HEADER'];


			for (var key in result_row) {
		   		 if (result_row.hasOwnProperty(key)) {}
		    	else{
		    			if(key == "statusCode"){
		   		 		result_row[key] = 0;
		   		 	}
					else if(key.substr(0, 1) == "\t"){
						result_row[Object.keys(result_row)[Object.keys(result_row).length - 1]] += "\r\n\t" + key.trim();
					}
					else{
						result_row[Object.keys(header_array)[Object.keys(header_array).length - 1]] += key.trim();
					}
		    	}

			}
				ultimate_result = result_decode;
				result_decode['HTTP_HEADER'] = result_row;
				ultimate_result = result_decode;
				return result_decode;
				});
			}
			else{
					request({
				    url: url,
				    method: method,
				    headers: { 'Content-Type': 'application/json','x-api-key': this.api_token}
	       		}, function (error, response, body){
				    //console.log(response);
				    //console.log(url);
			var result = response;
			var header_array = {}; 
			var result_decode = {}; 
			if (result.body){
				result_decode = JSON.parse(result.body);
			}			

			result_decode['HTTP_HEADER'] = result.headers;
			result_decode['HTTP_HEADER']['statusCode'] = result.statusCode;
			var result_row = result_decode['HTTP_HEADER'];

			for (var key in result_row) {
		   		 if (result_row.hasOwnProperty(key)) {}
		    	else{
		    			if(key == "statusCode"){
		   		 		result_row[key] = 0;
		   		 	}
					else if(key.substr(0, 1) == "\t"){
						result_row[Object.keys(result_row)[Object.keys(result_row).length - 1]] += "\r\n\t" + key.trim();
					}
					else{
						result_row[Object.keys(header_array)[Object.keys(header_array).length - 1]] += key.trim();
					}
		    	}
			}
				result_decode['HTTP_HEADER'] = result_row;
				ultimate_result = result_decode;
				return result_decode;
				});


			}	
				while((ultimate_result == null))
			    {
			         deasync.runLoopOnce();
			    }
			    return ultimate_result;
		}
};

module.exports = BlockSDK.Base;
//var abc = new BlockSDK.Base('B1zZARyW1d2FdqWxPUpB79izHmtAc2Az693WF9DD'); console.log(abc.listPrice());
