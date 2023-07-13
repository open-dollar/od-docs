---
sidebar_position: 3
sidebar_label: "/users"
---

# /users

## User 

### GET `/users/:userId`

> 💡 TIP: you can also get a user's data during the OAuth flow, using the `/me` endpoint (see the OAuth documentation for more details).

Example request

```js
const axios = require('axios')
const ACCESS_TOKEN = 'USER_ACCESS_TOKEN'

const userId = 'DISCORD-381135787330109441'
const options = { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } }

axios
  .get(`https://api.usekeyp.com/v1/users/${userId}`, options)
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error(error)
  })
```

Example response


```json
{
    "id": "DISCORD-381135787330109441",
    "provider": "DISCORD",
    "username": "pi0neerpat#4947",
    "address": "0x656814a3a8cb93a6b50113058ee77a068a853ae7",
    "imageSrc": "https://cdn.discordapp.com/avatars/381135787330109441/2ff8d9d07d116ae29d268b96b73721cc.png"
}
```

## Balance 

### GET `/users/:userId/balance`

Example request

```js
const axios = require('axios')
const ACCESS_TOKEN = 'USER_ACCESS_TOKEN'

const userId = 'DISCORD-381135787330109441'
const options = { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } }

axios
  .get(`https://api.usekeyp.com/v1/users/${userId}/balance`, options)
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error(error)
  })
```

Example response

```json
{
    "ETH": {
        "balance": "25000000000000000",
        "balanceBn": {
            "type": "BigNumber",
            "hex": "0x58d15e17628000"
        },
        "formatted": "0.025",
        "decimals": 18,
        "symbol": "ETH",
        "name": "Ethereum",
        "tokenAddress": null,
        "network": "polygon",
        "chainId": 137
    }
}
```

## Token Balance 

### GET `/users/:userId/balance/:tokenAddress`

Example request

```js
const axios = require('axios')
const ACCESS_TOKEN = 'USER_ACCESS_TOKEN'

const userId = 'DISCORD-381135787330109441'
const tokenAddress = '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063'
const options = { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } }

axios
  .get(
    `https://api.usekeyp.com/v1/users/${userId}/balance/${tokenAddress}`,
    options
  )
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error(error)
  })
```

Example response

```json
{
    "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063": {
        "balance": "7569809500000000000000000",
        "balanceBn": {
            "type": "BigNumber",
            "hex": "0x0642f831fc906107560000"
        },
        "formatted": "7569809.5",
        "decimals": "18",
        "symbol": "DAI",
        "name": "(PoS) Dai Stablecoin",
        "tokenAddress": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
        "network": "polygon",
        "chainId": 137
    }
}
```

### GET `/users/:userId/history`

Get a user's recent transfer transaction history (ERC20, ERC721, and ERC1155)

Example request

```js
const axios = require('axios')
const ACCESS_TOKEN = 'USER_ACCESS_TOKEN'

const userId = 'DISCORD-381135787330109441'
const options = { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } }

axios
  .get(`https://api.usekeyp.com/v1/users/${userId}/history`, options)
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error(error)
  })
```

Example response


```json
[
    {
        "type": "TRANSFER",
        "to": {
            "username": "cupojoseph#0",
            "platform": "DISCORD",
            "address": "0x3e284f90b1704088f00ba87e8ef779a2d1f7d2f6"
        },
        "amount": {
            "valueBn": {
                "type": "BigNumber",
                "hex": "0x0f4240"
            },
            "formatted": 1,
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "tokenAddress": "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
            "network": "POLYGON",
            "chainId": 137
        },
        "timestamp": "2023-04-28T18:31:29.000Z",
        "hash": "0x2fa6ce301f63ad706aff2dd59c65cf8dfdc600e1ed6b343ce7a6d52417c80230",
        "explorerUrl": "https://polygonscan.com/tx/0x2fa6ce301f63ad706aff2dd59c65cf8dfdc600e1ed6b343ce7a6d52417c80230"
    },
    //...
]
```