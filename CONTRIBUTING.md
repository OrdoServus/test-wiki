# Beitrag leisten (CONTRIBUTING)

Vielen Dank fur dein Interesse, zu diesem Projekt beizutragen. Dieses Repository enthalt die Dokumentation fur OrdoServus und wird mit Docusaurus betrieben.

Bitte lies diese Richtlinien sorgfaltig durch, bevor du einen Pull Request eroffnest.

---

## Grundprinzipien

- Beitrage sollen die Qualitat, Verstandlichkeit und Aktualitat der Dokumentation verbessern.
- Der Umgang miteinander erfolgt respektvoll, freundlich und transparent.
- Inhalte sollen klar, nachvollziehbar und gut strukturiert sein.

---

## Wie du beitragen kannst

### 1. Fehler melden (Issues)
Wenn du einen Fehler findest:
- Prufe, ob bereits ein Issue existiert.
- Erstelle ein neues Issue mit:
  - einer klaren Beschreibung
  - Schritten zur Reproduktion (falls zutreffend)
  - erwartetem vs. tatsachlichem Verhalten
  - Screenshots oder Logs (falls sinnvoll)

### 2. Verbesserungen vorschlagen
Feature- oder Inhaltsvorschlage sind willkommen. Bitte beschreibe:
- den Nutzen fur die Nutzerinnen und Nutzer
- mogliche Umsetzungsideen
- eventuelle Risiken oder Abhangigkeiten

### 3. Code- und Content-Beitrage (Pull Requests)
Bevor du einen PR erstellst:
1. Erstelle ein Issue oder kommentiere ein bestehendes.
2. Forke das Repository.
3. Erstelle einen Branch mit einem klaren Namen, z. B. `feature/notizbuch-update`, `fix/typos`, `docs/startleitfaden`.
4. Schreibe saubere, gut strukturierte Anderungen.
5. Beschreibe im PR:
   - was geandert wurde
   - warum es geandert wurde
   - wie es getestet wurde

---

## Entwicklungsworkflow

### Lokales Setup
```bash
npm install
```

### Lokaler Dev-Server
```bash
npm run start
```

### Qualitatschecks (empfohlen vor PRs)
```bash
npm run typecheck
npm run build
```

---

## Struktur und Inhalte

- Inhalte liegen in `docs/` (MD/MDX).
- Statische Dateien (z. B. Bilder) liegen in `static/`.
- Die Navigation wird in `sidebars.ts` gepflegt.
- Site-Einstellungen sind in `docusaurus.config.ts` hinterlegt.

---

## Sicherheit
Wenn du eine Sicherheitslucke findest:
- Bitte kein offentliches Issue erstellen.
- Melde dich uber die Hinweise in `SECURITY.md`.

---

## Lizenz
Mit deinem Beitrag erklarst du dich einverstanden, dass dein Beitrag unter der MIT-Lizenz dieses Projekts veroffentlicht wird.

---

## Danke
Jeder Beitrag hilft, die Dokumentation fur OrdoServus besser zu machen. Vielen Dank fur deine Unterstutzung.
