# UI-Komponenten

Die Liste dokumentiert vorhandene Komponenten und mögliche Erweiterungen.
`[x]` bedeutet, dass die Komponente bereits implementiert ist; `[ ]` kennzeichnet
einen Vorschlag für die Zukunft. Vorschläge sind keine verbindliche Roadmap.

Pfade sind relativ zum Repository-Root. Bei geplanten Komponenten ist der Pfad
ein Vorschlag. Komponenten sollten erst umgesetzt werden, wenn ein konkreter
Screen oder Ablauf sie benötigt.

| Vorhanden? | Name | Details | Path | Notes | Usage |
| --- | --- | --- | --- | --- | --- |
| [x] | App / Startansicht | Setzt die aktuelle Startseite zusammen. | `src/app/App.jsx` | Aktuelle View, keine allgemeine UI-Komponente. | Einstiegspunkt und Seiteninhalt |
| [x] | Layout | Gemeinsamer Seitenrahmen mit Header, Inhalt und Footer. | `src/components/layout/Layout.jsx` | Generische Layout-Komponente. | Seitenstruktur |
| [x] | Header | Markenlink und Theme-Umschalter. | `src/components/layout/Header.jsx` | Teil des Layouts. | Kopfbereich der Seite |
| [x] | Footer | Copyright und Seitenabschluss. | `src/components/layout/Footer.jsx` | Teil des Layouts. | Fußbereich der Seite |
| [x] | ThemeToggle | Schaltet zwischen Light- und Dark-Theme um. | `src/components/layout/ThemeToggle.jsx` | Verwendet `SecondaryButton` und den Theme-Provider. | Theme-Auswahl |
| [x] | Countdown | Zeigt die verbleibende Zeit bis zum konfigurierten Zeitpunkt. | `src/features/countdown/Countdown.jsx` | Feature-Komponente, nicht allgemeine UI. | Countdown auf der Startseite |
| [x] | Card | Allgemeiner Inhaltscontainer. | `src/components/ui/card/Card.jsx` | Gemeinsam mit den Card-Sektionen exportiert. | Gruppierte Inhalte |
| [x] | CardHeader | Kopfbereich einer Card. | `src/components/ui/card/Card.jsx` | Teil der Card-Familie. | Titel oder Einleitung einer Card |
| [x] | CardBody | Hauptinhaltsbereich einer Card. | `src/components/ui/card/Card.jsx` | Teil der Card-Familie. | Card-Inhalt |
| [x] | CardFooter | Ergänzender Fußbereich einer Card. | `src/components/ui/card/Card.jsx` | Teil der Card-Familie. | Hinweise oder Metadaten |
| [x] | CardSubfooter | Abgesetzter, typischerweise für Aktionen genutzter Card-Bereich. | `src/components/ui/card/Card.jsx` | Teil der Card-Familie. | Aktionsbereich einer Card |
| [x] | PrimaryButton | Button für die wichtigste Aktion. | `src/components/ui/button/Button.jsx` | Native Button-Props werden weitergereicht. | Hauptaktion, z. B. „Speichern“ |
| [x] | SecondaryButton | Button für eine gleichwertige oder alternative Aktion. | `src/components/ui/button/Button.jsx` | Wird aktuell im ThemeToggle verwendet. | Alternative Aktion, z. B. „Abbrechen“ |
| [x] | TertiaryButton | Zurückhaltende Button-Variante. | `src/components/ui/button/Button.jsx` | Für Aktionen mit geringer visueller Priorität. | Optionale oder ergänzende Aktion |
| [x] | DangerButton | Button für destruktive Aktionen. | `src/components/ui/button/Button.jsx` | Vor Verwendung bei destruktiven Aktionen meist mit Bestätigung kombinieren. | Löschen oder Entfernen |
| [x] | TextField | Beschriftetes Eingabefeld für einzeilige Texte. | `src/components/ui/form/TextField.jsx` | Unterstützt Label, Hilfetext, Validierungsfehler und native Input-Props. | Login, Registrierung, Suche |
| [x] | PasswordField | Passwortfeld mit Sichtbarkeitsschaltung. | `src/components/ui/form/PasswordField.jsx` | Unterstützt Label, Hinweise, Fehler und native Input-Props. | Login und Registrierung |
| [x] | Checkbox | Auswahl eines booleschen Wertes. | `src/components/ui/form/Checkbox.jsx` | Label, Hinweise und Fehler sind mit dem Eingabefeld verknüpft. | Zustimmung und Filter |
| [x] | Select | Auswahl eines Wertes aus einer begrenzten Liste. | `src/components/ui/form/Select.jsx` | Verwendet native `<select>`- und `<option>`-Elemente. | Region, Tarif oder Filter |
| [x] | Textarea | Mehrzeilige Texteingabe. | `src/components/ui/form/Textarea.jsx` | Unterstützt native Textarea-Props, Hinweise und Fehler. | Beschreibungen und Support-Anfragen |
| [x] | FormField | Gemeinsame Struktur für Label, Eingabe, Hilfe und Validierungsfehler. | `src/components/ui/form/FormField.jsx` | Wiederverwendbare Grundlage der Formularfelder. | Eigene oder zusammengesetzte Formularfelder |
| [ ] | Alert | Sichtbarer, persistenter Hinweis mit Status und optionaler Aktion. | `src/components/ui/Alert.jsx` | Status semantisch und nicht nur über Farbe vermitteln. | Formularfehler, Warnungen, Systemhinweise |
| [ ] | Toast | Kurzlebige Benachrichtigung über eine abgeschlossene Aktion. | `src/components/ui/Toast.jsx` | Fokus und Screenreader-Ausgabe sorgfältig behandeln. | Speichern erfolgreich, Aktion fehlgeschlagen |
| [ ] | Badge | Kompakte Kennzeichnung eines Zustands oder einer Kategorie. | `src/components/ui/Badge.jsx` | Farbvarianten mit Text oder Icon ergänzen. | Tarife, Rollen, kurze Statusangaben |
| [ ] | StatusIndicator | Klar lesbare Anzeige eines aktuellen Betriebszustands. | `src/components/ui/StatusIndicator.jsx` | Zum Beispiel online, offline oder wartend. | Server- und Verbindungsstatus |
| [ ] | Spinner | Animierte Ladeanzeige für kurze Wartezeiten. | `src/components/ui/Spinner.jsx` | Mit zugänglichem Namen bzw. Status ergänzen. | Aktion oder Datenabruf lädt |
| [ ] | Skeleton | Platzhalter in Form des erwarteten Inhalts. | `src/components/ui/Skeleton.jsx` | Für Ladezustände, bei denen die Seitenstruktur bekannt ist. | Dashboard- und Listenladen |
| [ ] | EmptyState | Erklärung und optionale Aktion bei fehlenden Inhalten. | `src/components/ui/EmptyState.jsx` | Soll den nächsten sinnvollen Schritt anbieten. | Noch keine Server oder Transaktionen |
| [ ] | Dialog | Modal für fokussierte Aufgaben oder Bestätigungen. | `src/components/ui/Dialog.jsx` | Tastaturfokus, Escape und Fokus-Rückgabe berücksichtigen. | Löschen bestätigen, Einstellungen |
| [ ] | DropdownMenu | Menü für kontextbezogene Aktionen. | `src/components/ui/DropdownMenu.jsx` | Tastaturbedienung und Fokusverhalten benötigen Tests. | Nutzer- oder Serveraktionen |
| [ ] | Tabs | Wechsel zwischen zusammengehörigen Inhaltsbereichen. | `src/components/ui/Tabs.jsx` | Tastaturbedienung nach ARIA-Tab-Pattern umsetzen. | Serverdetails oder Einstellungen |
| [ ] | ProgressBar | Zeigt einen numerischen Fortschritt. | `src/components/ui/ProgressBar.jsx` | Wert und Bereich für assistive Technologien auszeichnen. | Provisionierung oder Datei-Upload |
| [ ] | Table | Strukturierte Darstellung von Datensätzen. | `src/components/ui/Table.jsx` | Sortierung und responsive Darstellung nach Bedarf ergänzen. | Server, Nutzer oder Transaktionen |
| [ ] | Pagination | Navigation durch größere Ergebnismengen. | `src/components/ui/Pagination.jsx` | Nur nötig, wenn Listen nicht sinnvoll vollständig geladen werden können. | Server- oder Transaktionslisten |
| [ ] | Tooltip | Kurze Zusatzinformation zu einem Element. | `src/components/ui/Tooltip.jsx` | Darf notwendige Informationen nicht ausschließlich darin verstecken. | Kennzahlen oder technische Begriffe erklären |
| [ ] | Breadcrumbs | Zeigt den Navigationspfad einer verschachtelten Seite. | `src/components/ui/Breadcrumbs.jsx` | Für kleine Anwendungen ohne tiefe Navigation nicht erforderlich. | Orientierung in Detailseiten |
| [ ] | ServerCard | Fachliche Zusammenfassung eines Servers mit Status und Kennzahlen. | `src/features/servers/ServerCard.jsx` | Gehört ins Server-Feature, nicht in allgemeine UI. | Serverübersicht |
| [ ] | ResourceUsage | Visualisiert CPU-, GPU-, RAM- oder Speicher-Auslastung. | `src/features/servers/ResourceUsage.jsx` | Einheit, Messzeitpunkt und Bedeutung sichtbar machen. | Serverdetails und Dashboard |
| [ ] | ServerFilters | Filter für Status, Region oder verfügbare Ressourcen. | `src/features/servers/ServerFilters.jsx` | Fachliche Filterlogik im Server-Feature belassen. | Serverübersicht |
| [ ] | MetricCard | Hebt eine wichtige Kennzahl mit Beschriftung hervor. | `src/features/dashboard/MetricCard.jsx` | Nur bei wiederkehrendem Kennzahlenmuster abstrahieren. | Dashboard für Auslastung oder Einnahmen |
