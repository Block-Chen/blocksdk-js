const Base = require('./base');
var BlockSDK = BlockSDK || {};

const util = require('util');

	BlockSDK.Ethereum = function(api_token = ''){

		Base.apply(this, arguments);

		this.api_token = api_token;

		this.getBlockChain = function (){
			return this.request("GET","/eth/info");
		}

		this.getBlock = function(request={}){

            if ( typeof request['rawtx'] == 'undefined') request['rawtx']=false;

            if ( typeof request['offset'] == 'undefined') request['offset']=0;

			if ( typeof request['limit'] == 'undefined') request['limit']=10;

			return this.request("GET",`/eth/blocks/${request['block']}`,{
				"rawtx" : request['rawtx'],"offset": request['offset'],"limit" : request['limit']
			});
		}

	    this.getMemPool = function(request = {}) {
			if ( typeof request['rawtx'] == 'undefined') request['rawtx']=false;

			if ( typeof request['offset'] == 'undefined') request['offset']=0;

			if ( typeof request['limit'] == 'undefined') request['limit']=10;

			return this.request("GET",`/eth/mempool`,{
				"rawtx" : request['rawtx'],
				"offset" : request['offset'],
				"limit" : request['limit']
			});
		}

	    this.getAddress = function(request = {}){
			if ( typeof request['offset'] == 'undefined') request['offset']=0;

			if ( typeof request['limit'] == 'undefined') request['limit']=10;

			return this.request("GET",`/eth/addresses`,{
				"offset" : request['offset'],
				"limit" : request['limit']
			});
		}

		this.loadAddress = function(request = {}){
			return this.request("POST",`/eth/addresses/${request['address']}/load`,{
				"private_key" : request['private_key'],"password" : request['password']});
		}

		this.unloadAddress = function(request = {}){
			return this.request("POST",`/eth/addresses/{$request['address']}/unload`);
		}

		this.createAddress = function(request = {}){
			if ( typeof request['name'] == 'undefined') request['name'] = null;
			return this.request("POST",`/eth/addresses`,{
				"name" : request['name']});
		}

		this.getAddressInfo = function(request = {}){
			if ( typeof request['reverse'] == 'undefined' ) request['reverse']=true;

			if ( typeof request['rawtx'] == 'undefined' ) request['rawtx']=null;

			if ( typeof request['offset'] == 'undefined') request['offset']=0;

			if ( typeof request['limit'] == 'undefined') request['limit']=10;


			return this.request("GET",`/eth/addresses/${request['address']}`,{
				"reverse" : request['reverse'],
				"rawtx"  : request['rawtx'],
				"offset" : request['offset'],
				"limit"  : request['limit']
			});
		}

		this.getAddressBalance = function(request = {}){

			return this.request("GET",`/eth/addresses/${request['address']}/balance`); }


		this.sendToAddress = function(request = {}) {
			if ( typeof request['gwei'] == 'undefined')
			{
			    var blockChain = this.getBlockChain();
        	    if ( typeof request['medium_gwei'] !== 'undefined')
        		request['gwei'] = blockChain['medium_gwei'] ;
			}

			if(typeof request['private_key'] == 'undefined') request['private_key']=null;

			if(typeof request['password'] == 'undefined') request['password']=null;

			if(typeof request['gas_limit'] == 'undefined') request['gas_limit']=null;

			return this.request("POST",`/eth/addresses/${request['from']}/sendtoaddress`,{
				"to" : request['to'],
				"amount" : request['amount'],
				"private_key" : request['private_key'],
				"password" : request['password'],
				"gwei" : request['gwei'],
				"gas_limit" : request['gas_limit']
			});
		}



		this.sendTransaction = function(request = {}){
			return this.request("POST",`/eth/transactions/send`,{
				"hex" : request['hex']
			});
		}

		this.getTransaction = function(request = {}){
			return this.request("GET",`/eth/transactions/${request['hash']}`); }
		}

		this.getErc20 = function(request = {}){
			return this.request("GET",`/eth/erc20-tokens/${request['contract_address']}`); }
		}
		
		this.getErc20Balance = function(request = {}){
			return this.request("GET",`/eth/erc20-tokens/${request['contract_address']}/${request['from']}/balance`); }
		}
		
		this.getErc20Transfer = function(request = {}) {
			if ( typeof request['gwei'] == 'undefined')
			{
			    var blockChain = this.getBlockChain();
        	    if ( typeof request['medium_gwei'] !== 'undefined')
        		request['gwei'] = blockChain['high_gwei'] ;
			}

			if(typeof request['private_key'] == 'undefined') request['private_key']=null;

			if(typeof request['password'] == 'undefined') request['password']=null;

			if(typeof request['gas_limit'] == 'undefined') request['gas_limit']=null;

			return this.request("POST",`/eth/erc20-tokens/${request['contract_address']}/${request['from']}/transfer`,{
				"to" : request['to'],
				"amount" : request['amount'],
				"private_key" : request['private_key'],
				"password" : request['password'],
				"gwei" : request['gwei'],
				"gas_limit" : request['gas_limit']
			});
		}
		
		this.getNfts = function(request = {}) {

			if ( typeof request['offset'] == 'undefined') request['offset']=0;

			if ( typeof request['limit'] == 'undefined') request['limit']=10;

			return this.request("GET",`/eth/erc721-tokens/${request['contract_address']}/tokens`,{
				"offset" : request['offset'],
				"limit"  : request['limit']
			});
		}
		
		this.getOwnerNfts = function(request = {}) {

			if ( typeof request['offset'] == 'undefined') request['offset']=0;

			if ( typeof request['limit'] == 'undefined') request['limit']=10;

			return this.request("GET",`/eth/erc721-tokens/${request['contract_address']}/${request['owner_address']}/owner`,{
				"offset" : request['offset'],
				"limit"  : request['limit']
			});
		}
		
		this.getCreatorNfts = function(request = {}) {

			if ( typeof request['offset'] == 'undefined') request['offset']=0;

			if ( typeof request['limit'] == 'undefined') request['limit']=10;

			return this.request("GET",`/eth/erc721-tokens/${request['contract_address']}/${request['creator_address']}/creator`,{
				"offset" : request['offset'],
				"limit"  : request['limit']
			});
		}
		
		this.getAuctionNfts = function(request = {}) {
			if ( typeof request['order_by'] == 'undefined') request['order_by']='end_time';
			if ( typeof request['order_direction'] == 'undefined') request['order_direction']='desc';
			
			if ( typeof request['offset'] == 'undefined') request['offset']=0;
			if ( typeof request['limit'] == 'undefined') request['limit']=10;

			return this.request("GET",`/eth/erc721-tokens/${request['contract_address']}/auction`,{
				"order_by" : request['order_by'],
				"order_direction" : request['order_direction'],
				"offset" : request['offset'],
				"limit"  : request['limit']
			});
		}
		
		this.getSaleNfts = function(request = {}) {
			if ( typeof request['order_direction'] == 'undefined') request['order_direction']='desc';
			
			if ( typeof request['offset'] == 'undefined') request['offset']=0;
			if ( typeof request['limit'] == 'undefined') request['limit']=10;

			return this.request("GET",`/eth/erc721-tokens/${request['contract_address']}/${request['seller_address']}/sale`,{
				"order_direction" : request['order_direction'],
				"offset" : request['offset'],
				"limit"  : request['limit']
			});
		}
		
		this.getNftBids = function(request = {}) {
			if ( typeof request['rawtx'] == 'undefined') request['rawtx']=0;
			if ( typeof request['order_direction'] == 'undefined') request['order_direction']='desc';
			
			if ( typeof request['offset'] == 'undefined') request['offset']=0;
			if ( typeof request['limit'] == 'undefined') request['limit']=10;

			return this.request("GET",`/eth/erc721-tokens/${request['contract_address']}/${request['token_id']}/bid`,{
				"order_direction" : request['order_direction'],
				"rawtx" : request['rawtx'],
				"offset" : request['offset'],
				"limit"  : request['limit']
			});
		}
		
		this.getNftInfo = function(request = {}) {
			return this.request("GET",`/eth/erc721-tokens/${request['contract_address']}/${request['token_id']}/info`,{
			});
		}
		
		this.getNftTransfers = function(request = {}) {
			if ( typeof request['rawtx'] == 'undefined') request['rawtx']=0;
			
			if ( typeof request['offset'] == 'undefined') request['offset']=0;
			if ( typeof request['limit'] == 'undefined') request['limit']=10;

			return this.request("GET",`/eth/erc721-tokens/${request['contract_address']}/${request['token_id']}/transfers`,{
				"rawtx" : request['rawtx'],
				"offset" : request['offset'],
				"limit"  : request['limit']
			});
		}
		
		this.getMultiNft = function(request = {}) {
			if ( typeof request['offset'] == 'undefined') request['offset']=0;
			if ( typeof request['limit'] == 'undefined') request['limit']=10;

			return this.request("GET",`/eth/erc1155-tokens/${request['contract_address']}/tokens`,{
				"offset" : request['offset'],
				"limit"  : request['limit']
			});
		}
		
		this.getMultiNftOwnerList = function(request = {}) {
			if ( typeof request['offset'] == 'undefined') request['offset']=0;
			if ( typeof request['limit'] == 'undefined') request['limit']=10;

			return this.request("GET",`/eth/erc1155-tokens/${request['contract_address']}/${request['token_id']}/list`,{
				"offset" : request['offset'],
				"limit"  : request['limit']
			});
		}
		
		this.getMultiNftContractOwner = function(request = {}) {
			if ( typeof request['offset'] == 'undefined') request['offset']=0;
			if ( typeof request['limit'] == 'undefined') request['limit']=10;

			return this.request("GET",`/eth/erc1155-tokens/${request['contract_address']}/${request['owner_address']}/owners`,{
				"offset" : request['offset'],
				"limit"  : request['limit']
			});
		}
		
		this.getMultiNftOwner = function(request = {}) {
			if ( typeof request['offset'] == 'undefined') request['offset']=0;
			if ( typeof request['limit'] == 'undefined') request['limit']=10;

			return this.request("GET",`/eth/erc1155-tokens/${request['owner_address']}/owner`,{
				"offset" : request['offset'],
				"limit"  : request['limit']
			});
		}

		this.getMultiNftContractCreator = function(request = {}) {
			if ( typeof request['offset'] == 'undefined') request['offset']=0;
			if ( typeof request['limit'] == 'undefined') request['limit']=10;

			return this.request("GET",`/eth/erc1155-tokens/${request['contract_address']}/${request['creator_address']}/creators`,{
				"offset" : request['offset'],
				"limit"  : request['limit']
			});
		}
		
		this.getMultiNftCreator = function(request = {}) {
			if ( typeof request['offset'] == 'undefined') request['offset']=0;
			if ( typeof request['limit'] == 'undefined') request['limit']=10;

			return this.request("GET",`/eth/erc1155-tokens/${request['contract_address']}/creator`,{
				"offset" : request['offset'],
				"limit"  : request['limit']
			});
		}
		
		this.getMultiNftInfo = function(request = {}) {
			return this.request("GET",`/eth/erc1155-tokens/${request['contract_address']}/info`,{
			});
		}
		
		this.getMultiNftTransfers = function(request = {}) {
			if ( typeof request['rawtx'] == 'undefined') request['rawtx']=0;
			
			if ( typeof request['offset'] == 'undefined') request['offset']=0;
			if ( typeof request['limit'] == 'undefined') request['limit']=10;

			return this.request("GET",`/eth/erc1155-tokens/${request['contract_address']}/${request['token_id']}/transfers`,{
				"rawtx" : request['rawtx'],
				"offset" : request['offset'],
				"limit"  : request['limit']
			});
		}
		
		this.getMultiSaleNfts = function(request = {}) {
			if ( typeof request['order_direction'] == 'undefined') request['order_direction']=0;
			
			if ( typeof request['offset'] == 'undefined') request['offset']=0;
			if ( typeof request['limit'] == 'undefined') request['limit']=10;

			return this.request("GET",`/eth/erc1155-tokens/${request['contract_address']}/${request['seller_address']}/sale`,{
				"order_direction" : request['order_direction'],
				"offset" : request['offset'],
				"limit"  : request['limit']
			});
		}
		
		this.getContractRead = function(request = {}) {
			if ( typeof request['parameter_type'] == 'undefined') request['parameter_type']=null;
			if ( typeof request['parameter_data'] == 'undefined') request['parameter_data']=null;

			return this.request("POST",`/eth/contracts/${request['contract_address']}/read`,{
				"method" : request['method'],
				"return_type" : request['return_type'],
				"parameter_type" : request['parameter_type'],
				"parameter_data"  : request['parameter_data']
			});
		}
		
		this.getContractWrite = function(request = {}) {
			if ( typeof request['private_key'] == 'undefined') request['private_key']=null;
			if ( typeof request['password'] == 'undefined') request['password']=null;
			if ( typeof request['gas_limit'] == 'undefined') request['gas_limit']=null;
			
			if ( typeof request['parameter_type'] == 'undefined') request['parameter_type']=null;
			if ( typeof request['parameter_data'] == 'undefined') request['parameter_data']=null;

			return this.request("POST",`/eth/contracts/${request['contract_address']}/write`,{
				"method" : request['method'],
				"return_type" : request['return_type'],
				"parameter_type" : request['parameter_type'],
				"parameter_data"  : request['parameter_data'],
				"from"  : request['from'],
				"private_key"  : request['private_key'],
				"password"  : request['password'],
				"amount"  : request['amount'],
				"gas_limit"  : request['gas_limit']
			});
		}
		
		this.getContractWriteFees = function(request = {}) {
			if ( typeof request['gas_limit'] == 'undefined') request['gas_limit']=null;
			
			if ( typeof request['parameter_type'] == 'undefined') request['parameter_type']=null;
			if ( typeof request['parameter_data'] == 'undefined') request['parameter_data']=null;

			return this.request("POST",`/eth/contracts/${request['contract_address']}/write/fees`,{
				"method" : request['method'],
				"return_type" : request['return_type'],
				"parameter_type" : request['parameter_type'],
				"parameter_data"  : request['parameter_data'],
				"from"  : request['from'],
				"amount"  : request['amount'],
				"gas_limit"  : request['gas_limit']
			});
		}
		
}
module.exports = BlockSDK.Ethereum;
util.inherits(BlockSDK.Ethereum, Base);
