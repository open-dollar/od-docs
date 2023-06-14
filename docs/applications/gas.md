---
sidebar_position: 4
sidebar_label: "Gas"
---

# Gas

Ensure the gas-tanks are always topped-up, or go gasless with one of our offerings below. 

## Just-In-Time Gas

Just-In-Time Gas is a service that automatically sends gas to wallets, once a transaction request is made. This feature is enabled by default for all applications on most networks (see [networks](/coverage/networks)).

### How it works

First, an _initial_ amount is sent, when a new user requests a transaction for the first time on a new network. Subsequently, when a minimum gas threshold is met, a second _top-up_ amount is sent. This ensures that users can interact with any web3 application while avoiding delays due to low or no-gas.


The initial amount, the minimum gas threshold, and the top-up amount are network-dependent, since transaction gas costs vary. Typically a wallet will always have enough gas to support 3-5 transactions. 

## Gasless Meta-Transactions

Ethereum Gas Station Network (GSN) abstracts the process of paying for gas away from end users which minimizes UX friction for dapps. With GSN, gasless clients can interact with Ethereum smart contracts without users needing ETH for transaction fees. The GSN is a decentralized system that improves dapp usability without sacrificing security.

For more info, check out [Open GSN](https://docs.opengsn.org/).

## What is Gas?

To make a transaction on a blockchain like Ethereum, Polygon or Arbitrum, etc. users typically have to pay gas fees which are distributed to block builders for validating the network. We believe that gas fees are often confusing to new users and does not offer users a great experience who have to onramp themselves before being able to do anything.

Making transactions through Keyp's API and other Keyp tools will not require a user to interact with gas fees in any way. As part of our onboarding stack, transactions are submitted with a combination (depending on the network) of _gasless meta-transactions_ or _Just-In-Time Gas Money_.