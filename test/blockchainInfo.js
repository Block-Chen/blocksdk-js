const BLOCSKDK = require("../src/blocksdk")

const Ethereum = require('../src/ethereum')
const Avalanche = require('../src/avalanche')
const Klaytn = require('../src/klaytn')
const EthereumClassic = require('../src/ethereumclassic')
const Polygon = require('../src/polygon')
const BinanceSmart = require('../src/binancesmart')

const BLOCKSDK_API_TOKEN = ""


async function run(){
    let ethereumClient = new Ethereum(BLOCKSDK_API_TOKEN)
    let avalancheClient = new Avalanche(BLOCKSDK_API_TOKEN)
    let klaytnClient = new Klaytn(BLOCKSDK_API_TOKEN)
    let ethereumclassicClient = new EthereumClassic(BLOCKSDK_API_TOKEN)
    let polygonClient = new Polygon(BLOCKSDK_API_TOKEN)
    let binancesmartClient = new BinanceSmart(BLOCKSDK_API_TOKEN)

    let result = await ethereumClient.GetBlockChainInfo()
    console.log("ethereumClient result",result)

    result = await avalancheClient.GetBlockChainInfo()
    console.log("avalancheClient result",result)

    result = await klaytnClient.GetBlockChainInfo()
    console.log("klaytnClient result",result)

    result = await ethereumclassicClient.GetBlockChainInfo()
    console.log("ethereumclassicClient result",result)

    result = await polygonClient.GetBlockChainInfo()
    console.log("polygonClient result",result)

    result = await binancesmartClient.GetBlockChainInfo()
    console.log("binancesmartClient result",result)

}
//run()




async function run2(){
    let blocksdk = new BLOCSKDK(BLOCKSDK_API_TOKEN)

    let result = await blocksdk.ethereum.GetBlockChainInfo()
    console.log("ethereumClient2 result",result)

    result = await blocksdk.avalanche.GetBlockChainInfo()
    console.log("avalancheClient2 result",result)

    result = await blocksdk.klaytn.GetBlockChainInfo()
    console.log("klaytnClient2 result",result)

    result = await blocksdk.ethereumClassic.GetBlockChainInfo()
    console.log("ethereumclassicClient2 result",result)

    result = await blocksdk.polygon.GetBlockChainInfo()
    console.log("polygonClient result",result)

    result = await blocksdk.binanceSmart.GetBlockChainInfo()
    console.log("binancesmartClient2 result",result)

}

run2()