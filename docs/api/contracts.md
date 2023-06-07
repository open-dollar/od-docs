---
sidebar_position: 6
sidebar_label: "/contracts"
---

# /contracts

## Read  

### GET `/contracts/method`

Example request

```js
const axios = require('axios')
const ACCESS_TOKEN = 'USER_ACCESS_TOKEN'

const address = '0x9ca6a77c8b38159fd2da9bd25bc3e259c33f5e39'
method = 'balance'
args = '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063' // Comma-separated list

const options = { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } }

axios
  .get(
    `https://api.usekeyp.com/v1/contracts/method?address=${address}&method=${method}&args=${args}`,
    options
  )
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error(error)
  })
```

## Write  

### POST `/contracts/method`

Example request

```js
const axios = require('axios')
const ACCESS_TOKEN = 'USER_ACCESS_TOKEN'

const data = {
  address: '0x55d4dfb578daa4d60380995fff7a706471d7c719',
  abi: 'pay(uint256,uint256,address) public returns (bool success)',
  args: ['1', '10000000', '0x9ca6a77c8b38159fd2da9bd25bc3e259c33f5e39'],
}

const options = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
}

axios
  .post(`https://api.usekeyp.com/v1/contracts/method`, data, options)
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error(error)
  })
```

Example response - Success

```json
{
    "status": "SUCCESS",
    "hash": "0xabc....."
}
```