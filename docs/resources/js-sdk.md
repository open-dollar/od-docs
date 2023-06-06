---
sidebar_position: 1
sidebar_label: "@usekeyp/js-sdk"
---

# `@usekeyp/js-sdk`

Keyp's SDK provides a simple interface for interacting with Keyp's API.

Currently, the SDK supports the following:
- Plugin for logging into Keyp and persisting session data with NextAuth.js
- Helper function for signing in using Keyp and NextAuth.js
- Helper function for ERC20 and ERC721 token transfers
- Axios client for easily making requests to Keyp's API 

## Usage 📖

1.  Add package to your project:  
    `yarn add @usekeyp/js-sdk`

2. Choose from a variety of SDK plugins and helpers:

Easy Keyp logins with NextAuth.js

```js
// pages/api/auth/[...nextauth].js
import { KeypAuth } from "@usekeyp/js-sdk";
import NextAuth from "next-auth";

const NextAuthOptions = KeypAuth({
    clientId: process.env.KEYP_CLIENT_ID, // From dev portal
    secret: process.env.KEYP_COOKIE_SECRET, // Random string
    redirectUrl: "http://localhost:3000/api/auth/callback/keyp",
});

export default NextAuth(NextAuthOptions);
```

Easy user sign in using Keyp and NextAuth.js

```js
import { signInKeyp } from "@usekeyp/js-sdk"

export default function SignInPage() {
    return (
        <div>
        <button onClick={() => signInKeyp("GOOGLE")}>Sign in with Google</button>
        <button onClick={() => signInKeyp("DISCORD")}>Sign in with Discord</button>
        </div>
    )
}
```

Easy token transfers

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

Easy API requests with keypClient, a helper for your axios requests

```js
 useEffect(() => {
    const ACCESS_TOKEN = session?.user.accessToken;
    const userId = session?.user.id;

    const options = {
        headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
    };

    const firstRequest = `/users/${userId}/balance`;
    const secondRequest = `/users/${userId}/balance/${supportedAssets.DAI}`;

    axios
        .all([
            keypClient.get(firstRequest, options),
            keypClient.get(secondRequest, options),
        ])
        .then(
            axios.spread((firstResponse, secondResponse) => {
                let DAI = Object.values(secondResponse.data);
                setAssets({ ...firstResponse.data, DAI: DAI[0] });
                setIsLoading(false);
            })
        )
        .catch((error) => console.error(error));
}, []);
```


## Resources 🧑‍💻

- [SDK Repository](https://github.com/UseKeyp/usekeyp-js-sdk)
- [NextAuth.js](https://next-auth.js.org/)

More functionality coming soon!
