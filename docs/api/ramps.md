---
sidebar_position: 4
sidebar_label: "/ramps"
---

# /ramps

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