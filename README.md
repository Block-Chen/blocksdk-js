# JS REST API SDK for BlockSDK
[![NPM version](https://img.shields.io/npm/v/blocksdk-js.svg)](https://www.npmjs.com/package/blocksdk-js)
[![NPM downloads](https://img.shields.io/npm/dm/blocksdk-js.svg)](https://www.npmjs.com/package/blocksdk-js)
[![DOCS](https://readthedocs.org/projects/sagemaker/badge/?version=stable)](https://docs-v2.blocksdk.com/)

BlockSDK JS에 오신 것을 환영합니다. 이 저장소에는 BlockSDK의 JS SDK와 REST API용 샘플이 포함되어 있습니다.


### NPM 을 사용하여 Install
```sh
npm install blocksdk-js
```

### Yaen 을 사용하여 Install
```sh
yarn add blocksdk-js
```

## 빠른 사용 샘플
### Create Client
```javascript
const BLOCKSDK = require('blocksdk-js');
const client = new BLOCKSDK("YOU_TOKEN");
```
### 이더리움 블록체인 정보 가져오기
```javascript
let result = client.ethereum.GetBlockChainInfo();
console.log(result);
```

[install-packagist]: https://packagist.org/packages/block-chen/blocksdk-php
[npm]:(http://npmjs.org)
[packagist]: http://packagist.org
[BlockSDK Developer Docs]: https://docs.blocksdk.com
