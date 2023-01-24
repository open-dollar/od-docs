// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Keyp Docs",
  tagline: "The no brainer onboarding stack for web3.",
  url: "https://docs.usekeyp.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "UseKeyp", // Usually your GitHub org/user name.
  projectName: "usekeyp-docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/UseKeyp/usekeyp-docs/tree/main",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "Keyp Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "https://blog.usekeyp.com",
            label: "Blog",
            position: "right",
          },
          {
            href: "https://github.com/usekeyp/usekeyp-docs",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://schedule.usekeyp.com",
            label: "Partner with us",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Get Started",
                to: "/get-started/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.usekeyp.com",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/usekeyp",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                href: "https://blog.usekeyp.com",
              },
              {
                label: "GitHub",
                href: "https://github.com/usekeyp",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UseKeyp. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
