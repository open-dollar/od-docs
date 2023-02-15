---
sidebar_position: 3
sidebar_label: "API v1.0"
---

# API

The Keyp API can be used for completing transactions that users have signed, connecting on and offramps, and more. 
<a target="_blank" href="https://www.postman.com/speeding-spaceship-663022/workspace/keyp-public-workspace/collection/25667367-e1156fb2-60c3-4a42-b76b-47902a22512e?ctx=documentation">Check out our Postman Collection</a>
&nbsp;to explore our API endpoints and see example requests. It's a public collection, so you can fork the collection to make requests via Postman's web or desktop application.

To make API calls you will need an `Access Token`, which can be generated in your [dev portal](https://dev.usekeyp.com). Each `Access Token` is unique to each user per each app.

## Tokens

### Get Balance

Coming soon.

### Airdrops

Coming soon.

### Transfers

Coming soon.

### Launching your own tokens through Keyp

Coming soon.

## Oauth

### Get user address

To retrieve the currently logged in user's public address, use one of the following:

1. During authentication, get the user's address from the returned `JWT`.
2. Get it directly from the API endpoint `/userinfo`.
3. Save it into local storage after OAuth yourself, and read from there.

User private keys are not available to Keyp or apps built on top of Keyp.

## Ramps

Send users to `usekeyp.com/wallet/ramps`
