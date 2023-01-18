---
sidebar_position: 7
sidebar_label: "Client and Redirect URLs"
---

# Creating client and Redirect URLs

## What is a redirect url?

Where the grant token is returned during the OAuth exchange between your app and Keyp.

## What is a client?

An app that uses Keyp to authenticate its users (eg "login with Keyp")

Redirect urls must be **https** protocol when they are not localhost or 0.0.0.0.

Redirect url is determined by your app. Usually you can just use the default that passport.js says to use, or any similar library.

Developers can have any number of clients under their same Keyp account. We suggest creating separate clients for testing and production.
