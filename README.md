# OrdoServus Wiki

Die Dokumentations- und Wissensbasis rund um OrdoServus. Dieses Repository enthalt die Docusaurus-Website (deutsch) und die Inhalte in `docs/`.

## Voraussetzungen
- Node.js `>=20`
- npm

## Lokal starten
1. Abhangigkeiten installieren:
   ```bash
   npm install
   ```

2. Entwicklungsserver starten:
   ```bash
   npm run start
   ```

Die Seite ist danach unter der lokalen Adresse erreichbar, die Docusaurus im Terminal ausgibt.

## Build und Vorschau
- Produktionsbuild:
  ```bash
  npm run build
  ```
- Lokale Vorschau des Builds:
  ```bash
  npm run serve
  ```

## Projektstruktur (Auszug)
```
ordowiki/
├── docs/                 # Dokumentationsseiten (MD/MDX)
├── src/                  # React-Komponenten, Styles
├── static/               # Statische Assets (Bilder, Dateien)
├── docusaurus.config.ts  # Site-Konfiguration
├── sidebars.ts           # Sidebar-Definition
└── package.json          # Scripts und Abhangigkeiten
```

## Beitragen
Siehe `CONTRIBUTING.md` fur Details zu Issues und Pull Requests.

## Sicherheit
Siehe `SECURITY.md` fur den Umgang mit Sicherheitsmeldungen.

## Lizenz
Dieses Projekt ist unter der MIT-Lizenz lizenziert. Siehe `LICENSE`.
