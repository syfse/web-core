# Commit-Nachrichten

Commit-Nachrichten werden mit Commitlint gegen
[Conventional Commits](https://www.conventionalcommits.org/) geprüft. Der
Husky-`commit-msg`-Hook verhindert Commits mit ungültigem Format.

## Format

```text
<type>[optional scope]: <description>
```

Beispiele:

```text
feat(countdown): show remaining days
fix(theme): sync browser theme color
docs: explain commit message format
test(card): cover footer rendering
```

## Typen

Übliche Typen:

- `feat`: neue Funktion
- `fix`: Fehlerbehebung
- `docs`: Dokumentation
- `style`: Formatierung oder Styling ohne Verhaltensänderung
- `refactor`: interne Umstrukturierung ohne neue Funktion
- `test`: Tests
- `build`: Buildsystem oder Abhängigkeiten
- `ci`: CI-Konfiguration
- `perf`: Performanceverbesserung
- `revert`: Rücknahme eines Commits

Der Typ beschreibt den Zweck der Änderung. Ein Scope wie `countdown`, `theme`
oder `card` ist optional und benennt den betroffenen Bereich.

## Breaking Changes

Kennzeichne inkompatible Änderungen mit `!` nach Typ/Scope und erläutere sie im
Body oder Footer:

```text
feat(api)!: change configuration format
```

## Validierung

Commitlint prüft die Nachricht beim Commit automatisch über Husky. Eine
Nachricht lässt sich vorab prüfen:

```sh
echo "feat(countdown): show remaining days" | npx commitlint
```
