---
sidebar_position: 9
sidebar_label: "Gas"
---

# Gas

To make a transaction on a blockchain like Ethereum, Polygon or Arbitrum, etc. users typically have to pay gas fees which are distributed to block builders for validating the network. We believe that gas fees are often confusing to new users and does not offer users a great experience who have to onramp themselves before being able to do anything.

Making transactions through Keyp's API and other Keyp tools will not require a user to interact with gas fees in any way. As part of our onboarding stack, transactions are submitted with a combination (depending on the network) of _gasless meta-transactions_ or _Just-In-Time Gas Money_.

## Gasless Meta-Transactions

Ethereum Gas Station Network (GSN) abstracts the process of paying for gas away from end users which minimizes UX friction for dapps. With GSN, gasless clients can interact with Ethereum smart contracts without users needing ETH for transaction fees. The GSN is a decentralized system that improves dapp usability without sacrificing security.

For more info, check out [Open GSN](https://docs.opengsn.org/).

## Just-In-Time Gas Money

Just-In-Time Gas Money is an internal service that airdrops users just the right amount of money for gas to complete their transaction, just as it is submitted to the network.
