// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Open Dollar Docs",
  tagline: "The no brainer onboarding stack for web3.",
  url: "https://docs.opendollar.com",
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
      {
        hashed: true,
        language: ["en"],
        indexPages: true,
        docsRouteBasePath: "/",
      },
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
          editUrl: "https://github.com/UseKeyp/od-docs/tree/main",
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
          alt: "Open Dollar Logo",
          src: "img/full-logo.svg",
          srcDark: "img/full-logo.svg",
        },
        items: [
          {
            href: "https://opendollar.com",
            label: "Website",
            position: "left",
          },
          {
            href: "https://opendollar.com/blog",
            label: "Blog",
            position: "right",
          },
          {
            href: "https://github.com/usekeyp",
            label: "GitHub",
            position: "right",
          }
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Overview",
                to: "/",
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
                href: "https://twitter.com/opendollar",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                href: "https://blog.opendollar.com",
              },
              {
                label: "GitHub",
                href: "https://github.com/usekeyp",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Open Dollar. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
