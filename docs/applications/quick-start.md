---
sidebar_position: 1
sidebar_label: "Quick Start"
id: my-home-doc
slug: /
---

# Welcome to Keyp 🍩

Keyp creates developer tools for game studios and app developers to improve the web3 onboarding experience.

We want to create a future where people have universal ownership and autonomy over their digital assets.‍

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

<!-- 
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

``` -->


## 2. Authenticate with Keyp

Here's how to authenticate for different frameworks:

### Next.js

Install dependencies:

```bash
yarn add next-auth @usekeyp/js-sdk
```

Add authentication:

```ts
// pages/api/auth/[...nextauth].ts
import { KeypAuth } from "@usekeyp/js-sdk";
import NextAuth from "next-auth";

const NextAuthOptions = KeypAuth({
    clientId: process.env.KEYP_CLIENT_ID, // From dev portal
    secret: process.env.KEYP_COOKIE_SECRET, // Random string
    redirectUrl: "http://localhost:3000/api/auth/callback/keyp",
});

export default NextAuth(NextAuthOptions);

```

Create a login page:

```tsx
// pages/login.tsx
import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaDiscord, FaGoogle } from "react-icons/fa";
import { signInKeyp } from "@usekeyp/js-sdk"

const Login = () => {
  const [activeBtn, setActiveBtn] = useState<string>();
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session && session.status === "authenticated") {
      router.push("/");
    }
  }, [session, router]);

  return (
    <>
      <Box textAlign="center" fontFamily="sharpie" px="0.5rem">
        <Heading
          as="h1"
          color="pink"
          fontSize={["5rem", "8rem"]}
          fontWeight="extrabold"
        >
          <Text fontFamily="sharpie">My App</Text>
        </Heading>

        <Box my={"2rem"}>
          <Text textAlign="center" fontSize="5rem">
            👋
          </Text>
        </Box>
        <Stack
          direction="column"
          m="auto"
          spacing={3}
          textAlign="left"
          px={[0, 0, "10rem", "20rem"]}
        >
          <Box
            w="full"
            textAlign="left"
            color="loginBtnGray"
            fontFamily="inter"
            fontWeight="normal"
          >
            Signup or Login with
          </Box>
          <HStack
            onMouseEnter={() => setActiveBtn("google")}
            onMouseLeave={() => setActiveBtn("")}
          >
            <Button
              variant="login"
              onClick={() => signInKeyp("GOOGLE")}
              _hover={{
                bg: "googleBlue",
                color: "white",
              }}
            >
              <Image
                src={
                  activeBtn === "google"
                    ? "social-bg-white.svg"
                    : "social-bg-light.svg"
                }
                alt=""
                w="2.5rem"
              />
              <Box position="absolute" ml="0.65rem">
                <FaGoogle
                  color={activeBtn === "google" ? "#4285F4" : "white"}
                  size="20px"
                />
              </Box>
              <Text ml="1rem">Google</Text>
            </Button>
          </HStack>
          <HStack
            onMouseEnter={() => setActiveBtn("discord")}
            onMouseLeave={() => setActiveBtn("")}
          >
            <Button
              variant="login"
              onClick={() => signInKeyp("DISCORD")}
              _hover={{
                bg: "discordBlue",
                color: "white",
              }}
            >
              <Image
                src={
                  activeBtn === "discord"
                    ? "social-bg-white.svg"
                    : "social-bg-light.svg"
                }
                alt=""
                w="2.5rem"
              />
              <Box
                position="absolute"
                ml="0.65rem"
                _hover={{
                  color: "#5865F2",
                }}
              >
                <FaDiscord
                  color={activeBtn === "discord" ? "#5865F2" : "white"}
                  size="20px"
                />
              </Box>
              <Text ml="1rem">Discord</Text>
            </Button>
          </HStack>
          <Box>
            <Text color="#B0B6C1" fontSize="0.75rem" fontFamily="inter">
              Powered by 🍩 Keyp
            </Text>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Login;
```

Create your environment file `.env`:

```bash
# Your application Client ID from https://dev.usekeyp.com
KEYP_CLIENT_ID=
# Domain where you serve the app
NEXTAUTH_URL=http://localhost:3000 
# Random string for NextAuth cookies. Generate using: openssl rand -base64 32
NEXTAUTH_SESSION_COOKIE_SECRET= 
```

Update your redirect URLs in the Keyp Dev Portal. In this example, the url would be:

```
http://localhost:3000/api/auth/callback/keyp
```

Thats it! You can now authenticate users with Keyp. To view details about the user, grab the session using the `next-auth` hook.

```js
import { useSession } from "next-auth/react";

const session = useSession();
const address = session && session.user.address;
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

<!-- Call the API using the SDK:

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
``` -->

Use your App or the Postman Collection to make API calls

### Axios

Grab the user's `Access Token` to access the API:

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

### Postman Collection

Grab your own access token from the Dev Portal to use Postman.

- **[Keyp Public Workspace - Postman](https://www.postman.com/speeding-spaceship-663022/workspace/keyp-public-workspace/collection/25667367-e1156fb2-60c3-4a42-b76b-47902a22512e?ctx=documentation)**
- 
**Applications and access tokens are network-specific**, so in order to use other networks, besides polygon, you'll need to create your own application.

![Postman Environment](/img/dev-portal-postman-environment.png)

Learn more in [Authentication](/api/authentication)