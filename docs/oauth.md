---
sidebar_position: 6
sidebar_label: "OAuth Setup"
---

# OAuth Setup

OAuth2.0 is a standard protocol that allows users to authorize API access to web, desktop and mobile applications. Once access has been granted, the application can utilize the API on behalf of the user.

**The only thing you need to give your users EVM accounts on any network and integrate with Keyp is a Client ID.**

## How does OAuth work?

Here are some great resources if you are new to using OAuth in your application:

- [OAuth 2.0 Simplified](https://www.oauth.com/)
- [An Introduction to OAuth2](https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2) by Mitchell Anicas
- [OAuth Playground](https://www.oauth.com/playground/)

## Integration Examples

### Passportjs

For React apps, we suggest you follow the Passport docs: https://www.passportjs.org/concepts/authentication/oauth/

### Redwood OAuth

[Redwood](https://redwoodjs.com/) is a javascript framework that uses the same kind of code on the front end as the back end. We love them.

Keyp has open sourced a Redwood implementation of a standard OAuth2 server which you can use to add Keyp logins to your app: https://www.npmjs.com/package/oauth2-server-redwood

### Apps without Backends

Your app might be built without a backend, and just built on top of smart contracts, like [Juicebox](https://juicebox.money) for example. This makes it more complicated to create logins, because you have no OAuth server running to verify your users are who they say they are. We're currently exploring some solutions for this. If your app has no backend, please reach out to us and we can talk about the additional security implications required for the integration.

Other wallet integrations coming soon.

# UI / Frontend Modal

Keyp does not currently inject any frontend code into your app or create interactive modals. The frontend implementation is completely up to you.

More options on this coming soon.
