# Projektkonventionen

Diese Regeln gelten für neuen und im Rahmen eines Refactorings geänderten Code.
Sie orientieren sich an React, Vite und der kleinen Größe dieses Projekts.
Abweichungen sind möglich, wenn sie einen konkreten Vorteil haben und im
betroffenen Bereich konsistent umgesetzt werden.

## React und JavaScript

- Komponenten sind Funktionen und verwenden PascalCase: `Countdown`,
  `ThemeProvider`, `CardHeader`.
- Komponenten in JSX werden ebenfalls in PascalCase geschrieben
  (`<CardHeader />`), damit React sie als Komponenten interpretiert.
- Hooks beginnen mit `use` und dürfen nur in Komponenten oder anderen Hooks
  aufgerufen werden.
- Props werden explizit destrukturiert. Native DOM-Props können bei Wrappern
  weitergereicht werden; Komponenten-spezifische Props werden nicht ungeprüft
  auf DOM-Elemente gestreut.
- Bei optionalem Inhalt `children` verwenden, statt unnötige Varianten für
  denselben Slot einzuführen.
- Keine eigenen State-Kopien für Werte, die bereits in einem übergeordneten
  Provider verwaltet werden.
- Browser- und DOM-Zugriffe gehören in Komponenten-Effekte oder Funktionen,
  nicht in den Renderpfad mit Seiteneffekten.
- Vorhandene ESLint-Regeln sind einzuhalten. Fehler werden nicht durch
  pauschale Deaktivierungen umgangen.
- Fachliche Hilfslogik erhält Tests für Grenzfälle; React-Komponenten werden
  über sichtbares Verhalten und zugängliche Rollen/Labels getestet.

## Exporte und Imports

- UI-Komponenten werden als benannte Exporte bereitgestellt; das gilt besonders
  für Komponentenfamilien wie `Card`, `CardHeader` und `CardBody`.
- Eine Datei darf mehrere eng verwandte Komponenten exportieren, wenn sie
  gemeinsam verwendet und gepflegt werden.
- Für Dateien mit genau einer Komponente ist ein benannter Export ebenfalls
  zulässig und bevorzugt, damit der Importstil einheitlich bleibt.
- Imports verwenden relative Pfade und korrekte Dateiendungen entsprechend
  dem lokalen Muster; bestehende Importpfade werden bei Verschiebungen
  vollständig aktualisiert.
- Keine Barrel-Dateien (`index.js`) ohne echten Nutzen; sie sollten keine
  zirkulären Abhängigkeiten oder schwer auffindbare Exporte erzeugen.

## Benennung und Dateien

- React-Komponenten und ihre Tests: `PascalCase.jsx` sowie
  `PascalCase.test.jsx`, zum Beispiel `ThemeProvider.jsx`.
- Hooks und normale JavaScript-Module: `camelCase.js`, zum Beispiel
  `useTheme.js` oder `countdownConfig.js`; Tests heißen `camelCase.test.js`.
- Sass-Dateien verwenden den PascalCase-Komponentennamen (`Card.scss`) und
  liegen bei der Komponente. Gemeinsame Stylesheets verwenden beschreibende
  Kleinschreibung, zum Beispiel `global.scss`.
- Sass-Partials für gemeinsam genutzte Grundlagen beginnen mit `_`, zum
  Beispiel `_tokens.scss`.
- Ordnernamen sind kleingeschrieben und beschreiben ihren Inhalt oder ihr
  Feature.
- Namen beschreiben die Verantwortung, nicht die Implementierung
  (beispielsweise `ThemeProvider` statt `ContextWrapper`).

## Komponenten und Verantwortlichkeiten

- Komponenten bleiben möglichst klein und haben eine klare UI- oder
  Layout-Verantwortung.
- Layout-Bausteine (Header, Footer, Seitenrahmen) liegen getrennt von
  allgemeinen UI-Bausteinen und fachlichen Features.
- Fachliche Logik, die unabhängig von der Darstellung getestet werden kann,
  wird aus JSX herausgezogen.
- Eine wiederverwendbare Komponente wird erst dann abstrahiert, wenn es
  tatsächliche Mehrfachverwendung oder eine klare fachliche API gibt.
- Semantische HTML-Elemente verwenden. Buttons lösen Aktionen aus, Links
  navigieren; interaktive Elemente müssen per Tastatur bedienbar sein.

## Styling mit Sass

- Sass ist der Standard für Styles; keine neuen `.css`-Dateien für App-Stile.
- Styles komponenten- oder feature-nah ablegen; `global.scss` ist für Reset,
  Schrift, Basisregeln und globale Layout-Grundlagen reserviert.
- Wiederverwendete Werte als Sass-Tokens oder CSS Custom Properties definieren,
  nicht als mehrfach kopierte Literale.
- Laufzeitabhängige Farben (insbesondere Theme-Farben) als CSS Custom
  Properties zentral auf dem Dokument-Root definieren. Sass-Variablen sind
  Compile-Zeit-Werte und nicht für dynamisches Umschalten geeignet.
- Selektoren flach und komponentenbezogen halten. Keine tiefen, fragilen
  Abhängigkeiten auf Markup-Strukturen.
- Responsive Regeln und Reduced-Motion-Verhalten für eine Komponente möglichst
  in ihrer Sass-Datei bündeln.
- Fokuszustände, Kontrast und `prefers-reduced-motion` berücksichtigen.

## Theme

- `currentTheme` im Theme-Provider ist die einzige Quelle für die aktuelle
  Auswahl.
- Konsumenten lesen den Wert über den zentralen Theme-Hook/Context; Komponenten
  erstellen keine eigenen parallelen Theme-States.
- Der Provider spiegelt den Wert in `data-theme` auf `<html>`, damit CSS und
  Browser-Farbschema gemeinsam reagieren können. Falls `theme-color` in der
  HTML-Metadaten gesetzt ist, wird es mit der Theme-Auswahl synchronisiert.
- Unterstützte Werte und Fallbacks sind zentral festgelegt (`light` und
  `dark`); die Systempräferenz ist der Initialwert.

## Dokumentation und Änderungen

- Architektur, Konventionen und langfristige Pläne gehören nach `docs/`.
- README dient als schneller Einstieg: Zweck, Installation, Befehle und Links
  zu ausführlicher Dokumentation.
- Neue Abhängigkeiten müssen einen konkreten Bedarf erfüllen und in
  `package.json` nachvollziehbar sein.
- Änderungen sollen klein genug bleiben, dass sie unabhängig überprüft werden
  können; Refactorings erhalten bestehendes Verhalten, sofern keine
  Verhaltensänderung ausdrücklich vorgesehen ist.

## Validierung

Vor Abschluss einer Codeänderung mindestens die passenden Projektbefehle
ausführen:

```sh
npm run lint
npm test
npm run build
```

Wenn Tests eingerichtet sind, zusätzlich die betroffenen Tests ausführen.
Dokumentationsänderungen allein benötigen keinen Build, sofern kein
Dokumentationstest betroffen ist.
