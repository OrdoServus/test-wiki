import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OrdoServus Wiki',
  tagline: 'Liturgie und Gemeindeverwaltung leicht gemacht',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://ordoservus.github.io',
  baseUrl: '/',

  organizationName: 'ordoservus',
  projectName: 'ordowiki',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/ordoservus/ordowiki/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'OrdoServus',
      logo: {
        alt: 'OrdoServus Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '📖 Dokumentation',
        },
        {
          to: '/docs/Funktion/intro',
          label: '🗂️ Funktionen',
          position: 'left',
        },
        {
          href: 'https://github.com/ordoservus/ordowiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Dokumentation',
          items: [
            {
              label: 'Einführung',
              to: '/docs/intro',
            },
            {
              label: 'OrdoServus',
              href: 'https://github.com/ordoservus/ordowiki',
            },
          ],
        },
        {
          title: 'Funktionen',
          items: [
            {
              label: 'Startleitfaden',
              to: '/docs/Start/startleitfaden',
            },
            {
              label: 'Notizbuch',
              to: '/docs/Funktion/notizbuch',
            },
            {
              label: 'GD-Planer',
              to: '/docs/Funktion/gd-planer',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ordoservus/ordowiki',
            },
            {
              label: 'Mitwirken',
              to: '/docs/mitwirken',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OrdoServus. Erstellt mit Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
