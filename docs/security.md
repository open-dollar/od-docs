---
sidebar_position: 10
sidebar_label: "User Account Security"
---

# User Account Security

User accounts created on Keyp are non-custodial in nature: Keyp does not store any private keys nor does it have the ability to.

Currently in V1 (prototypes only) token transfers are not permission-controlled. App devs can move any approved tokens for a user who signed up on their site. An integrated permissions system unleashing a suite of account abstraction tools is coming soon in V2, early in Q2 2023.

## MPC

Private keys are never stored in one place. They are cryptographically split up into several pieces. Each part of the key is encrypted and stored by a different validator. Multi-Party Compute is used to combine all the parts when a user has successfully authenticated using OAuth.

## Service Providers

One of Keyp's service providers is [Web3Auth](https://web3auth.io/), a network that Keyp is built on top of and fortunate enough to be partnered with as well. Web3Auth provides excellent security protocols that Keyp employs to create its secure login system.

### The Difference Between Keyp Logins and Web3Auth

Keyp has added a number of account features:

- Improved Permissions system, so users can approve daily spending limits, item/app specific tokens approval, and more.
- Users get the same public address between multiple different apps built on Keyp making it easy to see all their items in one place and providing the benefit of **only having to onboard users new to web3 once** instead of once per app.
- Gasless transaction tools

## Audits

Internal security audits and multi-signature contract audits are planned for Q2 2023.
