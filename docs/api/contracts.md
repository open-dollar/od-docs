---
sidebar_position: 6
sidebar_label: "/contracts"
---

# /contracts

> NOTE: You do not need to specify a network since your application is already network-specific.

## Read  

### POST `/contracts/method/read`

Example request

```js
const axios = require('axios')
const ACCESS_TOKEN = 'USER_ACCESS_TOKEN'


const data = {
  address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  abi: 'balanceOf(address) public view returns (uint256)',
  args: ['0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063'],
}

const options = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
}

axios
  .post(
    'https://api.usekeyp.com/v1/contracts/method/read', data, options)
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error(error)
  })
```

Example response - Success

```js
{
    "status": "SUCCESS",
    "explorerUrl": "https://polygonscan.com/contract/0x9ca6a77c8b38159fd2da9bd25bc3e259c33f5e39"
    "response": { type: 'BigNumber', hex: '0x23a57563' },
}
```

## Write  

### POST `/contracts/method/write`

Example request

```js
const axios = require('axios')
const ACCESS_TOKEN = 'USER_ACCESS_TOKEN'

const data = {
  address: '0x55d4dfb578daa4d60380995fff7a706471d7c719',
  abi: 'pay(uint256,uint256,address) public returns (bool success)',
  args: ['1', '10000000', '0x9ca6a77c8b38159fd2da9bd25bc3e259c33f5e39'],
  value: "1" // Optional, Amount of network coin to send in units of wei 
}

const options = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
}

axios
  .post('https://api.usekeyp.com/v1/contracts/method/write', data, options)
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error(error)
  })
```

Example response - Success

```js
{
    "status": "SUCCESS",
    "hash": "0xbff62f9de0bfc24c4852a7b3f0983f02b0a5a30e9e9e7c267d70e72505a6feb5",
    "explorerUrl": "https://polygonscan.com/tx/0xbff62f9de0bfc24c4852a7b3f0983f02b0a5a30e9e9e7c267d70e72505a6feb5"
    "tx": {
     "type": 2,
     "chainId": 137,
     // ...
    }
}
```