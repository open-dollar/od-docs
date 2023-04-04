---
sidebar_position: 3
sidebar_label: "API v1.0"
---

# Keyp API

The API can be used for signing transactions, connecting on/off-ramps, and more. Use our Postman Workspace to start sending API requests.

[Keyp Postman Workspace](https://www.postman.com/speeding-spaceship-663022/workspace/keyp-public-workspace/collection/25667367-e1156fb2-60c3-4a42-b76b-47902a22512e?ctx=documentation)

It's a public collection, so you can fork the collection to make requests via Postman's web or desktop application.

To make API calls you will need an **Access Token**, which you view using the [Dev Portal](https://dev.UseKeyp.com). Access Tokens are scoped to a single user, for a single application, for a single set of permissions.

# Endpoints

To test these code examples, replace `USER_ACCESS_TOKEN` with your own access token from the dev portal, or an access token for a user who has signed into your app. 

## Users


#### GET User 

> NOTE: you can also get a user's data during the OAuth flow, using the `/me` endpoint (see the OAuth documentation for more details).

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

#### GET User Balance 

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

#### GET User Token Balance 

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

## Transfers

#### POST Transfer Token

In this first example, we will transfer 0.01 ERC20 tokens from Alice's wallet to the wallet of another Keyp user. The receiving wallet is specified using the argument `toUserId`. 

Example request

```js
const axios = require('axios')
const ACCESS_TOKEN = 'USER_ACCESS_TOKEN'

const data = {
  toAddress: '',
  toUserId: 'DISCORD-381135787330109441', 
  tokenAddress: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
  tokenType: 'ERC20',
  amount: '.01',
}

const options = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
}

axios
  .post('https://api.usekeyp.com/v1/tokens/transfers', data, options)
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

Example response - Low balance

```json
{
    "status": "FAILED",
    "error": "Unable to transfer ERC20 - Amount exceeds your current balance of 0"
}
```

If the recipient doesn't have a Keyp wallet, or we don't know their user ID, we can instead use the receipient's wallet address instead for the argument `toAddress`.

```js
const axios = require('axios')
const ACCESS_TOKEN = 'USER_ACCESS_TOKEN'

const data = {
  toAddress: '0xb72d219bfe0454ebd2cd679ff020a394acf9c6fe',
  toUserId: '', 
  tokenAddress: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
  tokenType: 'ERC20',
  amount: '.01',
}

const options = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
}

axios
  .post('https://api.usekeyp.com/v1/tokens/transfers', data, options)
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error(error)
  })
```

## Ramps

#### GET On Ramp

```js
const axios = require('axios')
const ACCESS_TOKEN = 'USER_ACCESS_TOKEN'

const rampType = 'WERT'
const options = { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } }

axios
  .get(
    `https://api.usekeyp.com/v1/ramps/on/${rampType}`,
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
  "url": "https://app.usekeyp.com/wert?address=0xb72d219bfe0454ebd2cd679ff020a394acf9c6fe"
}
```

#### GET Off Ramp

// GET Off Ramp

```js
const axios = require('axios')
const ACCESS_TOKEN = 'USER_ACCESS_TOKEN'

const rampType = 'COINBASE'
const options = { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } }

axios
  .get(`https://api.usekeyp.com/v1/ramps/off/${rampType}`, options)
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
  "url": "https://www.coinbase.com/oauth/authorize?code_challenge=gUxoT6AHdvXrjQXtxW7QAVS53RnH5v6q80hrhIp8_e4&code_challenge_method=S256&client_id=d71f130f740a580493825b0ae8511f1b72d48661217faab9d78f61f9cd4400d9&scope=wallet%3Aaccounts%3Aread%2Cwallet%3Aaccounts%3Acreate%2Cwallet%3Aaddresses%3Aread%2Cwallet%3Aaddresses%3Acreate%2Cwallet%3Auser%3Aemail&redirect_uri=https%3A%2F%2Fapp.usekeyp.com%2Fredirect%2Fcoinbase&referral=gallag_jq&account_currency=ETH&response_type=code&state=0ee456c4-a219-4b2e-8fdc-6419b0b6c73d"
}
```