# Projektstruktur

## Aktueller Stand

```text
docs/
  conventions.md
  project-structure.md
  refactoring-plan.md
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
    _themes.scss
    _tokens.scss
    global.scss
  test/
    setup.js
  main.jsx
vitest.config.js
```

`main.jsx` ist der minimale Vite/React-Einstieg. `app/App.jsx` setzt die Seite
zusammen. `components/` enthält Layout und generische UI; fachliche Logik und
UI des Countdowns liegen als Feature gebündelt. Tests liegen nahe an den
Funktionen, die sie prüfen.

## Zuständigkeiten

### `app/`

Verantwortet die Komposition der Anwendung und App-weite Provider.
`main.jsx` importiert globale Styles und rendert `App` innerhalb der Provider.

### `components/layout/`

Enthält den Seitenrahmen, Header, Footer und den dort angezeigten Theme-Toggle.
Layout-Komponenten verwalten keine Countdown-Logik.

### `components/ui/`

Enthält generische, wiederverwendbare UI-Komponenten. Eine Card kennt keine
Countdown-Details und keine Seitentexte.

### `features/`

Enthält fachlich zusammengehörige UI und Logik. Countdown-Dauer,
Zeitberechnung und Countdown-Darstellung liegen zusammen.

### `styles/`

Enthält Sass-Tokens, Theme-Farben und globale Grundregeln. Komponenten- und
Feature-Styles verbleiben nahe bei ihrer Implementierung.

## Abhängigkeitsrichtung

- `main.jsx` bootstrapped `app/`.
- `app/` darf Layout, UI und Features zusammensetzen.
- `features/` dürfen allgemeine UI-Komponenten verwenden.
- `components/ui/` hängen nicht von konkreten Features ab.
- Allgemeine Komponenten und Layout importieren nicht `App.jsx`.
- Gemeinsame Theme- und Designwerte kommen aus Provider beziehungsweise
  globalen Tokens, statt durch Feature-spezifische Abhängigkeiten.

Diese Struktur darf mit dem Produkt wachsen. Bei einer kleinen Anwendung ist
Verständlichkeit wichtiger als eine möglichst tiefe Verzeichnishierarchie.

Weitere Regeln stehen in [Konventionen](./conventions.md); die durchgeführte
Migration ist im [Refactoring-Plan](./refactoring-plan.md) festgehalten.
