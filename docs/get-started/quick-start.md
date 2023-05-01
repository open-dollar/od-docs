---
sidebar_position: 2
sidebar_label: "Quick Start"
---

# Getting Started

## Example applications

We created a few example apps to help you get started:

- **NextJS** - [kaching-app](https://github.com/UseKeyp/kaching-app)
- **React** - [usekeyp-example-app-react](https://github.com/UseKeyp/usekeyp-example-app-react)
- **ExpressJS** - [usekeyp-example-app-express](https://github.com/UseKeyp/usekeyp-example-app-express/)
- **RedwoodJS** - [usekeyp-example-app-redwood](https://github.com/UseKeyp/usekeyp-example-app-redwood/)

## 1. Create a Developer Account

Create your free account at [dev.usekeyp.com](https://dev.usekeyp.com)

![Login Page](/img/dev-portal-login-page.png)

On your developer account page, select "Create Client", which will generate a new `Client ID`. You can create as many clients as you would like.

![Client Generation](/img/dev-portal-client-gen.gif)

## 2. Authenticate with Keyp

Add **`@usekeyp/js-sdk`** to your React or Next.js applications

### Next.js

Install dependencies:

```bash
yarn add @usekeyp/js-sdk next-auth
```

Add authentication:

```js
// pages/api/auth/[...keypauth].ts
import { KeypAuth } from "@usekeyp/js-sdk";

const keypAuth = new KeypAuth({
    clientId: process.env.NEXT_PUBLIC_KEYP_CLIENT_ID // From dev portal
    secret: process.env.NEXT_PUBLIC_KEYP_COOKIE_SECRET, // Random string
    redirectUrl: "http://localhost:3000/api/auth/callback/keyp",
})

export default keypAuth;
```

Create a login page:

```js
// pages/login.js
import React, { useState, useEffect } from "react";
import { LoginPortal } from "@usekeyp/js-sdk";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const LoginPage = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session && session.status === "authenticated") {
      router.push("/");
    }
  }, [session, router]);

  return (
    <>
      <LoginPortal
        providers={["TWITTER", "GITHUB", "APPLE"]}
        additionalProviders={["DISCORD", "GOOGLE"]}
      />
    </>
  );
};

export default LoginPage;
```

### React


Install dependencies:

```bash
yarn add @usekeyp/js-sdk 
```

Add authentication:

```js

```

Create a login page:

```js

```

### Other Platforms

If you're working on another platform, there are many open-source libraries available. Follow instructions for OAuth2.0 using PKCE with OIDC.

_Node, Express, JavaScript_

- [Passport.js](https://www.passportjs.org/packages/passport-oauth2/)
- [oauth4webapi](https://github.com/panva/oauth4webapi)
- [JSO](https://github.com/andreassolberg/jso)

_Java_

- [AppAuth for Android](https://github.com/openid/AppAuth-Android)
- [oauth2-essentials](https://github.com/dmfs/oauth2-essentials)
- [ScribeJava](https://github.com/scribejava/scribejava)
- [pac4j-oauth](https://www.pac4j.org/docs/clients/oauth.html)

_C++_

- [O2](https://github.com/pipacs/o2)

_Unity_

- [Unity Authentication](https://docs.unity.com/authentication/en/manual/PlatformSignInOpenIDConnect)

_Everything else_ (Swift, Ruby, Kotlin...)

- See list https://oauth.net/code/

## 3. Use the API 

Call the API using the SDK:

```js
import { useKeyp } from "@usekeyp/js-sdk";

const MyApp = () => {
    const keyp = useKeyp()

    const onClick = async () => {
        const res = await keyp.transfer({
            toUserUsername: "pi0neerpat#1337",
            toUserProviderType: "DISCORD",
            tokenAddress: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
            tokenType: 'ERC20',
            amount: '.01',
        })
    }
    // ...
}
```

Or make calls directly using the user's `AccessToken`:

```js
import axios from 'axios'
import { useSession } from "next-auth/react";

const TransferPage = () => {
    const session = useSession();

    const onClick = async () => {
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
    }
    // ... 
}
```

## Resources



- **[Keyp Public Workspace - Postman](https://www.postman.com/speeding-spaceship-663022/workspace/keyp-public-workspace/collection/25667367-e1156fb2-60c3-4a42-b76b-47902a22512e?ctx=documentation)**

![Postman Environment](/img/dev-portal-postman-environment.png)

Now you can begin receiving and sending tokens to your Wallet on Polygon network. Note that **applications and access tokens are network-specific**. In order to use other networks, you'll need to create your own application with your desired network.
