const Ethereum = require('./ethereum')
const Avalanche = require('./avalanche')
const EthereumClassic = require('./ethereumclassic')
const Klaytn = require('./klaytn')
const BinanceSmart = require('./binancesmart')
const Polygon = require('./polygon')

class blocksdk {

    constructor(api_token) {
        this.ethereum = new Ethereum(api_token);
        this.avalanche = new Avalanche(api_token);
        this.ethereumClassic = new EthereumClassic(api_token);
        this.klaytn = new Klaytn(api_token);
        this.binanceSmart = new BinanceSmart(api_token);
        this.polygon = new Polygon(api_token);
    }


}

module.exports = blocksdk