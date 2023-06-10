---
sidebar_position: 2
sidebar_label: "@usekeyp/ui-kit"
---

# `@usekeyp/ui-kit`

The UI Kit is a package that allows you to easily integrate pre-built frontend components into your application.

## Usage 📖

1. Add package to your project:  
   `yarn add @usekeyp/ui-kit`

<details>
  <summary>Next.js</summary>

1. Install dependencies with `yarn install` or `npm install`
2. Configure Tailwind CSS using the Tailwind CSS team's [Next.js guide](https://tailwindcss.com/docs/guides/nextjs)
3. Configure `tailwind.config.js` to compile the UI Kit's CSS styles and use its plugin:

```js
// tailwind.config.js
module.exports = {
   /**
    * The content array must include the path to:
    * - The UI Kit's source files 
    * - Any files in your project that use Tailwind CSS
    */
  content: ["./node_modules/@usekeyp/ui-kit/**/*.{js,jsx,ts,tsx,md}"],
  theme: {
    extend: {},
  },
  plugins: [require("@usekeyp/ui-kit/plugin")],
}
```

4. If using an _app.js file, you may have to import your globals.css file in _app.js if your Tailwind CSS styles aren't appearing:

```js
// _app.js
import "@styles/globals.css";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
```
</details>

<details>
  <summary>React</summary>

1. Install dependencies with `yarn install` or `npm install`
2. Configure Webpack:

   - Run `yarn eject` to customize the Webpack configuration.
   - Update `webpack.config.js` by including the new path for the UI Library:

```js
// webpack.config.js
  {
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      include: paths.uiLibrary,
      loader: require.resolve("babel-loader"),
      options: {
          customize: require.resolve(
              "babel-preset-react-app/webpack-overrides"
          ),
          presets: [
              [
                  require.resolve("babel-preset-react-app"),
                  {
                      runtime: hasJsxRuntime ? "automatic" : "classic",
                  },
              ]
          ],
          plugins: [
              isEnvDevelopment &&
              shouldUseReactRefresh &&
              require.resolve("react-refresh/babel"),
          ].filter(Boolean),
          cacheDirectory: true,
          cacheCompression: false,
          compact: isEnvProduction,
      },
  }
```

3. Add the UI Library path in `paths.js`:

```js
// paths.js
  module.exports = {
      ...,
      uiLibrary: resolveApp("./node_modules/@usekeyp/ui-library/"),
  };
```

4. Add Tailwind CSS:

   - Ensure Tailwind CSS is properly configured in your application to merge tailwind.config.js files. Here's an example of what that should look like:

```js
// tailwind.config.js
  const packageTailwindConfig = require("@usekeyp/ui-library/tailwind.config.cjs");
  const { merge } = require("lodash");

  module.exports = {
      content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./node_modules/@usekeyp/ui-library/src/**/*.{js,jsx,ts,tsx,md}",
      ],
      theme: merge({}, packageTailwindConfig.theme, {
      extend: {},
      }),
      plugins: packageTailwindConfig.plugins.concat([]),
  };
```

5. Build the output.css file.  
   Example:  
   `npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch -c tailwind.config.js`

6. Add output.css to `App.js`.

</details>

Finally, utilize the components in your project:

```js
import { LoginPortal } from "@usekeyp/ui-kit";

const LoginPage = () => {

  const onClick = (providerType) => {
   // custom auth logic depending on the app
  }

  return (<><LoginPortal onClick={onClick} /><>)
}
```

## Resources 🧑‍💻

- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)

More configuration options and components will be available soon.