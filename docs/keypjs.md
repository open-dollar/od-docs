---
sidebar_position: 4
sidebar_label: "Importing the Keyp.js file into your project"
---

# Keyp.js

The Keyp.js file is more of a configuration tool, and less of an SDK. It helps format your Keyp logins so you can choose which OAuth services you want your users to be able to connect with: Google, Twitter, Discord, or Chess.com. More coming soon.

Copy the file with the full login flow.

Hit endpoint `/oauth` with `provider` = `DISCORD`
This returns the place to send the user:

```
https://oauth.usekeyp.com/?&provider=DISCORD
```

### Custom

Have a custom social login you would like to be supported? Just let us know.
