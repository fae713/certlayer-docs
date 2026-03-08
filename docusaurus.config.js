// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes: prismThemes} = require('prism-react-renderer');
const lightCodeTheme = prismThemes.github;
const darkCodeTheme = prismThemes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CertLayer Docs',
  tagline: 'Accountability, reliability, and security for Web3 infrastructure.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.certlayer.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'certlayer',
  projectName: 'certlayer-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Serve docs at root
          editUrl: 'https://github.com/fae713/certlayer-docs/tree/main/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/certlayer-social-card.png',
      navbar: {
        title: 'CertLayer',
        logo: {
          alt: 'CertLayer Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'certlayerSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/Kodark220/CERTLAYER',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'What is CertLayer?', to: '/' },
              { label: 'Architecture', to: '/architecture/architecture-overview' },
              { label: 'Developers', to: '/developers/developer-overview' },
            ],
          },
          {
            title: 'Community',
            items: [
              //{ label: 'Twitter', href: 'https://twitter.com/certlayer' },
              //{ label: 'Discord', href: 'https://discord.gg/certlayer' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'GitHub', href: 'https://github.com/Kodark220/CERTLAYER' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CertLayer. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['solidity', 'python'],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
