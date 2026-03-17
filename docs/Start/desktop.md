---
sidebar_position: 3
title: Desktop-App
---

# 📖 OrdoServus Desktop – Kunden-Dokumentation

> Willkommen bei OrdoServus Desktop! Diese Dokumentation hilft Ihnen, die Desktop-Anwendung optimal zu nutzen.

---

## 1. Einführung

### Was ist OrdoServus Desktop?

OrdoServus Desktop ist eine native Desktop-Anwendung, die Ihnen den Zugang zu unserer WebApp in einer optimierten Desktop-Umgebung bietet. Sie erhalten alle Funktionen der WebApp in einer eigenständigen Anwendung, die wie ein klassisches Programm auf Ihrem Computer läuft.

### Vorteile der Desktop-App

| Vorteil | Beschreibung |
|---|---|
| 🚀 **Schneller Zugriff** | Die App startet direkt vom Desktop oder aus der Taskleiste |
| 🔔 **Benachrichtigungen** | Erhalten Sie Desktop-Benachrichtigungen direkt auf Ihrem Computer |
| 💻 **Offline-Fähigkeit** | Funktioniert auch bei kurzzeitigen Internetunterbrechungen |
| 🔄 **Automatische Updates** | Die App aktualisiert sich automatisch |
| 📥 **Systemintegration** | Läuft im Hintergrund, minimierbar in den Infobereich |

---

## 2. Installation

### Systemanforderungen

Bevor Sie OrdoServus Desktop installieren, stellen Sie sicher, dass Ihr Computer die folgenden Anforderungen erfüllt:

- **Betriebssystem**: Windows 10/11, macOS 10.14+ oder Linux (Ubuntu 20.04+, Debian 10+)
- **Speicherplatz**: Mindestens 200 MB freier Speicherplatz
- **Internet**: Breitband-Internetverbindung für die Nutzung

### Installationsschritte

#### Windows

1. Laden Sie die Installationsdatei herunter (`.exe` oder `.msi`)
2. Führen Sie die Datei aus und folgen Sie dem Installations-Assistenten
3. Wählen Sie einen Installationsort (Standard: `C:\Programme\OrdoServus`)
4. Klicken Sie auf "Installieren" und warten Sie, bis der Vorgang abgeschlossen ist
5. Starten Sie OrdoServus Desktop nach der Installation

#### macOS

1. Laden Sie die `.dmg`-Datei herunter
2. Öffnen Sie die Datei und ziehen Sie "OrdoServus" in den Applications-Ordner
3. Starten Sie die App aus dem Launchpad oder Applications-Ordner
4. Bei der ersten Ausführung werden Sie möglicherweise gefragt, ob Sie die App öffnen möchten – klicken Sie auf "Öffnen"

#### Linux

1. Laden Sie die entsprechende Paketdatei herunter (`.deb`, `.rpm` oder `.AppImage`)
2. **Debian/Ubuntu**: Doppelklick auf die `.deb`-Datei oder Ausführung von `sudo dpkg -i OrdoServus.deb`
3. **Fedora/RHEL**: Ausführung von `sudo rpm -i OrdoServus.rpm`
4. **AppImage**: Machen Sie die Datei ausführbar und starten Sie sie direkt

---

## 3. Erste Schritte

### Erstmals starten

Nach der Installation starten Sie OrdoServus Desktop zum ersten Mal:

1. **Desktop-Verknüpfung**: Doppelklick auf das OrdoServus-Symbol auf Ihrem Desktop
2. **Startmenü (Windows)**: Suchen Sie nach "OrdoServus" und klicken Sie darauf
3. **Launchpad/Applications (macOS)**: Finden Sie OrdoServus im Applications-Ordner
4. **Anwendungsmenü (Linux)**: Suchen Sie im Dash nach "OrdoServus"

### Willkommensbildschirm

Beim ersten Start sehen Sie kurz das Hauptfenster, das sich automatisch mit unserer WebApp verbindet. Die Ladezeit beträgt in der Regel nur wenige Sekunden.

### Hauptfenster kennenlernen

