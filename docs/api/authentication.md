---
sidebar_position: 1
sidebar_label: "Authentication"
---

# Authentication

To use the API in your app, you'll need to provide the access token for a specific user. In this example, 
we'll use a helper function from `@usekeyp/js-sdk` to do a token transfer:

```js
const ACCESS_TOKEN = session.user.accessToken

const data = {
    accessToken: ACCESS_TOKEN,
    toUserUsername: "pi0neerpat#1337",
    toUserProviderType: "DISCORD",
    tokenAddress: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    tokenType: 'ERC20',
    amount: '.01',
}

const res = await tokenTransfer(data)
```

Here's an example of a token transfer without the helper function:

```js
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

### Get your Access Token via UI

An access token for your account can be found in the [Dev Portal](https://dev.UseKeyp.com). 

![Access Token](/img/dev-portal-access-token.png)

Access tokens are scoped to a single user, per a single application, per a single set of permissions.

Your access token here is **limited to the Polygon network**, since the Dev Portal is built on Polygon.

To use another network, you must create your own Keyp Application.

### Get your Access Token via Session

When using NextAuth.js, a user's access token can be found in the session.

```js
import { useSession } from "next-auth/react";

const { data: session } = useSession();

const ACCESS_TOKEN = session.user.accessToken
```