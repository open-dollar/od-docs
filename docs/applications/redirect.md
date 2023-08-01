---
sidebar_position: 3
sidebar_label: "Redirect URLs"
---

# Redirect URLs

Here are the steps to determine your application's Redirect URL:

1. Find your app's domain. For development, this is usually localhost eg. `http://localhost:3000`
2. Determine the callback path for the OAuth library you're using. For example,  if using the `next-auth` package, this is `/api/auth/callback/keyp`.
3. You may need multiple redirect urls for both testing and production. Here's a typical example set:

   1. http://localhost:3000/api/auth/callback/keyp
   2. https://ready-player-one.vercel.app/api/auth/callback/keyp
   3. http://app.example.com/api/auth/callback/keyp

## What is a Redirect URL

A redirect URL is a callback URL that the OAuth2.0 provider (Keyp) uses to redirect the user back to your website after authentication. It is a critical component of the OAuth2.0 flow as it helps protect client credentials and ensure secure access token exchange.

#### Going Live

When you're ready to go live, you should create a separate client for production use only.
  
Production applications must use `https://` for Redirect URLs.
