const Base = require('./base');

class klaytn extends Base{
    GetBlockChainInfo(){
        return this.request(`GET`,`/klay/info`);
    }
    GetBlock(request){
        return this.request(`GET`,`/klay/block/${request['block']}`,request);
    }
    GetAddresses(request){
        return this.request(`GET`,`/klay/address`,request);
    }
    CreateAddress(request){
        return this.request(`POST`,`/klay/address`,request);
    }
    GetAddressInfo(request){
        return this.request(`GET`,`/klay/address/${request['address']}/info`,request);
    }
    GetAddressBalance(request){

        return this.request(`GET`,`/klay/address/${request['address']}/balance`);
    }
    Send(request){
        return this.request(`POST`,`/klay/address/${request['from']}/send`,request);
    }
    SendTransaction(request){
        return this.request(`POST`,`/klay/transaction/send`,request);
    }
    GetTransaction(request){

        return this.request(`GET`,`/klay/transaction/${request['hash']}`);
    }
    GetTokenInfo(request){
        return this.request(`GET`,`/klay/token/${request['contract_address']}/info`);
    }
    SendToken(request){
        return this.request(`POST`,`/klay/token/${request['contract_address']}/${request['from']}/transfer`,request);
    }
    GetTokenBalance(request){
        return this.request(`GET`,`/klay/token/${request['contract_address']}/${request['from']}/balance`);
    }
    GetTokenTxs(request){
        return this.request(`GET`,`/klay/token/${request['from_address']}/transactions`,request);
    }
    GetTokenContractTxs(request){
        return this.request(`GET`,`/klay/token/${request['contract_address']}/${request['from_address']}/transactions`,request);
    }
    GetTokenAllBalance(request){
        return this.request(`GET`,`/klay/token/${request['from_address']}/all-balance`,request);
    }
    GetSingleNfts(request){
        return this.request(`GET`,`/klay/single-nft/${request['contract_address']}/nfts`,request);
    }
    GetSingleOwnerNfts(request){
        return this.request(`GET`,`/klay/single-nft/${request['owner_address']}/owner-nfts`,request);
    }
    GetSingleCreatorNfts(request){
        return this.request(`GET`,`/klay/single-nft/${request['creator_address']}/creator-nfts`,request);
    }
    GetSingleTxs(request){
        return this.request(`GET`,`/klay/single-nft/${request['from_address']}/transactions`,request);
    }
    GetSingleNftOwnerNfts(request){
        return this.request(`GET`,`/klay/single-nft/${request['contract_address']}/${request['owner_address']}/owner-nfts`,request);
    }
    GetSingleNftCreatorNfts(request){
        return this.request(`GET`,`/klay/single-nft/${request['contract_address']}/${request['creator_address']}/creator-nfts`,request);
    }
    GetSingleNftTxs(request){
        return this.request(`GET`,`/klay/single-nft/${request['contract_address']}/${request['from_address']}/from-transactions`,request);
    }
    GetSingleNftInfo(request){
        return this.request(`GET`,`/klay/single-nft/${request['contract_address']}/${request['token_id']}/info`,request);
    }
    GetSingleNftTokenTxs(request){
        return this.request(`GET`,`/klay/single-nft/${request['contract_address']}/${request['token_id']}/nft-transactions`,request);
    }

    GetSingleNftAuctionNfts(request){
        return this.request(`GET`,`/klay/single-nft/${request['contract_address']}/auction-nfts`,request);
    }
    GetSingleNftSellerNfts(request){
        return this.request(`GET`,`/klay/single-nft/${request['contract_address']}/${request['seller_address']}/seller-nfts`,request);
    }
    GetSingleNftTokenBids(request){
        return this.request(`GET`,`/klay/single-nft/${request['contract_address']}/${request['token_id']}/nft-bids`,request);
    }
    GetMultiNfts(request){
        return this.request(`GET`,`/klay/multi-nft/${request['contract_address']}/nfts`,request);
    }
    GetMultiOwnerNfts(request){
        return this.request(`GET`,`/klay/multi-nft/${request['owner_address']}/owner-nfts`,request);
    }
    GetMultiCreatorNfts(request){
        return this.request(`GET`,`/klay/multi-nft/${request['creator_address']}/creator-nfts`,request);
    }
    GetMultiTxs(request){
        return this.request(`GET`,`/klay/multi-nft/${request['from_address']}/transactions`,request);
    }
    GetMultiNftOwnerNfts(request){
        return this.request(`GET`,`/klay/multi-nft/${request['contract_address']}/${request['owner_address']}/owner-nfts`,request);
    }
    GetMultiNftCreatorNfts(request){
        return this.request(`GET`,`/klay/multi-nft/${request['contract_address']}/${request['creator_address']}/creator-nfts`,request);
    }
    GetMultiNftTxs(request){
        return this.request(`GET`,`/klay/multi-nft/${request['contract_address']}/${request['from_address']}/from-transactions`,request);
    }
    GetMultiNftInfo(request){
        return this.request(`GET`,`/klay/multi-nft/${request['contract_address']}/${request['token_id']}/info`,request);
    }
    GetMultiNftTokenTxs(request){
        return this.request(`GET`,`/klay/multi-nft/${request['contract_address']}/${request['token_id']}/nft-transactions`,request);
    }
    GetMultiNftSellerNfts(request){
        return this.request(`GET`,`/klay/multi-nft/${request['contract_address']}/${request['seller_address']}/seller-nfts`,request);
    }
    ReadContract(request){
        return this.request(`POST`,`/klay/contract/${request['contract_address']}/read`,request);
    }
    WriteContract(request){
        return this.request(`POST`,`/klay/contract/${request['contract_address']}/write`,request);
    }
}

module.exports = klaytn
