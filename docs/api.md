---
sidebar_position: 3
sidebar_label: "API v1.0"
---

# Keyp API

The API can be used for signing transactions, connecting on/off-ramps, and more. Use our Postman Workspace to start sending API requests.

[Keyp Postman Workspace](https://www.postman.com/speeding-spaceship-663022/workspace/keyp-public-workspace/collection/25667367-e1156fb2-60c3-4a42-b76b-47902a22512e?ctx=documentation)

It's a public collection, so you can fork the collection to make requests via Postman's web or desktop application.

To make API calls you will need an **Access Token**, which you view using the [Dev Portal](https://dev.UseKeyp.com). Access Tokens are scoped to a single user, for a single application, for a single set of permissions.

### Endpoints

- Tokens
- Transfers
- On/Off Ramps
- Balances

### User Data

To retrieve the currently logged in user's public address, use one of the following:

1. During authentication, get the user's address from the returned `JWT`.
2. Get it directly from the API endpoint `/userinfo`.
3. Save it into local storage after OAuth yourself, and read from there.

> NOTE: Private keys for users are never available to Keyp, and are never available to apps built on top of Keyp.
