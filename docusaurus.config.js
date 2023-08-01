// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Keyp Docs",
  tagline: "The no brainer onboarding stack for web3.",
  url: "https://docs.UseKeyp.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

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
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
        language: ["en"],
        indexPages: true,
        docsRouteBasePath: "/",
      }),
    ],
  ],
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
          sidebarCollapsed: false,
          sidebarCollapsible: false,
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
      image: "img/docs-og-image-1200x630.png",
      navbar: {
        logo: {
          alt: "Keyp Logo",
          src: "img/logo.svg",
          srcDark: "img/logo-white.svg",
        },
        items: [
          {
            href: "https://usekeyp.com",
            label: "Website",
            position: "left",
          },
          {
            href: "https://dev.usekeyp.com",
            label: "Dev Portal",
            position: "left",
          },
          {
            href: "https://app.usekeyp.com",
            label: "App",
            position: "left",
          },
          {
            href: "https://usekeyp.com/blog",
            label: "Blog",
            position: "right",
          },
          {
            href: "https://github.com/usekeyp",
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
                label: "Quick Start",
                to: "/",
              },
              {
                label: "Postman",
                to: "api/postman",
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
        copyright: `Copyright © ${new Date().getFullYear()} Keyp. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
