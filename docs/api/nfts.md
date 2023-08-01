---
sidebar_position: 7
sidebar_label: "/nfts"
---

# /nfts

## Read

### GET `/nfts/:userId`

Get the NFTs owned by a user

Example request

```js
const axios = require('axios')
const ACCESS_TOKEN = 'USER_ACCESS_TOKEN'

// The userId could alternatively be a wallet address
const userId = 'DISCORD-381135787330109441'
const options = { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } }

axios
  .get(`https://api.usekeyp.com/v1/nfts/${userId}`, options)
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error(error)
  })
```

Example response


```json
{
  "ownedNfts": [
    {
      "contract": {
        "address": "0x000001e1b2b5f9825f4d50bd4906aff2f298af4e",
        "name": "Imbued Art",
        "symbol": "IMBUED",
        "totalSupply": "153",
        "tokenType": "ERC721",
        "openSea": {
          "lastIngestedAt": "2023-07-05T02:47:09.000Z"
        },
        "contractDeployer": "0x34eee73e731fb2a428444e2b2957c36a9b145017",
        "deployedBlockNumber": 35886563
      },
      "tokenId": "334",
      "tokenType": "ERC721",
      "title": "Polygon Imbued with Longing, Photo NFT #34",
      "description": "Imbued with Longing a dedication to the driving force of humanity: our ability to dream of something that does not yet exist. By staying present in the moment, while still honoring what we hope for, our longing can become a path.\n\nThese 99 photographic NFTs invite their owners to a Ritual of Longing, where they get to connect with their deepest sense of longing, and express it through words on the blockchain. The physical art piece use these words of longing to generate the patterns flowing through the fabric.\n\nTo enter the ritual, go to http://www.imbuedart.com and log in.",
      "timeLastUpdated": "2023-07-07T17:39:37.164Z",
      "rawMetadata": {
        "image": "https://gateway.pinata.cloud/ipfs/QmYtTdtbMvderFj6T88k5dyST6pAKoYP9YFgejvGAvmKQq/334.jpg",
        "aspect_ratio": 1.4382022471910112,
        "website": "https://www.imbuedart.com/nft/334",
        "tokenID": 334,
        "name": "Polygon Imbued with Longing, Photo NFT #34",
        "is_dynamic": true,
        "description": "Imbued with Longing a dedication to the driving force of humanity: our ability to dream of something that does not yet exist. By staying present in the moment, while still honoring what we hope for, our longing can become a path.\n\nThese 99 photographic NFTs invite their owners to a Ritual of Longing, where they get to connect with their deepest sense of longing, and express it through words on the blockchain. The physical art piece use these words of longing to generate the patterns flowing through the fabric.\n\nTo enter the ritual, go to http://www.imbuedart.com and log in.",
        "attributes": [
          {
            "display_type": "number",
            "value": 4,
            "trait_type": "Edition",
            "max_value": 7
          },
          {
            "value": "Photo NFT",
            "trait_type": "Type"
          },
          {
            "value": "Longing",
            "trait_type": "Emotion"
          },
          {
            "value": "1",
            "trait_type": "Imbuements"
          },
          {
            "value": "hi fren",
            "trait_type": "Last imbued with"
          },
          {
            "value": "0x34EeE73e731fB2A428444e2b2957C36A9b145017",
            "trait_type": "Last imbued by"
          },
          {
            "value": "Balls Black",
            "trait_type": "Pattern"
          },
          {
            "value": "Lingonberry",
            "trait_type": "Palette"
          }
        ],
        "collection_name": "Imbued Weaves"
      },
      "tokenUri": {
        "gateway": "https://api-test.imbuedart.com/api/token/p334",
        "raw": "https://api-test.imbuedart.com/api/token/p334"
      },
      "media": [
        {
          "gateway": "https://nft-cdn.alchemy.com/matic-mainnet/cc3abcb8e9859aede80721dc2b5d4969",
          "thumbnail": "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/matic-mainnet/cc3abcb8e9859aede80721dc2b5d4969",
          "raw": "https://gateway.pinata.cloud/ipfs/QmYtTdtbMvderFj6T88k5dyST6pAKoYP9YFgejvGAvmKQq/334.jpg",
          "format": "jpeg",
          "bytes": 1095149
        }
      ],
      "balance": 1
    }
  ],
  "pageKey": "MHgxMjEzMzBmYTFlNzFjZDMwNTNlNGM1ZjY3NWZlYjQxODJjOTM0NTE0OjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwOTIzODpmYWxzZQ==",
  "totalCount": 2760,
  "blockHash": "0x6c661e584178dd1593618fd67e507ae30158545959769532a4e9e87c88c9da4d"
}
```
