# Projektstruktur

## Aktueller Stand

```text
docs/
  conventions.md
  project-structure.md
  refactoring-plan.md
src/
  app/
    App.tsx
    App.scss
    providers/
      ThemeContext.ts
      ThemeProvider.tsx
      ThemeProvider.test.tsx
      useTheme.ts
  components/
    layout/
      Footer.tsx
      Header.tsx
      Layout.tsx
      Layout.scss
      ThemeToggle.tsx
    ui/
      alert/
        Alert.tsx
        Alert.scss
        Alert.test.tsx
      badge/
        Badge.tsx
        Badge.scss
        Badge.test.tsx
      button/
        Button.tsx
        Button.scss
        Button.test.tsx
      card/
        Card.tsx
        Card.scss
        Card.test.tsx
      form/
        Checkbox.tsx
        FormField.tsx
        FormField.scss
        FormField.test.tsx
        PasswordField.tsx
        Select.tsx
        TextField.tsx
        Textarea.tsx
        useFormField.ts
      status-indicator/
        StatusIndicator.tsx
        StatusIndicator.scss
        StatusIndicator.test.tsx
      toast/
        Toast.tsx
        Toast.scss
        Toast.test.tsx
  features/
    countdown/
      Countdown.tsx
      Countdown.scss
      Countdown.test.tsx
      countdownConfig.ts
      countdownTime.ts
      countdownTime.test.ts
  styles/
    _themes.scss
    _tokens.scss
    global.scss
  test/
    setup.ts
    vite-env.d.ts
  main.tsx
vitest.config.js
```

`main.tsx` ist der minimale Vite/React/TypeScript-Einstieg. `app/App.tsx` setzt die Seite
zusammen. `components/` enthält Layout und generische UI; fachliche Logik und
UI des Countdowns liegen als Feature gebündelt. Tests liegen nahe an den
Funktionen, die sie prüfen.

## Zuständigkeiten

### `app/`

Verantwortet die Komposition der Anwendung und App-weite Provider.
`main.tsx` importiert globale Styles und rendert `App` innerhalb der Provider.

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

- `main.tsx` bootstrapped `app/`.
- `app/` darf Layout, UI und Features zusammensetzen.
- `features/` dürfen allgemeine UI-Komponenten verwenden.
- `components/ui/` hängen nicht von konkreten Features ab.
- Allgemeine Komponenten und Layout importieren nicht `App.tsx`.
- Gemeinsame Theme- und Designwerte kommen aus Provider beziehungsweise
  globalen Tokens, statt durch Feature-spezifische Abhängigkeiten.

Diese Struktur darf mit dem Produkt wachsen. Bei einer kleinen Anwendung ist
Verständlichkeit wichtiger als eine möglichst tiefe Verzeichnishierarchie.

Weitere Regeln stehen in [Konventionen](./conventions.md); die durchgeführte
