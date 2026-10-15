# Refactoring-Plan und Umsetzung

## Ziel

Die bestehende React/Vite-Anwendung in eine gut verständliche, wartbare und
erweiterbare Form bringen. Das Refactoring soll Verhalten und Gestaltung der
Seite erhalten, Zuständigkeiten klarer ordnen und künftig sichere Änderungen
ermöglichen.

Der Plan wurde am 15. Oktober 2026 umgesetzt. Die Phasen unten dokumentieren
die tatsächlich erledigten Änderungen und die verbleibenden manuellen Prüfungen.

## Ausgangslage

- React 19 mit Vite und JavaScript/JSX.
- Ein Einstiegspunkt und eine einzelne Seite; aktuell ist kein Router vorhanden.
- UI, Theme und Styles waren unter `src/` uneinheitlich gruppiert.
- Theme-Provider und Theme-Toggle waren in `Theme.jsx` kombiniert; Context lag
  separat.
- Globale, Komponenten- und Seitestile waren teilweise vermischt.
- Es gab keine Test-Infrastruktur.
- README enthielt Vite-Vorlageninhalte und die HTML-Seite einen veralteten
  Seitentitel.
- ESLint meldete einen ungenutzten `CardFooter`-Import.

## Umgesetzte Struktur

Die Struktur bleibt bewusst einfach, solange es nur eine Seite gibt. Fachliche
Features erhalten einen eigenen Bereich, wenn sie mehr als eine UI-Komponente
oder zusammengehörige Logik umfassen.

```text
docs/
  conventions.md
  project-structure.md
  refactoring-plan.md
public/
  favicon.svg
  icons.svg
src/
  app/
    App.jsx
    App.scss
    providers/
      ThemeContext.js
      ThemeProvider.jsx
      ThemeProvider.test.jsx
      useTheme.js
  components/
    layout/
      Footer.jsx
      Header.jsx
      Layout.jsx
      Layout.scss
      ThemeToggle.jsx
    ui/
      card/
        Card.jsx
        Card.scss
        Card.test.jsx
  features/
    countdown/
      Countdown.jsx
      Countdown.scss
      Countdown.test.jsx
      countdownConfig.js
      countdownTime.js
      countdownTime.test.js
  styles/
    _tokens.scss
    _themes.scss
    global.scss
  test/
    setup.js
  main.jsx
vitest.config.js
index.html
```

Die Struktur bleibt bewusst einfach, solange es nur eine Seite gibt. Der
Theme-Toggle ist im Header verortet; er liest den zentralen Provider-State.

## Umsetzungsphasen und Ergebnis

### 1. Baseline und Verhaltensvertrag

- Baseline erfasst: Produktionsbuild erfolgreich, Lint meldete den ungenutzten
  `CardFooter`-Import.
- Bestehender Seiteninhalt, Theme-Umschaltung und Countdown-Startwert wurden
  beibehalten.

**Status: erledigt.**

### 2. Repository-Dokumentation und Einstieg

- `README.md` auf projektspezifischen Einstieg, Befehle und Dokumentationslinks
  reduziert.
- Seitentitel und Description in `index.html` auf Syfse abgestimmt; Sprache
  bleibt Englisch, passend zum Seiteninhalt.

**Status: erledigt.**

### 3. App-Shell und Layout

- `Layout`, `Header`, `Footer` und `ThemeToggle` unter
  `src/components/layout/` zusammengeführt.
- Seitenshell von UI- und Feature-Komponenten getrennt.
- Responsive Layout-Regeln in `Layout.scss` gebündelt.

**Status: erledigt.**

### 4. Theme-System konsolidieren

- Context, Provider und Hook in `src/app/providers/` getrennt.
- `currentTheme` bleibt die einzige Laufzeitquelle und wird auf `data-theme`
  am Dokument-Root gespiegelt; die Browser-Theme-Metadaten werden ebenfalls
  aktualisiert.
- Systempräferenz bleibt Initialwert; Theme-Auswahl wird nicht persistiert.
- Hell-/Dunkel-Tokens zentral in `src/styles/_themes.scss` abgelegt.

**Status: erledigt und durch Provider-/Toggle-Test abgedeckt.**

### 5. Komponenten und Styles organisieren

- Card und Card-Stile nach `src/components/ui/card/` verschoben; leere Regeln
  und doppelte Stilzuständigkeiten entfernt.
- Countdown nach `src/features/countdown/` verschoben; Zeitrechnung, Dauer-
  Konfiguration und Darstellung sind getrennt.
- Globale Styles, Theme-Tokens, Layout-, App-, Card- und Countdown-Stile
  getrennt.

**Status: erledigt.**

### 6. Qualitätssicherung

- ESLint-Fehler behoben.
- Vitest, jsdom und React Testing Library ergänzt.
- Tests für Countdown-Umrechnung, Ablauf/Nullgrenze, Card-Komposition und
  Theme-Provider samt Toggle ergänzt.
- Automatisierte Tests, Lint und Build erfolgreich ausgeführt.
- Browser-Snapshot bestätigte Seitenaufbau und die Live-Umschaltung von Dark
  auf Light. Responsive Breakpoints und Kontrast sind nicht vollständig
  manuell geprüft.

**Status: automatisierte Prüfungen und grundlegende Browser-Prüfung erledigt;
responsive Detailprüfung offen.**

### 7. Aufräumen und Abschluss

- Veraltete Dateien, Vite-Vorlagenabschnitte und ungenutzte Imports entfernt.
- Imports und Dokumentation auf die Zielstruktur aktualisiert.
- `coverage` als generiertes Artefakt ignoriert.

**Status: erledigt, responsive Detailprüfung ausgenommen.**

## Nicht Teil des initialen Refactorings

- Wechsel von JavaScript zu TypeScript.
- Einführung eines Routers, globalen State-Managers oder UI-Frameworks.
- Persistenz der Theme-Auswahl.
- Vorauseilende Feature-Ordner oder abstrahierte Design-System-APIs ohne
  konkrete Wiederverwendung.

Diese Entscheidungen können bei wachsendem Produktbedarf separat getroffen
werden.

## Umsetzungsreihenfolge

Die Phasen wurden in dieser Reihenfolge bearbeitet: Baseline und Verhaltens-
vertrag, Dokumentation und Einstieg, Layout, Theme, Komponenten/Styles,
Qualitätssicherung und abschließendes Aufräumen.

## Dokumente

- [Konventionen](./conventions.md)
- [Projektstruktur](./project-structure.md)
