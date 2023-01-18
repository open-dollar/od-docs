---
sidebar_position: 5
sidebar_label: "Gas"
---

# Gas

To make a transaction on a blockchain like Ethereum, Polygon, Arbitrum, etc., users generally have to pay gas fees which are given to block builders for validating the network. This is a poor UX for new users who have to onramp themselves before being able to do anything. The fees can feel often confusing to new users.

Making transactions through Keyp's API and tools will not require a user paying, or even knowing about gas fees. As part of our onboarding stack, transactions are submitted with a combination (depending on the network) of _gasless meta-transactions_ or _Just-In-Time Gas Money_.

## Gasless Meta-Transactions

Ethereum Gas Station Network (GSN) abstracts the process of paying for gas away from end users which minimizes UX friction for dapps. With GSN, gasless clients can interact with Ethereum smart contracts without users needing ETH for transaction fees. The GSN is a decentralized system that improves dapp usability without sacrificing security.

For more info, check out [Open GSN](https://docs.opengsn.org/).

## Just-In-Time Gas Money

Just-In-Time Gas Money is an internal service that airdrops users just the right amount of gas money to complete their transaction, right before it is submitted to the network.
