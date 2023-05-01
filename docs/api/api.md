---
sidebar_position: 1
sidebar_label: "AccessToken"
---

# Keyp API

###  🌟 [Postman Workspace](https://www.postman.com/speeding-spaceship-663022/workspace/keyp-public-workspace/collection/25667367-e1156fb2-60c3-4a42-b76b-47902a22512e?ctx=documentation) 🌟

Fork the workspace and update `ACCESS_TOKEN` in the **Environments** tab.

![Postman Environment](/img/postman-access-token.png)

To use the API in your app, you'll need to provide the `AccessToken` for a specific user:

```js
const data = {
    toUserUsername: "pi0neerpat#1337",
    toUserProviderType: "DISCORD",
    tokenAddress: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    tokenType: 'ERC20',
    amount: '.01',
}

const ACCESS_TOKEN = session.user.accessToken
const options = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
}

const res = await axios
    .post('https://api.usekeyp.com/v1/tokens/transfers', data, options)
    .then((response) => {
        console.log(response.data)
        return response.data
    })
    .catch((error) => {
        console.error(error)
    })
```

### Get your `AccessToken`

An `AccessToken` for your account can be found in the the [Dev Portal](https://dev.UseKeyp.com). 

![Access Token](/img/dev-portal-access-token.png)

Access Tokens are scoped to a single user, per a single application, per a single set of permissions.

Your Access Token here is **limited to the Polygon network**, since the Dev Portal is built on Polygon.

To use another network, you must create your own Keyp Application.
