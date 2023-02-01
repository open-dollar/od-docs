---
sidebar_position: 7
sidebar_label: "Client and Redirect URLs"
---

# Creating client and Redirect URLs

## What is a redirect url?

A redirect URL is where the grant token is returned during the OAuth exchange between your app and Keyp.

## What is a client?

A client is an app that uses Keyp to authenticate its users. For example, Login with Keyp.

Redirect urls must be **https** protocol when they are not localhost or 0.0.0.0.

A redirect URL is determined by your app. Usually you can use the default url that passport.js offers or any similar library.

Developers can have any number of clients under the same Keyp account. Although this is convenient, we suggest creating separate clients for testing and production purposes.
