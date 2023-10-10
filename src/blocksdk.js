const Ethereum = require('./ethereum')
const Avalanche = require('./avalanche')
const EthereumClassic = require('./ethereumclassic')
const Klaytn = require('./klaytn')
const BinanceSmart = require('./binancesmart')
const Polygon = require('./polygon')

class blocksdk {

    constructor(api_token, endpoint = "https://testnet-api.blocksdk.com") {
        this.ethereum = new Ethereum(api_token, endpoint);
        this.avalanche = new Avalanche(api_token, endpoint);
        this.ethereumClassic = new EthereumClassic(api_token, endpoint);
        this.klaytn = new Klaytn(api_token, endpoint);
        this.binanceSmart = new BinanceSmart(api_token, endpoint);
        this.polygon = new Polygon(api_token, endpoint);
    }

}

module.exports = blocksdk
