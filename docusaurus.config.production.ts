import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
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

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Set this value to '/'.
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Plastic-Scanner/documentation/tree/main',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/Schistoscope-social-card.jpg',
    navbar: {
      title: 'Plastic Scanner',
      logo: {
        alt: 'Plastic Scanner Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/Plastic-Scanner',
          label: 'GitHub',
          position: 'right',
        },
        // {
        //   type: 'doc',
        //   docId: 'introduction',
        //   position: 'left',
        //   label: 'For Developers',
        // },
        // {to: '/blog', label: 'For users', position: 'left'},
        // {to: '/ir', label: 'About IR', position: 'left'},
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
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;