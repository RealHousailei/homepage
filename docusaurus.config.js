// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RealGood',
  tagline: 'Fun for myself',
  url: 'https://luoyaoyu.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  // themes: ['@saucelabs/theme-github-codeblock'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // hideableSidebar: true,
      colorMode: {
        // "light" | "dark"
        defaultMode: 'light',

        // Hides the switch in the navbar
        disableSwitch: true,

        // Important to enforce light mode
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Real Good',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [{ to: 'blog', label: 'Blog', position: 'left' }],
      },
      footer: {
        copyright: `Copyright © 2021 - ${new Date().getFullYear()} RealHousailei. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/blog',
          showReadingTime: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-212552908-1',
          anonymizeIP: true, // Should IPs be anonymized?
        },
      }),
    ],
  ],
};

module.exports = config;
