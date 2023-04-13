---
sidebar_position: 2
sidebar_label: "OAuth Setup"
---

# OAuth Setup

OAuth2.0 is a standard protocol that allows users to authorize API access to web, desktop and mobile applications. Once access has been granted, the application can utilize the API on behalf of the user.

**The only thing you need to generate EVM accounts for users on any network is a Client ID.**

Because OAuth2.0 is just a specification, the actual implementation will be up to you. However, there are plenty of examples and open-source libraries available.  

> Want to test out the API before diving in deeper? Check out the API docs.

## How does OAuth work?

Here are some great resources if you are new to using OAuth in your application:

- [OAuth 2.0 Simplified](https://www.oauth.com/)
- [An Introduction to OAuth2](https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2) by Mitchell Anicas
- [OAuth Playground](https://www.oauth.com/playground/)

## Examples

### React, JavaScript and Node.js

For JavaScript apps like React SPAs, we suggest you follow the Passport docs https://www.passportjs.org/concepts/authentication/oauth/ or for Next.js apps, using https://next-auth.js.org/

### Redwood OAuth

[Redwood](https://redwoodjs.com/) is a javascript framework that uses the same kind of code on the front end as the back end. We love them.

Keyp has open sourced a Redwood implementation of a standard OAuth2 server which you can use to add Keyp logins to your app: https://www.npmjs.com/package/oauth2-server-redwood

### Apps without Backends

Your app might be built without a backend, and just built on top of smart contracts, like [Juicebox](https://juicebox.money) for example. This makes it more complicated to create logins, because you have no OAuth server running to verify your users are who they say they are. We're currently exploring some solutions for this. If your app has no backend, please reach out to us and we can talk about the additional security implications required for the integration.

Other wallet integrations coming soon.

## User Data

During the OAuth2 flow, you will be returned a signed JWT from the `/token` endpoint. You can use this to get the user's wallet address using the `/me` endpoint. Note that you can also get user data from the `/users/:userId` endpoint.

Here is an example for your reference:

```js
import fetch from 'cross-fetch'
import { decode } from 'jsonwebtoken'
import { db } from 'src/lib/db'

// You'll need to change these values
const REDIRECT_URI = "http://localhost:3000/api/auth/callback/keyp"
const KEYP_CLIENT_ID = "YOUR_KEYP_APPLICATION_CLIENT_ID" 

const encodeBody = (body) =>
  Object.keys(body)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(body[key]))
    .join('&')

// Run when the user returns to your application with the OAuth code from Keyp
export const onSubmitCode = async (code, { codeVerifier }) => {
  const body = {
    grant_type: 'authorization_code',
    client_id: KEYP_CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    code_verifier: codeVerifier,
    code,
  }

  const response = await fetch('https://api.usekeyp.com/oauth/token', {
    method: 'post',
    body: encodeBody(body),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  }).then(async (res) => {
    const status = res.status
    if (status !== 200) {
      const text = await res.json()
      throw `KEYP API failed for /token. Returned ${status} - ${text.error} ${text.error_description}`
    }
    return res.json()
  })

  if (response.error)
    throw `${response.error} - ${response.hint}. ${response.message}`

  const {
    access_token: accessToken,
    expires_in: expiration,
    id_token: idToken,
  } = response

  if (!response.id_token) throw 'Failed to get id_token'
  const decoded = await decode(idToken)

  const userDetails = await fetch('https://api.usekeyp.com/oauth/me', {
    headers: { Authorization: `Bearer ${accessToken}` },
  }).then((res) => {
    if (res.status != 200) throw 'KEYP authorization failed, or secret invalid'
    return res.json()
  })

  // Token substitution prevention (https://openid.net/specs/openid-connect-core-1_0.html#TokenSubstitution)
  if (decoded.sub != userDetails.sub)
    throw "id_token's sub does not match userInfo"

  const user = await db.user.upsert({
    update: {
      email: userDetails.email,
      address: userDetails.address,
      username: userDetails.username,
      accessToken,
    },
    create: {
      id: userDetails.sub,
      email: userDetails.email,
      address: userDetails.address,
      username: userDetails.username,
      accessToken,
    },
    where: { id: userDetails.sub },
  })
}
```
