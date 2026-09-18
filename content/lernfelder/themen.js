/* Themen und amtliche Lernfeldbezeichnungen.

   Einmal aus dem Altbestand herausgelöst und seitdem eigene Quelle. Der
   Lernen-Tab liest ausschliesslich von hier; Karten und Aufgaben stehen in
   c1.js bis c5.js. Die Namen sind die des Rahmenlehrplans — danach sucht
   man in Buch und Berufsschule, deshalb haben sie Vorrang vor kuerzeren
   Arbeitstiteln aus den Inhaltspaketen. */

export default {
 "01": {
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
  ]
 },
 "02": {
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
  ]
 },
 "03": {
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
  ]
 },
 "04": {
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
  ]
 },
 "05": {
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
  ]
 }
};
