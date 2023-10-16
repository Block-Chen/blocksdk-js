const axios = require('axios');

class base {

    constructor(api_token,endpoint="https://testnet-api.blocksdk.com") {
        this.api_token = api_token;
        this.endpoint = endpoint;
    }

    async request(method,path,data = {}){
        let url = this.endpoint + "/v3" + path


        let result = {}

        try {
            if(method == "GET") {
                url = url + "?" + Object.entries(data).map(e => e.join('=')).join('&');

                result = await axios.get(url, {
                    withCredentials: true,
                    headers : {
                        'x-api-token'   : this.api_token
                    }
                })

            }else if(method == "POST"){
                result = await axios.post(url, JSON.stringify(data),{
                    withCredentials: true,
                    headers : {
                        'Content-Type'  : 'application/json',
                        'x-api-token'   : this.api_token
                    }
                })
            }

            result.data.payload = {
                ...result.data.payload,
                requestData : data
            }
            return result.data.payload;
        }catch (e) {
            console.error(url)
            console.log(e)
            return false
        }

        return false
    }
}

module.exports = base
