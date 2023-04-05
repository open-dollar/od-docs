---
sidebar_position: 1
sidebar_label: "Postman Workspace"
---

# Keyp API

Use the API to sign transactions, connect the user to on/off-ramps, and more. We created a Postman Workspace to help you get started using the API quickly.

### Step 1. Get an Access Token

To make API calls you will need an **Access Token**.

Get an Access Token for your **own wallet** using the [Dev Portal](https://dev.UseKeyp.com). 

![Access Token](/img/dev-portal-access-token.png)

- Access Tokens are scoped to a single user, per a single application, per a single set of permissions.
- Your Access Token from the Dev Portal is **limited to the Polygon network**, because the Dev Portal is an app built with Keyp, and therefore the previous bullert applies.
- If you want to use another network, you'll need to create your own Keyp Application.

### Step 2. Open the 🌟 [Postman Workspace](https://www.postman.com/speeding-spaceship-663022/workspace/keyp-public-workspace/collection/25667367-e1156fb2-60c3-4a42-b76b-47902a22512e?ctx=documentation) 🌟

Fork the workspace, and add your Access Token to the Environments section, under `ACCESS_TOKEN` .

![Postman Environment](/img/postman-access-token.png)
