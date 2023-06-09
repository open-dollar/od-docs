---
sidebar_position: 3
sidebar_label: "Tokens & Currencies"
---

# Tokens & Currencies

### _All ERC20, ERC721, and ERC115 tokens are supported._

Use `CurrencyType` from the tables below to specify a token. 

If your token is not on the list, you can use the `NetworkType` (see [networks](/coverage/networks)) and the token address to specify a token.

## Ethereum

 | Name     | `CurrencyType` |    Usage     | Decimals |                  Address                   |
 | :------- | :------------: | :----------: | :------: | :----------------------------------------: |
 | Ethereum | `MAINNET_ETH`  | Network Coin |    18    |                                            |
 | DAI      | `MAINNET_DAI`  |  Stablecoin  |    18    | [0x6B175474E89094C44Da98b954EedeAC495271d0F](https://etherscan.io/address/0x6B175474E89094C44Da98b954EedeAC495271d0F) |
 | USD Coin | `MAINNET_USDC` |  Stablecoin  |    6     | [0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48](https://etherscan.io/address/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48) |
 | Wrapped Ether | `MAINNET_WETH`  | Wrapped Token |    18    | [0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2) |

## Polygon

| Name     | `CurrencyType`  |    Usage     | Decimals | Address |
| :------- | :-------------: | :----------: | :------: | :-----: |
| Matic    | `POLYGON_MATIC` | Network Coin |    18    |         |
| DAI      |  `POLYGON_DAI`  |  Stablecoin  |    18    |    [0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063](https://polygonscan.com/token/0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063)     |
| USD Coin | `POLYGON_USDC`  |  Stablecoin  |    6     |   [0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174](https://polygonscan.com/token/0x2791bca1f2de4661ed88a30c99a7a9449aa84174)      |
| Wrapped Ether | `POLYGON_WETH`  | Wrapped Token |    18    | [0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619](https://polygonscan.com/token/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619) |

## Mumbai

| Name          | `CurrencyType` |     Usage     | Decimals |                  Address                   |
| :------------ | :------------: | :-----------: | :------: | :----------------------------------------: |
| Mumbai Matic       | `MUMBAI_MATIC` | Network Coin  |    18    |                                            |
| DAI           |  `MUMBAI_DAI`  |  Stablecoin   |    18    | [0x001B3B4d0F3714Ca98ba10F6042DaEbf0B1B7b6F](https://mumbai.polygonscan.com/token/0x001b3b4d0f3714ca98ba10f6042daebf0b1b7b6f) |
| USD Coin      | `MUMBAI_USDC`  |  Stablecoin   |    6     | [0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e](https://mumbai.polygonscan.com/token/0x2058a9d7613eee744279e3856ef0eada5fcbaa7e) |
| Wrapped Ether | `MUMBAI_WETH`  | Wrapped Token |    18    | [0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa](https://mumbai.polygonscan.com/token/0xa6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa) |


## Gnosis

| Name         | CurrencyType |    Usage     | Decimals |                  Address                   |
| :----------- | :----------: | :----------: | :------: | :----------------------------------------: |
| DAI          | `GNOSIS_DAI` |    Network Coin   |  18        |    |
| USD Coin     | `GNOSIS_USD` |  Stablecoin       |     6     |                  [0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83](https://gnosisscan.io/token/0xddafbb505ad214d7b80b1f830fccc89b60fb7a83)                          |
| WxDAI  | `GNOSIS_WDAI`|   Stablecoin     |     18     |  [0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d](https://gnosisscan.io/token/0xe91d153e0b41518a2ce8dd3d7944fa863463a97d)  |

## Goerli

| Name     | `CurrencyType` |    Usage     | Decimals |                  Address                   |
| :------- | :------------: | :----------: | :------: | :----------------------------------------: |
| Goerli ETH |  `GOERLI_ETH`  | Network Coin |    18    |                                            |
| DAI      |  `GOERLI_DAI`  |  Stablecoin  |    18    | [0xdc31ee1784292379fbb2964b3b9c4124d8f89c60](https://goerli.etherscan.io/token/0xdc31ee1784292379fbb2964b3b9c4124d8f89c60) |
| USD Coin | `GOERLI_USDC`  |  Stablecoin  |    6     | [0x07865c6E87B9F70255377e024ace6630C1Eaa37F](https://goerli.etherscan.io/token/0x07865c6E87B9F70255377e024ace6630C1Eaa37F) |
| Wrapped Ether | `GOERLI_WETH` | Wrapped Token | 18 | [0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6](https://goerli.etherscan.io/token/0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6) |

## Optimism

| Name         | CurrencyType |    Usage     | Decimals |                  Address                   |
| :----------- | :----------: | :----------: | :------: | :---------------------------------------------------: |
| Optimism ETH | `OPTIMISM_OETH` | Network Coin |    18    |  |
| Optimism Wrapped Ether          | `OPTIMISM_OWETH ` | Wrapped Token |     18     | [0x4200000000000000000000000000000000000006](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006) |


## Optimism-Goerli

  | Name                     | `CurrencyType`          |     Usage     | Decimals |          Address        |
  | ------------------------ | :---------------------- | :-----------: | :------: | :---------------------------------------------------:  |
  | Optimism Goerli ETH     | `OPTIMISM_GOERLI_OETH`  | Network Coin  |    18    |                                           |                                           


## Arbitrum

  | Name          | `CurrencyType`  |     Usage     | Decimals |                  Address                   |
  | :------------ | :-------------: | :-----------: | :------: | :----------------------------------------: |
  | Arbitrum ETH     | `ARBITRUM_ETH`  | Network Coin  |    18    |                                            |
  | DAI           | `ARBITRUM_DAI`  |  Stablecoin   |    18    | [0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1](https://arbiscan.io/token/0xda10009cbd5d07dd0cecc66161fc93d7c9000da1) |
  | USD Coin      | `ARBITRUM_USDC` |  Stablecoin   |    6     | [0xff970A61A04b1cA14834A43f5dE4533eBDDB5CC8](https://arbiscan.io/address/0xff970A61A04b1cA14834A43f5dE4533eBDDB5CC8) |
  | Wrapped Ether | `ARBITRUM_WETH` | Wrapped Token |    18    | [0x82aF49447D8a07e3bd95BD0d56f35241523fBab1](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1) |

## Arbitrum-Nova

| Name          |    `CurrencyType`    |     Usage     | Decimals |                  Address                   |
| :------------ | :------------------: | :-----------: | :------: | :----------------------------------------: |
| Arbitrum Nova ETH | `ARBITRUM_NOVA_ETH`  | Network Coin  |    18    |                                           |
| DAI           | `ARBITRUM_NOVA_DAI`  |  Stablecoin   |    18    | [0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1](https://nova.arbiscan.io/token/0xda10009cbd5d07dd0cecc66161fc93d7c9000da1) |
| Wrapped Ether | `ARBITRUM_NOVA_WETH` | Wrapped Token |    18    | [0x765277EebeCA2e31912C9946eAe1021199B39C61](https://nova.arbiscan.io/token/0x765277eebeca2e31912c9946eae1021199b39c61)|

## Sepolia

 | Name     | `CurrencyType` |    Usage     | Decimals |                  Address                   |
 | :------- | :------------: | :----------: | :------: | :----------------------------------------: |
 | Sepolia ETH | `SEPOLIA_ETH`  | Network Coin |    18    | |
 | DAI      | `SEPOLIA_DAI`  |  Stablecoin  |    18    | [0x3e622317f8C93f7328350cF0B56d9eD4C620C5d6](https://sepolia.etherscan.io/token/0x3e622317f8c93f7328350cf0b56d9ed4c620c5d6) |
 | Wrapped Ether | `SEPOLIA_WETH` | Wrapped Token |    18    | [0xf531B8F309Be94191af87605CfBf600D71C2cFe0](https://sepolia.etherscan.io/token/0xf531B8F309Be94191af87605CfBf600D71C2cFe0)|


## Avalanche

| Name          |  `CurrencyType`  |     Usage     | Decimals |                  Address                   |
| :------------ | :--------------: | :-----------: | :------: | :----------------------------------------: |
| Avalanche     | `AVALANCHE_AVAX` | Network Coin  |    18    |                                            |
| USD Coin      | `AVALANCHE_USDC` |  Stablecoin   |    6     | [0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664](https://avascan.info/blockchain/c/token/0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664) |

## Avalanche-Fuji

 | Name          |    `CurrencyType`     |     Usage     | Decimals |                  Address                   |
 | :------------ | :-------------------: | :-----------: | :------: | :----------------------------------------: |
 | Avalanche     | `AVALANCHE_FUJI_AVAX` | Network Coin  |    18    |                                            |
 | DAI           | `AVALANCHCE_FUJI_DAI` |  Stablecoin   |    18    |                 [0xd586E7F844cEa2F87f50152665BCbc2C279D8d70](https://snowtrace.io/token/0xd586E7F844cEa2F87f50152665BCbc2C279D8d70)                           |
 | USD Coin      | `AVALANCHE_FUJI_USDC` |  Stablecoin   |    6     | [0xAF82969ECF299c1f1Bb5e1D12dDAcc9027431160](https://testnet.snowtrace.io/token/0xaf82969ecf299c1f1bb5e1d12ddacc9027431160) |
 | Wrapped Ether | `AVALANCHE_FUJI_WETH` | Wrapped Token |    18    | [0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB](https://snowtrace.io/token/0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab) |