---
sidebar_position: 3
sidebar_label: "API v1.0"
---

# API

The Keyp API can be used for completing transactions that users have signed, connecting on and offramps, and more.

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

To get the currently logged in user's public address, use one of the following:

1. During authentication, get the user's address from the returned `JWT`.
2. Get it directly from the API endpoint `/userinfo`.
3. Save it into local storage after OAuth yourself, and read from there.

User private keys are not available to Keyp or apps built on top of Keyp.

## Ramps

Send users to `usekeyp.com/wallet/ramps`