```
┌─────────────────────────────────────────────────────────┐
│  OrdoServus                              [_] [□] [X]   │  ← Titelleiste
├─────────────────────────────────────────────────────────┤
│  [←] [→] [🔄] [🏠]                        [⚙️]          │  ← Navigationsleiste
├─────────────────────────────────────────────────────────┤
│                                                         │
│                   WebApp-Inhalt                        │
│                                                         │
│                                                         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

- **Titelleiste**: Zeigt den App-Namen und ermöglicht Minimieren, Maximieren und Schließen
- **Navigationsleiste**: Vor/Zurück-Buttons, Aktualisieren, Startseite und Einstellungen
- **Hauptbereich**: Hier wird die WebApp angezeigt

---

## 4. Funktionen & Bedienung

### 4.1 Fensterverwaltung

#### Minimieren, Maximieren, Schließen

| Aktion | Windows | macOS |
|---|---|---|
| Minimieren | Klick auf `_` | Klick auf gelben Button |
| Maximieren | Klick auf `□` | Klick auf grünen Button |
| Schließen | Klick auf `X` | Klick auf roten Button |

#### Fenstergröße und -position merken

OrdoServus Desktop speichert automatisch:
- Die Fenstergröße
- Die Bildschirmposition
- Den Zoom-Level

Beim nächsten Start wird die App genau so angezeigt, wie Sie sie verlassen haben.

### 4.2 System Tray (Infobereich)

Wenn Sie das Fenster schließen, wird die App nicht beendet, sondern läuft im Hintergrund im System Tray weiter.

**Tray-Symbol**: Das OrdoServus-Symbol erscheint in Ihrer Taskleiste (Windows) oder Menüleiste (macOS).

**Tray-Menü** (Rechtsklick auf das Symbol):
- **Öffnen**: Zeigt das Hauptfenster wieder an
- **Nach Updates suchen**: Prüft manuell auf Updates
- **Beenden**: Schließt die App vollständig

### 4.3 Zoom-Funktion

Sie können die Darstellung der App vergrößern oder verkleinern:

| Aktion | Windows | macOS |
|---|---|---|
| Vergrößern | `Strg` + `+` | `Cmd` + `+` |
| Verkleinern | `Strg` + `-` | `Cmd` + `-` |
| Standardgröße | `Strg` + `0` | `Cmd` + `0` |

### 4.4 Vollbildmodus

| Aktion | Windows | macOS |
|---|---|---|
| Vollbild ein/aus | `F11` | `Ctrl` + `Cmd` + `F` |

### 4.5 Kontextmenü (Rechtsklick)

Ein Rechtsklick im Hauptfenster öffnet nützliche Optionen:

- **Zurück**: Zur vorherigen Seite
- **Vorwärts**: Zur nächsten Seite
- **Neu laden**: Aktuelle Seite aktualisieren
- **Zoom-In / Zoom-Out**: Vergrößern/Verkleinern
- **Drucken**: Seite drucken
- **Inspect**: Entwicklertools öffnen (nur bei Bedarf)

### 4.6 Externe Links

Wenn Sie in der App auf einen Link klicken, der zu einer externen Website führt, öffnet sich diese automatisch in Ihrem Standard-Browser – nicht in der App selbst. Dies schützt Ihre Daten und bietet ein vertrautes Surferlebnis.

### 4.7 Benachrichtigungen

OrdoServus Desktop kann Desktop-Benachrichtigungen anzeigen, wenn die App entsprechende Benachrichtigungen von der WebApp sendet.

**Benachrichtigungsrechte**: Die App fragt beim ersten Start, ob Benachrichtigungen erlaubt werden sollen.

---

## 5. Einstellungen

### Einstellungsfenster öffnen

Klicken Sie in der Navigationsleiste auf das **Zahnrad-Symbol (⚙️)** oder verwenden Sie das Tray-Menü.

### Verfügbare Einstellungen

Im Einstellungsfenster finden Sie:

| Einstellung | Beschreibung |
|---|---|
| **App-Version** | Die aktuell installierte Version |
| **Geladene URL** | Die URL der verbundenen WebApp |
| **Nach Updates suchen** | Manuelle Prüfung auf Updates |
| **Seite neu laden** | Aktuelle Seite neu laden |
| **Startseite** | Zurück zur Hauptseite der WebApp |

### Konfiguration (für Administratoren)

Fortgeschrittene Einstellungen können in der Konfigurationsdatei angepasst werden:

**Speicherort**: `src/config.js`

```
js
module.exports = {
  APP_URL: 'https://sob.ch',           // WebApp-URL
  APP_NAME: 'OrdoServus',              // Anzeigename
  WINDOW: { width: 1280, height: 800 },
  AUTO_UPDATE: true,                   // Auto-Update aktivieren
  MINIMIZE_TO_TRAY: true,              // In Tray minimieren
  ALLOW_ZOOM: true,                    // Zoom erlauben
  // ... weitere Einstellungen
};
```

---

## 6. Tastenkürzel

### Navigation

| Aktion | Windows | macOS |
|---|---|---|
| Zurück | `Alt` + `←` | `Cmd` + `←` |
| Vorwärts | `Alt` + `→` | `Cmd` + `→` |
| Neu laden | `Strg` + `R` | `Cmd` + `R` |
| Seite speichern | `Strg` + `S` | `Cmd` + `S` |

### Ansicht

| Aktion | Windows | macOS |
|---|---|---|
| Vollbild | `F11` | `Ctrl` + `Cmd` + `F` |
| Vergrößern | `Strg` + `+` | `Cmd` + `+` |
| Verkleinern | `Strg` + `-` | `Cmd` + `-` |
| Standardzoom | `Strg` + `0` | `Cmd` + `0` |

### Fenster

| Aktion | Windows | macOS |
|---|---|---|
| Schließen | `Strg` + `W` | `Cmd` + `W` |
| Minimieren | `Strg` + `M` | `Cmd` + `M` |

---

## 7. Fehlerbehebung

### 7.1 Keine Verbindung / Verbindungsfehler

**Symptom**: Die App zeigt eine Fehlerseite mit "Keine Verbindung" an.

**Lösungen**:

1. **Internetverbindung prüfen**
   - Stellen Sie sicher, dass Ihr Computer mit dem Internet verbunden ist
   - Testen Sie die Verbindung mit einem anderen Programm oder im Browser

2. **URL prüfen**
   - Die URL in der Konfiguration muss korrekt sein
   - Kontaktieren Sie den Support, wenn die URL falsch ist

3. **Firewall/Proxy prüfen**
   - Manchmal blockieren Firewalls oder Proxy-Server die Verbindung
   - Wenden Sie sich an Ihren IT-Administrator

4. **Erneut versuchen**
   - Klicken Sie auf der Fehlerseite auf "Erneut versuchen"
   - Oder starten Sie die App neu

### 7.2 App startet nicht

**Symptome**: Die App lässt sich nicht öffnen oder stürzt ab.

**Lösungen**:

1. **Computer neu starten**
   - Ein einfacher Neustart kann viele Probleme beheben

2. **App neu installieren**
   - Deinstallieren Sie die alte Version
   - Laden Sie die neueste Version herunter und installieren Sie sie neu

3. **Antivirus prüfen**
   - Manchmal blockiert Antivirus-Software die App
   - Fügen Sie die App zur Ausnahmeliste hinzu

### 7.3 Updates werden nicht installiert

**Symptom**: Die App meldet, dass ein Update verfügbar ist, aber die Installation schlägt fehl.

**Lösungen**:

1. **Manuell erneut versuchen**
   - Öffnen Sie das Einstellungsmenü und klicken Sie auf "Nach Updates suchen"

2. **Internetverbindung prüfen**
   - Updates erfordern eine aktive Internetverbindung

3. **Manuelle Installation**
   - Laden Sie die neueste Version manuell von der Website herunter

### 7.4 Benachrichtigungen funktionieren nicht

**Lösungen**:

1. **Berechtigungen prüfen**
   - Gehen Sie in die Systemeinstellungen → Benachrichtigungen
   - Erlauben Sie Benachrichtigungen für OrdoServus

2. **In-App-Einstellung prüfen**
   - Öffnen Sie die Einstellungen in der App
   - Stellen Sie sicher, dass Benachrichtigungen aktiviert sind

### 7.5 Zoom funktioniert nicht

**Lösungen**:

1. **In den Einstellungen prüfen**
   - Die Zoom-Funktion muss in der Konfiguration aktiviert sein
   - Kontaktieren Sie den Administrator

2. **Tastenkombination prüfen**
   - Vergewissern Sie sich, dass Sie die richtige Tastenkombination verwenden

---

## 8. FAQ – Häufig gestellte Fragen

### F: Was ist der Unterschied zwischen der Desktop-App und der WebApp im Browser?

**A**: Die Desktop-App bietet eine optimierte Erfahrung mit:
- Schnellerem Zugriff (kein Öffnen des Browsers nötig)
- Systemintegration (Tray, Benachrichtigungen)
- Offline-Fähigkeit bei kurzen Unterbrechungen
- Persistenter Sitzung

### F: Muss ich immer online sein, um die App zu nutzen?

**A**: Ja, die App benötigt eine Internetverbindung, um eine Verbindung zur WebApp herzustellen. Bei kurzzeitigen Unterbrechungen zeigt die App eine entsprechende Meldung an.

### F: Wie aktualisiere ich die App?

**A**: OrdoServus Desktop aktualisiert sich automatisch. Sie können auch manuell im Einstellungsmenü nach Updates suchen.

### F: Kann ich die App deinstallieren?

**A**: Ja, wie jedes andere Programm auch:
- **Windows**: Systemsteuerung → Programme → Deinstallieren
- **macOS**: Applications-Ordner → OrdoServus in den Papierkorb ziehen
- **Linux**: Systempaketmanager → OrdoServus entfernen

### F: Wo werden meine Daten gespeichert?

**A**: Die App speichert:
- Fensterposition und -größe
- Zoom-Level
- Einstellungen

Keine sensiblen Daten werden lokal gespeichert. Alle Daten bleiben auf dem Server.

### F: Ich habe mein Passwort vergessen. Was nun?

**A**: Die Passwort-Wiederherstellung erfolgt über die WebApp. Klicken Sie auf "Passwort vergessen" im Anmeldebildschirm.

### F: Die App friert ein. Was soll ich tun?

**A**:
1. Öffnen Sie den Task-Manager (Windows) oder Activity Monitor (macOS)
2. Beenden Sie den OrdoServus-Prozess
3. Starten Sie die App erneut

### F: Kann ich die App auf mehreren Computern nutzen?

**A**: Ja, Sie können die App auf beliebig vielen Geräten installieren. Melden Sie sich einfach mit Ihrem Konto an.

### F: Wo finde ich die neueste Version?

**A**: Die neueste Version wird automatisch heruntergeladen. Sie können sie auch manuell von unserer Website herunterladen.

### F: An wen kann ich mich bei Problemen wenden?

**A**: Siehe den nächsten Abschnitt "Kontakt & Support".

---

## 9. Kontakt & Support

### Technischer Support

Bei technischen Problemen oder Fragen können Sie sich an unser Support-Team wenden:

- **E-Mail**: support@ordoservus.ch
- **Telefon**: +41 44 123 45 67 (Mo–Fr, 9:00–17:00 Uhr)

### Feedback

Haben Sie Verbesserungsvorschläge oder Feature-Wünsche? Wir freuen uns über Ihr Feedback!

- **E-Mail**: feedback@ordoservus.ch

### Rechtliches

- **Datenschutzerklärung**: [Link zur Datenschutzerklärung]
- **Nutzungsbedingungen**: [Link zu den Nutzungsbedingungen]
- **Impressum**: [Link zum Impressum]

---

## 📄 Versionshistorie

| Version | Datum | Änderungen |
|---|---|---|
| 1.0.0 | Januar 2025 | Erste Version der Kunden-Dokumentation |

---

> Vielen Dank, dass Sie OrdoServus Desktop verwenden! Bei Fragen stehen wir Ihnen gerne zur Verfügung.

---

*© 2025 OrdoServus. Alle Rechte vorbehalten.*
