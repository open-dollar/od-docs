---
sidebar_position: 2
sidebar_label: "Quick Start"
---

# Getting Started

1. Create an applicaton in the developer portal
2. Use an OAuth2.0 library to authenticate users (eg. Passport.js)
3. Use the API to airdrop tokens to your users

## Creating a developer account

Log in to https://dev.UseKeyp.com and sign-in with Google, Discord, or your Chess.com account.

![Login Page](/img/dev-portal-login-page.png)

## Getting a Client ID

On your developer account page, select "Create Client", which will generate a new `Client ID`. You can create as many clients as you would like.

![Client Generation](/img/dev-portal-client-gen.gif)

## Connecting Keyp to your application

Keyp works like other social login providers (Google, Facebook, etc.) which use OAuth2.0 to authenticate and give access to user accounts. You can also skip this step and start using the API immediately.

OAuth libraries are available in a variety of languages and environments:

_JavaScript_

- [oauth4webapi](https://github.com/panva/oauth4webapi)
- [Passport.js](https://www.passportjs.org/packages/passport-oauth2/)
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

### Example applications

We created a few example apps which you can use to get started:

- **ExpressJS** - [usekeyp-example-app-express](https://github.com/UseKeyp/usekeyp-example-app-express/)
- **RedwoodJS** - [usekeyp-example-app-redwood](https://github.com/UseKeyp/usekeyp-example-app-redwood/)

Learn more in the [OAuth](/oauth) section.

## Using the API to move tokens

With a user's Access Token, you can see info about their account, and make certain transactions they've authorized.

To start using the API immediately, copy your own Access Token from your developer account.

> Access tokens and clients are network-specific. In order to use other networks besides Polygon, you'll need to create a Keyp App, select the desired network, and log in there.

![Access Token](/img/dev-portal-access-token.png)

We created a Postman Workspace for your convenience. Under "Environment", enter your access token for the variable `ACCESS_TOKEN`.

- Postman [Keyp Public Workspace](https://www.postman.com/speeding-spaceship-663022/workspace/keyp-public-workspace/collection/25667367-e1156fb2-60c3-4a42-b76b-47902a22512e?ctx=documentation)

![Postman Environment](/img/dev-portal-postman-environment.png)

Now you can begin receiving and sending tokens to your Wallet on Matic network.
