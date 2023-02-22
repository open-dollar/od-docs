---
sidebar_position: 7
sidebar_label: "Applications & Redirect URLs"
---

# Applications & Redirect URLs

## What is an Application?

An application is OAuth2.0 client, we generate so you can authenticate your users using Keyp. Applications are web3 network-specific.

The name, icon, and policy you choose for your application will be displayed on the consent screen during sign-in.

Developers can multiple applications under the same Keyp account. We suggest creating separate applications for testing and production purposes.

## What is a redirect URL?

A redirect URL is the endpoint where the OAuth grant token is returned when you app authenticates using Keyp.

## What should my redirect URL be?

This depends on your specific OAuth2.0 library or implementation. However, here are some commonly used paths for different libraries:

- Passport.js `<APP-DOMAIN>/auth/callback`
- usekeyp-example-app-redwood `<APP-DOMAIN>/redirect/keyp`
- usekeyp-example-app-express `<APP-DOMAIN>/redirect/keyp`

#### Development and testing

`APP-DOMAIN` should be the location of your local development server eg. `http://localhost:3000/redirect/keyp`.

> Redirect URLs should use `http://` when they are served from "localhost" or "0.0.0.0"

#### Production-ready

`APP-DOMAIN` should be the location of your hosted production-ready application eg. `https://example.com/redirect/keyp`

> NOTE: Production applications must use `https://`
