Welcome to BlockSDK PHP. This repository contains BlockSDK's PHP SDK and samples for REST API.

SDK Documentation
Our BlockSDK-PHP Page includes all the documentation related to PHP SDK. Sample Codes, to Releases. Here are few quick links to get you there faster.

BlockSDK Developer Docs
Prerequisites
PHP 5.5+
curl, json & openssl extensions must be enabled
Getting Started
Install the SDK – Using Composer is the recommended way to install the BlockSDK for PHP. The SDK is available via Packagist under the block-chen/blocksdk-php package. If Composer is installed globally on your system, you can run the following in the base directory of your project to add the SDK as a dependency:

composer require block-chen/blocksdk-php
Quick Examples
Create an Bitcoin client
<?php
use BlockSDK;

$blockSDK = new BlockSDK("YOU_TOKEN");
$btcClient = $blockSDK->createBitcoin();

//or

$btcClient = BlockSDK::createBitcoin("YOU_TOKEN");
Get Address info
<?php
$addressInfo = $btcClient->getAddressInfo([
    "address" => "18cBEMRxXHqzWWCxZNtU91F5sbUNKhL5PX",
    "rawtx" => true,
    "reverse" => true,
    "offset" => 0,
    "limit" => 10
]);

var_dump($addressInfo);
Create an Bitcoin Wallet
<?php
$wallet = $btcClient->createWallet([
    "name" => "test"
]);
