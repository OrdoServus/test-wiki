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

  // Produktions-URL deiner Website
  url: 'https://ordoservus.github.io',
  baseUrl: '/',

  // GitHub Pages Konfiguration
  organizationName: 'ordoservus',
  projectName: 'ordowiki',

  onBrokenLinks: 'throw',

  // Sprache auf Deutsch setzen
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
    image: 'img/ordoservus-social-card.jpg',
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
          to: '/docs/liturgie/einleitung',
          label: '⛪ Liturgie',
          position: 'left',
        },
        {
          to: '/docs/verwaltung/uebersicht',
          label: '🗂️ Verwaltung',
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
              label: 'Liturgie',
              to: '/docs/liturgie/einleitung',
            },
            {
              label: 'Verwaltung',
              to: '/docs/verwaltung/uebersicht',
            },
          ],
        },
        {
          title: 'Ressourcen',
          items: [
            {
              label: 'Messbuch',
              to: '/docs/liturgie/messbuch',
            },
            {
              label: 'Stundengebet',
              to: '/docs/liturgie/stundengebet',
            },
            {
              label: 'Kalender',
              to: '/docs/verwaltung/kalender',
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
