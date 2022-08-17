/*
    Docusaurus configuration for docs (production version)
    docs.plasticscanner.com
*/

// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion
  
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Plastic Scanner documentation',
  tagline: 'Making it simple to work on the plastic scanner',
  url: 'https://docs.plasticscanner.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  favicon: '/img/favicon.ico',
  organizationName: 'Plastic-Scanner',              // Usually your GitHub org/user name.
  projectName: 'documentation-production',         // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: false,
          showLastUpdateTime: true,
          routeBasePath: '/',           // Serve the docs at the site's root
          editUrl: 'https://github.com/Plastic-Scanner',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Plastic Scanner',
        logo: {
          alt: 'Plastic scanner logo',
          src: '/img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/Plastic-Scanner',
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
              {
                label: 'Documentation',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Plastic Scanner Website',
                href: 'https://plasticscanner.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Plastic-Scanner',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} Plastic Scanner Project. Built with ♥ and with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
