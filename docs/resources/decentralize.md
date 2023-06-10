---
sidebar_position: 4
sidebar_label: "Decentralization"
---

# Progressive Decentralization

Keyp is currently a partially centralized service, we will never hand waive that away.

Our goal is to continually move Keyp down a path towards decentralizing the entire onboarding stack.

- 2/2 multisig smart contract wallet as default for all users
- Relies on Web3Auth only for social recovery, but is compatible with any EVM account creation tool.
- User’s actual private key is created by combining a token from Keyp Network & EOA, on their device only (Burner Wallet)
- Users can make onchain approvals to delegate Keyp to do things on their behalf (Account Abstraction)
- Keyp serviced by a decentralized network of nodes

![keyp decentralization plan diagram](/img/Keyp_Architecture_Roadmap_v5.png)

## Open Source

Parts of Keyp have been open sourced:

- Redwood Oauth server: https://www.npmjs.com/package/oauth2-server-redwood
- Multi-signature wallets, forked from Gnosis Safe: https://github.com/UseKeyp/safe-contracts
