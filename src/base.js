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
                let fd = new FormData();

                for (var index in data) {
                    if (typeof data[index] == 'object'){
                        for (var index2 in data[index]) {
                            fd.append(index + `[${index2}]`, data[index][index2])
                        }
                    }else {
                        fd.append(index, data[index])
                    }
                }
                result = await axios.post(url, fd,{
                    withCredentials: true,
                    headers : {
                        'Content-Type'  : 'multipart/form-data',
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