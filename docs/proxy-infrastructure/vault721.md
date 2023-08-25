---
description: Tracker and builder of DSProxy contracts
---

# Vault721

**Smart contract code:** [**Vault721**](https://github.com/UseKeyp/od-contracts/blob/main/src/contracts/proxies/Vault721.sol)****

## 1. Summary <a href="#1-introduction-summary" id="1-introduction-summary"></a>

`Vault721` is an ERC721 that mints NFT-Vaults and serves as an `ODProxy` factory and registry. Once the user builds their proxy, they can interact with the protocol. When a user opens a safe, a NFT-Vault is minted to their account, which  controls the ownership and transferability of the safe, where the tokenId is equal to the safeId. Transferrence of an NFT-Vault equates to the transferrence of the corresponding safe.

**Note:** NFT-Vault is owned directly by user account, whereas the safe is owned by the user's proxy.

## 2. Contract Variables & Functions <a href="#2-contract-details" id="2-contract-details"></a>

**Variables**

* `safeManager` - address of SafeManager that recieves calls from the ODProxy
* `governor` - address of DAO governance

**Data Structures**

* `_proxyRegistry` - mapping of proxy addresses to their owners
* `_userRegistry` - mapping of user addresses to their proxies

**Functions**

* `initialize()` - sets safeManager on deployment
* `getProxy(user: address)` - returns proxy of a user
* `build()` - create a new ODProxy for caller
* `build(user: address)` - create a new ODProxy for user
* `mint(proxy: address, safeId: uint)` - called by the SafeManager on `openSAFE`, mints NFT to user wallet that gate-keeps safe
* `updateImplementation(safeManager: address)` - authed to governor, updates safeManager

**Overrided / Inherited Functions: ERC721**

* `safeTransferFrom(from: address, to: address, tokenId: uint)` - transfer token, enforce `onERC721Received`
  * `_afterTokenTransfer` - enforces SafeManager.`transferSAFEOwnership`
* `transferFrom(from: address, to: address, tokenId: uint)` - transfer token
  * `_afterTokenTransfer` - enforces SafeManager.`transferSAFEOwnership`

**Events**

* `CreateProxy` - emitted on `_build`
  * user - address of user
  * proxy - address of proxy owned by user
* `Transfer` - emitted on `_transfer`
  * from - address of sender
  * to - address of reciever
  * tokenId - uint of NFT id
* `Approval` - emitted on `_approve`
  * owner - address of sender
  * approved - address of approved account
  * tokenId - uint of approved NFT id
* `ApprovalForAll` - emitted on `_setApprovalForAll`
  * owner - address of owner
  * operator - address of operator
  * approved - bool of operator approval
