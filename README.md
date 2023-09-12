# JS REST API SDK for BlockSDK
[![NPM version](https://img.shields.io/npm/v/blocksdk-js.svg)](https://www.npmjs.com/package/blocksdk-js)
[![NPM downloads](https://img.shields.io/npm/dm/blocksdk-js.svg)](https://www.npmjs.com/package/blocksdk-js)
[![DOCS](https://readthedocs.org/projects/sagemaker/badge/?version=stable)](https://docs-v2.blocksdk.com/)

BlockSDK JS에 오신 것을 환영합니다. 이 저장소에는 BlockSDK의 JS SDK와 REST API용 샘플이 포함되어 있습니다.

## 지원중인 블록체인 네트워크
비트코인 , 라이트코인 , 비트코인 캐시 , 웹후크 는 V2버전 에서 지원되고 있습니다.
```
1.이더리움
2.클레이튼  
3.바이낸스 스마트 체인
4.폴리곤
5.아발란체
6.이더리움 클래식
```
## 개발자 문서
* [BlockSDK REST API V3 문서](https://documenter.getpostman.com/view/20292093/Uz5FKwxw)
* [BlockSDK REST API V2 문서](https://docs-v2.blocksdk.com/ko/#fa255f0ccc)
* [BLOCKSDK PHP SDK V3 문서](https://github.com/Block-Chen/blocksdk-js/wiki)

## 시작하기
### NPM 을 사용하여 Install
```sh
npm install blocksdk-js
```

### Yarn 을 사용하여 Install
```sh
yarn add blocksdk-js
```

## 코드 샘플
### 테스트넷 클라이언트 생성
```javascript
const BLOCKSDK = require('blocksdk-js');
const client = new BLOCKSDK("YOU_TOKEN");
```
### 메인넷 클라이언트 생성
엔드 포인트를 지정해주지 않는경우 테스트넷으로 기본 설정되어 호출 됩니다
메인넷은 아래 예시와 같이 클라이언트 생성시 두번째 매개변수를 메인넷으로 지정해 주시길 바랍니다.
```javascript
const BLOCKSDK = require('blocksdk-js');
const client = new BLOCKSDK("YOU_TOKEN","https://mainnet-api.blocksdk.com");
```
### 이더리움 블록체인 정보 가져오기
```javascript
const result = client.ethereum.GetBlockChainInfo();
console.log(result);
```

### 이더리움 테스트넷 특정 컨트렉트 NFT 목록 가져오기
```js
const request = {
    contract_address : "0xf5de760f2e916647fd766b4ad9e85ff943ce3a2b",
    includeMetadata : false,
    offset : 0,
    limit : 10
};

const nfts = client.ethereum.GetSingleNfts(request);
console.log(nfts);
```


[install-package]: https://www.npmjs.com/package/blocksdk-js
[npm]:(http://npmjs.org)
[BlockSDK Developer Docs]: https://docs.blocksdk.com
