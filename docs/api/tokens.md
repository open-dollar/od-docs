---
sidebar_position: 3
sidebar_label: "/tokens"
---

# /tokens

## Transfer Token

### POST `/tokens/transfers`

In this first example, we will transfer 0.01 ERC20 tokens from Alice's wallet to the wallet of a Discord user. The receiving wallet is specified using the argument `toUserId`. 

> Note that many social providers allow users to update their username.

Example request

```js
const axios = require('axios')
const ACCESS_TOKEN = 'USER_ACCESS_TOKEN'

const data = {
  toUserUsername: "pi0neerpat#1337",
  toUserProviderType: "DISCORD",
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

Example response - Low gas

```json
{
    "status": "FAILED",
    "error": "Unable to transfer ERC20 - Try again in a few minutes, we're sending some gas to your wallet."
}
```

We can also directly pass the receipient's wallet address instead, if the recipient doesn't have a Keyp wallet.

```js
const data = {
  toAddress: '0xb72d219bfe0454ebd2cd679ff020a394acf9c6fe',
  tokenAddress: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
  tokenType: 'ERC20',
  amount: '.01',
}

// ... (same as above)
```

And if we know the recipient's Keyp user ID, we can use that too. Keyp user IDs are composed of the social login ProviderType (eg. "DISCORD", "GOOGLE") and the user ID from the provider. 

```js
const data = {
  toUserId: 'DISCORD-381135787330109441', 
  tokenAddress: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
  tokenType: 'ERC20',
  amount: '.01',
}

// ... (same as above)
```

For all available providers and ProviderType, see [Social Login Providers](/applications/providers).
