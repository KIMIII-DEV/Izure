/* Erzeugt von scripts/build-lernfelder.mjs — nicht von Hand ändern.
   Quelle: content/lernfelder/c1.js–c5.js (Karten, Aufgaben)
           content/lernfelder/themen.js  (Themen, Lernfeldnamen)
   Neu bauen mit: npm run lern

   window.LF = [{ code, name, themen, cards, quiz }]
   Aufgabentypen: mc · multi · tf · cloze · type · calc · order · match · odd */

window.LF = [
 {
  "code": "01",
  "name": "Die Ausbildung im Dialogmarketing mitgestalten",
  "themen": [
   {
    "t": "1.1.1 Unternehmensziele",
    "d": "Vier Zieltypen und deren Beziehungen zueinander.",
    "c": "Das **Zielsystem** bündelt alle Unternehmensziele.\n\n**Vier Zieltypen:**\n- **Sachziel** — Zweck/Betätigungsfeld, bei Gründung ins Handelsregister eingetragen.\n- **Wirtschaftliche Ziele** — Leistungs- (Marktanteil), Finanz- (Eigenkapital, Rücklagen) und Erfolgsziele (Umsatz, Rentabilität).\n- **Soziale Ziele** — Verhältnis Unternehmen ↔ Mitarbeiter + Gesellschaft.\n- **Ökologische Ziele** — Nachhaltigkeit, klimafreundliche Produkte, umweltgerechte Entsorgung.\n\n**Beziehungen:**\n- **Zielharmonie** — Ziele ergänzen sich (Umsatz sichert Arbeitsplätze).\n- **Zielkonflikt** — Ziel A nur ohne Ziel B (teures Öko-Papier ↔ Rentabilität).\n\nLösung bei Konflikt: **Priorisierung** oder **Kompromiss**.",
    "k": [
     "Vier Zieltypen: Sach-, wirtschaftlich, sozial, ökologisch",
     "Wirtschaftlich = Leistungs-, Finanz-, Erfolgsziele",
     "Zielharmonie vs. Zielkonflikt",
     "Sachziel kommt ins Handelsregister"
    ],
    "r": "high"
   },
   {
    "t": "1.1.2 Entscheidungsfindung",
    "d": "Strategisch vs. operativ, Direktorial- vs. Kollegialsystem.",
    "c": "**Zwei Grundachsen der Entscheidung:**\n- **Strategisch** — langfristig, von langer Hand geplant (z. B. E-Mail-Bearbeitung outsourcen).\n- **Operativ** — Tagesgeschäft, kurzfristig (z. B. Mitarbeiter aus dem Frei rufen).\n\n**Entscheidungssysteme — wer entscheidet?**\n- **Direktorialsystem / Entscheidungszentralisation** — Einzelperson entscheidet (z. B. Komplementär).\n- **Kollegialprinzip** — Gruppe entscheidet (einstimmig / Mehrheit / Stichentscheid).",
    "k": [
     "Strategisch = lang, operativ = kurz",
     "Direktorialsystem = Einzelperson",
     "Kollegialprinzip = Gruppe"
    ],
    "r": "medium"
   },
   {
    "t": "1.1.2 Methoden der Entscheidungsfindung",
    "d": "Sechs Methoden — von CAF bis intuitiv.",
    "c": "**Sechs Methoden (Buch-Reihenfolge):**\n\n- **CAF (Consider All Facts)** — Einflussfaktoren ungewichtet sammeln. Vorstufe, keine Entscheidung.\n- **PMI (Plus-Minus-Interesting)** — Aspekte mit + / − / i markieren.\n- **Gewichtetes PMI** — + und − mit Punkten 1–6, addiert.\n- **Entscheidungsmatrix** — Alternativen gegen Kriterien (1–6), keine Gewichtung.\n- **Bewertete Entscheidungsmatrix** — wie Matrix, plus Prozent-Gewichtung der Kriterien (Summe 100 %).\n- **Intuitive Entscheidung** — Bauch/Erfahrung. **Nicht für strategische Entscheidungen.**",
    "k": [
     "CAF nur sammeln, keine Entscheidung",
     "Bewertete Matrix = Gewichtung in %",
     "Intuitiv nicht strategisch"
    ],
    "r": "high"
   },
   {
    "t": "1.1.3 Führungsstile",
    "d": "Die vier klassischen Führungsstile — autoritär, kooperativ, laissez-faire, situativ.",
    "c": "**Stil ≠ Technik.** Stil ist persönlich (sozial), Technik ist organisatorisch.\n\n**Die 4 Stile:**\n- **Autoritär** — Entscheidung ohne MA. Vorteile: schnell, kontrolliert. Nachteile: keine Korrektur, keine Ideen, aggressives Klima.\n- **Kooperativ (demokratisch)** — MA einbezogen, Delegation. Vorteile: Kreativität, Motivation. Nachteile: langsam, Ausnutzungsgefahr.\n- **Laissez-faire** — kein Eingriff. Vorteile: Freiheit, Kreativität. Nachteile: keine Vorgaben, Disziplinprobleme.\n- **Situativ** — Stil je nach Situation. Vorteil: flexibel. Nachteil: hohe Führungskompetenz nötig.",
    "k": [
     "4 Stile: autoritär / kooperativ / laissez-faire / situativ",
     "Stil = persönlich, Technik = organisatorisch",
     "Autoritär schnell, kooperativ motivierend"
    ],
    "r": "high"
   },
   {
    "t": "1.1.3 Führungstechniken & SMART",
    "d": "Vier Management-by-Techniken + SMART-Regel zur Zielformulierung.",
    "c": "**Die 4 Management-by-Techniken:**\n- **by objectives** (Zielvereinbarung) — gemeinsame Ziele, schriftlich, SMART. → Mitarbeitergespräch.\n- **by results** (Ergebnisorientierung) — Chef gibt Kennzahlen vor; autoritärer als by objectives.\n- **by exception** (Ausnahmeprinzip) — MA entscheidet Routine; Chef nur bei Ausnahmen.\n- **by delegation** — Aufgaben + Entscheidungskompetenz auf untere Ebenen, Führungsverantwortung bleibt.\n\n**SMART-Regel:**\n- **S** pezifisch\n- **M** essbar\n- **A** ktiv beeinflussbar\n- **R** ealistisch\n- **T** erminiert",
    "k": [
     "4 Techniken: by objectives / results / exception / delegation",
     "SMART: spezifisch, messbar, aktiv, realistisch, terminiert",
     "by objectives = gemeinsam; by results = Chef vorgibt"
    ],
    "r": "high"
   },
   {
    "t": "1.1.4 Unternehmenskultur & Corporate Identity",
    "d": "Werte, Normen, CI mit ihren vier Komponenten.",
    "c": "**Unternehmenskultur** = gemeinsam getragene Grundüberzeugungen, Werte, Einstellungen.\n\n**5 Elemente:** Unternehmensziele, Normen/Werte, Kommunikation, Rituale, Vorbilder.\n\n**Corporate Identity (CI) — 4 Komponenten:**\n- **Corporate Design** — sichtbare Identität (Logo, Akustik, Web).\n- **Corporate Communication** — Kommunikation intern + extern.\n- **Corporate Image** — Wahrnehmung von außen.\n- **Corporate Behavior** — Verhalten der MA gegenüber Kunden, Kollegen, Partnern.\n\n**Unternehmensleitbild (Mission Statement)** — explizite Ausformulierung von Kultur + Zielen.",
    "k": [
     "CI = Design, Communication, Image, Behavior",
     "Leitbild wirkt nach innen (Integration) + außen (Orientierung)",
     "5 Kulturelemente: Ziele, Normen, Kommunikation, Rituale, Vorbilder"
    ],
    "r": "medium"
   },
   {
    "t": "1.2 Aufbau- & Ablauforganisation, Leitungssysteme",
    "d": "Organigramm, vier Leitungssysteme, Matrix.",
    "c": "**Aufbauorganisation** = Strukturierung in Einheiten + Weisungsbefugnisse.\n**Ablauforganisation** = Gestaltung der Arbeitsabläufe.\n**Organigramm** = grafische Darstellung der Aufbauorganisation.\n\n**Vier Leitungssysteme:**\n- **Einlinie** — jede Stelle nur von einer Instanz. Klar, aber langwierig.\n- **Stablinie** — Einlinie + Stabsstellen (keine/nur fachliche Weisungsbefugnis). Spezialisten entlasten Führung.\n- **Spartenorganisation (Divisional)** — Sparten mit eigener Ergebnisverantwortung. Eigenständigkeit, Risiko Autonomie.\n- **Mehrlinie** — MA von mehreren Stellen Anweisungen. Schnell, aber Widersprüche möglich.\n\n**Matrix** = Variation Mehrlinie, kombiniert Funktion + Objekt (häufig Projekte).",
    "k": [
     "Einlinie = 1 Vorgesetzter, Mehrlinie = mehrere",
     "Stabsstelle hat meist keine Weisungsbefugnis",
     "Spartenorg. = strategisch zentral, operativ Sparte"
    ],
    "r": "high"
   },
   {
    "t": "1.3 Handelsregister & Kaufmannstypen",
    "d": "HRA/HRB, Ist-, Kann-, Formkaufmann, deklaratorisch vs. konstitutiv.",
    "c": "**Handelsregister (HR)** = öffentliches Verzeichnis beim Amtsgericht, elektronisch.\n- **HRA** — Einzelkaufleute, Personengesellschaften\n- **HRB** — Kapitalgesellschaften\n\n**§ 1 HGB:** Kaufmann ist, wer ein Handelsgewerbe betreibt.\n\n**Drei Kaufmannsarten:**\n- **Istkaufmann** — erfüllt Handelsgewerbe-Merkmale. Eintragung **deklaratorisch** (rechtsbezeugend).\n- **Kannkaufmann** — Kleingewerbe; Eintragung **konstitutiv** (rechtsbegründend).\n- **Formkaufmann** — juristische Person kraft Rechtsform (GmbH); Eintragung **konstitutiv**.\n\n**Freie Berufe** (Ärzte, Anwälte) = kein Handelsgewerbe.",
    "k": [
     "Istkaufmann = deklaratorisch (nur bezeugt)",
     "Kannkaufmann + Formkaufmann = konstitutiv (begründet)",
     "HRA = Personen, HRB = Kapitalgesellschaften"
    ],
    "r": "high"
   },
   {
    "t": "1.3 Firma — Grundsätze & Arten",
    "d": "5 Firmengrundsätze und 4 Firmenarten.",
    "c": "**§ 17 HGB:** Die Firma ist der Name, unter dem ein Kaufmann seine Geschäfte betreibt und die Unterschrift abgibt.\n\n**5 Grundsätze der Firmenwahl:**\n- **Rechtsformzusatz** — KG, GmbH, AG offenlegen\n- **Firmenwahrheit / -klarheit** — keine falschen Angaben\n- **Firmenausschließlichkeit** — am selben Ort unterscheidbar\n- **Firmenbeständigkeit** — Firma nur mit Geschäft verkäuflich\n- **Firmenöffentlichkeit** — HR-Eintrag + Geschäftsbriefe\n\n**4 Firmenarten:**\n- **Personenfirma** — Name der Gesellschafter (Schmidt & Meyer KG)\n- **Sachfirma** — sachliche Beschreibung (Straßenbau AG)\n- **Fantasiefirma** — frei erdacht (Dialogfix GmbH)\n- **Mischfirma** — Kombination (Westermann Verlag GmbH & Co. KG)",
    "k": [
     "5 Grundsätze: Wahrheit, Klarheit, Ausschließlichkeit, Beständigkeit, Öffentlichkeit, Rechtsformzusatz",
     "Firma ≠ Unternehmen — Firma = Name, Unternehmen = Organisation",
     "4 Arten: Personen, Sach, Fantasie, Misch"
    ],
    "r": "high"
   },
   {
    "t": "1.3.2 Kommanditgesellschaft (KG)",
    "d": "Komplementär vs. Kommanditist, Haftung, Geschäftsführung.",
    "c": "**Rechtsgrundlage:** §§ 161–177a HGB. **Kein Mindestkapital.**\n\n**Gesellschafter:**\n- mindestens 1 **Komplementär** — Vollhafter, persönlich\n- mindestens 1 **Kommanditist** — Teilhafter, nur Einlagebeschränkung\n\n**Komplementär-Haftung:** unbeschränkt + persönlich (auch mit Privatvermögen) + gesamtschuldnerisch + direkt gegenüber Gläubigern.\n\n**Kommanditist-Haftung:** nur in Höhe der Kapitaleinlage.\n\n**Geschäftsführung & Vertretung:** nur Komplementäre. Außergewöhnliche Handlungen brauchen Zustimmung aller Komplementäre.\n\n**Kommanditist-Rechte:** ausgeschlossen von Geschäftsführung, Widerspruchsrecht, Kontrollrechte (Bilanzeinsicht).\n\n**Gewinnverteilung:** erst 4 % Verzinsung der Kapitalanteile, Rest meist gemäß Gesellschaftsvertrag.",
    "k": [
     "Komplementär haftet unbeschränkt + persönlich + gesamtschuldnerisch + direkt",
     "Kommanditist haftet nur in Höhe der Einlage",
     "Kein Mindestkapital",
     "Nur Komplementäre führen + vertreten"
    ],
    "r": "high"
   },
   {
    "t": "1.3.3 GmbH & GmbH & Co. KG",
    "d": "Kapitalgesellschaft, Mindeststammkapital, Organe.",
    "c": "**GmbH** = Kapitalgesellschaft mit eigener Rechtspersönlichkeit (juristische Person).\n\n**Rechtsgrundlage:** GmbHG, MoMiG 2008.\n\n**Stammkapital:** mindestens **25.000 €**. **Stammeinlage** pro Gesellschafter: mindestens **1 €**.\n\n**Sonderformen:**\n- **Ein-Mann-GmbH** — Gründung durch 1 Person\n- **UG (haftungsbeschränkt) / Mini-GmbH** — ohne Mindeststammkapital, Pflicht zur Gewinnthesaurierung bis 25.000 € erreicht\n\n**Haftung:** nur Gesellschaftsvermögen. **Keine** Privathaftung der Gesellschafter.\n\n**Organe:**\n- **Geschäftsführer** — Vertretung nach außen, müssen keine Gesellschafter sein\n- **Gesellschafterversammlung** — oberstes Organ; 1 € Einlage = 1 Stimme\n- **Aufsichtsrat** — gesetzlich vorgeschrieben **ab 500 AN** (BetrVG)\n\n**GmbH & Co. KG:** rechtlich KG, Komplementär ist eine GmbH → unbeschränkte Haftung wird zu beschränkter.",
    "k": [
     "Mindeststammkapital 25.000 €",
     "Stammeinlage min. 1 €",
     "Aufsichtsrat ab 500 AN",
     "GmbH & Co. KG kombiniert KG-Struktur mit beschränkter Haftung"
    ],
    "r": "high"
   },
   {
    "t": "1.4 Externe Institutionen",
    "d": "IHK, BG, Gewerkschaften, Verbände im Dialogmarketing.",
    "c": "**Wichtige externe Institutionen:**\n- **IHK** — „zuständige Stelle\" nach BBiG. Zwischen-/Abschlussprüfung, Beratung, Wirtschaftsförderung.\n- **Berufsgenossenschaften** — Unfallversicherungsträger, Unfallverhütungsvorschriften.\n- **Sozialversicherungsträger** — gesetzliche Krankenkassen führen Beitragseinzug für alle Zweige.\n- **Gewerkschaften** — Rechtsschutz, Tarifverträge. Im DM: **ver.di**.\n- **Berufsvertretungen** — Vereine (z. B. BDV).\n- **Interessenverbände** — im DM: **CCV** (Call Center Verband) und **DDV** (Deutscher Dialogmarketing Verband).\n- **Verbraucherzentralen** — Beratung Verbraucherschutz.\n- **Politik & Presse** — beeinflussen Rahmenbedingungen und öffentliches Bild.",
    "k": [
     "IHK = zuständige Stelle nach BBiG",
     "DM-Gewerkschaft = ver.di",
     "DM-Verbände = CCV + DDV",
     "BG = Unfallversicherung"
    ],
    "r": "medium"
   },
   {
    "t": "2.1 Duale Ausbildung & Dokumentenpyramide",
    "d": "Berufsschule + Betrieb, Rahmenplan vs. Lehrplan.",
    "c": "**Duales Prinzip** = 2 unabhängige Lernorte:\n- **Berufsschule** — Theorie, Allgemeinbildung\n- **Ausbildungsbetrieb** — Praxis\n\n**Rechtsgrundlage:** Berufsbildungsgesetz (**BBiG**). **IHK** = Verwaltungs- + Prüfungsstelle + Streitschlichtung.\n\n**Dokumentenpyramide:**\n- **Ausbildungsordnung** (Gesetzgeber) — Berufsbezeichnung, Dauer, Berufsbild\n- **Ausbildungsberufsbild** — Kurzüberblick\n- **Ausbildungsrahmenplan** — sachliche + zeitliche Gliederung (Betrieb)\n- **Betrieblicher Ausbildungsplan** — konkrete Umsetzung\n- **Rahmenlehrplan (KMK)** — bundesweit, Schule\n\n**Wichtig:** „Ausbildender\" = das Unternehmen. „Ausbilder\" = die unterweisende Person. „Auszubildender\" = Lehrling.",
    "k": [
     "Dual = Schule + Betrieb",
     "BBiG = Rechtsgrundlage",
     "KMK = Rahmenlehrplan Schule",
     "Ausbildender ≠ Ausbilder"
    ],
    "r": "medium"
   },
   {
    "t": "2.1.2 § 11 BBiG — Ausbildungsvertrag",
    "d": "Die 9 Pflichtinhalte des Ausbildungsvertrags.",
    "c": "**§ 11 BBiG — die 9 Pflichtinhalte (vollständig):**\n\n1. Art, sachliche und zeitliche Gliederung sowie Ziel der Berufsausbildung\n2. Beginn und Dauer der Berufsausbildung\n3. Ausbildungsmaßnahmen außerhalb der Ausbildungsstätte\n4. Dauer der regelmäßigen täglichen Ausbildungszeit\n5. Dauer der Probezeit\n6. Zahlung und Höhe der Vergütung\n7. Dauer des Urlaubs\n8. Voraussetzungen, unter denen der Berufsausbildungsvertrag gekündigt werden kann\n9. Hinweis auf anwendbare Tarifverträge / Betriebsvereinbarungen\n\n**Eselsbrücke:** „Art-Beginn-Außen-Tag-Probe-Geld-Urlaub-Kündigung-Tarif.\"",
    "k": [
     "9 Pflichtinhalte komplett auswendig",
     "§ 11 BBiG",
     "Schriftform zwingend"
    ],
    "r": "high"
   },
   {
    "t": "2.1.3 Rechte & Pflichten §§ 14–19 BBiG",
    "d": "Was Azubi und Ausbildender einander schulden.",
    "c": "**Pflichten des Auszubildenden** (= Rechte des Ausbildenden):\n- Lernen, Bemühen um Ausbildungsziel\n- sorgfältige Aufgabenausführung\n- Teilnahme an Berufsschule + Prüfungen\n- Weisungen befolgen\n- Betriebsordnung beachten\n- pflegliche Behandlung der Arbeitsmittel\n- Schweigepflicht\n\n**Pflichten des Ausbildenden** (= Rechte des Auszubildenden):\n- Vermittlung der Handlungsfähigkeit\n- Freistellung für Berufsschule + Prüfungen\n- kostenlose Arbeitsmittel\n- Urlaubsgewährung\n- Fürsorgepflicht\n- angemessene, jährlich ansteigende Vergütung\n- Zeugnis nach Ende (§ 16 BBiG, einfach oder qualifiziert)",
    "k": [
     "Arbeitsmittel KOSTENLOS vom Ausbildenden",
     "Zeugnis nach § 16 BBiG: einfach oder qualifiziert",
     "Vergütung muss jährlich steigen",
     "Schweigepflicht des Azubis"
    ],
    "r": "medium"
   },
   {
    "t": "2.1.4 Beendigung & Probezeit",
    "d": "Probezeit § 22 BBiG, Weiterbeschäftigung § 24 BBiG.",
    "c": "**Probezeit (§ 22 BBiG):**\n- mindestens **1 Monat**, maximal **4 Monate**\n- Kündigung **jederzeit ohne Grund** möglich\n\n**Nach Probezeit:**\n- Fristlose Kündigung nur bei **wichtigem Grund** (z. B. ständige Unpünktlichkeit, Nichtzahlung der Vergütung)\n- Auszubildender kann mit **4 Wochen Frist** kündigen — wenn er Ausbildung aufgibt oder Beruf wechselt\n- **Schriftform IMMER zwingend** (auch in Probezeit)\n\n**Regulär:**\n- Ablauf der vereinbarten Zeit, ggf. vorher mit **Bestehen der Abschlussprüfung** (am Tag der Bekanntgabe)\n- Vorzeitige Zulassung bei guten Leistungen über IHK (Anhörung von Ausbildendem + Berufsschule, § 45 BBiG)\n\n**§ 24 BBiG — Weiterbeschäftigung:**\nNach Ablauf der Ausbildungszeit entsteht **automatisch und ohne ausdrückliche Vereinbarung** ein **unbefristetes Arbeitsverhältnis**, wenn der Auszubildende weiterbeschäftigt wird.",
    "k": [
     "Probezeit: 1–4 Monate, jederzeit ohne Grund",
     "Nach Probezeit: nur wichtiger Grund (fristlos) oder 4 Wochen für Azubi",
     "§ 24 BBiG: automatisch unbefristetes Arbeitsverhältnis",
     "Schriftform IMMER"
    ],
    "r": "high"
   },
   {
    "t": "2.2.1 Jugendarbeitsschutzgesetz (JArbSchG)",
    "d": "Arbeitszeit, Pausen, Berufsschulanrechnung, Urlaubsstaffel.",
    "c": "**Jugendlicher** = 15, aber noch nicht 18.\n\n**Arbeitszeit:**\n- max. **40 h/Woche**, max. **8 h/Tag** (ausnahmsweise 8,5 h)\n- max. Schichtzeit **10 h** (Arbeit + Pausen)\n- **5 Tage/Woche**, zwei Ruhetage sollen aufeinanderfolgen\n- nur zwischen **6 und 20 Uhr**, nicht Sa/So/Feiertag\n\n**Ruhepausen:**\n- **30 min** bei >4,5 bis 6 h\n- **60 min** bei >6 h\n- nach Arbeit: mindestens **12 h** ununterbrochene Freizeit\n- nicht länger als 4,5 h durcharbeiten\n- Pause = mind. 15 min am Stück\n\n**Berufsschule (seit 2020 auch für >18-jährige Azubis):**\n- Unterricht **vor 9 Uhr** → vorher keine Beschäftigung\n- Unterricht **>5 Stunden** → an diesem Tag freistellen, **8 h** auf Wochenarbeitszeit anrechnen\n- Blockunterricht ≥25 Std/Woche = **40 h** Anrechnung, keine zusätzliche Arbeit\n- Tag **vor schriftlicher Abschlussprüfung**: Freistellung\n\n**Urlaubsstaffel (nach Alter zu Jahresbeginn):**\n- noch nicht 16 → **30 Werktage**\n- noch nicht 17 → **27 Werktage**\n- noch nicht 18 → **25 Werktage**",
    "k": [
     "40h/Wo, 8h/Tag, 6–20 Uhr, 5 Tage",
     "Pausen: 30 min bei 4,5–6h / 60 min ab 6h",
     "Mindestens 12h Freizeit nach Schicht",
     "Urlaub: 30/27/25 nach Alter",
     "Berufsschulregel seit 2020 auch für >18"
    ],
    "r": "high"
   },
   {
    "t": "2.2 ArbZG, BUrlG, EntgFG, MuSchG",
    "d": "Weitere Schutzgesetze im Überblick.",
    "c": "**Arbeitszeitgesetz (ArbZG):**\n- Arbeitszeit = Beginn bis Ende der Arbeit ohne Pausen (§ 2)\n- **Nachtzeit** = 23–6 Uhr\n- **Nachtarbeit** = >2 h in Nachtzeit\n- **Nachtarbeitnehmer** = regelmäßige Wechselschicht ODER ≥48 Nachtarbeitstage/Jahr\n\n**Bundesurlaubsgesetz (BUrlG):**\n- Mindestens **24 Werktage** bei 6-Tage-Woche\n\n**Entgeltfortzahlungsgesetz (EntgFG):**\n- Bei Krankheit: weiter Lohnzahlung **6 Wochen** bei gleichem Krankheitsgrund\n\n**Mutterschutzgesetz (MuSchG):**\n- **6 Wochen vor** Geburt, **8 Wochen nach** Geburt geschützt (**12** bei Mehrlings-/Frühgeburt)",
    "k": [
     "Mindesturlaub 24 Werktage (6-Tage)",
     "Krankheit: 6 Wochen Lohnfortzahlung",
     "Mutterschutz 6 vor / 8 nach (12 bei Mehrling)",
     "Nachtzeit 23–6 Uhr"
    ],
    "r": "medium"
   },
   {
    "t": "2.3 Betriebsrat — Größe, Wahl, Aufgaben",
    "d": "4 Aufgabenbereiche und 3 Beteiligungsrechte.",
    "c": "**Wann?** Ab **5 ständigen wahlberechtigten AN**, davon **3 wählbar**.\n\n**Wahlperiode:** alle **4 Jahre**, zwischen **1. März und 31. Mai** (§ 13 BetrVG).\n\n**Größe (§ 9 BetrVG, Auszug):**\n- 5–20 AN → 1 BR\n- 21–50 → 3\n- 51–100 → 5\n- 101–200 → 7\n- 201–400 → 9\n\n**4 Aufgabenbereiche (§§ 74–113 BetrVG):**\n- Allgemeine Aufgaben (Schutzbestimmungen)\n- Soziale Angelegenheiten (Arbeitsbedingungen)\n- Personelle Angelegenheiten\n- Wirtschaftliche Angelegenheiten\n\n**3 Beteiligungsrechte (gestaffelt):**\n- **Mitbestimmungsrechte** (echte Mitbestimmung) — soziale Angelegenheiten. Ohne Zustimmung keine Wirksamkeit.\n- **Mitwirkungsrechte** (Widerspruchsrechte) — personelle Einzelmaßnahmen ab 20 AN. **§ 102 BetrVG**: Anhörung vor Kündigung; sonst Kündigung unwirksam.\n- **Informations-/Beratungsrechte** — wirtschaftliche Angelegenheiten.\n\n**Organe:** Betriebsversammlung (mind. vierteljährlich), Einigungsstelle (§ 76), Wirtschaftsausschuss (§ 106).",
    "k": [
     "Ab 5 AN, davon 3 wählbar",
     "Wahl alle 4 Jahre, 1. März – 31. Mai",
     "§ 102 BetrVG: Anhörung vor Kündigung",
     "3 Stufen: Mitbestimmung > Mitwirkung > Information"
    ],
    "r": "high"
   },
   {
    "t": "2.4 Sozialversicherung — 5 Säulen",
    "d": "Krankenkasse, Unfall, Rente, Arbeitslosen, Pflege.",
    "c": "**5 Zweige der gesetzlichen Sozialversicherung:**\n\n| Zweig | Seit | Beitrag | Wer zahlt? |\n|---|---|---|---|\n| Krankenversicherung | 1883 | 14,6 % + Zusatz | paritätisch |\n| Unfallversicherung | 1884 | abh. Gefahrenklasse | **nur Arbeitgeber** |\n| Rentenversicherung | 1889 | 18,6 % | paritätisch |\n| Arbeitslosenversicherung | 1927 | 2,5 % | paritätisch |\n| Pflegeversicherung | 1995 | 3,05 % (Kinderlose +0,25 %) | paritätisch |\n\n**4 Grundprinzipien:**\n- **Versicherungspflicht** — automatisch mit Beschäftigung\n- **Beitragsfinanzierung** — paritätisch (außer Unfall)\n- **Solidaritätsprinzip** — Leistung nach Bedürftigkeit\n- **Äquivalenzprinzip** — Leistung nach Beitrag (Rente, teilw. Arbeitslosen)\n\n**Begriffspaar:**\n- **Beitragsbemessungsgrenze (BBG)** — Beiträge nur bis Grenze\n- **Versicherungspflichtgrenze** — bis wohin Pflichtmitgliedschaft KV/PV",
    "k": [
     "5 Zweige: KV / UV / RV / AV / PV",
     "Nur Unfallversicherung allein vom Arbeitgeber",
     "Solidarität vs. Äquivalenz",
     "KV 14,6 % / RV 18,6 % / AV 2,5 % / PV 3,05 %"
    ],
    "r": "high"
   },
   {
    "t": "4 Arbeitsplatz — Raumformen, Headset, Umwelt",
    "d": "Ergonomie, Raumgröße, Lärm in Sone, Beleuchtung.",
    "c": "**Regelwerk-Kaskade:** ArbSchG → ArbStättV → ASR → BG-Vorschriften → DIN-Normen.\n\n**Drei Raumformen:**\n- **Einzelbüro** — Privatsphäre, vertraulich. Isolationsgefahr, teuer.\n- **Gruppen-/Teambüro (4–12)** — Austausch, Werkzeug-Sharing. Lärm, Konflikt.\n- **Großraumbüro** — wirtschaftlich, kurze Wege. Lärm, fehlende Privatsphäre.\n\n**Raumgröße:** 12–15 m²/Arbeitsplatz, Bewegungsfläche min. 1,5 m².\n\n**Headset:**\n- **Sprechröhrchen** — klein, unauffällig, Hygiene durch Austausch\n- **Mit Mikrofon** — kaum Umgebungsgeräusche, aber größer\n- Pro MA persönlich aus Hygienegründen\n\n**Umweltfaktoren:**\n- **Lärm:** Sone = subjektives Empfinden (linear), Dezibel = Schalldruck (logarithmisch). Callcenter-Höchstgrenze **2 sone**.\n- **Klima:** 20–23 °C, 50–60 % Luftfeuchtigkeit\n- **Licht:** min. **500 Lux** am Büroarbeitsplatz. Rechtshänder Licht von links.",
    "k": [
     "Sone = subjektiv, Dezibel = physikalisch",
     "Callcenter max. 2 sone",
     "Min. 500 Lux",
     "20–23 °C, 50–60 % Luftfeuchtigkeit",
     "Headset persönlich pro MA"
    ],
    "r": "medium"
   },
   {
    "t": "5 Informationsmanagement & Kanäle",
    "d": "4 Informationsarten, 5 Kanäle, 2 Protokollarten.",
    "c": "**Aufgaben des Informationsmanagements:** beschaffen, aufbereiten, Fluss steuern, weiterleiten, archivieren.\n\n**4 Informationsarten:**\n- **Fachlich** — Produkte, Preise → Hotline-MA\n- **Organisatorisch** — Personalplanung, Wartung → Führung\n- **Sensibel** — Strategie, Personalprobleme → Einzelpersonen\n- **Soft Facts** — Betriebsklima, Feiern → alle MA\n\n**5 Informationskanäle:**\n- **Intranet** — hat schwarzes Brett ersetzt; alle MA. Pflege nötig.\n- **E-Mail** — schnell, dauerhaft, Anlagen. Nicht für Vertrauliches; Informationsflut.\n- **Meeting** — komplex, Diskussion, Beschlüsse, unangenehme Themen. Planungsvorlauf.\n- **Einzelgespräch** — sensibel, kritisch. Nur einzelne MA.\n- **Protokoll** — dauerhaft, auch Nichtanwesende. Verzögerung; Kritisches fehlt oft.\n\n**2 Protokollarten:**\n- **Verlaufsprotokoll** — Beiträge, Diskussion, Abstimmung\n- **Ergebnisprotokoll** — nur Ergebnisse + Beschlüsse",
    "k": [
     "4 Infoarten: fachlich, organisatorisch, sensibel, soft",
     "5 Kanäle: Intranet, E-Mail, Meeting, Einzelgespräch, Protokoll",
     "Verlauf- vs. Ergebnisprotokoll",
     "Sensible Info NICHT per E-Mail"
    ],
    "r": "medium"
   },
   {
    "t": "6 Zeitmanagement & Lerntechniken",
    "d": "ABC, Eisenhower, Pareto, ALPEN, 4 Lerntypen, 10 Lerngrundsätze.",
    "c": "**Priorisierungs-Werkzeuge:**\n\n- **To-do-Liste** — Aufgaben + Zeitbedarf + Termin\n- **ABC-Analyse** — A (sofort), B (delegieren/effizient), C (prüfen)\n- **Eisenhower-Prinzip** — Kreuztabelle dringend × wichtig:\n  - A wichtig + dringend → sofort\n  - B wichtig, nicht dringend → terminieren\n  - C dringend, nicht wichtig → delegieren\n  - D weder noch → Papierkorb\n- **Pareto (80/20)** — 20 % der Aufgaben = 80 % Erfolg\n- **ALPEN** — **A**ufgaben, **L**änge schätzen, **P**uffer (60/40), **E**ntscheiden, **N**achkontrolle\n\n**4 Lerntypen:** visuell, auditiv, kommunikativ, motorisch. In der Regel **Mischformen**.\n\n**10 Lerngrundsätze (Buch-Reihenfolge):**\n1. Motivation + klare Ziele\n2. Strukturierter Lernstoff\n3. Verknüpfung mit Bekanntem\n4. Wiederholungen\n5. Mehrere Sinneskanäle\n6. Positive emotionale Verbindung\n7. Lernstörungen beseitigen\n8. Nicht zu viel auf einmal\n9. Krankheit/Erschöpfung beeinträchtigt\n10. Leistungskurve beachten (kurze Pausen)",
    "k": [
     "Eisenhower: dringend × wichtig",
     "ALPEN: A-L-P-E-N",
     "Pareto 80/20",
     "4 Lerntypen, meist Mischformen",
     "10 Lerngrundsätze"
    ],
    "r": "high"
   },
   {
    "t": "1.9 VUCA — Die Rahmenbedingungen moderner Unternehmen",
    "d": "Volatility, Uncertainty, Complexity, Ambiguity — warum Unternehmen heute flexibel agieren müssen.",
    "c": "## VUCA — Definition\n\nVUCA beschreibt die **Rahmenbedingungen**, unter denen Unternehmen heute agieren. Der Begriff stammt ursprünglich aus dem US-Militär und beschreibt eine Welt, die sich schnell und unvorhersehbar verändert.\n\n## Die 4 Aspekte\n\n| Buchstabe | Englisch | Deutsch | Bedeutung | Beispiel DM |\n|---|---|---|---|---|\n| **V** | Volatility | **Volatilität** | schnelle, starke Veränderungen | Anrufvolumen schwankt unvorhersehbar |\n| **U** | Uncertainty | **Unsicherheit** | Zukunft schwer vorhersehbar | neue Technologien (KI, Chatbots) |\n| **C** | Complexity | **Komplexität** | viele vernetzte Einflussfaktoren | Omnichannel mit vielen Kanälen |\n| **A** | Ambiguity | **Ambiguität** (Mehrdeutigkeit) | Situationen unterschiedlich deutbar | widersprüchliche Kundenfeedbacks |\n\n## Reaktion auf VUCA\n\nUnternehmen reagieren auf die VUCA-Welt mit:\n- **Agilität** (schnelle Anpassungsfähigkeit)\n- **Flexiblen Strukturen** (flache Hierarchien)\n- **Kontinuierlicher Weiterbildung** der Mitarbeiter\n- **Datenbasierten Entscheidungen** (Forecasting, Reporting)\n\n## Gegenmodell: VUCA 2.0\n\nManche Konzepte setzen dem VUCA bewusst Gegenwerte entgegen:\n- **V**ision (statt Volatilität)\n- **U**nderstanding (statt Unsicherheit)\n- **C**larity (statt Komplexität)\n- **A**gility (statt Ambiguität)\n\n⚠️ **Prüfungsrelevant:** Alle 4 Buchstaben einzeln benennen UND erläutern können — nicht nur das Akronym kennen!",
    "k": [
     "VUCA = Volatility, Uncertainty, Complexity, Ambiguity",
     "Beschreibt die unvorhersehbaren Rahmenbedingungen moderner Unternehmen",
     "Reaktion: Agilität, flexible Strukturen, Weiterbildung",
     "Jeden der 4 Aspekte einzeln erklären können"
    ],
    "r": "high"
   },
   {
    "t": "1.10 Organigramm & Aufbau-/Ablauforganisation vertieft",
    "d": "Organigramm-Funktionen und grafische Darstellung, plus die scharfe Trennung von Aufbau- und Ablauforganisation.",
    "c": "## Das Organigramm\n\n**Definition:** Grafische Darstellung der **Aufbauorganisation** — zeigt Stellen, Abteilungen, Weisungsbefugnisse und Hierarchieebenen.\n\n### Funktionen eines Organigramms\n1. **Überblick** über die Unternehmensstruktur\n2. **Weisungsbefugnisse** sichtbar machen (wer ist wem unterstellt?)\n3. **Verantwortungsbereiche** abgrenzen\n4. **Kommunikationswege** verdeutlichen\n5. **Onboarding** neuer Mitarbeiter erleichtern\n\n### Grafische Darstellungsformen\n| Form | Beschreibung |\n|---|---|\n| **Vertikal (Top-Down)** | Leitung oben, Hierarchie nach unten — Standardform |\n| **Horizontal** | Leitung links, Struktur nach rechts |\n| **Kreisförmig** | Leitung im Zentrum, Abteilungen außen |\n\n### Vor- und Nachteile von Organigrammen\n| Vorteile | Nachteile |\n|---|---|\n| Klare Übersicht | Statisch — schnell veraltet |\n| Weisungswege erkennbar | Informelle Beziehungen fehlen |\n| Verantwortung sichtbar | Keine Prozesse/Abläufe erkennbar |\n| Hilfe bei Einarbeitung | Bei großen Firmen unübersichtlich |\n\n## Aufbau- vs. Ablauforganisation (PRÜFUNG!)\n\n| | **Aufbauorganisation** | **Ablauforganisation** |\n|---|---|---|\n| **Frage** | WER macht WAS? (Struktur) | WIE/WANN wird gearbeitet? (Prozess) |\n| **Inhalt** | Stellen, Abteilungen, Weisungsbefugnisse | Arbeitsabläufe, Reihenfolgen, Zeitplanung |\n| **Darstellung** | Organigramm | Flussdiagramm, Ablaufplan |\n| **Beispiel DM** | „Teamleiter führt 15 Agents\" | „Eingehender Anruf → IVR → Agent → Nacharbeit\" |\n\n**Merksatz:** Aufbau = **statisches Gerüst** (Wer?). Ablauf = **dynamischer Prozess** (Wie?).\n\n⚠️ **Häufige Prüfungsfalle:** „Organigramm zeigt Abläufe\" → FALSCH. Das Organigramm zeigt die **Aufbau**organisation (Struktur), NICHT die Abläufe!",
    "k": [
     "Organigramm = grafische Darstellung der Aufbauorganisation",
     "5 Funktionen: Überblick, Weisungsbefugnis, Verantwortung, Kommunikation, Onboarding",
     "Aufbau = WER macht WAS (Struktur, Organigramm)",
     "Ablauf = WIE/WANN wird gearbeitet (Prozess, Flussdiagramm)"
    ],
    "r": "high"
   }
  ],
  "cards": [
   {
    "f": "Welcher Zieltyp wird bei der Gründung ins Handelsregister eingetragen?",
    "b": "Das Sachziel — es beschreibt Zweck und Betätigungsfeld.",
    "k": "Ziele & Entscheidungen"
   },
   {
    "f": "Zielharmonie oder Zielkonflikt: Teures Ökopapier senkt die Rentabilität.",
    "b": "Zielkonflikt — ein ökologisches Ziel nur auf Kosten eines Erfolgsziels. Lösung: Priorisierung oder Kompromiss.",
    "k": "Ziele & Entscheidungen"
   },
   {
    "f": "Welche drei Untergruppen haben die wirtschaftlichen Ziele?",
    "b": "Leistungsziele (Marktanteil), Finanzziele (Eigenkapital, Rücklagen), Erfolgsziele (Umsatz, Rentabilität).",
    "k": "Ziele & Entscheidungen"
   },
   {
    "f": "Welche Entscheidungsmethode sammelt nur Fakten und entscheidet noch nichts?",
    "b": "CAF (Consider All Facts) — eine Vorstufe, keine Entscheidung.",
    "k": "Entscheidungsmethoden"
   },
   {
    "f": "Was unterscheidet die bewertete von der einfachen Entscheidungsmatrix?",
    "b": "Die Prozent-Gewichtung der Kriterien (Summe 100 %). Ohne Gewichtung zählt jedes Kriterium gleich.",
    "k": "Entscheidungsmethoden"
   },
   {
    "f": "Für welche Entscheidungsart ist Intuition laut Buch ungeeignet?",
    "b": "Für strategische Entscheidungen — subjektiv und nicht nachvollziehbar.",
    "k": "Entscheidungsmethoden"
   },
   {
    "f": "Direktorialsystem oder Kollegialprinzip: Der Komplementär entscheidet allein.",
    "b": "Direktorialsystem (Entscheidungszentralisation).",
    "k": "Entscheidungsarten"
   },
   {
    "f": "Wie unterscheidet man Entscheidungen nach dem Kenntnisstand?",
    "b": "Unter Sicherheit (alles bekannt), unter Risiko (Wahrscheinlichkeiten bekannt), unter Unsicherheit (Wahrscheinlichkeiten unbekannt).",
    "k": "Entscheidungsarten"
   },
   {
    "f": "Was unterscheidet Führungsstil von Führungstechnik?",
    "b": "Stil = persönlich und sozial. Technik = organisatorisch, also die Management-by-Verfahren.",
    "k": "Führung"
   },
   {
    "f": "Welche Management-by-Technik greift nur bei Abweichungen ein?",
    "b": "Management by exception — Eingriff erst beim Überschreiten definierter Grenzen.",
    "k": "Führung"
   },
   {
    "f": "Wofür stehen die fünf Buchstaben von SMART?",
    "b": "Spezifisch, Messbar, Aktiv beeinflussbar, Realistisch, Terminiert.",
    "k": "Führung"
   },
   {
    "f": "Welcher Führungsstil liefert Tempo, aber kein Korrektiv?",
    "b": "Der autoritäre — schnell und kontrolliert, aber ohne Korrektur, ohne Ideen, mit aggressivem Klima.",
    "k": "Führung"
   },
   {
    "f": "Corporate Identity, Unternehmenskultur oder Image — was ist das Fremdbild von außen?",
    "b": "Das Image. Kultur = intern gelebte Realität, CI = bewusst gestaltetes Gesamtbild.",
    "k": "Kultur & CI"
   },
   {
    "f": "Welche vier Komponenten hat die Corporate Identity?",
    "b": "Corporate Design, Corporate Communication, Corporate Behavior, Corporate Image.",
    "k": "Kultur & CI"
   },
   {
    "f": "Einheitliche Begrüßungsformel am Telefon — welche CI-Komponente?",
    "b": "Corporate Behavior: Verhalten gegenüber Kunden, Kollegen, Partnern und Lieferanten.",
    "k": "Kultur & CI"
   },
   {
    "f": "Aufbau- oder Ablauforganisation: „Anruf → IVR → Agent → Nachbearbeitung“?",
    "b": "Ablauforganisation — sie regelt WIE und WANN. Darstellung im Flussdiagramm.",
    "k": "Organisation"
   },
   {
    "f": "Was kennzeichnet eine Stabsstelle?",
    "b": "Querschnittsfunktion ohne Weisungsbefugnis (allenfalls fachlich), z. B. QM oder Öffentlichkeitsarbeit.",
    "k": "Organisation"
   },
   {
    "f": "Welche vier Leitungssysteme nennt das Buch?",
    "b": "Einlinien-, Stablinien-, Sparten- und Mehrlinienorganisation (Variante: Matrix).",
    "k": "Organisation"
   },
   {
    "f": "Nennen Sie zwei Nachteile eines Organigramms.",
    "b": "Statisch und schnell veraltet; zeigt weder Prozesse noch informelle Beziehungen.",
    "k": "Organisation"
   },
   {
    "f": "HRA oder HRB — wo steht die GmbH & Co. KG?",
    "b": "Im HRA. Sie ist rechtlich eine KG. Nur die Komplementär-GmbH selbst steht im HRB.",
    "k": "Recht"
   },
   {
    "f": "Wie wirkt die Handelsregistereintragung beim Istkaufmann?",
    "b": "Deklaratorisch (rechtsbezeugend) — die Kaufmannseigenschaft besteht bereits vorher.",
    "k": "Recht"
   },
   {
    "f": "Wie wirkt die Eintragung beim Kann- und beim Formkaufmann?",
    "b": "Konstitutiv (rechtsbegründend) — erst die Eintragung schafft die Kaufmannseigenschaft.",
    "k": "Recht"
   },
   {
    "f": "Welche fünf Grundsätze gelten für die Firmenwahl?",
    "b": "Rechtsformzusatz, Firmenwahrheit/-klarheit, Firmenausschließlichkeit, Firmenbeständigkeit, Firmenöffentlichkeit.",
    "k": "Recht"
   },
   {
    "f": "Wie haftet der Komplementär einer KG?",
    "b": "Unbeschränkt, persönlich, gesamtschuldnerisch und direkt.",
    "k": "Recht"
   },
   {
    "f": "Welche Rechte bleiben dem Kommanditisten trotz Ausschluss von der Geschäftsführung?",
    "b": "Widerspruchsrecht bei außergewöhnlichen Handlungen und Kontrollrechte mit Bilanzeinsicht.",
    "k": "Recht"
   },
   {
    "f": "Mindeststammkapital der GmbH — und Mindesteinlage je Gesellschafter?",
    "b": "25.000 € Stammkapital, mindestens 1 € Stammeinlage je Gesellschafter.",
    "k": "Recht"
   },
   {
    "f": "Ab wie vielen Arbeitnehmern ist bei der GmbH ein Aufsichtsrat vorgeschrieben?",
    "b": "Ab 500 Arbeitnehmern.",
    "k": "Recht"
   },
   {
    "f": "Wozu dient die Konstruktion GmbH & Co. KG?",
    "b": "Sie wandelt die unmittelbare unbeschränkte Komplementärhaftung in eine mittelbare beschränkte um.",
    "k": "Recht"
   },
   {
    "f": "Was verlangt die UG (haftungsbeschränkt) im Gegenzug zum fehlenden Mindestkapital?",
    "b": "Gewinnthesaurierung, bis 25.000 € erreicht sind.",
    "k": "Recht"
   },
   {
    "f": "Wer ist die „zuständige Stelle“ nach BBiG und was tut sie?",
    "b": "Die IHK — Prüfungen durchführen, beraten, bei Streitigkeiten schlichten.",
    "k": "Institutionen"
   },
   {
    "f": "Welche zwei Interessenverbände vertreten die Branche, welche Gewerkschaft?",
    "b": "CCV und DDV; Gewerkschaft ist ver.di.",
    "k": "Institutionen"
   },
   {
    "f": "Ausbildender oder Ausbilder — wer unterschreibt den Vertrag?",
    "b": "Der Ausbildende, also das Unternehmen. Der Ausbilder ist die unterweisende Person.",
    "k": "Ausbildung"
   },
   {
    "f": "Wer erlässt die Ausbildungsordnung, wer den Rahmenlehrplan?",
    "b": "Ausbildungsordnung: der Bund für den Betrieb. Rahmenlehrplan: die KMK für die Berufsschule.",
    "k": "Ausbildung"
   },
   {
    "f": "Wie lang darf die Probezeit nach § 22 BBiG sein?",
    "b": "Mindestens 1 Monat, höchstens 4 Monate.",
    "k": "BBiG"
   },
   {
    "f": "Wie wird während der Probezeit gekündigt?",
    "b": "Jederzeit und ohne Angabe von Gründen — aber zwingend schriftlich.",
    "k": "BBiG"
   },
   {
    "f": "Welche Kündigungsmöglichkeit hat der Auszubildende nach der Probezeit?",
    "b": "Mit 4 Wochen Frist, wenn er die Ausbildung aufgibt oder den Beruf wechseln will. Schriftform zwingend.",
    "k": "BBiG"
   },
   {
    "f": "Was passiert nach § 24 BBiG bei Weiterbeschäftigung ohne Vereinbarung?",
    "b": "Es entsteht automatisch ein unbefristetes Arbeitsverhältnis.",
    "k": "BBiG"
   },
   {
    "f": "Wann endet die Ausbildung vorzeitig?",
    "b": "Mit Bestehen der Abschlussprüfung, am Tag der Bekanntgabe des Ergebnisses.",
    "k": "BBiG"
   },
   {
    "f": "Einfaches oder qualifiziertes Zeugnis — was steht zusätzlich drin?",
    "b": "Das qualifizierte Zeugnis nennt zusätzlich Leistung und Verhalten (§ 16 BBiG).",
    "k": "BBiG"
   },
   {
    "f": "Wie viele Stunden und an wie vielen Tagen dürfen Jugendliche arbeiten?",
    "b": "Höchstens 8 Stunden täglich, 40 Stunden wöchentlich, an 5 Tagen, zwischen 6 und 20 Uhr.",
    "k": "Schutzgesetze"
   },
   {
    "f": "Wie lang sind die Pausen nach JArbSchG?",
    "b": "30 Minuten bei mehr als 4,5 bis 6 Stunden, 60 Minuten bei mehr als 6 Stunden. Zwischen zwei Schichten 12 Stunden Freizeit.",
    "k": "Schutzgesetze"
   },
   {
    "f": "Wie viele Urlaubstage stehen einem Azubi zu, der zu Jahresbeginn 16 ist?",
    "b": "27 Werktage. Staffel: unter 16 → 30, unter 17 → 27, unter 18 → 25.",
    "k": "Schutzgesetze"
   },
   {
    "f": "Was ist Nachtzeit nach ArbZG — und ab wann gilt Nachtarbeit?",
    "b": "Nachtzeit ist 23 bis 6 Uhr. Nachtarbeit ab mehr als 2 Stunden in dieser Zeit.",
    "k": "Schutzgesetze"
   },
   {
    "f": "Wie lange dauert der Mutterschutz?",
    "b": "6 Wochen vor und 8 Wochen nach der Geburt; 12 Wochen danach bei Mehrlings- oder Frühgeburt.",
    "k": "Schutzgesetze"
   },
   {
    "f": "Ab welchem GdB gilt jemand als schwerbehindert — und was folgt ab 20 Beschäftigten?",
    "b": "Ab 50 %. Ab 20 Beschäftigten müssen 5 % der Plätze besetzt sein, sonst Ausgleichsabgabe.",
    "k": "Schutzgesetze"
   },
   {
    "f": "Ab wann kann ein Betriebsrat gewählt werden — und wie lange amtiert er?",
    "b": "Ab 5 ständigen wahlberechtigten Arbeitnehmern, davon 3 wählbar. Amtszeit 4 Jahre, Wahl 1. März bis 31. Mai.",
    "k": "Mitbestimmung"
   },
   {
    "f": "Welches der drei Beteiligungsrechte des Betriebsrats ist das stärkste?",
    "b": "Das Mitbestimmungsrecht in sozialen Angelegenheiten. Schwächstes: Information und Beratung in wirtschaftlichen Fragen.",
    "k": "Mitbestimmung"
   },
   {
    "f": "Wer ist zur JAV wahlberechtigt, wer wählbar?",
    "b": "Wahlberechtigt: unter 18 oder Azubi unter 25. Wählbar: alle Arbeitnehmer unter 25. Amtszeit 2 Jahre.",
    "k": "Mitbestimmung"
   },
   {
    "f": "Betriebsvereinbarung oder Tarifvertrag — wer schließt was?",
    "b": "BV: Betriebsrat mit einem einzelnen Arbeitgeber. TV: Gewerkschaft mit Arbeitgeber oder Verband. Es gilt der Tarifvorrang.",
    "k": "Mitbestimmung"
   },
   {
    "f": "Welcher Sozialversicherungszweig wird allein vom Arbeitgeber getragen?",
    "b": "Die Unfallversicherung. Die anderen vier Zweige werden paritätisch finanziert.",
    "k": "Sozialversicherung"
   }
  ],
  "quiz": [
   {
    "t": "mc",
    "q": "Ein Callcenter will den Marktanteil ausbauen und gleichzeitig die Personalkosten um 10 % senken. Wie ist die Zielbeziehung einzuordnen?",
    "a": [
     "Zielharmonie, weil beide Ziele wirtschaftlich sind",
     "Zielkonflikt, weil Wachstum in der Regel mehr Personal erfordert",
     "Zielneutralität, weil sich die Ziele nicht berühren",
     "Sachziel, weil es um das Betätigungsfeld geht"
    ],
    "c": 1,
    "e": "Beide Ziele sind wirtschaftlich — das macht sie noch nicht harmonisch. Wachstum braucht Kapazität, Kostensenkung baut sie ab.",
    "k": "Ziele & Entscheidungen",
    "d": "medium",
    "s": "LF1 1.1.1"
   },
   {
    "t": "mc",
    "q": "Welche Zuordnung ist korrekt?",
    "a": [
     "Rücklagenbildung → soziales Ziel",
     "Betriebskindergarten → ökologisches Ziel",
     "Marktanteil → Leistungsziel",
     "Umweltgerechte Entsorgung → Erfolgsziel"
    ],
    "c": 2,
    "e": "Wirtschaftliche Ziele gliedern sich in Leistungs-, Finanz- und Erfolgsziele. Marktanteil ist ein Leistungsziel.",
    "k": "Ziele & Entscheidungen",
    "d": "hard",
    "s": "LF1 1.1.1"
   },
   {
    "t": "tf",
    "q": "Das Sachziel wird bei der Gründung ins Handelsregister eingetragen.",
    "v": true,
    "e": "Richtig — es beschreibt Zweck und Betätigungsfeld.",
    "k": "Ziele & Entscheidungen",
    "d": "easy",
    "s": "LF1 1.1.1"
   },
   {
    "t": "odd",
    "q": "Welches Ziel gehört nicht zu den wirtschaftlichen Zielen?",
    "a": [
     "Umsatzsteigerung um 8 %",
     "Erhöhung des Eigenkapitals",
     "Marktanteil von 12 %",
     "Papierverbrauch um 30 % senken"
    ],
    "c": 3,
    "e": "Papier ist ein ökologisches Ziel. Umsatz = Erfolg, Eigenkapital = Finanz, Marktanteil = Leistung.",
    "k": "Ziele & Entscheidungen",
    "d": "medium",
    "s": "LF1 1.1.1"
   },
   {
    "t": "tf",
    "q": "Ein Zielkonflikt wird gelöst, indem eines der Ziele ersatzlos gestrichen wird.",
    "v": false,
    "e": "Falsch. Das Buch nennt Priorisierung oder Kompromiss.",
    "k": "Ziele & Entscheidungen",
    "d": "medium",
    "s": "LF1 1.1.1"
   },
   {
    "t": "mc",
    "q": "Die Geschäftsführung beschließt, die E-Mail-Bearbeitung ab dem kommenden Geschäftsjahr auszulagern. Wie ist das einzuordnen?",
    "a": [
     "Operativ, weil es das Tagesgeschäft betrifft",
     "Strategisch, weil langfristig und von langer Hand geplant",
     "Programmiert, weil nach festen Regeln getroffen",
     "Entscheidung unter Sicherheit"
    ],
    "c": 1,
    "e": "Langfristig und grundlegend = strategisch.",
    "k": "Entscheidungsarten",
    "d": "medium",
    "s": "LF1 1.1.2"
   },
   {
    "t": "mc",
    "q": "Der Teamleiter ruft spontan zwei Mitarbeiter aus dem Frei, weil das Volumen explodiert. Welche Einordnung passt?",
    "a": [
     "Strategisch und nicht-programmiert",
     "Operativ und programmiert",
     "Strategisch und programmiert",
     "Operativ, aber nur unter Sicherheit"
    ],
    "c": 1,
    "e": "Kurzfristiges Tagesgeschäft nach bekannter Routine.",
    "k": "Entscheidungsarten",
    "d": "hard",
    "s": "LF1 1.1.2"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jeder Entscheidungssituation die Bezeichnung zu.",
    "pairs": [
     [
      "Alle Einflussfaktoren sind bekannt",
      "Entscheidung unter Sicherheit"
     ],
     [
      "Wahrscheinlichkeiten sind bekannt",
      "Entscheidung unter Risiko"
     ],
     [
      "Wahrscheinlichkeiten sind unbekannt",
      "Entscheidung unter Unsicherheit"
     ]
    ],
    "e": "Der Unterschied liegt allein im Wissen über die Eintrittswahrscheinlichkeiten.",
    "k": "Entscheidungsarten",
    "d": "medium",
    "s": "LF1 1.1.2"
   },
   {
    "t": "tf",
    "q": "Das Kollegialprinzip kennt auch die Entscheidung per Stichentscheid.",
    "v": true,
    "e": "Richtig — einstimmig, mehrheitlich oder per Stichentscheid.",
    "k": "Entscheidungsarten",
    "d": "medium",
    "s": "LF1 1.1.2"
   },
   {
    "t": "mc",
    "q": "Ein Team hat alle Einflussfaktoren gesammelt, aber nichts bewertet. Welche Methode wurde angewendet?",
    "a": [
     "PMI",
     "CAF",
     "Entscheidungsmatrix",
     "Gewichtetes PMI"
    ],
    "c": 1,
    "e": "CAF sammelt ungewichtet und liefert selbst keine Entscheidung.",
    "k": "Entscheidungsmethoden",
    "d": "easy",
    "s": "LF1 1.1.2"
   },
   {
    "t": "mc",
    "q": "Zwei Standorte sollen verglichen werden, die Kriterien sind unterschiedlich wichtig. Welche Methode bildet das ab?",
    "a": [
     "CAF",
     "PMI",
     "Entscheidungsmatrix",
     "Bewertete Entscheidungsmatrix"
    ],
    "c": 3,
    "e": "Nur die bewertete Matrix gewichtet die Kriterien prozentual.",
    "k": "Entscheidungsmethoden",
    "d": "medium",
    "s": "LF1 1.1.2"
   },
   {
    "t": "tf",
    "q": "Beim gewichteten PMI werden die Kriterien prozentual gewichtet.",
    "v": false,
    "e": "Falsch. Dort werden Plus und Minus mit 1–6 bepunktet. Prozentgewichtung gibt es nur in der bewerteten Matrix.",
    "k": "Entscheidungsmethoden",
    "d": "hard",
    "s": "LF1 1.1.2"
   },
   {
    "t": "cloze",
    "q": "Entscheidungsmethoden",
    "txt": "{{1}} sammelt alle Einflussfaktoren ungewichtet und entscheidet noch nichts. Beim {{2}} werden Aspekte mit Plus, Minus und Interessant markiert. Nur die {{3}} gewichtet die Kriterien in Prozent.",
    "gaps": [
     {
      "s": "CAF",
      "o": [
       "PMI",
       "SMART"
      ]
     },
     {
      "s": "PMI",
      "o": [
       "CAF",
       "SWOT"
      ]
     },
     {
      "s": "bewertete Entscheidungsmatrix",
      "o": [
       "einfache Entscheidungsmatrix",
       "intuitive Entscheidung"
      ]
     }
    ],
    "e": "CAF sammelt, PMI markiert, die bewertete Matrix gewichtet.",
    "k": "Entscheidungsmethoden",
    "d": "medium",
    "s": "LF1 1.1.2"
   },
   {
    "t": "mc",
    "q": "Warum verbietet sich Intuition bei strategischen Entscheidungen?",
    "a": [
     "Weil sie zu lange dauert",
     "Weil sie subjektiv und nicht nachvollziehbar ist",
     "Weil sie gesetzlich untersagt ist",
     "Weil sie nur im Kollegialsystem zulässig ist"
    ],
    "c": 1,
    "e": "Schnell und erfahrungsgestützt, aber intransparent — für weitreichende Entscheidungen zu wenig.",
    "k": "Entscheidungsmethoden",
    "d": "medium",
    "s": "LF1 1.1.2"
   },
   {
    "t": "mc",
    "q": "Eine Führungskraft vereinbart messbare Jahresziele und lässt den Weg offen. Welche Technik ist das?",
    "a": [
     "Management by exception",
     "Management by objectives",
     "Management by delegation",
     "Management by results"
    ],
    "c": 1,
    "e": "Zielvereinbarung mit offenem Weg. Die Ziele sollten SMART sein.",
    "k": "Führung",
    "d": "medium",
    "s": "LF1 1.1.3"
   },
   {
    "t": "mc",
    "q": "Der Teamleiter greift erst ein, wenn die Lost-Call-Quote über 5 % steigt. Welche Technik?",
    "a": [
     "Management by objectives",
     "Management by results",
     "Management by exception",
     "Management by delegation"
    ],
    "c": 2,
    "e": "Eingriff nur bei Abweichung von definierten Grenzwerten.",
    "k": "Führung",
    "d": "medium",
    "s": "LF1 1.1.3"
   },
   {
    "t": "tf",
    "q": "Führungsstil und Führungstechnik meinen dasselbe.",
    "v": false,
    "e": "Falsch. Stil ist persönlich und sozial, Technik organisatorisch.",
    "k": "Führung",
    "d": "easy",
    "s": "LF1 1.1.3"
   },
   {
    "t": "mc",
    "q": "Viele Ideen, lange Entscheidungen, niemand fühlt sich verantwortlich. Welcher Führungsstil?",
    "a": [
     "Autoritär",
     "Kooperativ",
     "Laissez-faire",
     "Situativ"
    ],
    "c": 2,
    "e": "Laissez-faire lässt maximale Freiheit — mit dem Preis fehlender Verbindlichkeit.",
    "k": "Führung",
    "d": "hard",
    "s": "LF1 1.1.3"
   },
   {
    "t": "multi",
    "q": "Welche Nachteile nennt das Buch zur autoritären Führung?",
    "a": [
     "Keine Korrekturmöglichkeit durch Mitarbeiter",
     "Ideen der Mitarbeiter bleiben ungenutzt",
     "Entscheidungen dauern lange",
     "Aggressives Betriebsklima"
    ],
    "cs": [
     0,
     1,
     3
    ],
    "e": "Tempo ist gerade der Vorteil des autoritären Stils, kein Nachteil.",
    "k": "Führung",
    "d": "hard",
    "s": "LF1 1.1.3"
   },
   {
    "t": "type",
    "q": "„Die Bearbeitungszeit soll sinken.“ Welcher SMART-Buchstabe ist verletzt?",
    "ans": [
     "Messbar",
     "M",
     "messbar"
    ],
    "hint": "Ein Wort genügt.",
    "e": "Ohne Kennzahl und Zeitpunkt fehlt die Messbarkeit — kein Soll-Ist-Vergleich möglich.",
    "k": "Führung",
    "d": "medium",
    "s": "LF1 1.1.3"
   },
   {
    "t": "order",
    "q": "Bringen Sie die Buchstaben der SMART-Regel in die Reihenfolge des Buches.",
    "items": [
     "Spezifisch",
     "Messbar",
     "Aktiv beeinflussbar",
     "Realistisch",
     "Terminiert"
    ],
    "e": "Spezifisch – Messbar – Aktiv beeinflussbar – Realistisch – Terminiert.",
    "k": "Führung",
    "d": "medium",
    "s": "LF1 1.1.3"
   },
   {
    "t": "mc",
    "q": "Welches Ziel ist nach SMART korrekt formuliert?",
    "a": [
     "Wir wollen die Kundenzufriedenheit deutlich verbessern.",
     "Die Erstlösungsquote soll bis 31.12. von 78 % auf 85 % steigen.",
     "Alle Mitarbeiter sollen sich mehr anstrengen.",
     "Der Marktanteil soll möglichst bald wachsen."
    ],
    "c": 1,
    "e": "Nur B nennt Kennzahl, Ausgangswert, Zielwert und Termin.",
    "k": "Führung",
    "d": "easy",
    "s": "LF1 1.1.3"
   },
   {
    "t": "mc",
    "q": "Ein Unternehmen führt Kennzahlen ein, Teams verfolgen die Zielerreichung selbst, die Führung greift nur bei Unterschreitung ein. Welche Kombination?",
    "a": [
     "Autoritär mit Management by objectives",
     "Kooperativ mit Management by exception",
     "Laissez-faire mit Management by delegation",
     "Situativ mit CAF"
    ],
    "c": 1,
    "e": "Einbindung der Mitarbeiter plus Eingriff nur bei Abweichung.",
    "k": "Führung",
    "d": "hard",
    "s": "LF1 1.1.3"
   },
   {
    "t": "mc",
    "q": "Ein Kunde beschreibt Dialogfix in einer Umfrage als „unpersönlich“. Welcher Begriff ist betroffen?",
    "a": [
     "Unternehmenskultur",
     "Corporate Image",
     "Corporate Design",
     "Unternehmensleitbild"
    ],
    "c": 1,
    "e": "Wahrnehmung durch Außenstehende = Image. Kultur ist die intern gelebte Realität.",
    "k": "Kultur & CI",
    "d": "medium",
    "s": "LF1 1.1.4"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jeder Maßnahme die CI-Komponente zu.",
    "pairs": [
     [
      "Einheitliches Logo und Hausfarben",
      "Corporate Design"
     ],
     [
      "Verbindlicher Gesprächsleitfaden",
      "Corporate Behavior"
     ],
     [
      "Pressearbeit und Werbekampagne",
      "Corporate Communication"
     ]
    ],
    "e": "Design = Erscheinung, Behavior = Verhalten, Communication = Kommunikation.",
    "k": "Kultur & CI",
    "d": "medium",
    "s": "LF1 1.1.4"
   },
   {
    "t": "tf",
    "q": "Das Unternehmensleitbild wirkt ausschließlich nach außen.",
    "v": false,
    "e": "Falsch. Nach innen integrierend, nach außen orientierend.",
    "k": "Kultur & CI",
    "d": "medium",
    "s": "LF1 1.1.4"
   },
   {
    "t": "multi",
    "q": "Welche Elemente bilden laut Buch die Unternehmenskultur?",
    "a": [
     "Unternehmensziele",
     "Normen und Werte",
     "Rituale",
     "Bilanzsumme",
     "Vorbilder"
    ],
    "cs": [
     0,
     1,
     2,
     4
    ],
    "e": "Fünf Elemente: Ziele, Normen und Werte, Kommunikation, Rituale, Vorbilder.",
    "k": "Kultur & CI",
    "d": "medium",
    "s": "LF1 1.1.4"
   },
   {
    "t": "odd",
    "q": "Welcher Begriff passt nicht zu den vier CI-Komponenten?",
    "a": [
     "Corporate Design",
     "Corporate Behavior",
     "Corporate Communication",
     "Corporate Governance"
    ],
    "c": 3,
    "e": "Die vierte Komponente ist Corporate Image.",
    "k": "Kultur & CI",
    "d": "medium",
    "s": "LF1 1.1.4"
   },
   {
    "t": "mc",
    "q": "Ein Onboarding-Dokument beschreibt, welche Abteilung wem unterstellt ist. Was wird dokumentiert?",
    "a": [
     "Ablauforganisation",
     "Aufbauorganisation",
     "Prozesslandkarte",
     "Leitbild"
    ],
    "c": 1,
    "e": "WER macht WAS und wem unterstellt = Aufbauorganisation.",
    "k": "Organisation",
    "d": "easy",
    "s": "LF1 1.2"
   },
   {
    "t": "odd",
    "q": "Welcher Begriff gehört nicht zu den Leitungssystemen?",
    "a": [
     "Einlinienorganisation",
     "Stablinienorganisation",
     "Spartenorganisation",
     "Ablauforganisation"
    ],
    "c": 3,
    "e": "Die Ablauforganisation ist die Prozessgestaltung, kein Leitungssystem.",
    "k": "Organisation",
    "d": "medium",
    "s": "LF1 1.2.2"
   },
   {
    "t": "mc",
    "q": "Welche Aussage zur Stabsstelle trifft zu?",
    "a": [
     "Sie hat volle Weisungsbefugnis",
     "Sie hat keine oder nur fachliche Weisungsbefugnis",
     "Sie ist der Geschäftsführung übergeordnet",
     "Sie ersetzt die Linienorganisation"
    ],
    "c": 1,
    "e": "Stabsstellen beraten als Querschnittsfunktion, sie führen nicht.",
    "k": "Organisation",
    "d": "medium",
    "s": "LF1 1.2.2"
   },
   {
    "t": "tf",
    "q": "Ein Organigramm zeigt auch die informellen Beziehungen im Unternehmen.",
    "v": false,
    "e": "Falsch. Nur die formale Struktur — Prozesse und informelle Beziehungen bleiben unsichtbar.",
    "k": "Organisation",
    "d": "medium",
    "s": "LF1 1.2.1"
   },
   {
    "t": "tf",
    "q": "Eine Stabsstelle kann fachliche, aber keine disziplinarischen Weisungen erteilen.",
    "v": true,
    "e": "Richtig — keine oder allenfalls fachliche Weisungsbefugnis.",
    "k": "Organisation",
    "d": "hard",
    "s": "LF1 1.2.2"
   },
   {
    "t": "cloze",
    "q": "Organisation",
    "txt": "Die {{1}} beantwortet, wer was tut, und wird im {{2}} dargestellt. Die {{3}} beantwortet, wie und wann gearbeitet wird, und wird im {{4}} dargestellt.",
    "gaps": [
     {
      "s": "Aufbauorganisation",
      "o": [
       "Ablauforganisation"
      ]
     },
     {
      "s": "Organigramm",
      "o": [
       "Flussdiagramm"
      ]
     },
     {
      "s": "Ablauforganisation",
      "o": [
       "Aufbauorganisation"
      ]
     },
     {
      "s": "Flussdiagramm",
      "o": [
       "Organigramm"
      ]
     }
    ],
    "e": "Aufbau = Struktur, Ablauf = Prozess.",
    "k": "Organisation",
    "d": "medium",
    "s": "LF1 1.2"
   },
   {
    "t": "mc",
    "q": "Ein Kleingewerbetreibender lässt sich freiwillig eintragen. Was bewirkt die Eintragung?",
    "a": [
     "Sie ist deklaratorisch, er war ohnehin Kaufmann",
     "Sie ist konstitutiv, erst dadurch wird er Kaufmann",
     "Sie ist unwirksam",
     "Sie macht ihn zum Formkaufmann"
    ],
    "c": 1,
    "e": "Kannkaufmann: die Eintragung ist rechtsbegründend.",
    "k": "Recht",
    "d": "hard",
    "s": "LF1 1.3.1"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jeden Kaufmannstyp seiner Beschreibung zu.",
    "pairs": [
     [
      "Istkaufmann",
      "Eintragung nur rechtsbezeugend (deklaratorisch)"
     ],
     [
      "Kannkaufmann",
      "Kleingewerbe, wird erst durch die Eintragung Kaufmann"
     ],
     [
      "Formkaufmann",
      "Kapitalgesellschaft, Kaufmann kraft Rechtsform"
     ]
    ],
    "e": "Nur beim Istkaufmann bezeugt die Eintragung eine bereits bestehende Eigenschaft; bei Kann- und Formkaufmann wirkt sie konstitutiv.",
    "k": "Recht",
    "d": "hard",
    "s": "LF1 1.3.1"
   },
   {
    "t": "mc",
    "q": "In welcher Abteilung des Handelsregisters steht die KommunikativAktiv KG?",
    "a": [
     "HRA",
     "HRB",
     "Beide, je nach Bundesland",
     "In keiner"
    ],
    "c": 0,
    "e": "HRA für Einzelkaufleute und Personengesellschaften, HRB für Kapitalgesellschaften.",
    "k": "Recht",
    "d": "medium",
    "s": "LF1 1.3.1"
   },
   {
    "t": "tf",
    "q": "Die Eintragung ins Handelsregister ist beim Formkaufmann konstitutiv.",
    "v": true,
    "e": "Richtig — bei Kapitalgesellschaften entsteht die Kaufmannseigenschaft erst mit der Eintragung.",
    "k": "Recht",
    "d": "medium",
    "s": "LF1 1.3.1"
   },
   {
    "t": "odd",
    "q": "Welcher Firmenname verstößt am ehesten gegen die Firmenwahrheit?",
    "a": [
     "Dialogfix GmbH",
     "Herrmann & Groß KG",
     "Deutsche Bundes-Callcenter AG (privat, regional)",
     "Nordlicht Telefonservice e. K."
    ],
    "c": 2,
    "e": "Der Name suggeriert staatliche Trägerschaft und bundesweite Tätigkeit.",
    "k": "Recht",
    "d": "hard",
    "s": "LF1 1.3.1"
   },
   {
    "t": "match",
    "q": "Ordnen Sie die Firmennamen der Firmenart zu.",
    "pairs": [
     [
      "Dialogfix GmbH",
      "Fantasiefirma"
     ],
     [
      "Herrmann & Groß KG",
      "Personenfirma"
     ],
     [
      "Straßenbau AG",
      "Sachfirma"
     ],
     [
      "Westermann Verlag GmbH & Co. KG",
      "Mischfirma"
     ]
    ],
    "e": "Fantasie erdacht, Person mit Namen, Sache nach Tätigkeit, Mischform kombiniert.",
    "k": "Recht",
    "d": "hard",
    "s": "LF1 1.3.1"
   },
   {
    "t": "type",
    "q": "Wie heißt die Abteilung des Handelsregisters für Kapitalgesellschaften?",
    "ans": [
     "HRB",
     "Abteilung B",
     "HR B"
    ],
    "e": "HRB. Personengesellschaften stehen im HRA.",
    "k": "Recht",
    "d": "easy",
    "s": "LF1 1.3.1"
   },
   {
    "t": "mc",
    "q": "Ein Kommanditist hat 20.000 € eingelegt, die KG hat 500.000 € Schulden. Wofür haftet er?",
    "a": [
     "Unbeschränkt mit Privatvermögen",
     "In Höhe von 20.000 €",
     "Für die Hälfte der Schulden",
     "Gar nicht"
    ],
    "c": 1,
    "e": "Die Kommanditistenhaftung ist auf die Kapitaleinlage beschränkt.",
    "k": "Recht",
    "d": "medium",
    "s": "LF1 1.3.2"
   },
   {
    "t": "multi",
    "q": "Welche Rechte hat ein Kommanditist?",
    "a": [
     "Widerspruchsrecht bei außergewöhnlichen Geschäften",
     "Kontrollrecht mit Bilanzeinsicht",
     "Geschäftsführung im Tagesgeschäft",
     "Vertretung der KG nach außen"
    ],
    "cs": [
     0,
     1
    ],
    "e": "Von Geschäftsführung und Vertretung ist er ausgeschlossen.",
    "k": "Recht",
    "d": "hard",
    "s": "LF1 1.3.2"
   },
   {
    "t": "cloze",
    "q": "Haftung in der KG",
    "txt": "Der {{1}} haftet unbeschränkt, persönlich, gesamtschuldnerisch und direkt. Der {{2}} haftet nur in Höhe seiner {{3}}.",
    "gaps": [
     {
      "s": "Komplementär",
      "o": [
       "Kommanditist",
       "Prokurist"
      ]
     },
     {
      "s": "Kommanditist",
      "o": [
       "Komplementär",
       "Gesellschafter"
      ]
     },
     {
      "s": "Kapitaleinlage",
      "o": [
       "Stammeinlage",
       "Gewinnbeteiligung"
      ]
     }
    ],
    "e": "Vollhafter gegen Teilhafter.",
    "k": "Recht",
    "d": "medium",
    "s": "LF1 1.3.2"
   },
   {
    "t": "calc",
    "q": "Vier Gesellschafter gründen eine GmbH und legen das gesetzliche Mindeststammkapital zu gleichen Teilen ein. Wie hoch ist die Einlage je Gesellschafter?",
    "ans": [
     "6250",
     "6.250"
    ],
    "unit": "€",
    "hint": "Mindeststammkapital durch vier.",
    "e": "25.000 € : 4 = 6.250 €.",
    "k": "Recht",
    "d": "medium",
    "s": "LF1 1.3.3"
   },
   {
    "t": "mc",
    "q": "Warum wählt ein mittelständisches Callcenter die GmbH & Co. KG?",
    "a": [
     "Weil gar keine Haftung mehr besteht",
     "Weil die unbeschränkte Komplementärhaftung auf eine GmbH verlagert wird",
     "Weil sie ins HRB eingetragen wird",
     "Weil kein Stammkapital nötig ist"
    ],
    "c": 1,
    "e": "Die GmbH übernimmt die Komplementärrolle — mittelbare beschränkte Haftung.",
    "k": "Recht",
    "d": "hard",
    "s": "LF1 1.3.3"
   },
   {
    "t": "tf",
    "q": "Bei der UG muss ein Teil des Gewinns zurückgelegt werden, bis 25.000 € erreicht sind.",
    "v": true,
    "e": "Richtig — die Thesaurierungspflicht führt zum GmbH-Stammkapital.",
    "k": "Recht",
    "d": "medium",
    "s": "LF1 1.3.3"
   },
   {
    "t": "type",
    "q": "Ab wie vielen Arbeitnehmern ist bei einer GmbH ein Aufsichtsrat vorgeschrieben?",
    "ans": [
     "500",
     "ab 500"
    ],
    "e": "Ab 500 Arbeitnehmern; darunter fakultativ.",
    "k": "Recht",
    "d": "hard",
    "s": "LF1 1.3.3"
   },
   {
    "t": "cloze",
    "q": "Kaufmannseigenschaft",
    "txt": "Beim {{1}} ist die Eintragung deklaratorisch, beim {{2}} und beim {{3}} konstitutiv.",
    "gaps": [
     {
      "s": "Istkaufmann",
      "o": [
       "Kannkaufmann",
       "Formkaufmann"
      ]
     },
     {
      "s": "Kannkaufmann",
      "o": [
       "Istkaufmann",
       "Minderkaufmann"
      ]
     },
     {
      "s": "Formkaufmann",
      "o": [
       "Istkaufmann",
       "Scheinkaufmann"
      ]
     }
    ],
    "e": "Nur beim Istkaufmann besteht die Eigenschaft schon vorher.",
    "k": "Recht",
    "d": "hard",
    "s": "LF1 1.3.1"
   },
   {
    "t": "mc",
    "q": "Streit über die Anrechnung der Berufsschulzeit eskaliert. Wer schlichtet nach BBiG?",
    "a": [
     "Das Arbeitsgericht in erster Instanz",
     "Die IHK als zuständige Stelle",
     "Die Berufsgenossenschaft",
     "Der DDV"
    ],
    "c": 1,
    "e": "Die IHK prüft, berät und schlichtet — erst danach der Gang zum Arbeitsgericht.",
    "k": "Institutionen",
    "d": "medium",
    "s": "LF1 1.4"
   },
   {
    "t": "odd",
    "q": "Welche Organisation ist kein Interessenverband der Branche?",
    "a": [
     "CCV",
     "DDV",
     "ver.di",
     "IHK"
    ],
    "c": 3,
    "e": "Die IHK ist Körperschaft öffentlichen Rechts und zuständige Stelle. ver.di ist die Gewerkschaft.",
    "k": "Institutionen",
    "d": "medium",
    "s": "LF1 1.4"
   },
   {
    "t": "mc",
    "q": "Wer ist Vertragspartner des Auszubildenden?",
    "a": [
     "Der Ausbilder persönlich",
     "Der Ausbildende, also das Unternehmen",
     "Die IHK",
     "Die Berufsschule"
    ],
    "c": 1,
    "e": "Ausbildender = Unternehmen. Ausbilder = die unterweisende Person.",
    "k": "Ausbildung",
    "d": "easy",
    "s": "LF1 2.1"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jedes Dokument seinem Urheber bzw. Geltungsbereich zu.",
    "pairs": [
     [
      "Rahmenlehrplan",
      "KMK, Berufsschule"
     ],
     [
      "Ausbildungsordnung",
      "Bund, Betrieb"
     ],
     [
      "Ausbildungsplan",
      "einzelner Betrieb"
     ]
    ],
    "e": "KMK für die Schule, Ausbildungsordnung bundesweit, Ausbildungsplan individuell.",
    "k": "Ausbildung",
    "d": "hard",
    "s": "LF1 2.1.1"
   },
   {
    "t": "cloze",
    "q": "Duale Ausbildung",
    "txt": "Das duale System verbindet die Lernorte {{1}} und {{2}}. Den Rahmenlehrplan erlässt die {{3}}, zuständige Stelle nach BBiG ist die {{4}}.",
    "gaps": [
     {
      "s": "Berufsschule",
      "o": [
       "Hochschule",
       "Akademie"
      ]
     },
     {
      "s": "Ausbildungsbetrieb",
      "o": [
       "Prüfungsausschuss",
       "Berufsgenossenschaft"
      ]
     },
     {
      "s": "KMK",
      "o": [
       "IHK",
       "DIHK"
      ]
     },
     {
      "s": "IHK",
      "o": [
       "KMK",
       "BIBB"
      ]
     }
    ],
    "e": "KMK für die Schule, IHK für den Betrieb.",
    "k": "Ausbildung",
    "d": "medium",
    "s": "LF1 2.1"
   },
   {
    "t": "mc",
    "q": "Ein Ausbildungsvertrag enthält keine Angabe zur Urlaubsdauer. Was folgt daraus?",
    "a": [
     "Der Vertrag ist nichtig",
     "Ein Pflichtinhalt nach § 11 BBiG fehlt",
     "Der Urlaub entfällt",
     "Die IHK setzt den Urlaub fest"
    ],
    "c": 1,
    "e": "§ 11 BBiG zählt neun Pflichtinhalte auf, darunter die Urlaubsdauer.",
    "k": "BBiG",
    "d": "medium",
    "s": "LF1 2.1.2"
   },
   {
    "t": "multi",
    "q": "Welche Angaben sind Pflichtinhalte nach § 11 BBiG?",
    "a": [
     "Dauer der Probezeit",
     "Höhe der Vergütung",
     "Name des Berufsschullehrers",
     "Hinweis auf anwendbare Tarifverträge",
     "Note der letzten Klassenarbeit"
    ],
    "cs": [
     0,
     1,
     3
    ],
    "e": "Schulische Details gehören nicht in den Vertrag.",
    "k": "BBiG",
    "d": "medium",
    "s": "LF1 2.1.2"
   },
   {
    "t": "odd",
    "q": "Welcher Punkt gehört nicht zu den Pflichtinhalten nach § 11 BBiG?",
    "a": [
     "Dauer der Probezeit",
     "Dauer des Urlaubs",
     "Kündigungsbedingungen",
     "Name der zuständigen Berufsschule"
    ],
    "c": 3,
    "e": "Neun Pflichtinhalte von Art und Gliederung bis Tarifhinweis — die Berufsschule ist nicht dabei.",
    "k": "BBiG",
    "d": "hard",
    "s": "LF1 2.1.2"
   },
   {
    "t": "cloze",
    "q": "Probezeit",
    "txt": "Die Probezeit dauert mindestens {{1}} Monat und höchstens {{2}} Monate. In dieser Zeit kann {{3}} gekündigt werden, allerdings zwingend {{4}}.",
    "gaps": [
     {
      "s": "einen",
      "o": [
       "zwei",
       "drei"
      ]
     },
     {
      "s": "vier",
      "o": [
       "drei",
       "sechs"
      ]
     },
     {
      "s": "ohne Angabe von Gründen",
      "o": [
       "nur mit wichtigem Grund",
       "nur mit Zustimmung der IHK"
      ]
     },
     {
      "s": "schriftlich",
      "o": [
       "mündlich",
       "per E-Mail"
      ]
     }
    ],
    "e": "1 bis 4 Monate, grundlos kündbar — aber nie formlos.",
    "k": "BBiG",
    "d": "medium",
    "s": "LF1 2.1.2"
   },
   {
    "t": "odd",
    "q": "Vier Aussagen zur Probezeit. Welche ist falsch?",
    "a": [
     "Sie dauert mindestens einen Monat",
     "Sie dauert höchstens vier Monate",
     "Die Kündigung braucht keinen Grund",
     "Die Kündigung kann mündlich erfolgen"
    ],
    "c": 3,
    "e": "Die Schriftform ist auch in der Probezeit zwingend.",
    "k": "BBiG",
    "d": "medium",
    "s": "LF1 2.1.2"
   },
   {
    "t": "mc",
    "q": "Ein Azubi im zweiten Jahr will den Beruf wechseln. Wie kann er kündigen?",
    "a": [
     "Fristlos ohne Begründung",
     "Mit vier Wochen Frist und schriftlich",
     "Nur mit Zustimmung der IHK",
     "Gar nicht bis zum Ende der Ausbildungszeit"
    ],
    "c": 1,
    "e": "Nach der Probezeit kann nur der Auszubildende mit vierwöchiger Frist kündigen.",
    "k": "BBiG",
    "d": "hard",
    "s": "LF1 2.1.4"
   },
   {
    "t": "mc",
    "q": "Die Abschlussprüfung wird am 12. Juni bestanden, der Vertrag läuft bis 31. August. Wann endet die Ausbildung?",
    "a": [
     "Am 31. August",
     "Am 12. Juni mit Bekanntgabe des Ergebnisses",
     "Am 30. Juni",
     "Erst mit Aushändigung des Zeugnisses"
    ],
    "c": 1,
    "e": "Das Bestehen beendet das Ausbildungsverhältnis vorzeitig — am Tag der Bekanntgabe.",
    "k": "BBiG",
    "d": "hard",
    "s": "LF1 2.1.4"
   },
   {
    "t": "mc",
    "q": "Ein Azubi arbeitet nach Ende der Ausbildungszeit einfach weiter, ohne Vereinbarung. Was entsteht?",
    "a": [
     "Befristetes Arbeitsverhältnis über sechs Monate",
     "Unbefristetes Arbeitsverhältnis",
     "Praktikumsverhältnis",
     "Gar nichts"
    ],
    "c": 1,
    "e": "§ 24 BBiG: Weiterbeschäftigung ohne ausdrückliche Vereinbarung begründet ein unbefristetes Arbeitsverhältnis.",
    "k": "BBiG",
    "d": "medium",
    "s": "LF1 2.1.4"
   },
   {
    "t": "tf",
    "q": "Ein qualifiziertes Zeugnis enthält zusätzlich Angaben zu Leistung und Verhalten.",
    "v": true,
    "e": "Richtig — das einfache Zeugnis nennt nur Tätigkeit und Dauer.",
    "k": "BBiG",
    "d": "easy",
    "s": "LF1 2.1.3"
   },
   {
    "t": "tf",
    "q": "Der Auszubildende beschafft die Ausbildungsmittel selbst.",
    "v": false,
    "e": "Falsch. Der Ausbildende stellt sie kostenlos; der Azubi behandelt sie pfleglich.",
    "k": "BBiG",
    "d": "easy",
    "s": "LF1 2.1.3"
   },
   {
    "t": "calc",
    "q": "Ein 17-jähriger Azubi hat Mo–Do je 8 Stunden gearbeitet. Wie viele Stunden darf er freitags höchstens noch arbeiten?",
    "ans": [
     "8"
    ],
    "unit": "Stunden",
    "hint": "Wochengrenze und Tagesgrenze zugleich prüfen.",
    "e": "40 − 32 = 8 Stunden Rest, und die Tagesgrenze von 8 Stunden ist eingehalten.",
    "k": "Schutzgesetze",
    "d": "medium",
    "s": "LF1 2.2.1"
   },
   {
    "t": "mc",
    "q": "Ein 17-Jähriger soll samstags im Callcenter eingesetzt werden. Zulässig?",
    "a": [
     "Ja, mit Ausgleichstag am Montag",
     "Ja, Callcenter sind ausgenommen",
     "Nein, Jugendliche arbeiten an fünf Tagen Mo–Fr",
     "Nur mit Zustimmung der IHK"
    ],
    "c": 2,
    "e": "Samstag, Sonntag und Feiertage sind grundsätzlich tabu.",
    "k": "Schutzgesetze",
    "d": "medium",
    "s": "LF1 2.2.1"
   },
   {
    "t": "mc",
    "q": "Ein Jugendlicher arbeitet 6,5 Stunden. Wie lang muss die Pause insgesamt sein?",
    "a": [
     "Keine Pause nötig",
     "30 Minuten",
     "45 Minuten",
     "60 Minuten"
    ],
    "c": 3,
    "e": "Über 6 Stunden verlangt das JArbSchG 60 Minuten.",
    "k": "Schutzgesetze",
    "d": "hard",
    "s": "LF1 2.2.1"
   },
   {
    "t": "mc",
    "q": "Der Berufsschulunterricht beginnt um 8:00 Uhr. Was gilt für den Betrieb?",
    "a": [
     "Eine Stunde Arbeit vorher ist möglich",
     "Vor dem Unterricht darf keine Beschäftigung stattfinden",
     "Der Tag zählt nicht als Arbeitszeit",
     "Nur Jugendliche sind geschützt"
    ],
    "c": 1,
    "e": "Bei Unterrichtsbeginn vor 9 Uhr ist eine vorherige Beschäftigung ausgeschlossen — seit 2020 auch für volljährige Azubis.",
    "k": "Schutzgesetze",
    "d": "hard",
    "s": "LF1 2.2.1"
   },
   {
    "t": "calc",
    "q": "Ein Auszubildender ist zu Jahresbeginn 16. Wie viele Werktage Urlaub stehen ihm nach JArbSchG zu?",
    "ans": [
     "27"
    ],
    "unit": "Werktage",
    "e": "Staffel: unter 16 → 30, unter 17 → 27, unter 18 → 25. Mit 16 gilt „noch nicht 17“.",
    "k": "Schutzgesetze",
    "d": "hard",
    "s": "LF1 2.2.1"
   },
   {
    "t": "cloze",
    "q": "Jugendarbeitsschutz",
    "txt": "Jugendliche dürfen höchstens {{1}} Stunden täglich und {{2}} Stunden wöchentlich arbeiten, an {{3}} Tagen, zwischen {{4}} und {{5}} Uhr.",
    "gaps": [
     {
      "s": "8",
      "o": [
       "9",
       "10"
      ]
     },
     {
      "s": "40",
      "o": [
       "38",
       "45"
      ]
     },
     {
      "s": "fünf",
      "o": [
       "sechs",
       "vier"
      ]
     },
     {
      "s": "6",
      "o": [
       "5",
       "7"
      ]
     },
     {
      "s": "20",
      "o": [
       "22",
       "18"
      ]
     }
    ],
    "e": "8/40/5 Tage, 6 bis 20 Uhr.",
    "k": "Schutzgesetze",
    "d": "medium",
    "s": "LF1 2.2.1"
   },
   {
    "t": "mc",
    "q": "Ein 17-Jähriger soll ab 20:30 Uhr Spätschicht machen und samstags einspringen. Wie viele JArbSchG-Verstöße liegen vor?",
    "a": [
     "Keiner",
     "Einer",
     "Zwei",
     "Drei"
    ],
    "c": 2,
    "e": "Arbeit nach 20 Uhr und Einsatz am Samstag.",
    "k": "Schutzgesetze",
    "d": "hard",
    "s": "LF1 2.2.1"
   },
   {
    "t": "mc",
    "q": "Ein Agent arbeitet von 21:00 bis 1:30 Uhr. Liegt Nachtarbeit nach ArbZG vor?",
    "a": [
     "Nein, weniger als drei Stunden nach 23 Uhr",
     "Ja, mehr als zwei Stunden in der Nachtzeit",
     "Nein, Nachtzeit beginnt um 0 Uhr",
     "Nur bei Regelmäßigkeit"
    ],
    "c": 1,
    "e": "Nachtzeit ist 23 bis 6 Uhr; hier fallen 2,5 Stunden hinein.",
    "k": "Schutzgesetze",
    "d": "hard",
    "s": "LF1 2.2.2"
   },
   {
    "t": "cloze",
    "q": "Mutterschutz und Entgeltfortzahlung",
    "txt": "Der Mutterschutz umfasst {{1}} Wochen vor und {{2}} Wochen nach der Geburt, bei Mehrlings- oder Frühgeburt {{3}} Wochen danach. Bei Krankheit wird das Entgelt {{4}} Wochen fortgezahlt.",
    "gaps": [
     {
      "s": "sechs",
      "o": [
       "acht",
       "zwölf"
      ]
     },
     {
      "s": "acht",
      "o": [
       "sechs",
       "zwölf"
      ]
     },
     {
      "s": "zwölf",
      "o": [
       "zehn",
       "vierzehn"
      ]
     },
     {
      "s": "sechs",
      "o": [
       "vier",
       "acht"
      ]
     }
    ],
    "e": "6 vor, 8 nach, 12 bei Mehrlings-/Frühgeburt; Entgeltfortzahlung 6 Wochen.",
    "k": "Schutzgesetze",
    "d": "medium",
    "s": "LF1 2.2"
   },
   {
    "t": "mc",
    "q": "Ein Betrieb mit 22 Beschäftigten hat keinen schwerbehinderten Mitarbeiter. Folge?",
    "a": [
     "Keine, die Quote gilt ab 50",
     "Ausgleichsabgabe",
     "Bußgeld durch die IHK",
     "Der Betriebsrat erzwingt eine Einstellung"
    ],
    "c": 1,
    "e": "Ab 20 Beschäftigten gilt die 5 %-Quote; sonst Ausgleichsabgabe.",
    "k": "Schutzgesetze",
    "d": "medium",
    "s": "LF1 2.2.6"
   },
   {
    "t": "mc",
    "q": "Kündigung eines schwerbehinderten Mitarbeiters ohne Einschaltung des Integrationsamts. Rechtsfolge?",
    "a": [
     "Wirksam, das Amt wird informiert",
     "Wirksam bei Zustimmung des Betriebsrats",
     "Unwirksam",
     "Schwebend unwirksam"
    ],
    "c": 2,
    "e": "Ohne Zustimmung des Integrationsamts ist die Kündigung unwirksam.",
    "k": "Schutzgesetze",
    "d": "medium",
    "s": "LF1 2.2.6"
   },
   {
    "t": "mc",
    "q": "Welche Aussage zur Ausgleichsabgabe ist korrekt?",
    "a": [
     "Sie ersetzt die Beschäftigungspflicht dauerhaft",
     "Sie wird fällig, wenn die 5 %-Quote verfehlt wird",
     "Sie wird an den Betriebsrat gezahlt",
     "Sie fällt erst ab 50 Beschäftigten an"
    ],
    "c": 1,
    "e": "Sie finanziert anderweitige Arbeitsplätze und ersetzt die Pflicht nicht.",
    "k": "Schutzgesetze",
    "d": "medium",
    "s": "LF1 2.2.6"
   },
   {
    "t": "multi",
    "q": "Welche Pflichten treffen den Arbeitgeber nach dem ArbSchG?",
    "a": [
     "Gefährdungen beurteilen und dokumentieren",
     "Bei der Einstellung unterweisen",
     "Vor Einführung neuer Arbeitsmittel unterweisen",
     "Eine private Unfallversicherung stellen"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Gefährdungsbeurteilung und Unterweisung — eine private Versicherung schuldet er nicht.",
    "k": "Schutzgesetze",
    "d": "medium",
    "s": "LF1 2.2.7"
   },
   {
    "t": "type",
    "q": "Wie heißt der Grundgedanke des Arbeitsschutzgesetzes in einem Wort?",
    "ans": [
     "Prävention",
     "Praevention",
     "Vorbeugung"
    ],
    "e": "Prävention — Gefährdungen wird vorausschauend vorgebeugt.",
    "k": "Schutzgesetze",
    "d": "medium",
    "s": "LF1 2.2.7"
   },
   {
    "t": "calc",
    "q": "Ein Callcenter hat 80 Arbeitnehmer. Aus wie vielen Mitgliedern besteht der Betriebsrat?",
    "ans": [
     "5",
     "fünf"
    ],
    "unit": "Mitglieder",
    "hint": "§ 9 BetrVG, Staffel 51–100.",
    "e": "51 bis 100 Arbeitnehmer ergeben fünf Mitglieder.",
    "k": "Mitbestimmung",
    "d": "medium",
    "s": "LF1 2.3.1"
   },
   {
    "t": "mc",
    "q": "In einem Betrieb arbeiten vier ständige Arbeitnehmer. Betriebsrat möglich?",
    "a": [
     "Ja, ab drei",
     "Nein, es braucht fünf wahlberechtigte, davon drei wählbare",
     "Ja, mit Zustimmung des Arbeitgebers",
     "Nur auf Antrag einer Gewerkschaft"
    ],
    "c": 1,
    "e": "Die Schwelle liegt bei fünf ständigen wahlberechtigten Arbeitnehmern.",
    "k": "Mitbestimmung",
    "d": "medium",
    "s": "LF1 2.3.1"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jedem Thema die Stärke des Beteiligungsrechts zu.",
    "pairs": [
     [
      "Lage der Arbeitszeit und Pausen",
      "Mitbestimmungsrecht"
     ],
     [
      "Einstellungen und Versetzungen",
      "Mitwirkungsrecht"
     ],
     [
      "Investitionsplanung",
      "Informations- und Beratungsrecht"
     ]
    ],
    "e": "Sozial = stärkstes, personell = mittleres, wirtschaftlich = schwächstes Recht.",
    "k": "Mitbestimmung",
    "d": "hard",
    "s": "LF1 2.3.1"
   },
   {
    "t": "order",
    "q": "Ordnen Sie die Beteiligungsrechte des Betriebsrats von stark nach schwach.",
    "items": [
     "Mitbestimmungsrechte",
     "Mitwirkungsrechte",
     "Informations- und Beratungsrechte"
    ],
    "e": "Sozial vor personell vor wirtschaftlich.",
    "k": "Mitbestimmung",
    "d": "medium",
    "s": "LF1 2.3.1"
   },
   {
    "t": "mc",
    "q": "Der Arbeitgeber kündigt, ohne den Betriebsrat anzuhören. Was gilt?",
    "a": [
     "Wirksam, der BR kann widersprechen",
     "Unwirksam",
     "Wirksam nach zwei Wochen",
     "Der BR muss klagen"
    ],
    "c": 1,
    "e": "§ 102 BetrVG: ohne Anhörung unwirksam.",
    "k": "Mitbestimmung",
    "d": "medium",
    "s": "LF1 2.3.1"
   },
   {
    "t": "tf",
    "q": "Die Betriebsversammlung tagt mindestens einmal jährlich.",
    "v": false,
    "e": "Falsch — mindestens vierteljährlich. Einmal jährlich berichtet dort der Arbeitgeber.",
    "k": "Mitbestimmung",
    "d": "hard",
    "s": "LF1 2.3.1"
   },
   {
    "t": "type",
    "q": "Wie heißt das Schlichtungsorgan bei Konflikten zwischen Arbeitgeber und Betriebsrat?",
    "ans": [
     "Einigungsstelle"
    ],
    "e": "Die Einigungsstelle nach § 76 BetrVG.",
    "k": "Mitbestimmung",
    "d": "medium",
    "s": "LF1 2.3.1"
   },
   {
    "t": "cloze",
    "q": "Betriebsrat",
    "txt": "Ein Betriebsrat kann ab {{1}} ständigen wahlberechtigten Arbeitnehmern gewählt werden, von denen {{2}} wählbar sein müssen. Die Wahl findet alle {{3}} Jahre zwischen dem 1. {{4}} und dem 31. Mai statt.",
    "gaps": [
     {
      "s": "fünf",
      "o": [
       "drei",
       "zehn"
      ]
     },
     {
      "s": "drei",
      "o": [
       "fünf",
       "zwei"
      ]
     },
     {
      "s": "vier",
      "o": [
       "zwei",
       "drei"
      ]
     },
     {
      "s": "März",
      "o": [
       "Januar",
       "April"
      ]
     }
    ],
    "e": "5 wahlberechtigte, 3 wählbare, alle 4 Jahre, 1. März bis 31. Mai.",
    "k": "Mitbestimmung",
    "d": "hard",
    "s": "LF1 2.3.1"
   },
   {
    "t": "mc",
    "q": "Tim ist 24 und seit drei Jahren ausgelernter Agent. Was gilt für die JAV-Wahl?",
    "a": [
     "Weder wahlberechtigt noch wählbar",
     "Wahlberechtigt, aber nicht wählbar",
     "Wählbar, aber nicht wahlberechtigt",
     "Beides"
    ],
    "c": 2,
    "e": "Wählbar sind alle Arbeitnehmer unter 25. Wahlberechtigt nur unter 18 oder als Azubi unter 25.",
    "k": "Mitbestimmung",
    "d": "hard",
    "s": "LF1 2.3.2"
   },
   {
    "t": "cloze",
    "q": "Jugend- und Auszubildendenvertretung",
    "txt": "Eine JAV wird ab {{1}} Arbeitnehmern gewählt, die unter 18 sind oder als Auszubildende unter {{2}}. Ihre Amtszeit beträgt {{3}} Jahre, die des Betriebsrats {{4}} Jahre. Eine JAV kann nur bestehen, wenn es einen {{5}} gibt.",
    "gaps": [
     {
      "s": "fünf",
      "o": [
       "drei",
       "zehn"
      ]
     },
     {
      "s": "25",
      "o": [
       "21",
       "27"
      ]
     },
     {
      "s": "zwei",
      "o": [
       "vier",
       "drei"
      ]
     },
     {
      "s": "vier",
      "o": [
       "zwei",
       "fünf"
      ]
     },
     {
      "s": "Betriebsrat",
      "o": [
       "Wirtschaftsausschuss",
       "Aufsichtsrat"
      ]
     }
    ],
    "e": "Fünf als Schwelle, 25 als Altersgrenze, 2 Jahre Amtszeit, gekoppelt an den Betriebsrat.",
    "k": "Mitbestimmung",
    "d": "medium",
    "s": "LF1 2.3.2"
   },
   {
    "t": "mc",
    "q": "Wann hat der entsandte JAV-Vertreter in einer BR-Sitzung Stimmrecht?",
    "a": [
     "Immer",
     "Nie",
     "Wenn die Beschlüsse überwiegend Jugendliche und Azubis betreffen",
     "Wenn der BR-Vorsitzende es gestattet"
    ],
    "c": 2,
    "e": "Das Stimmrecht ist inhaltlich gekoppelt.",
    "k": "Mitbestimmung",
    "d": "hard",
    "s": "LF1 2.3.2"
   },
   {
    "t": "multi",
    "q": "Welche Aussagen zur JAV treffen zu?",
    "a": [
     "Sie setzt einen bestehenden Betriebsrat voraus",
     "Ihre Mitglieder dürfen nicht zugleich im Betriebsrat sein",
     "Ihre Amtszeit beträgt zwei Jahre",
     "Ihre Wahl findet zwischen März und Mai statt"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Die JAV-Wahl findet im Oktober oder November statt.",
    "k": "Mitbestimmung",
    "d": "hard",
    "s": "LF1 2.3.2"
   },
   {
    "t": "mc",
    "q": "Ein Betrieb hat 24 Beschäftigte, davon 6 Azubis unter 25, und einen Betriebsrat. Was ist möglich?",
    "a": [
     "Weder Betriebsrat noch JAV",
     "Betriebsrat ja, JAV nein",
     "Betriebsrat und JAV mit einem Mitglied",
     "Betriebsrat und JAV mit drei Mitgliedern"
    ],
    "c": 2,
    "e": "Ab 5 Wahlberechtigten entsteht eine JAV; bei 6 (Staffel 5–20) besteht sie aus einer Person.",
    "k": "Mitbestimmung",
    "d": "hard",
    "s": "LF1 2.3.2"
   },
   {
    "t": "mc",
    "q": "Der Tarifvertrag regelt bereits die wöchentliche Arbeitszeit. Kann eine Betriebsvereinbarung abweichen?",
    "a": [
     "Ja, die speziellere Regelung geht vor",
     "Ja, bei Zustimmung des Betriebsrats",
     "Nein, es gilt der Tarifvorrang",
     "Nur in tariffreien Betrieben"
    ],
    "c": 2,
    "e": "Tariflich Geregeltes darf nicht Gegenstand einer Betriebsvereinbarung sein.",
    "k": "Mitbestimmung",
    "d": "hard",
    "s": "LF1 2.3.3"
   },
   {
    "t": "mc",
    "q": "Die Geschäftsführung will die Arbeitszeitregelung ändern. Wen beteiligen, womit fixieren?",
    "a": [
     "Die IHK, per Ausbildungsordnung",
     "Den Betriebsrat, per Betriebsvereinbarung",
     "Die Gewerkschaft, per Tarifvertrag",
     "Niemanden, Direktionsrecht"
    ],
    "c": 1,
    "e": "Arbeitszeit ist soziale Angelegenheit mit echtem Mitbestimmungsrecht — Ergebnis: Betriebsvereinbarung.",
    "k": "Mitbestimmung",
    "d": "hard",
    "s": "LF1 2.3.3"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jedem Tarifvertrag seinen typischen Inhalt zu.",
    "pairs": [
     [
      "Urlaub, Arbeitszeit, Weiterbildung",
      "Manteltarifvertrag"
     ],
     [
      "Zuordnung von Tätigkeiten zu Tarifgruppen",
      "Entgeltrahmentarifvertrag"
     ],
     [
      "Konkrete Höhe der Ausbildungsvergütung",
      "Entgelttarifvertrag"
     ]
    ],
    "e": "Mantel = Rahmen, Entgeltrahmen = Gruppenlogik, Entgelt = Beträge.",
    "k": "Mitbestimmung",
    "d": "hard",
    "s": "LF1 2.3.4"
   },
   {
    "t": "mc",
    "q": "Warum gibt es in der Dialogmarketingbranche praktisch nur Haustarifverträge?",
    "a": [
     "Weil Gewerkschaften die Branche meiden",
     "Weil es keinen Arbeitgeberverband gibt",
     "Weil Flächentarifverträge verboten sind",
     "Weil die IHK es so vorgibt"
    ],
    "c": 1,
    "e": "Ohne Arbeitgeberverband fehlt der Vertragspartner für einen Flächentarif.",
    "k": "Mitbestimmung",
    "d": "hard",
    "s": "LF1 2.3.4"
   },
   {
    "t": "odd",
    "q": "Welcher Begriff gehört nicht zu den Geltungsbereichen eines Tarifvertrags?",
    "a": [
     "räumlich",
     "zeitlich",
     "fachlich",
     "wirtschaftlich"
    ],
    "c": 3,
    "e": "Die vier sind räumlich, zeitlich, fachlich und persönlich.",
    "k": "Mitbestimmung",
    "d": "medium",
    "s": "LF1 2.3.4"
   },
   {
    "t": "odd",
    "q": "Welcher Zweig fällt aus der Reihe, wenn man nach der Finanzierung fragt?",
    "a": [
     "Krankenversicherung",
     "Rentenversicherung",
     "Unfallversicherung",
     "Arbeitslosenversicherung"
    ],
    "c": 2,
    "e": "Die Unfallversicherung zahlt allein der Arbeitgeber.",
    "k": "Sozialversicherung",
    "d": "medium",
    "s": "LF1 2.4.1"
   },
   {
    "t": "order",
    "q": "Bringen Sie die Zweige der Sozialversicherung in die Reihenfolge ihrer Einführung.",
    "items": [
     "Krankenversicherung",
     "Unfallversicherung",
     "Rentenversicherung",
     "Arbeitslosenversicherung",
     "Pflegeversicherung"
    ],
    "e": "1883 KV, 1884 UV, 1889 RV, 1927 AV, 1995 PV.",
    "k": "Sozialversicherung",
    "d": "hard",
    "s": "LF1 2.4.1"
   },
   {
    "t": "mc",
    "q": "Ein Versicherter mit niedrigem Beitrag erhält dieselbe Behandlung wie ein Gutverdiener. Welches Prinzip?",
    "a": [
     "Äquivalenzprinzip",
     "Solidaritätsprinzip",
     "Umlageverfahren",
     "Versicherungspflicht"
    ],
    "c": 1,
    "e": "Leistung nach Bedürftigkeit, nicht nach Beitragshöhe.",
    "k": "Sozialversicherung",
    "d": "medium",
    "s": "LF1 2.4.1"
   },
   {
    "t": "tf",
    "q": "Beim Umlageverfahren wird das eingezahlte Geld für den Beitragszahler angespart.",
    "v": false,
    "e": "Falsch. Die heutigen Beiträge finanzieren die heutigen Renten — Generationenvertrag.",
    "k": "Sozialversicherung",
    "d": "medium",
    "s": "LF1 2.4.2"
   },
   {
    "t": "multi",
    "q": "Welche Probleme der gesetzlichen Sozialversicherung nennt das Buch?",
    "a": [
     "Missverhältnis Beitragszahler zu Leistungsempfängern",
     "Steigende Kosten durch medizinischen Fortschritt",
     "Versicherungsfremde Leistungen",
     "Zu hohe Kapitalerträge der Sozialkassen"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Demografie, Gesundheitskosten, Einkommenskopplung, versicherungsfremde Leistungen.",
    "k": "Sozialversicherung",
    "d": "medium",
    "s": "LF1 2.4.2"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jedes Vorsorgeprodukt der richtigen Schicht zu.",
    "pairs": [
     [
      "Gesetzliche Rentenversicherung",
      "1. Schicht — Basisversorgung"
     ],
     [
      "Riester-Rente",
      "2. Schicht — Zusatzversorgung"
     ],
     [
      "Eigene Immobilie",
      "3. Schicht — Private Versorgung"
     ]
    ],
    "e": "Riester sitzt in der Zusatzversorgung, nicht in der privaten Schicht.",
    "k": "Sozialversicherung",
    "d": "hard",
    "s": "LF1 2.4.3"
   },
   {
    "t": "type",
    "q": "Wie heißt der Grenzbetrag, bis zu dem Sozialbeiträge erhoben werden?",
    "ans": [
     "Beitragsbemessungsgrenze",
     "BBG"
    ],
    "e": "Beitragsbemessungsgrenze — nicht zu verwechseln mit der Versicherungspflichtgrenze.",
    "k": "Sozialversicherung",
    "d": "hard",
    "s": "LF1 2.4.1"
   },
   {
    "t": "mc",
    "q": "Ein Mitarbeiter wundert sich, dass trotz Gehaltserhöhung kaum mehr Sozialbeiträge anfallen. Welcher Begriff erklärt das?",
    "a": [
     "Versicherungspflichtgrenze",
     "Beitragsbemessungsgrenze",
     "Äquivalenzprinzip",
     "Umlageverfahren"
    ],
    "c": 1,
    "e": "Oberhalb der Beitragsbemessungsgrenze werden keine weiteren Beiträge erhoben.",
    "k": "Sozialversicherung",
    "d": "hard",
    "s": "LF1 2.4.1"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jede Vorschrift ihrem Schutzbereich bzw. ihrer Aufsicht zu.",
    "pairs": [
     [
      "Arbeitsstättenverordnung",
      "technischer Arbeitsschutz — sicherer Arbeitsplatz"
     ],
     [
      "Jugendarbeitsschutzgesetz",
      "sozialer Arbeitsschutz — Schutz der Person"
     ],
     [
      "Unfallverhütungsvorschrift",
      "erlassen von der Berufsgenossenschaft"
     ]
    ],
    "e": "Technisch zielt auf den Arbeitsplatz, sozial auf die Person. Unfallverhütungsvorschriften kommen von den Berufsgenossenschaften (§ 14 SGB VII).",
    "k": "Arbeitsschutz",
    "d": "medium",
    "s": "LF1 3.1"
   },
   {
    "t": "mc",
    "q": "Wer überwacht neben dem Staat die Arbeitsschutzbestimmungen?",
    "a": [
     "Die IHK",
     "Die Berufsgenossenschaften",
     "Der Betriebsrat allein",
     "Die Bundesnetzagentur"
    ],
    "c": 1,
    "e": "Zweigleisig: staatliche Gewerbeaufsicht und Berufsgenossenschaften nach § 14 SGB VII.",
    "k": "Arbeitsschutz",
    "d": "medium",
    "s": "LF1 3.1"
   },
   {
    "t": "mc",
    "q": "Hoher Krankenstand durch Lärm und Hitze. Welche Maßnahme adressiert den technischen Arbeitsschutz?",
    "a": [
     "Kürzere Arbeitszeit für Jugendliche",
     "Schallabsorbierende Decken und Klimaanlage",
     "Zusätzliche Urlaubstage",
     "Bestellung eines JAV-Mitglieds"
    ],
    "c": 1,
    "e": "Technischer Arbeitsschutz setzt an der Gestaltung des Arbeitsplatzes an.",
    "k": "Arbeitsschutz",
    "d": "medium",
    "s": "LF1 3.1"
   },
   {
    "t": "mc",
    "q": "Ein Betrieb mit 18 Beschäftigten — welche Arbeitsschutzrolle muss er NICHT bestellen?",
    "a": [
     "Fachkraft für Arbeitssicherheit",
     "Betriebsarzt",
     "Sicherheitsbeauftragter",
     "Alle drei sind Pflicht"
    ],
    "c": 2,
    "e": "Der Sicherheitsbeauftragte ist erst ab mehr als 20 Beschäftigten Pflicht.",
    "k": "Arbeitsschutz",
    "d": "hard",
    "s": "LF1 3.2"
   },
   {
    "t": "mc",
    "q": "Welche Rolle berät den Arbeitgeber fachlich zu Arbeitsschutz und Unfallverhütung?",
    "a": [
     "Sicherheitsbeauftragter",
     "Fachkraft für Arbeitssicherheit",
     "Brandschutzbeauftragter",
     "Betriebsratsvorsitzender"
    ],
    "c": 1,
    "e": "Die Fachkraft berät, überwacht und überprüft; der Sicherheitsbeauftragte erkennt und meldet.",
    "k": "Arbeitsschutz",
    "d": "medium",
    "s": "LF1 3.2"
   },
   {
    "t": "cloze",
    "q": "Arbeitsschutzrollen",
    "txt": "Ein {{1}} muss erst ab mehr als 20 Beschäftigten bestellt werden. Eine {{2}} und einen {{3}} muss dagegen jedes Unternehmen mit Beschäftigten bestellen.",
    "gaps": [
     {
      "s": "Sicherheitsbeauftragter",
      "o": [
       "Betriebsarzt",
       "Brandschutzbeauftragter"
      ]
     },
     {
      "s": "Fachkraft für Arbeitssicherheit",
      "o": [
       "Ersthelfergruppe",
       "Sicherheitsfachkraft für Brandschutz"
      ]
     },
     {
      "s": "Betriebsarzt",
      "o": [
       "Sicherheitsbeauftragten",
       "Brandschutzbeauftragten"
      ]
     }
    ],
    "e": "Nur der Sicherheitsbeauftragte hat eine Schwelle.",
    "k": "Arbeitsschutz",
    "d": "hard",
    "s": "LF1 3.2"
   },
   {
    "t": "order",
    "q": "Bringen Sie die fünf W der Notfallmeldung in die richtige Reihenfolge.",
    "items": [
     "WO ist etwas passiert",
     "WAS ist passiert",
     "WIE VIELE Betroffene",
     "WELCHE Art von Verletzungen",
     "WARTEN auf Rückfragen"
    ],
    "e": "Wo – Was – Wie viele – Welche – Warten. Das letzte W wird am häufigsten vergessen.",
    "k": "Arbeitsschutz",
    "d": "medium",
    "s": "LF1 3.2"
   },
   {
    "t": "calc",
    "q": "Ein kaufmännischer Betrieb beschäftigt 80 Mitarbeiter. Wie viele Ersthelfer sind mindestens auszubilden?",
    "ans": [
     "4",
     "vier"
    ],
    "unit": "Personen",
    "hint": "Kaufmännisch: 5 %.",
    "e": "5 % von 80 = 4.",
    "k": "Arbeitsschutz",
    "d": "medium",
    "s": "LF1 3.2"
   },
   {
    "t": "calc",
    "q": "Ein Betrieb mit erhöhter Verletzungsgefahr hat 40 Beschäftigte. Wie viele Ersthelfer mindestens?",
    "ans": [
     "4",
     "vier"
    ],
    "unit": "Personen",
    "hint": "Nicht kaufmännisch — höhere Quote.",
    "e": "10 % von 40 = 4. Im kaufmännischen Betrieb wären es 2.",
    "k": "Arbeitsschutz",
    "d": "hard",
    "s": "LF1 3.2"
   },
   {
    "t": "tf",
    "q": "Die Unterweisung der Ersthelfer muss jährlich aufgefrischt werden.",
    "v": false,
    "e": "Falsch — alle zwei Jahre.",
    "k": "Arbeitsschutz",
    "d": "medium",
    "s": "LF1 3.2"
   },
   {
    "t": "tf",
    "q": "Nach § 323c StGB besteht Hilfeleistungspflicht auch bei Selbstgefährdung.",
    "v": false,
    "e": "Falsch. Die Pflicht endet bei Selbstgefährdung oder Verletzung anderer wichtiger Pflichten.",
    "k": "Arbeitsschutz",
    "d": "hard",
    "s": "LF1 3.2"
   },
   {
    "t": "multi",
    "q": "Welche Maßnahmen zählen zur organisatorischen Unfallverhütung?",
    "a": [
     "Gefährdungsbeurteilung",
     "Regelmäßige Kontrolle der Schutzmaßnahmen",
     "Regelung der Verantwortlichkeiten",
     "Bereitstellung persönlicher Schutzausrüstung"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Schutzausrüstung zählt zu den personenbezogenen Maßnahmen.",
    "k": "Arbeitsschutz",
    "d": "hard",
    "s": "LF1 3.2"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jedem Teil der Brandschutzordnung nach DIN 14096 den Adressatenkreis zu.",
    "pairs": [
     [
      "Teil A",
      "alle Personen im Gebäude, auch kurzfristig anwesende"
     ],
     [
      "Teil B",
      "Personen, die sich regelmäßig im Gebäude aufhalten"
     ],
     [
      "Teil C",
      "Personen mit besonderen Brandschutzaufgaben"
     ]
    ],
    "e": "A als Aushang für alle, B mit Brandverhütung, C für Sonderaufgaben.",
    "k": "Arbeitsschutz",
    "d": "medium",
    "s": "LF1 3.3"
   },
   {
    "t": "mc",
    "q": "Welche Aussage zum Brandschutzbeauftragten ist korrekt?",
    "a": [
     "Jeder Betrieb muss einen bestellen",
     "Pflicht ab 20 Beschäftigten",
     "Häufig ernannt, gesetzlich aber nicht vorgeschrieben",
     "Er wird vom Betriebsrat gewählt"
    ],
    "c": 2,
    "e": "Anders als Fachkraft und Betriebsarzt ist er freiwillig.",
    "k": "Arbeitsschutz",
    "d": "hard",
    "s": "LF1 3.3"
   },
   {
    "t": "mc",
    "q": "Im Brandfall: gehbehinderte Kollegin im dritten Stock, gleichzeitig brennt ein Papierkorb. Was hat Vorrang?",
    "a": [
     "Erst löschen, dann helfen",
     "Menschenrettung vor Brandbekämpfung",
     "Den Aufzug zur Evakuierung nutzen",
     "Zuerst Vollzähligkeit prüfen"
    ],
    "c": 1,
    "e": "Menschenrettung geht vor Brandbekämpfung — Aufzüge sind tabu.",
    "k": "Arbeitsschutz",
    "d": "medium",
    "s": "LF1 3.3"
   },
   {
    "t": "tf",
    "q": "Baulicher Brandschutz ist bundesweit einheitlich geregelt.",
    "v": false,
    "e": "Falsch — baulicher Brandschutz ist Ländersache.",
    "k": "Arbeitsschutz",
    "d": "medium",
    "s": "LF1 3.3"
   },
   {
    "t": "multi",
    "q": "Welche Zweige des vorbeugenden Brandschutzes nennt das Buch?",
    "a": [
     "organisatorisch",
     "baulich",
     "technisch",
     "abwehrend"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Der abwehrende Brandschutz ist die Gegenkategorie, kein Zweig davon.",
    "k": "Arbeitsschutz",
    "d": "medium",
    "s": "LF1 3.3"
   },
   {
    "t": "type",
    "q": "Welche DIN-Norm regelt die Brandschutzordnung?",
    "ans": [
     "DIN 14096",
     "14096"
    ],
    "e": "DIN 14096 mit den Teilen A, B und C.",
    "k": "Arbeitsschutz",
    "d": "hard",
    "s": "LF1 3.3"
   },
   {
    "t": "order",
    "q": "Bringen Sie die Zielhierarchie des Kreislaufwirtschaftsgesetzes in die richtige Reihenfolge.",
    "items": [
     "Abfallvermeidung",
     "Wiederverwendung",
     "Wiederverwertung",
     "Energetische Verwertung",
     "Beseitigung"
    ],
    "e": "Vermeiden vor Wiederverwenden vor Recyceln vor Verbrennen vor Deponieren.",
    "k": "Umweltschutz",
    "d": "hard",
    "s": "LF1 3.4"
   },
   {
    "t": "mc",
    "q": "Altpapier wird eingesammelt und zu neuem Papier verarbeitet. Welche Stufe?",
    "a": [
     "Abfallvermeidung",
     "Wiederverwendung",
     "Wiederverwertung",
     "Energetische Verwertung"
    ],
    "c": 2,
    "e": "Das Produkt wird Abfall, die Wertstoffe werden neu verarbeitet — Recycling.",
    "k": "Umweltschutz",
    "d": "hard",
    "s": "LF1 3.4"
   },
   {
    "t": "mc",
    "q": "Getränkeautomaten sind mit Pfandflaschen bestückt, die neu befüllt werden. Welche Stufe?",
    "a": [
     "Wiederverwendung",
     "Wiederverwertung",
     "Energetische Verwertung",
     "Beseitigung"
    ],
    "c": 0,
    "e": "Die Flasche wird gar nicht erst zu Abfall — eine Stufe über dem Recycling.",
    "k": "Umweltschutz",
    "d": "hard",
    "s": "LF1 3.4"
   },
   {
    "t": "cloze",
    "q": "Umweltrecht",
    "txt": "Seit 1994 ist der Umweltschutz nach Art. {{1}} Grundgesetz Staatsziel. Das {{2}} regelt die Abfallhierarchie. Das EU-Prüfsystem heißt {{3}}, die internationale Norm {{4}}.",
    "gaps": [
     {
      "s": "20a",
      "o": [
       "9 Abs. 3",
       "12"
      ]
     },
     {
      "s": "Kreislaufwirtschaftsgesetz",
      "o": [
       "Verpackungsgesetz",
       "Bundes-Immissionsschutzgesetz"
      ]
     },
     {
      "s": "EMAS",
      "o": [
       "PDCA",
       "UVPG"
      ]
     },
     {
      "s": "DIN EN ISO 14001",
      "o": [
       "DIN 14096",
       "DIN 13157"
      ]
     }
    ],
    "e": "Art. 20a GG, KrWG, EMAS und ISO 14001.",
    "k": "Umweltschutz",
    "d": "hard",
    "s": "LF1 3.4"
   },
   {
    "t": "type",
    "q": "Wofür steht das C im PDCA-Zyklus?",
    "ans": [
     "Check",
     "Überprüfen",
     "Ueberpruefen"
    ],
    "e": "Check: Ergebnisse überwachen und Abweichungen feststellen.",
    "k": "Umweltschutz",
    "d": "easy",
    "s": "LF1 3.4"
   },
   {
    "t": "odd",
    "q": "Welches Gesetz gehört nicht zu den Umweltvorschriften?",
    "a": [
     "Verpackungsgesetz",
     "Gewerbeabfallverordnung",
     "Bundes-Immissionsschutzgesetz",
     "Betriebsverfassungsgesetz"
    ],
    "c": 3,
    "e": "Das BetrVG regelt die Mitbestimmung.",
    "k": "Umweltschutz",
    "d": "easy",
    "s": "LF1 3.4"
   },
   {
    "t": "tf",
    "q": "Recyclingpapier beschädigt moderne Drucker und Kopierer.",
    "v": false,
    "e": "Falsch — das Buch nennt das ausdrücklich einen Irrtum. Erkennungszeichen: der Blaue Engel.",
    "k": "Umweltschutz",
    "d": "easy",
    "s": "LF1 3.4"
   },
   {
    "t": "mc",
    "q": "Ein Callcenter misst im Großraum 3 sone. Wie ist das zu bewerten?",
    "a": [
     "Unbedenklich, Grenze bei 5 sone",
     "Zu laut — 2 sone sollten nicht überschritten werden",
     "Nicht bewertbar",
     "Zulässig unter 85 dB"
    ],
    "c": 1,
    "e": "Im Callcenter sollten 2 sone nicht überschritten werden.",
    "k": "Arbeitsplatz",
    "d": "medium",
    "s": "LF1 4"
   },
   {
    "t": "mc",
    "q": "Worin unterscheiden sich sone und Dezibel?",
    "a": [
     "Sone logarithmisch, Dezibel linear",
     "Sone misst subjektives Empfinden und ist linear, Dezibel misst Schalldruck logarithmisch",
     "Beide messen dasselbe",
     "Sone gilt nur im Freien"
    ],
    "c": 1,
    "e": "2 sone werden als doppelt so laut empfunden — bei Dezibel gilt das nicht.",
    "k": "Arbeitsplatz",
    "d": "hard",
    "s": "LF1 4"
   },
   {
    "t": "cloze",
    "q": "Arbeitsplatzgestaltung",
    "txt": "Pro Arbeitsplatz sind {{1}} m² vorzusehen, die Bewegungsfläche beträgt mindestens {{2}} m². Die Beleuchtung soll mindestens {{3}} Lux erreichen, die Temperatur {{4}} °C.",
    "gaps": [
     {
      "s": "12–15",
      "o": [
       "8–10",
       "18–20"
      ]
     },
     {
      "s": "1,5",
      "o": [
       "1,0",
       "2,5"
      ]
     },
     {
      "s": "500",
      "o": [
       "300",
       "800"
      ]
     },
     {
      "s": "20–23",
      "o": [
       "18–20",
       "24–26"
      ]
     }
    ],
    "e": "12–15 m², 1,5 m², 500 Lux, 20–23 °C.",
    "k": "Arbeitsplatz",
    "d": "hard",
    "s": "LF1 4"
   },
   {
    "t": "mc",
    "q": "Ein Teambüro für acht Personen — welche Raumform?",
    "a": [
     "Einzelbüro",
     "Gruppen- bzw. Teambüro",
     "Großraumbüro",
     "Kombibüro"
    ],
    "c": 1,
    "e": "Das Gruppenbüro umfasst laut Buch 4 bis 12 Personen.",
    "k": "Arbeitsplatz",
    "d": "easy",
    "s": "LF1 4"
   },
   {
    "t": "type",
    "q": "Wie heißt die Wissenschaft, die Arbeitsbedingungen an die Bedürfnisse des Menschen anpasst?",
    "ans": [
     "Ergonomie"
    ],
    "e": "Ergonomie.",
    "k": "Arbeitsplatz",
    "d": "easy",
    "s": "LF1 4"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jedem Schriftstück die richtige Wertigkeit zu.",
    "pairs": [
     [
      "Werbebrief eines Lieferanten",
      "Tageswert"
     ],
     [
      "Aktuelle Preisliste",
      "Prüfwert"
     ],
     [
      "Eingangsrechnung",
      "Gesetzeswert"
     ],
     [
      "Gesellschaftsvertrag",
      "Dauerwert"
     ]
    ],
    "e": "Tageswert sofort vernichtbar, Prüfwert befristet, Gesetzeswert mit Frist, Dauerwert archivieren.",
    "k": "Information & Lernen",
    "d": "hard",
    "s": "LF1 5.3"
   },
   {
    "t": "mc",
    "q": "Wie lange ist ein eingegangenes Angebot nach § 257 HGB aufzubewahren?",
    "a": [
     "3 Jahre",
     "6 Jahre",
     "10 Jahre",
     "Gar nicht"
    ],
    "c": 1,
    "e": "Angebote sind Handelsbriefe — 6 Jahre. Die 10 Jahre gelten für Bücher, Bilanzen und Belege.",
    "k": "Recht",
    "d": "hard",
    "s": "LF1 5.3"
   },
   {
    "t": "cloze",
    "q": "Aufbewahrungsfristen",
    "txt": "Nach § 257 HGB sind Handelsbücher, Inventare, Bilanzen und Buchungsbelege {{1}} Jahre aufzubewahren, Handelsbriefe dagegen {{2}} Jahre.",
    "gaps": [
     {
      "s": "10",
      "o": [
       "6",
       "3"
      ]
     },
     {
      "s": "6",
      "o": [
       "10",
       "12"
      ]
     }
    ],
    "e": "Zehn für Bücher und Belege, sechs für Briefe.",
    "k": "Recht",
    "d": "medium",
    "s": "LF1 5.3"
   },
   {
    "t": "multi",
    "q": "Welche Unterlagen sind nach § 257 HGB zehn Jahre aufzubewahren?",
    "a": [
     "Bilanzen",
     "Buchungsbelege",
     "Inventare",
     "Empfangene Angebote"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Angebote sind Handelsbriefe — sechs Jahre.",
    "k": "Recht",
    "d": "hard",
    "s": "LF1 5.3"
   },
   {
    "t": "odd",
    "q": "Welches System gehört nicht zu den fünf Ordnungsmöglichkeiten der Ablage?",
    "a": [
     "alphanumerisch",
     "chronologisch",
     "farblich",
     "hierarchisch"
    ],
    "c": 3,
    "e": "Alphabetisch, numerisch, alphanumerisch, chronologisch, farblich.",
    "k": "Information & Lernen",
    "d": "medium",
    "s": "LF1 5.3"
   },
   {
    "t": "type",
    "q": "Welche DIN-Norm regelt die ABC-Regeln der alphabetischen Ablage?",
    "ans": [
     "DIN 5007",
     "5007"
    ],
    "e": "DIN 5007 — nicht verwechseln mit DIN 5008 für die Briefgestaltung in LF3.",
    "k": "Information & Lernen",
    "d": "hard",
    "s": "LF1 5.3"
   },
   {
    "t": "multi",
    "q": "Welche Vorteile bieten Vordrucke und Formulare?",
    "a": [
     "Vorgänge werden vereinheitlicht",
     "Fehlende Informationen fallen sofort auf",
     "Wiederkehrende Arbeitsschritte sind standardisiert",
     "Sie ersetzen die gesetzliche Aufbewahrungspflicht"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Aufbewahrungspflichten bleiben bestehen.",
    "k": "Information & Lernen",
    "d": "easy",
    "s": "LF1 5.2"
   },
   {
    "t": "mc",
    "q": "Ein Protokoll hält nur die Beschlüsse fest. Welche Art?",
    "a": [
     "Verlaufsprotokoll",
     "Ergebnisprotokoll",
     "Gedächtnisprotokoll",
     "Wortprotokoll"
    ],
    "c": 1,
    "e": "Das Ergebnisprotokoll enthält nur Ergebnisse und Beschlüsse.",
    "k": "Information & Lernen",
    "d": "easy",
    "s": "LF1 5.1"
   },
   {
    "t": "mc",
    "q": "Ein Teamleiter erfährt, dass ein Mitarbeiter privat belastet ist. Welche Informationsart?",
    "a": [
     "Fachliche Information",
     "Organisatorische Information",
     "Sensible Information",
     "Soft Fact"
    ],
    "c": 2,
    "e": "Persönliche, vertrauliche Inhalte sind sensible Informationen.",
    "k": "Information & Lernen",
    "d": "hard",
    "s": "LF1 5.1"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jede Aufgabe dem richtigen Eisenhower-Feld zu.",
    "pairs": [
     [
      "Systemausfall in der Hotline",
      "A — sofort selbst erledigen"
     ],
     [
      "Konzept für das nächste Quartal",
      "B — terminieren"
     ],
     [
      "Anruf zur Raumbuchung",
      "C — delegieren"
     ],
     [
      "Werbe-Newsletter",
      "D — Papierkorb"
     ]
    ],
    "e": "A wichtig und dringend, B wichtig nicht dringend, C dringend nicht wichtig, D weder noch.",
    "k": "Information & Lernen",
    "d": "hard",
    "s": "LF1 6.1"
   },
   {
    "t": "order",
    "q": "Bringen Sie die Schritte der ALPEN-Methode in die richtige Reihenfolge.",
    "items": [
     "Aufgaben notieren",
     "Länge schätzen",
     "Pufferzeiten einplanen",
     "Entscheidungen treffen",
     "Nachkontrolle"
    ],
    "e": "A-L-P-E-N in genau dieser Reihenfolge.",
    "k": "Information & Lernen",
    "d": "medium",
    "s": "LF1 6.1"
   },
   {
    "t": "type",
    "q": "Wofür steht das P in der ALPEN-Methode?",
    "ans": [
     "Pufferzeiten",
     "Puffer",
     "Pufferzeiten einplanen"
    ],
    "e": "Pufferzeiten nach der 60/40-Regel: nur 60 % der Zeit verplanen.",
    "k": "Information & Lernen",
    "d": "medium",
    "s": "LF1 6.1"
   },
   {
    "t": "tf",
    "q": "Nach dem Pareto-Prinzip bringen 20 % der Aufgaben 80 % des Erfolgs.",
    "v": true,
    "e": "Richtig — daraus folgt die Priorisierung der wenigen wirksamen Aufgaben.",
    "k": "Information & Lernen",
    "d": "easy",
    "s": "LF1 6.1"
   },
   {
    "t": "order",
    "q": "Bringen Sie die sechs Phasen der Gruppenarbeit in die richtige Reihenfolge.",
    "items": [
     "Bestimmung des Ziels",
     "Prüfung",
     "Sammeln von Lösungsvorschlägen",
     "Auswahl der optimalen Lösung",
     "Umsetzung",
     "Abschlussbetrachtung"
    ],
    "e": "Ziel – Prüfung – Sammeln – Auswahl – Umsetzung – Abschluss.",
    "k": "Information & Lernen",
    "d": "medium",
    "s": "LF1 6.3"
   },
   {
    "t": "mc",
    "q": "In welcher Phase der Gruppenarbeit wird bewusst noch nicht diskutiert?",
    "a": [
     "Bestimmung des Ziels",
     "Prüfung",
     "Sammeln von Lösungsvorschlägen",
     "Auswahl der Lösung"
    ],
    "c": 1,
    "e": "In der Prüfungsphase bringt jeder nur seine Ansicht ein und stellt Fragen.",
    "k": "Information & Lernen",
    "d": "hard",
    "s": "LF1 6.3"
   },
   {
    "t": "mc",
    "q": "Zwei von fünf Gruppenmitgliedern tragen nichts bei, profitieren aber. Wie heißt der Nachteil?",
    "a": [
     "Gruppendenken",
     "Trittbrettfahrerproblem",
     "Kollegialprinzip",
     "Diffusionseffekt"
    ],
    "c": 1,
    "e": "Ungleiche Arbeitsbelastung — im Buch als Trittbrettfahrerproblem bezeichnet.",
    "k": "Information & Lernen",
    "d": "medium",
    "s": "LF1 6.3"
   },
   {
    "t": "tf",
    "q": "Der Moderator muss fachlich mindestens so versiert sein wie die Teilnehmer.",
    "v": false,
    "e": "Falsch. Er kennt Ziele und Inhalte, ist aber vor allem Methodenspezialist.",
    "k": "Information & Lernen",
    "d": "medium",
    "s": "LF1 6.4"
   },
   {
    "t": "order",
    "q": "Bringen Sie den Moderationszyklus in die richtige Reihenfolge.",
    "items": [
     "Einstieg",
     "Themen sammeln",
     "Themen wählen",
     "Thema bearbeiten",
     "Maßnahmen planen",
     "Abschluss"
    ],
    "e": "Einstieg – sammeln – wählen – bearbeiten – planen – Abschluss.",
    "k": "Information & Lernen",
    "d": "medium",
    "s": "LF1 6.4"
   },
   {
    "t": "calc",
    "q": "Sechs Teilnehmer schreiben je drei Ideen und geben das Blatt fünfmal weiter. Wie viele Ideen entstehen im Idealfall maximal?",
    "ans": [
     "108"
    ],
    "unit": "Ideen",
    "hint": "6 Teilnehmer × 3 Ideen × 6 Runden.",
    "e": "6 × 3 × 6 = 108 — die 635-Methode.",
    "k": "Information & Lernen",
    "d": "hard",
    "s": "LF1 6.5"
   },
   {
    "t": "mc",
    "q": "Ideen auf Moderationskarten, danach thematisch an der Pinnwand geclustert. Welche Methode?",
    "a": [
     "Brainstorming",
     "Kartenabfrage",
     "Mindmap",
     "Rollenspiel"
    ],
    "c": 1,
    "e": "Kartenabfrage — eine Brainwriting-Methode. Brainstorming läuft mündlich.",
    "k": "Information & Lernen",
    "d": "medium",
    "s": "LF1 6.5"
   },
   {
    "t": "multi",
    "q": "Welche Regeln gelten beim Brainstorming?",
    "a": [
     "Keine Kritik an fremden Ideen",
     "Möglichst viele Ideen",
     "Ideen anderer dürfen aufgegriffen werden",
     "Jede Idee wird sofort bewertet"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Bewertet wird erst nach dem Sammeln.",
    "k": "Information & Lernen",
    "d": "easy",
    "s": "LF1 6.5"
   },
   {
    "t": "mc",
    "q": "Warum gilt die Mindmap als gehirngerecht?",
    "a": [
     "Weil sie nur Stichworte zulässt",
     "Weil sie analytisch-logisches und bildliches Denken zugleich aktiviert",
     "Weil sie chronologisch aufgebaut ist",
     "Weil sie ohne Farben auskommt"
    ],
    "c": 1,
    "e": "Die baumartige Struktur spricht beide Gehirnhälften an.",
    "k": "Information & Lernen",
    "d": "medium",
    "s": "LF1 6.6"
   },
   {
    "t": "odd",
    "q": "Welcher Einsatz gehört nicht zu den typischen Anlässen für ein Rollenspiel?",
    "a": [
     "Telefontraining",
     "Vorstellungsgespräch",
     "Assessment-Center",
     "Jahresabschlussprüfung"
    ],
    "c": 3,
    "e": "Rollenspiele dienen dem Erproben von Verhalten.",
    "k": "Information & Lernen",
    "d": "easy",
    "s": "LF1 6.7"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jedem VUCA-Aspekt das passende Beispiel zu.",
    "pairs": [
     [
      "Volatility",
      "Stark schwankendes Anrufvolumen"
     ],
     [
      "Uncertainty",
      "Unklare Folgen von KI und Chatbots"
     ],
     [
      "Complexity",
      "Omnichannel mit vielen vernetzten Kanälen"
     ],
     [
      "Ambiguity",
      "Widersprüchliche Kundenfeedbacks"
     ]
    ],
    "e": "Schwankung – Prognoseproblem – Vernetzung – Deutungsspielraum.",
    "k": "VUCA",
    "d": "hard",
    "s": "LF1 VUCA"
   },
   {
    "t": "mc",
    "q": "Ein Kunde lobt im Chat die Hilfe und kritisiert in der Umfrage denselben Kontakt. Welcher VUCA-Aspekt?",
    "a": [
     "Volatility",
     "Uncertainty",
     "Complexity",
     "Ambiguity"
    ],
    "c": 3,
    "e": "Dieselbe Situation lässt sich unterschiedlich deuten.",
    "k": "VUCA",
    "d": "hard",
    "s": "LF1 VUCA"
   },
   {
    "t": "cloze",
    "q": "VUCA 2.0",
    "txt": "Das Gegenmodell setzt {{1}} gegen Volatilität, {{2}} gegen Unsicherheit, {{3}} gegen Komplexität und {{4}} gegen Ambiguität.",
    "gaps": [
     {
      "s": "Vision",
      "o": [
       "Velocity",
       "Value"
      ]
     },
     {
      "s": "Understanding",
      "o": [
       "Uniformity",
       "Urgency"
      ]
     },
     {
      "s": "Clarity",
      "o": [
       "Control",
       "Capacity"
      ]
     },
     {
      "s": "Agility",
      "o": [
       "Accuracy",
       "Alignment"
      ]
     }
    ],
    "e": "Vision, Understanding, Clarity, Agility.",
    "k": "VUCA",
    "d": "hard",
    "s": "LF1 VUCA"
   },
   {
    "t": "multi",
    "q": "Wie reagieren Unternehmen laut Buch auf eine VUCA-Welt?",
    "a": [
     "Mit Agilität und schneller Anpassung",
     "Mit flexiblen, flachen Strukturen",
     "Mit kontinuierlicher Weiterbildung",
     "Mit strikt autoritärer Führung"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Agilität, flache Strukturen, Weiterbildung, datenbasierte Entscheidungen.",
    "k": "VUCA",
    "d": "medium",
    "s": "LF1 VUCA"
   }
  ]
 },
 {
  "code": "02",
  "name": "Dienstleistungen im Dialogmarketing analysieren und vergleichen",
  "themen": [
   {
    "t": "1.1 Historische Entwicklung der DM-Branche",
    "d": "Von der Telefonvermittlung 1900 über die ACD 1973 zu Social Media.",
    "c": "**Meilensteine:**\n- **Anfang 20. Jhd.** — Telefon-Vermittlung: Operatoren stellen Verbindungen manuell her → erste „Callcenter\".\n- **ab 1950er** — Telefon im Privathaushalt → Anstieg telefonischer Kundenkontakte (zuerst Fluggesellschaften, Versandhandel).\n- **1973** — **ACD (Automatic Call Distribution)** von **Rockwell** erfunden → Durchbruch für Massen-Callcenter.\n- parallel: Computer am Arbeitsplatz → vielfältige Aufgaben direkt vom MA → Kostensenkung + Produktivität.\n- **ab 2010er** — Social Media + mobile Endgeräte → grundlegender Wandel im Kundendialog.\n\nWachstumshindernis: Mangel an qualifizierten Mitarbeitern → Begründung der Ausbildungsberufe **ab 2006**.",
    "k": [
     "ACD 1973 von Rockwell — der Durchbruch",
     "Ausbildungsberufe seit 2006",
     "ab 2010er: Social Media verändert Kundendialog"
    ],
    "r": "medium"
   },
   {
    "t": "1.2.1 Sektorenmodell & Strukturwandel",
    "d": "Primär-, Sekundär-, Tertiärsektor und der Wandel zur Dienstleistungsgesellschaft.",
    "c": "**Drei Sektoren der Volkswirtschaft:**\n- **Primärsektor** — Urproduktion: Land-/Forstwirtschaft, Fischerei, Bergbau.\n- **Sekundärsektor** — Industrielle Produktion: Energie, produzierendes Gewerbe, Bau.\n- **Tertiärsektor** — Dienstleistungen: Handel, Banken, Versicherungen, Transport, Telekommunikation.\n\n**Tertiärsektor-Anteil der Erwerbstätigen:** 45 % (1970) → 61 % (1991) → **74 % (2018)**.\n\n**Strukturwandel-Phasen:**\n- bis ~1880 — Agrargesellschaft\n- bis ~1980 — Industriegesellschaft\n- ab ~1980 — Dienstleistungsgesellschaft\n- ab ~2000 — Wissensgesellschaft\n\n**Gründe:** Automatisierung, Globalisierung, höherer Beratungsbedarf, günstige DL durch IT, gesellschaftlicher Wandel.",
    "k": [
     "Primär = Urproduktion, Sekundär = Industrie, Tertiär = DL",
     "Tertiärsektor 1970→2018: 45 % → 74 %",
     "Phasen: Agrar → Industrie → Dienstleistung → Wissen"
    ],
    "r": "high"
   },
   {
    "t": "1.2.1 DM als Querschnittsbranche",
    "d": "Warum das Dialogmarketing in der amtlichen Statistik fehlt.",
    "c": "Das Dialogmarketing ist **keine „Branche\" im üblichen Sinne**. In der amtlichen Gliederung des Statistischen Bundesamtes wird es **gar nicht aufgeführt**.\n\nMan spricht von einer **Querschnittsbranche** — DM-Leistungen werden in vielen anderen Branchen erbracht.\n\n**Einsatzfelder:**\n- Handel — Bestellannahme im Versandhandel\n- Transport — Paketstatus\n- Telekommunikation — Tarifberatung\n- Banken — Baufinanzierung\n- Versicherungen — Antrag im Onlinechat\n- Freie Berufe — zentrale Terminvergabe\n- Öffentlicher Dienst — Beschwerdemanagement",
    "k": [
     "DM = Querschnittsbranche, keine eigene Branche",
     "Nicht in der amtlichen Statistik geführt",
     "Leistungen branchenübergreifend"
    ],
    "r": "high"
   },
   {
    "t": "1.2.2 Sach- vs. Dienstleistung",
    "d": "Sechs Unterscheidungsmerkmale, Vertrauensgut, Uno-actu-Prinzip.",
    "c": "**Dienstleistung** = Tätigkeit, die nicht der Produktion eines materiellen Gutes dient, sondern einen eigenständigen Wert hat.\n\n**6 Unterscheidungsmerkmale:**\n\n| Merkmal | Sachleistung | Dienstleistung |\n|---|---|---|\n| Physisch | materiell | immateriell |\n| Lagerfähig | ja | nein |\n| Übertragbar | ja | nein |\n| Kundenbeteiligung | unabhängig | Kunde notwendig |\n| Erstellung/Nutzung | nicht zeitgleich | gleichzeitig (Uno-actu) |\n| Vorführmöglichkeit | ja | nein |\n\n→ Dienstleistungen sind **Vertrauensgüter** — hohe Unsicherheit vor Inanspruchnahme.\n\n**Zwei Dienstleistungsarten:**\n- **Originäre DL** — eigenständige Leistung (KommunikativAktiv als Outsourcer)\n- **Produktbegleitende DL** — abhängig von Sachleistung (Dialogfix-Bestellhotline)",
    "k": [
     "DL: immateriell, nicht lagerfähig, nicht übertragbar",
     "Uno-actu-Prinzip: Erstellung = Nutzung zeitgleich",
     "DL = Vertrauensgut",
     "originär vs. produktbegleitend"
    ],
    "r": "high"
   },
   {
    "t": "1.3.1 Marketingmix — 4P → 7P",
    "d": "Die vier klassischen Ps plus drei Dienstleistungs-Ps.",
    "c": "**Die 4 klassischen Ps:**\n- **Product** (Produktpolitik) — Eigenschaften, Verpackung, Marke, Qualität, Garantie, Kundendienst\n- **Price** (Preispolitik) — Preise, Rabatte, Differenzierung, Finanzierung\n- **Promotion** (Kommunikationspolitik) — Kundenansprache, Werbung, PR, Verkaufsförderung\n- **Place** (Vertriebspolitik) — Absatzwege, Logistik, Standort\n\n→ Dialogmarketing gehört **schwerpunktmäßig zur Promotion (Kommunikationspolitik)**.\n\n**Erweiterung auf 7P für Dienstleistungen:**\n- **People** (Personalpolitik) — Auswahl, Aus-/Weiterbildung, Verhalten, Führung der MA\n- **Processes** (Prozesspolitik) — Organisation interner Abläufe\n- **Physical facilities** (Ausstattungspolitik) — Geschäftsräume, sichtbares Umfeld",
    "k": [
     "4P: Product, Price, Promotion, Place",
     "7P zusätzlich: People, Processes, Physical facilities",
     "DM = Teil der Promotion",
     "Werbung gehört zu Promotion, nicht Product"
    ],
    "r": "high"
   },
   {
    "t": "1.3.2 Klassisches Marketing vs. Dialogmarketing",
    "d": "One-to-One statt Massenansprache.",
    "c": "**Vergleich:**\n\n| Klassisches Marketing | Dialogmarketing |\n|---|---|\n| einseitige Kommunikation | zweiseitig, dialogorientiert |\n| Massenmarkt-Ansprache | individuell, zielgenau |\n| hohe Streuverluste | geringe Streuverluste |\n| keine direkte Response | direkte Responsemöglichkeit |\n| Ziel: Bekanntheitsgrad | Ziel: direkte Reaktion |\n| anonyme Beziehung | personalisierte Beziehung |\n| langfristige Planung nötig | flexibel + kurzfristig |\n| Erfolgskontrolle schwierig | rasche Erfolgskontrolle |\n\nDialogmarketing = **One-to-One-Marketing**.",
    "k": [
     "DM = One-to-One-Marketing",
     "DM: zweiseitig, geringe Streuverluste, direkte Response",
     "Klassisch: Bekanntheitsgrad / DM: direkte Reaktion"
    ],
    "r": "high"
   },
   {
    "t": "2.1.1 9-Felder-Typologie",
    "d": "Inbound/Outbound × intern/extern/Mischform.",
    "c": "**Erste Achse — Richtung:**\n- **Inbound** — eingehende Anrufe. Initiative beim **Kunden**, Unternehmen reagiert.\n- **Outbound** — abgehende Anrufe. Initiative beim **Unternehmen**, Kunde reagiert.\n\n**Zweite Achse — Einbindung:** intern (Inhouse) / extern (Dienstleister) / Mischform.\n\n**Die 9-Felder-Matrix:**\n\n| | Intern | Extern | Mischform |\n|---|---|---|---|\n| Inbound | Typ 1 | Typ 4 | Typ 7 |\n| Outbound | Typ 2 | Typ 5 | Typ 8 |\n| Mischform | **Typ 3** | **Typ 6** | Typ 9 |\n\n**Lehrfirmen:** Dialogfix = **Typ 3** (intern + Misch). KommunikativAktiv = **Typ 6** (extern + Misch).\n\nOutbound = nur **ca. 1/3** aller Gespräche; Inbound dominiert.",
    "k": [
     "Inbound = Kunde initiiert, Outbound = Unternehmen initiiert",
     "Dialogfix = Typ 3, KommunikativAktiv = Typ 6",
     "Outbound nur ca. 1/3 aller Gespräche"
    ],
    "r": "high"
   },
   {
    "t": "2.1.1 Inhouse vs. Extern",
    "d": "Vor- und Nachteile von Eigenbetrieb und Outsourcing.",
    "c": "**Inhouse-Callcenter** — eigene Abteilung mit eigener Infrastruktur.\n- **Vorteile:** bessere Bearbeitung komplexer Sachverhalte, höhere Identifikation, unmittelbare Qualitätskontrolle, Feedback kommt direkt an.\n- **Nachteile:** Know-how-Aufbau teuer, schwankendes Volumen schwer abfangbar, höhere Personal-/Verwaltungskosten, unflexibel im Personaleinsatz.\n\n**Externes Callcenter (Dienstleister)** — organisatorisch unabhängig, Leistungen werden eingekauft.\n- **Vorteile:** flexible Reaktion auf Volumen, häufig kostengünstiger, Erfahrung aus vielen Projekten, Zusatzservices.\n- **Nachteile:** Produkt-Schulung nötig (nicht für sehr komplexe Sachverhalte), geringere Motivation, längere Abstimmungswege, eingeschränkte Qualitätskontrolle.\n\n**Trend:** Wachstum externer Dienstleister; weniger komplexe Tätigkeiten werden ausgelagert.",
    "k": [
     "Inhouse: tiefe Produktkenntnis, aber teuer + unflexibel",
     "Extern: flexibel + günstig, aber Motivation + Komplexität problematisch",
     "Trend zu Outsourcing"
    ],
    "r": "high"
   },
   {
    "t": "2.1.2 Contact Center, Front-/Backoffice & FCR",
    "d": "Vom Telefon-Callcenter zum Multichannel-Contact-Center.",
    "c": "**Begriffsentwicklung:**\n- **Callcenter** = nur **Telefonie**\n- **Contact Center** = **Multichannel**: Telefon + E-Mail + Chat + Social Media + Messenger\n\n**Frontoffice** = direkter Kundenkontakt. Bearbeitung von Anrufen/Anfragen + Datenpflege. Ziel: **First Call Resolution (FCR)** — Problem beim ersten Kontakt gelöst, ohne weitere MA. Nutzt CRM-Systeme.\n\n**Backoffice** = weiterführende Sachbearbeitung **ohne** direkten Kundenkontakt.",
    "k": [
     "Callcenter = nur Telefon, Contact Center = Multichannel",
     "FCR = First Call Resolution (Problem beim 1. Kontakt gelöst)",
     "Frontoffice = Kontakt, Backoffice = ohne Kontakt"
    ],
    "r": "high"
   },
   {
    "t": "2.2 Zielgruppen B2C / B2B / B2G",
    "d": "Die drei Kundenkategorien im Dialogmarketing.",
    "c": "**Drei Zielgruppen:**\n- **B2C** (Business-to-Consumer) — Privatkunden\n- **B2B** (Business-to-Business) — Geschäftskunden\n- **B2G** (Business-to-Government) — Behörden / öffentlicher Dienst\n\nHinweis: Im B2B-Kontext kann der „Kunde\" selbst ein Unternehmen sein — „Kunde\" ≠ „Konsument\".",
    "k": [
     "B2C = Privatkunden",
     "B2B = Geschäftskunden",
     "B2G = Behörden"
    ],
    "r": "medium"
   },
   {
    "t": "2.2.1 Inbound-Leistungen",
    "d": "Bestellannahme, technische Hotline, Kundenservice, Informationshotline.",
    "c": "**Vier Inbound-Leistungen:**\n\n- **Bestell- und Auftragsannahme** — Bestellung am Telefon, Beratung, Lieferterminauskunft.\n  - **Cross-Selling** = zusätzliches, anderes Produkt verkaufen\n  - **Up-Selling** = höherwertige Variante verkaufen\n  - **Direct Response** = Bestellung unmittelbar nach TV-/Radio-Spot, oft mit **Overflow-Callcenter** für Spitzen.\n- **Technische Hotline / Support** — anspruchsvolle Anfragen, Experten-Antworten. Unternehmensintern als **Help Desk**.\n- **Kundenservice** — Beschwerden, Reklamationen, Daten-/Zahlungsänderungen, Bedienungsfragen.\n- **Informationshotline** — reine Informationsvermittlung, oft mit Aktionen (Produkteinführung, Rückrufaktion).",
    "k": [
     "Cross-Selling = anderes Produkt, Up-Selling = höherwertig",
     "Direct Response = nach Werbespot, Overflow fängt Spitzen",
     "Help Desk = interne technische Hotline"
    ],
    "r": "high"
   },
   {
    "t": "2.2.2 Outbound-Leistungen",
    "d": "Telesales, Adressqualifizierung, Kundenbindung, Rückgewinnung, Inkasso, Marktforschung.",
    "c": "**Sechs Outbound-Leistungen:**\n\n- **Telefonverkauf (Telesales)** — aktiv Produkte anbieten, sofortiger Abschluss. Auch Außendienst-Unterstützung (Terminvereinbarung).\n- **Adress- und Datenqualifizierung** — Datenbestand aktuell halten, Rückläuferbearbeitung nach Mailing.\n- **Kundenbindung** — Welcome-Call, Thank-You-Call, Customer-Care-Call („Kuschelcall\"), Nachfass nach Mailing, Kontakt nach A/B/C-Kundenklassifikation.\n- **Kundenrückgewinnung** — Kündigungsgründe erfragen, neues Angebot.\n- **Mahn- und Inkassowesen** — telefonische Zahlungserinnerung, Zahlungsplan. Vermeidet gerichtliches Mahnverfahren.\n- **Markt- und Meinungsforschung** — Telefonbefragung zu Bedarf, Zufriedenheit, auch politisch.",
    "k": [
     "Telesales = aktiver Verkauf mit Abschlussziel",
     "Customer-Care-Call = „Kuschelcall\"",
     "Inkasso vermeidet gerichtliches Mahnverfahren"
    ],
    "r": "high"
   },
   {
    "t": "2.3.1 IHK-Hierarchiestufen",
    "d": "Agent, Teamleiter, Manager, Trainer.",
    "c": "**Vier IHK-zertifizierte Stufen:**\n\n- **Callcenter-Agent** — Basisqualifikation, Frontoffice, In-/Outbound, **keine Führungsverantwortung**.\n- **Callcenter-Teamleiter (Supervisor)** — führt 10–20 MA; Personal-/Urlaubsplanung, Coaching, Schulungen.\n- **Callcenter-Manager** — obere Führung, leitet das Callcenter; verantwortet Personal, Technik, Qualität, Ergebnis. Mehrjährige Erfahrung + Studium/Weiterbildung.\n- **Callcenter-Trainer** — Schulungen, Coaching, Personalentwicklung.\n\nWeitere Qualifikationen: **Callcenter-Controller** (KLR, Steuerung), **Callcenter-Projektleiter**.",
    "k": [
     "Agent = keine Führungsverantwortung",
     "Teamleiter führt 10–20 MA",
     "Manager = obere Führung, ganzes Callcenter"
    ],
    "r": "medium"
   },
   {
    "t": "2.3.2 Hard Skills vs. Soft Skills",
    "d": "Differenzierung der Soft Skills nach Inbound und Outbound.",
    "c": "**Hard Skills** = überprüfbare Kenntnisse und formale Qualifikationen (kaufm. Ausbildung, IHK-Zertifikat, Englisch, MS-Office, Produktkenntnisse).\n\n**Soft Skills** = soziale Kompetenzen / Schlüsselqualifikationen — menschliche Eigenschaften und Fähigkeiten.\n\n**Differenzierung nach Einsatzgebiet:**\n\n| Soft Skills Inbound (reaktiv/empathisch) | Soft Skills Outbound (aktiv/durchsetzend) |\n|---|---|\n| Geduld | Überzeugungskraft |\n| Einfühlungsvermögen | Ehrgeiz |\n| Zuhören können | Zielstrebigkeit |\n| Denken in Zusammenhängen | Frustrationstoleranz |\n| Freundlichkeit | Selbstvertrauen |\n| Hilfsbereitschaft | Positives Denken |",
    "k": [
     "Hard Skills = überprüfbar/formal, Soft Skills = soziale Kompetenzen",
     "Inbound-Skills: empathisch, reaktiv (Geduld, Zuhören)",
     "Outbound-Skills: durchsetzend, aktiv (Überzeugungskraft, Ehrgeiz)"
    ],
    "r": "high"
   },
   {
    "t": "2.3.3 Ausbildungsberufe im Dialogmarketing",
    "d": "Servicefachkraft (2 Jahre) und Kaufleute (3 Jahre).",
    "c": "**Zwei Ausbildungsberufe seit 2006:**\n\n| | Servicefachkraft für DM | Kaufleute für DM |\n|---|---|---|\n| Dauer | **2 Jahre** | **3 Jahre** |\n| Schwerpunkt | Kundenbetreuung, Service, Verkauf | zusätzlich Personal, KLR/Controlling, Qualitätssicherung, Vertrieb/Marketing |\n\nDie **Servicefachkraft-Ausbildung wird auf die Kaufmann-Ausbildung angerechnet**.\n\n**Zusätzliche Kaufleute-Inhalte:** Personal · Kaufmännische Steuerung und Kontrolle (KLR, Controlling) · Qualitätssicherung der Auftragsdurchführung · Vertrieb und Marketing.",
    "k": [
     "Servicefachkraft = 2 Jahre, Kaufleute = 3 Jahre",
     "Servicefachkraft wird auf Kaufmann angerechnet",
     "Kaufleute zusätzlich: Personal, KLR, Qualität, Vertrieb"
    ],
    "r": "high"
   },
   {
    "t": "3.1 Präsentation vorbereiten",
    "d": "Vorbereitungsschritte und die drei Präsentationsphasen.",
    "c": "**Vorbereitungsschritte:**\n1. **Zielgruppe analysieren** — Sprachniveau, Größe, Homogenität\n2. **Inhalte bestimmen** — sammeln, auswählen, komprimieren\n3. **Inhalte gliedern** in 3 Phasen\n4. **Organisatorischer Rahmen** — Tag/Uhrzeit, Pausen, Raum, Sitzordnung\n\n**Drei Phasen:**\n- **Eröffnung** — Begrüßung, Aufmacher, Überblick\n- **Hauptteil** — Daten, Argumente, Stilmittel, Visualisierung, Fragen\n- **Abschluss** — Zusammenfassung, Ausblick, nächste Schritte, Handout\n\n→ **Regel:** Eröffnung + Abschluss zusammen max. **20 %** der Zeit.",
    "k": [
     "3 Phasen: Eröffnung, Hauptteil, Abschluss",
     "Eröffnung + Abschluss max. 20 % der Zeit",
     "Erst Zielgruppe analysieren, dann Inhalte"
    ],
    "r": "medium"
   },
   {
    "t": "3.2 Visualisierung & Verständlichmacher",
    "d": "4 Verständlichmacher nach Schulz von Thun, 4 Diagrammtypen.",
    "c": "Visuelles wird vom Gehirn **schneller und nachhaltiger** aufgenommen als Text.\n\n**4 Verständlichmacher (Schulz von Thun):**\n- **Einfachheit** — kurze Sätze, Wortschatz der Zielgruppe, keine Fremdwörter\n- **Gliederung** — Überschriften, Absätze, logische Struktur\n- **Prägnanz** — Wesentliches, mit wenigen Worten viel sagen\n- **Stimulanz** — Anreize: Farben, Grafiken, Beispiele\n\n**4 Diagrammtypen:**\n- **Tabelle** — Zahlen, Vergleiche, Rangordnungen\n- **Säulen-/Balkendiagramm** — Größenvergleiche, Entwicklungen\n- **Kurvendiagramm** — Entwicklungen über Zeit (Zeit auf x-Achse)\n- **Kreis-/Tortendiagramm** — Anteile an einem Gesamtwert (Prozente)",
    "k": [
     "4 Verständlichmacher: Einfachheit, Gliederung, Prägnanz, Stimulanz",
     "Kurvendiagramm = Zeitverlauf, Kreisdiagramm = Anteile",
     "Visuelle Aufnahme schneller + nachhaltiger als Text"
    ],
    "r": "high"
   }
  ],
  "cards": [
   {
    "f": "Was wurde 1973 erfunden und von wem?",
    "b": "Die ACD (Automatic Call Distribution) von Rockwell — der Durchbruch für Massen-Callcenter.",
    "k": "Branche & Historie"
   },
   {
    "f": "Seit wann gibt es die Ausbildungsberufe im Dialogmarketing und warum?",
    "b": "Seit 2006 — als Reaktion auf den Mangel an qualifizierten Mitarbeitern.",
    "k": "Branche & Historie"
   },
   {
    "f": "Warum gilt Dialogmarketing als Querschnittsbranche?",
    "b": "Weil DM-Leistungen in vielen anderen Branchen erbracht werden — in der amtlichen Statistik gibt es sie als eigene Branche gar nicht.",
    "k": "Branche & Historie"
   },
   {
    "f": "Warum ist Irland ein bedeutender Callcenter-Standort?",
    "b": "Sprachliche Vorteile plus niedrige Steuern und Sozialabgaben.",
    "k": "Branche & Historie"
   },
   {
    "f": "Offshoring oder Outsourcing: eigene Tochtergesellschaft in Polen?",
    "b": "Offshoring — die Tätigkeit bleibt organisatorisch im Unternehmen, nur der Ort wechselt.",
    "k": "Branche & Historie"
   },
   {
    "f": "Woran scheitert Offshoring im deutschsprachigen Markt häufig?",
    "b": "An Akzeptanzproblemen der Kunden, sprachlich und kulturell. Teilweise gibt es einen Trend zur Rückverlagerung.",
    "k": "Branche & Historie"
   },
   {
    "f": "Welche vier Gesellschaftsphasen nennt der Strukturwandel?",
    "b": "Agrargesellschaft (bis ~1880), Industriegesellschaft (bis ~1980), Dienstleistungsgesellschaft (ab ~1980), Wissensgesellschaft (ab ~2000).",
    "k": "Sektoren & DL"
   },
   {
    "f": "Wie hat sich der Tertiärsektor-Anteil von 1970 bis 2018 entwickelt?",
    "b": "Von 45 % über 61 % (1991) auf 74 % (2018) der Erwerbstätigen.",
    "k": "Sektoren & DL"
   },
   {
    "f": "Was besagt das Uno-actu-Prinzip?",
    "b": "Bei Dienstleistungen fallen Erstellung und Nutzung zeitlich zusammen — deshalb sind sie nie lagerfähig.",
    "k": "Sektoren & DL"
   },
   {
    "f": "Nennen Sie die sechs Merkmale zur Unterscheidung von Sach- und Dienstleistung.",
    "b": "Physisch vorhanden, lagerfähig, übertragbar, Kundenbeteiligung, zeitgleiche Erstellung und Nutzung, Vorführmöglichkeit.",
    "k": "Sektoren & DL"
   },
   {
    "f": "Warum sind Dienstleistungen Vertrauensgüter?",
    "b": "Weil die Qualität vor der Inanspruchnahme nicht prüfbar ist — es bleibt eine hohe Unsicherheit.",
    "k": "Sektoren & DL"
   },
   {
    "f": "Originäre oder produktbegleitende Dienstleistung: die Bestellhotline eines Versandhändlers?",
    "b": "Produktbegleitend — sie hängt an einer Sachleistung. Ein Outsourcing-Callcenter wäre eine originäre Dienstleistung.",
    "k": "Sektoren & DL"
   },
   {
    "f": "Welche drei Ps kommen im Dienstleistungsmarketing zu den vier klassischen hinzu?",
    "b": "People (Personalpolitik), Processes (Prozesspolitik), Physical facilities (Ausstattungspolitik).",
    "k": "Marketing"
   },
   {
    "f": "Zu welchem P gehört das Dialogmarketing schwerpunktmäßig?",
    "b": "Zur Promotion, also der Kommunikationspolitik.",
    "k": "Marketing"
   },
   {
    "f": "Welches Ziel verfolgt klassisches Marketing, welches Dialogmarketing?",
    "b": "Klassisch: Bekanntheitsgrad. Dialogmarketing: direkte Reaktion, also Response.",
    "k": "Marketing"
   },
   {
    "f": "Wie unterscheiden sich die Streuverluste beider Ansätze?",
    "b": "Klassisches Marketing hat hohe, Dialogmarketing geringe Streuverluste.",
    "k": "Marketing"
   },
   {
    "f": "Wie wird Dialogmarketing auch genannt?",
    "b": "One-to-One-Marketing.",
    "k": "Marketing"
   },
   {
    "f": "Inbound oder Outbound: Der Kunde initiiert den Kontakt.",
    "b": "Inbound. Outbound geht vom Unternehmen aus und macht nur rund ein Drittel aller Gespräche aus.",
    "k": "Typologie"
   },
   {
    "f": "Welche zwei Achsen bilden die 9-Felder-Typologie?",
    "b": "Die Richtung (Inbound, Outbound, Mischform) und die organisatorische Einbindung (intern, extern, Mischform).",
    "k": "Typologie"
   },
   {
    "f": "Welchem Typ entsprechen Dialogfix und KommunikativAktiv?",
    "b": "Dialogfix: Typ 3 (intern + Mischform). KommunikativAktiv: Typ 6 (extern + Mischform).",
    "k": "Typologie"
   },
   {
    "f": "Callcenter oder Contact Center — wo liegt der Unterschied?",
    "b": "Callcenter = nur Telefonie. Contact Center = Multichannel mit E-Mail, Chat, Social Media und Messenger.",
    "k": "Typologie"
   },
   {
    "f": "Nennen Sie zwei Vorteile des Inhouse-Callcenters.",
    "b": "Bessere Bearbeitung komplexer Sachverhalte durch eigene Produktkenntnis und unmittelbare Qualitätskontrolle.",
    "k": "Typologie"
   },
   {
    "f": "Nennen Sie je einen Vor- und Nachteil des externen Callcenters.",
    "b": "Vorteil: flexible Reaktion auf schwankendes Volumen, oft günstiger. Nachteil: geringere Mitarbeitermotivation, verzögerte Qualitätskontrolle.",
    "k": "Typologie"
   },
   {
    "f": "Frontoffice oder Backoffice: Sachbearbeitung ohne direkten Kundenkontakt?",
    "b": "Backoffice. Das Frontoffice hat den direkten Kundenkontakt.",
    "k": "Typologie"
   },
   {
    "f": "Wofür steht FCR?",
    "b": "First Call Resolution — das Anliegen wird beim ersten Kontakt vollständig gelöst, ohne weitere Mitarbeiter.",
    "k": "Typologie"
   },
   {
    "f": "Cross-Selling oder Up-Selling: Der Kunde nimmt statt des Basistarifs den Premiumtarif.",
    "b": "Up-Selling — höherwertige Variante desselben Produkts. Cross-Selling wäre ein zusätzliches, anderes Produkt.",
    "k": "Leistungen"
   },
   {
    "f": "Nennen Sie die vier Inbound-Leistungen.",
    "b": "Bestell- und Auftragsannahme, technische Hotline/Support, Kundenservice, Informationshotline.",
    "k": "Leistungen"
   },
   {
    "f": "Nennen Sie die sechs Outbound-Leistungen.",
    "b": "Telesales, Adress- und Datenqualifizierung, Kundenbindung, Kundenrückgewinnung, Mahn- und Inkassowesen, Markt- und Meinungsforschung.",
    "k": "Leistungen"
   },
   {
    "f": "Was ist ein Customer-Care-Call?",
    "b": "Ein Kundenbindungsanruf ohne konkreten Verkaufsanlass — im Buch auch „Kuschelcall“ genannt.",
    "k": "Leistungen"
   },
   {
    "f": "Was ist Direct Response und wozu dient ein Overflow-Callcenter?",
    "b": "Bestellung unmittelbar nach einem TV- oder Radiospot. Das Overflow-Callcenter fängt die Anrufspitzen ab.",
    "k": "Leistungen"
   },
   {
    "f": "Was ist ein Help Desk?",
    "b": "Eine unternehmensintern genutzte technische Hotline bzw. Supportfunktion.",
    "k": "Leistungen"
   },
   {
    "f": "Welche drei Zielgruppen unterscheidet man?",
    "b": "B2C (Privatkunden), B2B (Geschäftskunden), B2G (Behörden).",
    "k": "Leistungen"
   },
   {
    "f": "Lettershop oder Fulfillment: Lagerhaltung, Versand, Rechnung und Retouren?",
    "b": "Fulfillment — die komplette Auftragsabwicklung. Der Lettershop erledigt nur die Versandarbeiten eines Mailings.",
    "k": "Leistungen"
   },
   {
    "f": "Welche drei Zeitpunkte des Service unterscheidet das Buch?",
    "b": "Pre-Sales (vor dem Kauf), Sales (kaufbegleitend), After-Sales (nach dem Kauf).",
    "k": "Leistungen"
   },
   {
    "f": "Wie definiert das Buch Service?",
    "b": "Zusätzliche, begleitende Dienstleistungen über das eigentliche Produkt hinaus — unabhängig davon, ob eine Sach- oder Dienstleistung verkauft wird.",
    "k": "Leistungen"
   },
   {
    "f": "Was ist eine Benchmark?",
    "b": "Ein Vergleichsmaßstab: Vergleichsdaten werden zum Ziel für Verbesserungsprozesse im eigenen Unternehmen.",
    "k": "Leistungen"
   },
   {
    "f": "Warum sind Callcenter untereinander schwer vergleichbar?",
    "b": "Wegen der Heterogenität der Branche — im reinen Outbound gibt es keinen Servicelevel, bei externen Dienstleistern wechseln Kennzahlen je Auftraggeber.",
    "k": "Leistungen"
   },
   {
    "f": "Welche Kennzahlen weist die Dialogfix GmbH aus?",
    "b": "416 Mitarbeiter, 280 Seats, 12.500 Anrufe/Tag, Servicelevel 80/20, FCR 85 %, AHT 6 Minuten, Umsatz 9,2 Mio. €.",
    "k": "Typologie"
   },
   {
    "f": "Welche vier IHK-Hierarchiestufen gibt es im Callcenter?",
    "b": "Agent, Teamleiter (Supervisor), Manager, Trainer. Der Agent ist die Basisqualifikation ohne Führungsverantwortung.",
    "k": "Mitarbeiter"
   },
   {
    "f": "Wie viele Mitarbeiter führt ein Callcenter-Teamleiter in der Regel?",
    "b": "10 bis 20 Mitarbeiter.",
    "k": "Mitarbeiter"
   },
   {
    "f": "Hard Skills oder Soft Skills: Frustrationstoleranz?",
    "b": "Soft Skill. Hard Skills sind überprüfbare Kenntnisse und formale Qualifikationen.",
    "k": "Mitarbeiter"
   },
   {
    "f": "Welche Soft Skills sind typisch für Inbound, welche für Outbound?",
    "b": "Inbound: Geduld, Einfühlungsvermögen, Zuhören. Outbound: Überzeugungskraft, Ehrgeiz, Frustrationstoleranz, Selbstvertrauen.",
    "k": "Mitarbeiter"
   },
   {
    "f": "Wie lange dauern die beiden DM-Ausbildungen und wie hängen sie zusammen?",
    "b": "Servicefachkraft 2 Jahre, Kaufleute 3 Jahre. Die zweijährige Ausbildung wird auf die dreijährige angerechnet.",
    "k": "Ausbildung"
   },
   {
    "f": "Welche Inhalte haben Kaufleute zusätzlich zur Servicefachkraft?",
    "b": "Personal, kaufmännische Steuerung und Kontrolle, Qualitätssicherung der Auftragsdurchführung, Vertrieb und Marketing.",
    "k": "Ausbildung"
   },
   {
    "f": "Welche drei IHK-Aufstiegsfortbildungen nennt das Buch?",
    "b": "Wirtschaftsfachwirt (IHK), Dienstleistungsfachwirt (IHK), Betriebswirt (IHK) — vergleichbar mit Meister oder Techniker, 2 bis 3 Jahre berufsbegleitend.",
    "k": "Ausbildung"
   },
   {
    "f": "Aus welchen drei Phasen besteht eine Präsentation und wie ist die Zeitverteilung?",
    "b": "Eröffnung, Hauptteil, Abschluss. Eröffnung und Abschluss zusammen höchstens 20 % der Gesamtzeit.",
    "k": "Präsentation"
   },
   {
    "f": "Nennen Sie die vier Verständlichmacher nach Schulz von Thun.",
    "b": "Einfachheit, Gliederung, Prägnanz, Stimulanz.",
    "k": "Präsentation"
   },
   {
    "f": "Welches Diagramm für Entwicklungen über die Zeit, welches für Anteile?",
    "b": "Kurvendiagramm für Zeitverläufe, Kreis- bzw. Tortendiagramm für Anteile an einem Gesamtwert.",
    "k": "Präsentation"
   },
   {
    "f": "Bis zu welcher Teilnehmerzahl eignen sich Pinnwand, Whiteboard und Flipchart?",
    "b": "Ca. 20 Teilnehmer. Darüber sind Overheadprojektor oder Beamer die bessere Wahl.",
    "k": "Präsentation"
   },
   {
    "f": "Was bezeichnet Proxemik — und was sind die Feedbackregeln?",
    "b": "Proxemik ist die Position des Vortragenden im Raum. Feedback ist wertungsfrei, wird in der Ich-Form gegeben und ist ein Angebot, keine Verpflichtung.",
    "k": "Präsentation"
   }
  ],
  "quiz": [
   {
    "t": "mc",
    "q": "Ohne welche Erfindung von 1973 wären Massen-Callcenter kaum denkbar?",
    "a": [
     "Das Faxgerät",
     "Die Automatic Call Distribution von Rockwell",
     "Die IVR-Ansage",
     "Das Mobiltelefon"
    ],
    "c": 1,
    "e": "Die ACD verteilt eingehende Anrufe automatisch — der technische Durchbruch.",
    "k": "Branche & Historie",
    "d": "medium",
    "s": "LF2 1.1"
   },
   {
    "t": "mc",
    "q": "Warum wurden 2006 eigene Ausbildungsberufe im Dialogmarketing geschaffen?",
    "a": [
     "Weil die IHK es vorschrieb",
     "Weil qualifizierte Mitarbeiter fehlten",
     "Weil die EU es verlangte",
     "Weil Social Media aufkam"
    ],
    "c": 1,
    "e": "Reaktion auf den Mangel an qualifizierten Mitarbeitern.",
    "k": "Branche & Historie",
    "d": "medium",
    "s": "LF2 1.2"
   },
   {
    "t": "tf",
    "q": "Dialogmarketing wird in der amtlichen Statistik als eigene Branche geführt.",
    "v": false,
    "e": "Falsch. Es ist eine Querschnittsbranche und taucht in der amtlichen Statistik nicht als eigene Branche auf.",
    "k": "Branche & Historie",
    "d": "hard",
    "s": "LF2 1.1"
   },
   {
    "t": "mc",
    "q": "Ein deutsches Unternehmen gründet in Polen eine eigene Tochter für seine Hotline. Wie heißt das?",
    "a": [
     "Outsourcing",
     "Offshoring",
     "Fulfillment",
     "Preselection"
    ],
    "c": 1,
    "e": "Verlagerung ins Ausland bei organisatorischem Verbleib im Unternehmen = Offshoring.",
    "k": "Branche & Historie",
    "d": "hard",
    "s": "LF2 1.1.3"
   },
   {
    "t": "mc",
    "q": "Dialogfix vergibt die E-Mail-Bearbeitung an ein Unternehmen in der Nachbarstadt. Wie heißt das?",
    "a": [
     "Offshoring",
     "Outsourcing",
     "Nearshoring",
     "Call Blending"
    ],
    "c": 1,
    "e": "Organisatorische Auslagerung an ein anderes Unternehmen — die Entfernung spielt keine Rolle.",
    "k": "Branche & Historie",
    "d": "medium",
    "s": "LF2 1.1.3"
   },
   {
    "t": "cloze",
    "q": "Offshoring und Outsourcing",
    "txt": "Beim {{1}} verlagert ein Unternehmen Tätigkeiten ins Ausland, sie bleiben aber organisatorisch im Unternehmen. Beim {{2}} werden Tätigkeiten organisatorisch an ein anderes Unternehmen ausgelagert; die räumliche Entfernung spielt dabei {{3}} Rolle.",
    "gaps": [
     {
      "s": "Offshoring",
      "o": [
       "Outsourcing",
       "Fulfillment"
      ]
     },
     {
      "s": "Outsourcing",
      "o": [
       "Offshoring",
       "Benchmarking"
      ]
     },
     {
      "s": "keine",
      "o": [
       "die entscheidende",
       "eine untergeordnete"
      ]
     }
    ],
    "e": "Offshoring = Ort, Outsourcing = Organisation.",
    "k": "Branche & Historie",
    "d": "medium",
    "s": "LF2 1.1.3"
   },
   {
    "t": "mc",
    "q": "Welcher Faktor hat Irland zum bedeutenden Callcenter-Standort gemacht?",
    "a": [
     "Staatliche Callcenter-Subventionen",
     "Sprachliche Vorteile plus niedrige Steuern und Sozialabgaben",
     "Die höchste Mitarbeiterqualifikation Europas",
     "Die Nähe zum französischsprachigen Markt"
    ],
    "c": 1,
    "e": "Den französischsprachigen Markt bedienen Frankreich und Belgien.",
    "k": "Branche & Historie",
    "d": "medium",
    "s": "LF2 1.1.3"
   },
   {
    "t": "multi",
    "q": "Welche Faktoren entscheiden laut Buch über den Callcenter-Standort?",
    "a": [
     "Lohnniveau und Steuern",
     "Immobilienpreise",
     "Kommunikative und soziale Kompetenz der Mitarbeiter",
     "Die Rechtsform des Betreibers"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Kostenstruktur und Qualifikation — nicht die Rechtsform.",
    "k": "Branche & Historie",
    "d": "medium",
    "s": "LF2 1.1.3"
   },
   {
    "t": "order",
    "q": "Bringen Sie die Gesellschaftsphasen des Strukturwandels in die richtige Reihenfolge.",
    "items": [
     "Agrargesellschaft",
     "Industriegesellschaft",
     "Dienstleistungsgesellschaft",
     "Wissensgesellschaft"
    ],
    "e": "Bis ~1880, bis ~1980, ab ~1980, ab ~2000.",
    "k": "Sektoren & DL",
    "d": "medium",
    "s": "LF2 1.2"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jede Tätigkeit dem richtigen Wirtschaftssektor zu.",
    "pairs": [
     [
      "Landwirtschaft",
      "Primärsektor"
     ],
     [
      "Baugewerbe",
      "Sekundärsektor"
     ],
     [
      "Versicherungen",
      "Tertiärsektor"
     ]
    ],
    "e": "Urproduktion – industrielle Produktion – Dienstleistungen.",
    "k": "Sektoren & DL",
    "d": "easy",
    "s": "LF2 1.2"
   },
   {
    "t": "calc",
    "q": "Der Tertiärsektor umfasste 1970 rund 45 % und 2018 rund 74 % der Erwerbstätigen. Um wie viele Prozentpunkte ist der Anteil gestiegen?",
    "ans": [
     "29"
    ],
    "unit": "Prozentpunkte",
    "hint": "Differenz, nicht Prozentveränderung.",
    "e": "74 − 45 = 29 Prozentpunkte. Achtung: die relative Steigerung wäre etwa 64 %.",
    "k": "Sektoren & DL",
    "d": "hard",
    "s": "LF2 1.2"
   },
   {
    "t": "mc",
    "q": "Ein Kunde kann eine Telefonberatung nicht auf Vorrat kaufen. Welches Prinzip erklärt das?",
    "a": [
     "Vertrauensgutprinzip",
     "Uno-actu-Prinzip",
     "Äquivalenzprinzip",
     "Benchmarkprinzip"
    ],
    "c": 1,
    "e": "Erstellung und Nutzung fallen zusammen — deshalb keine Lagerfähigkeit.",
    "k": "Sektoren & DL",
    "d": "medium",
    "s": "LF2 1.3"
   },
   {
    "t": "odd",
    "q": "Welches Merkmal ist bei einer Dienstleistung NICHT negativ ausgeprägt?",
    "a": [
     "Physische Vorhandenheit",
     "Lagerfähigkeit",
     "Kundenbeteiligung bei der Erstellung",
     "Vorführmöglichkeit"
    ],
    "c": 2,
    "e": "Die Kundenbeteiligung ist notwendig, also positiv ausgeprägt. Alle anderen Merkmale fehlen bei Dienstleistungen.",
    "k": "Sektoren & DL",
    "d": "hard",
    "s": "LF2 1.3"
   },
   {
    "t": "mc",
    "q": "Warum gelten Dienstleistungen als Vertrauensgüter?",
    "a": [
     "Weil sie immer teurer sind",
     "Weil die Qualität vorab nicht prüfbar ist",
     "Weil sie gesetzlich geschützt sind",
     "Weil sie nur von Fachleuten erbracht werden"
    ],
    "c": 1,
    "e": "Vor der Inanspruchnahme besteht hohe Unsicherheit.",
    "k": "Sektoren & DL",
    "d": "medium",
    "s": "LF2 1.3"
   },
   {
    "t": "mc",
    "q": "Ein Callcenter-Dienstleister übernimmt komplett die Hotline eines Herstellers. Welche Art von Dienstleistung?",
    "a": [
     "Produktbegleitende Dienstleistung",
     "Originäre Dienstleistung",
     "Sachleistung",
     "Mischleistung"
    ],
    "c": 1,
    "e": "Eine eigenständige Leistung, die nicht an einer eigenen Sachleistung hängt.",
    "k": "Sektoren & DL",
    "d": "hard",
    "s": "LF2 1.3"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jede Maßnahme dem richtigen P zu.",
    "pairs": [
     [
      "Rabattaktion",
      "Price"
     ],
     [
      "Werbebanner",
      "Promotion"
     ],
     [
      "Direktversand",
      "Place"
     ],
     [
      "Garantieleistung",
      "Product"
     ]
    ],
    "e": "Preis, Kommunikation, Vertrieb, Produktpolitik.",
    "k": "Marketing",
    "d": "medium",
    "s": "LF2 2.1"
   },
   {
    "t": "multi",
    "q": "Welche Ps kommen im Dienstleistungsmarketing zu den vier klassischen hinzu?",
    "a": [
     "People",
     "Processes",
     "Physical facilities",
     "Positioning"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "7P = 4P + People, Processes, Physical facilities.",
    "k": "Marketing",
    "d": "medium",
    "s": "LF2 2.1"
   },
   {
    "t": "mc",
    "q": "Ein Callcenter schult seine Agents in Gesprächsführung. Welchem P ist das zuzuordnen?",
    "a": [
     "Promotion",
     "People",
     "Processes",
     "Physical facilities"
    ],
    "c": 1,
    "e": "People umfasst Auswahl, Aus- und Weiterbildung, Verhalten und Führung der Mitarbeiter.",
    "k": "Marketing",
    "d": "hard",
    "s": "LF2 2.1"
   },
   {
    "t": "mc",
    "q": "Zu welchem P gehört das Dialogmarketing schwerpunktmäßig?",
    "a": [
     "Product",
     "Price",
     "Promotion",
     "Place"
    ],
    "c": 2,
    "e": "Zur Kommunikationspolitik.",
    "k": "Marketing",
    "d": "easy",
    "s": "LF2 2.1"
   },
   {
    "t": "tf",
    "q": "Klassisches Marketing zielt auf Response, Dialogmarketing auf Bekanntheitsgrad.",
    "v": false,
    "e": "Falsch — genau umgekehrt. Klassisch: Bekanntheit. Dialog: direkte Reaktion.",
    "k": "Marketing",
    "d": "medium",
    "s": "LF2 2.1"
   },
   {
    "t": "cloze",
    "q": "Klassisch gegen Dialog",
    "txt": "Klassisches Marketing zielt auf den {{1}} und hat {{2}} Streuverluste. Dialogmarketing zielt auf {{3}} und hat {{4}} Streuverluste; es wird auch {{5}} genannt.",
    "gaps": [
     {
      "s": "Bekanntheitsgrad",
      "o": [
       "Response",
       "Marktanteil"
      ]
     },
     {
      "s": "hohe",
      "o": [
       "geringe"
      ]
     },
     {
      "s": "Response",
      "o": [
       "Bekanntheit",
       "Image"
      ]
     },
     {
      "s": "geringe",
      "o": [
       "hohe"
      ]
     },
     {
      "s": "One-to-One-Marketing",
      "o": [
       "Mass Marketing",
       "Performance Marketing"
      ]
     }
    ],
    "e": "Bekanntheit mit Streuverlust gegen Response ohne Streuverlust.",
    "k": "Marketing",
    "d": "medium",
    "s": "LF2 2.1"
   },
   {
    "t": "mc",
    "q": "Ein Kunde ruft an, um eine Rechnung zu reklamieren. Inbound oder Outbound?",
    "a": [
     "Inbound, der Kunde initiiert",
     "Outbound, das Unternehmen bearbeitet",
     "Weder noch, das ist Backoffice",
     "Blending"
    ],
    "c": 0,
    "e": "Entscheidend ist, wer den Kontakt initiiert.",
    "k": "Typologie",
    "d": "easy",
    "s": "LF2 2.2.1"
   },
   {
    "t": "mc",
    "q": "Welchen Anteil aller Gespräche macht Outbound ungefähr aus?",
    "a": [
     "Etwa ein Zehntel",
     "Etwa ein Drittel",
     "Etwa die Hälfte",
     "Etwa zwei Drittel"
    ],
    "c": 1,
    "e": "Rund ein Drittel — Inbound dominiert.",
    "k": "Typologie",
    "d": "medium",
    "s": "LF2 2.2.1"
   },
   {
    "t": "mc",
    "q": "Ein Dienstleister bearbeitet für seine Auftraggeber sowohl eingehende als auch ausgehende Kontakte. Welcher Typ der 9-Felder-Typologie?",
    "a": [
     "Typ 3",
     "Typ 5",
     "Typ 6",
     "Typ 9"
    ],
    "c": 2,
    "e": "Extern plus Mischform = Typ 6, wie die KommunikativAktiv KG.",
    "k": "Typologie",
    "d": "hard",
    "s": "LF2 2.2.1"
   },
   {
    "t": "mc",
    "q": "Welche zwei Achsen bilden die 9-Felder-Typologie?",
    "a": [
     "Größe und Umsatz",
     "Richtung und organisatorische Einbindung",
     "Branche und Region",
     "Technik und Personal"
    ],
    "c": 1,
    "e": "Inbound/Outbound/Misch gegen intern/extern/Misch.",
    "k": "Typologie",
    "d": "medium",
    "s": "LF2 2.2.1"
   },
   {
    "t": "multi",
    "q": "Welche Vorteile nennt das Buch zum Inhouse-Callcenter?",
    "a": [
     "Bessere Bearbeitung komplexer Sachverhalte",
     "Unmittelbare Qualitätskontrolle",
     "Flexible Reaktion auf schwankendes Volumen",
     "Meist geringere Kosten"
    ],
    "cs": [
     0,
     1
    ],
    "e": "Flexibilität und Kostenvorteil sprechen gerade für das externe Callcenter.",
    "k": "Typologie",
    "d": "hard",
    "s": "LF2 2.2.1"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jeder Organisationsform ihr charakteristisches Merkmal zu.",
    "pairs": [
     [
      "Inhouse-Callcenter",
      "eigene Produktkenntnis und unmittelbare Qualitätskontrolle"
     ],
     [
      "Externes Callcenter",
      "flexibel bei Volumenspitzen, häufig günstiger"
     ],
     [
      "Overflow-Callcenter",
      "fängt Anrufspitzen nach Direct-Response-Spots ab"
     ]
    ],
    "e": "Inhouse punktet bei Tiefe und Kontrolle, extern bei Flexibilität und Kosten. Das Overflow-Callcenter ist ein Sonderfall für Spitzenlast.",
    "k": "Typologie",
    "d": "medium",
    "s": "LF2 2.2.1"
   },
   {
    "t": "mc",
    "q": "Ein Unternehmen bearbeitet Anliegen per Telefon, E-Mail, Chat und Messenger. Wie heißt das korrekt?",
    "a": [
     "Callcenter",
     "Contact Center",
     "Help Desk",
     "Backoffice"
    ],
    "c": 1,
    "e": "Sobald mehrere Kanäle bedient werden, ist es ein Contact Center.",
    "k": "Typologie",
    "d": "easy",
    "s": "LF2 2.2.1"
   },
   {
    "t": "mc",
    "q": "Ein Agent nimmt den Anruf entgegen, die weiterführende Sachbearbeitung übernimmt eine andere Abteilung. Wie heißt diese?",
    "a": [
     "Frontoffice",
     "Backoffice",
     "Help Desk",
     "Overflow"
    ],
    "c": 1,
    "e": "Backoffice arbeitet ohne direkten Kundenkontakt.",
    "k": "Typologie",
    "d": "easy",
    "s": "LF2 2.2.1"
   },
   {
    "t": "type",
    "q": "Welche Kennzahl misst, ob das Anliegen beim ersten Kontakt vollständig gelöst wurde?",
    "ans": [
     "FCR",
     "First Call Resolution",
     "Erstlösungsquote"
    ],
    "e": "First Call Resolution — ohne Einschaltung weiterer Mitarbeiter.",
    "k": "Typologie",
    "d": "medium",
    "s": "LF2 2.2.1"
   },
   {
    "t": "mc",
    "q": "Der Kunde bestellt ein Handy und nimmt zusätzlich eine Schutzhülle. Wie heißt das?",
    "a": [
     "Up-Selling",
     "Cross-Selling",
     "Direct Response",
     "Customer Care"
    ],
    "c": 1,
    "e": "Ein zusätzliches, anderes Produkt = Cross-Selling. Ein teureres Handy wäre Up-Selling.",
    "k": "Leistungen",
    "d": "medium",
    "s": "LF2 2.2.2"
   },
   {
    "t": "mc",
    "q": "Der Kunde wollte den Basistarif und schließt nach dem Gespräch den Premiumtarif ab. Wie heißt das?",
    "a": [
     "Cross-Selling",
     "Up-Selling",
     "Direct Response",
     "Blending"
    ],
    "c": 1,
    "e": "Höherwertige Variante desselben Produkts.",
    "k": "Leistungen",
    "d": "medium",
    "s": "LF2 2.2.2"
   },
   {
    "t": "cloze",
    "q": "Verkaufsarten",
    "txt": "Beim {{1}} wird ein zusätzliches, anderes Produkt verkauft. Beim {{2}} wird eine höherwertige Variante desselben Produkts verkauft.",
    "gaps": [
     {
      "s": "Cross-Selling",
      "o": [
       "Up-Selling",
       "Direct Response"
      ]
     },
     {
      "s": "Up-Selling",
      "o": [
       "Cross-Selling",
       "Telesales"
      ]
     }
    ],
    "e": "Cross = quer zu anderen Produkten, Up = nach oben im selben Produkt.",
    "k": "Leistungen",
    "d": "easy",
    "s": "LF2 2.2.2"
   },
   {
    "t": "multi",
    "q": "Welche Leistungen zählen zum Inbound?",
    "a": [
     "Bestell- und Auftragsannahme",
     "Technische Hotline",
     "Kundenservice",
     "Telefonverkauf"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Telesales ist eine Outbound-Leistung. Die vierte Inbound-Leistung ist die Informationshotline.",
    "k": "Leistungen",
    "d": "medium",
    "s": "LF2 2.2.2"
   },
   {
    "t": "multi",
    "q": "Welche Leistungen zählen zum Outbound?",
    "a": [
     "Adress- und Datenqualifizierung",
     "Kundenrückgewinnung",
     "Mahn- und Inkassowesen",
     "Informationshotline"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Die Informationshotline ist Inbound.",
    "k": "Leistungen",
    "d": "medium",
    "s": "LF2 2.2.2"
   },
   {
    "t": "odd",
    "q": "Welche Leistung passt nicht zu den sechs Outbound-Leistungen?",
    "a": [
     "Telesales",
     "Markt- und Meinungsforschung",
     "Kundenbindung",
     "Technischer Support"
    ],
    "c": 3,
    "e": "Technischer Support ist eine Inbound-Leistung.",
    "k": "Leistungen",
    "d": "medium",
    "s": "LF2 2.2.2"
   },
   {
    "t": "mc",
    "q": "Ein Agent ruft Bestandskunden ohne Verkaufsanlass an, um nach der Zufriedenheit zu fragen. Wie heißt das im Buch?",
    "a": [
     "Telesales",
     "Customer-Care-Call",
     "Direct Response",
     "Help Desk"
    ],
    "c": 1,
    "e": "Kundenbindungsanruf ohne Verkaufsanlass, im Buch auch „Kuschelcall“.",
    "k": "Leistungen",
    "d": "medium",
    "s": "LF2 2.2.2"
   },
   {
    "t": "mc",
    "q": "Nach einem TV-Spot bricht das Anrufvolumen über die Kapazität. Welche Lösung nennt das Buch?",
    "a": [
     "Call Blending",
     "Overflow-Callcenter",
     "Preselection",
     "Backoffice"
    ],
    "c": 1,
    "e": "Ein Overflow-Callcenter fängt die Spitzen bei Direct Response ab.",
    "k": "Leistungen",
    "d": "hard",
    "s": "LF2 2.2.2"
   },
   {
    "t": "mc",
    "q": "Wozu dient das telefonische Mahn- und Inkassowesen?",
    "a": [
     "Zur Kundenrückgewinnung",
     "Zur Vermeidung eines gerichtlichen Mahnverfahrens",
     "Zur Datenqualifizierung",
     "Zum Cross-Selling"
    ],
    "c": 1,
    "e": "Zahlungserinnerung und Zahlungsplan sollen das gerichtliche Verfahren vermeiden.",
    "k": "Leistungen",
    "d": "medium",
    "s": "LF2 2.2.2"
   },
   {
    "t": "mc",
    "q": "Ein Callcenter bearbeitet Anfragen von Stadtverwaltungen. Welche Zielgruppe?",
    "a": [
     "B2C",
     "B2B",
     "B2G",
     "B2P"
    ],
    "c": 2,
    "e": "Business-to-Government: Behörden.",
    "k": "Leistungen",
    "d": "easy",
    "s": "LF2 2.2.2"
   },
   {
    "t": "mc",
    "q": "Ein Dienstleister übernimmt Lagerhaltung, Versand, Rechnung und Retouren. Welche Zusatzleistung?",
    "a": [
     "Lettershop",
     "Fulfillment",
     "E-Commerce",
     "Backoffice"
    ],
    "c": 1,
    "e": "Fulfillment = komplette Auftragsabwicklung einschließlich Retouren.",
    "k": "Leistungen",
    "d": "medium",
    "s": "LF2 2.2.3"
   },
   {
    "t": "mc",
    "q": "Ein Dienstleister druckt, kuvertiert und versendet einen Katalog. Welche Zusatzleistung?",
    "a": [
     "Fulfillment",
     "E-Commerce",
     "Lettershop",
     "Direct Response"
    ],
    "c": 2,
    "e": "Der Lettershop deckt die Versandarbeiten eines Mailings ab.",
    "k": "Leistungen",
    "d": "medium",
    "s": "LF2 2.2.3"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jede Beschreibung der richtigen Zusatzleistung zu.",
    "pairs": [
     [
      "Drucken, kuvertieren, versenden eines Mailings",
      "Lettershop"
     ],
     [
      "Lager, Versand, Rechnung, Retouren",
      "Fulfillment"
     ],
     [
      "Webshop einrichten und warten",
      "E-Commerce"
     ]
    ],
    "e": "Der Lettershop verschickt Werbung, das Fulfillment die bestellte Ware.",
    "k": "Leistungen",
    "d": "medium",
    "s": "LF2 2.2.3"
   },
   {
    "t": "mc",
    "q": "Ein Mitarbeiter ruft ein halbes Jahr nach der Lieferung an und fragt nach der Zufriedenheit. Welcher Service?",
    "a": [
     "Pre-Sales-Service",
     "Sales-Service",
     "After-Sales-Service",
     "Kein Service, sondern Outbound-Verkauf"
    ],
    "c": 2,
    "e": "Nach dem Kauf = After-Sales.",
    "k": "Leistungen",
    "d": "easy",
    "s": "LF2 2.2.4"
   },
   {
    "t": "mc",
    "q": "Eine kostenlose 0800-Bestellhotline rund um die Uhr ist ein Beispiel für …",
    "a": [
     "Pre-Sales-Service",
     "Sales-Service",
     "After-Sales-Service",
     "Fulfillment"
    ],
    "c": 0,
    "e": "Sie wirkt vor dem Kaufabschluss.",
    "k": "Leistungen",
    "d": "medium",
    "s": "LF2 2.2.4"
   },
   {
    "t": "tf",
    "q": "Die Unterscheidung Pre-, Sales- und After-Sales-Service gilt nur beim Verkauf von Sachleistungen.",
    "v": false,
    "e": "Falsch. Es spielt keine Rolle, ob eine Sach- oder Dienstleistung verkauft wird.",
    "k": "Leistungen",
    "d": "medium",
    "s": "LF2 2.2.4"
   },
   {
    "t": "cloze",
    "q": "Servicezeitpunkte",
    "txt": "Service vor dem Kauf heißt {{1}}, kaufbegleitend {{2}} und nach dem Kauf {{3}}.",
    "gaps": [
     {
      "s": "Pre-Sales-Service",
      "o": [
       "After-Sales-Service",
       "Sales-Service"
      ]
     },
     {
      "s": "Sales-Service",
      "o": [
       "Pre-Sales-Service",
       "Fulfillment"
      ]
     },
     {
      "s": "After-Sales-Service",
      "o": [
       "Pre-Sales-Service",
       "Sales-Service"
      ]
     }
    ],
    "e": "Vorher, währenddessen, danach.",
    "k": "Leistungen",
    "d": "easy",
    "s": "LF2 2.2.4"
   },
   {
    "t": "multi",
    "q": "Welche Servicemerkmale nennt das Buch?",
    "a": [
     "Gute und kostengünstige Erreichbarkeit",
     "Kurze Wartezeiten",
     "Rückrufservice",
     "Möglichst lange Gesprächsdauer"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Rasche Erledigung ist Ziel — nicht lange Gespräche.",
    "k": "Leistungen",
    "d": "medium",
    "s": "LF2 2.2.4"
   },
   {
    "t": "tf",
    "q": "Guter Service ist für das Unternehmen kostenneutral.",
    "v": false,
    "e": "Falsch. Ein menschlicher Gesprächspartner ist immer ein Kostenfaktor — das Unternehmen muss abwägen.",
    "k": "Leistungen",
    "d": "medium",
    "s": "LF2 2.2.4"
   },
   {
    "t": "mc",
    "q": "Dialogfix setzt das Ziel, die Anrufdauer binnen sechs Monaten von 180 auf 150 Sekunden zu senken. Fachbegriff?",
    "a": [
     "Servicelevel",
     "Benchmark",
     "Auslastung",
     "AHT-Korridor"
    ],
    "c": 1,
    "e": "Eine als Ziel gesetzte Vergleichsgröße für den Verbesserungsprozess.",
    "k": "Leistungen",
    "d": "medium",
    "s": "LF2 2.2.5"
   },
   {
    "t": "calc",
    "q": "Die Anrufdauer soll von 180 auf 150 Sekunden sinken. Um wie viel Prozent ist das?",
    "ans": [
     "16,67",
     "16.67",
     "16,7",
     "16.7"
    ],
    "unit": "%",
    "hint": "Differenz durch Ausgangswert.",
    "e": "30 / 180 = 0,1667 → rund 16,67 %. Bezugsgröße ist der Ausgangswert 180, nicht der Zielwert.",
    "k": "Leistungen",
    "d": "hard",
    "s": "LF2 2.2.5"
   },
   {
    "t": "mc",
    "q": "Warum ist der Servicelevel in einem reinen Outbound-Callcenter kaum aussagekräftig?",
    "a": [
     "Weil dort keine Anrufe eingehen, die warten könnten",
     "Weil Outbound verboten ist",
     "Weil Outbound keine Kennzahlen kennt",
     "Weil die Bundesnetzagentur es untersagt"
    ],
    "c": 0,
    "e": "Der Servicelevel misst die Annahme eingehender Anrufe.",
    "k": "Leistungen",
    "d": "hard",
    "s": "LF2 2.2.5"
   },
   {
    "t": "mc",
    "q": "Warum lassen sich externe Dienstleister schwer mit Kennzahlen vergleichen?",
    "a": [
     "Weil sie keine Kennzahlen erheben dürfen",
     "Weil viele Merkmale je nach Auftraggeber wechseln",
     "Weil sie keine Seats haben",
     "Weil sie nicht ins Handelsregister eingetragen sind"
    ],
    "c": 1,
    "e": "Servicelevel, FCR und AHT hängen beim Dienstleister vom jeweiligen Auftrag ab.",
    "k": "Leistungen",
    "d": "hard",
    "s": "LF2 2.2.5"
   },
   {
    "t": "cloze",
    "q": "Unternehmensvergleich",
    "txt": "Die Dialogfix GmbH beschäftigt {{1}} Mitarbeiter auf {{2}} Seats, nimmt täglich rund {{3}} Anrufe entgegen und weist einen Servicelevel von {{4}} aus.",
    "gaps": [
     {
      "s": "416",
      "o": [
       "280",
       "80"
      ]
     },
     {
      "s": "280",
      "o": [
       "416",
       "50"
      ]
     },
     {
      "s": "12.500",
      "o": [
       "1.400",
       "25.000"
      ]
     },
     {
      "s": "80/20",
      "o": [
       "85/15",
       "90/30"
      ]
     }
    ],
    "e": "416 / 280 / 12.500 / 80-20.",
    "k": "Typologie",
    "d": "hard",
    "s": "LF2 2.2.5"
   },
   {
    "t": "calc",
    "q": "Dialogfix hat 416 Mitarbeiter auf 280 Seats. Wie viele Mitarbeiter teilen sich rechnerisch einen Seat? (auf zwei Nachkommastellen)",
    "ans": [
     "1,49",
     "1.49"
    ],
    "unit": "Mitarbeiter je Seat",
    "hint": "Mitarbeiter durch Seats.",
    "e": "416 / 280 = 1,4857 → 1,49. Schichtbetrieb erklärt, warum es mehr Mitarbeiter als Arbeitsplätze gibt.",
    "k": "Typologie",
    "d": "hard",
    "s": "LF2 2.2.5"
   },
   {
    "t": "mc",
    "q": "Welche Hierarchiestufe hat keine Führungsverantwortung?",
    "a": [
     "Callcenter-Agent",
     "Teamleiter",
     "Manager",
     "Trainer"
    ],
    "c": 0,
    "e": "Der Agent ist die Basisqualifikation.",
    "k": "Mitarbeiter",
    "d": "easy",
    "s": "LF2 2.3"
   },
   {
    "t": "mc",
    "q": "Wie viele Mitarbeiter führt ein Callcenter-Teamleiter in der Regel?",
    "a": [
     "3–5",
     "10–20",
     "25–40",
     "Über 50"
    ],
    "c": 1,
    "e": "In der Regel 10 bis 20 Mitarbeiter.",
    "k": "Mitarbeiter",
    "d": "medium",
    "s": "LF2 2.3"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jede Fähigkeit dem passenden Einsatzbereich zu.",
    "pairs": [
     [
      "Geduld und Einfühlungsvermögen",
      "typisch Inbound"
     ],
     [
      "Frustrationstoleranz und Überzeugungskraft",
      "typisch Outbound"
     ],
     [
      "Zertifikat in MS Office",
      "Hard Skill"
     ]
    ],
    "e": "Inbound braucht Zuhören, Outbound Durchhaltevermögen. Formale Nachweise sind Hard Skills.",
    "k": "Mitarbeiter",
    "d": "hard",
    "s": "LF2 2.3"
   },
   {
    "t": "odd",
    "q": "Welche Eigenschaft ist kein Soft Skill?",
    "a": [
     "Einfühlungsvermögen",
     "Frustrationstoleranz",
     "Nachgewiesene Englischkenntnisse Niveau B2",
     "Positives Denken"
    ],
    "c": 2,
    "e": "Ein Sprachzertifikat ist eine überprüfbare Qualifikation, also ein Hard Skill.",
    "k": "Mitarbeiter",
    "d": "medium",
    "s": "LF2 2.3"
   },
   {
    "t": "calc",
    "q": "Ein Callcenter hat 416 Mitarbeiter. Wie viele Teamleiter braucht es bei einer Führungsspanne von 16 Mitarbeitern?",
    "ans": [
     "26"
    ],
    "unit": "Teamleiter",
    "hint": "Mitarbeiter durch Führungsspanne.",
    "e": "416 / 16 = 26. Die Spanne liegt im genannten Korridor von 10 bis 20.",
    "k": "Mitarbeiter",
    "d": "medium",
    "s": "LF2 2.3"
   },
   {
    "t": "mc",
    "q": "Eine Servicefachkraft will Kauffrau für Dialogmarketing werden. Was gilt?",
    "a": [
     "Sie muss die dreijährige Ausbildung komplett neu beginnen",
     "Die zweijährige Ausbildung wird angerechnet",
     "Ein Wechsel ist nicht vorgesehen",
     "Sie braucht zuerst den Wirtschaftsfachwirt"
    ],
    "c": 1,
    "e": "Die zweijährige Servicefachkraft-Ausbildung wird auf die dreijährige angerechnet.",
    "k": "Ausbildung",
    "d": "medium",
    "s": "LF2 2.3.3"
   },
   {
    "t": "multi",
    "q": "Welche Inhalte haben Kaufleute für Dialogmarketing zusätzlich zur Servicefachkraft?",
    "a": [
     "Personal",
     "Kaufmännische Steuerung und Kontrolle",
     "Vertrieb und Marketing",
     "Telefonische Gesprächsführung"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Gesprächsführung lernen beide. Der Unterschied liegt in Personal, Steuerung, Qualitätssicherung sowie Vertrieb und Marketing.",
    "k": "Ausbildung",
    "d": "hard",
    "s": "LF2 2.3.3"
   },
   {
    "t": "odd",
    "q": "Welche Qualifikation zählt NICHT zu den genannten IHK-Aufstiegsfortbildungen?",
    "a": [
     "Wirtschaftsfachwirt (IHK)",
     "Dienstleistungsfachwirt (IHK)",
     "Betriebswirt (IHK)",
     "ServiceCenter Manager (HTW)"
    ],
    "c": 3,
    "e": "Der ServiceCenter Manager ist eine Hochschulqualifizierung, keine Aufstiegsfortbildung nach BBiG.",
    "k": "Ausbildung",
    "d": "hard",
    "s": "LF2 2.3.4"
   },
   {
    "t": "mc",
    "q": "Womit sind die IHK-Aufstiegsfortbildungen vergleichbar?",
    "a": [
     "Mit dem Bachelorabschluss",
     "Mit dem Meister im Handwerk oder dem Techniker in der Industrie",
     "Mit der Ausbildereignungsprüfung",
     "Mit einem Traineeprogramm"
    ],
    "c": 1,
    "e": "Beide sind Aufstiegsfortbildungen nach dem BBiG.",
    "k": "Ausbildung",
    "d": "medium",
    "s": "LF2 2.3.4"
   },
   {
    "t": "mc",
    "q": "Warum bietet die Branche früh Aufstiegschancen?",
    "a": [
     "Weil gesetzlich vorgeschrieben",
     "Wegen der flachen, flexiblen Hierarchie und interner Besetzung",
     "Weil Stellen unbesetzt bleiben müssen",
     "Weil die IHK es verlangt"
    ],
    "c": 1,
    "e": "Aufstiegspositionen werden oft firmenintern besetzt.",
    "k": "Ausbildung",
    "d": "medium",
    "s": "LF2 2.3.4"
   },
   {
    "t": "order",
    "q": "Bringen Sie die drei Phasen einer Präsentation in die richtige Reihenfolge.",
    "items": [
     "Eröffnung",
     "Hauptteil",
     "Abschluss"
    ],
    "e": "Eröffnung und Abschluss zusammen höchstens 20 % der Gesamtzeit.",
    "k": "Präsentation",
    "d": "easy",
    "s": "LF2 3.1"
   },
   {
    "t": "calc",
    "q": "Eine Präsentation dauert 25 Minuten. Wie viele Minuten dürfen Eröffnung und Abschluss zusammen höchstens beanspruchen?",
    "ans": [
     "5"
    ],
    "unit": "Minuten",
    "hint": "Maximal 20 % der Gesamtzeit.",
    "e": "20 % von 25 = 5 Minuten. Für den Hauptteil bleiben 20 Minuten.",
    "k": "Präsentation",
    "d": "medium",
    "s": "LF2 3.1"
   },
   {
    "t": "mc",
    "q": "Was ist der erste Vorbereitungsschritt einer Präsentation?",
    "a": [
     "Die Medien auswählen",
     "Die Zielgruppe analysieren",
     "Die Folien gestalten",
     "Die Zeit einteilen"
    ],
    "c": 1,
    "e": "Sprachniveau, Größe und Homogenität der Zielgruppe bestimmen alles Weitere.",
    "k": "Präsentation",
    "d": "medium",
    "s": "LF2 3.1"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jedem Verständlichmacher nach Schulz von Thun die passende Umsetzung zu.",
    "pairs": [
     [
      "Einfachheit",
      "Kurze Sätze, geläufige Wörter"
     ],
     [
      "Gliederung",
      "Roter Faden und klare Struktur"
     ],
     [
      "Prägnanz",
      "Beschränkung aufs Wesentliche"
     ],
     [
      "Stimulanz",
      "Farben, Bilder, Beispiele"
     ]
    ],
    "e": "Die vier Verständlichmacher in ihrer typischen Umsetzung.",
    "k": "Präsentation",
    "d": "medium",
    "s": "LF2 3.2"
   },
   {
    "t": "mc",
    "q": "Welcher Verständlichmacher meint: mit wenigen Worten viel sagen?",
    "a": [
     "Einfachheit",
     "Gliederung",
     "Prägnanz",
     "Stimulanz"
    ],
    "c": 2,
    "e": "Prägnanz — Beschränkung auf das Wesentliche.",
    "k": "Präsentation",
    "d": "medium",
    "s": "LF2 3.2"
   },
   {
    "t": "mc",
    "q": "Sie zeigen die Umsatzentwicklung über fünf Jahre. Welches Diagramm?",
    "a": [
     "Kreisdiagramm",
     "Kurvendiagramm",
     "Tabelle",
     "Piktogramm"
    ],
    "c": 1,
    "e": "Kurvendiagramm: Zeit auf der x-Achse, Menge auf der y-Achse.",
    "k": "Präsentation",
    "d": "easy",
    "s": "LF2 3.2"
   },
   {
    "t": "mc",
    "q": "Sie zeigen, wie sich das Kontaktvolumen auf Telefon, E-Mail und Chat verteilt. Welches Diagramm?",
    "a": [
     "Kurvendiagramm",
     "Kreis- bzw. Tortendiagramm",
     "Balkendiagramm über die Zeit",
     "Tabelle"
    ],
    "c": 1,
    "e": "Anteile an einem Gesamtwert gehören ins Kreisdiagramm.",
    "k": "Präsentation",
    "d": "medium",
    "s": "LF2 3.2"
   },
   {
    "t": "tf",
    "q": "Piktogramme sollten möglichst häufig eingesetzt werden, damit die Präsentation lebendig wirkt.",
    "v": false,
    "e": "Falsch. Bei zu häufigem Einsatz nutzen sie sich ab und verlieren ihre Wirkung.",
    "k": "Präsentation",
    "d": "medium",
    "s": "LF2 3.2"
   },
   {
    "t": "mc",
    "q": "Sie moderieren einen Workshop mit 35 Teilnehmern. Welches Medium ist am wenigsten geeignet?",
    "a": [
     "Beamer",
     "Overheadprojektor",
     "Pinnwand",
     "Beide Projektionsmedien sind ungeeignet"
    ],
    "c": 2,
    "e": "Bei Pinnwand, Whiteboard und Flipchart sollte die Teilnehmerzahl ca. 20 nicht überschreiten.",
    "k": "Präsentation",
    "d": "hard",
    "s": "LF2 3.3"
   },
   {
    "t": "mc",
    "q": "Welcher Nachteil ist typisch für das Flipchart?",
    "a": [
     "Keine Einbindung der Teilnehmer möglich",
     "Einmal Geschriebenes kann nicht verändert werden",
     "Es braucht einen Stromanschluss",
     "Es ist nicht transportabel"
    ],
    "c": 1,
    "e": "Beim Whiteboard ist Korrektur möglich, beim Flipchart nicht.",
    "k": "Präsentation",
    "d": "medium",
    "s": "LF2 3.3"
   },
   {
    "t": "mc",
    "q": "Welcher Nachteil ist typisch für das Whiteboard?",
    "a": [
     "Beim Beschriften kein Blickkontakt",
     "Blätter lassen sich nicht abtrennen",
     "Es erlaubt keine Korrekturen",
     "Es erreicht keine 20 Teilnehmer"
    ],
    "c": 0,
    "e": "Wer schreibt, dreht den Teilnehmern den Rücken zu. Zudem kann die Beschriftung verschmieren.",
    "k": "Präsentation",
    "d": "hard",
    "s": "LF2 3.3"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jedem Medium seinen charakteristischen Nachteil zu.",
    "pairs": [
     [
      "Flipchart",
      "Geschriebenes nicht mehr veränderbar"
     ],
     [
      "Whiteboard",
      "Kein Blickkontakt beim Beschriften"
     ],
     [
      "Beamer",
      "Reizüberflutung und kurze Aufmerksamkeitsdauer"
     ],
     [
      "Overheadprojektor",
      "Information nur sichtbar, solange die Folie aufliegt"
     ]
    ],
    "e": "Jedes Medium hat einen typischen Schwachpunkt — genau danach wird in Fallaufgaben gefragt.",
    "k": "Präsentation",
    "d": "hard",
    "s": "LF2 3.3"
   },
   {
    "t": "multi",
    "q": "Welche Vorteile bietet die Pinnwand?",
    "a": [
     "Elemente lassen sich umgruppieren",
     "Teilnehmer können eingebunden werden",
     "Das Ergebnis bleibt sichtbar",
     "Sie eignet sich für 100 Teilnehmer"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Die Teilnehmerzahl sollte ca. 20 nicht überschreiten.",
    "k": "Präsentation",
    "d": "medium",
    "s": "LF2 3.3"
   },
   {
    "t": "type",
    "q": "Wie heißt die Position, die der Vortragende im Raum und zu den Zuhörern einnimmt?",
    "ans": [
     "Proxemik"
    ],
    "e": "Proxemik — weder übertriebene Nähe noch künstliche Distanz.",
    "k": "Präsentation",
    "d": "hard",
    "s": "LF2 3.4"
   },
   {
    "t": "multi",
    "q": "Welche Aspekte gehören zur Durchführung einer Präsentation?",
    "a": [
     "Blickkontakt",
     "Freie Präsentation statt Vorlesen",
     "Gestik und Mimik",
     "Zielgruppenanalyse"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Die Zielgruppenanalyse gehört in die Vorbereitung, nicht in die Durchführung.",
    "k": "Präsentation",
    "d": "hard",
    "s": "LF2 3.4"
   },
   {
    "t": "mc",
    "q": "Welche Aussage über Feedback ist korrekt?",
    "a": [
     "Feedback bewertet die Leistung",
     "Feedback verpflichtet zur Änderung",
     "Feedback beschreibt wertungsfrei Wahrnehmung und Wirkung",
     "Feedback wird in der Wir-Form gegeben"
    ],
    "c": 2,
    "e": "Beschreibend, in der Ich-Form, als Angebot — nicht als Bewertung.",
    "k": "Präsentation",
    "d": "medium",
    "s": "LF2 3.5"
   },
   {
    "t": "tf",
    "q": "Wer Feedback empfängt, sollte sich unmittelbar erklären und rechtfertigen.",
    "v": false,
    "e": "Falsch. Er hört ruhig zu, darf nachfragen, muss sich aber nicht rechtfertigen.",
    "k": "Präsentation",
    "d": "medium",
    "s": "LF2 3.5"
   },
   {
    "t": "cloze",
    "q": "Feedbackregeln",
    "txt": "Feedback wird in der {{1}} gegeben, beschreibt {{2}} die Wahrnehmung und ist ein {{3}}, keine Verpflichtung zur Änderung.",
    "gaps": [
     {
      "s": "Ich-Form",
      "o": [
       "Wir-Form",
       "Du-Form"
      ]
     },
     {
      "s": "wertungsfrei",
      "o": [
       "bewertend",
       "kritisch"
      ]
     },
     {
      "s": "Angebot",
      "o": [
       "Auftrag",
       "Urteil"
      ]
     }
    ],
    "e": "Ich-Form, wertungsfrei, Angebot.",
    "k": "Präsentation",
    "d": "medium",
    "s": "LF2 3.5"
   },
   {
    "t": "mc",
    "q": "Ein Kunde hat online bestellt, ruft an wegen einer Rückfrage und erhält später einen Zufriedenheitsanruf. Welche Servicezeitpunkte wurden bedient?",
    "a": [
     "Nur After-Sales",
     "Sales und After-Sales",
     "Pre-Sales und After-Sales",
     "Alle drei"
    ],
    "c": 1,
    "e": "Die Rückfrage während der Abwicklung ist Sales-Service, der Anruf danach After-Sales. Pre-Sales fand hier nicht statt.",
    "k": "Leistungen",
    "d": "hard",
    "s": "LF2 2.2.4"
   },
   {
    "t": "mc",
    "q": "Ein Inhouse-Callcenter bearbeitet ausschließlich eingehende Anrufe. Welcher Typ der 9-Felder-Typologie?",
    "a": [
     "Typ 1",
     "Typ 3",
     "Typ 4",
     "Typ 6"
    ],
    "c": 0,
    "e": "Inbound plus intern ist das erste Feld der Matrix. Typ 3 wäre intern plus Mischform.",
    "k": "Typologie",
    "d": "hard",
    "s": "LF2 2.2.1"
   },
   {
    "t": "tf",
    "q": "Ein Contact Center ist immer auch ein Callcenter, aber nicht jedes Callcenter ist ein Contact Center.",
    "v": true,
    "e": "Richtig. Das Contact Center bedient zusätzlich weitere Kanäle.",
    "k": "Typologie",
    "d": "medium",
    "s": "LF2 2.2.1"
   },
   {
    "t": "tf",
    "q": "Bei einer Dienstleistung kann der Kunde die Leistung vor dem Kauf vorgeführt bekommen.",
    "v": false,
    "e": "Falsch. Die Vorführmöglichkeit fehlt — deshalb sind Dienstleistungen Vertrauensgüter.",
    "k": "Sektoren & DL",
    "d": "medium",
    "s": "LF2 1.3"
   },
   {
    "t": "tf",
    "q": "Eine produktbegleitende Dienstleistung kann auch ohne die zugehörige Sachleistung bestehen.",
    "v": false,
    "e": "Falsch. Sie ist von der Sachleistung abhängig — sonst wäre sie originär.",
    "k": "Sektoren & DL",
    "d": "hard",
    "s": "LF2 1.3"
   },
   {
    "t": "tf",
    "q": "Werbung gehört im Marketingmix zur Produktpolitik.",
    "v": false,
    "e": "Falsch — zur Promotion, also zur Kommunikationspolitik.",
    "k": "Marketing",
    "d": "easy",
    "s": "LF2 2.1"
   },
   {
    "t": "type",
    "q": "Wie nennt man Dialogmarketing wegen der individuellen Ansprache auch?",
    "ans": [
     "One-to-One-Marketing",
     "One to One Marketing",
     "1:1-Marketing"
    ],
    "e": "One-to-One-Marketing.",
    "k": "Marketing",
    "d": "easy",
    "s": "LF2 2.1"
   },
   {
    "t": "type",
    "q": "Wie heißt die Zusatzleistung, die sämtliche Arbeiten der Auftragsabwicklung umfasst?",
    "ans": [
     "Fulfillment"
    ],
    "e": "Fulfillment — von der Lagerhaltung bis zur Retourenbearbeitung.",
    "k": "Leistungen",
    "d": "medium",
    "s": "LF2 2.2.3"
   },
   {
    "t": "type",
    "q": "Wie heißt der Vergleichsmaßstab, der zum Ziel für Verbesserungsprozesse wird?",
    "ans": [
     "Benchmark"
    ],
    "e": "Benchmark.",
    "k": "Leistungen",
    "d": "medium",
    "s": "LF2 2.2.5"
   },
   {
    "t": "odd",
    "q": "Welcher Begriff gehört nicht zu den vier IHK-Hierarchiestufen im Callcenter?",
    "a": [
     "Agent",
     "Teamleiter",
     "Manager",
     "Key Account Manager"
    ],
    "c": 3,
    "e": "Die vierte Stufe ist der Callcenter-Trainer.",
    "k": "Mitarbeiter",
    "d": "medium",
    "s": "LF2 2.3"
   },
   {
    "t": "odd",
    "q": "Welches Merkmal beschreibt keine Dienstleistung?",
    "a": [
     "Nicht lagerfähig",
     "Erstellung und Nutzung zeitgleich",
     "Physisch vorhanden",
     "Kunde ist an der Erstellung beteiligt"
    ],
    "c": 2,
    "e": "Dienstleistungen sind immateriell.",
    "k": "Sektoren & DL",
    "d": "easy",
    "s": "LF2 1.3"
   },
   {
    "t": "odd",
    "q": "Welcher Kanal gehört nicht zu den Kanälen, die ein Contact Center zusätzlich zum Telefon bedient?",
    "a": [
     "E-Mail",
     "Chat",
     "Messenger",
     "Frontoffice"
    ],
    "c": 3,
    "e": "Frontoffice ist eine Organisationseinheit, kein Kanal.",
    "k": "Typologie",
    "d": "medium",
    "s": "LF2 2.2.1"
   },
   {
    "t": "order",
    "q": "Ordnen Sie die Servicezeitpunkte nach dem Ablauf eines Kaufs.",
    "items": [
     "Pre-Sales-Service",
     "Sales-Service",
     "After-Sales-Service"
    ],
    "e": "Vor dem Kauf, während des Kaufs, nach dem Kauf.",
    "k": "Leistungen",
    "d": "easy",
    "s": "LF2 2.2.4"
   },
   {
    "t": "order",
    "q": "Ordnen Sie die IHK-Hierarchiestufen von unten nach oben.",
    "items": [
     "Callcenter-Agent",
     "Callcenter-Teamleiter",
     "Callcenter-Manager"
    ],
    "e": "Agent ohne Führungsverantwortung, Teamleiter mit 10–20 Mitarbeitern, darüber der Manager.",
    "k": "Mitarbeiter",
    "d": "easy",
    "s": "LF2 2.3"
   },
   {
    "t": "multi",
    "q": "Welche Aussagen zum Dialogmarketing treffen zu?",
    "a": [
     "Es zielt auf Response",
     "Es hat geringe Streuverluste",
     "Es gehört zur Promotion",
     "Es zielt primär auf Bekanntheitssteigerung"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Bekanntheit ist das Ziel des klassischen Marketings.",
    "k": "Marketing",
    "d": "medium",
    "s": "LF2 2.1"
   },
   {
    "t": "multi",
    "q": "Welche Aussagen zum externen Callcenter treffen zu?",
    "a": [
     "Flexible Reaktion auf schwankendes Volumen",
     "Häufig kostengünstiger",
     "Eingeschränkte Qualitätskontrolle",
     "Höhere Mitarbeitermotivation"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Die Motivation ist laut Buch eher geringer.",
    "k": "Typologie",
    "d": "hard",
    "s": "LF2 2.2.1"
   },
   {
    "t": "multi",
    "q": "Welche Aussagen zum Lettershop treffen zu?",
    "a": [
     "Er druckt und kuvertiert",
     "Er wickelt den Versand ab",
     "Er steht meist im Zusammenhang mit einer Direktmarketingaktion",
     "Er bearbeitet Retouren"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Retouren gehören zum Fulfillment.",
    "k": "Leistungen",
    "d": "medium",
    "s": "LF2 2.2.3"
   },
   {
    "t": "cloze",
    "q": "Uno-actu",
    "txt": "Das {{1}}-Prinzip besagt, dass Erstellung und Nutzung einer Dienstleistung {{2}} erfolgen. Daraus folgt, dass Dienstleistungen nicht {{3}} sind.",
    "gaps": [
     {
      "s": "Uno-actu",
      "o": [
       "Äquivalenz",
       "Solidaritäts"
      ]
     },
     {
      "s": "gleichzeitig",
      "o": [
       "nacheinander",
       "unabhängig"
      ]
     },
     {
      "s": "lagerfähig",
      "o": [
       "übertragbar",
       "messbar"
      ]
     }
    ],
    "e": "Gleichzeitigkeit schließt Lagerfähigkeit aus.",
    "k": "Sektoren & DL",
    "d": "medium",
    "s": "LF2 1.3"
   },
   {
    "t": "cloze",
    "q": "Callcenter-Rollen",
    "txt": "Der {{1}} hat keine Führungsverantwortung. Der {{2}} führt in der Regel {{3}} Mitarbeiter.",
    "gaps": [
     {
      "s": "Callcenter-Agent",
      "o": [
       "Teamleiter",
       "Trainer"
      ]
     },
     {
      "s": "Teamleiter",
      "o": [
       "Agent",
       "Manager"
      ]
     },
     {
      "s": "10–20",
      "o": [
       "3–5",
       "25–40"
      ]
     }
    ],
    "e": "Agent als Basis, Teamleiter mit 10 bis 20 Mitarbeitern.",
    "k": "Mitarbeiter",
    "d": "medium",
    "s": "LF2 2.3"
   },
   {
    "t": "cloze",
    "q": "Ausbildungswege",
    "txt": "Die Ausbildung zur Servicefachkraft dauert {{1}} Jahre, die zu Kaufleuten für Dialogmarketing {{2}} Jahre. Die kürzere wird auf die längere {{3}}.",
    "gaps": [
     {
      "s": "zwei",
      "o": [
       "drei",
       "vier"
      ]
     },
     {
      "s": "drei",
      "o": [
       "zwei",
       "dreieinhalb"
      ]
     },
     {
      "s": "angerechnet",
      "o": [
       "nicht angerechnet",
       "zur Hälfte angerechnet"
      ]
     }
    ],
    "e": "2 und 3 Jahre mit Anrechnung.",
    "k": "Ausbildung",
    "d": "easy",
    "s": "LF2 2.3.3"
   },
   {
    "t": "mc",
    "q": "Ein Auftraggeber verlangt vom Dienstleister einen Servicelevel von 90/30. Was bedeutet das?",
    "a": [
     "90 Anrufe in 30 Minuten",
     "90 % der Anrufe werden binnen 30 Sekunden angenommen",
     "30 % der Anrufe dauern 90 Sekunden",
     "90 Sekunden durchschnittliche Gesprächsdauer"
    ],
    "c": 1,
    "e": "Der erste Wert ist der Prozentsatz, der zweite die Sekundenschwelle.",
    "k": "Typologie",
    "d": "hard",
    "s": "LF2 2.2.5"
   },
   {
    "t": "mc",
    "q": "Welche Zusatzleistung übernimmt die Wartung und Störungsbeseitigung eines Webshops?",
    "a": [
     "Lettershop",
     "Fulfillment",
     "E-Commerce",
     "Help Desk"
    ],
    "c": 2,
    "e": "E-Commerce reicht von der Konzeption über den Bestellvorgang bis zur Wartung.",
    "k": "Leistungen",
    "d": "medium",
    "s": "LF2 2.2.3"
   },
   {
    "t": "mc",
    "q": "Eine Bank betreibt eine interne Hotline, über die Filialmitarbeiter technische Probleme melden. Wie heißt das?",
    "a": [
     "Kundenservice",
     "Help Desk",
     "Informationshotline",
     "Overflow"
    ],
    "c": 1,
    "e": "Ein Help Desk wird unternehmensintern genutzt.",
    "k": "Leistungen",
    "d": "medium",
    "s": "LF2 2.2.2"
   },
   {
    "t": "mc",
    "q": "Nach einem Mailing kommen viele Briefe als unzustellbar zurück. Welche Outbound-Leistung setzt hier an?",
    "a": [
     "Telesales",
     "Adress- und Datenqualifizierung",
     "Kundenrückgewinnung",
     "Markt- und Meinungsforschung"
    ],
    "c": 1,
    "e": "Rückläuferbearbeitung gehört zur Adress- und Datenqualifizierung.",
    "k": "Leistungen",
    "d": "hard",
    "s": "LF2 2.2.2"
   },
   {
    "t": "mc",
    "q": "Ein gekündigter Kunde wird gezielt angerufen, um ihn zurückzugewinnen. Welche Leistung?",
    "a": [
     "Kundenbindung",
     "Kundenrückgewinnung",
     "Customer-Care-Call",
     "Telesales"
    ],
    "c": 1,
    "e": "Kundenbindung richtet sich an Bestandskunden, Rückgewinnung an bereits verlorene.",
    "k": "Leistungen",
    "d": "medium",
    "s": "LF2 2.2.2"
   },
   {
    "t": "tf",
    "q": "Ein Customer-Care-Call verfolgt ein konkretes Verkaufsziel.",
    "v": false,
    "e": "Falsch. Er ist ein Kundenbindungsanruf ohne konkreten Verkaufsanlass.",
    "k": "Leistungen",
    "d": "medium",
    "s": "LF2 2.2.2"
   },
   {
    "t": "tf",
    "q": "B2G bezeichnet den Kontakt zu Behörden.",
    "v": true,
    "e": "Richtig — Business to Government.",
    "k": "Leistungen",
    "d": "easy",
    "s": "LF2 2.2.2"
   },
   {
    "t": "mc",
    "q": "Ein Unternehmen verlagert seine Hotline nach Osteuropa und holt sie nach zwei Jahren zurück. Was nennt das Buch als Grund?",
    "a": [
     "Zu hohe Löhne im Ausland",
     "Akzeptanzprobleme der Kunden sowie gestiegene Qualitäts- und Serviceansprüche",
     "Gesetzliche Verbote",
     "Technische Unmöglichkeit"
    ],
    "c": 1,
    "e": "Sprachliche und kulturelle Akzeptanzprobleme treiben die Rückverlagerung.",
    "k": "Branche & Historie",
    "d": "hard",
    "s": "LF2 1.1.3"
   }
  ]
 },
 {
  "code": "03",
  "name": "Mit Kundinnen und Kunden kommunizieren",
  "themen": [
   {
    "t": "1.1 Texte nach DIN 5008",
    "d": "Schreib- und Gestaltungsregeln, Aufbau des Geschäftsbriefs.",
    "c": "**DIN 5008** = Schreib- und Gestaltungsregeln für die Textverarbeitung.\n\n**Bestandteile eines Geschäftsbriefs:**\n- Briefkopf\n- Anschriftenfeld (max. 9 Zeilen)\n- Bezugszeichenzeile (Ihre Zeichen, Unsere Zeichen, Datum)\n- Betreff (ohne das Wort „Betreff\")\n- Anrede + Komma\n- Brieftext (danach Kleinschreibung)\n- Grußformel\n- Unterschrift\n- Anlagen, Verteiler",
    "k": [
     "DIN 5008 = Schreib-/Gestaltungsregeln",
     "Anschriftenfeld max. 9 Zeilen",
     "Betreff ohne das Wort „Betreff\"",
     "Nach Anrede + Komma: Kleinschreibung"
    ],
    "r": "medium"
   },
   {
    "t": "1.2 Kundenorientiert formulieren",
    "d": "Sie-Stil, positive Sprache, Textbausteine, E-Mail-Gestaltung.",
    "c": "**Grundsätze kundenorientierter Formulierung:**\n- Wir-Stil vermeiden, **Sie-Stil** bevorzugen\n- positive Formulierungen\n- aktive Sätze\n- klare, kurze Sätze\n- Fachwörter erklären\n\n**Textbausteine** = vorgefertigte Textmodule für wiederkehrende Inhalte (Bestellbestätigung, Reklamationsantwort, Mahnung).\n- Vorteile: schnell + konsistent\n- Nachteile: unpersönlich + standardisiert\n\n**E-Mail-Gestaltung:** aussagekräftige Betreffzeile, Anrede mit Komma, kurze Absätze, Signatur. Disclaimer-Pflicht im B2B. CC/BCC-Logik beachten.",
    "k": [
     "Sie-Stil statt Wir-Stil",
     "Positive, aktive, kurze Sätze",
     "Textbausteine: schnell aber unpersönlich"
    ],
    "r": "medium"
   },
   {
    "t": "2.1 Die 3 Kommunikationsmittel",
    "d": "Verbal, paraverbal, nonverbal und die Bedeutung am Telefon.",
    "c": "**Drei Kommunikationsmittel:**\n- **Verbal** — das gesprochene oder geschriebene Wort (gewählte Worte)\n- **Paraverbal** — die **hörbare** Ausdrucksform: Tonfall, Lautstärke, Tempo, Stimmlage, Pausen, Modulation\n- **Nonverbal** — die **sichtbare** Körpersprache: Mimik, Gestik, Haltung, Blick, Distanz\n\n**Kongruenz** = Übereinstimmung aller drei Mittel.\n**Inkongruenz** = Widerspruch zwischen den Mitteln (z. B. „Ich freue mich\" mit gelangweilter Stimme).\n\n**Folge fürs Telefon:** Beim Telefonieren entfallen die **nonverbalen** Anteile. Deshalb muss besonders auf die Übereinstimmung von verbalen und paraverbalen Anteilen geachtet werden.",
    "k": [
     "Verbal = Wort, paraverbal = hörbar, nonverbal = sichtbar",
     "Kongruenz = Übereinstimmung aller 3",
     "Am Telefon entfällt das Nonverbale"
    ],
    "r": "high"
   },
   {
    "t": "2.2 Sender-Empfänger-Modell",
    "d": "Codierung, Decodierung und drei Quellen für Informationsverlust.",
    "c": "**Drei Elemente:**\n1. **Sender** — codiert die Nachricht durch Kommunikationsmittel\n2. **Nachricht** — Inhalt / Information\n3. **Empfänger** — decodiert und reagiert\n\n**Kommunikationsformen:**\n- **Ein-Weg-Kommunikation** — der Empfänger bleibt in der Zuhörerrolle\n- **Zwei-Wege-Kommunikation** — der Empfänger antwortet und wird selbst zum Sender\n\nDecodierung funktioniert nur über **gemeinsame Zeichen** (Worte, Gesten, Grammatik, Dialekt).\n\n**3 Quellen für Informationsverlust:**\n1. Was man meint, ist oft nicht das, was man sagt.\n2. Was man sagt, ist nicht das, was der andere hört.\n3. Was der andere hört, ist nicht zwangsläufig verstanden.",
    "k": [
     "3 Elemente: Sender, Nachricht, Empfänger",
     "Ein-Weg vs. Zwei-Wege-Kommunikation",
     "Decodierung braucht gemeinsame Zeichen",
     "3 Verlustquellen: meinen ≠ sagen ≠ hören ≠ verstehen"
    ],
    "r": "high"
   },
   {
    "t": "2.3 Watzlawick — Die 5 Axiome",
    "d": "Die fünf Grundsätze menschlicher Kommunikation.",
    "c": "**Paul Watzlawick** — Kommunikationsforscher. „Axiom\" = anerkannter Grundsatz ohne Beweis.\n\n**1. Axiom:** „Man kann **nicht nicht** kommunizieren.\" Jedes Verhalten ist Kommunikation — auch Schweigen.\n\n**2. Axiom:** Jede Kommunikation hat einen **Inhalts-** und einen **Beziehungsaspekt**, wobei der Beziehungsaspekt den Inhaltsaspekt bestimmt (= Metakommunikation).\n\n**3. Axiom:** Die Natur einer Beziehung ist durch die **Interpunktion** der Kommunikationsabläufe bedingt. Jeder Partner glaubt, der andere habe begonnen.\n\n**4. Axiom:** Kommunikation bedient sich **digitaler und analoger** Modalitäten. Digital = Worte/Zeichen, analog = Körpersprache/Stimmlage.\n\n**5. Axiom:** Kommunikationsabläufe sind **symmetrisch** (Gleichheit) oder **komplementär** (Unterschiedlichkeit).",
    "k": [
     "Axiom 1: nicht nicht kommunizieren",
     "Axiom 2: Inhalt + Beziehung, Beziehung bestimmt Inhalt",
     "Axiom 3: Interpunktion — keiner hat „angefangen\"",
     "Axiom 4: digital + analog",
     "Axiom 5: symmetrisch vs. komplementär"
    ],
    "r": "high"
   },
   {
    "t": "2.4 Schulz von Thun — 4 Seiten einer Nachricht",
    "d": "Das Vier-Ohren-Modell der quadratischen Kommunikation.",
    "c": "**Friedemann Schulz von Thun** — Kommunikationspsychologe. Baut auf Watzlawicks 2. Axiom auf. Auch „quadratische Kommunikation\" oder „Vier-Ohren-Modell\".\n\n**Die 4 Seiten / 4 Ohren:**\n- **Sachinhalt** — worüber ich informiere\n- **Selbstoffenbarung** — was ich von mir selbst kundgebe\n- **Beziehung** — was ich von dir halte und wie wir zueinander stehen\n- **Appell** — wozu ich dich veranlassen möchte\n\n**Beispiel „Ich kann diese Aufgaben nicht lösen!\"**\n- Sachinhalt: kann die Aufgaben nicht lösen\n- Selbstoffenbarung: „ich bin gestresst\"\n- Beziehung: „du hast Verständnis\"\n- Appell: „hilf mir\"\n\nDer Empfänger hört alle 4 Ohren **gleichzeitig**. Die **Beziehungsseite** hat das größte Konfliktpotenzial.",
    "k": [
     "4 Seiten: Sachinhalt, Selbstoffenbarung, Beziehung, Appell",
     "Empfänger hört alle 4 Ohren gleichzeitig",
     "Beziehungsseite = größtes Konfliktpotenzial",
     "Baut auf Watzlawicks 2. Axiom auf"
    ],
    "r": "high"
   },
   {
    "t": "2.5 Berne — Transaktionsanalyse: Ich-Zustände",
    "d": "Eltern-Ich, Erwachsenen-Ich, Kind-Ich mit ihren Ausprägungen.",
    "c": "**Eric Berne** — Psychiater. Popularisiert durch „Ich bin okay – du bist okay\".\n\n**3 Ich-Zustände mit insgesamt 6 Ausprägungen:**\n\n- **Eltern-Ich (EL)** — 2 Ausprägungen:\n  - Nährendes/fürsorgliches Eltern-Ich (ELn) — unterstützend, beratend\n  - Kritisches Eltern-Ich (ELK) — streng, kritisch, belehrend\n- **Erwachsenen-Ich (ER)** — 1 Ausprägung: konstruktiv, fragend, objektiv, lösungsorientiert\n- **Kind-Ich (K)** — 3 Ausprägungen:\n  - Freies Kind-Ich (Kf) — freudig, kreativ, spontan\n  - Angepasstes Kind-Ich (Ka) — gehemmt, gehorsam\n  - Rebellisches Kind-Ich (Kr) — trotzig, aggressiv, fordernd\n\n**Egogramm** = Auswertung, wie stark einzelne Ich-Zustände bei einer Person vertreten sind.",
    "k": [
     "3 Ich-Zustände: Eltern, Erwachsener, Kind",
     "6 Ausprägungen: ELn/ELK · ER · Kf/Ka/Kr",
     "EL = 2, ER = 1, K = 3 Ausprägungen",
     "Egogramm = Verteilung der Ich-Zustände"
    ],
    "r": "high"
   },
   {
    "t": "2.5 Berne — Transaktionsarten & Grundhaltungen",
    "d": "Parallele, gekreuzte, verdeckte Transaktion; vier Grundhaltungen.",
    "c": "**3 Transaktionsarten:**\n- **Parallele Transaktion** — Antwort kommt aus dem **angesprochenen** Ich-Zustand zurück. Kommunikation läuft reibungslos.\n- **Gekreuzte Transaktion** — Antwort kommt aus einem **anderen** Ich-Zustand als angesprochen. Führt oft zu Störungen.\n- **Verdeckte Transaktion** — auf **2 Ebenen gleichzeitig** (offen verbal + versteckt para-/nonverbal). Gefährlich, wenn nicht erkannt.\n\n**4 Grundhaltungen:**\n1. Ich o.k. – Du o.k. = **Gewinner**\n2. Ich o.k. – Du nicht o.k.\n3. Ich nicht o.k. – Du o.k.\n4. Ich nicht o.k. – Du nicht o.k. = **Verlierer**\n\n**Strategie im Beschwerdemanagement:** Verärgerte Kunden sind oft im ELK oder Kr. Zuerst aus dem angesprochenen Zustand reagieren (Spiegeln), dann „sanfter Wechsel\" auf das Erwachsenen-Ich.\n\n**Grundsatz:** Negative Zuwendung ist besser als gar keine Zuwendung.",
    "k": [
     "Parallel = reibungslos, gekreuzt = Störung, verdeckt = 2 Ebenen",
     "Gewinner = Ich o.k./Du o.k.; Verlierer = beide nicht o.k.",
     "Strategie: spiegeln, dann sanfter Wechsel auf ER",
     "Negative Zuwendung > keine Zuwendung"
    ],
    "r": "high"
   },
   {
    "t": "2.6 Das Johari-Fenster",
    "d": "Vier Quadranten der Selbst- und Fremdwahrnehmung.",
    "c": "**Joseph Luft + Harry Ingham** — Modell zur Selbst- und Fremdwahrnehmung.\n\n**Die 4 Quadranten:**\n\n| | Mir bekannt | Mir unbekannt |\n|---|---|---|\n| Anderen bekannt | **A: Öffentliche Person / Arena** | **C: Blinder Fleck** |\n| Anderen unbekannt | **B: Privatperson** | **D: Unbekanntes / Unbewusstes** |\n\n**Wege zur Vergrößerung der Arena (A):**\n- **Offenheit / Selbstoffenbarung** → verkleinert Quadrant B\n- **Rückmeldung / Feedback** → verkleinert Quadrant C (blinder Fleck)\n\n**Praxis:** Im Coaching wird der blinde Fleck durch Feedback verkleinert.",
    "k": [
     "A = Arena, B = Privat, C = blinder Fleck, D = Unbewusstes",
     "Offenheit verkleinert B",
     "Feedback verkleinert C (blinden Fleck)"
    ],
    "r": "medium"
   },
   {
    "t": "2.7 Neurolinguistisches Programmieren (NLP)",
    "d": "Pacing, Rapport, Leading — und der Ethik-Hinweis.",
    "c": "**Richard Bandler + John Grinder** — NLP ist eine **Sammlung von Kommunikationstechniken**, ausdrücklich **keine wissenschaftliche Theorie**.\n\n**Wortbedeutung:**\n- **N (Neurologisch)** — geistig-seelische Vorgänge, innere Repräsentationssysteme\n- **L (Linguistisch)** — sprachlicher / körpersprachlicher Ausdruck\n- **P (Programmieren)** — Lernen, Verarbeiten, Reorganisieren\n\n**Innere Landkarte** = die subjektive Wahrnehmung der Wirklichkeit. „Die Landkarte ist nicht die Landschaft.\"\n\n**3 Methoden:**\n- **Pacing** — Spiegeln des Gesprächspartners (Stimme, Gestik, Mimik anpassen)\n- **Rapport** — positive Gesprächsatmosphäre, entsteht durch Pacing\n- **Leading** — nach gelungenem Rapport den Partner sanft zu neuem Verhalten führen\n\n**Ethik:** NLP ist **kein Manipulationswerkzeug** — niemand darf gegen seinen Willen beeinflusst werden.",
    "k": [
     "NLP = Techniksammlung, KEINE Wissenschaft",
     "Pacing → Rapport → Leading",
     "Innere Landkarte ≠ Realität",
     "Ethik: keine Manipulation gegen den Willen"
    ],
    "r": "high"
   },
   {
    "t": "2.8 Maslow — Bedürfnispyramide",
    "d": "Fünf hierarchisch geordnete Bedürfnisstufen.",
    "c": "**Abraham Maslow** — fünf hierarchisch geordnete Stufen (von unten nach oben):\n\n1. **Physiologische Grundbedürfnisse** — Essen, Trinken, Schlaf, Atem\n2. **Sicherheitsbedürfnisse** — Schutz, Wohnung, Arbeitsplatz\n3. **Sozialbedürfnisse** — Freundschaft, Familie, Zugehörigkeit\n4. **Wertschätzung und Anerkennung** — Lob, Status, Erfolg\n5. **Selbstverwirklichung** — individuelle Entwicklung, persönliche Ziele\n\n**Grundregel:** Höhere Stufen werden erst relevant, wenn die darunterliegenden erfüllt sind.",
    "k": [
     "Von unten: physiologisch → Sicherheit → sozial → Anerkennung → Selbstverwirklichung",
     "Höhere Stufe erst nach Erfüllung der niedrigeren",
     "5 Stufen, hierarchisch"
    ],
    "r": "high"
   },
   {
    "t": "3.1 Klassische Rhetorik — 5 Phasen",
    "d": "Die fünf Phasen der Redevorbereitung.",
    "c": "**5 Phasen der Redevorbereitung:**\n1. **Inventio** — Stoffsammlung\n2. **Dispositio** — Gliederung\n3. **Elocutio** — Formulierung\n4. **Memoria** — Memorieren\n5. **Actio / Pronuntiatio** — Aussprache, Körpersprache, Vortrag",
    "k": [
     "5 Phasen: Inventio, Dispositio, Elocutio, Memoria, Actio",
     "Inventio = sammeln, Dispositio = gliedern",
     "Actio = der eigentliche Vortrag"
    ],
    "r": "medium"
   },
   {
    "t": "3.2.1 Argumentationstechnik",
    "d": "Der Vierschritt einer überzeugenden Argumentation.",
    "c": "**Aufbau einer Argumentation:**\n\n**These → Begründung → Beispiel → Schlussfolgerung**\n\n- **These** — die Behauptung / Aussage\n- **Begründung** — warum die These zutrifft\n- **Beispiel** — konkrete Veranschaulichung\n- **Schlussfolgerung** — Zusammenfassung / Handlungsempfehlung",
    "k": [
     "These → Begründung → Beispiel → Schlussfolgerung",
     "Beispiel macht das Argument greifbar"
    ],
    "r": "medium"
   },
   {
    "t": "3.2.2 Fragetechnik",
    "d": "Sieben Fragearten und der Fragetrichter.",
    "c": "**Fragetechnik** = Einsatz verschiedener Frageformen zur Gesprächssteuerung und Informationsbeschaffung.\n\n**7 Fragearten:**\n- **Offene Frage** (W-Frage) — lange Antworten, viel Information. Beginn der Bedarfsermittlung.\n- **Geschlossene Frage** (Ja/Nein) — kurze, eindeutige Antworten. Ende der Bedarfsermittlung, Absicherung.\n- **Alternativfrage** — 2 Optionen zur Wahl. Terminvereinbarung.\n- **Suggestivfrage** — drängt zu einer Antwort. Manipulativ — nicht in der Bedarfsermittlung.\n- **Gegenfrage** — dreht die Frage zurück. Bei manipulativen Fragen.\n- **Rhetorische Frage** — erwartet keine Antwort. Stilmittel.\n- **Intonationsfrage** — Aussage wird durch die Stimme zur Frage.\n\n**Fragetrichter** = vom Allgemeinen zum Speziellen, von offen zu geschlossen.",
    "k": [
     "7 Fragearten: offen, geschlossen, alternativ, suggestiv, Gegen-, rhetorisch, Intonation",
     "Offen am Anfang, geschlossen am Ende",
     "Fragetrichter: allgemein → speziell, offen → geschlossen",
     "Suggestivfrage ist manipulativ"
    ],
    "r": "high"
   },
   {
    "t": "3.2.3 Aktives Zuhören",
    "d": "Carl Rogers und das Zurückmelden von Inhalt und Emotion.",
    "c": "**Carl Rogers** — Psychologe, Begründer der klientenzentrierten Gesprächsführung.\n\n**Aktives Zuhören** = dem Gesprächspartner **Inhalt UND Emotion** zurückmelden.\n\nEs geht nicht nur darum, das Gesagte zu wiederholen — auch das Gefühl dahinter wird gespiegelt.\n\n**Pseudo-Zuhören** = vorgetäuschtes Hören. Es wird vom Partner schnell entlarvt und wirkt als Gesprächsstörer.",
    "k": [
     "Carl Rogers = Begründer",
     "Aktives Zuhören = Inhalt + Emotion zurückmelden",
     "Pseudo-Zuhören wird schnell entlarvt"
    ],
    "r": "high"
   },
   {
    "t": "3.2.4 Gesprächsstörer & Gesprächsförderer",
    "d": "Was Gespräche blockiert und was sie öffnet.",
    "c": "**Gesprächsstörer:**\n- Vorwürfe / Anklagen\n- Befehlen, drohen\n- Belehren, moralisieren\n- vorschnelle Lösungen\n- Ironie / Sarkasmus\n- Bagatellisieren\n- Pseudo-Zuhören\n- Ablenkung\n- Generalisierungen („immer\", „nie\")\n- Diagnosen stellen\n\n**Gesprächsförderer:**\n- Pausen einbauen\n- aktives Zuhören\n- Paraphrasieren\n- nicht unterbrechen\n- nachfragen\n- positive Wertschätzung",
    "k": [
     "Störer: Vorwurf, Befehl, Belehrung, vorschnelle Lösung, Ironie",
     "Förderer: Pausen, aktives Zuhören, Paraphrasieren, nachfragen",
     "Generalisierungen („immer/nie\") sind Störer"
    ],
    "r": "high"
   },
   {
    "t": "3.2.5 Sprechausdruck",
    "d": "Lautstärke, Intonation, Tempo, Aussprache, Pausen.",
    "c": "**Aspekte des Sprechausdrucks:**\n- **Lautstärke** — hörbar ohne Anstrengung. Zu laut = aggressiv/hektisch, zu leise = unsicher/inkompetent.\n- **Intonation / Stimmlage** — Tonlagen, Tonhöhen, Klangfarben variieren.\n- **Sprechtempo** — nicht zu schnell, nicht zu langsam; Pausen einbauen.\n- **Aussprache / Artikulation** — deutlich, dialektfrei.\n- **Pausen** — nicht länger als 3–5 Sekunden, sonst unangenehm.",
    "k": [
     "Zu laut = aggressiv, zu leise = unsicher",
     "Pausen max. 3–5 Sekunden",
     "Intonation variieren, deutlich artikulieren"
    ],
    "r": "medium"
   },
   {
    "t": "3.2.6 Körpersprache am Telefon",
    "d": "Warum Haltung und Lächeln auch am Telefon zählen.",
    "c": "Obwohl der Kunde den Mitarbeiter im Callcenter **nicht sieht**, beeinflusst dessen Körpersprache das Gesprächsergebnis erheblich.\n\nDie Körpersprache wirkt **direkt auf die Stimme** — der Kunde hört also, welche Haltung der Mitarbeiter einnimmt.\n\n- **Lächeln in der Stimme** wird wahrgenommen.\n- **Aufrechte / stehende Haltung** verbessert Volumen und Klang.\n- **Liegende Haltung** verschlechtert die Stimme.",
    "k": [
     "Körpersprache wirkt auf die Stimme — auch am Telefon",
     "Lächeln ist hörbar",
     "Aufrechte Haltung verbessert den Klang"
    ],
    "r": "high"
   },
   {
    "t": "4.1 Wahrnehmungstypen — VAK-Modell",
    "d": "Visuell, auditiv, kinästhetisch — und passende Sprache.",
    "c": "Das **VAK-Modell** stammt aus dem NLP.\n\n**Drei Wahrnehmungstypen:**\n- **Visuell** (sehen) — „Ich sehe…\", „bildhaft\", „Da sehe ich rot\". Strategie: bildhaft formulieren, Prospekte/Internetseiten zeigen.\n- **Auditiv** (hören) — „Habe ich richtig gehört\", „Das klingt vernünftig\". Strategie: ähnliche Formulierungen, klare Wortwahl.\n- **Kinästhetisch** (fühlen/tasten/tun) — „Das setzt mich unter Druck\", „fühle mich gut aufgehoben\". Strategie: Fühl-Sprache, Probeexemplare anbieten.\n\n**Regel:** Meist Mischformen — auf 1–2 dominante Sinne achten.",
    "k": [
     "VAK: visuell, auditiv, kinästhetisch",
     "Sprache an den dominanten Sinn anpassen",
     "Stammt aus dem NLP, meist Mischformen"
    ],
    "r": "high"
   },
   {
    "t": "4.2 Die 7 Kundentypen",
    "d": "Typische Kundentypen und ihre Gesprächsstrategien.",
    "c": "**Die 7 Kundentypen mit Strategie:**\n- **Der Besserwisser** — weiß alles besser. Strategie: um Hilfe bitten, NIE zurechtweisen.\n- **Der Vielredner** — redet viel, schweift ab. Strategie: gezielte Unterbrechungen, Zusammenfassungen.\n- **Der Aggressive** — wütend, unhöflich. Strategie: nicht provozieren lassen, ruhig bleiben.\n- **Der Ungeduldige** — wenig Zeit. Strategie: ruhig bleiben, mit Fragen im Dialog halten.\n- **Der Impulsive** — schnell begeistert, schnell wieder weg. Strategie: verbindlicher Abschluss.\n- **Der Entscheidungsschwache** — zögerlich, viele Einwände. Strategie: nicht drängen, Fragetechnik, Zwischenergebnisse zusammenfassen.\n- **Der Schweiger** — einsilbig, introvertiert. Strategie: offene Fragen, Zeit lassen.",
    "k": [
     "Besserwisser: um Hilfe bitten, nie zurechtweisen",
     "Aggressiver: nicht provozieren lassen",
     "Entscheidungsschwacher: nicht drängen",
     "Schweiger: offene Fragen, Zeit lassen"
    ],
    "r": "high"
   },
   {
    "t": "4.3 Sprachverhalten & Buchstabiertafel",
    "d": "Verständigungshilfen bei Fremdsprache und Dialekt.",
    "c": "**Verständigungsschwierigkeiten:**\n- **Fremdsprache** — Spezialisten oder Übersetzer einsetzen\n- **Dialekt** — entsprechende Mitarbeiter einsetzen\n- **Buchstabiertafel** — zum eindeutigen Buchstabieren:\n  - Deutschland: Anton, Bertha, Cäsar, Dora …\n  - ITU (international): Alfa, Bravo, Charlie, Delta …",
    "k": [
     "Buchstabiertafel Deutschland: Anton, Bertha, Cäsar …",
     "ITU international: Alfa, Bravo, Charlie …",
     "Bei Fremdsprache: Übersetzer/Spezialisten"
    ],
    "r": "low"
   },
   {
    "t": "5.1 Physiologie des Sprechens",
    "d": "Atmung, Stimmgebung, Artikulation und die Anatomie.",
    "c": "**Der Sprechvorgang besteht aus 3 Teilen:**\n1. **Atmung (Respiration)**\n2. **Stimmgebung (Phonation)**\n3. **Aussprache (Artikulation)**\n\n**Anatomie:**\n- Der **Kehlkopf** enthält zwei **Stimmbänder / Stimmlippen**.\n- Sie verschließen die Luftröhre bis auf einen Spalt = **Stimmritze (Glottis)**.\n- Der lufthaltige Raum oberhalb = **Ansatzrohr (Vokaltrakt)** = Rachen + Mund + Nase.\n- Beim Atmen sind die Stimmbänder entspannt, die Stimmritze breit.\n- Beim Sprechen werden die Stimmlippen angespannt → die Luft setzt sie in Schwingung → der **Stimmklang** entsteht.\n- Gute Nutzung des Ansatzrohrs = volle **Resonanz**.",
    "k": [
     "3 Teile: Atmung → Phonation → Artikulation",
     "Kehlkopf enthält die Stimmbänder",
     "Stimmritze = Glottis, Ansatzrohr = Rachen+Mund+Nase",
     "Resonanz durch gute Nutzung des Ansatzrohrs"
    ],
    "r": "medium"
   },
   {
    "t": "5.2 Stimmbelastungen & Stimmpflege",
    "d": "Was die Stimme belastet und wie man sie schützt.",
    "c": "**Stimmbelastungen im Callcenter:**\n- unnatürliches Sprechen (zu hohe Stimmlage)\n- lauteres Sprechen in lauter Umgebung → mechanische Überbelastung\n- trockene Heizungsluft\n- fehlende Ergonomie / Fehlhaltung\n- Stress / emotionale Belastung\n\nFolge: **Heiserkeit**, schlimmstenfalls **chronische Heiserkeit** → Arbeitsunfähigkeit.\n\n**Stimmpflege / Stimmhygiene:**\n- Wetter — Schal tragen, Zugluft und Klimaanlagen meiden\n- trockene Luft — viel trinken, lüften\n- Stress — kurze Pause, frische Luft, Lockerungsübungen\n- Rauchen — unterlassen, mindestens vor/nach stimmlicher Belastung\n\n**Stimmtraining:** ökonomische, entspannte Atmung; Artikulation verbessern; Entspannung üben.",
    "k": [
     "Belastung: unnatürliche Stimmlage, Lärm, trockene Luft, Stress",
     "Folge: Heiserkeit bis chronische Heiserkeit",
     "Pflege: trinken, lüften, Schal, nicht rauchen"
    ],
    "r": "medium"
   },
   {
    "t": "6.1 Stress: Eustress, Disstress & Stressoren",
    "d": "Stressarten, Auslöser und die Emotionsarbeit im Callcenter.",
    "c": "**Stress** = Zustand körperlicher und geistiger Anspannung, hervorgerufen durch überhöhte Belastungen.\n\n**Körperliche Reaktion:** Adrenalin-Ausschüttung, Pulserhöhung, Blutdruckanstieg, Muskelanspannung.\n\n**Zwei Arten:**\n- **Eustress** — positiv empfundener Stress; anregend, leistungssteigernd (Lob, Erfolg).\n- **Disstress** — negativ empfundener Stress; angespannt, unkonzentriert (Versagensangst, Überforderung).\n\n**Stressor** = der äußere Reiz, der Stress auslöst — egal ob Eu- oder Disstress.\n\n**Typische Stressoren:** Über-/Unterforderung, Verantwortung, Mobbing, Betriebsklima, Termindruck, Lärm, Raumklima.\n\n**Emotionsarbeit** (callcenter-spezifisch) = die Kluft zwischen gefühlter und vorgeschriebener Stimmung — besonders zehrend. Die Anonymität des Kunden senkt die Hemmschwelle zu pöbeln.",
    "k": [
     "Eustress = positiv, Disstress = negativ",
     "Stressor = Auslöser (≠ Stress = Zustand)",
     "Emotionsarbeit = Kluft gefühlte ↔ vorgeschriebene Stimmung"
    ],
    "r": "high"
   },
   {
    "t": "6.2 Stressprävention & Stressbewältigung",
    "d": "Stress vermeiden vs. aufgebauten Stress abbauen.",
    "c": "**Zwei Strategien im Umgang mit Stress:**\n\n**Stressprävention** — Stressoren reduzieren, Stress gar nicht erst entstehen lassen:\n- Zeitmanagement\n- klare Ziele und Zuständigkeiten\n- ergonomischer Arbeitsplatz\n- abwechslungsreiche Tätigkeiten\n- klare Kommunikation\n- Konflikte schnell klären\n\n**Stressbewältigung** — bereits aufgebauten Stress abbauen:\n- Sport\n- Massage\n- Entspannungstechniken, Meditation\n- autogenes Training, Yoga",
    "k": [
     "Prävention = Stress vermeiden (vorher)",
     "Bewältigung = Stress abbauen (nachher)",
     "Prävention: Zeitmanagement, Ergonomie, klare Ziele",
     "Bewältigung: Sport, Entspannung, autogenes Training"
    ],
    "r": "high"
   }
  ],
  "cards": [
   {
    "f": "Was regelt die DIN 5008 — und wie viele Zeilen hat das Anschriftenfeld maximal?",
    "b": "Die Schreib- und Gestaltungsregeln für die Textverarbeitung, u. a. den Aufbau des Geschäftsbriefs. Anschriftenfeld: maximal 9 Zeilen.",
    "k": "Schriftliche Kommunikation"
   },
   {
    "f": "Sie-Stil oder Wir-Stil — welcher ist kundenorientiert?",
    "b": "Der Sie-Stil. Der Wir-Stil rückt das Unternehmen in den Mittelpunkt und soll vermieden werden.",
    "k": "Schriftliche Kommunikation"
   },
   {
    "f": "Was sind Textbausteine — und was ist ihr Nachteil?",
    "b": "Vorgefertigte Textmodule für wiederkehrende Inhalte. Vorteil: schnell und konsistent. Nachteil: unpersönlich und standardisiert.",
    "k": "Schriftliche Kommunikation"
   },
   {
    "f": "Verbal, paraverbal, nonverbal — welche Zuordnung gilt?",
    "b": "Verbal = das Wort. Paraverbal = hörbar (Tonfall, Tempo, Lautstärke, Pausen). Nonverbal = sichtbar (Mimik, Gestik, Haltung).",
    "k": "Kommunikationsmittel"
   },
   {
    "f": "Was bedeutet Kongruenz in der Kommunikation?",
    "b": "Die Übereinstimmung aller drei Kommunikationsmittel — verbal, paraverbal und nonverbal.",
    "k": "Kommunikationsmittel"
   },
   {
    "f": "Worauf kommt es am Telefon besonders an?",
    "b": "Auf die Übereinstimmung von verbalen und paraverbalen Anteilen — die nonverbalen Anteile entfallen.",
    "k": "Kommunikationsmittel"
   },
   {
    "f": "Welche drei Elemente hat das Sender-Empfänger-Modell?",
    "b": "Sender (codiert), Nachricht (Inhalt), Empfänger (decodiert und reagiert).",
    "k": "Kommunikationsmittel"
   },
   {
    "f": "Ein-Weg oder Zwei-Wege-Kommunikation — wo liegt der Unterschied?",
    "b": "Bei der Ein-Weg-Kommunikation bleibt der Empfänger Zuhörer. Bei der Zwei-Wege-Kommunikation antwortet er und wird selbst zum Sender.",
    "k": "Kommunikationsmittel"
   },
   {
    "f": "Was braucht eine erfolgreiche Decodierung?",
    "b": "Gemeinsame Zeichen: Worte, Gesten, Grammatik, Dialekt. Fachsprache gegenüber Laien ist deshalb problematisch.",
    "k": "Kommunikationsmittel"
   },
   {
    "f": "Wie lautet Watzlawicks erstes Axiom im Wortlaut?",
    "b": "„Man kann nicht nicht kommunizieren.“ Jedes Verhalten — auch Schweigen — ist Kommunikation. Die doppelte Verneinung gehört zum Wortlaut.",
    "k": "Watzlawick"
   },
   {
    "f": "Wie lautet das zweite Axiom?",
    "b": "Jede Kommunikation hat einen Inhalts- und einen Beziehungsaspekt, wobei der Beziehungsaspekt den Inhaltsaspekt bestimmt.",
    "k": "Watzlawick"
   },
   {
    "f": "Was besagt das dritte Axiom?",
    "b": "Die Natur einer Beziehung ist durch die Interpunktion der Kommunikationsabläufe bedingt — jeder Partner glaubt, der andere habe begonnen.",
    "k": "Watzlawick"
   },
   {
    "f": "Was besagt das vierte Axiom?",
    "b": "Kommunikation bedient sich digitaler (Worte, Zeichen) und analoger (Körpersprache, Stimmlage) Modalitäten.",
    "k": "Watzlawick"
   },
   {
    "f": "Was besagt das fünfte Axiom?",
    "b": "Kommunikationsabläufe sind symmetrisch (Beziehung auf Gleichheit) oder komplementär (auf Unterschiedlichkeit).",
    "k": "Watzlawick"
   },
   {
    "f": "Welche vier Seiten hat eine Nachricht nach Schulz von Thun?",
    "b": "Sachinhalt, Selbstoffenbarung, Beziehung, Appell. Das Modell baut auf Watzlawicks zweitem Axiom auf.",
    "k": "Schulz von Thun"
   },
   {
    "f": "Welche Seite der Nachricht hat das größte Konfliktpotenzial?",
    "b": "Die Beziehungsseite.",
    "k": "Schulz von Thun"
   },
   {
    "f": "Wie viele Ohren hört der Empfänger gleichzeitig?",
    "b": "Alle vier — oft ist eines dominant. Das Ausblenden eines Ohrs erzeugt Missverständnisse.",
    "k": "Schulz von Thun"
   },
   {
    "f": "Wer begründete die Transaktionsanalyse?",
    "b": "Eric Berne, popularisiert durch „Ich bin okay – du bist okay“.",
    "k": "Transaktionsanalyse"
   },
   {
    "f": "Wie viele Ausprägungen haben die drei Ich-Zustände insgesamt?",
    "b": "Sechs: ELn und ELK (Eltern-Ich), ER (Erwachsenen-Ich), Kf, Ka und Kr (Kind-Ich).",
    "k": "Transaktionsanalyse"
   },
   {
    "f": "Wie verhält sich das Erwachsenen-Ich?",
    "b": "Konstruktiv, fragend, objektiv, lösungs- und zielorientiert.",
    "k": "Transaktionsanalyse"
   },
   {
    "f": "Parallel, gekreuzt oder verdeckt — welche Transaktion läuft reibungslos?",
    "b": "Die parallele: Die Antwort kommt aus dem angesprochenen Ich-Zustand zurück.",
    "k": "Transaktionsanalyse"
   },
   {
    "f": "Was ist eine verdeckte Transaktion?",
    "b": "Sie läuft auf zwei Ebenen gleichzeitig: offen verbal und versteckt para- bzw. nonverbal. Gefährlich, wenn sie nicht erkannt wird.",
    "k": "Transaktionsanalyse"
   },
   {
    "f": "Welche vier Grundhaltungen kennt die Transaktionsanalyse?",
    "b": "Ich o.k./Du o.k. (Gewinner), Ich o.k./Du nicht o.k., Ich nicht o.k./Du o.k., Ich nicht o.k./Du nicht o.k. (Verlierer).",
    "k": "Transaktionsanalyse"
   },
   {
    "f": "Wie geht man mit einem verärgerten Kunden nach der TA um?",
    "b": "Zuerst aus dem angesprochenen Ich-Zustand reagieren (spiegeln), dann sanft auf das Erwachsenen-Ich wechseln.",
    "k": "Transaktionsanalyse"
   },
   {
    "f": "Was ist ein Egogramm?",
    "b": "Eine Auswertung, wie stark die einzelnen Ich-Zustände bei einer Person vertreten sind.",
    "k": "Transaktionsanalyse"
   },
   {
    "f": "Welche vier Quadranten hat das Johari-Fenster?",
    "b": "A Arena (beiden bekannt), B Privatperson (nur mir bekannt), C blinder Fleck (nur anderen bekannt), D Unbekanntes.",
    "k": "Johari · NLP · Maslow"
   },
   {
    "f": "Wie vergrößert man die Arena im Johari-Fenster?",
    "b": "Durch Offenheit (verkleinert B) und durch Feedback (verkleinert C, den blinden Fleck).",
    "k": "Johari · NLP · Maslow"
   },
   {
    "f": "Ist NLP laut Buch eine wissenschaftliche Theorie?",
    "b": "Nein — ausdrücklich eine Sammlung von Kommunikationstechniken, keine wissenschaftliche Theorie.",
    "k": "Johari · NLP · Maslow"
   },
   {
    "f": "Pacing, Rapport, Leading — wie hängen sie zusammen?",
    "b": "Pacing ist das Spiegeln, daraus entsteht Rapport (positive Atmosphäre), erst danach folgt Leading — das sanfte Führen.",
    "k": "Johari · NLP · Maslow"
   },
   {
    "f": "Was meint die „innere Landkarte“ im NLP?",
    "b": "Die subjektive Wahrnehmung der Wirklichkeit jedes Menschen — „die Landkarte ist nicht die Landschaft“.",
    "k": "Johari · NLP · Maslow"
   },
   {
    "f": "Nennen Sie die fünf Stufen der Maslow-Pyramide.",
    "b": "Physiologische Grundbedürfnisse, Sicherheit, Sozialbedürfnisse, Wertschätzung/Anerkennung, Selbstverwirklichung.",
    "k": "Johari · NLP · Maslow"
   },
   {
    "f": "Was ist die Grundregel der Maslow-Pyramide?",
    "b": "Höhere Stufen werden erst relevant, wenn die darunterliegenden Bedürfnisse erfüllt sind.",
    "k": "Johari · NLP · Maslow"
   },
   {
    "f": "Wie ist eine Argumentation aufgebaut?",
    "b": "These → Begründung → Beispiel → Schlussfolgerung.",
    "k": "Gesprächsführung"
   },
   {
    "f": "Nennen Sie die fünf Phasen der klassischen Rhetorik.",
    "b": "Inventio (Stoffsammlung), Dispositio (Gliederung), Elocutio (Formulierung), Memoria (Memorieren), Actio (Vortrag).",
    "k": "Gesprächsführung"
   },
   {
    "f": "Wann setzt man offene, wann geschlossene Fragen ein?",
    "b": "Offene W-Fragen zu Beginn der Bedarfsermittlung für lange, informationsreiche Antworten. Geschlossene Fragen am Ende zur Absicherung.",
    "k": "Gesprächsführung"
   },
   {
    "f": "Was ist eine Suggestivfrage und wo ist sie tabu?",
    "b": "Eine Frage, die zu einer bestimmten Antwort drängt. Manipulativ — in der Bedarfsermittlung nicht einsetzen.",
    "k": "Gesprächsführung"
   },
   {
    "f": "Wofür eignet sich die Alternativfrage besonders?",
    "b": "Für die Terminvereinbarung: zwei Optionen zur Wahl, etwa „Montag oder Mittwoch?“.",
    "k": "Gesprächsführung"
   },
   {
    "f": "Was ist der Fragetrichter?",
    "b": "Gesprächsführung vom Allgemeinen zum Speziellen — von offenen zu geschlossenen Fragen.",
    "k": "Gesprächsführung"
   },
   {
    "f": "Wer begründete das aktive Zuhören — und was gehört dazu?",
    "b": "Carl Rogers. Dem Gesprächspartner werden Inhalt UND Emotion zurückgemeldet, nicht nur das Gesagte wiederholt.",
    "k": "Gesprächsführung"
   },
   {
    "f": "Nennen Sie vier typische Gesprächsstörer.",
    "b": "Vorwürfe und Anklagen, Befehlen und Drohen, Belehren und Moralisieren, vorschnelle Lösungen. Auch Ironie, Bagatellisieren, Generalisierungen.",
    "k": "Gesprächsführung"
   },
   {
    "f": "Warum sind Generalisierungen Gesprächsstörer?",
    "b": "Worte wie „immer“ und „nie“ verallgemeinern unzulässig und wirken vorwurfsvoll.",
    "k": "Gesprächsführung"
   },
   {
    "f": "Wie lang dürfen Sprechpausen maximal sein?",
    "b": "Nicht länger als 3 bis 5 Sekunden, sonst werden sie unangenehm.",
    "k": "Gesprächsführung"
   },
   {
    "f": "Warum zählt Körpersprache auch am Telefon?",
    "b": "Sie wirkt direkt auf die Stimme — eine aufrechte Haltung verbessert Volumen und Klang, eine liegende verschlechtert ihn.",
    "k": "Gesprächsführung"
   },
   {
    "f": "Wofür steht das VAK-Modell?",
    "b": "Visuell, Auditiv, Kinästhetisch — die drei Wahrnehmungstypen aus dem NLP.",
    "k": "Kundentypen"
   },
   {
    "f": "Woran erkennt man einen kinästhetischen Kunden — und was hilft?",
    "b": "An Fühl-Sprache („das setzt mich unter Druck“, „fühle mich gut aufgehoben“). Strategie: Probeexemplare anbieten.",
    "k": "Kundentypen"
   },
   {
    "f": "Wie geht man mit dem Besserwisser um?",
    "b": "Um Hilfe bitten, ihn ernst nehmen — und ihn niemals zurechtweisen.",
    "k": "Kundentypen"
   },
   {
    "f": "Wie geht man mit dem Entscheidungsschwachen um?",
    "b": "Nicht drängen, Fragetechnik einsetzen, Zwischenergebnisse zusammenfassen.",
    "k": "Kundentypen"
   },
   {
    "f": "Aus welchen drei Teilen besteht der Sprechvorgang?",
    "b": "Atmung (Respiration), Stimmgebung (Phonation), Aussprache (Artikulation).",
    "k": "Stimme & Stress"
   },
   {
    "f": "Was ist die Glottis, was das Ansatzrohr?",
    "b": "Glottis = Stimmritze, der Spalt zwischen den Stimmlippen. Ansatzrohr = lufthaltiger Raum oberhalb des Kehlkopfs (Rachen, Mund, Nase) für die Resonanz.",
    "k": "Stimme & Stress"
   },
   {
    "f": "Eustress, Disstress, Stressor — wie ordnet man das?",
    "b": "Eustress = positiv anregend, Disstress = negativ belastend. Der Stressor ist der auslösende äußere Reiz, unabhängig vom Ergebnis.",
    "k": "Stimme & Stress"
   }
  ],
  "quiz": [
   {
    "t": "mc",
    "q": "Ein Mitarbeiter schreibt: „Wir bearbeiten Ihren Fall schnellstmöglich.“ Wie ist das stilistisch zu bewerten?",
    "a": [
     "Vorbildlich, weil höflich",
     "Wir-Stil — besser wäre eine Sie-Formulierung",
     "Sie-Stil, also kundenorientiert",
     "Ein Textbaustein, daher immer korrekt"
    ],
    "c": 1,
    "e": "Der Wir-Stil stellt das Unternehmen in den Mittelpunkt. Kundenorientiert wäre: „Sie erhalten von uns zeitnah eine Rückmeldung.“",
    "k": "Schriftliche Kommunikation",
    "d": "medium",
    "s": "LF3 1.2"
   },
   {
    "t": "mc",
    "q": "Welche Norm regelt den Aufbau des Geschäftsbriefs?",
    "a": [
     "DIN 5007",
     "DIN 5008",
     "DIN 14096",
     "DIN 13157"
    ],
    "c": 1,
    "e": "DIN 5008. DIN 5007 regelt die alphabetische Ordnung in der Ablage (LF1).",
    "k": "Schriftliche Kommunikation",
    "d": "medium",
    "s": "LF3 1.1"
   },
   {
    "t": "type",
    "q": "Wie viele Zeilen darf das Anschriftenfeld nach DIN 5008 höchstens haben?",
    "ans": [
     "9",
     "neun"
    ],
    "e": "Maximal 9 Zeilen.",
    "k": "Schriftliche Kommunikation",
    "d": "medium",
    "s": "LF3 1.1"
   },
   {
    "t": "multi",
    "q": "Welche Vorteile haben Textbausteine?",
    "a": [
     "Zeitersparnis",
     "Einheitliche Qualität",
     "Weniger Fehler",
     "Höhere Individualität des Schreibens"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Individualität ist gerade der Schwachpunkt — Textbausteine wirken leicht unpersönlich.",
    "k": "Schriftliche Kommunikation",
    "d": "medium",
    "s": "LF3 1.3"
   },
   {
    "t": "tf",
    "q": "Eine aussagekräftige Betreffzeile ist bei E-Mails entbehrlich, wenn der Text kurz ist.",
    "v": false,
    "e": "Falsch. Der Betreff soll den Inhalt klar erkennbar machen.",
    "k": "Schriftliche Kommunikation",
    "d": "easy",
    "s": "LF3 1.4"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jedes Signal dem richtigen Kommunikationsmittel zu.",
    "pairs": [
     [
      "Wortwahl und Satzbau",
      "verbal"
     ],
     [
      "Tonfall, Tempo, Lautstärke",
      "paraverbal"
     ],
     [
      "Mimik, Gestik, Haltung",
      "nonverbal"
     ]
    ],
    "e": "Verbal = was gesagt wird, paraverbal = wie es klingt, nonverbal = was man sieht.",
    "k": "Kommunikationsmittel",
    "d": "medium",
    "s": "LF3 2.1"
   },
   {
    "t": "mc",
    "q": "Ein Kunde hört am Telefon, dass der Agent genervt klingt, obwohl dieser freundliche Worte wählt. Welches Kommunikationsmittel verrät ihn?",
    "a": [
     "Das verbale",
     "Das paraverbale",
     "Das nonverbale",
     "Das digitale"
    ],
    "c": 1,
    "e": "Tonfall ist paraverbal — am Telefon der entscheidende Kanal, weil das Nonverbale entfällt.",
    "k": "Kommunikationsmittel",
    "d": "hard",
    "s": "LF3 2.1"
   },
   {
    "t": "odd",
    "q": "Welches Element ist NICHT paraverbal?",
    "a": [
     "Sprechtempo",
     "Lautstärke",
     "Sprechpausen",
     "Körperhaltung"
    ],
    "c": 3,
    "e": "Die Körperhaltung ist nonverbal — sie wirkt allerdings auf die Stimme.",
    "k": "Kommunikationsmittel",
    "d": "medium",
    "s": "LF3 2.1"
   },
   {
    "t": "type",
    "q": "Wie heißt die Übereinstimmung von verbalen, paraverbalen und nonverbalen Signalen?",
    "ans": [
     "Kongruenz"
    ],
    "e": "Kongruenz. Fehlt sie, glaubt der Empfänger eher dem Ton als dem Wort.",
    "k": "Kommunikationsmittel",
    "d": "medium",
    "s": "LF3 2.1"
   },
   {
    "t": "mc",
    "q": "Ein Vorgesetzter hält eine Ansprache, ohne Rückfragen zuzulassen. Welche Kommunikationsform?",
    "a": [
     "Zwei-Wege-Kommunikation",
     "Ein-Weg-Kommunikation",
     "Metakommunikation",
     "Komplementäre Kommunikation"
    ],
    "c": 1,
    "e": "Der Empfänger bleibt Zuhörer und wird nicht selbst zum Sender.",
    "k": "Kommunikationsmittel",
    "d": "easy",
    "s": "LF3 2.2"
   },
   {
    "t": "mc",
    "q": "Ein Techniker erklärt einem Laien das Problem in Fachsprache. Welcher Teil des Sender-Empfänger-Modells scheitert?",
    "a": [
     "Die Codierung beim Sender",
     "Die Decodierung beim Empfänger, weil gemeinsame Zeichen fehlen",
     "Die Nachricht selbst existiert nicht",
     "Die Reaktion des Senders"
    ],
    "c": 1,
    "e": "Ohne gemeinsamen Zeichenvorrat kann der Empfänger nicht korrekt decodieren.",
    "k": "Kommunikationsmittel",
    "d": "hard",
    "s": "LF3 2.2"
   },
   {
    "t": "cloze",
    "q": "Watzlawicks erstes Axiom",
    "txt": "Das erste Axiom lautet im Wortlaut: „Man kann {{1}} {{2}} kommunizieren.“",
    "gaps": [
     {
      "s": "nicht",
      "o": [
       "immer",
       "selten"
      ]
     },
     {
      "s": "nicht",
      "o": [
       "doch",
       "gar"
      ]
     }
    ],
    "e": "Die doppelte Verneinung ist Teil des Wortlauts — eine sinngemäße Umformulierung gilt als falsch.",
    "k": "Watzlawick",
    "d": "hard",
    "s": "LF3 3.1"
   },
   {
    "t": "mc",
    "q": "Ein Kunde schweigt demonstrativ, nachdem der Agent einen Vorschlag gemacht hat. Welches Axiom greift?",
    "a": [
     "Erstes Axiom",
     "Zweites Axiom",
     "Drittes Axiom",
     "Viertes Axiom"
    ],
    "c": 0,
    "e": "Auch Schweigen ist Verhalten und damit Kommunikation.",
    "k": "Watzlawick",
    "d": "medium",
    "s": "LF3 3.1"
   },
   {
    "t": "mc",
    "q": "Zwei Kollegen streiten über eine Sachfrage, eigentlich geht es aber um gegenseitigen Respekt. Welches Axiom beschreibt das?",
    "a": [
     "Erstes",
     "Zweites",
     "Drittes",
     "Fünftes"
    ],
    "c": 1,
    "e": "Inhalts- und Beziehungsaspekt — der Beziehungsaspekt bestimmt den Inhaltsaspekt.",
    "k": "Watzlawick",
    "d": "medium",
    "s": "LF3 3.1"
   },
   {
    "t": "mc",
    "q": "„Ich meckere nur, weil du nie zuhörst.“ — „Ich höre nicht zu, weil du ständig meckerst.“ Welches Axiom?",
    "a": [
     "Zweites Axiom",
     "Drittes Axiom (Interpunktion)",
     "Viertes Axiom",
     "Fünftes Axiom"
    ],
    "c": 1,
    "e": "Jeder setzt den Anfang der Kette beim anderen — klassische Interpunktionsfalle.",
    "k": "Watzlawick",
    "d": "hard",
    "s": "LF3 3.1"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jedem Axiom sein Stichwort zu.",
    "pairs": [
     [
      "Erstes Axiom",
      "Man kann nicht nicht kommunizieren"
     ],
     [
      "Zweites Axiom",
      "Inhalts- und Beziehungsaspekt"
     ],
     [
      "Drittes Axiom",
      "Interpunktion"
     ],
     [
      "Viertes Axiom",
      "digital und analog"
     ],
     [
      "Fünftes Axiom",
      "symmetrisch oder komplementär"
     ]
    ],
    "e": "Die fünf Axiome in ihrer Reihenfolge.",
    "k": "Watzlawick",
    "d": "hard",
    "s": "LF3 3.1"
   },
   {
    "t": "mc",
    "q": "Ein Arzt-Patient-Gespräch beruht auf ungleichen Rollen. Wie nennt Watzlawick das?",
    "a": [
     "Symmetrisch",
     "Komplementär",
     "Digital",
     "Analog"
    ],
    "c": 1,
    "e": "Komplementär = Beziehung auf Unterschiedlichkeit. Symmetrisch wäre Gleichrangigkeit.",
    "k": "Watzlawick",
    "d": "hard",
    "s": "LF3 3.1"
   },
   {
    "t": "tf",
    "q": "Digitale Modalitäten im vierten Axiom meinen die Kommunikation über elektronische Medien.",
    "v": false,
    "e": "Falsch. Digital meint Worte und Zeichen, analog die Körpersprache und Stimmlage.",
    "k": "Watzlawick",
    "d": "hard",
    "s": "LF3 3.1"
   },
   {
    "t": "type",
    "q": "Wie nennt man einen anerkannten Grundsatz, der ohne Beweis gilt?",
    "ans": [
     "Axiom"
    ],
    "e": "Axiom.",
    "k": "Watzlawick",
    "d": "easy",
    "s": "LF3 3.1"
   },
   {
    "t": "match",
    "q": "„Das Telefon klingelt schon wieder.“ — Ordnen Sie jede Deutung der richtigen Seite zu.",
    "pairs": [
     [
      "Ein Anruf geht ein",
      "Sachinhalt"
     ],
     [
      "Ich bin überlastet",
      "Selbstoffenbarung"
     ],
     [
      "Du tust hier zu wenig",
      "Beziehung"
     ],
     [
      "Geh bitte ran",
      "Appell"
     ]
    ],
    "e": "Dieselbe Aussage, vier Botschaften — das ist der Kern des Vier-Seiten-Modells.",
    "k": "Schulz von Thun",
    "d": "hard",
    "s": "LF3 3.2"
   },
   {
    "t": "mc",
    "q": "Welche Seite der Nachricht hat das größte Konfliktpotenzial?",
    "a": [
     "Sachinhalt",
     "Selbstoffenbarung",
     "Beziehung",
     "Appell"
    ],
    "c": 2,
    "e": "Die Beziehungsseite — sie sagt, wie ich zum anderen stehe.",
    "k": "Schulz von Thun",
    "d": "medium",
    "s": "LF3 3.2"
   },
   {
    "t": "mc",
    "q": "Ein Mitarbeiter hört jede Rückfrage als Kritik an seiner Person. Welches Ohr ist dominant?",
    "a": [
     "Sachohr",
     "Selbstoffenbarungsohr",
     "Beziehungsohr",
     "Appellohr"
    ],
    "c": 2,
    "e": "Das Beziehungsohr filtert alles auf „Was hält der andere von mir?“.",
    "k": "Schulz von Thun",
    "d": "hard",
    "s": "LF3 3.2"
   },
   {
    "t": "tf",
    "q": "Der Empfänger hört immer nur eine der vier Seiten einer Nachricht.",
    "v": false,
    "e": "Falsch. Er hört alle vier gleichzeitig, oft ist eine dominant.",
    "k": "Schulz von Thun",
    "d": "medium",
    "s": "LF3 3.2"
   },
   {
    "t": "mc",
    "q": "Auf welchem Watzlawick-Axiom baut das Vier-Seiten-Modell auf?",
    "a": [
     "Erstem",
     "Zweitem",
     "Drittem",
     "Fünftem"
    ],
    "c": 1,
    "e": "Auf dem Inhalts- und Beziehungsaspekt des zweiten Axioms.",
    "k": "Schulz von Thun",
    "d": "hard",
    "s": "LF3 3.2"
   },
   {
    "t": "cloze",
    "q": "Vier Seiten einer Nachricht",
    "txt": "Die vier Seiten lauten {{1}}, {{2}}, {{3}} und {{4}}. Entwickelt wurden sie von {{5}}.",
    "gaps": [
     {
      "s": "Sachinhalt",
      "o": [
       "Appell",
       "Beziehung"
      ]
     },
     {
      "s": "Selbstoffenbarung",
      "o": [
       "Sachinhalt",
       "Interpunktion"
      ]
     },
     {
      "s": "Beziehung",
      "o": [
       "Sachinhalt",
       "Rapport"
      ]
     },
     {
      "s": "Appell",
      "o": [
       "Beziehung",
       "Selbstoffenbarung"
      ]
     },
     {
      "s": "Schulz von Thun",
      "o": [
       "Watzlawick",
       "Eric Berne"
      ]
     }
    ],
    "e": "Sachinhalt, Selbstoffenbarung, Beziehung, Appell.",
    "k": "Schulz von Thun",
    "d": "medium",
    "s": "LF3 3.2"
   },
   {
    "t": "mc",
    "q": "Wer begründete die Transaktionsanalyse?",
    "a": [
     "Paul Watzlawick",
     "Eric Berne",
     "Carl Rogers",
     "Friedemann Schulz von Thun"
    ],
    "c": 1,
    "e": "Eric Berne, popularisiert durch „Ich bin okay – du bist okay“.",
    "k": "Transaktionsanalyse",
    "d": "easy",
    "s": "LF3 3.3"
   },
   {
    "t": "calc",
    "q": "Wie viele Ausprägungen haben die drei Ich-Zustände der Transaktionsanalyse zusammen?",
    "ans": [
     "6",
     "sechs"
    ],
    "unit": "Ausprägungen",
    "hint": "Eltern-Ich 2, Erwachsenen-Ich 1, Kind-Ich 3.",
    "e": "ELn, ELK, ER, Kf, Ka, Kr = 6.",
    "k": "Transaktionsanalyse",
    "d": "medium",
    "s": "LF3 3.3"
   },
   {
    "t": "multi",
    "q": "Welche Ausprägungen gehören zum Kind-Ich?",
    "a": [
     "freies Kind-Ich",
     "angepasstes Kind-Ich",
     "rebellisches Kind-Ich",
     "kritisches Kind-Ich"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "„Kritisch“ gehört zum Eltern-Ich, nicht zum Kind-Ich.",
    "k": "Transaktionsanalyse",
    "d": "hard",
    "s": "LF3 3.3"
   },
   {
    "t": "mc",
    "q": "Kunde: „Können Sie mir die Rechnungsposition erklären?“ Agent: „Selbstverständlich, schauen wir sie gemeinsam durch.“ Welche Transaktion?",
    "a": [
     "Parallel",
     "Gekreuzt",
     "Verdeckt",
     "Komplementär gestört"
    ],
    "c": 0,
    "e": "Erwachsenen-Ich spricht Erwachsenen-Ich an und bekommt von dort die Antwort.",
    "k": "Transaktionsanalyse",
    "d": "medium",
    "s": "LF3 3.3"
   },
   {
    "t": "mc",
    "q": "Kunde fragt sachlich nach dem Liefertermin, der Agent antwortet: „Das hätten Sie auch selbst nachlesen können.“ Welche Transaktion?",
    "a": [
     "Parallel",
     "Gekreuzt",
     "Verdeckt",
     "Symmetrisch"
    ],
    "c": 1,
    "e": "Angesprochen war das Erwachsenen-Ich, geantwortet hat das kritische Eltern-Ich.",
    "k": "Transaktionsanalyse",
    "d": "hard",
    "s": "LF3 3.3"
   },
   {
    "t": "mc",
    "q": "Der Agent sagt freundlich „Gern helfe ich Ihnen“, klingt dabei aber betont gelangweilt. Welche Transaktion?",
    "a": [
     "Parallel",
     "Gekreuzt",
     "Verdeckt",
     "Keine, es fehlt der Reiz"
    ],
    "c": 2,
    "e": "Zwei Ebenen gleichzeitig: verbal offen, paraverbal versteckt.",
    "k": "Transaktionsanalyse",
    "d": "hard",
    "s": "LF3 3.3"
   },
   {
    "t": "mc",
    "q": "Ein Kunde brüllt aus dem rebellischen Kind-Ich. Was empfiehlt das Buch?",
    "a": [
     "Sofort sachlich aus dem Erwachsenen-Ich antworten",
     "Zuerst aus dem angesprochenen Ich-Zustand reagieren, dann sanft zum Erwachsenen-Ich wechseln",
     "Aus dem kritischen Eltern-Ich kontern",
     "Das Gespräch sofort beenden"
    ],
    "c": 1,
    "e": "Erst spiegeln, dann überleiten — der abrupte Sprung ins Erwachsenen-Ich wirkt abweisend.",
    "k": "Transaktionsanalyse",
    "d": "hard",
    "s": "LF3 3.3"
   },
   {
    "t": "mc",
    "q": "Welche Grundhaltung gilt in der TA als Gewinner-Position?",
    "a": [
     "Ich o.k. / Du nicht o.k.",
     "Ich nicht o.k. / Du o.k.",
     "Ich o.k. / Du o.k.",
     "Ich nicht o.k. / Du nicht o.k."
    ],
    "c": 2,
    "e": "Ich o.k./Du o.k. ist die Gewinnerposition, Ich nicht o.k./Du nicht o.k. die Verliererposition.",
    "k": "Transaktionsanalyse",
    "d": "medium",
    "s": "LF3 3.3"
   },
   {
    "t": "tf",
    "q": "Laut Buch ist gar keine Zuwendung besser als negative Zuwendung.",
    "v": false,
    "e": "Falsch — genau umgekehrt: negative Zuwendung ist besser als gar keine.",
    "k": "Transaktionsanalyse",
    "d": "hard",
    "s": "LF3 3.3"
   },
   {
    "t": "type",
    "q": "Wie heißt die Auswertung, die zeigt, wie stark die Ich-Zustände bei einer Person vertreten sind?",
    "ans": [
     "Egogramm"
    ],
    "e": "Egogramm.",
    "k": "Transaktionsanalyse",
    "d": "hard",
    "s": "LF3 3.3"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jede Aussage dem passenden Ich-Zustand zu.",
    "pairs": [
     [
      "„Lass mich das für dich übernehmen, du schaffst das nicht.“",
      "nährendes Eltern-Ich"
     ],
     [
      "„So macht man das nicht!“",
      "kritisches Eltern-Ich"
     ],
     [
      "„Wie hoch ist der Betrag genau?“",
      "Erwachsenen-Ich"
     ],
     [
      "„Ich mache das jetzt trotzdem.“",
      "rebellisches Kind-Ich"
     ]
    ],
    "e": "Fürsorge, Kritik, Sachlichkeit, Auflehnung.",
    "k": "Transaktionsanalyse",
    "d": "hard",
    "s": "LF3 3.3"
   },
   {
    "t": "mc",
    "q": "Ein Kollege wird als ungeduldig wahrgenommen, hält sich selbst aber für ruhig. Welcher Johari-Quadrant?",
    "a": [
     "Arena",
     "Privatperson",
     "Blinder Fleck",
     "Unbekanntes"
    ],
    "c": 2,
    "e": "Anderen bekannt, mir selbst unbekannt = blinder Fleck.",
    "k": "Johari · NLP · Maslow",
    "d": "medium",
    "s": "LF3 3.4"
   },
   {
    "t": "mc",
    "q": "Wodurch verkleinert sich der blinde Fleck?",
    "a": [
     "Durch Offenheit",
     "Durch Feedback",
     "Durch Schweigen",
     "Durch Pacing"
    ],
    "c": 1,
    "e": "Feedback verkleinert C, Offenheit verkleinert B — beides vergrößert die Arena.",
    "k": "Johari · NLP · Maslow",
    "d": "hard",
    "s": "LF3 3.4"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jedem Johari-Quadranten seine Beschreibung zu.",
    "pairs": [
     [
      "Arena",
      "beiden bekannt"
     ],
     [
      "Privatperson",
      "nur mir bekannt"
     ],
     [
      "Blinder Fleck",
      "nur den anderen bekannt"
     ],
     [
      "Unbekanntes",
      "weder mir noch anderen bekannt"
     ]
    ],
    "e": "A, B, C, D des Johari-Fensters.",
    "k": "Johari · NLP · Maslow",
    "d": "medium",
    "s": "LF3 3.4"
   },
   {
    "t": "tf",
    "q": "NLP ist laut Buch eine anerkannte wissenschaftliche Theorie.",
    "v": false,
    "e": "Falsch. Das Buch bezeichnet NLP ausdrücklich als Sammlung von Kommunikationstechniken.",
    "k": "Johari · NLP · Maslow",
    "d": "hard",
    "s": "LF3 3.5"
   },
   {
    "t": "order",
    "q": "Bringen Sie die NLP-Schritte in die richtige Reihenfolge.",
    "items": [
     "Pacing",
     "Rapport",
     "Leading"
    ],
    "e": "Erst spiegeln, daraus entsteht die positive Atmosphäre, dann führen.",
    "k": "Johari · NLP · Maslow",
    "d": "medium",
    "s": "LF3 3.5"
   },
   {
    "t": "mc",
    "q": "Ein Agent passt Sprechtempo und Wortwahl an den Kunden an. Wie heißt die Technik?",
    "a": [
     "Leading",
     "Pacing",
     "Paraphrasieren",
     "Priming"
    ],
    "c": 1,
    "e": "Pacing ist das Spiegeln des Gesprächspartners.",
    "k": "Johari · NLP · Maslow",
    "d": "medium",
    "s": "LF3 3.5"
   },
   {
    "t": "cloze",
    "q": "NLP",
    "txt": "NLP steht für {{1}}, {{2}} und {{3}}. Der Grundsatz „die Landkarte ist nicht die Landschaft“ beschreibt die {{4}}.",
    "gaps": [
     {
      "s": "Neurologisch",
      "o": [
       "Nonverbal",
       "Normativ"
      ]
     },
     {
      "s": "Linguistisch",
      "o": [
       "Logisch",
       "Lateral"
      ]
     },
     {
      "s": "Programmieren",
      "o": [
       "Präsentieren",
       "Perzipieren"
      ]
     },
     {
      "s": "innere Landkarte",
      "o": [
       "Kongruenz",
       "Metakommunikation"
      ]
     }
    ],
    "e": "Neurologisch, Linguistisch, Programmieren — plus die subjektive innere Landkarte.",
    "k": "Johari · NLP · Maslow",
    "d": "hard",
    "s": "LF3 3.5"
   },
   {
    "t": "order",
    "q": "Bringen Sie die Maslow-Stufen von unten nach oben.",
    "items": [
     "Physiologische Grundbedürfnisse",
     "Sicherheit",
     "Sozialbedürfnisse",
     "Wertschätzung und Anerkennung",
     "Selbstverwirklichung"
    ],
    "e": "Höhere Stufen werden erst relevant, wenn die darunter liegenden erfüllt sind.",
    "k": "Johari · NLP · Maslow",
    "d": "medium",
    "s": "LF3 3.6"
   },
   {
    "t": "mc",
    "q": "Ein Kunde betont, wie wichtig ihm ein exklusiver Premiumstatus ist. Welche Maslow-Stufe?",
    "a": [
     "Sicherheit",
     "Sozialbedürfnisse",
     "Wertschätzung und Anerkennung",
     "Selbstverwirklichung"
    ],
    "c": 2,
    "e": "Status und Anerkennung sind Stufe 4.",
    "k": "Johari · NLP · Maslow",
    "d": "hard",
    "s": "LF3 3.6"
   },
   {
    "t": "mc",
    "q": "Ein Kunde fragt vor allem nach Garantie, Datensicherheit und Kündigungsschutz. Welche Maslow-Stufe?",
    "a": [
     "Physiologische Grundbedürfnisse",
     "Sicherheit",
     "Sozialbedürfnisse",
     "Wertschätzung"
    ],
    "c": 1,
    "e": "Schutz vor Risiken ist Stufe 2.",
    "k": "Johari · NLP · Maslow",
    "d": "medium",
    "s": "LF3 3.6"
   },
   {
    "t": "order",
    "q": "Bringen Sie den Aufbau einer Argumentation in die richtige Reihenfolge.",
    "items": [
     "These",
     "Begründung",
     "Beispiel",
     "Schlussfolgerung"
    ],
    "e": "These – Begründung – Beispiel – Schlussfolgerung.",
    "k": "Gesprächsführung",
    "d": "medium",
    "s": "LF3 4.1"
   },
   {
    "t": "order",
    "q": "Bringen Sie die fünf Phasen der klassischen Rhetorik in die richtige Reihenfolge.",
    "items": [
     "Inventio",
     "Dispositio",
     "Elocutio",
     "Memoria",
     "Actio"
    ],
    "e": "Stoffsammlung, Gliederung, Formulierung, Memorieren, Vortrag.",
    "k": "Gesprächsführung",
    "d": "hard",
    "s": "LF3 4.1"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jede rhetorische Phase ihrer Aufgabe zu.",
    "pairs": [
     [
      "Inventio",
      "Stoffsammlung"
     ],
     [
      "Dispositio",
      "Gliederung"
     ],
     [
      "Elocutio",
      "Formulierung"
     ],
     [
      "Actio",
      "Vortrag"
     ]
    ],
    "e": "Memoria als fünfte Phase meint das Memorieren.",
    "k": "Gesprächsführung",
    "d": "hard",
    "s": "LF3 4.1"
   },
   {
    "t": "mc",
    "q": "„Was ist Ihnen bei einem neuen Tarif besonders wichtig?“ Welcher Fragetyp und wozu?",
    "a": [
     "Geschlossene Frage zur Absicherung",
     "Offene Frage zur Bedarfsermittlung",
     "Suggestivfrage zum Abschluss",
     "Alternativfrage zur Terminierung"
    ],
    "c": 1,
    "e": "Offene W-Fragen erzeugen lange, informationsreiche Antworten — ideal zu Beginn.",
    "k": "Gesprächsführung",
    "d": "easy",
    "s": "LF3 4.2"
   },
   {
    "t": "mc",
    "q": "„Sie möchten also den Vertrag zum 1. Mai umstellen, richtig?“ Welcher Fragetyp?",
    "a": [
     "Offene Frage",
     "Geschlossene Frage",
     "Suggestivfrage",
     "Gegenfrage"
    ],
    "c": 1,
    "e": "Geschlossene Fragen sichern am Ende der Bedarfsermittlung das Verstandene ab.",
    "k": "Gesprächsführung",
    "d": "medium",
    "s": "LF3 4.2"
   },
   {
    "t": "mc",
    "q": "„Sie wollen doch sicher auch sparen, oder?“ Welcher Fragetyp — und warum problematisch?",
    "a": [
     "Alternativfrage, sie schränkt zu stark ein",
     "Suggestivfrage, sie drängt zu einer Antwort",
     "Offene Frage, sie ist zu weit",
     "Geschlossene Frage, sie kommt zu früh"
    ],
    "c": 1,
    "e": "Suggestivfragen wirken manipulativ und gehören nicht in die Bedarfsermittlung.",
    "k": "Gesprächsführung",
    "d": "medium",
    "s": "LF3 4.2"
   },
   {
    "t": "mc",
    "q": "„Passt Ihnen Dienstag oder Donnerstag besser?“ Wofür eignet sich dieser Fragetyp besonders?",
    "a": [
     "Bedarfsermittlung",
     "Terminvereinbarung",
     "Beschwerdeaufnahme",
     "Preisverhandlung"
    ],
    "c": 1,
    "e": "Die Alternativfrage gibt zwei Optionen und erleichtert die Terminvereinbarung.",
    "k": "Gesprächsführung",
    "d": "medium",
    "s": "LF3 4.2"
   },
   {
    "t": "mc",
    "q": "Was beschreibt der Fragetrichter?",
    "a": [
     "Vom Speziellen zum Allgemeinen",
     "Vom Allgemeinen zum Speziellen, von offenen zu geschlossenen Fragen",
     "Nur geschlossene Fragen",
     "Abwechselnd offene und suggestive Fragen"
    ],
    "c": 1,
    "e": "Breit beginnen, dann verengen und absichern.",
    "k": "Gesprächsführung",
    "d": "medium",
    "s": "LF3 4.2"
   },
   {
    "t": "cloze",
    "q": "Fragetechnik",
    "txt": "{{1}} Fragen erzeugen lange, informationsreiche Antworten und stehen am {{2}} der Bedarfsermittlung. {{3}} Fragen liefern kurze, eindeutige Antworten und dienen am {{4}} der Absicherung.",
    "gaps": [
     {
      "s": "Offene",
      "o": [
       "Geschlossene",
       "Suggestive"
      ]
     },
     {
      "s": "Anfang",
      "o": [
       "Ende",
       "Wendepunkt"
      ]
     },
     {
      "s": "Geschlossene",
      "o": [
       "Offene",
       "Rhetorische"
      ]
     },
     {
      "s": "Ende",
      "o": [
       "Anfang",
       "Übergang"
      ]
     }
    ],
    "e": "Offen zuerst, geschlossen zuletzt — der Fragetrichter.",
    "k": "Gesprächsführung",
    "d": "medium",
    "s": "LF3 4.2"
   },
   {
    "t": "mc",
    "q": "Wer begründete das aktive Zuhören?",
    "a": [
     "Eric Berne",
     "Carl Rogers",
     "Paul Watzlawick",
     "Joseph Luft"
    ],
    "c": 1,
    "e": "Carl Rogers im Rahmen der klientenzentrierten Gesprächsführung.",
    "k": "Gesprächsführung",
    "d": "medium",
    "s": "LF3 4.3"
   },
   {
    "t": "mc",
    "q": "Ein Agent wiederholt korrekt jeden Satz des Kunden, geht aber nie auf dessen Ärger ein. Was fehlt?",
    "a": [
     "Nichts, das ist aktives Zuhören",
     "Die Rückmeldung der Emotion",
     "Die geschlossene Frage",
     "Der Sie-Stil"
    ],
    "c": 1,
    "e": "Aktives Zuhören meldet Inhalt UND Emotion zurück.",
    "k": "Gesprächsführung",
    "d": "hard",
    "s": "LF3 4.3"
   },
   {
    "t": "multi",
    "q": "Welche Verhaltensweisen sind Gesprächsstörer?",
    "a": [
     "Belehren und Moralisieren",
     "Vorschnelle Lösungen anbieten",
     "Generalisierungen wie „immer“ und „nie“",
     "Paraphrasieren"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Paraphrasieren ist ein Gesprächsförderer.",
    "k": "Gesprächsführung",
    "d": "medium",
    "s": "LF3 4.3"
   },
   {
    "t": "multi",
    "q": "Welche Verhaltensweisen sind Gesprächsförderer?",
    "a": [
     "Pausen einbauen",
     "Aktives Zuhören",
     "Nachfragen",
     "Ironie einsetzen"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Ironie zählt zu den Gesprächsstörern.",
    "k": "Gesprächsführung",
    "d": "medium",
    "s": "LF3 4.3"
   },
   {
    "t": "odd",
    "q": "Welches Verhalten gehört NICHT zu den Gesprächsstörern?",
    "a": [
     "Bagatellisieren",
     "Drohen",
     "Positive Wertschätzung",
     "Vorwürfe machen"
    ],
    "c": 2,
    "e": "Positive Wertschätzung ist ein Förderer.",
    "k": "Gesprächsführung",
    "d": "easy",
    "s": "LF3 4.3"
   },
   {
    "t": "mc",
    "q": "Ein Agent sagt „ja“ und „mhm“, hat aber gedanklich abgeschaltet. Wie nennt das Buch das?",
    "a": [
     "Aktives Zuhören",
     "Pseudo-Zuhören",
     "Paraphrasieren",
     "Pacing"
    ],
    "c": 1,
    "e": "Pseudo-Zuhören wird schnell entlarvt und wirkt als Gesprächsstörer.",
    "k": "Gesprächsführung",
    "d": "medium",
    "s": "LF3 4.3"
   },
   {
    "t": "type",
    "q": "Wie lang dürfen Sprechpausen höchstens sein, bevor sie unangenehm werden? (in Sekunden, Bereich)",
    "ans": [
     "3-5",
     "3–5",
     "3 bis 5",
     "5"
    ],
    "unit": "Sekunden",
    "e": "Nicht länger als 3 bis 5 Sekunden.",
    "k": "Gesprächsführung",
    "d": "hard",
    "s": "LF3 4.4"
   },
   {
    "t": "mc",
    "q": "Wie wirkt eine zu leise Sprechweise auf den Kunden?",
    "a": [
     "Aggressiv und hektisch",
     "Unsicher und inkompetent",
     "Souverän und ruhig",
     "Freundlich und nahbar"
    ],
    "c": 1,
    "e": "Zu laut wirkt aggressiv, zu leise unsicher.",
    "k": "Gesprächsführung",
    "d": "medium",
    "s": "LF3 4.4"
   },
   {
    "t": "tf",
    "q": "Körpersprache spielt am Telefon keine Rolle, weil der Kunde sie nicht sieht.",
    "v": false,
    "e": "Falsch. Sie wirkt direkt auf die Stimme — eine aufrechte Haltung verbessert Volumen und Klang.",
    "k": "Gesprächsführung",
    "d": "medium",
    "s": "LF3 4.4"
   },
   {
    "t": "mc",
    "q": "Ein Kunde sagt: „Ich sehe das Problem noch nicht klar vor mir.“ Welcher Wahrnehmungstyp?",
    "a": [
     "Visuell",
     "Auditiv",
     "Kinästhetisch",
     "Olfaktorisch"
    ],
    "c": 0,
    "e": "Seh-Sprache. Strategie: bildhaft formulieren, Prospekte oder Webseiten zeigen.",
    "k": "Kundentypen",
    "d": "medium",
    "s": "LF3 5.1"
   },
   {
    "t": "mc",
    "q": "Ein Kunde sagt: „Damit fühle ich mich nicht gut aufgehoben.“ Welcher Typ und welche Strategie?",
    "a": [
     "Visuell — Prospekt schicken",
     "Auditiv — ausführlich erklären",
     "Kinästhetisch — Probeexemplar anbieten",
     "Visuell — Grafik zeigen"
    ],
    "c": 2,
    "e": "Fühl-Sprache verweist auf den kinästhetischen Typ.",
    "k": "Kundentypen",
    "d": "hard",
    "s": "LF3 5.1"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jedem Kundentyp die passende Strategie zu.",
    "pairs": [
     [
      "Besserwisser",
      "um Hilfe bitten, ernst nehmen, nie zurechtweisen"
     ],
     [
      "Vielredner",
      "gezielt unterbrechen und zusammenfassen"
     ],
     [
      "Entscheidungsschwacher",
      "nicht drängen, Zwischenergebnisse zusammenfassen"
     ],
     [
      "Schweiger",
      "offene Fragen stellen und Zeit lassen"
     ]
    ],
    "e": "Jeder Typ verlangt eine eigene Gesprächsstrategie.",
    "k": "Kundentypen",
    "d": "hard",
    "s": "LF3 5.2"
   },
   {
    "t": "mc",
    "q": "Wie geht man laut Buch mit einem aggressiven Kunden um?",
    "a": [
     "Mit gleicher Härte kontern",
     "Ruhig bleiben, sich nicht provozieren lassen, ggf. ins Beschwerdemanagement überleiten",
     "Das Gespräch sofort beenden",
     "Ihm sofort recht geben"
    ],
    "c": 1,
    "e": "Ruhe bewahren und bei Bedarf eskalieren.",
    "k": "Kundentypen",
    "d": "medium",
    "s": "LF3 5.2"
   },
   {
    "t": "mc",
    "q": "Wie geht man mit dem impulsiven Kunden um?",
    "a": [
     "Ihn ausführlich beraten",
     "Schnell zu einem verbindlichen Abschluss kommen und nächste Schritte festmachen",
     "Ihn bremsen und vertrösten",
     "Ihm ausschließlich geschlossene Fragen stellen"
    ],
    "c": 1,
    "e": "Der Impulsive braucht Tempo und Verbindlichkeit.",
    "k": "Kundentypen",
    "d": "medium",
    "s": "LF3 5.2"
   },
   {
    "t": "tf",
    "q": "Den Besserwisser sollte man freundlich, aber deutlich zurechtweisen.",
    "v": false,
    "e": "Falsch. Das Buch sagt ausdrücklich: ihn nie zurechtweisen, sondern um Hilfe bitten und ernst nehmen.",
    "k": "Kundentypen",
    "d": "medium",
    "s": "LF3 5.2"
   },
   {
    "t": "mc",
    "q": "Wozu dient die Buchstabiertafel?",
    "a": [
     "Zur Verschlüsselung von Kundendaten",
     "Zum eindeutigen Buchstabieren",
     "Zur Qualitätsmessung",
     "Zur Gesprächsdokumentation"
    ],
    "c": 1,
    "e": "Deutschland: Anton, Bertha, Cäsar. International nach ITU: Alfa, Bravo, Charlie.",
    "k": "Kundentypen",
    "d": "easy",
    "s": "LF3 5.2"
   },
   {
    "t": "order",
    "q": "Bringen Sie die drei Teile des Sprechvorgangs in die richtige Reihenfolge.",
    "items": [
     "Atmung (Respiration)",
     "Stimmgebung (Phonation)",
     "Aussprache (Artikulation)"
    ],
    "e": "Luft, Schwingung, Formung.",
    "k": "Stimme & Stress",
    "d": "medium",
    "s": "LF3 5.3"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jedem anatomischen Begriff seine Bedeutung zu.",
    "pairs": [
     [
      "Glottis",
      "Spalt zwischen den Stimmlippen"
     ],
     [
      "Ansatzrohr",
      "Raum oberhalb des Kehlkopfs für Resonanz"
     ],
     [
      "Kehlkopf",
      "enthält die beiden Stimmlippen"
     ]
    ],
    "e": "Stimmritze, Resonanzraum, Stimmlippenträger.",
    "k": "Stimme & Stress",
    "d": "hard",
    "s": "LF3 5.3"
   },
   {
    "t": "multi",
    "q": "Welche Stimmbelastungen nennt das Buch für die Callcenter-Arbeit?",
    "a": [
     "Unnatürliches Sprechen",
     "Lautes Sprechen in lauter Umgebung",
     "Trockene Heizungsluft",
     "Zu viele Sprechpausen"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Auch Fehlhaltung und Stress zählen dazu — Pausen entlasten die Stimme eher.",
    "k": "Stimme & Stress",
    "d": "medium",
    "s": "LF3 5.3"
   },
   {
    "t": "mc",
    "q": "Ein Agent empfindet den Anrufansturm als anregende Herausforderung. Wie heißt dieser Stress?",
    "a": [
     "Disstress",
     "Eustress",
     "Stressor",
     "Emotionsarbeit"
    ],
    "c": 1,
    "e": "Positiv empfundener, anregender Stress.",
    "k": "Stimme & Stress",
    "d": "medium",
    "s": "LF3 5.4"
   },
   {
    "t": "mc",
    "q": "Der auslösende äußere Reiz heißt …",
    "a": [
     "Eustress",
     "Disstress",
     "Stressor",
     "Burnout"
    ],
    "c": 2,
    "e": "Der Stressor löst aus — ob daraus Eu- oder Disstress wird, entscheidet die Bewertung.",
    "k": "Stimme & Stress",
    "d": "medium",
    "s": "LF3 5.4"
   },
   {
    "t": "mc",
    "q": "Ein Agent muss freundlich klingen, obwohl er verärgert ist. Wie nennt das Buch diese Belastung?",
    "a": [
     "Disstress",
     "Emotionsarbeit",
     "Pseudo-Zuhören",
     "Inkongruenz"
    ],
    "c": 1,
    "e": "Emotionsarbeit: die zehrende Kluft zwischen gefühlter und vorgeschriebener Stimmung.",
    "k": "Stimme & Stress",
    "d": "hard",
    "s": "LF3 5.4"
   },
   {
    "t": "cloze",
    "q": "Stressbegriffe",
    "txt": "Positiv empfundener, anregender Stress heißt {{1}}, negativ belastender {{2}}. Der auslösende äußere Reiz wird {{3}} genannt.",
    "gaps": [
     {
      "s": "Eustress",
      "o": [
       "Disstress",
       "Stressor"
      ]
     },
     {
      "s": "Disstress",
      "o": [
       "Eustress",
       "Burnout"
      ]
     },
     {
      "s": "Stressor",
      "o": [
       "Eustress",
       "Emotionsarbeit"
      ]
     }
    ],
    "e": "Eustress, Disstress, Stressor.",
    "k": "Stimme & Stress",
    "d": "medium",
    "s": "LF3 5.4"
   },
   {
    "t": "type",
    "q": "Wie heißt der Fachbegriff für die Kluft zwischen gefühlter und vorgeschriebener Stimmung?",
    "ans": [
     "Emotionsarbeit"
    ],
    "e": "Emotionsarbeit — typisch für die Callcenter-Arbeit.",
    "k": "Stimme & Stress",
    "d": "hard",
    "s": "LF3 5.4"
   },
   {
    "t": "mc",
    "q": "Ein Kunde beschwert sich schriftlich. Welche Formulierung ist kundenorientiert?",
    "a": [
     "Wir können Ihrem Wunsch leider nicht entsprechen.",
     "Sie erhalten von uns bis Freitag eine verbindliche Lösung.",
     "Unsere Abteilung prüft das nach internen Vorgaben.",
     "Wir haben Ihr Schreiben zur Kenntnis genommen."
    ],
    "c": 1,
    "e": "Sie-Stil, konkret und mit Termin — statt Wir-Stil und Floskel.",
    "k": "Schriftliche Kommunikation",
    "d": "hard",
    "s": "LF3 1.2"
   },
   {
    "t": "multi",
    "q": "Was gehört zur nonverbalen Kommunikation?",
    "a": [
     "Mimik",
     "Gestik",
     "Körperhaltung",
     "Sprechtempo"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Sprechtempo ist paraverbal.",
    "k": "Kommunikationsmittel",
    "d": "medium",
    "s": "LF3 2.1"
   },
   {
    "t": "odd",
    "q": "Welcher Begriff gehört nicht zu den drei Kommunikationsmitteln?",
    "a": [
     "verbal",
     "paraverbal",
     "nonverbal",
     "interpersonal"
    ],
    "c": 3,
    "e": "Die drei Mittel sind verbal, paraverbal und nonverbal.",
    "k": "Kommunikationsmittel",
    "d": "easy",
    "s": "LF3 2.1"
   },
   {
    "t": "odd",
    "q": "Welche Seite gehört nicht zum Vier-Seiten-Modell?",
    "a": [
     "Sachinhalt",
     "Selbstoffenbarung",
     "Interpunktion",
     "Appell"
    ],
    "c": 2,
    "e": "Die Interpunktion gehört zu Watzlawicks drittem Axiom.",
    "k": "Schulz von Thun",
    "d": "medium",
    "s": "LF3 3.2"
   },
   {
    "t": "odd",
    "q": "Welcher Ich-Zustand existiert in der Transaktionsanalyse nicht?",
    "a": [
     "nährendes Eltern-Ich",
     "kritisches Eltern-Ich",
     "kritisches Erwachsenen-Ich",
     "angepasstes Kind-Ich"
    ],
    "c": 2,
    "e": "Das Erwachsenen-Ich hat nur eine Ausprägung.",
    "k": "Transaktionsanalyse",
    "d": "hard",
    "s": "LF3 3.3"
   },
   {
    "t": "odd",
    "q": "Welcher Begriff gehört nicht zum NLP?",
    "a": [
     "Pacing",
     "Rapport",
     "Leading",
     "Interpunktion"
    ],
    "c": 3,
    "e": "Interpunktion stammt von Watzlawick.",
    "k": "Johari · NLP · Maslow",
    "d": "medium",
    "s": "LF3 3.5"
   },
   {
    "t": "tf",
    "q": "Bei der symmetrischen Kommunikation beruht die Beziehung auf Unterschiedlichkeit.",
    "v": false,
    "e": "Falsch — symmetrisch beruht auf Gleichheit, komplementär auf Unterschiedlichkeit.",
    "k": "Watzlawick",
    "d": "hard",
    "s": "LF3 3.1"
   },
   {
    "t": "tf",
    "q": "Der Beziehungsaspekt bestimmt laut zweitem Axiom den Inhaltsaspekt.",
    "v": true,
    "e": "Richtig — deshalb scheitern Sachdiskussionen oft an der Beziehungsebene.",
    "k": "Watzlawick",
    "d": "medium",
    "s": "LF3 3.1"
   },
   {
    "t": "tf",
    "q": "Eine parallele Transaktion führt in der Regel zu Störungen.",
    "v": false,
    "e": "Falsch. Die parallele Transaktion läuft reibungslos, die gekreuzte stört.",
    "k": "Transaktionsanalyse",
    "d": "medium",
    "s": "LF3 3.3"
   },
   {
    "t": "tf",
    "q": "Textbausteine ersetzen die individuelle Prüfung des Einzelfalls.",
    "v": false,
    "e": "Falsch. Sie beschleunigen, bergen aber die Gefahr unpersönlicher und unpassender Antworten.",
    "k": "Schriftliche Kommunikation",
    "d": "medium",
    "s": "LF3 1.3"
   },
   {
    "t": "multi",
    "q": "Welche Aussagen zum aktiven Zuhören treffen zu?",
    "a": [
     "Es meldet Inhalt und Emotion zurück",
     "Es geht auf Carl Rogers zurück",
     "Es ist ein Gesprächsförderer",
     "Es besteht im wortgetreuen Wiederholen"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Wortgetreues Wiederholen ohne Emotion ist gerade nicht aktives Zuhören.",
    "k": "Gesprächsführung",
    "d": "hard",
    "s": "LF3 4.3"
   },
   {
    "t": "multi",
    "q": "Welche Fragetypen eignen sich zur Absicherung am Ende der Bedarfsermittlung?",
    "a": [
     "Geschlossene Fragen",
     "Zusammenfassende Fragen",
     "Offene W-Fragen",
     "Suggestivfragen"
    ],
    "cs": [
     0,
     1
    ],
    "e": "Offene Fragen stehen am Anfang, Suggestivfragen gehören gar nicht in die Bedarfsermittlung.",
    "k": "Gesprächsführung",
    "d": "hard",
    "s": "LF3 4.2"
   },
   {
    "t": "calc",
    "q": "Ein Gespräch dauert 6 Minuten. Der Agent spricht davon 4,5 Minuten. Wie hoch ist sein Redeanteil in Prozent?",
    "ans": [
     "75"
    ],
    "unit": "%",
    "hint": "Redezeit durch Gesamtzeit.",
    "e": "4,5 / 6 = 0,75 → 75 %. Für ein Beratungsgespräch deutlich zu hoch — der Kunde kommt kaum zu Wort.",
    "k": "Gesprächsführung",
    "d": "medium",
    "s": "LF3 4.3"
   },
   {
    "t": "calc",
    "q": "Von 240 eingehenden Gesprächen wurden 36 als Beschwerde erfasst. Wie hoch ist die Beschwerdequote?",
    "ans": [
     "15"
    ],
    "unit": "%",
    "hint": "Beschwerden durch Gespräche.",
    "e": "36 / 240 = 0,15 → 15 %.",
    "k": "Gesprächsführung",
    "d": "medium",
    "s": "LF3 4"
   },
   {
    "t": "mc",
    "q": "Ein Kunde erzählt ausschweifend von seinem Urlaub, das Gespräch läuft seit acht Minuten. Was ist angemessen?",
    "a": [
     "Ihn ausreden lassen, egal wie lange",
     "Gezielt unterbrechen und zusammenfassen",
     "Auflegen",
     "Eine Suggestivfrage stellen"
    ],
    "c": 1,
    "e": "Beim Vielredner sind gezielte Unterbrechungen und Zusammenfassungen das Mittel der Wahl.",
    "k": "Kundentypen",
    "d": "medium",
    "s": "LF3 5.2"
   },
   {
    "t": "mc",
    "q": "Welches Vorgehen vergrößert im Johari-Fenster den Quadranten A am wirksamsten?",
    "a": [
     "Nur Feedback einholen",
     "Nur offen von sich erzählen",
     "Offenheit und Feedback kombinieren",
     "Schweigen und beobachten"
    ],
    "c": 2,
    "e": "Offenheit verkleinert B, Feedback verkleinert C — zusammen wächst die Arena am stärksten.",
    "k": "Johari · NLP · Maslow",
    "d": "hard",
    "s": "LF3 3.4"
   },
   {
    "t": "mc",
    "q": "Ein Agent spiegelt erfolgreich Tempo und Tonfall des Kunden und lenkt ihn anschließend zu einer Lösung. Wie heißt der zweite Schritt?",
    "a": [
     "Pacing",
     "Rapport",
     "Leading",
     "Priming"
    ],
    "c": 2,
    "e": "Leading folgt erst nach gelungenem Rapport.",
    "k": "Johari · NLP · Maslow",
    "d": "medium",
    "s": "LF3 3.5"
   },
   {
    "t": "cloze",
    "q": "Johari-Fenster",
    "txt": "Quadrant {{1}} ist beiden bekannt, Quadrant {{2}} nur mir, Quadrant {{3}} nur den anderen — das ist der {{4}}.",
    "gaps": [
     {
      "s": "A",
      "o": [
       "B",
       "C"
      ]
     },
     {
      "s": "B",
      "o": [
       "A",
       "D"
      ]
     },
     {
      "s": "C",
      "o": [
       "D",
       "B"
      ]
     },
     {
      "s": "blinde Fleck",
      "o": [
       "Arena",
       "Privatbereich"
      ]
     }
    ],
    "e": "A Arena, B Privatperson, C blinder Fleck, D Unbekanntes.",
    "k": "Johari · NLP · Maslow",
    "d": "medium",
    "s": "LF3 3.4"
   },
   {
    "t": "cloze",
    "q": "Sprechvorgang",
    "txt": "Der Sprechvorgang besteht aus {{1}}, {{2}} und {{3}}. Der Spalt zwischen den Stimmlippen heißt {{4}}.",
    "gaps": [
     {
      "s": "Atmung",
      "o": [
       "Resonanz",
       "Modulation"
      ]
     },
     {
      "s": "Stimmgebung",
      "o": [
       "Artikulation",
       "Atmung"
      ]
     },
     {
      "s": "Aussprache",
      "o": [
       "Phonation",
       "Respiration"
      ]
     },
     {
      "s": "Glottis",
      "o": [
       "Ansatzrohr",
       "Kehlkopf"
      ]
     }
    ],
    "e": "Respiration, Phonation, Artikulation — und die Glottis als Stimmritze.",
    "k": "Stimme & Stress",
    "d": "hard",
    "s": "LF3 5.3"
   },
   {
    "t": "mc",
    "q": "Ein Kunde ruft wütend an, weil eine Rechnung falsch ist. Der Agent sagt sofort sachlich: „Ihre Rechnungsnummer bitte.“ Welches Problem entsteht?",
    "a": [
     "Keines, das ist effizient",
     "Der Kunde fühlt sich in seinem Ärger übergangen — der Wechsel ins Erwachsenen-Ich kommt zu abrupt",
     "Der Agent nutzt eine Suggestivfrage",
     "Der Agent verletzt die DIN 5008"
    ],
    "c": 1,
    "e": "Erst den Ich-Zustand spiegeln und die Emotion aufnehmen, dann sachlich werden.",
    "k": "Transaktionsanalyse",
    "d": "hard",
    "s": "LF3 3.3"
   },
   {
    "t": "mc",
    "q": "Welche Aussage über Metakommunikation trifft zu?",
    "a": [
     "Sie ist die Kommunikation über die Kommunikation",
     "Sie meint das Sprechen in Fachsprache",
     "Sie ist ein NLP-Begriff",
     "Sie bezeichnet die schriftliche Kommunikation"
    ],
    "c": 0,
    "e": "Metakommunikation gehört zum zweiten Axiom und thematisiert die Beziehungsebene.",
    "k": "Watzlawick",
    "d": "hard",
    "s": "LF3 3.1"
   },
   {
    "t": "mc",
    "q": "Ein Agent sagt: „Sie rufen ja immer wegen derselben Sache an.“ Welcher Gesprächsstörer?",
    "a": [
     "Bagatellisieren",
     "Generalisierung",
     "Vorschnelle Lösung",
     "Pseudo-Zuhören"
    ],
    "c": 1,
    "e": "„Immer“ und „nie“ verallgemeinern unzulässig und wirken vorwurfsvoll.",
    "k": "Gesprächsführung",
    "d": "medium",
    "s": "LF3 4.3"
   },
   {
    "t": "mc",
    "q": "Ein Agent sagt: „So schlimm ist das doch gar nicht.“ Welcher Gesprächsstörer?",
    "a": [
     "Bagatellisieren",
     "Belehren",
     "Drohen",
     "Ironie"
    ],
    "c": 0,
    "e": "Das Anliegen des Kunden wird kleingeredet.",
    "k": "Gesprächsführung",
    "d": "medium",
    "s": "LF3 4.3"
   },
   {
    "t": "multi",
    "q": "Welche Wahrnehmungstypen umfasst das VAK-Modell?",
    "a": [
     "Visuell",
     "Auditiv",
     "Kinästhetisch",
     "Olfaktorisch"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Drei Typen aus dem NLP.",
    "k": "Kundentypen",
    "d": "easy",
    "s": "LF3 5.1"
   },
   {
    "t": "tf",
    "q": "Das VAK-Modell stammt aus der Transaktionsanalyse.",
    "v": false,
    "e": "Falsch — es stammt aus dem NLP.",
    "k": "Kundentypen",
    "d": "medium",
    "s": "LF3 5.1"
   },
   {
    "t": "type",
    "q": "Wie heißt die deutsche Buchstabiertafel für A, B und C?",
    "ans": [
     "Anton Bertha Cäsar",
     "Anton, Bertha, Cäsar",
     "Anton Berta Cäsar"
    ],
    "e": "Anton, Bertha, Cäsar. International nach ITU: Alfa, Bravo, Charlie.",
    "k": "Kundentypen",
    "d": "hard",
    "s": "LF3 5.2"
   },
   {
    "t": "mc",
    "q": "Ein Gespräch beginnt mit „Was möchten Sie erreichen?“ und endet mit „Ist das so korrekt?“. Welche Technik wurde angewandt?",
    "a": [
     "Aktives Zuhören",
     "Fragetrichter",
     "Pacing",
     "Paraphrasieren"
    ],
    "c": 1,
    "e": "Vom Allgemeinen zum Speziellen, von offen zu geschlossen.",
    "k": "Gesprächsführung",
    "d": "medium",
    "s": "LF3 4.2"
   },
   {
    "t": "mc",
    "q": "Welche Reihenfolge entspricht der Argumentationskette im Buch?",
    "a": [
     "Beispiel → These → Begründung → Schluss",
     "These → Begründung → Beispiel → Schlussfolgerung",
     "Begründung → These → Schluss → Beispiel",
     "These → Beispiel → Schluss → Begründung"
    ],
    "c": 1,
    "e": "These – Begründung – Beispiel – Schlussfolgerung.",
    "k": "Gesprächsführung",
    "d": "medium",
    "s": "LF3 4.1"
   },
   {
    "t": "tf",
    "q": "Höhere Maslow-Stufen können auch dann handlungsleitend sein, wenn die Grundbedürfnisse unerfüllt bleiben.",
    "v": false,
    "e": "Falsch. Höhere Stufen werden erst relevant, wenn die darunterliegenden erfüllt sind.",
    "k": "Johari · NLP · Maslow",
    "d": "medium",
    "s": "LF3 3.6"
   },
   {
    "t": "mc",
    "q": "Auf welcher Maslow-Stufe steht das Bedürfnis nach Zugehörigkeit zu einer Kundencommunity?",
    "a": [
     "Stufe 2",
     "Stufe 3",
     "Stufe 4",
     "Stufe 5"
    ],
    "c": 1,
    "e": "Sozialbedürfnisse sind Stufe 3.",
    "k": "Johari · NLP · Maslow",
    "d": "medium",
    "s": "LF3 3.6"
   },
   {
    "t": "multi",
    "q": "Welche Aussagen zur E-Mail-Gestaltung treffen zu?",
    "a": [
     "Der Betreff soll aussagekräftig sein",
     "Der Sie-Stil ist vorzuziehen",
     "Die Form folgt den Grundsätzen der DIN 5008",
     "Auf eine Anrede kann grundsätzlich verzichtet werden"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Auf die Anrede wird nicht verzichtet — sie gehört zur professionellen Geschäftskorrespondenz.",
    "k": "Schriftliche Kommunikation",
    "d": "hard",
    "s": "LF3 1.4"
   }
  ]
 },
 {
  "code": "04",
  "name": "Informations- und kommunikationstechnische Systeme nutzen",
  "themen": [
   {
    "t": "4.1.1 Telefonkonferenz",
    "d": "Synchrones Kommunikationsmedium für ortsunabhängige Zusammenarbeit.",
    "c": "Die Telefonkonferenz ermöglicht Meetings mit Teilnehmern an verschiedenen Orten.\n    \n**Einwahlverfahren:**\n- **Dial-in:** Teilnehmer wählen sich über eine zentrale Nummer ein.\n- **Dial-out:** Ein System oder Moderator ruft alle Teilnehmer an.\n\n**Technische Basis:**\n- Realisierung über die betriebliche **TK-Anlage** (Drei-Wege-Konferenz) oder externe **Konferenzanbieter** für größere Gruppen.\n\n**Verhaltensregeln (Netiquette):**\n- Pünktlichkeit, Namensnennung vor dem Sprechen, Stummschaltung bei Nichtgebrauch.",
    "k": [
     "Unterscheidung Dial-in vs. Dial-out",
     "Nutzung der TK-Anlage oder externer Anbieter",
     "Wichtigkeit der Netiquette für Effizienz"
    ],
    "r": "medium"
   },
   {
    "t": "4.1.2 Anrufbeantworter & Voicemail",
    "d": "Systeme zur Entgegennahme von Nachrichten bei Nichterreichbarkeit.",
    "c": "Dienen als \"elektronischer Briefkasten\" für Sprachnachrichten.\n\n**Systemunterschiede:**\n- **Hardware-AB:** Physisches Gerät am Telefon, lokale Speicherung.\n- **Voicemail:** Softwarebasiert, in TK-Anlage integriert oder vom Netzanbieter, Server-Speicherung.\n\n**Zentrale Funktionen:**\n- **Zeitsteuerung:** Unterschiedliche Ansagen nach Tageszeit.\n- **Fernabfrage:** Abhören von Nachrichten von anderen Anschlüssen aus.\n- **Benachrichtigung:** Info über neue Nachrichten per E-Mail oder SMS.",
    "k": [
     "Hardware-AB vs. serverbasierte Voicemail",
     "Zeitsteuerung für professionelle Außenwirkung",
     "Fernabfrage für mobile Mitarbeiter"
    ],
    "r": "low"
   },
   {
    "t": "4.1.3 Unified Messaging (UMS)",
    "d": "Integration verschiedener Nachrichtentypen in einer Oberfläche.",
    "c": "UMS bündelt E-Mail, Fax, Voicemail und SMS in einem zentralen Posteingang (z. B. Outlook).\n\n**Kernfunktionen:**\n- **Einheitlicher Posteingang:** Alle Medien an einem Ort.\n- **Medienkonvertierung:** \n  - **Text-to-Speech (TTS):** Vorlesen von E-Mails am Telefon.\n  - **Fax-to-Mail:** Faxempfang als PDF-Anhang.\n\n**Abgrenzung:**\n- **UMS:** Fokus auf asynchrone Nachrichten.\n- **Unified Communications (UC):** Erweitert UMS um Echtzeit-Dienste wie Präsenzmanagement und Instant Messaging.",
    "k": [
     "Zentraler Posteingang für alle Nachrichtentypen",
     "Effizienz durch Medienkonvertierung (TTS, Fax-to-Mail)",
     "Unterscheidung UMS (Nachrichten) vs. UC (Echtzeit)"
    ],
    "r": "high"
   },
   {
    "t": "4.1.4 Telefax",
    "d": "Übertragung von Dokumentkopien über das Telefonnetz.",
    "c": "Trotz digitaler Alternativen wichtig wegen rechtlicher Anerkennung.\n\n**Technik:**\n- **Hardware-Fax:** Eigenständiges Gerät.\n- **Fax-Server:** Digitale Lösung im Netzwerk, Versand/Empfang am PC.\n\n**Prüfungsrelevanz:**\n- Der **Sendebericht** dient als Nachweis für den fristgerechten Zugang.",
    "k": [
     "Rechtliche Relevanz des Sendeberichts",
     "Fax-Server zur digitalen Integration",
     "Fax-to-Mail als moderne UMS-Komponente"
    ],
    "r": "medium"
   },
   {
    "t": "4.1.5 Netzwerke",
    "d": "Verbund von Computern zur gemeinsamen Ressourcennutzung.",
    "c": "**Netzwerktypen:**\n- **LAN (Local Area Network):** Lokal begrenzt (Gebäude/Grundstück).\n- **WAN (Wide Area Network):** Weitverkehrsnetz (Städte/Länder).\n- **WLAN:** Drahtloses lokales Netzwerk.\n- **VPN (Virtual Private Network):** Sicherer Tunnel über öffentliche Netze.\n\n**Architekturen:**\n- **Server-Client:** Zentraler Server verwaltet Daten/Rechte für Clients.\n- **Peer-to-Peer:** Alle Rechner sind gleichberechtigt.\n\n**Hardware:**\n- **Router:** Verbindet unterschiedliche Netzwerke (z. B. LAN mit Internet).\n- **Switch:** Verbindet Geräte innerhalb eines LANs.",
    "k": [
     "LAN (lokal) vs. WAN (weiträumig)",
     "Server-Client als Standard in Unternehmen",
     "Router als Schnittstelle nach außen"
    ],
    "r": "high"
   },
   {
    "t": "4.1.6 Internet & Protokolle",
    "d": "Weltweiter Netzwerkverbund auf Basis von TCP/IP.",
    "c": "Das Internet ist das größte WAN der Welt.\n\n**Wichtige Protokolle:**\n- **TCP/IP:** Basis-Sprache des Internets (Transport & Adressierung).\n- **HTTP/HTTPS:** Übertragung von Webseiten (Sicher/Verschlüsselt).\n- **SMTP/IMAP/POP3:** E-Mail-Versand und -Empfang.\n- **FTP:** Dateiübertragung.\n\n**Dienste:**\n- **DNS (Domain Name System):** Übersetzt Domainnamen (www.manus.im) in IP-Adressen.\n- **VoIP:** Telefonie über das Internetprotokoll.",
    "k": [
     "TCP/IP als fundamentales Protokoll",
     "DNS als \"Telefonbuch\" des Internets",
     "Unterscheidung Internet (Netz) vs. WWW (Dienst)"
    ],
    "r": "high"
   },
   {
    "t": "4.1.7 Intranet",
    "d": "Unternehmensinternes, geschlossenes Informationssystem.",
    "c": "Nutzt Internet-Technologien (TCP/IP, Browser), ist aber nur für Mitarbeiter zugänglich.\n\n**Vorteile:**\n- Schnelle Informationsverteilung (Handbücher, Formulare).\n- Papierloses Büro (Kosteneinsparung).\n- Plattformunabhängig durch Web-Browser.\n\n**Sicherheit:**\n- Zugriffsschutz durch Firewalls und VPN (für externen Zugriff).",
    "k": [
     "Geschlossener Benutzerkreis",
     "Nutzung von Standard-Webtechnologien",
     "VPN für sicheren Fernzugriff"
    ],
    "r": "medium"
   },
   {
    "t": "4.2.1 TK-Anlage im Dialogmarketing",
    "d": "Zentrale Vermittlungseinheit für die Kommunikation.",
    "c": "Verbindet Endgeräte intern und mit dem öffentlichen Netz.\n\n**Spezielle Leistungsmerkmale:**\n- **ANI (Automatic Number Identification):** Rufnummer des Anrufers (Wer ruft an?).\n- **DNIS (Dialed Number Identification Service):** Gewählte Nummer (Welches Projekt/Hotline wurde angerufen?).\n- **Makeln/Rückfrage:** Wechsel zwischen Gesprächspartnern.",
    "k": [
     "ANI zur Kundenidentifikation",
     "DNIS zur projektbezogenen Gesprächsannahme",
     "Basis für ACD-Funktionalitäten"
    ],
    "r": "high"
   },
   {
    "t": "4.2.2 ACD (Automatic Call Distribution)",
    "d": "Automatisierte Anrufverteilung nach festen Regeln.",
    "c": "Herzstück des Call Centers zur Steuerung großer Anrufvolumina.\n\n**Routing-Methoden:**\n- **Longest Waiting Agent:** Anruf an den, der am längsten frei ist.\n- **Skill-Based Routing:** Anruf an den Experten für das spezifische Thema.\n\n**Kennzahlen (KPIs):**\n- **ASA (Average Speed of Answer):** Durchschn. Zeit bis zur Annahme.\n- **AHT (Average Handling Time):** Gespräch + Nachbearbeitung.\n- **Servicelevel:** % der Anrufe in X Sekunden (z. B. 80/20).\n- **ACW (After Call Work):** Nachbearbeitungszeit.",
    "k": [
     "Effiziente Verteilung durch Routing-Regeln",
     "Skill-Based Routing für höhere Lösungsqualität",
     "Reporting zur Steuerung des Centers"
    ],
    "r": "high"
   },
   {
    "t": "4.2.3 IVR (Interactive Voice Response)",
    "d": "Interaktive Sprach- oder Tastatursteuerung vor dem Agentenkontakt.",
    "c": "Ermöglicht Self-Service oder Vorqualifizierung.\n\n**Nutzen:**\n- **Automatisierung:** Einfache Anfragen (Zählerstand, Kontostand) ohne Mitarbeiter.\n- **Routing-Unterstützung:** Kunde wählt Menüpunkt -> ACD leitet zum passenden Skill.\n\n**Gefahr:**\n- Zu komplexe Menüs führen zu Kundenfrustration.",
    "k": [
     "Vorqualifizierung für Skill-Based Routing",
     "Kostensenkung durch Self-Service-Optionen",
     "DTMF (Töne) oder Spracherkennung als Eingabe"
    ],
    "r": "medium"
   },
   {
    "t": "4.2.4 CTI (Computer Telephony Integration)",
    "d": "Verknüpfung von Telefonanlage und IT-Systemen.",
    "c": "Steuerung des Telefons über den PC und Datenaustausch.\n\n**Zentrale Funktionen:**\n- **Screen Pop-up:** Automatisches Öffnen der Kundenmaske bei Anrufeingang.\n- **Click-to-Dial:** Wählen direkt aus dem CRM per Mausklick.\n- **Journalisierung:** Automatische Protokollierung der Anrufe im CRM.",
    "k": [
     "Screen Pop-up spart Zeit bei der Identifikation",
     "Click-to-Dial vermeidet Wählfehler",
     "Nahtlose Dokumentation im CRM"
    ],
    "r": "high"
   },
   {
    "t": "4.2.5 Outbound Dialer",
    "d": "Automatisierte Anwahl für aktive Kampagnen.",
    "c": "Erhöht die Netto-Sprechzeit durch Filterung von Besetzt/AB.\n\n**Modi:**\n- **Preview:** Agent prüft Datensatz, startet Anwahl manuell.\n- **Power:** System wählt, sobald Agent frei wird.\n- **Predictive:** Algorithmus wählt vorausschauend mehr Nummern als Agenten frei sind.\n\n**Risiko:**\n- **Silent Calls:** Kunde hebt ab, kein Agent frei (Predictive Mode).",
    "k": [
     "Preview (Vorschau) vs. Predictive (Vorausschauend)",
     "Steigerung der Effizienz im Outbound",
     "Rechtliche Grenzen bei Silent Calls"
    ],
    "r": "high"
   },
   {
    "t": "4.2.6 Omnichannel",
    "d": "Nahtlose Integration aller Kommunikationskanäle.",
    "c": "Kunde kann Kanäle wechseln, ohne Informationen mehrfach zu nennen.\n\n**Modelle:**\n- **Multi-Channel:** Kanäle existieren parallel, aber isoliert.\n- **Omnichannel:** Kanäle sind vernetzt, gemeinsame Historie.\n\n**Vorteile:**\n- Ganzheitliche Kundenhistorie für den Agenten.\n- Höhere Kundenzufriedenheit durch konsistente Erlebnisse.",
    "k": [
     "Integration statt Isolation der Kanäle",
     "Zentrale Datenbasis (CRM) als Voraussetzung",
     "Kanalübergreifende Kundenhistorie"
    ],
    "r": "medium"
   },
   {
    "t": "4.3 Betriebssysteme & Software",
    "d": "Grundlagen der IT-Infrastruktur im Unternehmen.",
    "c": "**Betriebssystem (OS):**\n- Verwaltet Hardware (CPU, RAM) und bildet Schnittstelle zum Nutzer.\n\n**Softwarearten:**\n- **Standardsoftware:** Für viele Anwender (Office).\n- **Individualsoftware:** Maßgeschneidert für ein Unternehmen.\n- **OCR:** Texterkennung in Scans.\n- **Cloud-Computing:** IT-Dienste über das Internet (SaaS, PaaS, IaaS).",
    "k": [
     "OS als Basis für Anwendungen",
     "Standard- vs. Individualsoftware",
     "Cloud-Computing für Flexibilität"
    ],
    "r": "medium"
   },
   {
    "t": "4.4 Datenbanken nutzen",
    "d": "Strukturierte Speicherung und Verwaltung von Daten.",
    "c": "**Relationale Datenbank:**\n- Daten in Tabellen mit Beziehungen.\n\n**Begriffe:**\n- **Primärschlüssel:** Eindeutige ID eines Datensatzes.\n- **Fremdschlüssel:** Verweis auf Primärschlüssel anderer Tabellen.\n- **Redundanz:** Mehrfache Speicherung (zu vermeiden).\n- **Normalisierung:** Prozess zur Redundanzvermeidung.",
    "k": [
     "Primär- vs. Fremdschlüssel",
     "Vermeidung von Redundanzen",
     "SQL als Abfragesprache"
    ],
    "r": "high"
   },
   {
    "t": "4.5 Datensicherheit & Datenschutz",
    "d": "Schutz von Daten und Persönlichkeitsrechten.",
    "c": "**Datensicherheit (Technik):**\n- Schutz vor Verlust/Missbrauch (Firewall, Backup, Antivirus).\n\n**Datenschutz (Recht - DSGVO):**\n- Schutz personenbezogener Daten.\n- **Grundsätze:** Zweckbindung, Datenminimierung, Transparenz.\n- **Rechte:** Auskunft, Löschung, Berichtigung.",
    "k": [
     "Sicherheit (technisch) vs. Schutz (rechtlich)",
     "DSGVO-Grundsätze als Prüfungsfokus",
     "Personenbezogene Daten als Kern"
    ],
    "r": "high"
   }
  ],
  "cards": [
   {
    "f": "Dial-in oder Dial-out — wer wählt?",
    "b": "Dial-in: Die Teilnehmer wählen sich selbst über eine zentrale Nummer ein. Dial-out: Moderator oder System ruft alle nacheinander an. Dial-out ist sicherer, weil nur Geladene teilnehmen.",
    "k": "Kommunikationsmedien"
   },
   {
    "f": "Was unterscheidet Unified Messaging von Unified Communications?",
    "b": "UMS bündelt asynchrone Nachrichten (E-Mail, Fax, Voicemail, SMS). UC integriert zusätzlich Echtzeitdienste wie Präsenzmanagement und Instant Messaging.",
    "k": "Kommunikationsmedien"
   },
   {
    "f": "Text-to-Speech oder Speech-to-Text — welche Richtung ist welche?",
    "b": "TTS wandelt Text in künstliche Sprache zum Abhören. Speech-to-Text wandelt gesprochene Sprache in Text.",
    "k": "Kommunikationsmedien"
   },
   {
    "f": "Welche rechtliche Bedeutung hat der Sendebericht beim Telefax?",
    "b": "Er dient als Nachweis für den fristgerechten Zugang eines Dokuments beim Empfänger.",
    "k": "Kommunikationsmedien"
   },
   {
    "f": "LAN, WAN, VPN — was ist was?",
    "b": "LAN = räumlich begrenztes Netz. WAN = Weitverkehrsnetz über große Distanzen. VPN = verschlüsselter Tunnel über ein öffentliches Netz.",
    "k": "Netzwerke"
   },
   {
    "f": "Switch oder Router — wer verbindet was?",
    "b": "Der Switch verbindet Geräte innerhalb eines LAN. Der Router verbindet unterschiedliche Netzwerke, etwa LAN und Internet.",
    "k": "Netzwerke"
   },
   {
    "f": "Was macht das DNS?",
    "b": "Es übersetzt Domainnamen in IP-Adressen.",
    "k": "Netzwerke"
   },
   {
    "f": "Intranet oder Extranet?",
    "b": "Intranet = unternehmensinternes, geschlossenes Netz auf Internet-Technologien. Extranet = der Teil davon, der autorisierten externen Partnern geöffnet wird.",
    "k": "Netzwerke"
   },
   {
    "f": "Was ist VoIP?",
    "b": "Voice over IP — Telefonie über das Internetprotokoll statt über klassische Telefonleitungen.",
    "k": "Netzwerke"
   },
   {
    "f": "Client-Server oder Peer-to-Peer?",
    "b": "Client-Server: ein zentraler Rechner stellt Dienste bereit. Peer-to-Peer: gleichberechtigte Rechner ohne zentralen Server.",
    "k": "Netzwerke"
   },
   {
    "f": "Was ist ein Mehrwertdienst?",
    "b": "Ein Dienst, der über die reine Sprachübertragung hinausgeht und einen zusätzlichen Nutzen bietet — englisch Value Added Services.",
    "k": "Netze & Dienste"
   },
   {
    "f": "Call-by-Call oder Preselection — wo liegt der Unterschied?",
    "b": "Call-by-Call: Vorvorwahl (meist 010x) pro Einzelgespräch, Vertrag nur für dieses Gespräch. Preselection: feste Voreinstellung beim Anbieter, Call-by-Call bleibt zusätzlich möglich.",
    "k": "Netze & Dienste"
   },
   {
    "f": "Was kostet ein Anruf bei einer 0800-Nummer — und welchen Nebeneffekt hat sie?",
    "b": "Für den Anrufer kostenlos, das Unternehmen trägt die Kosten. Nebeneffekt: vermehrt Spaßanrufe, sogenannte Junk Calls.",
    "k": "Netze & Dienste"
   },
   {
    "f": "Was änderte die TKG-Novelle 2013 für Warteschleifen?",
    "b": "Warteschleifen müssen kostenlos sein — die gesamte Zeit, in der das Anliegen nicht bearbeitet wird. Ob Mensch oder IVR bearbeitet, spielt keine Rolle.",
    "k": "Netze & Dienste"
   },
   {
    "f": "Wozu wurden die Gassen 01806 und 01807 eingeführt?",
    "b": "01806: einmaliger Preis pro Anruf, dadurch kostenfreies Warten. 01807: Kosten wie bei 01805, aber die ersten Sekunden sind kostenlos.",
    "k": "Netze & Dienste"
   },
   {
    "f": "Welche Grenzen gelten bei 0900-Nummern?",
    "b": "Maximal 3,00 € pro Minute, Preisansage vor Beginn, automatische Trennung nach höchstens einer Stunde. Vergeben von der Bundesnetzagentur; sie ersetzte die 0190.",
    "k": "Netze & Dienste"
   },
   {
    "f": "Was ist eine Vanity-Rufnummer — und ist die 0700 dafür zwingend?",
    "b": "Eine Wortwahl-Rufnummer, bei der Ziffern Buchstaben entsprechen (0700-DIALOGFIX). Die 0700 kennzeichnet sie eindeutig, nötig ist sie nicht — auch 0800-AUSKUNFT ist möglich.",
    "k": "Netze & Dienste"
   },
   {
    "f": "Wofür stehen 0137/0138 und warum sind sie für Anbieter attraktiv?",
    "b": "Televoting bzw. Massenverkehrsdienste. Attraktiv, weil auch Anrufe berechnet werden, die nicht zum Gewinn oder in die Sendung führen.",
    "k": "Netze & Dienste"
   },
   {
    "f": "Welche Informationspflicht gilt bei 0180, 0900 und 0137?",
    "b": "0180: Preisangabe in der Werbung, keine Ansage. 0900: Preisangabe plus kostenlose Ansage vor der Nutzung. 0137: Preisangabe plus Ansage der Kosten nach Beendigung.",
    "k": "Netze & Dienste"
   },
   {
    "f": "Was ist die Inverssuche?",
    "b": "Die Suche nach Name und Anschrift eines Teilnehmers anhand seiner Rufnummer.",
    "k": "Netze & Dienste"
   },
   {
    "f": "Woran ist die Mobilfunknummer gebunden — an das Gerät oder die SIM?",
    "b": "An die SIM-Karte (Subscriber Identity Module), nicht an das Endgerät. Bauformen: Standard, Micro, Nano und eSIM.",
    "k": "Mobilfunk"
   },
   {
    "f": "Wie viele Zeichen umfasst eine SMS?",
    "b": "160 Zeichen. Die MMS erweitert den Dienst um Bild, Ton und Video.",
    "k": "Mobilfunk"
   },
   {
    "f": "Prepaid oder Postpaid — wo liegt der Unterschied?",
    "b": "Prepaid: Guthaben wird im Voraus aufgeladen, keine Grundgebühr, volle Kostenkontrolle. Postpaid: Vertrag mit nachträglicher Abrechnung über die Rechnung.",
    "k": "Mobilfunk"
   },
   {
    "f": "Ordnen Sie zu: GSM, UMTS, LTE, 5G.",
    "b": "GSM = 2G, UMTS = 3G, LTE = 3.9G/4G, 5G die aktuelle Generation mit bis zu 20 Gbit/s.",
    "k": "Mobilfunk"
   },
   {
    "f": "Welche Datenrate erreichte UMTS ursprünglich?",
    "b": "384 kbit/s. GSM lag bei 9,6 kbit/s, GPRS bei 54 kbit/s, EDGE bei 220 kbit/s.",
    "k": "Mobilfunk"
   },
   {
    "f": "ANI oder DNIS — welche Nummer wird jeweils erkannt?",
    "b": "ANI erkennt die Rufnummer des Anrufers. DNIS erkennt die gewählte Zielnummer und dient damit der Projektidentifikation.",
    "k": "Branchentechnik"
   },
   {
    "f": "Was ist Skill-Based Routing?",
    "b": "Die Verteilung von Anrufen nach den Fachkenntnissen der Agenten.",
    "k": "Branchentechnik"
   },
   {
    "f": "IVR oder CTI — was leistet was?",
    "b": "IVR ist ein Sprachdialogsystem zur Vorqualifizierung und für Self-Services. CTI verknüpft Telefonanlage und Computer, etwa für Screen Pop-up und Click-to-Dial.",
    "k": "Branchentechnik"
   },
   {
    "f": "Preview, Power oder Predictive Dialing — welches wählt vorausschauend?",
    "b": "Predictive: Ein Algorithmus wählt mehr Nummern, als Agenten frei sind. Preview: Agent startet manuell. Power: System wählt, sobald ein Agent frei wird.",
    "k": "Branchentechnik"
   },
   {
    "f": "Was ist ein Silent Call und wodurch entsteht er?",
    "b": "Der Kunde hebt ab, es ist aber kein Agent frei. Ursache ist meist ein zu aggressiv eingestelltes Predictive Dialing (Overdial).",
    "k": "Branchentechnik"
   },
   {
    "f": "Was ist Call Blending?",
    "b": "Der automatische Wechsel von Agenten zwischen Inbound und Outbound je nach Anrufaufkommen.",
    "k": "Branchentechnik"
   },
   {
    "f": "ASA, AHT, ACW — welche Kennzahl misst was?",
    "b": "ASA = durchschnittliche Zeit bis zur Annahme. AHT = durchschnittliche Bearbeitungszeit (Gespräch + Nachbearbeitung). ACW = Nachbearbeitungszeit allein.",
    "k": "Kennzahlen"
   },
   {
    "f": "Wie ist der Servicelevel definiert?",
    "b": "Der Prozentsatz der Anrufe, die innerhalb einer definierten Zeit angenommen wurden — Schreibweise etwa 80/20.",
    "k": "Kennzahlen"
   },
   {
    "f": "Was ist ein Lost Call?",
    "b": "Ein Anruf, bei dem der Anrufer in der Warteschleife auflegt, bevor er mit einem Agenten verbunden wurde. Auch Abandoned Call.",
    "k": "Kennzahlen"
   },
   {
    "f": "Was ist Omnichannel?",
    "b": "Die nahtlose Integration aller Kommunikationskanäle für ein konsistentes Kundenerlebnis.",
    "k": "Branchentechnik"
   },
   {
    "f": "Standard- oder Individualsoftware?",
    "b": "Standardsoftware richtet sich an viele Anwender mit ähnlichen Anforderungen. Individualsoftware wird für einen einzelnen Kunden entwickelt.",
    "k": "Software"
   },
   {
    "f": "Was leistet PEP-Software und was ist Forecasting?",
    "b": "Personaleinsatzplanung erstellt Schichtpläne nach erwartetem Aufkommen. Forecasting sagt das künftige Arbeitsaufkommen aus historischen Daten voraus.",
    "k": "Software"
   },
   {
    "f": "Nennen Sie je einen Vor- und Nachteil von Cloud-Computing.",
    "b": "Vorteil: Flexibilität, Skalierbarkeit, keine hohen Investitionskosten. Nachteil: Abhängigkeit vom Internetanbieter und Datenschutzrisiken.",
    "k": "Software"
   },
   {
    "f": "CRM oder ERP?",
    "b": "CRM verwaltet alle Kundenbeziehungen und -daten. ERP steuert alle Geschäftsprozesse — Finanzen, Personal, Logistik.",
    "k": "Software"
   },
   {
    "f": "Primärschlüssel oder Fremdschlüssel?",
    "b": "Der Primärschlüssel identifiziert jeden Datensatz einer Tabelle eindeutig. Der Fremdschlüssel verweist auf den Primärschlüssel einer anderen Tabelle.",
    "k": "Datenbanken"
   },
   {
    "f": "Datensatz oder Datenfeld — Zeile oder Spalte?",
    "b": "Datensatz = eine Zeile (alle Felder eines Objekts). Datenfeld = eine Spalte, die kleinste Einheit.",
    "k": "Datenbanken"
   },
   {
    "f": "Was ist Redundanz und wie wird sie vermieden?",
    "b": "Mehrfachspeicherung derselben Information. Vermieden wird sie durch Normalisierung — das erhält die Datenkonsistenz.",
    "k": "Datenbanken"
   },
   {
    "f": "Bewegungsdaten oder Stammdaten?",
    "b": "Stammdaten ändern sich selten (Kundenname, Anschrift). Bewegungsdaten ändern sich laufend (Bestellungen, Umsätze). Unterscheidungskriterium: das Veränderungsintervall.",
    "k": "Datenbanken"
   },
   {
    "f": "Rechendaten oder Ordnungsdaten?",
    "b": "Rechendaten werden für Berechnungen genutzt (Beträge, Mengen). Ordnungsdaten dienen der Identifikation und Sortierung (Kundennummer, PLZ). Kriterium: die Aufgabenart.",
    "k": "Datenbanken"
   },
   {
    "f": "Wofür steht SQL?",
    "b": "Structured Query Language — die Standardsprache zur Abfrage und Verwaltung relationaler Datenbanken.",
    "k": "Datenbanken"
   },
   {
    "f": "Datenschutz oder Datensicherheit?",
    "b": "Datenschutz schützt die Person vor Beeinträchtigung ihres Persönlichkeitsrechts. Datensicherheit schützt die Daten selbst vor Verlust und Missbrauch.",
    "k": "Datenschutz"
   },
   {
    "f": "Was sind personenbezogene Daten nach DSGVO?",
    "b": "Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.",
    "k": "Datenschutz"
   },
   {
    "f": "Zweckbindung oder Datenminimierung?",
    "b": "Zweckbindung: Verarbeitung nur für den Erhebungszweck. Datenminimierung: nur so viele Daten wie unbedingt erforderlich.",
    "k": "Datenschutz"
   },
   {
    "f": "Was ist eine Auftragsverarbeitung?",
    "b": "Ein Dienstleister verarbeitet personenbezogene Daten im Auftrag und nach Weisung eines Verantwortlichen — der Normalfall beim externen Callcenter.",
    "k": "Datenschutz"
   },
   {
    "f": "Vertraulichkeit, Integrität, Verfügbarkeit — was meint welches Schutzziel?",
    "b": "Vertraulichkeit: nur Berechtigte sehen die Daten. Integrität: Unversehrtheit und Korrektheit. Verfügbarkeit: Zugriff für Berechtigte bei Bedarf.",
    "k": "Datenschutz"
   }
  ],
  "quiz": [
   {
    "t": "mc",
    "q": "Für eine vertrauliche Besprechung soll sichergestellt sein, dass nur geladene Personen teilnehmen. Welche Konferenzform?",
    "a": [
     "Dial-in-Konferenz",
     "Dial-out-Konferenz",
     "Unified Messaging",
     "VoIP-Konferenz"
    ],
    "c": 1,
    "e": "Bei Dial-out ruft das System die Teilnehmer an — Unbefugte können sich nicht einwählen.",
    "k": "Kommunikationsmedien",
    "d": "medium",
    "s": "LF4 2.1"
   },
   {
    "t": "mc",
    "q": "Ein System liest eingegangene E-Mails am Telefon vor. Welche Technik?",
    "a": [
     "Speech-to-Text",
     "Text-to-Speech",
     "Fax-to-Mail",
     "OCR"
    ],
    "c": 1,
    "e": "Text wird in künstliche Sprache umgewandelt.",
    "k": "Kommunikationsmedien",
    "d": "medium",
    "s": "LF4 2.1"
   },
   {
    "t": "mc",
    "q": "Was leistet Unified Communications zusätzlich zu Unified Messaging?",
    "a": [
     "Nichts, die Begriffe sind identisch",
     "Echtzeitdienste wie Präsenzmanagement und Instant Messaging",
     "Die Umwandlung von Fax in PDF",
     "Die Verschlüsselung des Datenverkehrs"
    ],
    "c": 1,
    "e": "UMS bündelt asynchrone Nachrichten, UC ergänzt Echtzeitdienste.",
    "k": "Kommunikationsmedien",
    "d": "hard",
    "s": "LF4 2.1"
   },
   {
    "t": "mc",
    "q": "Ein Vertrag muss fristgerecht zugehen. Welchen Nachweis liefert das Telefax?",
    "a": [
     "Die Empfangsbestätigung des Empfängers",
     "Den Sendebericht",
     "Das Übertragungsprotokoll des Providers",
     "Keinen"
    ],
    "c": 1,
    "e": "Der Sendebericht dient als Nachweis des fristgerechten Zugangs.",
    "k": "Kommunikationsmedien",
    "d": "medium",
    "s": "LF4 2.1"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jedem Netzbegriff seine Bedeutung zu.",
    "pairs": [
     [
      "LAN",
      "räumlich begrenztes Netzwerk"
     ],
     [
      "WAN",
      "Weitverkehrsnetz über große Distanzen"
     ],
     [
      "VPN",
      "verschlüsselter Tunnel über ein öffentliches Netz"
     ]
    ],
    "e": "Lokal, weiträumig, verschlüsselt.",
    "k": "Netzwerke",
    "d": "medium",
    "s": "LF4 2.2"
   },
   {
    "t": "mc",
    "q": "Ein Agent im Homeoffice greift verschlüsselt auf das Firmennetz zu. Welche Technik?",
    "a": [
     "LAN",
     "Extranet",
     "VPN",
     "Peer-to-Peer"
    ],
    "c": 2,
    "e": "Das VPN bildet den verschlüsselten Tunnel über das öffentliche Netz.",
    "k": "Netzwerke",
    "d": "medium",
    "s": "LF4 2.2"
   },
   {
    "t": "mc",
    "q": "Welches Gerät verbindet das Firmennetz mit dem Internet?",
    "a": [
     "Switch",
     "Router",
     "Hub",
     "Server"
    ],
    "c": 1,
    "e": "Der Router verbindet unterschiedliche Netze; der Switch arbeitet innerhalb des LAN.",
    "k": "Netzwerke",
    "d": "medium",
    "s": "LF4 2.2"
   },
   {
    "t": "tf",
    "q": "Ein Switch verbindet verschiedene Netzwerke miteinander.",
    "v": false,
    "e": "Falsch. Das macht der Router — der Switch verbindet Geräte innerhalb eines LAN.",
    "k": "Netzwerke",
    "d": "medium",
    "s": "LF4 2.2"
   },
   {
    "t": "mc",
    "q": "Ein Lieferant erhält Zugriff auf einen abgeschotteten Teil des Firmennetzes. Wie heißt das?",
    "a": [
     "Intranet",
     "Extranet",
     "VPN",
     "WAN"
    ],
    "c": 1,
    "e": "Das Extranet ist der für autorisierte externe Partner geöffnete Teil des Intranets.",
    "k": "Netzwerke",
    "d": "hard",
    "s": "LF4 2.2"
   },
   {
    "t": "type",
    "q": "Welcher Dienst übersetzt Domainnamen in IP-Adressen?",
    "ans": [
     "DNS",
     "Domain Name System"
    ],
    "e": "Domain Name System.",
    "k": "Netzwerke",
    "d": "easy",
    "s": "LF4 2.2"
   },
   {
    "t": "mc",
    "q": "Worin unterscheiden sich HTTP und HTTPS?",
    "a": [
     "HTTPS ist schneller",
     "HTTPS ist die verschlüsselte Variante",
     "HTTP funktioniert nur im LAN",
     "HTTPS benötigt kein DNS"
    ],
    "c": 1,
    "e": "Das S steht für die verschlüsselte, sichere Übertragung.",
    "k": "Netzwerke",
    "d": "easy",
    "s": "LF4 2.2"
   },
   {
    "t": "cloze",
    "q": "Netzwerkgrundlagen",
    "txt": "Ein {{1}} ist räumlich begrenzt, ein {{2}} überbrückt große Distanzen. Der {{3}} verbindet Geräte innerhalb des lokalen Netzes, der {{4}} verbindet unterschiedliche Netze.",
    "gaps": [
     {
      "s": "LAN",
      "o": [
       "WAN",
       "VPN"
      ]
     },
     {
      "s": "WAN",
      "o": [
       "LAN",
       "PAN"
      ]
     },
     {
      "s": "Switch",
      "o": [
       "Router",
       "Server"
      ]
     },
     {
      "s": "Router",
      "o": [
       "Switch",
       "Client"
      ]
     }
    ],
    "e": "LAN/WAN nach Reichweite, Switch/Router nach Aufgabe.",
    "k": "Netzwerke",
    "d": "medium",
    "s": "LF4 2.2"
   },
   {
    "t": "mc",
    "q": "Ein Kunde wählt vor jedem Ferngespräch die Ziffernfolge 010xx. Welches Verfahren nutzt er?",
    "a": [
     "Preselection",
     "Call-by-Call",
     "Roaming",
     "Portierung"
    ],
    "c": 1,
    "e": "Call-by-Call: Vorvorwahl pro Einzelgespräch, Vertrag nur für dieses Gespräch.",
    "k": "Netze & Dienste",
    "d": "hard",
    "s": "LF4 3.1"
   },
   {
    "t": "mc",
    "q": "Ein Kunde lässt seinen Anschluss fest auf einen günstigeren Anbieter voreinstellen. Was gilt weiterhin?",
    "a": [
     "Call-by-Call ist damit ausgeschlossen",
     "Call-by-Call bleibt zusätzlich möglich",
     "Der Anschluss wechselt den Eigentümer",
     "Die Rufnummer ändert sich"
    ],
    "c": 1,
    "e": "Bei Preselection bleibt der Anschluss beim Teilnehmernetzbetreiber, Call-by-Call ist weiter nutzbar.",
    "k": "Netze & Dienste",
    "d": "hard",
    "s": "LF4 3.1"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jede Rufnummerngasse ihrem Zweck zu.",
    "pairs": [
     [
      "0800",
      "kostenlos für den Anrufer"
     ],
     [
      "0900",
      "Premium-Rate-Dienste"
     ],
     [
      "0700",
      "Vanity-Rufnummern"
     ],
     [
      "0137 / 0138",
      "Televoting und Massenverkehrsdienste"
     ]
    ],
    "e": "Freecall, Premium, Vanity, Televoting.",
    "k": "Netze & Dienste",
    "d": "medium",
    "s": "LF4 3.2"
   },
   {
    "t": "mc",
    "q": "Ein Radiosender betreibt eine kostenlose Hotline für Verkehrsmeldungen. Welche unerwünschte Begleiterscheinung nennt das Buch?",
    "a": [
     "Hohe Wartezeiten",
     "Junk Calls",
     "Silent Calls",
     "Lost Calls"
    ],
    "c": 1,
    "e": "Kostenlose Hotlines ziehen Spaßanrufe an.",
    "k": "Netze & Dienste",
    "d": "medium",
    "s": "LF4 3.2"
   },
   {
    "t": "mc",
    "q": "Was schreibt die TKG-Novelle von 2013 für Warteschleifen vor?",
    "a": [
     "Sie dürfen höchstens fünf Minuten dauern",
     "Sie müssen kostenlos sein",
     "Sie müssen von einem Menschen besetzt sein",
     "Sie sind nur bei 0900-Nummern zulässig"
    ],
    "c": 1,
    "e": "Die gesamte Zeit, in der das Anliegen nicht bearbeitet wird, muss kostenlos sein — unabhängig davon, ob Mensch oder IVR bearbeitet.",
    "k": "Netze & Dienste",
    "d": "hard",
    "s": "LF4 3.2"
   },
   {
    "t": "mc",
    "q": "Welche Gasse ermöglicht kostenfreies Warten durch einen einmaligen Preis pro Anruf?",
    "a": [
     "01805",
     "01806",
     "01807",
     "0900-1"
    ],
    "c": 1,
    "e": "Die 01806-Gasse rechnet pro Anruf ab, damit kostet das Warten nichts extra.",
    "k": "Netze & Dienste",
    "d": "hard",
    "s": "LF4 3.2"
   },
   {
    "t": "mc",
    "q": "Welche Besonderheit hat die 01807-Gasse?",
    "a": [
     "Sie ist komplett kostenlos",
     "Die ersten Sekunden sind kostenlos, danach gelten Minutenpreise",
     "Sie ist nur für Behörden zugelassen",
     "Sie rechnet pro Anruf ab"
    ],
    "c": 1,
    "e": "Kosten analog zur früheren 01805, aber mit einem kostenlosen Anfangszeitfenster. Der Anbieter muss das Gespräch danach auch annehmen.",
    "k": "Netze & Dienste",
    "d": "hard",
    "s": "LF4 3.2"
   },
   {
    "t": "mc",
    "q": "Warum stellen viele Callcenter von 01805 auf Festnetz- oder Pro-Anruf-Nummern um?",
    "a": [
     "Weil die 01805 verboten wurde",
     "Weil die Annahme innerhalb des kostenlosen Zeitfensters nicht garantierbar ist",
     "Weil die Bundesnetzagentur keine 0180er mehr vergibt",
     "Weil Mobilfunkanrufe dort unzulässig sind"
    ],
    "c": 1,
    "e": "Besonders zu Peakzeiten lässt sich die Annahme im kostenlosen Fenster nicht sicherstellen.",
    "k": "Netze & Dienste",
    "d": "hard",
    "s": "LF4 3.2"
   },
   {
    "t": "mc",
    "q": "Welche Höchstgrenze gilt beim Minutenpreis einer 0900-Nummer?",
    "a": [
     "1,00 €",
     "2,00 €",
     "3,00 €",
     "Es gibt keine Grenze"
    ],
    "c": 2,
    "e": "Maximal 3,00 € pro Minute; zusätzlich wird nach höchstens einer Stunde automatisch getrennt.",
    "k": "Netze & Dienste",
    "d": "hard",
    "s": "LF4 3.2"
   },
   {
    "t": "mc",
    "q": "Welche Nummerngasse hat die frühere 0190 abgelöst?",
    "a": [
     "0180",
     "0700",
     "0800",
     "0900"
    ],
    "c": 3,
    "e": "0900 ersetzte die 0190 und wird streng von der Bundesnetzagentur reguliert.",
    "k": "Netze & Dienste",
    "d": "medium",
    "s": "LF4 3.2"
   },
   {
    "t": "tf",
    "q": "Eine Vanity-Rufnummer setzt zwingend die Vorwahl 0700 voraus.",
    "v": false,
    "e": "Falsch. Die 0700 kennzeichnet sie nur eindeutig — auch 0800-AUSKUNFT ist möglich.",
    "k": "Netze & Dienste",
    "d": "hard",
    "s": "LF4 3.2"
   },
   {
    "t": "type",
    "q": "Wie lautet die Vanity-Nummer 0700-DIALOGFIX in Ziffern? (nur der Teil nach der Vorwahl)",
    "ans": [
     "342564349"
    ],
    "hint": "2=abc, 3=def, 4=ghi, 5=jkl, 6=mno, 7=pqrs, 8=tuv, 9=wxyz",
    "e": "D-I-A-L-O-G-F-I-X → 3-4-2-5-6-4-3-4-9.",
    "k": "Netze & Dienste",
    "d": "hard",
    "s": "LF4 3.2"
   },
   {
    "t": "mc",
    "q": "Warum ist die 0137er-Gasse für TV-Gewinnspiele besonders attraktiv?",
    "a": [
     "Weil sie kostenlos ist",
     "Weil auch Anrufe berechnet werden, die nicht zum Gewinn oder in die Sendung führen",
     "Weil keine Preisangabe nötig ist",
     "Weil sie nur im Mobilfunk gilt"
    ],
    "c": 1,
    "e": "Jeder Anruf wird abgerechnet, unabhängig vom Ergebnis.",
    "k": "Netze & Dienste",
    "d": "hard",
    "s": "LF4 3.2"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jeder Gasse ihre Informationspflicht nach dem TKG zu.",
    "pairs": [
     [
      "0180",
      "Preisangabe in der Werbung, keine Ansage"
     ],
     [
      "0900",
      "Preisangabe plus kostenlose Ansage vor der Nutzung"
     ],
     [
      "0137",
      "Preisangabe plus Ansage der Kosten nach Beendigung"
     ]
    ],
    "e": "0900 sagt vorher an, 0137 hinterher, 0180 gar nicht.",
    "k": "Netze & Dienste",
    "d": "hard",
    "s": "LF4 3.2"
   },
   {
    "t": "mc",
    "q": "Unter welcher Nummer erreicht man zentrale Behördenauskünfte zum Ortstarif?",
    "a": [
     "110",
     "112",
     "115",
     "116"
    ],
    "c": 2,
    "e": "Die 115 ist die zentrale Behördennummer zum Ortstarif.",
    "k": "Netze & Dienste",
    "d": "medium",
    "s": "LF4 3.2"
   },
   {
    "t": "mc",
    "q": "Dialogfix wirbt: „01806 555123 (20 Cent pro Anruf – Mobilfunk maximal 60 Cent).“ Warum der Mobilfunkhinweis?",
    "a": [
     "Weil Mobilfunkanrufe verboten sind",
     "Weil auf abweichende Kosten außerhalb des Festnetzes hinzuweisen ist",
     "Weil die Bundesnetzagentur die Preise festlegt",
     "Weil Mobilfunk immer teurer als 60 Cent ist"
    ],
    "c": 1,
    "e": "Anrufer müssen auf abweichende Kosten außerhalb des Festnetzes hingewiesen werden.",
    "k": "Netze & Dienste",
    "d": "hard",
    "s": "LF4 3.2"
   },
   {
    "t": "mc",
    "q": "Ein Kunde kennt nur die Rufnummer und will den Namen dazu finden. Wie heißt das?",
    "a": [
     "Vanity-Suche",
     "Inverssuche",
     "Preselection",
     "ANI"
    ],
    "c": 1,
    "e": "Inverssuche — Name und Anschrift anhand der Rufnummer.",
    "k": "Netze & Dienste",
    "d": "medium",
    "s": "LF4 3.1"
   },
   {
    "t": "tf",
    "q": "Bei einem R-Gespräch trägt der Anrufer die Kosten.",
    "v": false,
    "e": "Falsch. Beim R-Gespräch zahlt der Angerufene.",
    "k": "Netze & Dienste",
    "d": "medium",
    "s": "LF4 3.1"
   },
   {
    "t": "mc",
    "q": "Ein Kunde wechselt das Handy, behält aber seine Nummer, indem er die alte Karte einsetzt. Woran hängt die Rufnummer?",
    "a": [
     "Am Endgerät",
     "An der SIM-Karte",
     "Am Netzbetreiber-Standort",
     "An der IMEI"
    ],
    "c": 1,
    "e": "Die Rufnummer ist an die SIM (Subscriber Identity Module) gebunden.",
    "k": "Mobilfunk",
    "d": "medium",
    "s": "LF4 3.3"
   },
   {
    "t": "type",
    "q": "Wie viele Zeichen umfasst eine SMS?",
    "ans": [
     "160"
    ],
    "unit": "Zeichen",
    "e": "160 Zeichen.",
    "k": "Mobilfunk",
    "d": "easy",
    "s": "LF4 3.3"
   },
   {
    "t": "mc",
    "q": "Ein Kunde will maximale Kostenkontrolle ohne Grundgebühr. Welche Variante?",
    "a": [
     "Postpaid-Vertrag",
     "Prepaid",
     "Flatrate mit Laufzeit",
     "Preselection"
    ],
    "c": 1,
    "e": "Prepaid: Guthaben im Voraus, keine Grundgebühr, kein Überziehen.",
    "k": "Mobilfunk",
    "d": "easy",
    "s": "LF4 3.3"
   },
   {
    "t": "order",
    "q": "Bringen Sie die Mobilfunkstandards nach aufsteigender Datenrate in die richtige Reihenfolge.",
    "items": [
     "GSM",
     "GPRS",
     "EDGE",
     "UMTS",
     "LTE",
     "5G"
    ],
    "e": "9,6 kbit/s – 54 kbit/s – 220 kbit/s – 384 kbit/s – bis 150 Mbit/s – bis 20 Gbit/s.",
    "k": "Mobilfunk",
    "d": "hard",
    "s": "LF4 3.3"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jeden Standard seiner Generation zu.",
    "pairs": [
     [
      "GSM",
      "2G"
     ],
     [
      "UMTS",
      "3G"
     ],
     [
      "LTE",
      "4G-Familie"
     ],
     [
      "5G",
      "aktuelle Generation"
     ]
    ],
    "e": "GSM ist 2G, UMTS 3G, LTE die 4G-Familie.",
    "k": "Mobilfunk",
    "d": "medium",
    "s": "LF4 3.3"
   },
   {
    "t": "calc",
    "q": "UMTS erreichte 384 kbit/s, GSM 9,6 kbit/s. Um welchen Faktor war UMTS schneller? (auf ganze Zahl)",
    "ans": [
     "40"
    ],
    "unit": "-fach",
    "hint": "384 durch 9,6.",
    "e": "384 / 9,6 = 40. Gegenprobe: 9,6 × 40 = 384.",
    "k": "Mobilfunk",
    "d": "hard",
    "s": "LF4 3.3"
   },
   {
    "t": "mc",
    "q": "Welche Aussage zur eSIM trifft zu?",
    "a": [
     "Sie ist eine besonders große Bauform",
     "Sie ist fest im Gerät verbaut und wird digital konfiguriert",
     "Sie funktioniert nur im 5G-Netz",
     "Sie ersetzt die Rufnummer"
    ],
    "c": 1,
    "e": "Neben Standard-, Micro- und Nano-SIM ist die eSIM die fest verbaute Variante.",
    "k": "Mobilfunk",
    "d": "medium",
    "s": "LF4 3.3"
   },
   {
    "t": "mc",
    "q": "Ein Anruf soll dem Agenten zugewiesen werden, der Französisch spricht. Welches Verfahren?",
    "a": [
     "Longest Waiting Agent",
     "Skill-Based Routing",
     "Call Blending",
     "Predictive Dialing"
    ],
    "c": 1,
    "e": "Skill-Based Routing verteilt nach Fachkenntnissen.",
    "k": "Branchentechnik",
    "d": "medium",
    "s": "LF4 3.4"
   },
   {
    "t": "mc",
    "q": "Das System erkennt beim eingehenden Anruf, für welchen Auftraggeber die gewählte Nummer steht. Welche Technik?",
    "a": [
     "ANI",
     "DNIS",
     "CTI",
     "IVR"
    ],
    "c": 1,
    "e": "DNIS identifiziert die gewählte Zielnummer und damit das Projekt. ANI erkennt den Anrufer.",
    "k": "Branchentechnik",
    "d": "hard",
    "s": "LF4 3.4"
   },
   {
    "t": "mc",
    "q": "Die Kundenmaske öffnet sich automatisch, sobald der Anruf eingeht. Welche Technik macht das möglich?",
    "a": [
     "ACD",
     "IVR",
     "CTI",
     "ACW"
    ],
    "c": 2,
    "e": "CTI verbindet Telefonanlage und Computer — Screen Pop-up ist die typische Anwendung.",
    "k": "Branchentechnik",
    "d": "medium",
    "s": "LF4 3.4"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jede Abkürzung ihrer Bedeutung zu.",
    "pairs": [
     [
      "ACD",
      "automatische Anrufverteilung"
     ],
     [
      "ANI",
      "Erkennung der Anruferrufnummer"
     ],
     [
      "DNIS",
      "Erkennung der gewählten Zielnummer"
     ],
     [
      "IVR",
      "Sprachdialogsystem"
     ]
    ],
    "e": "Vier Kürzel, die im Callcenter ständig verwechselt werden.",
    "k": "Branchentechnik",
    "d": "hard",
    "s": "LF4 3.4"
   },
   {
    "t": "mc",
    "q": "Der Anruf geht an den Agenten, der am längsten im Status „Bereit“ steht. Wie heißt das Prinzip?",
    "a": [
     "Skill-Based Routing",
     "Longest Waiting Agent",
     "Round Robin",
     "Call Blending"
    ],
    "c": 1,
    "e": "Longest Waiting Agent verteilt nach Wartezeit des Agenten, nicht nach Fähigkeiten.",
    "k": "Branchentechnik",
    "d": "medium",
    "s": "LF4 3.4"
   },
   {
    "t": "order",
    "q": "Ordnen Sie die Dialer-Verfahren nach steigender Automatisierung.",
    "items": [
     "Preview Dialing",
     "Power Dialing",
     "Predictive Dialing"
    ],
    "e": "Agent startet – System startet bei freiem Agent – System wählt vorausschauend mehr Nummern.",
    "k": "Branchentechnik",
    "d": "hard",
    "s": "LF4 3.4"
   },
   {
    "t": "mc",
    "q": "Ein Kunde hebt ab und hört nur Stille, weil kein Agent frei ist. Wie heißt das und wodurch entsteht es?",
    "a": [
     "Lost Call durch lange Warteschleife",
     "Silent Call durch zu aggressives Predictive Dialing",
     "Junk Call durch kostenlose Hotline",
     "Abandoned Call durch Systemausfall"
    ],
    "c": 1,
    "e": "Overdial beim Predictive Dialing erzeugt Silent Calls — kundenfeindlich und rechtlich kritisch.",
    "k": "Branchentechnik",
    "d": "hard",
    "s": "LF4 3.4"
   },
   {
    "t": "tf",
    "q": "Ein Lost Call und ein Silent Call bezeichnen denselben Sachverhalt.",
    "v": false,
    "e": "Falsch. Beim Lost Call legt der Kunde in der Warteschleife auf. Beim Silent Call hebt er ab und findet keinen Agenten vor.",
    "k": "Branchentechnik",
    "d": "hard",
    "s": "LF4 3.4"
   },
   {
    "t": "mc",
    "q": "Am Vormittag herrscht Anrufandrang, am Nachmittag Leerlauf. Welche Technik gleicht das aus?",
    "a": [
     "Call Blending",
     "Skill-Based Routing",
     "Preview Dialing",
     "Omnichannel"
    ],
    "c": 0,
    "e": "Call Blending wechselt Agenten je nach Aufkommen zwischen Inbound und Outbound.",
    "k": "Branchentechnik",
    "d": "medium",
    "s": "LF4 3.4"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jede Kennzahl ihrer Definition zu.",
    "pairs": [
     [
      "ASA",
      "durchschnittliche Zeit bis zur Annahme"
     ],
     [
      "AHT",
      "Gesprächszeit plus Nachbearbeitung"
     ],
     [
      "ACW",
      "Nachbearbeitungszeit"
     ],
     [
      "Servicelevel",
      "Anteil der Anrufe innerhalb einer Zeitschwelle"
     ]
    ],
    "e": "ASA misst das Warten, AHT das Gesamtpaket, ACW nur die Nachbearbeitung.",
    "k": "Kennzahlen",
    "d": "hard",
    "s": "LF4 3.4"
   },
   {
    "t": "calc",
    "q": "Ein Gespräch dauert 4 Minuten 30 Sekunden, die Nachbearbeitung 90 Sekunden. Wie hoch ist die AHT in Minuten?",
    "ans": [
     "6"
    ],
    "unit": "Minuten",
    "hint": "Gesprächszeit plus ACW.",
    "e": "270 s + 90 s = 360 s = 6 Minuten. Gegenprobe: 6 min − 1,5 min ACW = 4,5 min Gesprächszeit.",
    "k": "Kennzahlen",
    "d": "medium",
    "s": "LF4 3.4"
   },
   {
    "t": "calc",
    "q": "Von 800 eingegangenen Anrufen wurden 640 innerhalb von 20 Sekunden angenommen. Wie lautet der Servicelevel?",
    "ans": [
     "80",
     "80/20",
     "80 %"
    ],
    "unit": "%",
    "hint": "Angenommene innerhalb der Schwelle durch Gesamtanrufe.",
    "e": "640 / 800 = 0,80 → Servicelevel 80/20. Gegenprobe: 80 % von 800 = 640.",
    "k": "Kennzahlen",
    "d": "medium",
    "s": "LF4 3.4"
   },
   {
    "t": "calc",
    "q": "Von 1.250 eingehenden Anrufen legten 75 in der Warteschleife auf. Wie hoch ist die Lost-Call-Quote?",
    "ans": [
     "6"
    ],
    "unit": "%",
    "hint": "Aufgelegte mal 100 durch eingehende.",
    "e": "75 × 100 / 1.250 = 6 %. Gegenprobe: 6 % von 1.250 = 75.",
    "k": "Kennzahlen",
    "d": "medium",
    "s": "LF4 3.4"
   },
   {
    "t": "mc",
    "q": "Ein Kunde beginnt im Chat, setzt per Telefon fort und erhält eine E-Mail — alles mit demselben Vorgangsstand. Wie heißt das Konzept?",
    "a": [
     "Multichannel",
     "Omnichannel",
     "Call Blending",
     "Unified Messaging"
    ],
    "c": 1,
    "e": "Omnichannel meint die nahtlose Integration aller Kanäle mit konsistentem Erlebnis.",
    "k": "Branchentechnik",
    "d": "hard",
    "s": "LF4 3.4"
   },
   {
    "t": "type",
    "q": "Wie heißt die konsequente Ausrichtung aller Unternehmensprozesse auf den Kunden?",
    "ans": [
     "Customer Centricity",
     "Kundenzentrierung"
    ],
    "e": "Customer Centricity.",
    "k": "Branchentechnik",
    "d": "medium",
    "s": "LF4 3.4"
   },
   {
    "t": "mc",
    "q": "Ein Callcenter braucht eine Lösung, die exakt auf seine Prozesse zugeschnitten ist. Welche Softwareart?",
    "a": [
     "Standardsoftware",
     "Individualsoftware",
     "Betriebssystem",
     "Firmware"
    ],
    "c": 1,
    "e": "Individualsoftware wird für die Bedürfnisse eines einzelnen Kunden entwickelt.",
    "k": "Software",
    "d": "easy",
    "s": "LF4 3.5"
   },
   {
    "t": "mc",
    "q": "Welche Aufgabe hat das Betriebssystem?",
    "a": [
     "Briefe schreiben und Tabellen rechnen",
     "Die Hardware verwalten und eine Schnittstelle für Anwendungen bereitstellen",
     "Kundendaten speichern",
     "Netzwerke verbinden"
    ],
    "c": 1,
    "e": "Ohne Betriebssystem läuft keine Anwendungssoftware.",
    "k": "Software",
    "d": "easy",
    "s": "LF4 3.5"
   },
   {
    "t": "mc",
    "q": "Aus gescannten Rechnungen sollen Beträge automatisch ausgelesen werden. Welche Technik?",
    "a": [
     "OCR",
     "TTS",
     "CTI",
     "SQL"
    ],
    "c": 0,
    "e": "Optical Character Recognition erkennt Text in Bildern und Scans.",
    "k": "Software",
    "d": "medium",
    "s": "LF4 3.5"
   },
   {
    "t": "multi",
    "q": "Welche Vorteile nennt das Buch zum Cloud-Computing?",
    "a": [
     "Hohe Flexibilität",
     "Skalierbarkeit",
     "Keine hohen Investitionskosten für eigene Server",
     "Vollständige Unabhängigkeit vom Internetanbieter"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Die Abhängigkeit vom Internetanbieter ist gerade ein Nachteil.",
    "k": "Software",
    "d": "medium",
    "s": "LF4 3.5"
   },
   {
    "t": "mc",
    "q": "Aus den Anrufzahlen der letzten zwei Jahre wird das Aufkommen für Dezember vorhergesagt. Wie heißt das?",
    "a": [
     "Echtzeitmanagement",
     "Forecasting",
     "Workforce Management",
     "Blending"
    ],
    "c": 1,
    "e": "Forecasting sagt das künftige Aufkommen aus historischen Daten voraus.",
    "k": "Software",
    "d": "medium",
    "s": "LF4 3.5"
   },
   {
    "t": "mc",
    "q": "Um 11 Uhr wächst die Warteschlange, der Supervisor holt Kollegen aus der Nachbearbeitung. Wie heißt das?",
    "a": [
     "Forecasting",
     "Echtzeitmanagement",
     "PEP",
     "Normalisierung"
    ],
    "c": 1,
    "e": "Echtzeitmanagement steuert kurzfristig anhand aktueller Kennzahlen.",
    "k": "Software",
    "d": "hard",
    "s": "LF4 3.5"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jedem System seinen Zweck zu.",
    "pairs": [
     [
      "CRM",
      "Verwaltung aller Kundenbeziehungen und -daten"
     ],
     [
      "ERP",
      "Steuerung aller Geschäftsprozesse"
     ],
     [
      "PEP",
      "Schichtplanung nach erwartetem Aufkommen"
     ],
     [
      "Wissensdatenbank",
      "zentrale Bereitstellung von Fachwissen"
     ]
    ],
    "e": "Kunde, Gesamtunternehmen, Personal, Wissen.",
    "k": "Software",
    "d": "hard",
    "s": "LF4 3.5"
   },
   {
    "t": "mc",
    "q": "Was identifiziert einen Datensatz in einer Tabelle eindeutig?",
    "a": [
     "Der Fremdschlüssel",
     "Der Primärschlüssel",
     "Das Datenfeld",
     "Der Index"
    ],
    "c": 1,
    "e": "Der Primärschlüssel. Der Fremdschlüssel verweist auf den Primärschlüssel einer anderen Tabelle.",
    "k": "Datenbanken",
    "d": "easy",
    "s": "LF4 4"
   },
   {
    "t": "mc",
    "q": "In der Tabelle „Bestellungen“ steht die Kundennummer, die in „Kunden“ der Primärschlüssel ist. Was ist sie hier?",
    "a": [
     "Primärschlüssel",
     "Fremdschlüssel",
     "Redundanz",
     "Datensatz"
    ],
    "c": 1,
    "e": "Sie stellt die Beziehung zwischen beiden Tabellen her.",
    "k": "Datenbanken",
    "d": "medium",
    "s": "LF4 4"
   },
   {
    "t": "mc",
    "q": "Ein Kunde kann viele Bestellungen haben, eine Bestellung gehört zu genau einem Kunden. Welche Beziehung?",
    "a": [
     "1:1",
     "1:n",
     "n:m",
     "n:1 mit Redundanz"
    ],
    "c": 1,
    "e": "Eine klassische 1:n-Beziehung.",
    "k": "Datenbanken",
    "d": "medium",
    "s": "LF4 4"
   },
   {
    "t": "mc",
    "q": "Die Adresse eines Kunden steht in drei Tabellen. Nach einem Umzug wird sie nur an einer Stelle geändert. Welches Problem tritt auf?",
    "a": [
     "Verlust der Verfügbarkeit",
     "Inkonsistenz durch Redundanz",
     "Verletzung der Zweckbindung",
     "Fehlender Primärschlüssel"
    ],
    "c": 1,
    "e": "Mehrfachspeicherung führt bei Teiländerungen zu widersprüchlichen Daten. Gegenmittel: Normalisierung.",
    "k": "Datenbanken",
    "d": "hard",
    "s": "LF4 4"
   },
   {
    "t": "type",
    "q": "Wie heißt der Prozess, der Redundanzen minimiert und Konsistenz sichert?",
    "ans": [
     "Normalisierung"
    ],
    "e": "Normalisierung.",
    "k": "Datenbanken",
    "d": "medium",
    "s": "LF4 4"
   },
   {
    "t": "cloze",
    "q": "Datenbankbegriffe",
    "txt": "Ein {{1}} entspricht einer Zeile und fasst alle Angaben zu einem Objekt zusammen. Ein {{2}} entspricht einer Spalte und ist die kleinste Einheit. Die Abfragesprache heißt {{3}}.",
    "gaps": [
     {
      "s": "Datensatz",
      "o": [
       "Datenfeld",
       "Primärschlüssel"
      ]
     },
     {
      "s": "Datenfeld",
      "o": [
       "Datensatz",
       "Index"
      ]
     },
     {
      "s": "SQL",
      "o": [
       "OCR",
       "CRM"
      ]
     }
    ],
    "e": "Zeile, Spalte, Structured Query Language.",
    "k": "Datenbanken",
    "d": "medium",
    "s": "LF4 4"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jede Datenart der richtigen Kategorie zu.",
    "pairs": [
     [
      "Kundenname und Anschrift",
      "Stammdaten"
     ],
     [
      "Bestellmengen des Monats",
      "Bewegungsdaten"
     ],
     [
      "Kundennummer und Postleitzahl",
      "Ordnungsdaten"
     ],
     [
      "Rechnungsbeträge",
      "Rechendaten"
     ]
    ],
    "e": "Stamm/Bewegung unterscheidet nach dem Veränderungsintervall, Ordnung/Rechen nach der Aufgabenart.",
    "k": "Datenbanken",
    "d": "hard",
    "s": "LF4 4.4"
   },
   {
    "t": "mc",
    "q": "Warum ist eine Postleitzahl trotz Ziffern kein Rechendatum?",
    "a": [
     "Weil sie zu kurz ist",
     "Weil mit ihr nicht sinnvoll gerechnet wird — sie dient der Identifikation und Sortierung",
     "Weil sie alphanumerisch ist",
     "Weil sie ein Fremdschlüssel ist"
    ],
    "c": 1,
    "e": "Ordnungsdaten identifizieren und sortieren; Rechendaten gehen in Berechnungen ein.",
    "k": "Datenbanken",
    "d": "hard",
    "s": "LF4 4.4"
   },
   {
    "t": "multi",
    "q": "Nach welchen Kriterien lassen sich Daten laut Buch unterscheiden?",
    "a": [
     "Aufgabenart",
     "Veränderungsintervall",
     "Stellung im Verarbeitungsprozess",
     "Zeichenart",
     "Speicherort auf dem Server"
    ],
    "cs": [
     0,
     1,
     2,
     3
    ],
    "e": "Vier Kriterien: Rechen/Ordnung, Bewegung/Stamm, Eingabe/Ausgabe, numerisch/alphanumerisch/alphabetisch. Der Speicherort ist kein Unterscheidungskriterium der Datenart.",
    "k": "Datenbanken",
    "d": "hard",
    "s": "LF4 4.4"
   },
   {
    "t": "mc",
    "q": "Ein Kunde verlangt Auskunft, welche Daten über ihn gespeichert sind. Worum geht es?",
    "a": [
     "Datensicherheit",
     "Datenschutz",
     "Datenkonsistenz",
     "Datenminimierung"
    ],
    "c": 1,
    "e": "Datenschutz betrifft die Rechte der Person. Datensicherheit meint den technischen Schutz der Daten.",
    "k": "Datenschutz",
    "d": "medium",
    "s": "LF4 5/6"
   },
   {
    "t": "mc",
    "q": "Ein Backup-Konzept und eine Firewall gehören zu …",
    "a": [
     "Datenschutz",
     "Datensicherheit",
     "Zweckbindung",
     "Auftragsverarbeitung"
    ],
    "c": 1,
    "e": "Technische und organisatorische Maßnahmen zum Schutz der Daten selbst.",
    "k": "Datenschutz",
    "d": "medium",
    "s": "LF4 5"
   },
   {
    "t": "cloze",
    "q": "Datenschutz oder Datensicherheit",
    "txt": "{{1}} schützt den Einzelnen vor Beeinträchtigungen seines Persönlichkeitsrechts. {{2}} umfasst die technischen und organisatorischen Maßnahmen zum Schutz der Daten vor Verlust und Missbrauch.",
    "gaps": [
     {
      "s": "Datenschutz",
      "o": [
       "Datensicherheit",
       "Datenminimierung"
      ]
     },
     {
      "s": "Datensicherheit",
      "o": [
       "Datenschutz",
       "Datenkonsistenz"
      ]
     }
    ],
    "e": "Schutz der Person gegen Schutz der Daten.",
    "k": "Datenschutz",
    "d": "medium",
    "s": "LF4 5/6"
   },
   {
    "t": "mc",
    "q": "Adressdaten wurden für eine Bestellung erhoben und sollen nun für Werbung genutzt werden. Welcher Grundsatz ist berührt?",
    "a": [
     "Datenminimierung",
     "Zweckbindung",
     "Integrität",
     "Verfügbarkeit"
    ],
    "c": 1,
    "e": "Daten dürfen nur für den Zweck verarbeitet werden, für den sie erhoben wurden.",
    "k": "Datenschutz",
    "d": "hard",
    "s": "LF4 6"
   },
   {
    "t": "mc",
    "q": "Ein Formular fragt Geburtsdatum, Beruf und Einkommen ab, obwohl nur die Lieferadresse nötig ist. Welcher Grundsatz wird verletzt?",
    "a": [
     "Zweckbindung",
     "Datenminimierung",
     "Richtigkeit",
     "Speicherbegrenzung"
    ],
    "c": 1,
    "e": "Nur so viele Daten wie unbedingt erforderlich.",
    "k": "Datenschutz",
    "d": "medium",
    "s": "LF4 6"
   },
   {
    "t": "mc",
    "q": "Die KommunikativAktiv KG bearbeitet Kundendaten im Auftrag von Dialogfix. Wie heißt diese Konstellation?",
    "a": [
     "Gemeinsame Verantwortlichkeit",
     "Auftragsverarbeitung",
     "Datenübermittlung an Dritte",
     "Funktionsübertragung"
    ],
    "c": 1,
    "e": "Verarbeitung im Auftrag und nach Weisung eines Verantwortlichen — der Normalfall beim externen Callcenter.",
    "k": "Datenschutz",
    "d": "hard",
    "s": "LF4 6"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jedem Schutzziel seine Bedeutung zu.",
    "pairs": [
     [
      "Vertraulichkeit",
      "nur Berechtigte erhalten Zugriff"
     ],
     [
      "Integrität",
      "Unversehrtheit und Korrektheit der Daten"
     ],
     [
      "Verfügbarkeit",
      "Zugriff für Berechtigte bei Bedarf"
     ]
    ],
    "e": "Die drei klassischen Schutzziele der Informationssicherheit.",
    "k": "Datenschutz",
    "d": "medium",
    "s": "LF4 5"
   },
   {
    "t": "mc",
    "q": "Ein Mitarbeiter erhält eine täuschend echte Bank-E-Mail mit Login-Aufforderung. Wie heißt der Angriff?",
    "a": [
     "Ransomware",
     "Phishing",
     "Trojaner",
     "Denial of Service"
    ],
    "c": 1,
    "e": "Phishing zielt über gefälschte Mails oder Seiten auf sensible Daten.",
    "k": "Datenschutz",
    "d": "easy",
    "s": "LF4 5"
   },
   {
    "t": "mc",
    "q": "Alle Dateien sind verschlüsselt, auf dem Bildschirm steht eine Zahlungsaufforderung. Welche Schadsoftware?",
    "a": [
     "Phishing",
     "Ransomware",
     "Spyware",
     "Adware"
    ],
    "c": 1,
    "e": "Ransomware verschlüsselt Daten und fordert Lösegeld. Das beste Gegenmittel ist ein aktuelles Backup.",
    "k": "Datenschutz",
    "d": "easy",
    "s": "LF4 5"
   },
   {
    "t": "mc",
    "q": "Welche Maßnahme schützt am wirksamsten gegen einen Ransomware-Schaden?",
    "a": [
     "Eine Firewall",
     "Ein aktuelles, getrenntes Backup",
     "Ein Passwortwechsel",
     "Ein VPN"
    ],
    "c": 1,
    "e": "Die Firewall verhindert Zugriffe, wiederherstellen lässt sich der Datenbestand aber nur aus dem Backup.",
    "k": "Datenschutz",
    "d": "hard",
    "s": "LF4 5"
   },
   {
    "t": "type",
    "q": "Wie heißt das Recht des Betroffenen auf Löschung seiner personenbezogenen Daten?",
    "ans": [
     "Recht auf Vergessenwerden",
     "Recht auf Löschung"
    ],
    "e": "Recht auf Vergessenwerden.",
    "k": "Datenschutz",
    "d": "medium",
    "s": "LF4 6"
   },
   {
    "t": "tf",
    "q": "Personenbezogene Daten sind nur Name und Anschrift einer Person.",
    "v": false,
    "e": "Falsch. Es sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.",
    "k": "Datenschutz",
    "d": "medium",
    "s": "LF4 6"
   },
   {
    "t": "odd",
    "q": "Welcher Begriff gehört nicht zu den DSGVO-Grundsätzen?",
    "a": [
     "Zweckbindung",
     "Datenminimierung",
     "Speicherbegrenzung",
     "Normalisierung"
    ],
    "c": 3,
    "e": "Normalisierung ist ein Datenbankbegriff.",
    "k": "Datenschutz",
    "d": "medium",
    "s": "LF4 6"
   },
   {
    "t": "odd",
    "q": "Welcher Begriff gehört nicht zu den Dialer-Verfahren?",
    "a": [
     "Preview Dialing",
     "Power Dialing",
     "Predictive Dialing",
     "Skill Dialing"
    ],
    "c": 3,
    "e": "Skill-Based Routing betrifft die Inbound-Verteilung, kein Dialer-Verfahren.",
    "k": "Branchentechnik",
    "d": "medium",
    "s": "LF4 3.4"
   },
   {
    "t": "odd",
    "q": "Welche Rufnummerngasse ist für den Anrufer kostenlos?",
    "a": [
     "0180",
     "0700",
     "0800",
     "0900"
    ],
    "c": 2,
    "e": "Nur die 0800 ist Freecall.",
    "k": "Netze & Dienste",
    "d": "easy",
    "s": "LF4 3.2"
   },
   {
    "t": "odd",
    "q": "Welcher Begriff beschreibt keine Kennzahl?",
    "a": [
     "ASA",
     "AHT",
     "ACW",
     "ACD"
    ],
    "c": 3,
    "e": "ACD ist die automatische Anrufverteilung, keine Kennzahl.",
    "k": "Kennzahlen",
    "d": "hard",
    "s": "LF4 3.4"
   },
   {
    "t": "tf",
    "q": "Die IVR kann Anrufe vorqualifizieren und Self-Services anbieten.",
    "v": true,
    "e": "Richtig — genau das ist ihre Aufgabe.",
    "k": "Branchentechnik",
    "d": "easy",
    "s": "LF4 3.4"
   },
   {
    "t": "tf",
    "q": "Click-to-Dial startet einen Anruf per Mausklick aus einer Anwendung heraus.",
    "v": true,
    "e": "Richtig — eine typische CTI-Funktion.",
    "k": "Branchentechnik",
    "d": "easy",
    "s": "LF4 3.4"
   },
   {
    "t": "tf",
    "q": "Predictive Dialing wählt genau so viele Nummern, wie Agenten frei sind.",
    "v": false,
    "e": "Falsch. Es wählt vorausschauend mehr Nummern — daraus entstehen bei Fehleinschätzung Silent Calls.",
    "k": "Branchentechnik",
    "d": "medium",
    "s": "LF4 3.4"
   },
   {
    "t": "multi",
    "q": "Welche Funktionen ermöglicht CTI?",
    "a": [
     "Screen Pop-up",
     "Click-to-Dial",
     "Verknüpfung von Telefonanlage und Computer",
     "Automatische Rufnummernvergabe durch die Bundesnetzagentur"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Die Nummernvergabe ist eine behördliche Aufgabe.",
    "k": "Branchentechnik",
    "d": "medium",
    "s": "LF4 3.4"
   },
   {
    "t": "multi",
    "q": "Welche Aussagen zur 0800-Nummer treffen zu?",
    "a": [
     "Für den Anrufer kostenlos",
     "Das Unternehmen trägt die Kosten",
     "Sie soll zu Anrufen ermuntern",
     "Sie unterliegt einer Preisansagepflicht"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Eine Preisansage braucht es nicht, wo keine Kosten entstehen.",
    "k": "Netze & Dienste",
    "d": "medium",
    "s": "LF4 3.2"
   },
   {
    "t": "multi",
    "q": "Welche Maßnahmen zählen zur Datensicherheit?",
    "a": [
     "Firewall",
     "Backup",
     "Spamfilter",
     "Einwilligungserklärung des Kunden"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Die Einwilligung ist eine datenschutzrechtliche, keine technische Maßnahme.",
    "k": "Datenschutz",
    "d": "medium",
    "s": "LF4 5"
   },
   {
    "t": "cloze",
    "q": "Kennzahlen im Callcenter",
    "txt": "Die {{1}} misst die durchschnittliche Zeit bis zur Annahme. Die {{2}} umfasst Gesprächszeit plus Nachbearbeitung. Die reine Nachbearbeitungszeit heißt {{3}}. Ein Anruf, bei dem der Kunde in der Warteschleife auflegt, heißt {{4}}.",
    "gaps": [
     {
      "s": "ASA",
      "o": [
       "AHT",
       "ACW"
      ]
     },
     {
      "s": "AHT",
      "o": [
       "ASA",
       "FCR"
      ]
     },
     {
      "s": "ACW",
      "o": [
       "ASA",
       "AHT"
      ]
     },
     {
      "s": "Lost Call",
      "o": [
       "Silent Call",
       "Junk Call"
      ]
     }
    ],
    "e": "ASA, AHT, ACW, Lost Call.",
    "k": "Kennzahlen",
    "d": "hard",
    "s": "LF4 3.4"
   },
   {
    "t": "cloze",
    "q": "Servicerufnummern",
    "txt": "Die Gasse {{1}} ist für den Anrufer kostenlos. Die Gasse {{2}} ist für Premium-Dienste vorgesehen und auf maximal {{3}} € pro Minute begrenzt. Vanity-Nummern tragen häufig die Vorwahl {{4}}.",
    "gaps": [
     {
      "s": "0800",
      "o": [
       "0180",
       "0900"
      ]
     },
     {
      "s": "0900",
      "o": [
       "0800",
       "0137"
      ]
     },
     {
      "s": "3,00",
      "o": [
       "1,00",
       "5,00"
      ]
     },
     {
      "s": "0700",
      "o": [
       "0800",
       "0137"
      ]
     }
    ],
    "e": "0800 frei, 0900 Premium mit 3-€-Deckel, 0700 Vanity.",
    "k": "Netze & Dienste",
    "d": "hard",
    "s": "LF4 3.2"
   },
   {
    "t": "mc",
    "q": "Ein Unternehmen will Warteschleifen anbieten, ohne dass beim Kunden Kosten entstehen. Welche Gasse löst das am saubersten?",
    "a": [
     "01805",
     "01806",
     "0900-1",
     "0137"
    ],
    "c": 1,
    "e": "Ein einmaliger Preis pro Anruf lässt die Wartezeit kostenfrei.",
    "k": "Netze & Dienste",
    "d": "hard",
    "s": "LF4 3.2"
   },
   {
    "t": "mc",
    "q": "Welche Instanz vergibt die 0900-Nummern und ahndet Missbrauch?",
    "a": [
     "Die IHK",
     "Die Bundesnetzagentur",
     "Das Bundeskartellamt",
     "Der Datenschutzbeauftragte"
    ],
    "c": 1,
    "e": "Die Bundesnetzagentur.",
    "k": "Netze & Dienste",
    "d": "medium",
    "s": "LF4 3.2"
   },
   {
    "t": "mc",
    "q": "Nach welcher Zeit wird eine 0900-Verbindung automatisch getrennt?",
    "a": [
     "Nach 15 Minuten",
     "Nach 30 Minuten",
     "Nach maximal einer Stunde",
     "Gar nicht"
    ],
    "c": 2,
    "e": "Automatische Trennung nach höchstens einer Stunde.",
    "k": "Netze & Dienste",
    "d": "hard",
    "s": "LF4 3.2"
   },
   {
    "t": "mc",
    "q": "Warum ist die Akzeptanz von 0900-Nummern heute höher als früher bei 0190?",
    "a": [
     "Weil sie billiger sind",
     "Weil die strenge Regulierung Preistransparenz schafft",
     "Weil sie kostenlos sind",
     "Weil sie nur im Mobilfunk gelten"
    ],
    "c": 1,
    "e": "Klare Preisangabe, Ansage und Höchstgrenzen schaffen Vertrauen.",
    "k": "Netze & Dienste",
    "d": "hard",
    "s": "LF4 3.2"
   },
   {
    "t": "mc",
    "q": "Welche Aussage zum Faxabruf trifft zu?",
    "a": [
     "Er ist eine Form der Inverssuche",
     "Er wird auch Fax-Polling genannt und häufig über 0900 abgerechnet",
     "Er ersetzt den Sendebericht",
     "Er funktioniert nur im Intranet"
    ],
    "c": 1,
    "e": "Beim Faxabruf ruft der Kunde ein bereitgestelltes Dokument selbst ab.",
    "k": "Netze & Dienste",
    "d": "hard",
    "s": "LF4 3.1"
   },
   {
    "t": "mc",
    "q": "Welche Aussage zu Mehrwertdiensten trifft zu?",
    "a": [
     "Sie beschränken sich auf die reine Sprachübertragung",
     "Sie bieten einen Nutzen über die Sprachübertragung hinaus",
     "Sie sind immer kostenlos",
     "Sie werden nur im Mobilfunk angeboten"
    ],
    "c": 1,
    "e": "Value Added Services gehen über die reine Verbindung hinaus.",
    "k": "Netze & Dienste",
    "d": "easy",
    "s": "LF4 3.1"
   },
   {
    "t": "calc",
    "q": "Ein Anruf bei einer 0900-Nummer dauert 12 Minuten bei 2,50 € pro Minute. Wie hoch sind die Kosten?",
    "ans": [
     "30",
     "30,00",
     "30 €"
    ],
    "unit": "€",
    "hint": "Minuten mal Minutenpreis.",
    "e": "12 × 2,50 € = 30,00 €. Der Minutenpreis liegt unter der Obergrenze von 3,00 €.",
    "k": "Netze & Dienste",
    "d": "medium",
    "s": "LF4 3.2"
   },
   {
    "t": "calc",
    "q": "Ein Callcenter nimmt täglich 12.500 Anrufe entgegen, 4 % gehen als Lost Call verloren. Wie viele Kunden erreichen niemanden?",
    "ans": [
     "500"
    ],
    "unit": "Anrufe",
    "hint": "4 % von 12.500.",
    "e": "12.500 × 0,04 = 500. Gegenprobe: 500 / 12.500 = 4 %.",
    "k": "Kennzahlen",
    "d": "medium",
    "s": "LF4 3.4"
   },
   {
    "t": "mc",
    "q": "Ein Agent ist im Status „Bereit“, das System weist ihm aber keinen Anruf zu, obwohl gewartet wird. Welche Ursache liegt am nächsten?",
    "a": [
     "Fehlender Primärschlüssel",
     "Skill-Based Routing — ihm fehlt der geforderte Skill",
     "Ein Lost Call",
     "Eine Zweckbindungsverletzung"
    ],
    "c": 1,
    "e": "Beim Skill-Based Routing entscheidet die Fachkenntnis, nicht allein die Verfügbarkeit.",
    "k": "Branchentechnik",
    "d": "hard",
    "s": "LF4 3.4"
   },
   {
    "t": "tf",
    "q": "Bei einer Dial-in-Konferenz ruft das System alle Teilnehmer nacheinander an.",
    "v": false,
    "e": "Falsch. Das ist Dial-out. Bei Dial-in wählen sich die Teilnehmer selbst ein.",
    "k": "Kommunikationsmedien",
    "d": "medium",
    "s": "LF4 2.1"
   },
   {
    "t": "tf",
    "q": "Ein Intranet basiert auf denselben Technologien wie das Internet.",
    "v": true,
    "e": "Richtig — es ist ein geschlossenes, unternehmensinternes Netz auf Internet-Technologien.",
    "k": "Netzwerke",
    "d": "easy",
    "s": "LF4 2.2"
   },
   {
    "t": "tf",
    "q": "Bei Call-by-Call schließt der Kunde einen dauerhaften Vertrag mit dem Anbieter.",
    "v": false,
    "e": "Falsch. Der Vertrag gilt nur für das einzelne Gespräch.",
    "k": "Netze & Dienste",
    "d": "medium",
    "s": "LF4 3.1"
   },
   {
    "t": "order",
    "q": "Bringen Sie die Bearbeitungsschritte eines eingehenden Anrufs in die richtige Reihenfolge.",
    "items": [
     "Anruf trifft in der Telefonanlage ein",
     "ACD verteilt nach definierten Regeln",
     "CTI öffnet die Kundenmaske am Arbeitsplatz",
     "Agent führt das Gespräch",
     "Nachbearbeitung (ACW)"
    ],
    "e": "Anlage – Verteilung – Screen Pop-up – Gespräch – Nachbearbeitung.",
    "k": "Branchentechnik",
    "d": "hard",
    "s": "LF4 3.4"
   },
   {
    "t": "multi",
    "q": "Welche Angaben gehören zu den personenbezogenen Daten?",
    "a": [
     "Name und Anschrift",
     "Kundennummer, die einer Person zugeordnet werden kann",
     "IP-Adresse, die eine Person identifizierbar macht",
     "Der Jahresumsatz eines Unternehmens"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Es geht um natürliche Personen — Unternehmensdaten fallen nicht darunter.",
    "k": "Datenschutz",
    "d": "hard",
    "s": "LF4 6"
   },
   {
    "t": "mc",
    "q": "Welche Aufgabe hat der Datenschutzbeauftragte?",
    "a": [
     "Er verarbeitet die Daten",
     "Er überwacht die Einhaltung der Datenschutzvorschriften",
     "Er erstellt die Backups",
     "Er vergibt Rufnummern"
    ],
    "c": 1,
    "e": "Überwachung und Beratung im Unternehmen.",
    "k": "Datenschutz",
    "d": "easy",
    "s": "LF4 6"
   }
  ]
 },
 {
  "code": "05",
  "name": "Kundinnen und Kunden im Dialogmarketing betreuen und binden",
  "themen": [
   {
    "t": "5.1.1 Meldeformel & Gesprächseröffnung",
    "d": "Standardisierter Einstieg im Inbound-Beratungsgespräch.",
    "c": "Die Meldeformel ist das standardisierte Gesprächseinstiegsformat im Inbound-Bereich. Sie besteht aus genau 4 Elementen in fester Reihenfolge:\n\n**Reihenfolge (B-F-N-F):**\n1. **Begrüßung** (\"Guten Tag\" / \"Guten Morgen\")\n2. **Firmenname** (\"KommunikativAktiv GmbH\")\n3. **Name des Mitarbeiters** (\"Mein Name ist Müller\")\n4. **Offene Frage** (\"Was kann ich für Sie tun?\")\n\n**Beispiel:** \"Guten Tag, KommunikativAktiv, mein Name ist Müller, was kann ich für Sie tun?\"\n\n**Prüfungsfalle:** Reihenfolge ist FIX. Die Frage am Ende muss OFFEN sein – keine Ja/Nein-Frage.",
    "k": [
     "4 Bestandteile in fester Reihenfolge: B-F-N-F",
     "Letzte Frage muss IMMER offen sein (W-Frage)",
     "Eselsbrücke: Begrüßung-Firma-Name-Frage"
    ],
    "r": "high"
   },
   {
    "t": "5.1.2 Legitimationsprüfung",
    "d": "Identitätsprüfung des Anrufers vor Datenweitergabe.",
    "c": "Vor der Datenweitergabe oder Kontobearbeitung muss die Identität des Anrufers geprüft werden.\n\n**Typische Prüfelemente:**\n- Name + Adresse\n- Kundennummer\n- Geburtsdatum\n\n**Zweck:**\n- Datenschutz (DSGVO)\n- Vermeidung von Social Engineering\n- Haftungsschutz für das Unternehmen\n\n**Prüfungsfalle:** Legitimation muss VOR Datenweitergabe erfolgen – niemals danach. Auch bei bekannten Stammkunden.",
    "k": [
     "IMMER vor Datenweitergabe (DSGVO-Pflicht)",
     "Schutz vor Social Engineering",
     "Auch bei bekannten Kunden zwingend"
    ],
    "r": "high"
   },
   {
    "t": "5.1.3 Fragetrichter & Bedarfsermittlung",
    "d": "Strukturierte Gesprächstechnik von offen zu geschlossen.",
    "c": "Der Fragetrichter strukturiert das Kundengespräch von offen → geschlossen.\n\n**Phasen:**\n1. **Offene Fragen (W-Fragen):** Breite Informationssammlung – \"Was beschäftigt Sie?\"\n2. **Vertiefende Fragen:** Konkretisierung – \"Seit wann besteht das Problem?\"\n3. **Geschlossene Fragen:** Absicherung – \"Habe ich das richtig verstanden, dass…?\"\n\n**Regel:** Erst öffnen, dann schließen. NIEMALS mit geschlossener Frage starten.\n\n**Bild:** Trichter = oben weit (offen), unten eng (geschlossen).",
    "k": [
     "Reihenfolge: offen → vertiefend → geschlossen",
     "W-Fragen liefern die meiste Information",
     "Geschlossene Fragen nur zur Absicherung am Ende"
    ],
    "r": "high"
   },
   {
    "t": "5.1.4 Phasen des Beratungsgesprächs",
    "d": "6 Phasen eines professionellen Inbound-Gesprächs.",
    "c": "Ein vollständiges Beratungsgespräch durchläuft 6 Phasen:\n\n1. **Kontaktphase:** Meldeformel, Legitimation, Beziehungsaufbau\n2. **Bedarfsermittlung:** Fragetrichter, aktives Zuhören\n3. **Beratungsphase:** Lösungsvorschläge, Nutzenargumentation\n4. **Einwandbehandlung:** Einwände aufnehmen, entkräften, bestätigen\n5. **Abschlussphase:** Zusammenfassung, Verabschiedung\n6. **Nachbearbeitung (ACW):** Dokumentation im CRM, Follow-up\n\n**Wichtig:** Immer den Kunden zuerst auflegen lassen.",
    "k": [
     "6 Phasen in fester Reihenfolge",
     "ACW (After-Call-Work) ist Pflichtphase",
     "Kunde legt zuerst auf"
    ],
    "r": "high"
   },
   {
    "t": "5.2.1 5 Grundsätze der Datenerfassung",
    "d": "R-V-R-Z-K: Die fünf Pflicht-Grundsätze.",
    "c": "Bei der Erfassung von Kundendaten gelten 5 Grundsätze:\n\n1. **Richtigkeit:** Daten sachlich korrekt\n2. **Vollständigkeit:** Alle erforderlichen Felder befüllt\n3. **Redundanzvermeidung:** Keine doppelten Datensätze (Dubletten)\n4. **Zeitstabilität:** Daten so erfassen, dass sie lange gültig bleiben (Geburtsdatum statt Alter, Postfach statt temporärer Adresse)\n5. **Konsistenz:** Einheitliche Schreibweisen, Formate, Systematik\n\n**Prüfungsfalle:** \"Aktualität\" ist KEIN eigener Grundsatz – der vierte heißt ZEITSTABILITÄT.",
    "k": [
     "Merkformel: R-V-R-Z-K",
     "Zeitstabilität: Geburtsdatum statt Alter",
     "\"Aktualität\" ist kein offizieller Grundsatz"
    ],
    "r": "high"
   },
   {
    "t": "5.2.2 Dubletten & Datenpflege",
    "d": "Doppelte Datensätze erkennen, vermeiden, bereinigen.",
    "c": "**Dublette:** Ein Kunde ist mehrfach in der Datenbank erfasst (z. B. nach Umzug, mit verschiedenen Schreibweisen).\n\n**Folgen:**\n- Höhere Portokosten (Mehrfachversand)\n- Imageverlust beim Kunden (\"Ihr kennt mich nicht\")\n- Verfälschung von Statistiken\n- Erhöhter Pflegeaufwand\n\n**Maßnahmen:**\n- Automatische Dublettenprüfung beim Erfassen\n- Regelmäßige Bereinigung (Adressabgleich)\n- DSGVO: Daten nur so lange wie nötig speichern (Speicherbegrenzung)",
    "k": [
     "Dubletten = doppelte Datensätze",
     "Folge: Kosten + Imageverlust",
     "DSGVO: Speicherbegrenzung beachten"
    ],
    "r": "medium"
   },
   {
    "t": "5.3.1 CRM-Definition & Strategiebegriff",
    "d": "CRM ist eine STRATEGIE – keine Software!",
    "c": "**CRM (Customer Relationship Management)** ist eine **Unternehmensstrategie** zur Ausrichtung **ALLER Unternehmensbereiche** auf den Aufbau und die Pflege langfristiger, profitabler Kundenbeziehungen.\n\n**Wichtig:** CRM ist KEINE Software – Software ist nur das Werkzeug zur Umsetzung.\n\n**Ziel-Kette:**\nKundenzufriedenheit → Kundenloyalität → Unternehmenserfolg\n\n**Prüfungsfalle:** Der häufigste IHK-Fehler ist die Verwechslung von CRM-Strategie mit CRM-Software.",
    "k": [
     "CRM = Strategie, NICHT Software",
     "Alle Unternehmensbereiche werden ausgerichtet",
     "Kette: Zufriedenheit → Loyalität → Erfolg"
    ],
    "r": "high"
   },
   {
    "t": "5.3.2 3 CRM-Aufgaben",
    "d": "Pflegen, Gewinnen, Zurückgewinnen.",
    "c": "Die drei Kernaufgaben des CRM:\n\n1. **Kundenpflege (Retention):** Bestehende Kunden halten, Zufriedenheit sichern, Up-/Cross-Selling\n2. **Kundengewinnung (Acquisition):** Neukunden ansprechen, Leads konvertieren\n3. **Kundenrückgewinnung (Winback):** Verlorene Kunden reaktivieren – oft günstiger als Neugewinnung\n\n**Strategische Priorität:** Pflege > Rückgewinnung > Neugewinnung (nach Kosten-Effizienz).",
    "k": [
     "3 Aufgaben: Pflegen, Gewinnen, Zurückgewinnen",
     "Winback günstiger als Neugewinnung (5-7x)",
     "Pflege ist die effizienteste Aufgabe"
    ],
    "r": "high"
   },
   {
    "t": "5.3.3 3 CRM-Säulen (T-O-P)",
    "d": "Technik, Organisation, Personal – gleichgewichtig.",
    "c": "Die drei Säulen des CRM müssen **gleichgewichtig** wirken:\n\n1. **Technik:** CRM-Software, Datenbanken, Data-Warehouse, Kommunikationsanlagen (ACD, CTI)\n2. **Organisation:** Prozesse, Abläufe, Zuständigkeiten, Schnittstellen, Kampagnenmanagement\n3. **Personal:** Qualifikation, Kommunikationsfähigkeit, Kundenorientierung als Haltung\n\n**Prüfungsfalle:** Nur Technik ist KEIN echtes CRM. Alle 3 Säulen müssen ausgewogen sein.\n\n**Merkformel:** T-O-P → Technik, Organisation, Personal.",
    "k": [
     "3 Säulen: T-O-P",
     "Alle gleichgewichtig – sonst kein echtes CRM",
     "Personal-Säule = Haltung, nicht nur Skill"
    ],
    "r": "high"
   },
   {
    "t": "5.3.4 Data-Warehouse & Data-Mining",
    "d": "Datenbasis und Analyseverfahren.",
    "c": "**Data-Warehouse:**\n- Zentrale Datenbank, bündelt Daten aus ALLEN Unternehmensbereichen\n- Basis für Analysen und Berichte\n- Enthält historische Daten – KEIN Echtzeit-System\n\n**Data-Mining:**\n- Analyseverfahren zur **Mustererkennung** in großen Datenmengen\n- Identifiziert Trends, Kaufmuster, Risikogruppen\n- Basis für gezielte Kampagnen\n\n**Informationsfluss:**\nData-Warehouse → Data-Mining → Kampagnenmanagement\n\n**Bild:** Warehouse = Lager der Daten. Mining = Schürfen nach Wissen.",
    "k": [
     "Warehouse: zentrale, historische Datenbasis",
     "Mining: Mustererkennung in den Daten",
     "Fluss: Warehouse → Mining → Kampagne"
    ],
    "r": "high"
   },
   {
    "t": "5.4.1 Kundenwert – 5 Faktoren",
    "d": "Kundenwert ist NICHT gleich Umsatz.",
    "c": "Der Kundenwert beschreibt den wirtschaftlichen Beitrag eines Kunden über 5 Faktoren:\n\n1. **Umsatz:** Aktueller Umsatz\n2. **Ertrag:** Gewinn nach Abzug aller Kosten (Betreuung, Rabatte)\n3. **Potenzial:** Möglicher zukünftiger Umsatz\n4. **Referenzwert:** Weiterempfehlungen, Netzwerkeffekte\n5. **Informationswert:** Qualität des Feedbacks für Produktentwicklung\n\n**Prüfungsfalle:** Kundenwert ≠ Umsatz! Ein umsatzstarker Kunde mit hohen Betreuungskosten kann wertlos sein.",
    "k": [
     "5 Faktoren: Umsatz, Ertrag, Potenzial, Referenz, Information",
     "Kundenwert ≠ Umsatz",
     "Ertrag = Umsatz minus alle Kosten"
    ],
    "r": "high"
   },
   {
    "t": "5.4.2 Kundenlebenszyklus – 6 Phasen",
    "d": "Akquisition → Optimierung in fester Reihenfolge.",
    "c": "Der Kundenlebenszyklus beschreibt 6 Phasen einer Kundenbeziehung:\n\n1. **Akquisition:** Neukunde ansprechen, gewinnen\n2. **Angebot:** Erstkontakt, Beratung, Angebotserstellung\n3. **Kauf:** Erstauftrag, Vertrag, Transaktion\n4. **After-Sales:** Kurzfristige Nachbetreuung (Lieferung, Einführung)\n5. **Betreuung:** Langfristige Kundenbeziehung, Loyalitätsaufbau\n6. **Optimierung:** Analyse, Upselling, Verbesserung\n\n**Prüfungsfalle:** After-Sales = kurzfristig. Betreuung = langfristig. Häufige Verwechslung!\n\n**Eselsbrücke:** A-A-K-A-B-O",
    "k": [
     "6 Phasen, Reihenfolge prüfungsrelevant",
     "After-Sales (kurz) ≠ Betreuung (lang)",
     "Eselsbrücke: A-A-K-A-B-O"
    ],
    "r": "high"
   },
   {
    "t": "5.4.3 Zufriedenheit vs. Loyalität",
    "d": "Vergangenheits- vs. zukunftsorientiert.",
    "c": "**Kundenzufriedenheit:**\n- **Vergangenheitsorientiert** – bewertet bisherige Erfahrungen\n- Messung: Umfragen, NPS, Reklamationsquote\n- **Notwendige, aber NICHT hinreichende** Bedingung für Loyalität\n\n**Kundenloyalität:**\n- **Zukunftsorientiert** – Wiederkaufabsicht, emotionale Bindung\n- Messung: Wiederkaufrate, Weiterempfehlungsrate\n- Loyalität > Zufriedenheit\n\n**Prüfungsfalle:** Ein zufriedener Kunde ist NICHT automatisch loyal. Loyale Kunden bleiben auch bei Problemen.",
    "k": [
     "Zufriedenheit: vergangenheitsorientiert",
     "Loyalität: zukunftsorientiert",
     "Zufrieden ≠ Loyal"
    ],
    "r": "high"
   },
   {
    "t": "5.4.4 Kundenbindungsinstrumente",
    "d": "4 Kategorien: emotional, ökonomisch, strukturell, faktisch.",
    "c": "Vier Arten von Kundenbindung:\n\n**Emotional:** Persönliche Ansprache, Geburtstagsglückwünsche, Community-Building\n**Ökonomisch:** Bonusprogramme, Rabattsysteme, Kundenkarten, Treuepunkte\n**Strukturell:** Langzeitverträge, Abonnements, technische Integration\n**Faktisch:** Standortvorteil, Gewohnheit, fehlende Alternativen\n\n**Wichtig:** Faktische Bindung ist UNGEPLANT – sie entsteht ohne aktive Maßnahme.",
    "k": [
     "4 Kategorien: emotional, ökonomisch, strukturell, faktisch",
     "Abonnement = strukturell, NICHT ökonomisch",
     "Faktische Bindung = ungeplant"
    ],
    "r": "medium"
   },
   {
    "t": "5.5.1 Beschwerde vs. Reklamation",
    "d": "Rechtspflichten unterscheiden!",
    "c": "**Beschwerde:**\n- Ausdruck von Unzufriedenheit\n- KEIN rechtlicher Anspruch\n- Beispiel: \"Ihr Mitarbeiter war unfreundlich\"\n\n**Reklamation:**\n- Konkreter Mangel an Produkt/Leistung\n- Hat **Rechtspflichten** (Gewährleistung)\n- 4 Gewährleistungsansprüche: Nachbesserung, Ersatzlieferung, Minderung, Rücktritt\n- Beispiel: \"Das gelieferte Produkt ist defekt\"\n\n**Prüfungsfalle:** Beschwerde ≠ Reklamation. Reklamation hat Rechtspflichten zur Folge!",
    "k": [
     "Beschwerde: Emotion ohne Rechtsanspruch",
     "Reklamation: Mangel mit Rechtspflicht",
     "4 Gewährleistungsansprüche bei Reklamation"
    ],
    "r": "high"
   },
   {
    "t": "5.5.2 ESEL – 5 Schritte im Beschwerdegespräch",
    "d": "Einsteigen, Sachlich, Emotional, Lösung, Abschluss.",
    "c": "Die 5 Schritte des Beschwerdegesprächs (ESEL-Modell):\n\n1. **Einsteigen / Annehmen:** Vollständig anhören, nicht unterbrechen, Empathie zeigen\n2. **Sachlich klären:** Sachverhalt aufnehmen, Was/Wann/Wo/Wie, dokumentieren\n3. **Emotional begleiten:** Verständnis, Entschuldigung (auch ohne Schuldeingeständnis)\n4. **Lösung anbieten:** Konkreter Vorschlag, ggf. Kulanz, Termin\n5. **Abschluss:** Zusammenfassung, Dank für Feedback, Dokumentation im CRM\n\n**Prüfungsfalle:** Reihenfolge ist PFLICHT. Lösung NIE vor emotionaler Begleitung!",
    "k": [
     "5 Schritte: ESEL",
     "Reihenfolge ist verbindlich",
     "Emotionale Begleitung VOR Lösung"
    ],
    "r": "high"
   },
   {
    "t": "5.5.3 10 Fehler im Beschwerdegespräch",
    "d": "IHK-Pflichtwissen.",
    "c": "Die 10 häufigen Fehler im Beschwerdegespräch:\n\n1. Kunden unterbrechen\n2. Rechtfertigungen (\"Nicht meine Schuld\")\n3. Schuld auf Kollegen schieben\n4. Kunden nicht ernst nehmen\n5. Zu schnell Lösung anbieten (ohne emotional gehört zu haben)\n6. Vage Versprechen (ohne Termin)\n7. Nicht dokumentieren\n8. Negatives Formulieren (\"Das können wir nicht\")\n9. Kulanz ohne Genehmigung zusagen\n10. Kein Follow-up nach Lösung\n\n**Prüfungsrelevanz:** Diese Liste kommt direkt in der IHK-Prüfung.",
    "k": [
     "10 Fehler – auswendig lernen",
     "Häufigster Fehler: zu schnell Lösung",
     "Kulanz braucht Genehmigung"
    ],
    "r": "high"
   },
   {
    "t": "5.5.4 Kulanz",
    "d": "Freiwilliges Entgegenkommen ohne Rechtspflicht.",
    "c": "**Kulanz** = freiwilliges Entgegenkommen des Unternehmens **OHNE** rechtliche Verpflichtung.\n\n**Zweck:**\n- Kundenbeziehung erhalten\n- Imagepflege\n- Kundenbindung\n\n**Beispiele:** Ersatz außerhalb der Gewährleistung, Gutschein bei langer Wartezeit.\n\n**Wichtig:** Kulanz braucht Genehmigung (Kompetenzrahmen!). Nicht mit Gewährleistung verwechseln.",
    "k": [
     "Kulanz: freiwillig, OHNE Rechtspflicht",
     "Braucht interne Genehmigung",
     "Nicht mit Gewährleistung verwechseln"
    ],
    "r": "medium"
   },
   {
    "t": "5.6.1 Haltegespräch (Kündigungsprävention)",
    "d": "Kunden halten BEVOR er kündigt.",
    "c": "**Haltegespräch:** Gespräch mit dem Ziel, einen kündigungswilligen Kunden zu halten – BEVOR er gekündigt hat.\n\n**Phasen:**\n1. Kündigungsgrund herausarbeiten (offene Fragen!)\n2. Verständnis zeigen\n3. Konkrete Gegenargumente / Alternativen\n4. Spezialangebot (Sonderkonditionen, Upgrade)\n5. Entscheidung dem Kunden überlassen\n\n**Erfolgsregel:** Kein Druck. Entscheidungsraum lassen.",
    "k": [
     "Prävention vor Kündigung",
     "Kündigungsgrund verstehen",
     "Kein Druck ausüben"
    ],
    "r": "medium"
   },
   {
    "t": "5.6.2 Winback – Kundenrückgewinnung",
    "d": "Bereits abgewanderte Kunden reaktivieren.",
    "c": "**Winback** = Rückgewinnung bereits **verlorener** Kunden (NACH Abwanderung).\n\n**Warum Winback?**\n- Neukundengewinnung kostet 5-7x mehr\n- Verlorene Kunden kennen das Unternehmen bereits\n- Abwanderungsanalyse liefert wertvolles Feedback\n\n**Prozess:**\n1. Abwanderungsanalyse (Warum?)\n2. Segmentierung (Wer lohnt sich?)\n3. Persönliche Ansprache\n4. Rückkehranreiz schaffen\n5. Re-Integration\n\n**Wichtig:** Nicht jeden Kunden zurückgewinnen – Kundenwert prüfen.",
    "k": [
     "Winback = nach Abwanderung",
     "5-7x günstiger als Neugewinnung",
     "Nur bei positivem Kundenwert"
    ],
    "r": "high"
   },
   {
    "t": "5.7.1 AHT – Average Handling Time",
    "d": "Kernkennzahl Inbound.",
    "c": "**AHT (Average Handling Time)** = Durchschnittliche Bearbeitungszeit eines Anrufs.\n\n**Formel:**\nAHT = Talk Time + Hold Time + ACW (After-Call-Work)\n\n**Bestandteile:**\n- **Talk Time:** Reine Gesprächsdauer\n- **Hold Time:** Wartezeit während Recherche\n- **ACW:** Dokumentation nach dem Gespräch\n\n**Prüfungsfalle:** AHT enthält IMMER auch die Nachbearbeitung (ACW), nicht nur die Gesprächszeit. Zu niedrige AHT = unvollständige Bearbeitung.",
    "k": [
     "AHT = Talk + Hold + ACW",
     "ACW ist immer Teil der AHT",
     "Zu niedrig = Qualitätsproblem"
    ],
    "r": "high"
   },
   {
    "t": "5.7.2 Servicelevel & FCR",
    "d": "80/20-Regel und Erstlösungsquote.",
    "c": "**Servicelevel:** Erreichbarkeitsziel im Format X% / Y Sekunden.\n- **Branchenstandard:** 80/20 → 80% der Anrufe in 20 Sekunden angenommen\n- Formel: (in X Sek. beantwortet / Gesamtanrufe) × 100\n\n**FCR (First Call Resolution):**\n- Anteil der Probleme, die beim **ersten** Kontakt gelöst werden\n- Zielwert: > 70-80%\n- Formel: (Erstkontakt-Lösungen / Gesamtfälle) × 100\n\n**Prüfungsfalle:** Beim zweiten Anruf zum selben Thema zählt FCR NICHT mehr.",
    "k": [
     "Servicelevel-Standard: 80/20",
     "FCR-Ziel: > 70-80%",
     "Zweiter Anruf zerstört FCR"
    ],
    "r": "high"
   },
   {
    "t": "5.7.3 Outbound-Kennzahlen",
    "d": "Ausschöpfungs-, Erfolgs- und Stornoquote.",
    "c": "**Ausschöpfungsquote:** (Kontaktiert / Gesamtadressen) × 100\n\n**Erfolgsquote (Conversion):** (Abschlüsse / Kontakte) × 100\n\n**Stornoquote:** (Stornierungen / Abschlüsse) × 100\n- Hohe Stornoquote = Qualitätsproblem (Beratungsfehler, Druckverkauf)\n\n**Lost Calls (Inbound):** Anrufe, bei denen der Anrufer auflegt, bevor abgenommen wird. Hohe Quote = Erreichbarkeitsproblem.",
    "k": [
     "Ausschöpfung: Kontakte/Adressen",
     "Erfolg: Abschlüsse/Kontakte",
     "Storno: Qualitätsindikator"
    ],
    "r": "high"
   },
   {
    "t": "5.8.1 SEPA – IBAN, BIC, Mandat",
    "d": "IBAN-Aufbau und Widerspruchsfristen.",
    "c": "**SEPA:** Single Euro Payments Area – einheitlicher Euro-Zahlungsverkehrsraum.\n\n**IBAN (Deutschland):**\n- Länderkennung (DE) = 2\n- Prüfziffer = 2\n- BLZ = 8\n- Kontonummer = 10\n- **Gesamt: IMMER 22 Stellen**\n\n**BIC:** Bank Identifier Code (8 oder 11 Stellen).\n\n**Lastschrift-Widerspruchsfristen:**\n- **Basislastschrift (Verbraucher):** 8 Wochen\n- **Bei fehlendem Mandat:** 13 Monate\n- **Firmenlastschrift (B2B):** KEIN Widerspruchsrecht\n\n**Überweisungsdauer:** max. 1 Bankarbeitstag.",
    "k": [
     "IBAN DE = 22 Stellen",
     "Basislastschrift: 8 Wochen Widerspruch",
     "Firmenlastschrift: kein Widerspruch"
    ],
    "r": "high"
   },
   {
    "t": "5.8.2 Bonität & Schufa",
    "d": "Kreditwürdigkeit und Datenschutzpflicht.",
    "c": "**Bonität:** Kreditwürdigkeit / Zahlungsfähigkeit eines Kunden.\n\n**Schufa (Schutzgemeinschaft für allgemeine Kreditsicherung):**\n- Private Auskunftei\n- Sammelt: Kredithistorie, Zahlungsausfälle, Verträge\n- Score: 0-100 (höher = besser)\n\n**Einsatz im Call Center:**\n- Vor Vertragsabschluss auf Kredit\n- Vor SEPA-Lastschrift-Genehmigung\n- Bei Ratenkäufen\n\n**DSGVO-Pflicht:** Bonitätsprüfung erfordert Einwilligung des Kunden oder berechtigtes Interesse.",
    "k": [
     "Bonität = Kreditwürdigkeit",
     "Schufa-Score: 0-100",
     "Einwilligung nach DSGVO erforderlich"
    ],
    "r": "medium"
   }
  ],
  "cards": [
   {
    "f": "Welche vier Bestandteile hat die Meldeformel?",
    "b": "Begrüßung, Firmenname, Name des Mitarbeiters, offene Frage.",
    "k": "Gesprächsführung"
   },
   {
    "f": "Warum endet die Meldeformel mit einer offenen Frage?",
    "b": "Weil der Kunde sein Anliegen frei schildern kann — das liefert mehr Information für die Bedarfsermittlung.",
    "k": "Gesprächsführung"
   },
   {
    "f": "Wann erfolgt die Legitimationsprüfung?",
    "b": "Vor jeder Weitergabe von Daten — Identitätsprüfung über Name, Adresse oder Kundennummer (DSGVO).",
    "k": "Gesprächsführung"
   },
   {
    "f": "Nennen Sie die sechs Phasen des Beratungsgesprächs.",
    "b": "Kontaktphase, Bedarfsermittlung, Beratung, Einwandbehandlung, Abschluss, Nachbearbeitung.",
    "k": "Gesprächsführung"
   },
   {
    "f": "Wer legt zuerst auf?",
    "b": "Immer der Kunde. Der Mitarbeiter wartet, bis der Kunde aufgelegt hat.",
    "k": "Gesprächsführung"
   },
   {
    "f": "Was ist Nutzenargumentation?",
    "b": "Argumentation aus Kundensicht: nicht Eigenschaften betonen, sondern den Vorteil für den Kunden.",
    "k": "Gesprächsführung"
   },
   {
    "f": "Was bedeutet positives Formulieren?",
    "b": "Negative Aussagen umwandeln: statt „Das geht nicht“ besser „Was ich für Sie tun kann, ist …“.",
    "k": "Gesprächsführung"
   },
   {
    "f": "Ist echtes Multitasking neurobiologisch möglich?",
    "b": "Nein. Das Gehirn wechselt lediglich schnell zwischen Aufgaben (Task-Switching) — die Fehlerrate steigt, die Bearbeitungstiefe sinkt.",
    "k": "Datenmanagement"
   },
   {
    "f": "Nennen Sie die fünf Grundsätze der Datenerfassung.",
    "b": "Richtigkeit, Vollständigkeit, Redundanzvermeidung, Zeitstabilität, Konsistenz.",
    "k": "Datenmanagement"
   },
   {
    "f": "Was bedeutet Zeitstabilität — mit Beispiel?",
    "b": "Daten so erfassen, dass sie lange gültig bleiben: Geburtsdatum statt Alter, weil sich das Alter jährlich ändert.",
    "k": "Datenmanagement"
   },
   {
    "f": "Was ist eine Dublette und welche Folgen hat sie?",
    "b": "Ein doppelt vorhandener Datensatz. Folgen: Mehrfachversand, Imageverlust, verfälschte Statistiken.",
    "k": "Datenmanagement"
   },
   {
    "f": "Wie definiert die IHK CRM korrekt?",
    "b": "CRM ist eine Unternehmensstrategie zur Ausrichtung aller Bereiche auf langfristige, profitable Kundenbeziehungen — keine Software.",
    "k": "CRM"
   },
   {
    "f": "Nennen Sie die drei CRM-Aufgaben und die effizienteste.",
    "b": "Kundenpflege, Kundengewinnung, Kundenrückgewinnung. Am effizientesten ist die Pflege, am teuersten die Gewinnung.",
    "k": "CRM"
   },
   {
    "f": "Nennen Sie die drei CRM-Säulen.",
    "b": "Technik, Organisation, Personal — sie müssen gleichgewichtig sein, sonst scheitert das CRM.",
    "k": "CRM"
   },
   {
    "f": "Data-Warehouse oder Data-Mining — was macht was?",
    "b": "Das Data-Warehouse bündelt Daten aus allen Bereichen (historisch, kein Echtzeitsystem). Data-Mining erkennt darin Muster und Trends.",
    "k": "CRM"
   },
   {
    "f": "Was ist Social CRM?",
    "b": "Die Erweiterung des CRM auf Social-Media-Kanäle: Monitoring, Direktinteraktion, Community-Management.",
    "k": "CRM"
   },
   {
    "f": "Nennen Sie die fünf Faktoren des Kundenwerts.",
    "b": "Umsatz, Ertrag, Potenzial, Referenzwert, Informationswert.",
    "k": "Kundenbindung"
   },
   {
    "f": "Warum ist Kundenwert nicht gleich Umsatz?",
    "b": "Hoher Umsatz bei hohen Betreuungskosten kann einen negativen Ertrag erzeugen — der Kundenwert bleibt trotzdem gering.",
    "k": "Kundenbindung"
   },
   {
    "f": "Nennen Sie die sechs Phasen des Kundenlebenszyklus.",
    "b": "Akquisition, Angebot, Kauf, After-Sales, Betreuung, Optimierung.",
    "k": "Kundenbindung"
   },
   {
    "f": "Kundenzufriedenheit oder Kundenloyalität — welche ist zukunftsorientiert?",
    "b": "Die Loyalität (Wiederkaufabsicht, emotionale Bindung). Zufriedenheit ist vergangenheitsorientiert — ein zufriedener Kunde kann trotzdem wechseln.",
    "k": "Kundenbindung"
   },
   {
    "f": "Wann ist ein Kunde zufrieden, wann begeistert, wann enttäuscht?",
    "b": "Erwartung erfüllt = zufrieden. Erwartung übertroffen = begeistert. Ist unter Soll = enttäuscht.",
    "k": "Kundenbindung"
   },
   {
    "f": "Nennen Sie je ein strukturelles, ökonomisches und emotionales Bindungsinstrument.",
    "b": "Strukturell: Langzeitvertrag. Ökonomisch: Bonusprogramm. Emotional: persönliche Ansprache oder Community-Event.",
    "k": "Kundenbindung"
   },
   {
    "f": "Was ist Winback und warum lohnt es sich?",
    "b": "Rückgewinnung verlorener Kunden. Sie kennen Unternehmen und Prozesse bereits — Neukundengewinnung kostet ein Vielfaches.",
    "k": "Kundenbindung"
   },
   {
    "f": "Beschwerde oder Reklamation?",
    "b": "Beschwerde = Unzufriedenheit ohne Rechtsanspruch. Reklamation = konkreter Mangel mit Rechtsfolgen.",
    "k": "Beschwerden"
   },
   {
    "f": "Nennen Sie die fünf Schritte des Beschwerdegesprächs.",
    "b": "Einsteigen, Sachlich klären, Emotional begleiten, Lösung anbieten, Abschluss — Merkwort ESEL.",
    "k": "Beschwerden"
   },
   {
    "f": "Warum muss die emotionale Begleitung vor der Lösung kommen?",
    "b": "Sonst wirkt die Lösung kalt und wird vom Kunden abgelehnt.",
    "k": "Beschwerden"
   },
   {
    "f": "Was ist Kulanz?",
    "b": "Freiwilliges Entgegenkommen ohne rechtliche Verpflichtung — zur Kundenbindung und Imagepflege.",
    "k": "Beschwerden"
   },
   {
    "f": "Welche vier Gewährleistungsansprüche gibt es?",
    "b": "Nachbesserung, Ersatzlieferung, Minderung, Rücktritt vom Vertrag.",
    "k": "Beschwerden"
   },
   {
    "f": "Warum ist jede Beschwerde wertvoll?",
    "b": "Weil sich nur ein kleiner Teil der Unzufriedenen überhaupt meldet — jede Beschwerde steht für viele stille Unzufriedene.",
    "k": "Beschwerden"
   },
   {
    "f": "Beschwerdemanagement oder Qualitätsmanagement?",
    "b": "Beschwerdemanagement ist reaktiv, Qualitätsmanagement proaktiv — es soll Fehler von vornherein vermeiden.",
    "k": "Beschwerden"
   },
   {
    "f": "Wie setzt sich die AHT zusammen?",
    "b": "Talk Time + Hold Time + ACW (Nachbearbeitung).",
    "k": "Kennzahlen"
   },
   {
    "f": "Was bedeutet Servicelevel 80/20?",
    "b": "80 % aller Anrufe werden innerhalb von 20 Sekunden angenommen — der Branchenstandard.",
    "k": "Kennzahlen"
   },
   {
    "f": "Wie berechnet man die Lost-Call-Quote?",
    "b": "Aufgelegte Anrufe × 100 / eingehende Anrufe. Lost Calls heißen auch Abandoned Calls.",
    "k": "Kennzahlen"
   },
   {
    "f": "Wie berechnet man Produktivität und Auslastung?",
    "b": "Produktivität = bearbeitete Anrufe / Nettoarbeitszeit. Auslastung (Occupancy) = Produktivzeit × 100 / Nettoarbeitszeit; rund 80 % gelten als angemessen.",
    "k": "Kennzahlen"
   },
   {
    "f": "Was zählt zur Produktivzeit, was zur Nettoarbeitszeit?",
    "b": "Produktivzeit = Gesprächszeit + Nachbearbeitungszeit. Nettoarbeitszeit umfasst zusätzlich Warte- und Rüstzeiten.",
    "k": "Kennzahlen"
   },
   {
    "f": "Warum ist eine zu niedrige AHT problematisch?",
    "b": "Zu kurze Gespräche bedeuten unvollständige Bearbeitung — es folgen weitere Anrufe und die FCR sinkt.",
    "k": "Kennzahlen"
   },
   {
    "f": "Wie berechnet man Ausschöpfungsquote und Erfolgsquote im Outbound?",
    "b": "Ausschöpfung = kontaktierte Adressen / Gesamtadressen × 100. Erfolgsquote = Abschlüsse / Kontakte × 100 (Conversion Rate).",
    "k": "Kennzahlen"
   },
   {
    "f": "Was sagt eine hohe Stornoquote aus?",
    "b": "Sie deutet auf Beratungsfehler, Druckverkauf oder Fehlinformation hin — ein Qualitätsproblem.",
    "k": "Kennzahlen"
   },
   {
    "f": "Frachtführer oder Spediteur — wer befördert, wer besorgt?",
    "b": "Der Frachtführer befördert selbst (§§ 407 ff. HGB, Frachtvertrag, Frachtbrief). Der Spediteur besorgt die Versendung (§§ 453 ff. HGB, Speditionsvertrag).",
    "k": "Versand"
   },
   {
    "f": "In wessen Namen und auf wessen Rechnung handeln Frachtführer und Spediteur?",
    "b": "Beide im eigenen Namen. Der Frachtführer auf fremde Rechnung, der Spediteur auf Rechnung des Versenders.",
    "k": "Versand"
   },
   {
    "f": "Was macht ein Lagerhalter?",
    "b": "Er lagert und verwahrt Güter (§§ 467 ff. HGB). Vertrag: Lagervertrag, Beleg: Lagerschein.",
    "k": "Versand"
   },
   {
    "f": "Welche Gewichtsgrenzen gelten für Päckchen und Paket?",
    "b": "Päckchen bis 2 kg ohne Haftung, Paket bis 31,5 kg mit Haftung bis 500 €.",
    "k": "Versand"
   },
   {
    "f": "Bis zu welchem Betrag haftet die Post beim Einschreiben Standard im Inland?",
    "b": "Bis maximal 25 €.",
    "k": "Versand"
   },
   {
    "f": "Welcher Höchstbetrag gilt bei der Nachnahme?",
    "b": "3.500 €.",
    "k": "Versand"
   },
   {
    "f": "Was ist Kontrahierungszwang im Postwesen?",
    "b": "Die Pflicht, mit jedem Kunden einen Beförderungsvertrag abzuschließen — ein Kunde darf nicht grundlos abgelehnt werden.",
    "k": "Versand"
   },
   {
    "f": "Bar, halbbar, bargeldlos — wo liegen die Grenzen?",
    "b": "Bar: Zug um Zug mit Bargeld. Halbbar: eine Seite bar, eine Seite über Konto (Bareinzahlung zugunsten Dritter, Nachnahme). Bargeldlos: beide Seiten über Konto.",
    "k": "Zahlungsverkehr"
   },
   {
    "f": "Zielkauf oder Finanzkauf?",
    "b": "Zielkauf = Zahlungsziel, Zahlung später in einer Summe. Finanzkauf = Ratenzahlung, üblich über 6 bis 72 Monate.",
    "k": "Zahlungsverkehr"
   },
   {
    "f": "Charge, Credit, Debit, Prepaid — welche Karte belastet sofort?",
    "b": "Die Debit-Karte. Charge: monatlich gesammelt, voll fällig, zinsfrei (in Deutschland üblich). Credit: Raten mit Zinsen. Prepaid: nur vorhandenes Guthaben.",
    "k": "Zahlungsverkehr"
   },
   {
    "f": "Wie ist eine deutsche IBAN aufgebaut?",
    "b": "DE (2) + Prüfziffer (2) + Bankleitzahl (8) + Kontonummer (10) = 22 Stellen.",
    "k": "Zahlungsverkehr"
   },
   {
    "f": "Welche Widerspruchsfristen gelten bei der SEPA-Lastschrift?",
    "b": "8 Wochen ab Belastung mit gültigem Mandat, 13 Monate ohne Mandat. Die Firmenlastschrift kennt kein Widerspruchsrecht.",
    "k": "Zahlungsverkehr"
   }
  ],
  "quiz": [
   {
    "t": "order",
    "q": "Bringen Sie die Bestandteile der Meldeformel in die richtige Reihenfolge.",
    "items": [
     "Begrüßung",
     "Firmenname",
     "Name des Mitarbeiters",
     "Offene Frage"
    ],
    "e": "Begrüßung, Firma, Name, offene Frage.",
    "k": "Gesprächsführung",
    "d": "medium",
    "s": "LF5 4.1"
   },
   {
    "t": "mc",
    "q": "Warum steht am Ende der Meldeformel eine offene Frage?",
    "a": [
     "Weil sie kürzer ist",
     "Weil der Kunde sein Anliegen frei schildern kann",
     "Weil sie rechtlich vorgeschrieben ist",
     "Weil sie das Gespräch verkürzt"
    ],
    "c": 1,
    "e": "Mehr Information für die Bedarfsermittlung.",
    "k": "Gesprächsführung",
    "d": "medium",
    "s": "LF5 4.1"
   },
   {
    "t": "mc",
    "q": "Ein Anrufer möchte den Vertragsstand erfahren. Was muss zuerst geschehen?",
    "a": [
     "Die Auskunft erteilen",
     "Die Legitimationsprüfung",
     "Ein Cross-Selling-Angebot",
     "Die Nachbearbeitung vorbereiten"
    ],
    "c": 1,
    "e": "Vor jeder Datenweitergabe steht die Identitätsprüfung — datenschutzrechtlich zwingend.",
    "k": "Gesprächsführung",
    "d": "medium",
    "s": "LF5 4.1"
   },
   {
    "t": "order",
    "q": "Bringen Sie die sechs Phasen des Beratungsgesprächs in die richtige Reihenfolge.",
    "items": [
     "Kontaktphase",
     "Bedarfsermittlung",
     "Beratung",
     "Einwandbehandlung",
     "Abschluss",
     "Nachbearbeitung"
    ],
    "e": "Erst Kontakt und Bedarf, dann Beratung, Einwände, Abschluss und Dokumentation.",
    "k": "Gesprächsführung",
    "d": "medium",
    "s": "LF5 4.1"
   },
   {
    "t": "mc",
    "q": "Ein Agent präsentiert das Angebot, bevor er Fragen gestellt hat. Welche Phase wurde übersprungen?",
    "a": [
     "Kontaktphase",
     "Bedarfsermittlung",
     "Einwandbehandlung",
     "Nachbearbeitung"
    ],
    "c": 1,
    "e": "Ohne Bedarfsermittlung fehlt die Basis für einen passenden Vorschlag.",
    "k": "Gesprächsführung",
    "d": "hard",
    "s": "LF5 4.1"
   },
   {
    "t": "tf",
    "q": "Am Ende des Gesprächs legt der Mitarbeiter zuerst auf, um Zeit zu sparen.",
    "v": false,
    "e": "Falsch. Immer der Kunde legt zuerst auf.",
    "k": "Gesprächsführung",
    "d": "easy",
    "s": "LF5 4.1"
   },
   {
    "t": "mc",
    "q": "„Dieser Tarif hat eine Datenautomatik“ gegenüber „Damit surfen Sie auch am Monatsende ohne Drosselung“. Was unterscheidet die zweite Aussage?",
    "a": [
     "Sie ist kürzer",
     "Sie ist eine Nutzenargumentation",
     "Sie ist eine Suggestivfrage",
     "Sie ist positiv formuliert, aber sachlich falsch"
    ],
    "c": 1,
    "e": "Nutzenargumentation übersetzt Eigenschaften in Vorteile für den Kunden.",
    "k": "Gesprächsführung",
    "d": "hard",
    "s": "LF5 4.1"
   },
   {
    "t": "mc",
    "q": "Welche Formulierung entspricht dem positiven Formulieren?",
    "a": [
     "Das geht leider nicht.",
     "Da kann ich Ihnen nicht helfen.",
     "Was ich für Sie tun kann, ist eine Prüfung bis Freitag.",
     "Dafür bin ich nicht zuständig."
    ],
    "c": 2,
    "e": "Positiv formulieren heißt: sagen, was möglich ist, statt was nicht geht.",
    "k": "Gesprächsführung",
    "d": "medium",
    "s": "LF5 4.1"
   },
   {
    "t": "mc",
    "q": "Ein Agent bearbeitet parallel Chat und Telefon und macht dabei mehr Fehler. Wie erklärt das Buch das?",
    "a": [
     "Echtes Multitasking überlastet die Ohren",
     "Das Gehirn wechselt nur zwischen Aufgaben — Task-Switching",
     "Die AHT steigt automatisch",
     "Es liegt an der Software"
    ],
    "c": 1,
    "e": "Echtes Multitasking gibt es nicht; beim Wechseln steigt die Fehlerrate und sinkt die Bearbeitungstiefe.",
    "k": "Datenmanagement",
    "d": "hard",
    "s": "LF5 2.4"
   },
   {
    "t": "multi",
    "q": "Welche Grundsätze der Datenerfassung nennt das Buch?",
    "a": [
     "Richtigkeit",
     "Vollständigkeit",
     "Redundanzvermeidung",
     "Zeitstabilität",
     "Maximale Datenmenge"
    ],
    "cs": [
     0,
     1,
     2,
     3
    ],
    "e": "Der fünfte Grundsatz ist Konsistenz — eine maximale Datenmenge widerspricht sogar der Datenminimierung.",
    "k": "Datenmanagement",
    "d": "medium",
    "s": "LF5 2.3"
   },
   {
    "t": "mc",
    "q": "Warum wird das Geburtsdatum und nicht das Alter gespeichert?",
    "a": [
     "Wegen der Datenminimierung",
     "Wegen der Zeitstabilität",
     "Wegen der Konsistenz",
     "Wegen der Redundanzvermeidung"
    ],
    "c": 1,
    "e": "Das Alter veraltet jährlich, das Geburtsdatum bleibt gültig.",
    "k": "Datenmanagement",
    "d": "hard",
    "s": "LF5 2.3"
   },
   {
    "t": "mc",
    "q": "Ein Kunde steht zweimal mit unterschiedlicher Schreibweise im System. Welches Problem und welche Folge?",
    "a": [
     "Inkonsistenz — höhere Speicherkosten",
     "Dublette — Mehrfachversand, Imageverlust, verfälschte Statistiken",
     "Redundanz — kein praktischer Nachteil",
     "Zeitinstabilität — die Daten veralten"
    ],
    "c": 1,
    "e": "Doppelte Datensätze führen zu Mehrfachanschreiben und falschen Auswertungen.",
    "k": "Datenmanagement",
    "d": "medium",
    "s": "LF5 2.3"
   },
   {
    "t": "mc",
    "q": "Ein Team schreibt mal „Str.“, mal „Straße“. Welcher Grundsatz ist verletzt?",
    "a": [
     "Richtigkeit",
     "Vollständigkeit",
     "Konsistenz",
     "Zeitstabilität"
    ],
    "c": 2,
    "e": "Konsistenz verlangt einheitliche Schreibweisen und Formate.",
    "k": "Datenmanagement",
    "d": "medium",
    "s": "LF5 2.3"
   },
   {
    "t": "mc",
    "q": "Ein Geschäftsführer sagt: „Wir haben CRM eingeführt, wir haben jetzt die Software.“ Wo liegt der Denkfehler?",
    "a": [
     "Nirgends, CRM ist Software",
     "CRM ist eine Unternehmensstrategie — die Software ist nur das Werkzeug",
     "CRM ist nur für den Vertrieb",
     "CRM ersetzt das Data-Warehouse"
    ],
    "c": 1,
    "e": "CRM richtet alle Bereiche auf langfristige, profitable Kundenbeziehungen aus.",
    "k": "CRM",
    "d": "medium",
    "s": "LF5 1"
   },
   {
    "t": "multi",
    "q": "Welche Aufgaben umfasst CRM?",
    "a": [
     "Kundenpflege",
     "Kundengewinnung",
     "Kundenrückgewinnung",
     "Lieferantenbewertung"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Drei Aufgaben rund um die Kundenbeziehung.",
    "k": "CRM",
    "d": "easy",
    "s": "LF5 1"
   },
   {
    "t": "mc",
    "q": "Welche CRM-Aufgabe ist am effizientesten — und welche am teuersten?",
    "a": [
     "Gewinnung am effizientesten, Pflege am teuersten",
     "Pflege am effizientesten, Gewinnung am teuersten",
     "Rückgewinnung am effizientesten, Pflege am teuersten",
     "Alle drei kosten gleich viel"
    ],
    "c": 1,
    "e": "Bestand halten ist günstiger als neu gewinnen.",
    "k": "CRM",
    "d": "hard",
    "s": "LF5 1"
   },
   {
    "t": "mc",
    "q": "Ein Unternehmen kauft eine CRM-Software, schult aber niemanden und passt keine Prozesse an. Welche Säulen fehlen?",
    "a": [
     "Technik und Organisation",
     "Organisation und Personal",
     "Technik und Personal",
     "Keine, Technik genügt"
    ],
    "c": 1,
    "e": "Technik, Organisation und Personal müssen gleichgewichtig sein.",
    "k": "CRM",
    "d": "hard",
    "s": "LF5 1"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jedem Begriff seine Funktion zu.",
    "pairs": [
     [
      "Data-Warehouse",
      "bündelt Daten aus allen Unternehmensbereichen"
     ],
     [
      "Data-Mining",
      "erkennt Muster und Trends in großen Datenmengen"
     ],
     [
      "Kampagnenmanagement",
      "nutzt die Analyseergebnisse für Maßnahmen"
     ]
    ],
    "e": "Warehouse liefert, Mining analysiert, Kampagnenmanagement handelt.",
    "k": "CRM",
    "d": "hard",
    "s": "LF5 1"
   },
   {
    "t": "tf",
    "q": "Ein Data-Warehouse ist ein Echtzeitsystem.",
    "v": false,
    "e": "Falsch. Es bündelt historische Daten als Analysebasis.",
    "k": "CRM",
    "d": "hard",
    "s": "LF5 1"
   },
   {
    "t": "mc",
    "q": "Ein Unternehmen beobachtet Erwähnungen auf Instagram und antwortet direkt. Wie heißt das?",
    "a": [
     "Data-Mining",
     "Social CRM",
     "Kampagnenmanagement",
     "Winback"
    ],
    "c": 1,
    "e": "Social CRM erweitert das CRM auf Social-Media-Kanäle.",
    "k": "CRM",
    "d": "medium",
    "s": "LF5 1"
   },
   {
    "t": "multi",
    "q": "Welche Faktoren bestimmen den Kundenwert?",
    "a": [
     "Umsatz",
     "Ertrag",
     "Potenzial",
     "Referenzwert",
     "Wohnort"
    ],
    "cs": [
     0,
     1,
     2,
     3
    ],
    "e": "Der fünfte Faktor ist der Informationswert. Der Wohnort zählt nicht dazu.",
    "k": "Kundenbindung",
    "d": "medium",
    "s": "LF5 1.2"
   },
   {
    "t": "mc",
    "q": "Kunde A macht 50.000 € Umsatz, verursacht aber 55.000 € Betreuungskosten. Wie ist sein Kundenwert?",
    "a": [
     "Hoch, wegen des Umsatzes",
     "Gering, weil der Ertrag negativ ist",
     "Neutral",
     "Nicht bestimmbar"
    ],
    "c": 1,
    "e": "Kundenwert ist nicht gleich Umsatz — der Ertrag entscheidet mit.",
    "k": "Kundenbindung",
    "d": "hard",
    "s": "LF5 1.2"
   },
   {
    "t": "mc",
    "q": "Ein Kunde kauft selten, bringt aber regelmäßig neue Kunden mit. Welcher Kundenwertfaktor?",
    "a": [
     "Umsatz",
     "Potenzial",
     "Referenzwert",
     "Informationswert"
    ],
    "c": 2,
    "e": "Der Referenzwert erfasst Weiterempfehlungen und Netzwerkeffekte.",
    "k": "Kundenbindung",
    "d": "hard",
    "s": "LF5 1.2"
   },
   {
    "t": "mc",
    "q": "Ein Kunde liefert regelmäßig detailliertes Feedback zur Produktverbesserung. Welcher Faktor?",
    "a": [
     "Referenzwert",
     "Informationswert",
     "Ertrag",
     "Potenzial"
    ],
    "c": 1,
    "e": "Der Informationswert bemisst die Qualität des Feedbacks für Entwicklung und Marktforschung.",
    "k": "Kundenbindung",
    "d": "hard",
    "s": "LF5 1.2"
   },
   {
    "t": "order",
    "q": "Bringen Sie die Phasen des Kundenlebenszyklus in die richtige Reihenfolge.",
    "items": [
     "Akquisition",
     "Angebot",
     "Kauf",
     "After-Sales",
     "Betreuung",
     "Optimierung"
    ],
    "e": "Sechs Phasen von der Gewinnung bis zur Optimierung.",
    "k": "Kundenbindung",
    "d": "medium",
    "s": "LF5 1.3"
   },
   {
    "t": "mc",
    "q": "Worin unterscheiden sich After-Sales und Betreuung?",
    "a": [
     "Sie sind identisch",
     "After-Sales ist kurzfristig direkt nach dem Kauf, Betreuung ist langfristige Beziehungspflege",
     "After-Sales ist langfristig, Betreuung kurzfristig",
     "After-Sales betrifft nur Reklamationen"
    ],
    "c": 1,
    "e": "Lieferung und Einführung gegen dauerhafte Pflege.",
    "k": "Kundenbindung",
    "d": "hard",
    "s": "LF5 1.3"
   },
   {
    "t": "mc",
    "q": "Ein Kunde ist zufrieden, wechselt aber zur Konkurrenz. Wie ist das möglich?",
    "a": [
     "Das ist ausgeschlossen",
     "Zufriedenheit ist vergangenheitsorientiert, Loyalität braucht emotionale Bindung",
     "Er war nie zufrieden",
     "Nur bei Preiserhöhung möglich"
    ],
    "c": 1,
    "e": "Zufriedenheit allein erzeugt keine Loyalität.",
    "k": "Kundenbindung",
    "d": "hard",
    "s": "LF5 1.3"
   },
   {
    "t": "mc",
    "q": "Die Lieferung kommt schneller als zugesagt und mit persönlicher Nachricht. Wie ist der Kunde einzustufen?",
    "a": [
     "Zufrieden",
     "Begeistert",
     "Enttäuscht",
     "Loyal"
    ],
    "c": 1,
    "e": "Erwartung übertroffen = begeistert. Erfüllt wäre nur zufrieden.",
    "k": "Kundenbindung",
    "d": "medium",
    "s": "LF5 3.1"
   },
   {
    "t": "cloze",
    "q": "Zufriedenheitslogik",
    "txt": "Wird die Erwartung erfüllt, ist der Kunde {{1}}. Wird sie übertroffen, ist er {{2}}. Liegt das Ist unter dem Soll, ist er {{3}}.",
    "gaps": [
     {
      "s": "zufrieden",
      "o": [
       "begeistert",
       "enttäuscht"
      ]
     },
     {
      "s": "begeistert",
      "o": [
       "zufrieden",
       "loyal"
      ]
     },
     {
      "s": "enttäuscht",
      "o": [
       "zufrieden",
       "neutral"
      ]
     }
    ],
    "e": "Erfüllt, übertroffen, unterschritten.",
    "k": "Kundenbindung",
    "d": "medium",
    "s": "LF5 3.1"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jeder Bindungsart das passende Instrument zu.",
    "pairs": [
     [
      "strukturell",
      "Langzeitvertrag oder technische Systemanbindung"
     ],
     [
      "ökonomisch",
      "Bonusprogramm und Treuepunkte"
     ],
     [
      "emotional",
      "persönliche Ansprache und Community-Events"
     ]
    ],
    "e": "Strukturell bindet über Verträge und Technik, ökonomisch über Geld, emotional über Beziehung.",
    "k": "Kundenbindung",
    "d": "hard",
    "s": "LF5 1.4"
   },
   {
    "t": "mc",
    "q": "Ein Kunde hat gekündigt und wird gezielt angesprochen. Wie heißt das und warum lohnt es?",
    "a": [
     "Akquisition — er ist ein Neukunde",
     "Winback — er kennt Unternehmen und Prozesse bereits",
     "Retention — er ist noch Bestandskunde",
     "Cross-Selling — man verkauft ihm etwas anderes"
    ],
    "c": 1,
    "e": "Rückgewinnung ist günstiger, weil der Aufklärungsaufwand entfällt.",
    "k": "Kundenbindung",
    "d": "medium",
    "s": "LF5 1.4"
   },
   {
    "t": "mc",
    "q": "Ein Kunde ärgert sich über die lange Wartezeit, ohne einen Mangel geltend zu machen. Was liegt vor?",
    "a": [
     "Reklamation",
     "Beschwerde",
     "Widerspruch",
     "Gewährleistungsfall"
    ],
    "c": 1,
    "e": "Unzufriedenheit ohne Rechtsanspruch = Beschwerde.",
    "k": "Beschwerden",
    "d": "medium",
    "s": "LF5 3.4"
   },
   {
    "t": "mc",
    "q": "Ein geliefertes Gerät ist defekt, der Kunde verlangt Ersatz. Was liegt vor?",
    "a": [
     "Beschwerde",
     "Reklamation",
     "Kulanzfall",
     "Widerspruch"
    ],
    "c": 1,
    "e": "Konkreter Mangel mit Rechtsfolgen = Reklamation.",
    "k": "Beschwerden",
    "d": "medium",
    "s": "LF5 3.4"
   },
   {
    "t": "cloze",
    "q": "Beschwerde und Reklamation",
    "txt": "Eine {{1}} ist Unzufriedenheit ohne Rechtsanspruch. Eine {{2}} betrifft einen konkreten Mangel und löst Rechtsfolgen aus. Ein freiwilliges Entgegenkommen ohne Rechtspflicht heißt {{3}}.",
    "gaps": [
     {
      "s": "Beschwerde",
      "o": [
       "Reklamation",
       "Kulanz"
      ]
     },
     {
      "s": "Reklamation",
      "o": [
       "Beschwerde",
       "Kulanz"
      ]
     },
     {
      "s": "Kulanz",
      "o": [
       "Gewährleistung",
       "Minderung"
      ]
     }
    ],
    "e": "Beschwerde ohne, Reklamation mit Rechtsanspruch, Kulanz freiwillig.",
    "k": "Beschwerden",
    "d": "medium",
    "s": "LF5 3.4"
   },
   {
    "t": "order",
    "q": "Bringen Sie die fünf Schritte des Beschwerdegesprächs in die richtige Reihenfolge.",
    "items": [
     "Einsteigen",
     "Sachlich klären",
     "Emotional begleiten",
     "Lösung anbieten",
     "Abschluss"
    ],
    "e": "Merkwort ESEL. Die emotionale Begleitung steht vor der Lösung.",
    "k": "Beschwerden",
    "d": "medium",
    "s": "LF5 3.4"
   },
   {
    "t": "mc",
    "q": "Ein Agent bietet dem aufgebrachten Kunden sofort eine Gutschrift an, bevor er auf dessen Ärger eingeht. Was ist das Problem?",
    "a": [
     "Die Gutschrift ist zu hoch",
     "Die Lösung kommt vor der emotionalen Begleitung und wirkt kalt",
     "Er hätte zuerst dokumentieren müssen",
     "Kulanz ist hier unzulässig"
    ],
    "c": 1,
    "e": "Ohne emotionale Begleitung wird die Lösung oft abgelehnt.",
    "k": "Beschwerden",
    "d": "hard",
    "s": "LF5 3.4"
   },
   {
    "t": "multi",
    "q": "Welche Verhaltensweisen sind Fehler im Beschwerdegespräch?",
    "a": [
     "Den Kunden unterbrechen",
     "Sich rechtfertigen",
     "Die Schuld auf Kollegen schieben",
     "Das Ergebnis dokumentieren"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Die Dokumentation ist Pflicht, kein Fehler.",
    "k": "Beschwerden",
    "d": "medium",
    "s": "LF5 3.4"
   },
   {
    "t": "mc",
    "q": "Wie formuliert man eine Entschuldigung ohne Schuldeingeständnis?",
    "a": [
     "„Wir haben einen Fehler gemacht.“",
     "„Es tut mir leid, dass Sie das so erlebt haben.“",
     "„Dafür können wir nichts.“",
     "„Das passiert öfter.“"
    ],
    "c": 1,
    "e": "Bedauern ausdrücken, ohne rechtliche Schuld anzuerkennen.",
    "k": "Beschwerden",
    "d": "hard",
    "s": "LF5 3.4"
   },
   {
    "t": "multi",
    "q": "Welche Gewährleistungsansprüche kennt das Recht?",
    "a": [
     "Nachbesserung",
     "Ersatzlieferung",
     "Minderung",
     "Rücktritt vom Vertrag",
     "Schmerzensgeld"
    ],
    "cs": [
     0,
     1,
     2,
     3
    ],
    "e": "Vier Ansprüche — Schmerzensgeld gehört nicht dazu.",
    "k": "Beschwerden",
    "d": "medium",
    "s": "LF5 3.4"
   },
   {
    "t": "mc",
    "q": "Warum ist jede eingegangene Beschwerde wertvoll?",
    "a": [
     "Weil sie Umsatz bringt",
     "Weil sich nur ein kleiner Teil der Unzufriedenen überhaupt meldet",
     "Weil sie die AHT senkt",
     "Weil sie rechtlich verpflichtend ist"
    ],
    "c": 1,
    "e": "Jede Beschwerde steht stellvertretend für viele stille Unzufriedene.",
    "k": "Beschwerden",
    "d": "medium",
    "s": "LF5 3.4"
   },
   {
    "t": "mc",
    "q": "Worin unterscheiden sich Beschwerde- und Qualitätsmanagement?",
    "a": [
     "Beide sind reaktiv",
     "Beschwerdemanagement ist reaktiv, Qualitätsmanagement proaktiv",
     "Beide sind proaktiv",
     "Beschwerdemanagement ist proaktiv"
    ],
    "c": 1,
    "e": "Reagieren gegen Vermeiden.",
    "k": "Beschwerden",
    "d": "medium",
    "s": "LF5 3.4"
   },
   {
    "t": "calc",
    "q": "Ein Gespräch dauert 5 Minuten Talk Time, 1 Minute Hold Time und 2 Minuten ACW. Wie hoch ist die AHT?",
    "ans": [
     "8"
    ],
    "unit": "Minuten",
    "hint": "Talk + Hold + ACW.",
    "e": "5 + 1 + 2 = 8 Minuten. Gegenprobe: 8 − 2 ACW = 6 Minuten reine Kundenzeit.",
    "k": "Kennzahlen",
    "d": "medium",
    "s": "LF5 5.1"
   },
   {
    "t": "calc",
    "q": "Von 2.400 eingehenden Anrufen legten 168 in der Warteschleife auf. Wie hoch ist die Lost-Call-Quote?",
    "ans": [
     "7"
    ],
    "unit": "%",
    "hint": "Aufgelegte × 100 / eingehende.",
    "e": "168 × 100 / 2.400 = 7 %. Gegenprobe: 7 % von 2.400 = 168.",
    "k": "Kennzahlen",
    "d": "medium",
    "s": "LF5 5.1.3"
   },
   {
    "t": "calc",
    "q": "Ein Agent bearbeitet in 7 Stunden Nettoarbeitszeit 84 Anrufe. Wie hoch ist seine Produktivität je Stunde?",
    "ans": [
     "12"
    ],
    "unit": "Anrufe/Stunde",
    "hint": "Bearbeitete Anrufe durch Nettoarbeitszeit.",
    "e": "84 / 7 = 12 Anrufe pro Stunde. Gegenprobe: 12 × 7 = 84.",
    "k": "Kennzahlen",
    "d": "medium",
    "s": "LF5 5.1.4"
   },
   {
    "t": "calc",
    "q": "Die Produktivzeit beträgt 6 Stunden, die Nettoarbeitszeit 7,5 Stunden. Wie hoch ist die Auslastung?",
    "ans": [
     "80"
    ],
    "unit": "%",
    "hint": "Produktivzeit × 100 / Nettoarbeitszeit.",
    "e": "6 × 100 / 7,5 = 80 % — der als angemessen geltende Wert. Gegenprobe: 80 % von 7,5 = 6.",
    "k": "Kennzahlen",
    "d": "hard",
    "s": "LF5 5.1.4"
   },
   {
    "t": "calc",
    "q": "Von 5.000 Adressen wurden 3.250 kontaktiert. Wie hoch ist die Ausschöpfungsquote?",
    "ans": [
     "65"
    ],
    "unit": "%",
    "hint": "Kontaktierte / Gesamtadressen × 100.",
    "e": "3.250 / 5.000 = 0,65 → 65 %. Gegenprobe: 65 % von 5.000 = 3.250.",
    "k": "Kennzahlen",
    "d": "medium",
    "s": "LF5 5.1"
   },
   {
    "t": "calc",
    "q": "Aus 3.250 Kontakten entstanden 260 Abschlüsse. Wie hoch ist die Erfolgsquote?",
    "ans": [
     "8"
    ],
    "unit": "%",
    "hint": "Abschlüsse / Kontakte × 100.",
    "e": "260 / 3.250 = 0,08 → 8 %. Achtung: Bezugsgröße sind die Kontakte, nicht die Gesamtadressen.",
    "k": "Kennzahlen",
    "d": "hard",
    "s": "LF5 5.1"
   },
   {
    "t": "mc",
    "q": "Ein Agent hat eine sehr niedrige AHT, aber eine schlechte FCR. Wie ist das zu bewerten?",
    "a": [
     "Ideal, er arbeitet schnell",
     "Bedenklich — zu kurze Gespräche führen zu unvollständiger Bearbeitung und Folgeanrufen",
     "Neutral, die Kennzahlen hängen nicht zusammen",
     "Er hat eine zu hohe Hold Time"
    ],
    "c": 1,
    "e": "Tempo auf Kosten der Lösungsqualität erzeugt Wiederanrufe.",
    "k": "Kennzahlen",
    "d": "hard",
    "s": "LF5 5.1"
   },
   {
    "t": "mc",
    "q": "Was bedeutet ein Servicelevel von 80/20?",
    "a": [
     "80 Anrufe in 20 Minuten",
     "80 % der Anrufe werden binnen 20 Sekunden angenommen",
     "20 % der Anrufe dauern 80 Sekunden",
     "80 Sekunden durchschnittliche Wartezeit"
    ],
    "c": 1,
    "e": "Erster Wert Prozentsatz, zweiter Wert Sekundenschwelle.",
    "k": "Kennzahlen",
    "d": "medium",
    "s": "LF5 5.1"
   },
   {
    "t": "mc",
    "q": "Die Stornoquote eines Outbound-Teams steigt stark. Welche Ursache liegt am nächsten?",
    "a": [
     "Zu hohe Erreichbarkeit",
     "Beratungsfehler, Druckverkauf oder Fehlinformation",
     "Zu niedrige Hold Time",
     "Zu viele Lost Calls"
    ],
    "c": 1,
    "e": "Eine hohe Stornoquote ist ein Qualitäts-, kein Mengenproblem.",
    "k": "Kennzahlen",
    "d": "hard",
    "s": "LF5 5.1"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jeder Kennzahl ihre Formel zu.",
    "pairs": [
     [
      "Lost-Call-Quote",
      "aufgelegte Anrufe × 100 / eingehende Anrufe"
     ],
     [
      "Auslastung",
      "Produktivzeit × 100 / Nettoarbeitszeit"
     ],
     [
      "Erfolgsquote",
      "Abschlüsse / Kontakte × 100"
     ],
     [
      "Ausschöpfungsquote",
      "kontaktierte Adressen / Gesamtadressen × 100"
     ]
    ],
    "e": "Achten Sie jeweils auf die Bezugsgröße im Nenner.",
    "k": "Kennzahlen",
    "d": "hard",
    "s": "LF5 5.1"
   },
   {
    "t": "multi",
    "q": "Was zählt zur Produktivzeit eines Agents?",
    "a": [
     "Gesprächszeit",
     "Nachbearbeitungszeit",
     "Wartezeit zwischen Anrufen",
     "Rüstzeit beim Systemstart"
    ],
    "cs": [
     0,
     1
    ],
    "e": "Warte- und Rüstzeiten gehören zur Nettoarbeitszeit, nicht zur Produktivzeit.",
    "k": "Kennzahlen",
    "d": "hard",
    "s": "LF5 5.1.4"
   },
   {
    "t": "tf",
    "q": "Lost Calls und Abandoned Calls bezeichnen dasselbe.",
    "v": true,
    "e": "Richtig — beide meinen den Anrufer, der in der Warteschleife auflegt.",
    "k": "Kennzahlen",
    "d": "easy",
    "s": "LF5 5.1.3"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jedem Beteiligten seine Rolle zu.",
    "pairs": [
     [
      "Frachtführer",
      "befördert die Güter selbst"
     ],
     [
      "Spediteur",
      "besorgt die Versendung"
     ],
     [
      "Lagerhalter",
      "lagert und verwahrt Güter"
     ]
    ],
    "e": "Befördern, besorgen, lagern — §§ 407, 453 und 467 ff. HGB.",
    "k": "Versand",
    "d": "hard",
    "s": "LF5 7.1"
   },
   {
    "t": "mc",
    "q": "Ein Unternehmen organisiert im eigenen Namen, aber auf Rechnung des Versenders den Transport, ohne selbst zu fahren. Wer ist das?",
    "a": [
     "Frachtführer",
     "Spediteur",
     "Lagerhalter",
     "Distributor"
    ],
    "c": 1,
    "e": "Der Spediteur besorgt die Versendung — er befördert nicht selbst.",
    "k": "Versand",
    "d": "hard",
    "s": "LF5 7.1"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jedem Beteiligten seinen Vertrag zu.",
    "pairs": [
     [
      "Frachtführer",
      "Frachtvertrag"
     ],
     [
      "Spediteur",
      "Speditionsvertrag"
     ],
     [
      "Lagerhalter",
      "Lagervertrag"
     ]
    ],
    "e": "Dazu die Belege: Frachtbrief und Lagerschein.",
    "k": "Versand",
    "d": "hard",
    "s": "LF5 7.1"
   },
   {
    "t": "mc",
    "q": "Welcher Beleg dokumentiert die Übergabe an den Frachtführer?",
    "a": [
     "Lagerschein",
     "Frachtbrief",
     "Speditionsvertrag",
     "Sendungsbeleg"
    ],
    "c": 1,
    "e": "Der Frachtbrief gehört zum Frachtvertrag; der Lagerschein zum Lagervertrag.",
    "k": "Versand",
    "d": "medium",
    "s": "LF5 7.1"
   },
   {
    "t": "mc",
    "q": "Eine Sendung wiegt 1,8 kg und soll ohne Haftung günstig verschickt werden. Welche Versandart?",
    "a": [
     "Päckchen",
     "Paket",
     "Einschreiben",
     "Nachnahme"
    ],
    "c": 0,
    "e": "Das Päckchen geht bis 2 kg, eine Haftung besteht nicht.",
    "k": "Versand",
    "d": "medium",
    "s": "LF5 7.2"
   },
   {
    "t": "mc",
    "q": "Eine Sendung wiegt 24 kg und soll versichert sein. Welche Versandart?",
    "a": [
     "Päckchen",
     "Paket",
     "Warensendung",
     "Warenpost"
    ],
    "c": 1,
    "e": "Das Paket geht bis 31,5 kg und haftet bis 500 €.",
    "k": "Versand",
    "d": "medium",
    "s": "LF5 7.2"
   },
   {
    "t": "cloze",
    "q": "Gewichtsgrenzen und Haftung",
    "txt": "Ein Päckchen geht bis {{1}} kg und wird {{2}} versichert. Ein Paket geht bis {{3}} kg und haftet bis {{4}} €.",
    "gaps": [
     {
      "s": "2",
      "o": [
       "1",
       "5"
      ]
     },
     {
      "s": "nicht",
      "o": [
       "voll",
       "teilweise"
      ]
     },
     {
      "s": "31,5",
      "o": [
       "20",
       "40"
      ]
     },
     {
      "s": "500",
      "o": [
       "250",
       "1.000"
      ]
     }
    ],
    "e": "2 kg ohne Haftung, 31,5 kg mit 500 € Haftung.",
    "k": "Versand",
    "d": "hard",
    "s": "LF5 7.2"
   },
   {
    "t": "mc",
    "q": "Bis zu welchem Betrag haftet die Post beim Einschreiben Standard im Inland?",
    "a": [
     "Gar nicht",
     "25 €",
     "100 €",
     "500 €"
    ],
    "c": 1,
    "e": "Maximal 25 €.",
    "k": "Versand",
    "d": "hard",
    "s": "LF5 7.2"
   },
   {
    "t": "type",
    "q": "Welcher Höchstbetrag gilt bei der Nachnahme?",
    "ans": [
     "3500",
     "3.500",
     "3500 €"
    ],
    "unit": "€",
    "e": "3.500 €.",
    "k": "Versand",
    "d": "hard",
    "s": "LF5 7.2"
   },
   {
    "t": "mc",
    "q": "Was bedeutet Kontrahierungszwang im Postwesen?",
    "a": [
     "Der Kunde muss den günstigsten Tarif wählen",
     "Der Anbieter muss mit jedem Kunden einen Beförderungsvertrag schließen",
     "Der Empfänger muss die Sendung annehmen",
     "Der Versand muss versichert sein"
    ],
    "c": 1,
    "e": "Ein Kunde darf nicht grundlos abgelehnt werden.",
    "k": "Versand",
    "d": "hard",
    "s": "LF5 7.2"
   },
   {
    "t": "multi",
    "q": "Welche Unternehmen nennt das Buch als private Paketdienste?",
    "a": [
     "UPS",
     "Hermes",
     "DPD",
     "Bundesnetzagentur"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Dazu zählen auch FedEx und GLS. Die Bundesnetzagentur ist eine Behörde.",
    "k": "Versand",
    "d": "easy",
    "s": "LF5 7.3"
   },
   {
    "t": "mc",
    "q": "Ein Kunde zahlt an der Kasse in bar. Welche Zahlungsart?",
    "a": [
     "Halbbar",
     "Bar, Zug um Zug",
     "Bargeldlos",
     "Elektronisch"
    ],
    "c": 1,
    "e": "Beide Seiten in bar und gleichzeitig.",
    "k": "Zahlungsverkehr",
    "d": "easy",
    "s": "LF5 6.2.1"
   },
   {
    "t": "mc",
    "q": "Ein Kunde zahlt dem Zusteller bar, das Geld wird dem Versender gutgeschrieben. Welche Zahlungsart?",
    "a": [
     "Bar",
     "Halbbar",
     "Bargeldlos",
     "Finanzierung"
    ],
    "c": 1,
    "e": "Eine Seite bar, die andere über Konto — die Nachnahme ist der Klassiker der halbbaren Zahlung.",
    "k": "Zahlungsverkehr",
    "d": "hard",
    "s": "LF5 6.2.2"
   },
   {
    "t": "multi",
    "q": "Welche Zahlungsformen sind bargeldlos?",
    "a": [
     "Überweisung",
     "Dauerauftrag",
     "Lastschrift",
     "Nachnahme"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Die Nachnahme ist halbbar.",
    "k": "Zahlungsverkehr",
    "d": "hard",
    "s": "LF5 6.2.3"
   },
   {
    "t": "cloze",
    "q": "Zahlungsarten",
    "txt": "Bei der {{1}} Zahlung wechselt Bargeld Zug um Zug den Besitzer. Bei der {{2}} Zahlung ist nur eine Seite bar. Bei der {{3}} Zahlung läuft alles über Konten.",
    "gaps": [
     {
      "s": "baren",
      "o": [
       "halbbaren",
       "bargeldlosen"
      ]
     },
     {
      "s": "halbbaren",
      "o": [
       "baren",
       "elektronischen"
      ]
     },
     {
      "s": "bargeldlosen",
      "o": [
       "halbbaren",
       "baren"
      ]
     }
    ],
    "e": "Bar, halbbar, bargeldlos.",
    "k": "Zahlungsverkehr",
    "d": "medium",
    "s": "LF5 6.2"
   },
   {
    "t": "mc",
    "q": "Ein Kunde erhält 30 Tage Zahlungsziel und zahlt danach in einer Summe. Wie heißt das?",
    "a": [
     "Finanzkauf",
     "Zielkauf",
     "Vorauskasse",
     "Ratenkauf"
    ],
    "c": 1,
    "e": "Zielkauf = Zahlungsziel. Der Finanzkauf wäre die Ratenzahlung.",
    "k": "Zahlungsverkehr",
    "d": "medium",
    "s": "LF5 6.2.5"
   },
   {
    "t": "mc",
    "q": "Ein Kunde zahlt ein Gerät in 24 Monatsraten ab. Wie heißt das?",
    "a": [
     "Zielkauf",
     "Finanzkauf",
     "Halbbare Zahlung",
     "Vorauskasse"
    ],
    "c": 1,
    "e": "Ratenzahlung = Finanzkauf, laut Buch üblich zwischen 6 und 72 Monaten.",
    "k": "Zahlungsverkehr",
    "d": "medium",
    "s": "LF5 6.2.5"
   },
   {
    "t": "match",
    "q": "Ordnen Sie jedem Kartentyp seine Abrechnungslogik zu.",
    "pairs": [
     [
      "Charge-Karte",
      "monatlich gesammelt, voll fällig, zinsfrei"
     ],
     [
      "Credit-Karte",
      "Ratenzahlung mit Zinsen"
     ],
     [
      "Debit-Karte",
      "sofortige Belastung des Kontos"
     ],
     [
      "Prepaid-Karte",
      "nur vorhandenes Guthaben"
     ]
    ],
    "e": "In Deutschland ist die Charge-Karte der Normalfall, obwohl sie umgangssprachlich Kreditkarte heißt.",
    "k": "Zahlungsverkehr",
    "d": "hard",
    "s": "LF5 6.2.4"
   },
   {
    "t": "mc",
    "q": "Welche Karte wird in Deutschland umgangssprachlich Kreditkarte genannt, ist aber eigentlich keine?",
    "a": [
     "Debit-Karte",
     "Charge-Karte",
     "Prepaid-Karte",
     "Girocard"
    ],
    "c": 1,
    "e": "Die Charge-Karte sammelt monatlich und wird dann voll und zinsfrei fällig — echter Kredit entsteht nicht.",
    "k": "Zahlungsverkehr",
    "d": "hard",
    "s": "LF5 6.2.4"
   },
   {
    "t": "cloze",
    "q": "IBAN-Aufbau",
    "txt": "Eine deutsche IBAN besteht aus dem Länderkürzel DE, {{1}} Prüfziffern, der {{2}}-stelligen Bankleitzahl und der {{3}}-stelligen Kontonummer — insgesamt {{4}} Stellen.",
    "gaps": [
     {
      "s": "2",
      "o": [
       "3",
       "4"
      ]
     },
     {
      "s": "8",
      "o": [
       "6",
       "10"
      ]
     },
     {
      "s": "10",
      "o": [
       "8",
       "12"
      ]
     },
     {
      "s": "22",
      "o": [
       "20",
       "24"
      ]
     }
    ],
    "e": "2 + 2 + 8 + 10 = 22 Stellen.",
    "k": "Zahlungsverkehr",
    "d": "hard",
    "s": "LF5 6.2.3"
   },
   {
    "t": "calc",
    "q": "Wie viele Stellen hat eine deutsche IBAN?",
    "ans": [
     "22"
    ],
    "unit": "Stellen",
    "hint": "Länderkürzel + Prüfziffer + BLZ + Kontonummer.",
    "e": "2 + 2 + 8 + 10 = 22.",
    "k": "Zahlungsverkehr",
    "d": "medium",
    "s": "LF5 6.2.3"
   },
   {
    "t": "mc",
    "q": "Ein Verbraucher widerspricht einer SEPA-Basislastschrift. Welche Frist gilt bei gültigem Mandat?",
    "a": [
     "6 Wochen",
     "8 Wochen",
     "13 Monate",
     "Kein Widerspruchsrecht"
    ],
    "c": 1,
    "e": "8 Wochen ab Belastung. Ohne gültiges Mandat sind es 13 Monate.",
    "k": "Zahlungsverkehr",
    "d": "hard",
    "s": "LF5 6.2.3"
   },
   {
    "t": "mc",
    "q": "Ein Geschäftskunde will eine SEPA-Firmenlastschrift zurückgeben. Was gilt?",
    "a": [
     "8 Wochen Frist",
     "13 Monate Frist",
     "Kein Widerspruchsrecht",
     "30 Tage Frist"
    ],
    "c": 2,
    "e": "Die Firmenlastschrift kennt kein Widerspruchsrecht — das unterscheidet sie von der Basislastschrift.",
    "k": "Zahlungsverkehr",
    "d": "hard",
    "s": "LF5 6.2.3"
   },
   {
    "t": "mc",
    "q": "Wie lange darf eine SEPA-Überweisung höchstens dauern?",
    "a": [
     "Sofort",
     "1 Bankarbeitstag",
     "3 Bankarbeitstage",
     "1 Woche"
    ],
    "c": 1,
    "e": "Maximal ein Bankarbeitstag.",
    "k": "Zahlungsverkehr",
    "d": "medium",
    "s": "LF5 6.2.3"
   },
   {
    "t": "mc",
    "q": "Lastschrift oder Überweisung — wer wird aktiv?",
    "a": [
     "Bei der Lastschrift überweist der Kunde aktiv",
     "Bei der Lastschrift zieht das Unternehmen ein, bei der Überweisung zahlt der Kunde aktiv",
     "Beide werden vom Unternehmen ausgelöst",
     "Beide werden vom Kunden ausgelöst"
    ],
    "c": 1,
    "e": "Für den Einzug braucht das Unternehmen ein Mandat.",
    "k": "Zahlungsverkehr",
    "d": "medium",
    "s": "LF5 6.2.3"
   },
   {
    "t": "type",
    "q": "Wofür steht SEPA?",
    "ans": [
     "Single Euro Payments Area"
    ],
    "e": "Single Euro Payments Area — der einheitliche Euro-Zahlungsverkehrsraum.",
    "k": "Zahlungsverkehr",
    "d": "medium",
    "s": "LF5 6.2.3"
   },
   {
    "t": "mc",
    "q": "Was ist Bonität und woran wird sie gemessen?",
    "a": [
     "Die Zahlungsmoral, gemessen an der IBAN",
     "Die Kreditwürdigkeit, gemessen unter anderem am Schufa-Score",
     "Das Guthaben auf dem Konto",
     "Die Höhe des Zahlungsziels"
    ],
    "c": 1,
    "e": "Die Schufa sammelt Kredithistorie, Zahlungsausfälle und bestehende Verträge.",
    "k": "Zahlungsverkehr",
    "d": "medium",
    "s": "LF5 6.2.5"
   },
   {
    "t": "mc",
    "q": "Ein Kunde zahlt, bevor die Ware das Lager verlässt. Welche Zahlungsart?",
    "a": [
     "Nachnahme",
     "Vorauskasse",
     "Zielkauf",
     "Finanzkauf"
    ],
    "c": 1,
    "e": "Vorauskasse — bargeldlos und für den Verkäufer risikoarm.",
    "k": "Zahlungsverkehr",
    "d": "easy",
    "s": "LF5 6.2.3"
   },
   {
    "t": "mc",
    "q": "Ein Kunde lässt monatlich denselben Betrag automatisch überweisen. Welche Form?",
    "a": [
     "Lastschrift",
     "Dauerauftrag",
     "Vorauskasse",
     "Nachnahme"
    ],
    "c": 1,
    "e": "Beim Dauerauftrag bleibt der Zahlende aktiv; bei der Lastschrift zieht der Empfänger ein.",
    "k": "Zahlungsverkehr",
    "d": "medium",
    "s": "LF5 6.2.3"
   },
   {
    "t": "multi",
    "q": "Welche Informationsquellen für Produktkenntnisse nennt das Buch?",
    "a": [
     "Trainings und Schulungen",
     "Herstellerinformationen",
     "Intranet und Wissensmanagement",
     "E-Learning",
     "Kundenbewertungen auf fremden Portalen"
    ],
    "cs": [
     0,
     1,
     2,
     3
    ],
    "e": "Auch das eigene Produkt selbst ausprobieren zählt dazu.",
    "k": "Produktkenntnisse",
    "d": "medium",
    "s": "LF5 8.2"
   },
   {
    "t": "mc",
    "q": "Ein neuer Agent soll schnell auskunftsfähig werden. Welche Quelle nennt das Buch als zentral im Unternehmen?",
    "a": [
     "Soziale Netzwerke",
     "Intranet und Wissensmanagement",
     "Fachzeitschriften am Kiosk",
     "Wettbewerberwebseiten"
    ],
    "c": 1,
    "e": "Das interne Wissensmanagement bündelt die geprüften Informationen.",
    "k": "Produktkenntnisse",
    "d": "medium",
    "s": "LF5 8.2"
   },
   {
    "t": "mc",
    "q": "Eine Befragung misst, ob die Erwartungen der Kunden erfüllt wurden. Wie heißt das Instrument?",
    "a": [
     "Benchmark",
     "Zufriedenheitsbefragung",
     "Data-Mining",
     "Beschwerdemanagement"
    ],
    "c": 1,
    "e": "Die Zufriedenheitsbefragung erhebt den Soll-Ist-Abgleich der Erwartungen.",
    "k": "Kundenbindung",
    "d": "medium",
    "s": "LF5 3.2"
   },
   {
    "t": "multi",
    "q": "Welche Instrumente zur Kundenbindung nennt das Buch?",
    "a": [
     "Kundenclubs und Kundenkarten",
     "Gutscheine",
     "Kundenmagazine",
     "Coupon- und Rabattaktionen",
     "Preiserhöhungen für Bestandskunden"
    ],
    "cs": [
     0,
     1,
     2,
     3
    ],
    "e": "Vier Instrumente. Preiserhöhungen für Bestandskunden wirken der Bindung entgegen.",
    "k": "Kundenbindung",
    "d": "easy",
    "s": "LF5 3.3"
   },
   {
    "t": "mc",
    "q": "Ein Kunde erhält jährlich einen Bonus auf seinen Jahresumsatz. Welche Bindungsart?",
    "a": [
     "Emotional",
     "Strukturell",
     "Ökonomisch",
     "Rechtlich"
    ],
    "c": 2,
    "e": "Geldwerte Anreize binden ökonomisch.",
    "k": "Kundenbindung",
    "d": "medium",
    "s": "LF5 1.4"
   },
   {
    "t": "mc",
    "q": "Ein Softwareanbieter integriert sein System tief in die Prozesse des Kunden. Welche Bindungsart?",
    "a": [
     "Emotional",
     "Ökonomisch",
     "Strukturell",
     "Informativ"
    ],
    "c": 2,
    "e": "Technische Integration erzeugt Wechselhürden — strukturelle Bindung.",
    "k": "Kundenbindung",
    "d": "hard",
    "s": "LF5 1.4"
   },
   {
    "t": "mc",
    "q": "Was ist ein Kundensegment?",
    "a": [
     "Ein Umsatzbereich",
     "Eine Gruppe von Kunden mit ähnlichen Merkmalen oder Verhaltensweisen",
     "Eine Phase des Lebenszyklus",
     "Ein CRM-Modul"
    ],
    "c": 1,
    "e": "Basis für zielgruppengerechte Maßnahmen.",
    "k": "CRM",
    "d": "easy",
    "s": "LF5 1.2"
   },
   {
    "t": "mc",
    "q": "Was gehört zur Nachbereitungsphase eines Gesprächs?",
    "a": [
     "Die Begrüßung",
     "Dokumentation im CRM, Weiterleitung, Follow-up-Termin",
     "Die Legitimationsprüfung",
     "Die Einwandbehandlung"
    ],
    "c": 1,
    "e": "Nachbereitung ist Qualitätssicherung — sie gehört zur ACW.",
    "k": "Gesprächsführung",
    "d": "medium",
    "s": "LF5 4.1"
   },
   {
    "t": "multi",
    "q": "Was ist nach einem Beschwerdegespräch im CRM zu dokumentieren?",
    "a": [
     "Datum und Inhalt",
     "Vereinbarte Lösung",
     "Kulanzleistung und Follow-up-Termin",
     "Der Name des Vorgesetzten des Kunden"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Auch die Kundenstimmung gehört dazu.",
    "k": "Beschwerden",
    "d": "medium",
    "s": "LF5 3.4"
   },
   {
    "t": "tf",
    "q": "Kulanz ist eine rechtliche Verpflichtung des Unternehmens.",
    "v": false,
    "e": "Falsch. Kulanz ist freiwilliges Entgegenkommen ohne Rechtspflicht.",
    "k": "Beschwerden",
    "d": "easy",
    "s": "LF5 3.4"
   },
   {
    "t": "tf",
    "q": "Eine hohe FCR geht in der Regel mit hoher Kundenzufriedenheit einher.",
    "v": true,
    "e": "Richtig — es besteht eine starke positive Korrelation.",
    "k": "Kennzahlen",
    "d": "easy",
    "s": "LF5 5.1"
   },
   {
    "t": "tf",
    "q": "Die Hold Time zählt nicht zur AHT.",
    "v": false,
    "e": "Falsch. AHT = Talk Time + Hold Time + ACW.",
    "k": "Kennzahlen",
    "d": "medium",
    "s": "LF5 5.1"
   },
   {
    "t": "tf",
    "q": "Der Spediteur haftet immer selbst für den Transportschaden, weil er die Ware befördert.",
    "v": false,
    "e": "Falsch. Der Spediteur besorgt die Versendung; befördert wird vom Frachtführer.",
    "k": "Versand",
    "d": "hard",
    "s": "LF5 7.1"
   },
   {
    "t": "tf",
    "q": "Bei der Warensendung besteht eine Haftung der Post.",
    "v": false,
    "e": "Falsch. Bücher- und Warensendungen sind nicht versichert.",
    "k": "Versand",
    "d": "hard",
    "s": "LF5 7.2"
   },
   {
    "t": "odd",
    "q": "Welcher Begriff gehört nicht zu den fünf Faktoren des Kundenwerts?",
    "a": [
     "Umsatz",
     "Ertrag",
     "Referenzwert",
     "Servicelevel"
    ],
    "c": 3,
    "e": "Der Servicelevel ist eine Erreichbarkeitskennzahl.",
    "k": "Kundenbindung",
    "d": "medium",
    "s": "LF5 1.2"
   },
   {
    "t": "odd",
    "q": "Welcher Schritt gehört nicht zum Beschwerdegespräch nach ESEL?",
    "a": [
     "Einsteigen",
     "Sachlich klären",
     "Eskalieren",
     "Lösung anbieten"
    ],
    "c": 2,
    "e": "Der dritte Schritt ist die emotionale Begleitung.",
    "k": "Beschwerden",
    "d": "medium",
    "s": "LF5 3.4"
   },
   {
    "t": "odd",
    "q": "Welcher Begriff beschreibt keine Zahlungsart?",
    "a": [
     "Vorauskasse",
     "Dauerauftrag",
     "Lastschrift",
     "Frachtbrief"
    ],
    "c": 3,
    "e": "Der Frachtbrief ist ein Versandbeleg.",
    "k": "Zahlungsverkehr",
    "d": "easy",
    "s": "LF5 6.2"
   },
   {
    "t": "odd",
    "q": "Welche CRM-Säule nennt das Buch nicht?",
    "a": [
     "Technik",
     "Organisation",
     "Personal",
     "Finanzen"
    ],
    "c": 3,
    "e": "Technik, Organisation, Personal.",
    "k": "CRM",
    "d": "easy",
    "s": "LF5 1"
   },
   {
    "t": "type",
    "q": "Wie lautet das Merkwort für die fünf Schritte des Beschwerdegesprächs?",
    "ans": [
     "ESEL"
    ],
    "e": "Einsteigen, Sachlich, Emotional, Lösung, Abschluss.",
    "k": "Beschwerden",
    "d": "easy",
    "s": "LF5 3.4"
   },
   {
    "t": "type",
    "q": "Wie heißt die Kennzahl, die das Verhältnis von Produktivzeit zur Nettoarbeitszeit angibt?",
    "ans": [
     "Auslastung",
     "Occupancy"
    ],
    "e": "Auslastung, englisch Occupancy — rund 80 % gelten als angemessen.",
    "k": "Kennzahlen",
    "d": "hard",
    "s": "LF5 5.1.4"
   },
   {
    "t": "type",
    "q": "Wie heißt die Rückgewinnung abgewanderter Kunden auf Englisch?",
    "ans": [
     "Winback",
     "Win-back"
    ],
    "e": "Winback.",
    "k": "Kundenbindung",
    "d": "easy",
    "s": "LF5 1.4"
   },
   {
    "t": "mc",
    "q": "Ein Kunde mit hohem Potenzial kauft aktuell wenig. Wie sollte das CRM ihn behandeln?",
    "a": [
     "Als Karteileiche aussteuern",
     "Als Entwicklungskandidat gezielt betreuen",
     "Ausschließlich per Newsletter bedienen",
     "Direkt ins Winback geben"
    ],
    "c": 1,
    "e": "Potenzial ist ein eigener Kundenwertfaktor — entscheidend ist der künftige, nicht der aktuelle Umsatz.",
    "k": "Kundenbindung",
    "d": "hard",
    "s": "LF5 1.2"
   },
   {
    "t": "mc",
    "q": "Ein Kunde ruft zum dritten Mal wegen derselben Sache an. Welche Kennzahl ist unmittelbar betroffen?",
    "a": [
     "Servicelevel",
     "FCR",
     "Ausschöpfungsquote",
     "Stornoquote"
    ],
    "c": 1,
    "e": "Die First Call Resolution misst, ob das Anliegen beim ersten Kontakt gelöst wurde.",
    "k": "Kennzahlen",
    "d": "medium",
    "s": "LF5 5.1"
   },
   {
    "t": "mc",
    "q": "Die Auslastung eines Teams liegt konstant bei 97 %. Wie ist das zu bewerten?",
    "a": [
     "Ideal, maximale Effizienz",
     "Kritisch — angemessen sind rund 80 %, sonst fehlen Erholungs- und Rüstzeiten",
     "Zu niedrig",
     "Ohne Bedeutung"
    ],
    "c": 1,
    "e": "Eine dauerhaft zu hohe Auslastung geht auf Kosten von Qualität und Gesundheit.",
    "k": "Kennzahlen",
    "d": "hard",
    "s": "LF5 5.1.4"
   },
   {
    "t": "cloze",
    "q": "CRM-Grundlagen",
    "txt": "CRM ist eine {{1}} zur Ausrichtung aller Bereiche auf langfristige, profitable Kundenbeziehungen. Die drei Säulen lauten {{2}}, {{3}} und {{4}}.",
    "gaps": [
     {
      "s": "Unternehmensstrategie",
      "o": [
       "Software",
       "Abteilung"
      ]
     },
     {
      "s": "Technik",
      "o": [
       "Finanzen",
       "Marketing"
      ]
     },
     {
      "s": "Organisation",
      "o": [
       "Vertrieb",
       "Controlling"
      ]
     },
     {
      "s": "Personal",
      "o": [
       "Produktion",
       "Einkauf"
      ]
     }
    ],
    "e": "Strategie, nicht Software — getragen von Technik, Organisation und Personal.",
    "k": "CRM",
    "d": "medium",
    "s": "LF5 1"
   },
   {
    "t": "cloze",
    "q": "Versandbeteiligte",
    "txt": "Der {{1}} befördert die Güter selbst, der {{2}} besorgt lediglich die Versendung, der {{3}} verwahrt sie. Der Beleg des ersten heißt {{4}}.",
    "gaps": [
     {
      "s": "Frachtführer",
      "o": [
       "Spediteur",
       "Lagerhalter"
      ]
     },
     {
      "s": "Spediteur",
      "o": [
       "Frachtführer",
       "Distributor"
      ]
     },
     {
      "s": "Lagerhalter",
      "o": [
       "Spediteur",
       "Frachtführer"
      ]
     },
     {
      "s": "Frachtbrief",
      "o": [
       "Lagerschein",
       "Speditionsvertrag"
      ]
     }
    ],
    "e": "Befördern, besorgen, verwahren.",
    "k": "Versand",
    "d": "hard",
    "s": "LF5 7.1"
   },
   {
    "t": "cloze",
    "q": "Kartentypen",
    "txt": "Die {{1}}-Karte belastet das Konto sofort. Die {{2}}-Karte sammelt monatlich und wird dann zinsfrei voll fällig. Die {{3}}-Karte erlaubt Ratenzahlung mit Zinsen.",
    "gaps": [
     {
      "s": "Debit",
      "o": [
       "Charge",
       "Credit"
      ]
     },
     {
      "s": "Charge",
      "o": [
       "Debit",
       "Prepaid"
      ]
     },
     {
      "s": "Credit",
      "o": [
       "Charge",
       "Debit"
      ]
     }
    ],
    "e": "Sofort, gesammelt, in Raten.",
    "k": "Zahlungsverkehr",
    "d": "hard",
    "s": "LF5 6.2.4"
   },
   {
    "t": "mc",
    "q": "Ein Unternehmen will Beschwerden nicht nur bearbeiten, sondern Fehlerursachen abstellen. Welche Disziplin ist gefragt?",
    "a": [
     "Beschwerdemanagement",
     "Qualitätsmanagement",
     "Kampagnenmanagement",
     "Echtzeitmanagement"
    ],
    "c": 1,
    "e": "Qualitätsmanagement arbeitet proaktiv an den Ursachen.",
    "k": "Beschwerden",
    "d": "medium",
    "s": "LF5 3.4"
   },
   {
    "t": "mc",
    "q": "Ein Agent unterbricht den Kunden mehrfach und rechtfertigt sich. Welche zwei Fehler liegen vor?",
    "a": [
     "Unterbrechen und Dokumentieren",
     "Unterbrechen und Rechtfertigen",
     "Rechtfertigen und Kulanz",
     "Dokumentieren und Eskalieren"
    ],
    "c": 1,
    "e": "Beide gehören zu den typischen Fehlern im Beschwerdegespräch.",
    "k": "Beschwerden",
    "d": "easy",
    "s": "LF5 3.4"
   },
   {
    "t": "mc",
    "q": "Warum ist die Nachbearbeitung Teil der Qualitätssicherung?",
    "a": [
     "Weil sie die AHT senkt",
     "Weil Dokumentation, Weiterleitung und Follow-up den Vorgang nachvollziehbar abschließen",
     "Weil sie den Servicelevel erhöht",
     "Weil sie gesetzlich vorgeschrieben ist"
    ],
    "c": 1,
    "e": "Ohne saubere Nachbearbeitung fehlt beim nächsten Kontakt die Historie.",
    "k": "Gesprächsführung",
    "d": "medium",
    "s": "LF5 4.1"
   },
   {
    "t": "mc",
    "q": "Was enthält eine Kundenhistorie?",
    "a": [
     "Nur die letzte Bestellung",
     "Alle Kundenkontakte mit Datum, Art, Inhalten, Beschwerden und offenen Vorgängen",
     "Nur Beschwerden",
     "Nur die Stammdaten"
    ],
    "c": 1,
    "e": "Sie bildet den kompletten Kontaktverlauf ab.",
    "k": "Datenmanagement",
    "d": "easy",
    "s": "LF5 2.3"
   },
   {
    "t": "mc",
    "q": "Ein Kunde widerruft sein Lastschriftmandat, das Unternehmen zieht trotzdem ein. Welche Frist gilt für den Widerspruch?",
    "a": [
     "8 Wochen",
     "13 Monate",
     "30 Tage",
     "Kein Widerspruch möglich"
    ],
    "c": 1,
    "e": "Ohne gültiges Mandat verlängert sich die Frist auf 13 Monate.",
    "k": "Zahlungsverkehr",
    "d": "hard",
    "s": "LF5 6.2.3"
   },
   {
    "t": "multi",
    "q": "Welche Aussagen zur Einwandbehandlung treffen zu?",
    "a": [
     "Widerstände werden aufgenommen und verstanden",
     "Sie erfolgt ohne pauschalen Widerspruch",
     "Sie steht vor dem Abschluss",
     "Sie ersetzt die Bedarfsermittlung"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Die Bedarfsermittlung bleibt eine eigene, frühere Phase.",
    "k": "Gesprächsführung",
    "d": "medium",
    "s": "LF5 4.1"
   },
   {
    "t": "calc",
    "q": "Ein Unternehmen verliert jährlich 400 Kunden. Die Rückgewinnung kostet 40 € je Kunde, die Neugewinnung 220 €. Wie viel spart ein vollständiger Winback?",
    "ans": [
     "72000",
     "72.000"
    ],
    "unit": "€",
    "hint": "Differenz je Kunde mal Anzahl.",
    "e": "(220 − 40) × 400 = 180 × 400 = 72.000 €. Gegenprobe: 400 × 220 = 88.000 gegenüber 400 × 40 = 16.000.",
    "k": "Kundenbindung",
    "d": "hard",
    "s": "LF5 1.4"
   },
   {
    "t": "calc",
    "q": "Ein Team nimmt 1.500 Anrufe entgegen, davon werden 1.185 beim ersten Kontakt gelöst. Wie hoch ist die FCR?",
    "ans": [
     "79"
    ],
    "unit": "%",
    "hint": "Gelöste durch Gesamtanrufe.",
    "e": "1.185 / 1.500 = 0,79 → 79 %. Der Zielwert liegt bei über 70 bis 80 %.",
    "k": "Kennzahlen",
    "d": "medium",
    "s": "LF5 5.1"
   }
  ]
 }
];
