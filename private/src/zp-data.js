/* Erzeugt von scripts/build-pruefung.mjs — nicht von Hand ändern.
   Quelle: content/pruefung/{f21,h22,f24,h25,f26,x6}.js
   Neu bauen mit: npm run lern

   window.ZP = [{ id, name, note, items }]
   Aufgabe: Lernfeld-Schema + tg (Themengebiet), g (Konzeptgruppe),
            src (Herkunft), x (Ausgangssituation, optional) */

window.ZP = [
 {
  "id": "F21",
  "name": "Frühjahr 2021",
  "note": "Nachbau · Originalreihenfolge",
  "items": [
   {
    "tg": 1,
    "g": "hardskills",
    "src": "ZP F21/1",
    "t": "multi",
    "q": "Die Dialogfix GmbH sucht einen neuen Teamleiter. Welche zwei Angaben aus den Bewerbungen gehören zu den Hard Skills?",
    "a": [
     "Zertifikat „Callcenter-Agent (IHK)“",
     "verhandlungssicheres Englisch mit Sprachzertifikat",
     "hohe Frustrationstoleranz",
     "ausgeprägte Teamfähigkeit",
     "Einfühlungsvermögen im Kundengespräch",
     "positives Menschenbild"
    ],
    "cs": [
     0,
     1
    ],
    "e": "Hard Skills sind laut Buch überprüfbare Kenntnisse und formale Qualifikationen – nachweisbar über Zeugnisse, Zertifikate oder Tests. Frustrationstoleranz, Teamfähigkeit, Einfühlungsvermögen und Menschenbild sind Soft Skills.",
    "k": "Mitarbeiter",
    "s": "LF2 2.3.2"
   },
   {
    "tg": 1,
    "g": "dm-merkmale",
    "src": "ZP F21/2",
    "t": "multi",
    "q": "Welche zwei Merkmale kennzeichnen Dialogmarketing im Unterschied zum klassischen Marketing?",
    "a": [
     "direkte Responsemöglichkeit",
     "individuelle, zielgenaue Ansprache",
     "hohe Streuverluste",
     "Ansprache des anonymen Massenmarktes",
     "Ziel ist vor allem die Steigerung des Bekanntheitsgrades",
     "Erfolgskontrolle ist schwierig"
    ],
    "cs": [
     0,
     1
    ],
    "e": "Buchtabelle LF2 1.3.2: Dialogmarketing = zweiseitige Kommunikation, individuelle Ansprache, geringe Streuverluste, direkte Response, rasche Erfolgskontrolle. Die übrigen Optionen beschreiben das klassische Marketing.",
    "k": "Marketing",
    "s": "LF2 1.3.2"
   },
   {
    "tg": 1,
    "g": "diagramm-summe",
    "src": "ZP F21/3",
    "t": "calc",
    "x": "Erwerbstätige in Deutschland (in Tsd.)\nLand- und Forstwirtschaft, Fischerei: 560\nProduzierendes Gewerbe ohne Bau: 8.120\nBaugewerbe: 2.590\nHandel, Verkehr, Gastgewerbe: 10.250\nInformation und Kommunikation: 1.480\nFinanz- und Versicherungsdienstleister: 1.090\nGrundstücks- und Wohnungswesen: 480\nUnternehmensdienstleister: 6.240\nÖffentliche und sonstige Dienstleister, Erziehung, Gesundheit: 14.690",
    "q": "Wie viele Erwerbstätige (in Tausend) arbeiten laut Übersicht im Dienstleistungssektor?",
    "ans": [
     "34.230",
     "34230"
    ],
    "unit": "Tsd.",
    "hint": "Nur Bereiche des Tertiärsektors addieren.",
    "e": "Tertiärsektor = Handel/Verkehr 10.250 + Information 1.480 + Finanzen 1.090 + Grundstücke 480 + Unternehmensdienstleister 6.240 + öffentliche DL 14.690 = 34.230 Tsd. Land-/Forstwirtschaft ist Primär-, Industrie und Bau sind Sekundärsektor. Probe: 560 + 8.120 + 2.590 + 34.230 = 45.500 = Gesamtsumme.",
    "k": "Sektoren & DL",
    "s": "LF2 1.2.1"
   },
   {
    "tg": 1,
    "g": "diagramm-anteil",
    "src": "ZP F21/4",
    "t": "calc",
    "x": "Erwerbstätige in Deutschland (in Tsd.)\nLand- und Forstwirtschaft, Fischerei: 560\nProduzierendes Gewerbe ohne Bau: 8.120\nBaugewerbe: 2.590\nDienstleistungsbereiche zusammen: 34.230",
    "q": "Wie hoch ist der Anteil der Land- und Forstwirtschaft an allen Erwerbstätigen?",
    "ans": [
     "1,23"
    ],
    "unit": "%",
    "hint": "Auf zwei Nachkommastellen runden.",
    "e": "Grundwert = alle Erwerbstätigen: 560 + 8.120 + 2.590 + 34.230 = 45.500 Tsd. Anteil = 560 · 100 / 45.500 = 1,23 %. Typischer Fehler: nur durch den Dienstleistungssektor teilen (falscher Grundwert).",
    "k": "Sektoren & DL",
    "s": "LF2 1.2.1"
   },
   {
    "tg": 1,
    "g": "strukturwandel",
    "src": "ZP F21/5",
    "t": "mc",
    "q": "Welche Schlussfolgerung beschreibt die langfristige Entwicklung der Erwerbstätigenstruktur in Deutschland zutreffend?",
    "a": [
     "Der Tertiärsektor gewinnt an Bedeutung – Deutschland entwickelt sich zur Dienstleistungs- und Wissensgesellschaft.",
     "Der Sekundärsektor beschäftigt inzwischen die meisten Erwerbstätigen.",
     "Der Primärsektor wächst durch Automatisierung stärker als alle anderen Sektoren.",
     "Die Dialogmarketingbranche wird in der amtlichen Statistik als eigener Industriezweig geführt.",
     "Die Globalisierung führt zu mehr Arbeitsplätzen in arbeitsintensiven Industriebranchen."
    ],
    "c": 0,
    "e": "Laut Buch geht die Bedeutung von Primär- und Sekundärsektor deutlich zurück, Gewinner ist der Tertiärsektor (Dienstleistungsgesellschaft); der Informations-/Wissenssektor gilt als Wachstumsträger. Dialogmarketing ist eine Querschnittsbranche und wird amtlich nicht eigens geführt.",
    "k": "Sektoren & DL",
    "s": "LF2 1.2.1"
   },
   {
    "tg": 1,
    "g": "inhouse-extern",
    "src": "ZP F21/6",
    "t": "mc",
    "q": "Ein Versicherer überlegt, seine Kundenhotline im eigenen Haus (Inhouse) zu betreiben, statt einen externen Dienstleister zu beauftragen. Welches Argument spricht für die Inhouse-Lösung?",
    "a": [
     "Komplexe Sachverhalte können bearbeitet werden, weil die Mitarbeiter fundierte Kenntnisse der eigenen Produkte besitzen.",
     "Schwankungen im Anrufvolumen lassen sich flexibel auffangen.",
     "Durch den Wettbewerb am Markt ist die Lösung meist kostengünstiger.",
     "Der Dienstleister bringt Erfahrung aus vielen unterschiedlichen Projekten mit.",
     "Zusatzleistungen wie Inkasso oder Versand können gleich mit eingekauft werden."
    ],
    "c": 0,
    "e": "Inhouse-Vorteile laut Buch: komplexe Sachverhalte, hohe Identifikation, umfassende Qualitätskontrolle. Flexibilität bei Volumenschwankungen, niedrigere Kosten, Projekterfahrung und Zusatzservices sind Vorteile des externen Callcenters (Outsourcing).",
    "k": "Typologie",
    "s": "LF2 2.1.1"
   },
   {
    "tg": 1,
    "g": "service-phasen",
    "src": "ZP F21/7",
    "t": "match",
    "q": "Ordnen Sie die Serviceleistungen der Dialogfix GmbH der passenden Phase zu.",
    "pairs": [
     [
      "Anruf eine Woche nach Lieferung zur Zufriedenheit mit dem Gerät",
      "After-Sales-Service"
     ],
     [
      "kostenlose 0800-Bestellhotline, rund um die Uhr erreichbar",
      "Pre-Sales-Service"
     ],
     [
      "geschulte Mitarbeiter beantworten technische Fragen während der Bestellung",
      "Sales-Service"
     ],
     [
      "Montagehilfe am Telefon nach Auslieferung",
      "After-Sales-Service"
     ],
     [
      "kurze Wartezeit, bevor der Interessent einen Berater erreicht",
      "Pre-Sales-Service"
     ]
    ],
    "e": "Pre-Sales = vor dem Kauf (Erreichbarkeit, kurze Wartezeit), Sales = kaufbegleitend (Beratung während der Bestellung), After-Sales = nach dem Kauf (Zufriedenheitsanruf, Montagehilfe, Garantie). Die Buchbeispiele ordnen die 0800-Hotline ausdrücklich dem Pre-Sales-Service zu.",
    "k": "Leistungen",
    "s": "LF2 2.2.4"
   },
   {
    "tg": 2,
    "g": "din5008",
    "src": "ZP F21/8",
    "t": "mc",
    "q": "Was ist NICHT Gegenstand der DIN 5008?",
    "a": [
     "der Wortlaut, den ein Unternehmen in seinen Textbausteinen verwenden muss",
     "die Schreibweise des Datums",
     "der Aufbau eines Briefes mit Anschriftfeld und Betreff",
     "die Schreibweise von Telefonnummern",
     "die Abstände zu den Blatträndern"
    ],
    "c": 0,
    "e": "Die DIN 5008 regelt Form und Schreibweise (Aufbau, Abstände, Datum, Telefonnummern, Anlagen, Brieffuß). Welche Formulierungen ein Unternehmen in Textbausteinen verwendet, legt es selbst fest (z. B. im Styleguide).",
    "k": "Schriftliche Kommunikation",
    "s": "LF3 1.1"
   },
   {
    "tg": 2,
    "g": "textbausteine",
    "src": "ZP F21/9",
    "t": "multi",
    "q": "Welche zwei Vorteile bieten Textbausteine in der Kundenkorrespondenz?",
    "a": [
     "Standardisierte Anfragen lassen sich schnell beantworten.",
     "Kunden erhalten einheitlich formulierte Antworten.",
     "Jede Antwort ist automatisch individuell auf den Kunden zugeschnitten.",
     "Ein Fehler in einem Baustein wirkt sich nur auf ein einziges Schreiben aus.",
     "Mitarbeiter fühlen sich durch Textbausteine in ihrer Kompetenz aufgewertet.",
     "Eine Rechtschreibprüfung der Bausteine ist überflüssig."
    ],
    "cs": [
     0,
     1
    ],
    "e": "Buch: Vorteile = schnelle Beantwortung, Einsatz ohne Spezialschulung, einheitliches Auftreten, vorab geprüfte Rechtschreibung. Nachteile = Gefahr fehlender Individualität, Mitarbeiter fühlen sich herabgesetzt, ein Fehler im Baustein landet bei jedem Kunden.",
    "k": "Schriftliche Kommunikation",
    "s": "LF3 1.3"
   },
   {
    "tg": 2,
    "g": "svt",
    "src": "ZP F21/10",
    "t": "mc",
    "q": "Welche vier Seiten einer Nachricht unterscheidet Friedemann Schulz von Thun?",
    "a": [
     "Sachinhalt – Selbstoffenbarung – Beziehung – Appell",
     "Inhalt – Beziehung – Interpunktion – Symmetrie",
     "Eltern-Ich – Erwachsenen-Ich – Kind-Ich – Über-Ich",
     "Sender – Nachricht – Kanal – Empfänger",
     "Sachinhalt – Selbstdarstellung – Befehl – Bewertung"
    ],
    "c": 0,
    "e": "Vier-Seiten-Modell: Sachinhalt, Selbstoffenbarung, Beziehung, Appell (je ein „Ohr“ beim Empfänger). Verwechslungsgefahr: Inhalts-/Beziehungsaspekt und Interpunktion gehören zu Watzlawick, Ich-Zustände zur Transaktionsanalyse.",
    "k": "Schulz von Thun",
    "s": "LF3 2.4"
   },
   {
    "tg": 2,
    "g": "bedarf-fehler",
    "src": "ZP F21/11",
    "t": "mc",
    "q": "Welches Verhalten des Agents behindert eine gründliche Bedarfsermittlung?",
    "a": [
     "Er schlägt bereits nach dem ersten Satz des Kunden eine Lösung vor.",
     "Er beginnt mit offenen Fragen.",
     "Er fasst das Ergebnis der Bedarfsermittlung für den Kunden zusammen.",
     "Er hört aktiv zu und greift auch die Gefühle des Kunden auf.",
     "Er sichert das Verstandene am Ende mit geschlossenen Fragen ab."
    ],
    "c": 0,
    "e": "Das Buch warnt: Kundenanliegen nicht vorschnell einordnen – die Bedarfsanalyse läuft, bis das Anliegen sicher verstanden ist. Offene Fragen zu Beginn, aktives Zuhören, geschlossene Fragen und Zusammenfassung am Ende sind gerade die richtigen Techniken.",
    "k": "Gesprächsführung",
    "s": "LF5 1.1.2"
   },
   {
    "tg": 2,
    "g": "kollege-abwesend",
    "src": "ZP F21/12",
    "t": "mc",
    "q": "Eine Kundin möchte dringend Herrn Weber sprechen, der seit gestern krank ist. Wie reagieren Sie kundenorientiert?",
    "a": [
     "Sie nehmen das Anliegen genau auf, klären den Sachverhalt und sagen einen zeitnahen Rückruf zu.",
     "Sie bitten die Kundin, in einer Woche erneut anzurufen, wenn Herr Weber zurück ist.",
     "Sie erklären der Kundin, woran Herr Weber erkrankt ist, damit sie Verständnis hat.",
     "Sie legen die Kundin in die Warteschleife, bis sich zufällig ein Kollege meldet.",
     "Sie geben der Kundin die private Handynummer von Herrn Weber."
    ],
    "c": 0,
    "e": "Kundenorientiert: Anliegen aufnehmen, sich selbst kümmern, verbindlich zurückrufen. Die Kundin weiterzuschicken belastet die Beziehung; Angaben zur Erkrankung oder private Nummern sind personenbezogene Daten und dürfen nicht herausgegeben werden.",
    "k": "Gesprächsführung",
    "s": "LF5 1.1"
   },
   {
    "tg": 2,
    "g": "fragetrichter",
    "src": "ZP F21/13",
    "t": "mc",
    "q": "Wie setzen Sie die Frageformen in der Bedarfsermittlung nach dem Prinzip des Fragetrichters ein?",
    "a": [
     "zu Beginn offene Fragen, zum Ende geschlossene Fragen",
     "zu Beginn geschlossene Fragen, zum Ende offene Fragen",
     "ausschließlich Suggestivfragen, um schnell zum Abschluss zu kommen",
     "zu Beginn Alternativfragen, zum Ende rhetorische Fragen",
     "nur geschlossene Fragen, um Zeit zu sparen"
    ],
    "c": 0,
    "e": "Fragetrichter (LF5 1.1.2): offene Fragen liefern viele Informationen und bauen Beziehung auf; geschlossene Fragen sichern am Ende ab, ob der Kunde richtig verstanden wurde. Suggestiv- und rhetorische Fragen haben in der Bedarfsermittlung nichts verloren.",
    "k": "Gesprächsführung",
    "s": "LF5 1.1.2"
   },
   {
    "tg": 3,
    "g": "multitasking",
    "src": "ZP F21/14",
    "t": "mc",
    "q": "Was versteht man im Dialogmarketing unter Multitasking des Mitarbeiters?",
    "a": [
     "das Kundengespräch führen und dabei gleichzeitig Daten in mehreren Programmen erfassen oder nachschlagen",
     "mehrere Kunden gleichzeitig in einer Telefonkonferenz beraten",
     "Anrufe nach den Fähigkeiten der Agents verteilen",
     "zwischen Inbound- und Outbound-Tätigkeit umschalten",
     "Aufgaben nach Wichtigkeit und Dringlichkeit ordnen"
    ],
    "c": 0,
    "e": "Multitasking = mehrere Tätigkeiten gleichzeitig ausführen, typisch: Gespräch führen und dabei Kundendatenbank, Bestellmaske und Lösungsdatenbank bedienen. Anrufverteilung nach Fähigkeiten = Skill Based Routing, Umschalten In-/Outbound = Call Blending, Wichtig/Dringend = Eisenhower.",
    "k": "Datenmanagement",
    "s": "LF5 2.4"
   },
   {
    "tg": 3,
    "g": "datenerfassung-grundsatz",
    "src": "ZP F21/15",
    "t": "mc",
    "q": "Welche Vorgehensweise widerspricht den Grundsätzen der Datenerfassung?",
    "a": [
     "einen neuen Kundendatensatz anlegen, ohne vorher zu prüfen, ob der Kunde schon gespeichert ist",
     "Pflichtfelder in der Eingabemaske vollständig ausfüllen",
     "das Geburtsdatum statt des Alters erfassen",
     "widersprüchliche Angaben vor dem Speichern klären",
     "den Straßennamen vom Kunden buchstabieren lassen und korrekt schreiben"
    ],
    "c": 0,
    "e": "Grundsätze laut Buch: Richtigkeit, Vollständigkeit, Redundanzvermeidung, Zeitstabilität, Konsistenz. Ein neuer Datensatz ohne Dublettenprüfung verletzt die Redundanzvermeidung – der Kunde erhielte z. B. jede Werbung doppelt.",
    "k": "Datenmanagement",
    "s": "LF5 2.2"
   },
   {
    "tg": 2,
    "g": "umsatz-bestand",
    "src": "ZP F21/16",
    "t": "mc",
    "q": "Die Dialogfix GmbH will den Umsatz mit Bestandskunden im nächsten Jahr steigern. Welche Maßnahme ist dafür am wenigsten geeignet?",
    "a": [
     "die Mindestvertragslaufzeit für alle Neuverträge deutlich verlängern",
     "passendes Zubehör zum gekauften Gerät aktiv anbieten (Cross-Selling)",
     "höherwertige Tarife empfehlen (Up-Selling)",
     "Kunden mit auslaufendem Vertrag ein Verlängerungsangebot machen",
     "ein Kundenclub-Programm mit Bonuspunkten einführen"
    ],
    "c": 0,
    "e": "Eine längere Mindestlaufzeit bringt keinen zusätzlichen Umsatz, sondern erschwert eher Abschlüsse. Cross-Selling (zusätzliches Produkt) und Up-Selling (höherwertiges Produkt) erhöhen den Umsatz je Kunde; Verlängerungsangebote und Kundenclubs binden Kunden.",
    "k": "Kundenbindung",
    "s": "LF5 3.3"
   },
   {
    "tg": 2,
    "g": "lcq-def",
    "src": "ZP F21/17",
    "t": "mc",
    "q": "Welche Anrufe fließen in die Lost-Call-Quote ein?",
    "a": [
     "Anrufe, bei denen der Anrufer auflegt, bevor ein Agent das Gespräch annimmt",
     "Anrufe, deren Anliegen beim ersten Kontakt nicht gelöst wurde",
     "Anrufe, die länger als 20 Sekunden in der Warteschleife waren",
     "Outbound-Anwahlen, bei denen niemand erreicht wurde",
     "Anrufe, die an einen anderen Standort weitergeleitet wurden"
    ],
    "c": 0,
    "e": "Lost Calls (Abandoned Calls, „Aufleger“) = Anrufer legt vor der Annahme auf. Nicht beim ersten Kontakt gelöst → FCR; Wartezeit-Grenze → Servicelevel; erfolglose Anwahl → Bruttokontakt im Outbound; Weiterleitung → Overflow.",
    "k": "Kennzahlen",
    "s": "LF5 5.1.3"
   },
   {
    "tg": 2,
    "g": "servicelevel-def",
    "src": "ZP F21/18",
    "t": "mc",
    "q": "Ein Auftraggeber verlangt einen Servicelevel von 80/20. Was bedeutet das?",
    "a": [
     "80 % der Anrufe werden innerhalb von 20 Sekunden angenommen.",
     "20 % der Anrufe dürfen verloren gehen.",
     "80 % der Anliegen werden beim ersten Anruf gelöst.",
     "Ein Agent führt 80 Gespräche in 20 Stunden.",
     "80 % der Arbeitszeit sind Gesprächszeit, 20 % Nachbearbeitung."
    ],
    "c": 0,
    "e": "Servicelevel = Prozentsatz der Anrufer / Zeitspanne bis zur Annahme; er misst die Erreichbarkeit. 80/20 ist der im Buch genannte Branchenstandard. Die übrigen Optionen beschreiben Lost-Call-Quote, FCR, Produktivität und Auslastung.",
    "k": "Kennzahlen",
    "s": "LF5 5.1.2"
   },
   {
    "tg": 2,
    "g": "kuendigung-reaktion",
    "src": "ZP F21/19",
    "t": "mc",
    "q": "Ein langjähriger Kunde hat seinen Wartungsvertrag schriftlich gekündigt. Welche Maßnahme dient am ehesten der Kundenbindung?",
    "a": [
     "Den Kunden anrufen, den Kündigungsgrund erfragen und ihm ein passendes Angebot machen.",
     "Die Kündigung kommentarlos bestätigen und alle Kundendaten sofort löschen.",
     "Dem Kunden zur Sicherheit einen Mahnbescheid schicken.",
     "Den Kunden in den Werbeverteiler für Neukunden aufnehmen.",
     "Die Kündigung ignorieren, bis sich der Kunde erneut meldet."
    ],
    "c": 0,
    "e": "Haltegespräch (LF5 4.2): Bedauern ausdrücken, Kündigungsgrund ermitteln, emotionale Ebene klären, kulantes Angebot mit Nutzen machen. Ohne den Grund zu kennen, lässt sich der Kunde nicht gezielt halten.",
    "k": "Kundenbindung",
    "s": "LF5 4.2"
   },
   {
    "tg": 2,
    "g": "schufa-anlass",
    "src": "ZP F21/20",
    "t": "mc",
    "q": "In welchem Fall ist eine SCHUFA-Auskunft vor Vertragsabschluss sachlich gerechtfertigt?",
    "a": [
     "Eine Kundin schließt einen Mobilfunkvertrag mit 24 Monaten Laufzeit und monatlicher Abrechnung ab.",
     "Ein Kunde bestellt eine Druckerpatrone per Nachnahme.",
     "Ein Kunde zahlt einen Drucker per Vorauskasse.",
     "Eine Kundin erkundigt sich nur nach dem Preis eines Druckers.",
     "Ein Kunde tauscht einen defekten Artikel innerhalb der Garantie um."
    ],
    "c": 0,
    "e": "Eine Bonitätsprüfung ist dort sinnvoll, wo das Unternehmen vorleistet und damit einen Kredit gewährt – z. B. bei laufend nachträglich abgerechneten Leistungen wie Mobilfunk. Bei Nachnahme und Vorauskasse besteht kein Zahlungsrisiko.",
    "k": "Zahlungsverkehr",
    "s": "LF5 6.1"
   },
   {
    "tg": 2,
    "g": "zahlart-lastschrift",
    "src": "ZP F21/21",
    "t": "mc",
    "q": "Die Dialogfix GmbH möchte monatlich unterschiedlich hohe Nutzungsentgelte ihrer Stammkunden schnell und mit geringem Aufwand einziehen. Welche Zahlungsart ist geeignet?",
    "a": [
     "SEPA-Lastschriftverfahren",
     "Dauerauftrag des Kunden",
     "Nachnahme",
     "Bareinzahlung zugunsten Dritter",
     "Überweisung nach Rechnungserhalt"
    ],
    "c": 0,
    "e": "Beim Lastschriftverfahren zieht der Gläubiger den Betrag mit Einzugsermächtigung selbst ein – ideal bei regelmäßigen Zahlungen in unterschiedlicher Höhe; das Unternehmen bestimmt den Zahlungszeitpunkt. Abgrenzung: Ein Dauerauftrag überweist nur gleichbleibende Beträge und wird vom Kunden gesteuert.",
    "k": "Zahlungsverkehr",
    "s": "LF5 6.2.3"
   },
   {
    "tg": 2,
    "g": "beschwerde-ursachen",
    "src": "ZP F21/22",
    "t": "mc",
    "q": "Kunden beschweren sich über lange Wartezeiten, eine teure Servicenummer und mangelnde Fachkenntnis der Agents. Welche Maßnahmenkombination setzt an allen drei Ursachen an?",
    "a": [
     "kostenfreie 0800-Nummer, Personaleinsatzplanung nach Anrufaufkommen, Produktschulungen",
     "neue Warteschleifenmusik, Umstellung auf eine 0900-Nummer, kürzere Meldeformel",
     "IVR-Menü um drei Ebenen erweitern, Servicezeiten verkürzen, Leitfaden abschaffen",
     "Servicelevel von 80/20 auf 60/60 senken und Schulungen streichen",
     "nur noch Kontakt per E-Mail anbieten"
    ],
    "c": 0,
    "e": "Jede Ursache braucht eine passende Maßnahme: Kosten → kostenfreie 0800-Rufnummer; Wartezeit → Personaleinsatzplanung nach Forecast; Kompetenz → Schulung. Die übrigen Kombinationen verschärfen mindestens eine Ursache.",
    "k": "Beschwerden",
    "s": "LF5 4.1.1"
   },
   {
    "tg": 2,
    "g": "kundenkarte",
    "src": "ZP F21/23",
    "t": "mc",
    "q": "Welche Aussage über Kundenclubs und Kundenkarten trifft NICHT zu?",
    "a": [
     "Die Kundenkarte liefert dem Unternehmen keine zusätzlichen Informationen über den Kunden.",
     "Mitglieder können beim Einkauf Bonuspunkte sammeln.",
     "Mitglieder erhalten Informationen zu neuen Produkten oft früher.",
     "Die Mitgliedschaft kann kostenlos oder kostenpflichtig sein.",
     "Kundenkarten können mit einer Zahlungsfunktion ausgestattet sein."
    ],
    "c": 0,
    "e": "Laut Buch ist der Kundenclub gerade eine hervorragende Möglichkeit, weitere Informationen über den Kunden zu gewinnen. Bonuspunkte, früher Zugang zu Neuheiten, kostenlose oder kostenpflichtige Mitgliedschaft und Zahlungsfunktion sind dort genannt.",
    "k": "Kundenbindung",
    "s": "LF5 3.3"
   },
   {
    "tg": 2,
    "g": "kundenbindung-instrument",
    "src": "ZP F21/24",
    "t": "mc",
    "q": "Welches der folgenden Instrumente dient der Kundenbindung?",
    "a": [
     "ein regelmäßig erscheinendes Kundenmagazin",
     "ein Spamfilter",
     "eine Suchmaschine",
     "eine Firewall",
     "ein Predictive Dialer"
    ],
    "c": 0,
    "e": "Kundenmagazine erinnern den Kunden regelmäßig positiv an das Unternehmen (LF5 3.3), ebenso Kundenclubs, Gutscheine, Coupon- und Rabattaktionen. Die übrigen Optionen sind technische Hilfsmittel ohne Bindungswirkung.",
    "k": "Kundenbindung",
    "s": "LF5 3.3"
   },
   {
    "tg": 3,
    "g": "strat-operativ",
    "src": "ZP F21/25",
    "t": "match",
    "q": "Ordnen Sie die Entscheidungen der Dialogfix GmbH zu.",
    "pairs": [
     [
      "Aufbau eines zweiten Standorts innerhalb von drei Jahren",
      "strategische Entscheidung"
     ],
     [
      "Überstunden am Freitagnachmittag wegen unerwartet vieler Anrufe",
      "operative Entscheidung"
     ],
     [
      "Aufnahme eines neuen Geschäftsfelds",
      "strategische Entscheidung"
     ],
     [
      "zwei Kollegen helfen für eine Woche im Nachbarteam aus",
      "operative Entscheidung"
     ],
     [
      "Auslagerung der gesamten Schriftkorrespondenz an einen Dienstleister ab nächstem Jahr",
      "strategische Entscheidung"
     ]
    ],
    "e": "Strategische Entscheidungen wirken langfristig auf das ganze Unternehmen (Standorte, Geschäftsfelder, Outsourcing). Operative Entscheidungen betreffen das kurzfristige Tagesgeschäft (Überstunden, Aushilfe).",
    "k": "Entscheidungsmethoden",
    "s": "LF1 1.1.2"
   },
   {
    "tg": 3,
    "g": "ablage-intern",
    "src": "ZP F21/26",
    "t": "mc",
    "q": "Das Protokoll des Teammeetings soll allen Kolleginnen und Kollegen digital, aber nur intern zur Verfügung stehen. Wo legen Sie es ab?",
    "a": [
     "auf dem Abteilungslaufwerk im Firmennetz bzw. im Intranet",
     "auf der öffentlichen Unternehmenswebsite",
     "im Social-Media-Kanal des Unternehmens",
     "ausgedruckt am Schwarzen Brett im Besucherbereich",
     "auf Ihrem privaten USB-Stick"
    ],
    "c": 0,
    "e": "Das Intranet bzw. ein Netzlaufwerk ist ein geschlossenes Netz für einen eingeschränkten Nutzerkreis. Website und Social Media sind öffentlich; ein privater Datenträger widerspricht den IT-Richtlinien.",
    "k": "Information & Lernen",
    "s": "LF1 5.2"
   },
   {
    "tg": 3,
    "g": "entscheidungsmatrix",
    "src": "ZP F21/27",
    "t": "calc",
    "x": "Gewichtete Entscheidungsmatrix Teamleitung (Punkte 1 = schlecht bis 5 = sehr gut)\nKriterium (Gewicht): K1 / K2 / K3 / K4\nFachwissen (25 %): 4 / 3 / 5 / 4\nKommunikation (30 %): 3 / 5 / 3 / 4\nFührungserfahrung (20 %): 2 / 4 / 3 / 3\nBerufserfahrung (15 %): 5 / 3 / 4 / 3\nZeugnisse (10 %): 4 / 4 / 5 / 3",
    "q": "Welche gewichtete Gesamtpunktzahl erreicht der beste Kandidat?",
    "ans": [
     "3,90",
     "3,9"
    ],
    "unit": "Punkte",
    "hint": "Punkte × Gewicht je Kriterium, dann addieren. Zwei Nachkommastellen.",
    "e": "K1: 1,00 + 0,90 + 0,40 + 0,75 + 0,40 = 3,45 · K2: 0,75 + 1,50 + 0,80 + 0,45 + 0,40 = 3,90 · K3: 1,25 + 0,90 + 0,60 + 0,60 + 0,50 = 3,85 · K4: 1,00 + 1,20 + 0,60 + 0,45 + 0,30 = 3,55. Kandidat 2 liegt knapp vor Kandidat 3 – ohne Gewichtung (19 gegen 20 Punkte) wäre Kandidat 3 vorn.",
    "k": "Entscheidungsmethoden",
    "s": "LF1 1.1.2"
   },
   {
    "tg": 3,
    "g": "gruppenarbeit",
    "src": "ZP F21/28",
    "t": "mc",
    "q": "Welche Aussage über Gruppenarbeit trifft NICHT zu?",
    "a": [
     "Gruppenarbeit führt grundsätzlich zu besonders schnellen Entscheidungen.",
     "Unterschiedliche Sichtweisen fließen in die Lösung ein.",
     "Es besteht die Gefahr, dass sich Einzelne zurückziehen (Trittbrettfahrer).",
     "Vereinbarte Regeln erhöhen die Erfolgsaussichten.",
     "Am Ende steht eine Abschlussbetrachtung der Arbeitsweise der Gruppe."
    ],
    "c": 0,
    "e": "Gruppenarbeit durchläuft mehrere Phasen (Ziel, Prüfung, Lösungsvorschläge, Auswahl, Umsetzung, Abschlussbetrachtung) und ist gerade nicht die schnellste Entscheidungsform. Trittbrettfahrer, Regeln und Abschlussbetrachtung nennt das Buch ausdrücklich.",
    "k": "Information & Lernen",
    "s": "LF1 6.3"
   },
   {
    "tg": 3,
    "g": "diagramm-art",
    "src": "ZP F21/29",
    "t": "mc",
    "q": "Sie sollen darstellen, wie sich der Gesamtumsatz auf fünf Produktgruppen verteilt. Welche Diagrammart wählen Sie?",
    "a": [
     "Kreisdiagramm",
     "Kurvendiagramm",
     "Säulendiagramm",
     "Tabelle",
     "Organigramm"
    ],
    "c": 0,
    "e": "Kreisdiagramm = Anteile an einem Gesamtwert (Umsatzanteile, Marktanteile). Kurvendiagramm = Entwicklung über die Zeit, Säulendiagramm = Größenvergleich, Tabelle = exakte Werte/Rangfolgen.",
    "k": "Präsentation",
    "s": "LF2 3.2"
   },
   {
    "tg": 3,
    "g": "lerntypen",
    "src": "ZP F21/30",
    "t": "match",
    "q": "Ordnen Sie die Lernstrategien dem passenden Lerntyp zu.",
    "pairs": [
     [
      "hört sich Vorträge und Podcasts zum Thema an",
      "auditiver Lerntyp"
     ],
     [
      "probiert die Situation im Rollenspiel selbst aus",
      "motorischer Lerntyp"
     ],
     [
      "erarbeitet den Stoff in der Diskussion mit anderen",
      "kommunikativer Lerntyp"
     ],
     [
      "zeichnet eine Mindmap mit Farben und Symbolen",
      "visueller Lerntyp"
     ],
     [
      "spricht Merksätze beim Lernen laut mit",
      "auditiver Lerntyp"
     ]
    ],
    "e": "Buch LF1 6.8: visuell = Bilder, Grafiken, Lesen; auditiv = Vorträge, lautes Vorlesen, Mitsprechen; kommunikativ = Austausch, Diskussion, Gruppenarbeit; motorisch = Nachmachen, Ausprobieren („Learning by doing“). Meist treten Mischformen auf.",
    "k": "Information & Lernen",
    "s": "LF1 6.8"
   },
   {
    "tg": 3,
    "g": "arbeitsplatz-recht",
    "src": "ZP F21/31",
    "t": "mc",
    "q": "Welche Vorschrift ist für die Gestaltung eines Bildschirmarbeitsplatzes NICHT maßgeblich?",
    "a": [
     "Arbeitszeitgesetz",
     "Arbeitsstättenverordnung",
     "Arbeitsschutzgesetz",
     "Unfallverhütungsvorschriften der Berufsgenossenschaft",
     "Technische Regeln für Arbeitsstätten (ASR)"
    ],
    "c": 0,
    "e": "Das Arbeitszeitgesetz regelt Dauer, Pausen und Ruhezeiten der Arbeit, nicht die Einrichtung des Arbeitsplatzes. Maßgeblich sind ArbSchG, ArbStättV mit den ASR und die Vorschriften der Berufsgenossenschaft.",
    "k": "Arbeitsplatz",
    "s": "LF1 4"
   },
   {
    "tg": 3,
    "g": "telefonkonferenz",
    "src": "ZP F21/32",
    "t": "mc",
    "q": "Welche Regel gilt für die Teilnahme an einer Telefonkonferenz?",
    "a": [
     "Fragen notieren und erst stellen, wenn der Konferenzleiter dazu auffordert.",
     "Sofort unterbrechen, sobald eine Frage auftaucht.",
     "Möglichst ausführlich sprechen, damit alle Details ankommen.",
     "Leise sprechen, um die anderen nicht zu stören.",
     "Nebenbei E-Mails beantworten, da man nicht gesehen wird."
    ],
    "c": 0,
    "e": "Buchregeln: nur sprechen, wenn der Konferenzleiter auffordert; niemanden unterbrechen; Fragen notieren; laut und deutlich sprechen; aufs Wesentliche beschränken; aufmerksam zuhören.",
    "k": "Kommunikationsmedien",
    "s": "LF4 1.1.1"
   },
   {
    "tg": 3,
    "g": "skill-routing",
    "src": "ZP F21/33",
    "t": "mc",
    "q": "Welchen Vorteil bietet das Skill Based Routing der ACD?",
    "a": [
     "Der Anrufer wird mit dem Agent verbunden, dessen Fähigkeiten am besten zu seinem Anliegen passen.",
     "Der Anruf geht an den Agent, der am längsten kein Gespräch hatte.",
     "Die Rufnummer des Anrufers wird an die Anlage übermittelt.",
     "Die Kundendaten erscheinen schon beim Klingeln auf dem Bildschirm.",
     "Der Anrufer steuert über die Telefontastatur ein Sprachmenü."
    ],
    "c": 0,
    "e": "Skill Based Routing verteilt Anrufe nach den Fähigkeiten (Skills) der Agents, z. B. Englischkenntnisse. Abgrenzung: Longest Idle = Standardverteilung der ACD, Rufnummernübermittlung = ANI, Bildschirmanzeige = CTI, Sprachmenü = IVR.",
    "k": "Branchentechnik",
    "s": "LF4 1.2.2"
   },
   {
    "tg": 3,
    "g": "ocr",
    "src": "ZP F21/34",
    "t": "mc",
    "q": "Wofür setzt die Dialogfix GmbH OCR-Software ein?",
    "a": [
     "Eingescannte Kundenbriefe werden in bearbeitbaren Text umgewandelt.",
     "Verdächtige Dateien werden in die Quarantäne verschoben.",
     "Eingehende Anrufe werden automatisch verteilt.",
     "Kundendatenbanken werden verschlüsselt.",
     "Webseiten werden im Browser dargestellt."
    ],
    "c": 0,
    "e": "OCR (Optical Character Recognition) erkennt Zeichen auf eingescannten Vorlagen und überträgt sie in digitale Form – Grundlage z. B. eines Dokumenten-Management-Systems.",
    "k": "Software",
    "s": "LF4 2.2"
   },
   {
    "tg": 3,
    "g": "cloud",
    "src": "ZP F21/35",
    "t": "mc",
    "q": "Die Dialogfix GmbH verlagert Speicherplatz und Office-Programme in ein entferntes Rechenzentrum und greift über das Internet darauf zu. Wie nennt man das?",
    "a": [
     "Cloud-Computing",
     "Unified Messaging",
     "Peer-to-Peer-Netzwerk",
     "Intranet",
     "Call Blending"
    ],
    "c": 0,
    "e": "Cloud-Computing = Auslagern von IT-Infrastruktur (Speicher, Software, Rechenleistung) ins Internet bzw. in ein entferntes Rechenzentrum; Zugriff von überall, gemeinsames Bearbeiten von Dokumenten möglich.",
    "k": "Software",
    "s": "LF4 2.2"
   },
   {
    "tg": 3,
    "g": "db-abfrage-summe",
    "src": "ZP F21/36",
    "t": "mc",
    "x": "Relationale Datenbank eines Sportartikelhändlers\nLieferanten (Lief-Nr. | Firma | Ansprechpartner): L1 Sport-Rapid GmbH, Frau Arslan · L2 Ballwerk KG, Herr Brandt · L3 Laufstark AG, Frau Cordes\nArtikel (Art-Nr. | Bezeichnung | Preis | Lieferzeit): A10 Fußball 25,00 € 3 Tage · A20 Laufschuh 80,00 € 7 Tage · A30 Trikot 40,00 € 5 Tage · A40 Trinkflasche 8,00 € 2 Tage\nBestellungen (Best-Nr. | Datum | Lief-Nr. | Art-Nr. | Menge): B1 02.05. L1 A10 40 · B2 02.05. L2 A30 30 · B3 03.05. L3 A20 10 · B4 06.05. L1 A40 100 · B5 06.05. L2 A10 20",
    "q": "Bei welchem Lieferanten ist der Bestellwert insgesamt am geringsten?",
    "a": [
     "Laufstark AG",
     "Sport-Rapid GmbH",
     "Ballwerk KG",
     "Sport-Rapid GmbH und Ballwerk KG gleichauf",
     "Der Wert lässt sich aus den Tabellen nicht ermitteln."
    ],
    "c": 0,
    "e": "Tabellen über Art-Nr. verknüpfen, Menge × Preis: L1 = 40 · 25 + 100 · 8 = 1.800 € · L2 = 30 · 40 + 20 · 25 = 1.700 € · L3 = 10 · 80 = 800 €. Der niedrigste Wert entfällt auf die Laufstark AG.",
    "k": "Datenbanken",
    "s": "LF4 4.3"
   },
   {
    "tg": 3,
    "g": "db-abfrage-datum",
    "src": "ZP F21/37",
    "t": "multi",
    "x": "Artikel (Art-Nr. | Lieferzeit): A10 3 Tage · A20 7 Tage · A30 5 Tage · A40 2 Tage\nBestellungen (Best-Nr. | Datum | Art-Nr.): B1 02.05. A10 · B2 02.05. A30 · B3 03.05. A20 · B4 06.05. A40 · B5 06.05. A10\nLiefertag = Bestelldatum + Lieferzeit in Kalendertagen",
    "q": "Welche drei Bestellungen treffen spätestens am 08.05. ein?",
    "a": [
     "B1",
     "B2",
     "B4",
     "B3",
     "B5",
     "keine der Bestellungen"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "B1: 02.05. + 3 = 05.05. · B2: 02.05. + 5 = 07.05. · B4: 06.05. + 2 = 08.05. · B3: 03.05. + 7 = 10.05. · B5: 06.05. + 3 = 09.05. Nur B1, B2 und B4 liegen bis einschließlich 08.05.",
    "k": "Datenbanken",
    "s": "LF4 4.3"
   },
   {
    "tg": 3,
    "g": "fremdschluessel",
    "src": "ZP F21/38",
    "t": "mc",
    "x": "Tabelle Bestellungen: Best-Nr. | Datum | Lief-Nr. | Art-Nr. | Menge\nTabelle Lieferanten: Lief-Nr. | Firma | Ansprechpartner",
    "q": "Welches Feld ist in der Tabelle „Bestellungen“ ein Fremdschlüssel?",
    "a": [
     "Lief-Nr.",
     "Best-Nr.",
     "Datum",
     "Menge",
     "Firma"
    ],
    "c": 0,
    "e": "Ein Fremdschlüssel ist der Primärschlüssel einer anderen Tabelle, der zur Verknüpfung übernommen wird: Lief-Nr. (und ebenso Art-Nr.) verweisen auf die Tabellen Lieferanten und Artikel. Best-Nr. ist der Primärschlüssel der Bestellungen; „Firma“ steht nur in der Tabelle Lieferanten.",
    "k": "Datenbanken",
    "s": "LF4 4.3"
   },
   {
    "tg": 3,
    "g": "db-prozent",
    "src": "ZP F21/39",
    "t": "calc",
    "x": "Bestellungen bei der Sport-Rapid GmbH (Ansprechpartnerin Frau Arslan): 40 Fußbälle zu je 25,00 € und 100 Trinkflaschen zu je 8,00 € (Nettopreise).",
    "q": "Der Lieferant berechnet Lieferkosten von 3,5 % des Nettobestellwerts. Wie hoch sind die Lieferkosten?",
    "ans": [
     "63,00",
     "63"
    ],
    "unit": "€",
    "hint": "Auf zwei Nachkommastellen.",
    "e": "Nettobestellwert = 40 · 25,00 + 100 · 8,00 = 1.800,00 €. Lieferkosten = 1.800,00 · 3,5 / 100 = 63,00 €. Probe: 63 / 1.800 = 0,035.",
    "k": "Datenbanken",
    "s": "LF4 4.3"
   },
   {
    "tg": 3,
    "g": "schutz-physikalisch",
    "src": "ZP F21/40",
    "t": "mc",
    "q": "Welche Maßnahme gehört NICHT zum physikalischen Schutz der EDV-Anlage?",
    "a": [
     "Spamfilter im E-Mail-Programm",
     "unterbrechungsfreie Stromversorgung (USV)",
     "Spiegelung der Festplatte auf ein Parallelsystem",
     "Zugangskontrolle zum Serverraum per Code und Video",
     "Rauchverbot im Serverraum"
    ],
    "c": 0,
    "e": "Physikalischer Schutz (LF4 5.2.6) richtet sich gegen Umwelteinflüsse und Manipulation: USV, Parallelsysteme, abgeschlossene Räume, Zugangskontrollen, Klimatisierung, Rauchverbot. Der Spamfilter ist eine Softwaremaßnahme gegen unerwünschte E-Mails.",
    "k": "Datensicherheit",
    "s": "LF4 5.2.6"
   },
   {
    "tg": 3,
    "g": "personenbezogen",
    "src": "ZP F21/41",
    "t": "mc",
    "q": "Welche Angabe ist ein personenbezogenes Datum im Sinne der DSGVO?",
    "a": [
     "das Geburtsdatum einer Mitarbeiterin",
     "der Jahresumsatz der Dialogfix GmbH",
     "die Stellenbeschreibung „Teamleiter Inbound“",
     "die durchschnittliche AHT der Abteilung",
     "die Handelsregisternummer der GmbH"
    ],
    "c": 0,
    "e": "Personenbezogen sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen. Unternehmenskennzahlen und Daten juristischer Personen fallen nicht unter den Schutz.",
    "k": "Datenschutz",
    "s": "LF4 6.1"
   },
   {
    "tg": 3,
    "g": "cookie",
    "src": "ZP F21/42",
    "t": "mc",
    "q": "Welcher Vorgang ist für die Datensicherheit am wenigsten gefährlich?",
    "a": [
     "Ein Cookie speichert die gewählte Sprache einer Website auf dem Rechner.",
     "Ein Trojaner späht unbemerkt Zugangsdaten aus.",
     "Ein Wurm verbreitet sich selbstständig im Firmennetz.",
     "Eine Phishing-Mail fordert zur Eingabe des Passworts auf.",
     "Ransomware verschlüsselt die Daten der Festplatte."
    ],
    "c": 0,
    "e": "Das Buch stuft Cookies als eher harmlos ein; sie speichern Einstellungen oder Anmeldedaten (Risiko: Nutzerprofile). Trojaner, Würmer, Phishing und Ransomware sind echte Bedrohungen.",
    "k": "Datensicherheit",
    "s": "LF4 5.1"
   },
   {
    "tg": 4,
    "g": "gmbh-merkmal",
    "src": "ZP F21/43",
    "t": "mc",
    "q": "Welche Aussage zur GmbH trifft zu?",
    "a": [
     "Das Stammkapital beträgt grundsätzlich mindestens 25.000 €.",
     "Die Gesellschafter haften unbeschränkt mit ihrem Privatvermögen.",
     "Die GmbH wird in Abteilung A des Handelsregisters eingetragen.",
     "Geschäftsführer müssen immer zugleich Gesellschafter sein.",
     "Die Zahl der Gesellschafter ist auf fünf begrenzt."
    ],
    "c": 0,
    "e": "GmbH: Stammkapital mind. 25.000 €, Haftung nur mit dem Gesellschaftsvermögen, Eintrag in Abteilung B (Kapitalgesellschaften), Geschäftsführer können angestellt sein, Gesellschafterzahl unbegrenzt.",
    "k": "Recht",
    "s": "LF1 1.3.3"
   },
   {
    "tg": 4,
    "g": "gmbh-vertretung",
    "src": "ZP F21/44",
    "t": "mc",
    "q": "Die Dialogfix GmbH kauft ein Bürogebäude. Wer vertritt die GmbH bei diesem Geschäft nach außen?",
    "a": [
     "die Geschäftsführer",
     "die Gesellschafterversammlung",
     "der Vorstand",
     "die Komplementäre",
     "der Betriebsrat"
    ],
    "c": 0,
    "e": "Die Geschäftsführer treffen die unternehmerischen Entscheidungen und vertreten die GmbH nach außen. Die Gesellschafterversammlung ist das oberste Organ der internen Willensbildung; Vorstand = AG, Komplementäre = KG.",
    "k": "Recht",
    "s": "LF1 1.3.3"
   },
   {
    "tg": 4,
    "g": "gmbh-gewinn",
    "src": "ZP F21/45",
    "t": "calc",
    "x": "Gesellschafter der Kontakt-Plus GmbH und ihre Geschäftsanteile: Aydin 40.000 € · Bauer 25.000 € · Claßen 15.000 €. Der Gesellschaftsvertrag enthält keine Regelung zur Gewinnverteilung. Die Gesellschafterversammlung beschließt, 48.000 € auszuschütten.",
    "q": "Welchen Gewinnanteil erhält Bauer?",
    "ans": [
     "15.000,00",
     "15.000",
     "15000",
     "15000,00"
    ],
    "unit": "€",
    "e": "Ohne Regelung im Vertrag wird nach dem Verhältnis der Geschäftsanteile verteilt. Stammkapital 80.000 €; Anteil Bauer 25.000 / 80.000 = 31,25 %; 48.000 · 31,25 % = 15.000 €. Probe: Aydin 24.000 + Bauer 15.000 + Claßen 9.000 = 48.000 €.",
    "k": "Recht",
    "s": "LF1 1.3.3"
   },
   {
    "tg": 4,
    "g": "gewerbeaufsicht",
    "src": "ZP F21/46",
    "t": "mc",
    "q": "Welche Aufgabe gehört NICHT zur staatlichen Gewerbeaufsicht?",
    "a": [
     "Ausbildungsbetriebe und Azubis zur Durchführung der Ausbildung beraten",
     "die Einhaltung des Jugendarbeitsschutzgesetzes überwachen",
     "Arbeitsschutzbestimmungen in Betrieben kontrollieren",
     "die Einhaltung von Umweltschutzbestimmungen überwachen",
     "die Einhaltung von Arbeitszeitvorschriften kontrollieren"
    ],
    "c": 0,
    "e": "Die Beratung zur Ausbildung ist Aufgabe der IHK als zuständiger Stelle nach BBiG (Ausbildungsberater). Die Gewerbeaufsicht überwacht Schutzgesetze wie JArbSchG, Arbeitsschutz- und Umweltschutzbestimmungen.",
    "k": "Institutionen",
    "s": "LF1 1.4"
   },
   {
    "tg": 4,
    "g": "bbig11",
    "src": "ZP F21/47",
    "t": "mc",
    "q": "Was muss nach § 11 BBiG mindestens im Ausbildungsvertrag geregelt sein?",
    "a": [
     "die Dauer der Probezeit",
     "die Lage der Mittagspause",
     "die Termine des Betriebsurlaubs",
     "der Name der Berufsschullehrerin",
     "eine Zusage zur Übernahme nach der Ausbildung"
    ],
    "c": 0,
    "e": "§ 11 BBiG verlangt u. a. Art/Ziel und Gliederung, Beginn und Dauer, Maßnahmen außerhalb der Ausbildungsstätte, tägliche Ausbildungszeit, Dauer der Probezeit, Zahlung und Höhe der Vergütung, Urlaubsdauer, Kündigungsvoraussetzungen und einen Hinweis auf Tarifverträge.",
    "k": "BBiG",
    "s": "LF1 2.1.2"
   },
   {
    "tg": 4,
    "g": "probezeit-kuendigung",
    "src": "ZP F21/48",
    "t": "mc",
    "q": "Ein Auszubildender möchte sein Ausbildungsverhältnis während der Probezeit beenden. Was gilt?",
    "a": [
     "Er kann jederzeit ohne Einhaltung einer Frist und ohne Angabe von Gründen schriftlich kündigen.",
     "Er muss eine Frist von vier Wochen zum Monatsende einhalten.",
     "Er kann nur mit Zustimmung der IHK kündigen.",
     "Er kann nur aus einem wichtigen Grund kündigen.",
     "Eine mündliche Kündigung gegenüber dem Ausbilder genügt."
    ],
    "c": 0,
    "e": "§ 22 BBiG: In der Probezeit (1 bis 4 Monate) können beide Seiten jederzeit ohne Angabe von Gründen kündigen. Die Kündigung muss schriftlich erfolgen (§ 22 Abs. 3 BBiG – Schriftform ergänzt aus dem Gesetz). Nach der Probezeit gilt der wichtige Grund bzw. für den Azubi die Vier-Wochen-Frist bei Berufsaufgabe.",
    "k": "BBiG",
    "s": "LF1 2.1.4"
   },
   {
    "tg": 4,
    "g": "probezeit-datum",
    "src": "ZP F21/49",
    "t": "type",
    "x": "Ausbildungsbeginn: 01.08.2026 · vereinbarte Probezeit: 3 Monate. Die Auszubildende übergibt am Dienstag, 13.10.2026, ihre schriftliche Kündigung.",
    "q": "An welchem Tag endet das Ausbildungsverhältnis? (Datum TT.MM.JJJJ)",
    "ans": [
     "13.10.2026",
     "13.10.26",
     "13.10.",
     "13.10"
    ],
    "e": "Die Kündigung erfolgt innerhalb der Probezeit (bis 31.10.2026) und ist damit fristlos möglich – das Ausbildungsverhältnis endet mit Zugang am 13.10.2026. Eine Frist bis zum Ende der Probezeit oder bis Monatsende gibt es nicht.",
    "k": "BBiG",
    "s": "LF1 2.1.4"
   },
   {
    "tg": 4,
    "g": "ausbildungsrahmenplan",
    "src": "ZP F21/50",
    "t": "mc",
    "q": "Wo findet die Ausbilderin die sachliche und zeitliche Gliederung der Kenntnisse und Fertigkeiten für den betrieblichen Teil der Ausbildung?",
    "a": [
     "im Ausbildungsrahmenplan",
     "im Rahmenlehrplan",
     "im Ausbildungsberufsbild",
     "im Berufsbildungsgesetz",
     "im Ausbildungsvertrag"
    ],
    "c": 0,
    "e": "Der Ausbildungsrahmenplan ist Teil der Ausbildungsordnung und gliedert die betriebliche Ausbildung sachlich und zeitlich. Verwechslungsgefahr: Der Rahmenlehrplan (KMK) regelt den Berufsschulunterricht; das Berufsbild gibt nur einen Kurzüberblick.",
    "k": "Ausbildung",
    "s": "LF1 2.1.1"
   },
   {
    "tg": 4,
    "g": "entgelt-uv",
    "src": "ZP F21/51",
    "t": "mc",
    "q": "Welcher Beitrag wird bei der Abrechnung der Ausbildungsvergütung NICHT als Arbeitnehmeranteil abgezogen?",
    "a": [
     "Beitrag zur gesetzlichen Unfallversicherung",
     "Beitrag zur Rentenversicherung",
     "Beitrag zur Krankenversicherung",
     "Beitrag zur Pflegeversicherung",
     "Beitrag zur Arbeitslosenversicherung"
    ],
    "c": 0,
    "e": "Die gesetzliche Unfallversicherung (Träger: Berufsgenossenschaften) wird allein vom Arbeitgeber finanziert. Renten-, Kranken-, Pflege- und Arbeitslosenversicherung zahlen Arbeitgeber und Arbeitnehmer grundsätzlich je zur Hälfte.",
    "k": "Sozialversicherung",
    "s": "LF1 2.4.1"
   },
   {
    "tg": 4,
    "g": "jav-aufgabe",
    "src": "ZP F21/52",
    "t": "mc",
    "q": "Welche Aufgabe hat die Jugend- und Auszubildendenvertretung (JAV)?",
    "a": [
     "Sie überwacht die Einhaltung von Vorschriften und Vereinbarungen zugunsten der Jugendlichen und Auszubildenden.",
     "Sie handelt mit dem Arbeitgeberverband die Ausbildungsvergütung aus.",
     "Sie korrigiert die Berichtshefte der Auszubildenden.",
     "Sie führt die Zwischenprüfung durch.",
     "Sie ersetzt den Betriebsrat in Betrieben ohne Betriebsrat."
    ],
    "c": 0,
    "e": "Die JAV vertritt Jugendliche unter 18 und Azubis unter 25, überwacht Vorschriften zu ihren Gunsten und stellt Anträge über den Betriebsrat. Sie kann nur gewählt werden, wenn ein Betriebsrat besteht; Tarife verhandeln Gewerkschaften, Prüfungen nimmt die IHK ab.",
    "k": "Mitbestimmung",
    "s": "LF1 2.3.2"
   },
   {
    "tg": 4,
    "g": "haustarif",
    "src": "ZP F21/53",
    "t": "mc",
    "q": "Zwischen wem wird ein Haus- bzw. Firmentarifvertrag abgeschlossen?",
    "a": [
     "zwischen einem einzelnen Arbeitgeber und einer Gewerkschaft",
     "zwischen Arbeitgeberverband und Gewerkschaft",
     "zwischen Betriebsrat und Arbeitgeber",
     "zwischen IHK und Gewerkschaft",
     "zwischen Betriebsrat und Gewerkschaft"
    ],
    "c": 0,
    "e": "Tarifvertragsparteien sind einzelne Arbeitgeber oder Arbeitgeberverbände auf der einen und Gewerkschaften auf der anderen Seite. Mit einem einzelnen Unternehmen entsteht ein Haus-/Firmentarifvertrag, mit dem Verband ein Flächentarifvertrag. Betriebsrat + Arbeitgeber = Betriebsvereinbarung.",
    "k": "Mitbestimmung",
    "s": "LF1 2.3.4"
   },
   {
    "tg": 4,
    "g": "jarbschg-regeln",
    "src": "ZP F21/54",
    "t": "mc",
    "q": "Welche Regelung gilt nach dem Jugendarbeitsschutzgesetz für eine 16-jährige Auszubildende?",
    "a": [
     "Bei mehr als sechs Stunden Arbeitszeit stehen ihr mindestens 60 Minuten Ruhepause zu.",
     "Sie darf bis zu zehn Stunden täglich arbeiten.",
     "Die wöchentliche Höchstarbeitszeit beträgt 48 Stunden.",
     "Zwischen zwei Arbeitstagen genügt eine Freizeit von acht Stunden.",
     "Berufsschultage werden auf ihren Urlaub angerechnet."
    ],
    "c": 0,
    "e": "JArbSchG: höchstens 8 Stunden täglich (Ausnahme 8,5) und 40 Stunden wöchentlich; Ruhepausen 30 Minuten bei mehr als 4,5 bis 6 Stunden, 60 Minuten bei mehr als 6 Stunden. Die Freizeit zwischen zwei Arbeitstagen beträgt mindestens 12 Stunden (§ 13 JArbSchG, ergänzt aus dem Gesetz).",
    "k": "Schutzgesetze",
    "s": "LF1 2.2.1"
   },
   {
    "tg": 4,
    "g": "brandschutztuer",
    "src": "ZP F21/55",
    "t": "mc",
    "q": "Bei einer Begehung der Büroräume fallen Ihnen mehrere Punkte auf. Welcher ist ein erheblicher Brandschutzmangel?",
    "a": [
     "Eine Brandschutztür wird mit einem Holzkeil dauerhaft offen gehalten.",
     "Der Feuerlöscher hängt gut sichtbar im Flur.",
     "Der Flucht- und Rettungsplan zeigt den eigenen Standort.",
     "Das Notausgangsschild ist beleuchtet.",
     "Die Brandschutzordnung Teil A hängt aus."
    ],
    "c": 0,
    "e": "Feuerhemmende Brandschutztüren gehören zum baulichen Brandschutz; sie sollen im Brandfall die Ausbreitung von Feuer und Rauch in andere Brandabschnitte verhindern. Ein Keil setzt diese Funktion außer Kraft. Die übrigen Punkte sind vorgeschrieben bzw. richtig.",
    "k": "Arbeitsschutz",
    "s": "LF1 3.3"
   },
   {
    "tg": 4,
    "g": "ressourcen-buero",
    "src": "ZP F21/56",
    "t": "multi",
    "q": "Welche zwei Maßnahmen schonen im Büro Ressourcen?",
    "a": [
     "beidseitig kopieren und Recyclingpapier verwenden",
     "Bildschirme bei längerer Abwesenheit ausschalten",
     "Geräte über Nacht im Stand-by lassen, damit sie schneller starten",
     "Fenster dauerhaft gekippt lassen",
     "Bildschirmschoner einsetzen, um Strom zu sparen",
     "Einweggeschirr in der Teeküche anbieten"
    ],
    "cs": [
     0,
     1
    ],
    "e": "Buchtipps: beidseitig kopieren, Recyclingpapier (Blauer Engel), Bildschirme und Geräte ausschalten. Stand-by verbraucht weiter Strom, Bildschirmschoner steigern den Verbrauch sogar, Dauerkippen verschwendet Heizenergie.",
    "k": "Umweltschutz",
    "s": "LF1 3.4"
   },
   {
    "tg": 4,
    "g": "krwg-hierarchie",
    "src": "ZP F21/57",
    "t": "mc",
    "q": "Welche Maßnahme entspricht der obersten Stufe der Zielhierarchie des Kreislaufwirtschaftsgesetzes?",
    "a": [
     "Rundschreiben nur noch per Intranet statt ausgedruckt verteilen",
     "Altpapier sammeln und zu Recyclingpapier verarbeiten lassen",
     "Getränke in Pfandflaschen beziehen, die wiederbefüllt werden",
     "Restabfall in einer Anlage mit Wärmegewinnung verbrennen",
     "defekte Tonerkartuschen auf einer Sondermülldeponie entsorgen"
    ],
    "c": 0,
    "e": "Zielhierarchie KrWG: 1. Vermeidung, 2. Wiederverwendung, 3. Wiederverwertung (Recycling), 4. energetische Verwertung, 5. Beseitigung. Papier gar nicht erst zu drucken vermeidet Abfall – das Buch nennt genau dieses Intranet-Beispiel.",
    "k": "Umweltschutz",
    "s": "LF1 3.4"
   },
   {
    "tg": 4,
    "g": "verpackg",
    "src": "ZP F21/58",
    "t": "mc",
    "q": "Ein Lieferant bringt neue Büromöbel in Kartons und Folie. Welche Pflicht hat er nach dem Verpackungsgesetz?",
    "a": [
     "Er muss die Transport- und Umverpackungen zurücknehmen.",
     "Er muss die Verpackung in die Restmülltonne des Kunden werfen.",
     "Er muss die Möbel ohne jede Verpackung liefern.",
     "Er muss dem Kunden eine Abfallgebühr berechnen.",
     "Er muss die Verpackung verbrennen lassen."
    ],
    "c": 0,
    "e": "Das Verpackungsgesetz enthält die Rücknahmepflicht für Verpackungen und verpflichtet Handel und Hersteller, Verpackungsabfälle vorrangig zu vermeiden, sonst wiederzuverwenden oder zu recyceln.",
    "k": "Umweltschutz",
    "s": "LF1 3.4"
   },
   {
    "tg": 4,
    "g": "muelltrennung",
    "src": "ZP F21/59",
    "t": "mc",
    "q": "Wohin gehört ein zerbrochener Kaffeebecher aus Porzellan?",
    "a": [
     "in die graue Restmülltonne",
     "in den Altglascontainer",
     "in die gelbe Tonne",
     "in die blaue Tonne",
     "in die Biotonne"
    ],
    "c": 0,
    "e": "Porzellan ist nicht verwertbar und schadstofffrei → Restmüll. Altglas ist nur Behälterglas nach Farben getrennt; gelbe Tonne = Leichtverpackungen mit Grünem Punkt; blaue Tonne = Papier, Pappe.",
    "k": "Umweltschutz",
    "s": "LF1 3.4"
   },
   {
    "tg": 4,
    "g": "pc-umwelt",
    "src": "ZP F21/60",
    "t": "multi",
    "q": "Welche zwei Punkte berücksichtigen den Umweltschutz beim PC-Arbeitsplatz?",
    "a": [
     "Geräte mit Energy-Star-Kennzeichen anschaffen",
     "Altgeräte über ein Rücknahme- bzw. Recyclingprogramm zurückgeben",
     "alte Röhrenmonitore weiternutzen, weil sie weniger Strom brauchen",
     "den Energiesparmodus des Betriebssystems deaktivieren",
     "leere Druckerpatronen in den Restmüll werfen",
     "den Bildschirmschoner dauerhaft aktiv lassen"
    ],
    "cs": [
     0,
     1
    ],
    "e": "Energy Star kennzeichnet energiesparende Bürogeräte; Computerschrott gehört zu den Problemabfällen und wird gesondert entsorgt bzw. recycelt. Energiesparmodus nutzen statt abschalten, Patronen nicht in den Restmüll.",
    "k": "Umweltschutz",
    "s": "LF1 3.4"
   }
  ]
 },
 {
  "id": "H22",
  "name": "Herbst 2022",
  "note": "Nachbau · Originalreihenfolge (identisch mit gelieferter Datei „Herbst 2023“)",
  "items": [
   {
    "tg": 1,
    "g": "direct-response",
    "src": "ZP H22/1",
    "t": "mc",
    "q": "Welches Beispiel ist dem Dialogmarketing zuzuordnen?",
    "a": [
     "Ein Fernsehsender blendet während einer Verkaufsshow eine Bestellhotline ein.",
     "Großflächenplakate werben an der Autobahn für eine neue Marke.",
     "Promoter verteilen Warenproben in der Fußgängerzone.",
     "Ein Unternehmen sponsert die Trikots eines Fußballvereins.",
     "Eine Zeitungsanzeige macht eine Marke ohne Kontaktmöglichkeit bekannt."
    ],
    "c": 0,
    "e": "Dialogmarketing will eine messbare Reaktion (Response) auslösen. Beim Direct Response bestellt der Zuschauer unmittelbar nach dem Spot über die eingeblendete Rufnummer. Plakat, Sponsoring und reine Imageanzeige zielen auf Bekanntheit (klassisches Marketing).",
    "k": "Leistungen",
    "s": "LF2 2.2.1"
   },
   {
    "tg": 1,
    "g": "outsourcing-vorteil",
    "src": "ZP H22/2",
    "t": "multi",
    "q": "Welche zwei Gründe sprechen für einen Mobilfunkanbieter, seine Kundenhotline an einen externen Callcenter-Dienstleister zu vergeben?",
    "a": [
     "Kosten für eigenes Personal und eigene Infrastruktur sinken.",
     "Schwankungen im Anrufvolumen lassen sich flexibel auffangen.",
     "Die Agents identifizieren sich besonders stark mit den Produkten.",
     "Die eigene Teamleitung kann jedes Gespräch unmittelbar kontrollieren.",
     "Es entsteht kaum Schulungsbedarf, weil das Produktwissen vorhanden ist.",
     "Abstimmungs- und Entscheidungswege werden kürzer."
    ],
    "cs": [
     0,
     1
    ],
    "e": "Vorteile des externen Callcenters: flexible Reaktion auf Volumenschwankungen (Overflow), durch Wettbewerb häufig kostengünstiger, Projekterfahrung, Zusatzservices. Nachteile: Schulungsbedarf, geringere Identifikation, langwierigere Abstimmung, eingeschränkte Qualitätskontrolle.",
    "k": "Typologie",
    "s": "LF2 2.1.1"
   },
   {
    "tg": 1,
    "g": "leistungsarten",
    "src": "ZP H22/3",
    "t": "match",
    "q": "Ordnen Sie die Tätigkeiten der KommunikativAktiv KG zu.",
    "pairs": [
     [
      "technischer Support bei Installationsproblemen",
      "Inbound-Leistung"
     ],
     [
      "Lagerhaltung, Versand und Retourenbearbeitung für einen Onlineshop",
      "Zusatzleistung"
     ],
     [
      "Kundenadressen nach Postrückläufern telefonisch aktualisieren",
      "Outbound-Leistung"
     ],
     [
      "Mailings drucken, kuvertieren und versenden",
      "Zusatzleistung"
     ],
     [
      "ehemalige Kunden anrufen und zurückgewinnen",
      "Outbound-Leistung"
     ]
    ],
    "e": "Inbound: Bestellannahme, technische Hotline, Kundenservice, Informationshotline. Outbound: Telefonverkauf, Adress- und Datenqualifizierung, Kundenbindung, Kundenrückgewinnung, Inkasso, Marktforschung. Zusatzleistungen: Lettershop (Mailingversand), Fulfillment (Lager bis Retoure), E-Commerce.",
    "k": "Leistungen",
    "s": "LF2 2.2"
   },
   {
    "tg": 1,
    "g": "prozent-steigerung",
    "src": "ZP H22/4",
    "t": "calc",
    "q": "Die Dialogfix GmbH bildete vor vier Jahren 8 Kaufleute für Dialogmarketing aus, heute sind es 14. Um wie viel Prozent ist die Zahl der Auszubildenden gestiegen?",
    "ans": [
     "75"
    ],
    "unit": "%",
    "e": "Veränderung · 100 / Ausgangswert = (14 − 8) · 100 / 8 = 75 %. Häufiger Fehler: durch den neuen Wert teilen (6 / 14 = 42,9 %). Probe: 8 · 1,75 = 14.",
    "k": "Branche & Historie",
    "s": "LF2 1.1.2"
   },
   {
    "tg": 1,
    "g": "stellen-quali",
    "src": "ZP H22/5",
    "t": "match",
    "q": "Ordnen Sie den Stellen im Callcenter das passende Anforderungs- bzw. Aufgabenprofil zu.",
    "pairs": [
     [
      "Callcenter-Manager",
      "Hochschulstudium oder umfassende Weiterbildung und mehrjährige Callcenter-Erfahrung"
     ],
     [
      "Agent",
      "Basisqualifikation, z. B. IHK-Zertifikat, Freude an der Kundenkommunikation"
     ],
     [
      "Trainer",
      "pädagogisches Geschick, konzipiert und hält Schulungen"
     ],
     [
      "Teamleiter",
      "Personal- und Urlaubsplanung, Coaching, meist zuvor selbst Agent"
     ],
     [
      "Controller",
      "Kosten- und Leistungsrechnung, Steuerung und Kontrolle"
     ]
    ],
    "e": "Buch LF2 2.3.1: Agent = Basisqualifikation ohne Führungsverantwortung; Teamleiter = führt 10 bis 20 Mitarbeiter, Personalplanung, Coaching; Manager = oberste Ebene, Studium bzw. Weiterbildung plus Erfahrung; Trainer = Schulungen; Controller = Kosten- und Leistungsrechnung.",
    "k": "Mitarbeiter",
    "s": "LF2 2.3.1"
   },
   {
    "tg": 1,
    "g": "service-phasen",
    "src": "ZP H22/6",
    "t": "mc",
    "q": "Ein Onlinehändler für Bodenbeläge bietet folgende Leistungen an. Welche gehört zum Sales-Service?",
    "a": [
     "Berechnung der benötigten Menge während des Bestellgesprächs",
     "kostenlose Musterproben vor der Kaufentscheidung",
     "Online-Tool zur Farbauswahl auf der Website",
     "telefonische Verlegehilfe nach der Lieferung",
     "Verlängerung der Garantie nach dem Kauf"
    ],
    "c": 0,
    "e": "Sales-Service begleitet den Kauf selbst. Muster und Farbauswahl-Tool unterstützen vor dem Kauf (Pre-Sales); Verlegehilfe und Garantie wirken nach dem Kauf (After-Sales).",
    "k": "Leistungen",
    "s": "LF2 2.2.4"
   },
   {
    "tg": 2,
    "g": "englisch-telefon",
    "src": "ZP H22/7",
    "t": "mc",
    "q": "Sie haben den Namen einer englischsprachigen Anruferin nicht verstanden. Welche Formulierung ist angemessen?",
    "a": [
     "I'm sorry, I didn't catch your name. Could you spell it, please?",
     "Spell your name!",
     "What is your problem?",
     "I'll connect you.",
     "Goodbye. Thanks for calling."
    ],
    "c": 0,
    "e": "Höflich um Wiederholung bzw. Buchstabieren bitten. „I'll connect you“ = Ich verbinde Sie; „Goodbye …“ beendet das Gespräch; Befehlsform und „What is your problem?“ wirken unhöflich.",
    "k": "Gesprächsführung",
    "s": "LF3 4.3"
   },
   {
    "tg": 3,
    "g": "bildschirm-fenster",
    "src": "ZP H22/8",
    "t": "mc",
    "q": "Wie stellen Sie Ihren Bildschirm im Verhältnis zum Fenster auf, um Blendungen zu vermeiden?",
    "a": [
     "im rechten Winkel zum Fenster, sodass der Blick parallel zur Fensterfront verläuft",
     "direkt vor das Fenster, damit der Blick ins Helle geht",
     "mit dem Bildschirm zum Fenster, sodass Sie mit dem Rücken zum Fenster sitzen",
     "direkt unter eine Deckenleuchte, unabhängig vom Fenster",
     "möglichst nah an die Heizung unter dem Fenster"
    ],
    "c": 0,
    "e": "Buch LF1 4: Der Bildschirm sollte im rechten Winkel zum Fenster stehen, Sichtabstand mindestens 50 cm. Blick ins Fenster blendet, Fenster im Rücken spiegelt sich im Bildschirm.",
    "k": "Arbeitsplatz",
    "s": "LF1 4"
   },
   {
    "tg": 2,
    "g": "stressoren",
    "src": "ZP H22/9",
    "t": "mc",
    "q": "Eine Kollegin fühlt sich seit Wochen ausgelaugt. Welcher Umstand ist ein typischer Stressor, der zu Disstress führt?",
    "a": [
     "dauerhafte Überforderung, weil sie wegen Personalmangels zusätzliche Aufgaben übernimmt",
     "ein Lob des Teamleiters für ein gelungenes Gespräch",
     "eine geregelte Pausenplanung",
     "ein ergonomisch eingerichteter Arbeitsplatz",
     "klare Zuständigkeiten im Team"
    ],
    "c": 0,
    "e": "Stressoren sind äußere Reize, die Stress auslösen; Überforderung, Termindruck, Lärm oder schlechtes Betriebsklima führen häufig zu Disstress. Ein Lob kann positiven Eustress auslösen; Pausenplanung, Ergonomie und klare Zuständigkeiten beugen Stress vor.",
    "k": "Stimme & Stress",
    "s": "LF3 6.1"
   },
   {
    "tg": 2,
    "g": "offene-fragen",
    "src": "ZP H22/10",
    "t": "mc",
    "q": "Wozu dienen offene Fragen im Kundengespräch vor allem?",
    "a": [
     "die Meinung und Befindlichkeit des Kunden kennenzulernen",
     "den Kunden zu einer schnellen Entscheidung zu drängen",
     "dem Kunden eine bestimmte Antwort in den Mund zu legen",
     "Informationen am Ende des Gesprächs abzusichern",
     "den Kunden zwischen zwei Terminen wählen zu lassen"
    ],
    "c": 0,
    "e": "Offene Fragen (W-Fragen) bringen ein Gespräch in Gang, bauen Beziehung auf und liefern viele Informationen zu Meinung, Befindlichkeit und Bedürfnissen. Absichern = geschlossene Frage, Antwort vorgeben = Suggestivfrage, zwei Termine = Alternativfrage.",
    "k": "Gesprächsführung",
    "s": "LF3 3.2.2"
   },
   {
    "tg": 2,
    "g": "rhetorische-argumentation",
    "src": "ZP H22/11",
    "t": "mc",
    "q": "Welche Technik gehört NICHT zu den Formen der rhetorischen (verkürzten) Argumentation?",
    "a": [
     "die offene Frage nach den Bedürfnissen des Kunden",
     "das Wenn-dann-Argument",
     "die Verallgemeinerung",
     "die Argumentation mit Autoritäten",
     "die Entweder-oder-Technik"
    ],
    "c": 0,
    "e": "Das Buch nennt fünf Techniken der rhetorischen Argumentation: Wenn-dann, Verallgemeinerung, Argumentation mit Autoritäten, Entweder-oder und Argumentieren mit Statistiken. Eine offene Frage ist ein Instrument der Fragetechnik, kein Argument.",
    "k": "Gesprächsführung",
    "s": "LF3 3.2.1"
   },
   {
    "tg": 2,
    "g": "fuenfsatz-plan",
    "src": "ZP H22/12",
    "t": "mc",
    "q": "Wie ist der Kettenbauplan der Fünfsatz-Technik aufgebaut?",
    "a": [
     "Einstiegssatz – drei aufeinander aufbauende Argumente – Zielsatz",
     "These – Antithese – Synthese – Zielsatz",
     "Aussage A – Begründung A – Aussage B – Begründung B – Zielsatz",
     "Einstieg – Bezug auf bisherige Argumente – Argument 1 – Argument 2 – Zielsatz",
     "These 1 – These 2 – Gemeinsamkeiten – Einigung – Zielsatz"
    ],
    "c": 0,
    "e": "Kettenbauplan: Die drei Argumente stehen logisch oder zeitlich in Beziehung zueinander. Die Distraktoren beschreiben den dialektischen Aufbau, den Vergleich, die Ausklammerung und den Kompromiss.",
    "k": "Gesprächsführung",
    "s": "LF3 3.2.1"
   },
   {
    "tg": 2,
    "g": "geschlossene-fragen",
    "src": "ZP H22/13",
    "t": "mc",
    "q": "Welchen Zweck erfüllen geschlossene Fragen am Ende der Bedarfsermittlung?",
    "a": [
     "gezielt einzelne Sachverhalte abfragen und das Verstandene absichern",
     "dem Kunden möglichst viel Antwortspielraum lassen",
     "ein Gespräch überhaupt erst in Gang bringen",
     "Zeit gewinnen, indem man auf eine Frage mit einer Frage antwortet",
     "Interesse wecken, ohne eine Antwort zu erwarten"
    ],
    "c": 0,
    "e": "Geschlossene Fragen (Verb am Anfang, Antwort ja/nein bzw. kurze Sachangabe) sichern Informationen ab, steuern das Gespräch und führen zum Abschluss. Spielraum und Gesprächsbeginn = offene Frage, Frage auf Frage = Gegenfrage, keine Antwort erwartet = rhetorische Frage.",
    "k": "Gesprächsführung",
    "s": "LF3 3.2.2"
   },
   {
    "tg": 2,
    "g": "phasen-formulierung",
    "src": "ZP H22/14",
    "t": "match",
    "q": "Ordnen Sie die Formulierungen der Gesprächsphase zu.",
    "pairs": [
     [
      "„Guten Tag, Dialogfix Kundenservice, mein Name ist Lea Brandt. Was kann ich für Sie tun?“",
      "Begrüßung und Kontaktaufbau"
     ],
     [
      "„Nennen Sie mir bitte zum Abgleich Ihre Kundennummer und Ihr Geburtsdatum.“",
      "Datenschutz (Legitimation)"
     ],
     [
      "„Wofür möchten Sie den Drucker hauptsächlich nutzen?“",
      "Bedarfsermittlung"
     ],
     [
      "„Mit diesem Modell sparen Sie Tinte. Sind Sie mit dem Angebot einverstanden?“",
      "Beratung und Lösung"
     ],
     [
      "„Kann ich sonst noch etwas für Sie tun, Herr Kaya?“",
      "Gesprächsabschluss"
     ]
    ],
    "e": "Beratungsgespräch in vier Schritten: Begrüßung/Kontaktaufbau (mit Meldeformel und Legitimation zum Datenschutz), Bedarfsermittlung, Beratung und Lösung (Nutzenargument, Ergebnis absichern), Gesprächsabschluss (Abschlussfrage mit Namen).",
    "k": "Gesprächsführung",
    "s": "LF5 1.1"
   },
   {
    "tg": 2,
    "g": "datenqualitaet",
    "src": "ZP H22/15",
    "t": "mc",
    "x": "Outbound-Aktion der KommunikativAktiv KG: 9.200 Adressen geliefert · davon 8.100 nutzbar · 7.800 Zielpersonen erreicht · 1.593 Abschlüsse · 219 Stornos innerhalb der Widerrufsfrist.",
    "q": "Über 1.100 der gelieferten Adressen sind nicht nutzbar. Welche Ursache liegt in der Qualität der Daten?",
    "a": [
     "Der Datensatz enthält viele Dubletten und veraltete Telefonnummern.",
     "Die Agents erzielen eine zu hohe Erfolgsquote.",
     "Der Servicelevel der Inbound-Hotline ist zu niedrig.",
     "Die Stornoquote der Aktion ist zu hoch.",
     "Die durchschnittliche Gesprächszeit ist zu kurz."
    ],
    "c": 0,
    "e": "Eine niedrige Ausschöpfung kann bedeuten, dass der gelieferte Datensatz von schlechter Qualität ist – z. B. viele Dubletten oder veraltete Daten. Erfolgs- und Stornoquote beziehen sich auf bereits erreichte Personen; Servicelevel und AHT sind Inbound-Kennzahlen.",
    "k": "Kennzahlen",
    "s": "LF5 5.2.1"
   },
   {
    "tg": 2,
    "g": "erfolgsquote",
    "src": "ZP H22/16",
    "t": "calc",
    "x": "Outbound-Aktion der KommunikativAktiv KG: 9.200 Adressen geliefert · davon 8.100 nutzbar · 7.800 Zielpersonen erreicht (Nettokontakte) · 1.593 Abschlüsse · 219 Stornos.",
    "q": "Wie hoch ist die Erfolgsquote der Aktion?",
    "ans": [
     "20,4"
    ],
    "unit": "%",
    "hint": "Auf eine Nachkommastelle runden.",
    "e": "Erfolgsquote = Erfolge · 100 / Nettokontakte = 1.593 · 100 / 7.800 = 20,4 %. Bezugsgröße sind die tatsächlich erreichten Zielpersonen, nicht die gelieferten oder nutzbaren Adressen.",
    "k": "Kennzahlen",
    "s": "LF5 5.2.2"
   },
   {
    "tg": 2,
    "g": "storno-festbestellung",
    "src": "ZP H22/17",
    "t": "mc",
    "x": "Outbound-Aktion: 7.800 Nettokontakte · 1.593 Abschlüsse · 219 Stornos innerhalb der Widerrufsfrist.",
    "q": "Welche Aussage zu den Stornos dieser Aktion trifft zu?",
    "a": [
     "Ohne die Zahl der Stornos lässt sich die Festbestellquote nicht ermitteln.",
     "Die Stornos werden für die Ausschöpfungsquote benötigt.",
     "Stornos erhöhen die Zahl der Nettokontakte.",
     "Die Stornoquote bezieht sich auf die gelieferten Adressen.",
     "Stornos verbessern die Wirtschaftlichkeit der Aktion."
    ],
    "c": 0,
    "e": "Festbestellquote = (Erfolge − Stornos) · 100 / Nettokontakte – ohne Stornozahl keine „echten Erfolge“. Die Stornoquote bezieht sich auf die Gesamtaufträge; hohe Stornos verursachen Mehrkosten.",
    "k": "Kennzahlen",
    "s": "LF5 5.2.3"
   },
   {
    "tg": 2,
    "g": "festbestellquote",
    "src": "ZP H22/18",
    "t": "calc",
    "x": "Outbound-Aktion: 7.800 Nettokontakte · 1.593 Abschlüsse · 219 Stornos innerhalb der Widerrufsfrist.",
    "q": "Wie hoch ist die Festbestellquote?",
    "ans": [
     "17,6"
    ],
    "unit": "%",
    "hint": "Auf eine Nachkommastelle runden.",
    "e": "Festbestellungen = 1.593 − 219 = 1.374. Festbestellquote = 1.374 · 100 / 7.800 = 17,6 %. Nicht mit der Stornoquote verwechseln: 219 · 100 / 1.593 = 13,7 %.",
    "k": "Kennzahlen",
    "s": "LF5 5.2.3"
   },
   {
    "tg": 2,
    "g": "zufriedenheit-befragung",
    "src": "ZP H22/19",
    "t": "mc",
    "q": "Wann liefert eine Zufriedenheitsbefragung zur Servicehotline die aussagekräftigsten Ergebnisse?",
    "a": [
     "zeitnah nach dem abgeschlossenen Kontakt, z. B. per automatischer E-Mail oder Direktbefragung",
     "einmal alle fünf Jahre per Postwurfsendung an alle Haushalte",
     "nur bei Kunden, die sich bereits beschwert haben",
     "ausschließlich bei den Mitarbeitern der Hotline",
     "erst nach Ablauf der Gewährleistungsfrist"
    ],
    "c": 0,
    "e": "Das Buch nennt als Beispiel die automatische E-Mail nach einem Hotlinegespräch bzw. die Direktbefragung nach dem Kontakt – der Kunde erinnert sich dann genau. Eine Auswahl nur unzufriedener Kunden verzerrt das Ergebnis.",
    "k": "Kundenbindung",
    "s": "LF5 3.2"
   },
   {
    "tg": 2,
    "g": "reklamation-verhalten",
    "src": "ZP H22/20",
    "t": "multi",
    "q": "Ein Kunde reklamiert, dass in seinem Paket das Ladekabel fehlt. Welche drei Verhaltensweisen sind richtig?",
    "a": [
     "Verständnis für den Ärger zeigen",
     "auf die Schilderung eingehen und gezielt nachfragen",
     "eine verbindliche Lösung anbieten, z. B. kostenfreien Nachversand",
     "ausführlich erklären, wie der Fehler im Lager entstanden ist",
     "anzweifeln, ob das Kabel wirklich fehlt",
     "auf die AGB verweisen und das Gespräch beenden",
     "sofort eine Lösung nennen, bevor der Kunde ausgeredet hat"
    ],
    "cs": [
     0,
     1,
     2
    ],
    "e": "Beschwerdemanagement: emotionale Ebene klären, sachlichen Hintergrund ermitteln, verbindliche Lösung finden. „Interne Fehler erklären“, „Reklamation anzweifeln“ und „Lösung zu schnell anbieten“ gehören zu den zehn Fehlern im Beschwerdegespräch.",
    "k": "Beschwerden",
    "s": "LF5 4.1.2"
   },
   {
    "tg": 2,
    "g": "positiv-formulieren",
    "src": "ZP H22/21",
    "t": "mc",
    "q": "Welche Formulierung ist positiv?",
    "a": [
     "„Bis morgen um 12 Uhr erhalten Sie von mir eine Lösung.“",
     "„Da müssen Sie leider bis morgen warten.“",
     "„Dafür bin ich nicht zuständig.“",
     "„Das kann ja gar nicht sein.“",
     "„Da lässt sich leider nichts machen.“"
    ],
    "c": 0,
    "e": "Positiv formulieren heißt: sagen, was geht, statt was nicht geht – ohne „müssen“, „nicht“, „kein“. Buchbeispiel: statt „Da müssen Sie zwei Tage warten“ besser „Binnen der nächsten 48 Stunden erhalten Sie eine Lösung.“",
    "k": "Beschwerden",
    "s": "LF5 4.1.3"
   },
   {
    "tg": 2,
    "g": "beschwerde-ursache",
    "src": "ZP H22/22",
    "t": "mc",
    "q": "Welche Beschwerde ist mitarbeiterbezogen?",
    "a": [
     "„Die Dame am Telefon war gestern ausgesprochen unfreundlich.“",
     "„Die Lieferung kam zwei Wochen zu spät.“",
     "„Der Drucker druckt schon wieder Streifen.“",
     "„Niemand fühlt sich für meinen Fall zuständig.“",
     "„Das Preis-Leistungs-Verhältnis stimmt nicht.“"
    ],
    "c": 0,
    "e": "Beschwerdeursachen laut Buch: mitarbeiterbezogen (Unfreundlichkeit, fehlende Fachkompetenz), produkt-/dienstleistungsbezogen (Sachmangel, Preis-Leistung) und abwicklungsbezogen (Lieferzeit, unklare Zuständigkeiten, Bearbeitungszeiten).",
    "k": "Beschwerden",
    "s": "LF5 4.1.1"
   },
   {
    "tg": 2,
    "g": "beschwerde-schritte",
    "src": "ZP H22/23",
    "t": "order",
    "q": "Bringen Sie die Handlungsschritte eines Beschwerdegesprächs in die Reihenfolge laut Fachbuch.",
    "items": [
     "in das Gespräch einsteigen",
     "den sachlichen Hintergrund ermitteln",
     "die emotionale Ebene klären",
     "für das Anliegen eine Lösung finden",
     "das Gespräch abschließen"
    ],
    "e": "Buch LF5 4.1.2: Einsteigen → sachlichen Hintergrund ermitteln → emotionale Ebene klären → Lösung finden → abschließen. Praxishinweis des Buches: Ist der Kunde schon zu Beginn sehr aufgebracht, wird zuerst die emotionale Ebene geklärt.",
    "k": "Beschwerden",
    "s": "LF5 4.1.2"
   },
   {
    "tg": 2,
    "g": "crm-def",
    "src": "ZP H22/24",
    "t": "mc",
    "q": "Was versteht man unter Customer Relationship Management (CRM)?",
    "a": [
     "die Strategie, alle Unternehmensbereiche und -aktivitäten auf langfristige Kundenbeziehungen auszurichten",
     "eine Software, die ausschließlich Kundenadressen speichert",
     "das Anrufverteilsystem der Telefonanlage",
     "das Mithören von Gesprächen zur Leistungskontrolle",
     "ein Verfahren zur Datensicherung"
    ],
    "c": 0,
    "e": "CRM ist laut Buch eine Unternehmensstrategie: Alle Bereiche und Aktivitäten werden auf langfristige Kundenbeziehungen ausgerichtet, um den Erfolg und die Zufriedenheit der Kunden zu steigern. Software und Datenbanken sind nur Hilfsmittel.",
    "k": "CRM",
    "s": "LF5 3.1.1"
   },
   {
    "tg": 3,
    "g": "lerntypen",
    "src": "ZP H22/25",
    "t": "mc",
    "q": "Welche Lernstrategie passt am besten zum motorischen Lerntyp?",
    "a": [
     "die neue Software direkt am System ausprobieren (Learning by Doing)",
     "die Bedienungsanleitung laut vorlesen",
     "sich ein farbiges Schaubild einprägen",
     "mit Kollegen über die Funktionen diskutieren",
     "einen Podcast über die Software hören"
    ],
    "c": 0,
    "e": "Motorisch = Nachmachen und selbst Ausprobieren. Vorlesen und Podcast = auditiv, Schaubild = visuell, Diskussion = kommunikativ.",
    "k": "Information & Lernen",
    "s": "LF1 6.8"
   },
   {
    "tg": 3,
    "g": "grossraum",
    "src": "ZP H22/26",
    "t": "mc",
    "q": "Welche Aussage über Großraumbüros trifft zu?",
    "a": [
     "Kurze Kommunikationswege erleichtern die Abstimmung zwischen den Mitarbeitern.",
     "Jeder Mitarbeiter hat Anspruch auf einen festen Wunscharbeitsplatz.",
     "Dunkle Trennwände sind gesetzlich vorgeschrieben.",
     "Ein Großraumbüro muss mindestens 40 Arbeitsplätze umfassen.",
     "Die Kosten je Arbeitsplatz sind höher als im Einzelbüro."
    ],
    "c": 0,
    "e": "Vorteile laut Buch: vereinfachte Kommunikation, bis zu 20 % geringere Flächenkosten als Einzelbüros. Nachteile: Geräuschpegel, Ablenkung, Raumklima, fehlende Privatsphäre.",
    "k": "Arbeitsplatz",
    "s": "LF1 4"
   },
   {
    "tg": 4,
    "g": "arbschg",
    "src": "ZP H22/27",
    "t": "mc",
    "q": "Welche Aussage zum Arbeitsschutzgesetz ist FALSCH?",
    "a": [
     "Verantwortlich für Sicherheit und Gesundheit ist grundsätzlich der Arbeitnehmer.",
     "Der Arbeitgeber muss Gefährdungen am Arbeitsplatz beurteilen und dokumentieren.",
     "Die Beschäftigten sind bei Einstellung und vor Einführung neuer Arbeitsmittel zu unterweisen.",
     "Grundgedanke des Gesetzes ist die Prävention.",
     "Arbeitnehmer können sich regelmäßig arbeitsmedizinisch untersuchen lassen."
    ],
    "c": 0,
    "e": "Laut Buch ist der Arbeitgeber für Gesundheit und Sicherheit der Arbeitnehmer verantwortlich. Gefährdungsbeurteilung, Unterweisung, Prävention und arbeitsmedizinische Untersuchungen sind zentrale Regeln des ArbSchG.",
    "k": "Schutzgesetze",
    "s": "LF1 2.2.7"
   },
   {
    "tg": 3,
    "g": "beleuchtung",
    "src": "ZP H22/28",
    "t": "mc",
    "q": "Welche Beleuchtungsstärke wird für Büro- und Bildschirmarbeitsplätze mindestens empfohlen?",
    "a": [
     "500 Lux",
     "100 Lux",
     "250 Lux",
     "2.000 Lux",
     "Die Beleuchtungsstärke ist nicht geregelt."
    ],
    "c": 0,
    "e": "Das Buch empfiehlt mindestens 500 Lux. Weitere Regeln: Tageslicht vorziehen, Blendung durch Jalousien vermeiden, gleichmäßig ausleuchten, bei Rechtshändern Licht von links.",
    "k": "Arbeitsplatz",
    "s": "LF1 4"
   },
   {
    "tg": 3,
    "g": "eisenhower",
    "src": "ZP H22/29",
    "t": "mc",
    "q": "Eine Aufgabe ist wichtig, aber nicht dringend. Wie behandeln Sie sie nach dem Eisenhower-Prinzip?",
    "a": [
     "fest terminieren und möglichst selbst erledigen (B-Aufgabe)",
     "sofort mit höchster Priorität erledigen (A-Aufgabe)",
     "delegieren (C-Aufgabe)",
     "direkt in den Papierkorb (D-Aufgabe)",
     "in die Pufferzeit der ALPEN-Methode schieben"
    ],
    "c": 0,
    "e": "Eisenhower: A = wichtig und dringend → sofort selbst; B = wichtig, nicht dringend → terminieren, selbst erledigen; C = dringend, nicht wichtig → delegieren; D = weder noch → Papierkorb.",
    "k": "Information & Lernen",
    "s": "LF1 6.1"
   },
   {
    "tg": 3,
    "g": "diagramm-art",
    "src": "ZP H22/30",
    "t": "mc",
    "q": "Die Mitarbeiter- und Umsatzentwicklung der letzten zehn Jahre soll auf einer Folie dargestellt werden. Welche Darstellung eignet sich am besten?",
    "a": [
     "Kurvendiagramm",
     "Kreisdiagramm",
     "Organigramm",
     "Flussdiagramm",
     "Mindmap"
    ],
    "c": 0,
    "e": "Kurvendiagramm = Entwicklungen in einem Zeitraum (Mitarbeiter-, Umsatzentwicklung). Kreisdiagramm = Anteile an einem Ganzen; Organigramm = Aufbauorganisation; Flussdiagramm = Abläufe.",
    "k": "Präsentation",
    "s": "LF2 3.2"
   },
   {
    "tg": 3,
    "g": "multitasking",
    "src": "ZP H22/31",
    "t": "mc",
    "q": "Was bedeutet der Begriff Multitasking ursprünglich bei Computersystemen?",
    "a": [
     "Mehrere Anwendungen laufen gleichzeitig ab.",
     "Ein Programm wird auf mehreren Rechnern installiert.",
     "Daten werden automatisch gesichert.",
     "Mehrere Nutzer teilen sich ein Passwort.",
     "Der Rechner wählt Telefonnummern automatisch an."
    ],
    "c": 0,
    "e": "Der Begriff stammt laut Buch aus der EDV und beschreibt die Fähigkeit von Computersystemen, verschiedene Anwendungen gleichzeitig ablaufen zu lassen. Übertragen auf den Menschen: mehrere Tätigkeiten zugleich ausführen.",
    "k": "Datenmanagement",
    "s": "LF5 2.4"
   },
   {
    "tg": 3,
    "g": "acd",
    "src": "ZP H22/32",
    "t": "mc",
    "q": "Welche Aussage über die ACD (Automatic Call Distribution) trifft zu?",
    "a": [
     "Sie verteilt eingehende Anrufe nach dem Prinzip Longest Waiting und Longest Idle auf freie Agents.",
     "Sie legt den Servicelevel des Unternehmens fest.",
     "Sie regelt die Urlaubsplanung der Mitarbeiter.",
     "Sie berechnet den Tagesgewinn des Callcenters.",
     "Sie ist ein Sprachcomputer, der Anrufer per Tastenmenü vorsortiert."
    ],
    "c": 0,
    "e": "Die ACD steuert, verteilt und verwaltet das Anrufaufkommen und liefert Reports. Der Servicelevel wird vom Unternehmen vorgegeben, die ACD misst ihn nur. Das Tastenmenü gehört zur IVR (Verwechslungspaar ACD/IVR).",
    "k": "Branchentechnik",
    "s": "LF4 1.2.2"
   },
   {
    "tg": 3,
    "g": "ocr",
    "src": "ZP H22/33",
    "t": "mc",
    "q": "Welche Funktion erfüllt ein OCR-Programm?",
    "a": [
     "Zeichen auf eingescannten Vorlagen werden erkannt und gedeutet.",
     "Programme werden installiert und verwaltet.",
     "Festplatten werden defragmentiert.",
     "Unerwünschte E-Mails werden aussortiert.",
     "Verdächtige Dateien werden in Quarantäne verschoben."
    ],
    "c": 0,
    "e": "OCR ermittelt Wahrscheinlichkeiten für die Deutung eingescannter Buchstaben und Ziffern und prüft sogar Wortzusammenhänge (Buchbeispiel „4ngebot“ → „Angebot“).",
    "k": "Software",
    "s": "LF4 2.2"
   },
   {
    "tg": 3,
    "g": "programm-aufgabe",
    "src": "ZP H22/34",
    "t": "match",
    "q": "Mit welchem Programm erledigen Sie die Aufträge Ihres Teamleiters?",
    "pairs": [
     [
      "die fünf häufigsten Beschwerdegründe aus den Kundendatensätzen ermitteln",
      "Datenbankprogramm"
     ],
     [
      "Ideen aus dem Teammeeting für eine Vorführung aufbereiten",
      "Präsentationsprogramm"
     ],
     [
      "eine Statistik über die verschickten Anschreiben erstellen",
      "Tabellenkalkulation"
     ],
     [
      "alte Papierprotokolle digitalisieren",
      "OCR-Software"
     ],
     [
      "ein Musteranschreiben für Beschwerden entwerfen",
      "Textverarbeitung"
     ]
    ],
    "e": "Datenbank = Abfragen über Datensätze; Präsentation = visuelle Aufbereitung für Meetings; Tabellenkalkulation = Statistiken und Berechnungen; OCR = eingescannte Vorlagen in Text; Textverarbeitung = Briefe und Dokumente.",
    "k": "Software",
    "s": "LF4 2.2"
   },
   {
    "tg": 3,
    "g": "browser",
    "src": "ZP H22/35",
    "t": "mc",
    "q": "Wozu dient ein Webbrowser?",
    "a": [
     "zum Abrufen und Anzeigen von Webseiten",
     "zum Versenden von E-Mails über SMTP",
     "zur Verwaltung der Hardware",
     "zum Schutz vor Viren",
     "zur Verteilung eingehender Anrufe"
    ],
    "c": 0,
    "e": "Der Browser ruft Webseiten ab und stellt sie dar; übertragen werden sie per HTTP bzw. verschlüsselt per HTTPS. Hardwareverwaltung = Betriebssystem, Virenschutz = Antivirenprogramm.",
    "k": "Netze & Dienste",
    "s": "LF4 1.1.6"
   },
   {
    "tg": 3,
    "g": "wms",
    "src": "ZP H22/36",
    "t": "mc",
    "q": "Wofür nutzt ein Callcenter ein Workforce-Management-System (WMS)?",
    "a": [
     "für die Personaleinsatzplanung, also die Planung der Agent-Kapazitäten für die Hotline",
     "für die Verteilung eingehender Anrufe nach Skills",
     "für die Texterkennung eingescannter Briefe",
     "für die Verschlüsselung von Webseiten",
     "für den Abruf von E-Mails vom Server"
    ],
    "c": 0,
    "e": "Personaleinsatzplanungs-Software (PEP) und WMS planen die Agent-Kapazitäten, meist inklusive Urlaubsplanung, damit Fehlzeiten schon berücksichtigt sind.",
    "k": "Software",
    "s": "LF4 2.3"
   },
   {
    "tg": 3,
    "g": "bewegungsdaten",
    "src": "ZP H22/37",
    "t": "mc",
    "q": "Welche Angabe ist ein Bewegungsdatum?",
    "a": [
     "die Bestellmenge",
     "die Kundennummer",
     "das Geburtsdatum des Kunden",
     "die Artikelbezeichnung",
     "die Anschrift des Kunden"
    ],
    "c": 0,
    "e": "Bewegungsdaten ändern sich häufig (Bestellmenge, Bestelldatum, Umsatz, Bestellstatus). Stammdaten ändern sich selten oder nie (Kundennummer, Geburtsdatum, Artikelbezeichnung, Anschrift).",
    "k": "Datenbanken",
    "s": "LF4 4.4"
   },
   {
    "tg": 3,
    "g": "db-ziel",
    "src": "ZP H22/38",
    "t": "mc",
    "q": "Welches Ziel verfolgt die Speicherung von Daten in einer Datenbank?",
    "a": [
     "Daten effizient, widerspruchsfrei (konsistent) und dauerhaft speichern",
     "Daten möglichst mehrfach ablegen, damit nichts verloren geht",
     "Daten zusätzlich nur auf Papier sichern",
     "Daten nach jeder Abfrage löschen",
     "Datensätze ohne Schlüssel ablegen, um Speicher zu sparen"
    ],
    "c": 0,
    "e": "Ziel laut Buch: effiziente (sparsam, schneller Zugriff), konsistente (fehlerfrei, widerspruchsfrei) und dauerhafte Speicherung. Mehrfachablage erzeugt Redundanz und Widersprüche.",
    "k": "Datenbanken",
    "s": "LF4 4.1"
   },
   {
    "tg": 3,
    "g": "personenbezogen",
    "src": "ZP H22/39",
    "t": "mc",
    "q": "Welche Angabe ist nach DSGVO und BDSG geschützt?",
    "a": [
     "die private E-Mail-Adresse einer Abteilungsleiterin",
     "das Fremdkapital der GmbH",
     "die Anzahl der Nettokontakte pro Stunde",
     "die Bankverbindung der GmbH",
     "der Firmenname der GmbH"
    ],
    "c": 0,
    "e": "Geschützt sind personenbezogene Daten natürlicher Personen. Juristische Personen wie die GmbH fallen nicht unter die Schutzbestimmungen; Kennzahlen ohne Personenbezug ebenfalls nicht.",
    "k": "Datenschutz",
    "s": "LF4 6.1"
   },
   {
    "tg": 3,
    "g": "eingabemaske",
    "src": "ZP H22/40",
    "t": "mc",
    "q": "Wie lassen sich Eingabefehler in der Kundendatenbank technisch verringern?",
    "a": [
     "durch festgelegte Datenformate und Pflichtfelder in der Eingabemaske",
     "durch längere Pausen der Agents",
     "durch einen höheren Servicelevel",
     "durch häufigeres Neustarten des PCs",
     "durch den Verzicht auf Primärschlüssel"
    ],
    "c": 0,
    "e": "Pflichtfelder sichern die Vollständigkeit, feste Formate (z. B. fünfstellige PLZ, Datumsfeld) verhindern Fehleingaben. Das Buch nennt Pflichtfelder ausdrücklich beim Grundsatz der Vollständigkeit.",
    "k": "Datenmanagement",
    "s": "LF5 2.2"
   },
   {
    "tg": 3,
    "g": "usv",
    "src": "ZP H22/41",
    "t": "mc",
    "q": "Womit schützt die Dialogfix GmbH ihre Server vor Datenverlust bei einem Stromausfall?",
    "a": [
     "mit einer unterbrechungsfreien Stromversorgung (USV) bzw. Notstromversorgung",
     "mit einer Firewall",
     "mit einem Spamfilter",
     "mit einem Antivirenprogramm",
     "mit einem SSL-Zertifikat"
    ],
    "c": 0,
    "e": "Die USV gehört zum physikalischen Schutz gegen Umwelteinflüsse. Firewall, Spamfilter, Antivirenprogramm und SSL schützen vor Angriffen, Schadsoftware bzw. beim Datentransfer – nicht vor Stromausfall.",
    "k": "Datensicherheit",
    "s": "LF4 5.2.6"
   },
   {
    "tg": 3,
    "g": "firewall",
    "src": "ZP H22/42",
    "t": "mc",
    "q": "Ihre Firewall blockiert ohne Nachfrage alle Anwendungen, die nicht ausdrücklich freigegeben sind. Welche Sicherheitsstufe ist eingestellt?",
    "a": [
     "hoch",
     "mittel",
     "niedrig",
     "deaktiviert",
     "nur Paketfilterung ohne Regeln"
    ],
    "c": 0,
    "e": "Hoch = nur ausdrücklich freigegebene Programme, Unbekanntes wird ohne Nachfrage geblockt. Mittel = bei neuen Anwendungen wird der Benutzer gefragt. Niedrig = alles erlaubt, nur definierte Angriffe werden geblockt.",
    "k": "Datensicherheit",
    "s": "LF4 5.2.3"
   },
   {
    "tg": 3,
    "g": "virenwarnung",
    "src": "ZP H22/43",
    "t": "mc",
    "q": "Nach dem Download eines Dokuments meldet das Antivirenprogramm einen Virenfund. Wie verhalten Sie sich richtig?",
    "a": [
     "nichts verändern und sofort die IT-Abteilung informieren",
     "das Antivirenprogramm kurz deaktivieren und die Datei öffnen",
     "die Datei an Kollegen weiterleiten, damit sie sie prüfen",
     "den Stecker ziehen und an einem anderen Platz weiterarbeiten",
     "die Warnung wegklicken und weiterarbeiten"
    ],
    "c": 0,
    "e": "Die IT-Richtlinien im Buch verbieten Veränderungen am Antivirensystem, insbesondere das Abschalten. Die Einstiegssituation LF4 Kap. 5 zeigt genau das Fehlverhalten: Warnung wegklicken, Schutz abschalten, Platz wechseln.",
    "k": "Datensicherheit",
    "s": "LF4 5.2.4"
   },
   {
    "tg": 4,
    "g": "stabsstelle",
    "src": "ZP H22/44",
    "t": "mc",
    "q": "Was kennzeichnet eine Stabsstelle?",
    "a": [
     "Sie unterstützt mit speziellen Funktionen außerhalb des Tagesgeschäfts, meist ohne Weisungsbefugnis.",
     "Sie ist die kleinste organisatorische Einheit und umfasst das Arbeitsgebiet einer Person.",
     "Sie fasst sachlich zusammenhängende Stellen zusammen.",
     "Sie darf anderen Stellen Weisungen erteilen.",
     "Sie regelt die Weisungsbefugnisse im Unternehmen."
    ],
    "c": 0,
    "e": "Buchtabelle: Stelle = kleinste Einheit; Abteilung = Zusammenfassung von Stellen; Instanz = weisungsbefugte Stelle; Stabsstelle = unterstützende Stelle mit speziellen Funktionen (z. B. QM, Öffentlichkeitsarbeit); Leitungssystem = Regelung der Weisungsbefugnisse.",
    "k": "Organisation",
    "s": "LF1 1.2.1"
   },
   {
    "tg": 4,
    "g": "firma-zusatz",
    "src": "ZP H22/45",
    "t": "mc",
    "q": "Dieter Krämer ist als Einzelkaufmann im Handelsregister eingetragen. Welche Firmierung ist NICHT zulässig?",
    "a": [
     "Dieter Krämer Einzelkaufmann",
     "Dialog-Service Krämer e. K.",
     "Dieter Krämer e. Kfm.",
     "Krämer Telefonservice eingetragener Kaufmann",
     "Krämer Callservice e. K."
    ],
    "c": 0,
    "e": "Die Firma muss einen Rechtsformzusatz enthalten (Buch LF1 1.3.1). Zulässig sind nach § 19 HGB „eingetragener Kaufmann“ bzw. allgemein verständliche Abkürzungen wie „e. K.“ oder „e. Kfm.“; „Einzelkaufmann“ ist kein zulässiger Zusatz (Gesetzesdetail ergänzt).",
    "k": "Recht",
    "s": "LF1 1.3.1"
   },
   {
    "tg": 4,
    "g": "br-rechte",
    "src": "ZP H22/46",
    "t": "mc",
    "q": "Bei welcher Maßnahme hat der Betriebsrat ein echtes Mitbestimmungsrecht, sodass seine Zustimmung erforderlich ist?",
    "a": [
     "Anordnung von Überstunden für das Inbound-Team",
     "Investition in eine neue Telefonanlage",
     "Erweiterung des Firmengebäudes",
     "langfristige Personalplanung",
     "Änderung der Unternehmensstrategie"
    ],
    "c": 0,
    "e": "Echte Mitbestimmung u. a. bei Arbeitszeit, Pausen, Überstunden, Unfallschutz, Arbeitskontrollen. Investitionen, Baumaßnahmen und langfristige Personalplanung lösen nur Informations- und Beratungsrechte aus. Versetzungen und Umgruppierungen ordnet das Buch den Mitwirkungsrechten (§ 99 BetrVG) zu.",
    "k": "Mitbestimmung",
    "s": "LF1 2.3.1"
   },
   {
    "tg": 4,
    "g": "uvv-bg",
    "src": "ZP H22/47",
    "t": "mc",
    "q": "Wo beschafft die Dialogfix GmbH die geltenden Unfallverhütungsvorschriften?",
    "a": [
     "bei der Berufsgenossenschaft",
     "bei der Industrie- und Handelskammer",
     "bei der Gewerkschaft ver.di",
     "bei der Krankenkasse",
     "bei der Bundesnetzagentur"
    ],
    "c": 0,
    "e": "Die Berufsgenossenschaften sind Träger der gesetzlichen Unfallversicherung und für Unfallverhütung zuständig; für Dialogmarketing ist es die Verwaltungs-Berufsgenossenschaft (VBG). Die Unfallverhütung regeln die „Grundsätze der Prävention“.",
    "k": "Institutionen",
    "s": "LF1 1.4"
   },
   {
    "tg": 4,
    "g": "leitungssystem",
    "src": "ZP H22/48",
    "t": "mc",
    "x": "Organigramm: Unter der Geschäftsführung stehen die Zentralbereiche Personal und Finanzen. Darunter gliedert sich das Unternehmen in die Geschäftsbereiche „Inbound-Service“, „Outbound-Vertrieb“ und „Fulfillment“, jeweils mit eigener Ergebnisverantwortung.",
    "q": "Welches Leitungssystem liegt vor?",
    "a": [
     "Spartenorganisation",
     "Stablinienorganisation",
     "Mehrlinienorganisation",
     "Matrixorganisation",
     "Projektorganisation"
    ],
    "c": 0,
    "e": "Spartenorganisation (Divisionalorganisation): Aufteilung in Geschäftsbereiche mit eigener Ergebnisverantwortung; die Leitung übernimmt strategische, die Sparten operative Aufgaben. Sie ist eine Form der Einlinienorganisation.",
    "k": "Organisation",
    "s": "LF1 1.2.2"
   },
   {
    "tg": 4,
    "g": "verguetung-faellig",
    "src": "ZP H22/49",
    "t": "mc",
    "q": "Wann muss die Ausbildungsvergütung für den laufenden Monat spätestens gezahlt werden?",
    "a": [
     "spätestens am letzten Arbeitstag des Monats",
     "am 15. des Folgemonats",
     "zum Ende des Ausbildungsjahres",
     "sobald das Berichtsheft vorgelegt wurde",
     "am ersten Werktag des Monats im Voraus"
    ],
    "c": 0,
    "e": "Nach § 18 Abs. 2 BBiG ist die Vergütung für den laufenden Kalendermonat spätestens am letzten Arbeitstag des Monats zu zahlen (Gesetzesdetail, im Buch nicht ausgeführt; das Buch nennt die Pflicht zur angemessenen, jährlich steigenden Vergütung).",
    "k": "BBiG",
    "s": "LF1 2.1.3"
   },
   {
    "tg": 4,
    "g": "ausbildungsordnung",
    "src": "ZP H22/50",
    "t": "mc",
    "q": "Wo sind die Prüfungsanforderungen für Zwischen- und Abschlussprüfung eines Ausbildungsberufs festgelegt?",
    "a": [
     "in der Ausbildungsordnung",
     "im Rahmenlehrplan",
     "im Ausbildungsvertrag",
     "im betrieblichen Ausbildungsplan",
     "im Berichtsheft"
    ],
    "c": 0,
    "e": "Die Ausbildungsordnung enthält Berufsbezeichnung, Dauer, Ausbildungsberufsbild, Ausbildungsrahmenplan und Prüfungsanforderungen. Der Rahmenlehrplan regelt nur den Berufsschulunterricht.",
    "k": "Ausbildung",
    "s": "LF1 2.1.1"
   },
   {
    "tg": 4,
    "g": "entgelt-uv",
    "src": "ZP H22/51",
    "t": "mc",
    "q": "Eine Auszubildende wundert sich, dass auf ihrer Abrechnung kein Beitrag zur Unfallversicherung steht. Warum?",
    "a": [
     "Die gesetzliche Unfallversicherung wird allein vom Arbeitgeber finanziert.",
     "Auszubildende sind nicht unfallversichert.",
     "Der Beitrag ist in der Krankenversicherung enthalten.",
     "Die Unfallversicherung ist freiwillig.",
     "Der Beitrag wird erst nach der Probezeit fällig."
    ],
    "c": 0,
    "e": "Unfallversicherung: Träger Berufsgenossenschaften, alle Arbeitnehmer und Azubis versichert, Finanzierung nur durch den Arbeitgeber, Beitrag nach Gefahrenklasse des Betriebs.",
    "k": "Sozialversicherung",
    "s": "LF1 2.4.1"
   },
   {
    "tg": 4,
    "g": "tarifarten",
    "src": "ZP H22/52",
    "t": "mc",
    "q": "Was wird typischerweise in einem Manteltarifvertrag geregelt?",
    "a": [
     "Urlaub, Arbeitszeit und Entgeltfortzahlung im Krankheitsfall",
     "die konkrete Höhe der Gehälter in den einzelnen Tarifgruppen",
     "die Zuordnung von Tätigkeiten zu Tarifgruppen",
     "die Höhe der Ausbildungsvergütung",
     "die Anschaffung einer neuen Telefonanlage"
    ],
    "c": 0,
    "e": "Manteltarifvertrag = Rahmenbedingungen (Urlaub, Arbeitszeit, Arbeitsschutz, Entgeltfortzahlung), langfristig. Entgeltrahmentarifvertrag = Zuordnung zu Tarifgruppen. Entgelttarifvertrag = konkrete Höhe von Löhnen, Gehältern, Ausbildungsvergütungen, Laufzeit meist 1–2 Jahre.",
    "k": "Mitbestimmung",
    "s": "LF1 2.3.4"
   },
   {
    "tg": 4,
    "g": "urlaub-jarbschg",
    "src": "ZP H22/53",
    "t": "mc",
    "x": "Drei Auszubildende erhalten laut Vertrag je 25 Werktage Urlaub. Alter zu Beginn des Kalenderjahres: Nele 15 Jahre, Timo 17 Jahre, Jana 19 Jahre.",
    "q": "Welche Aussage trifft zu?",
    "a": [
     "Timo erhält genau den gesetzlichen Mindesturlaub.",
     "Nele erhält genau den gesetzlichen Mindesturlaub.",
     "Jana erhält zu wenig Urlaub.",
     "Alle drei erhalten zu wenig Urlaub.",
     "Nele erhält mehr als den gesetzlichen Mindesturlaub."
    ],
    "c": 0,
    "e": "JArbSchG: unter 16 Jahren 30 Werktage, unter 17 Jahren 27, unter 18 Jahren 25 (Alter zu Beginn des Kalenderjahres). Nele (15) bekommt 5 Tage zu wenig, Timo (17) genau 25. Für Jana (19) gilt das BUrlG mit 24 Werktagen – sie liegt darüber.",
    "k": "Schutzgesetze",
    "s": "LF1 2.2.1"
   },
   {
    "tg": 4,
    "g": "ausbildungsrahmenplan",
    "src": "ZP H22/54",
    "t": "mc",
    "q": "Welche Aussage über den Ausbildungsrahmenplan trifft zu?",
    "a": [
     "Er ist Teil der Ausbildungsordnung und gliedert die betrieblichen Kenntnisse und Fertigkeiten sachlich und zeitlich.",
     "Er regelt den Unterricht in der Berufsschule.",
     "Er wird von jedem Betrieb frei erstellt.",
     "Er legt die Höhe der Ausbildungsvergütung fest.",
     "Er ist Teil des Berufsbildungsgesetzes."
    ],
    "c": 0,
    "e": "Der Ausbildungsrahmenplan ist bundesweit Teil der Ausbildungsordnung. Auf seiner Basis erstellt der Betrieb den betrieblichen Ausbildungsplan. Den Berufsschulunterricht regelt der Rahmenlehrplan der KMK.",
    "k": "Ausbildung",
    "s": "LF1 2.1.1"
   },
   {
    "tg": 4,
    "g": "wegeunfall",
    "src": "ZP H22/55",
    "t": "mc",
    "q": "Eine Auszubildende stürzt auf dem direkten Weg zur Arbeit mit dem Fahrrad. Wer übernimmt die Behandlungskosten?",
    "a": [
     "die gesetzliche Unfallversicherung (Berufsgenossenschaft)",
     "die gesetzliche Krankenversicherung",
     "die Auszubildende selbst",
     "die Haftpflichtversicherung des Arbeitgebers",
     "die gesetzliche Rentenversicherung"
    ],
    "c": 0,
    "e": "Die gesetzliche Unfallversicherung übernimmt die Kosten bei Unfällen am Arbeitsplatz und auf dem direkten Weg zur Arbeit (Wegeunfall) sowie bei Berufskrankheiten.",
    "k": "Sozialversicherung",
    "s": "LF1 2.4.1"
   },
   {
    "tg": 3,
    "g": "arbstaettv-bildschirm",
    "src": "ZP H22/56",
    "t": "mc",
    "q": "Welche Anforderung an Bildschirmarbeitsplätze ist FALSCH?",
    "a": [
     "Die Tastatur muss fest mit dem Bildschirm verbunden sein.",
     "Bildschirme müssen frei von störenden Reflexionen und Blendungen sein.",
     "Arbeitsflächen müssen eine reflexionsarme Oberfläche haben.",
     "Die Zeichen müssen scharf und flimmerfrei dargestellt werden.",
     "Die Tastaturbeschriftung muss kontrastreich und gut lesbar sein."
    ],
    "c": 0,
    "e": "Nach ArbStättV muss die Tastatur vom Bildschirm getrennt und neigbar sein, damit eine ergonomische Haltung möglich ist (Detail der Verordnung). Reflexions- und Blendfreiheit von Bildschirm und Arbeitsfläche zitiert das Buch ausdrücklich.",
    "k": "Arbeitsplatz",
    "s": "LF1 4"
   },
   {
    "tg": 4,
    "g": "sicherheit-buero",
    "src": "ZP H22/57",
    "t": "mc",
    "q": "Welche Situation erfüllt die Sicherheitsanforderungen im Büro?",
    "a": [
     "Bodenanschlussdosen sind fußbodenbündig abgedeckt.",
     "Der Bürostuhl steht auf vier Rollen.",
     "Mehrere Schubladen des Rollcontainers lassen sich gleichzeitig herausziehen.",
     "Kabel verlaufen lose quer über den Gang.",
     "Der Lichtschalter befindet sich hinter einem Vorhang."
    ],
    "c": 0,
    "e": "Abgedeckte Bodendosen vermeiden Stolperstellen. Ein Bürostuhl braucht mindestens fünf Rollen (standsicher), gleichzeitig ausziehbare Schubladen lassen den Container kippen, lose Kabel sind Stolperfallen.",
    "k": "Arbeitsschutz",
    "s": "LF1 3.2"
   },
   {
    "tg": 4,
    "g": "energie-sparen",
    "src": "ZP H22/58",
    "t": "mc",
    "q": "Welche Maßnahme senkt den Energieverbrauch im Büro?",
    "a": [
     "die Klimaanlage angemessen temperieren",
     "Geräte über Nacht im Stand-by lassen",
     "Bildschirmschoner einsetzen",
     "Mehrfachsteckdosen ohne Schalter verwenden",
     "bei laufender Klimaanlage die Fenster öffnen"
    ],
    "c": 0,
    "e": "Buchliste: Bildschirme ausschalten, Energiesparoptionen nutzen, Geräte komplett ausschalten statt Stand-by, Lampen ausschalten, Steckdosenleisten mit Kippschalter, Klimaanlage angemessen temperieren, sparsame Geräte kaufen.",
    "k": "Umweltschutz",
    "s": "LF1 3.4"
   },
   {
    "tg": 4,
    "g": "energy-star",
    "src": "ZP H22/59",
    "t": "mc",
    "q": "Woran erkennen Sie besonders energiesparende Bürogeräte?",
    "a": [
     "am Energy-Star-Kennzeichen",
     "am EMAS-Logo",
     "am GS-Zeichen",
     "am Grünen Punkt",
     "am Fairtrade-Siegel"
    ],
    "c": 0,
    "e": "Das Energy-Star-Kennzeichen steht für energiesparende Bürogeräte. EMAS = geprüftes Umweltmanagement, GS = geprüfte Sicherheit (z. B. Bürostühle), Grüner Punkt = Verpackungen im Dualen System.",
    "k": "Umweltschutz",
    "s": "LF1 3.4"
   },
   {
    "tg": 4,
    "g": "krwg-gesetz",
    "src": "ZP H22/60",
    "t": "mc",
    "q": "Welches Gesetz stellt den Recycling-Gedanken und die Abfallhierarchie in den Mittelpunkt?",
    "a": [
     "das Kreislaufwirtschaftsgesetz (KrWG)",
     "das Bundes-Immissionsschutzgesetz",
     "das Arbeitsschutzgesetz",
     "das Bundesdatenschutzgesetz",
     "die Gewerbeordnung"
    ],
    "c": 0,
    "e": "Das KrWG dient der Schonung natürlicher Ressourcen und der umweltverträglichen Beseitigung von Abfällen; schon der Name betont den Kreislauf der Wertstoffe. Das BImSchG schützt vor Luftverschmutzung und Lärm.",
    "k": "Umweltschutz",
    "s": "LF1 3.4"
   }
  ]
 },
 {
  "id": "F24",
  "name": "Frühjahr 2024",
  "note": "Nachbau · Originalreihenfolge",
  "items": [
   {
    "tg": 1,
    "g": "strukturschwach",
    "src": "ZP F24/1",
    "t": "mc",
    "q": "Callcenter haben sich in den letzten Jahrzehnten verstärkt in sogenannten strukturschwachen Regionen angesiedelt. Was ist damit gemeint?",
    "a": [
     "Regionen mit geringer Wirtschaftskraft, in denen z. B. alte Industriezweige weggebrochen sind",
     "Regionen mit besonders hohem Lohnniveau",
     "Regionen, die keinerlei staatliche Förderung erhalten",
     "Regionen mit sehr niedriger Arbeitslosigkeit",
     "Regionen, in denen fast ausschließlich der quartäre Sektor vertreten ist"
    ],
    "c": 0,
    "e": "Das Buch nennt als Ziel der Ansiedlungsbemühungen, das Wegbrechen alter Wirtschaftszweige (Stahl, Kohle, Werften) in strukturschwachen Regionen auszugleichen – also Gebiete mit geringer Wirtschaftskraft, z. B. ländliche Räume oder altindustrialisierte Problemgebiete.",
    "k": "Branche & Historie",
    "s": "LF2 1.1.2"
   },
   {
    "tg": 1,
    "g": "praesentation-ablauf",
    "src": "ZP F24/2",
    "t": "order",
    "q": "Sie stellen Ihren Ausbildungsbetrieb am Tag der offenen Tür vor. Bringen Sie die Schritte der Präsentation in eine sinnvolle Reihenfolge.",
    "items": [
     "Begrüßung und Einstieg",
     "Überblick über die Inhalte der Präsentation",
     "derzeitige Tätigkeitsfelder des Ausbildungsbetriebs",
     "Ausblick auf künftige Entwicklungen",
     "Zusammenfassung und Fragen der Zuhörer"
    ],
    "e": "Präsentationen gliedern sich in Eröffnung (Einstieg, Thema, Gliederung), Hauptteil (Informationen, Argumente – hier Ist-Zustand vor Ausblick) und Abschluss (Zusammenfassung, Fragen und Anregungen). Eröffnung und Abschluss sollen zusammen höchstens 20 % der Zeit beanspruchen.",
    "k": "Präsentation",
    "s": "LF2 3.1"
   },
   {
    "tg": 3,
    "g": "diagramm-art",
    "src": "ZP F24/3",
    "t": "mc",
    "q": "Sie möchten die Zahl der Inbound- und Outbound-Mitarbeiter an vier Standorten miteinander vergleichen. Welche Darstellung eignet sich am besten?",
    "a": [
     "Säulendiagramm",
     "Kreisdiagramm",
     "Kurvendiagramm",
     "Organigramm",
     "Flussdiagramm"
    ],
    "c": 0,
    "e": "Säulen- bzw. Balkendiagramme eignen sich für Größenvergleiche. Ein Kreisdiagramm zeigt die Anteile eines einzigen Gesamtwertes; ein Kurvendiagramm zeigt Entwicklungen über die Zeit.",
    "k": "Präsentation",
    "s": "LF2 3.2"
   },
   {
    "tg": 1,
    "g": "prozent-steigerung",
    "src": "ZP F24/4",
    "t": "calc",
    "x": "Umsatzindex der Informations- und Kommunikationsdienstleister (Basisjahr 2021 = 100): 2. Quartal 2023: 112,4 · 2. Quartal 2025: 121,8",
    "q": "Um wie viel Prozent ist der Umsatzindex zwischen den beiden Quartalen gestiegen?",
    "ans": [
     "8,4"
    ],
    "unit": "%",
    "hint": "Auf eine Nachkommastelle runden.",
    "e": "(121,8 − 112,4) · 100 / 112,4 = 9,4 · 100 / 112,4 = 8,4 %. Grundwert ist der Ausgangswert 112,4 – die bloße Differenz der Indexwerte (9,4) sind Indexpunkte, keine Prozent. Probe: 112,4 · 1,084 ≈ 121,8.",
    "k": "Sektoren & DL",
    "s": "LF2 1.2.1"
   },
   {
    "tg": 1,
    "g": "sektoren",
    "src": "ZP F24/5",
    "t": "mc",
    "q": "Welche Aussage zum Sektorenmodell trifft zu?",
    "a": [
     "Der Tertiärsektor wird zunehmend weiter unterteilt, z. B. in klassische und informations- bzw. kommunikationsorientierte Dienstleistungen.",
     "Primär- und Sekundärsektor gewinnen seit Jahrzehnten an Bedeutung.",
     "Die Dialogmarketingbranche gehört zum Sekundärsektor.",
     "Handel und Banken gehören zum Primärsektor.",
     "Die Energieversorgung gehört zum Tertiärsektor."
    ],
    "c": 0,
    "e": "Um der Bedeutung der Dienstleistungen gerecht zu werden, wird der Tertiärsektor laut Buch in klassische Dienstleistungen und den Informations- bzw. Wissenssektor aufgeteilt. Energieversorgung gehört zum Sekundärsektor, Handel und Banken zum Tertiärsektor.",
    "k": "Sektoren & DL",
    "s": "LF2 1.2.1"
   },
   {
    "tg": 1,
    "g": "omnichannel",
    "src": "ZP F24/6",
    "t": "mc",
    "q": "Ein Multichannel-Contact-Center stellt auf Omnichannel um. Welches Ziel wird damit verfolgt?",
    "a": [
     "Alle Kanäle werden vernetzt, damit der Kunde ein nahtloses Kundenerlebnis mit höherer Servicequalität erhält.",
     "Die Zahl der Touchpoints wird bewusst verringert.",
     "Alle Anliegen werden künftig nur noch telefonisch bearbeitet.",
     "Die Anforderungen an die Qualifikation der Mitarbeiter sinken.",
     "Social-Media-Kanäle werden abgeschaltet."
    ],
    "c": 0,
    "e": "Multichannel = mehrere Kanäle, die nicht vollständig verknüpft sind. Omnichannel = jeder vom Kunden gewünschte Kanal steht zur Verfügung und ist mit den anderen vernetzt – Ziel ist ein naht- und reibungsloses Kundenerlebnis. Die Anforderungen an Mitarbeiter steigen dabei eher.",
    "k": "Typologie",
    "s": "LF2 2.1.2"
   },
   {
    "tg": 1,
    "g": "customer-centricity",
    "src": "ZP F24/7",
    "t": "mc",
    "q": "Welche Aussage über Customer Centricity trifft zu?",
    "a": [
     "Der Kunde rückt in den Mittelpunkt: Kanäle und Prozesse werden konsequent an seinen Bedürfnissen ausgerichtet.",
     "Customer Centricity bedeutet, Kunden vorrangig über das Telefon zu betreuen.",
     "Customer Centricity ist eine Formel für den Aufbau von Werbebriefen.",
     "Customer Centricity betrifft nur die Marketingabteilung.",
     "Customer Centricity heißt, möglichst wenige Touchpoints anzubieten."
    ],
    "c": 0,
    "e": "Customer Centricity ist ein Gesamtkonzept, das alle Unternehmensbereiche betrifft und die Bedürfnisse der Kunden in den Mittelpunkt stellt; daraus leitet sich Omnichannel ab. Die Formel für Werbebriefe bzw. Customer-Journey-Phasen ist AIDA.",
    "k": "Typologie",
    "s": "LF2 2.1.2"
   },
   {
    "tg": 2,
    "g": "pflichtangaben",
    "src": "ZP F24/8",
    "t": "mc",
    "q": "Welche Angaben muss eine geschäftliche E-Mail der Dialogfix GmbH an einen Kunden enthalten?",
    "a": [
     "die Firma mit Rechtsform, den Sitz sowie Registergericht und Handelsregisternummer",
     "die Steuernummer der GmbH",
     "die Privatanschriften der Geschäftsführer",
     "die Anschriften aller Niederlassungen",
     "die Bankverbindung jedes Mitarbeiters"
    ],
    "c": 0,
    "e": "§ 37a HGB (im Buch zitiert): Firma, Rechtsformzusatz, Ort der Handelsniederlassung, Registergericht und HR-Nummer. Für E-Mails gilt dasselbe wie für Geschäftsbriefe. Bei der GmbH kommen die Namen aller Geschäftsführer hinzu (§ 35a GmbHG, ergänzt aus dem Gesetz).",
    "k": "Schriftliche Kommunikation",
    "s": "LF3 1.4"
   },
   {
    "tg": 2,
    "g": "watzlawick",
    "src": "ZP F24/9",
    "t": "mc",
    "q": "Welche Formulierung gibt ein Axiom von Paul Watzlawick NICHT korrekt wieder?",
    "a": [
     "„Jede Kommunikation hat mehrere Sachinhalte und einen Appellaspekt.“",
     "„Man kann nicht nicht kommunizieren.“",
     "„Menschliche Kommunikation bedient sich digitaler und analoger Modalitäten.“",
     "„Die Natur einer Beziehung ist durch die Interpunktionen der Kommunikationsabläufe seitens der Partner bedingt.“",
     "„Zwischenmenschliche Kommunikationsabläufe sind entweder symmetrisch oder komplementär …“"
    ],
    "c": 0,
    "e": "Das zweite Axiom lautet: „Jede Kommunikation hat einen Inhalts- und einen Beziehungsaspekt, derart, daß letzterer den ersteren bestimmt …“. Der „Appell“ gehört zu Schulz von Thun. In Prüfungen wird häufig am Wortlaut variiert – exakt lernen.",
    "k": "Watzlawick",
    "s": "LF3 2.3"
   },
   {
    "tg": 2,
    "g": "geschlossene-fragen",
    "src": "ZP F24/10",
    "t": "mc",
    "q": "Welchen Vorteil haben geschlossene Fragen?",
    "a": [
     "Sie fordern zu einer Entscheidung auf und liefern kurze, präzise Antworten.",
     "Der Kunde hat einen großen Antwortspielraum.",
     "Sie liefern viele Informationen über Gefühle und Meinungen.",
     "Der Kunde fühlt sich dabei nie unter Druck gesetzt.",
     "Sie eignen sich besonders, um ein Gespräch zu eröffnen."
    ],
    "c": 0,
    "e": "Vorteile laut Buch: Entscheidung wird herbeigeführt, Antwort kurz und präzise, einzelne Sachverhalte gezielt abfragbar. Nachteile: eingeengte Antworten, Kunde kann sich unter Druck gesetzt fühlen. Gesprächseröffnung und Spielraum → offene Fragen.",
    "k": "Gesprächsführung",
    "s": "LF3 3.2.2"
   },
   {
    "tg": 2,
    "g": "stimme",
    "src": "ZP F24/11",
    "t": "mc",
    "q": "Welche Aussage zur Stimme am Telefon trifft zu?",
    "a": [
     "Eine natürliche, angenehme Stimme hilft zu überzeugen, weil am Telefon die nonverbalen Signale fehlen.",
     "Eine künstlich hohe Stimmlage wirkt freundlicher und schont die Stimme.",
     "Die Körperhaltung hat keinen Einfluss auf den Klang der Stimme.",
     "Schnelles Sprechen wirkt besonders kompetent.",
     "Lautes Sprechen wirkt souverän und sympathisch."
    ],
    "c": 0,
    "e": "Beim Telefonieren entfallen nonverbale Mittel, deshalb trägt die paraverbale Ebene (Stimme, Tempo, Lautstärke) mehr. Verstellte, zu hohe Stimmlagen belasten die Stimme; aufrechte Haltung gibt Volumen; zu schnell wirkt gehetzt, zu laut hektisch und aggressiv.",
    "k": "Stimme & Stress",
    "s": "LF3 3.2.5"
   },
   {
    "tg": 2,
    "g": "positiv-formulieren",
    "src": "ZP F24/12",
    "t": "mc",
    "q": "Ein Kunde erwähnt eine Rabattaktion, die Sie nicht kennen. Welche Reaktion ist positiv und motivierend?",
    "a": [
     "„Das ist eine neue Information für mich. Ich erkundige mich sofort für Sie danach.“",
     "„Da haben Sie wohl etwas falsch verstanden.“",
     "„Da ist Ihnen ein Fehler unterlaufen.“",
     "„Die zuständige Kollegin ist gerade nicht da.“",
     "„Dazu sind wir gesetzlich nicht verpflichtet.“"
    ],
    "c": 0,
    "e": "Buch: statt „Das kann ja gar nicht sein“ besser „Das ist neu für mich“. Die Reaktion zeigt Offenheit und Einsatz. Schuldzuweisung und Verweis auf Abwesende oder Gesetze sind Gesprächsstörer.",
    "k": "Beschwerden",
    "s": "LF5 4.1.3"
   },
   {
    "tg": 2,
    "g": "kundentypen",
    "src": "ZP F24/13",
    "t": "mc",
    "q": "Woran erkennen Sie den Kundentyp „Vielredner“?",
    "a": [
     "Er spricht viel und laut, steigert sich in eigene Ausführungen hinein und unterbricht gern.",
     "Er antwortet einsilbig und wirkt verschlossen.",
     "Er weiß alles besser und lässt sich schwer überzeugen.",
     "Er zögert und vertröstet auf später.",
     "Er drängt ständig zur Eile."
    ],
    "c": 0,
    "e": "Kundentypen laut Buch: Vielredner (redet viel, steigert sich hinein – gezielt unterbrechen, zusammenfassen), Schweiger (einsilbig – offene Fragen), Besserwisser (um Hilfe bitten), Entscheidungsschwacher (nicht drängen, Zwischenergebnisse), Ungeduldiger (ruhig bleiben, roter Faden).",
    "k": "Kundentypen",
    "s": "LF3 4.2"
   },
   {
    "tg": 2,
    "g": "meldeformel",
    "src": "ZP F24/14",
    "t": "mc",
    "q": "Was gehört laut Fachbuch NICHT zur Meldeformel?",
    "a": [
     "die eigene Personalnummer",
     "die Begrüßung",
     "der Name der Firma bzw. Abteilung",
     "der Name des Mitarbeiters",
     "eine offene Frage"
    ],
    "c": 0,
    "e": "Bewährte Struktur der Meldeformel: Begrüßung – Name der Firma/Abteilung – Name des Mitarbeiters – offene Frage (z. B. „Was kann ich für Sie tun?“). Die offene Frage leitet bereits die Bedarfsermittlung ein.",
    "k": "Gesprächsführung",
    "s": "LF5 1.1.1"
   },
   {
    "tg": 2,
    "g": "lcq",
    "src": "ZP F24/15",
    "t": "calc",
    "q": "In der Hotline gehen zwischen 9 und 10 Uhr 512 Anrufe ein, 489 davon werden von Agents angenommen. Wie hoch ist die Lost-Call-Quote?",
    "ans": [
     "4,5"
    ],
    "unit": "%",
    "hint": "Auf eine Nachkommastelle runden.",
    "e": "Aufgelegte Anrufe = 512 − 489 = 23. Lost-Call-Quote = 23 · 100 / 512 = 4,5 %. Bezugsgröße sind alle eingehenden, nicht die angenommenen Anrufe.",
    "k": "Kennzahlen",
    "s": "LF5 5.1.3"
   },
   {
    "tg": 2,
    "g": "lcq-servicelevel",
    "src": "ZP F24/16",
    "t": "mc",
    "q": "Mit welcher Kennzahl hängt die Lost-Call-Quote besonders eng zusammen?",
    "a": [
     "mit dem Servicelevel",
     "mit der Stornoquote",
     "mit der Festbestellquote",
     "mit der Ausschöpfungsquote",
     "mit der Verkaufsquote"
    ],
    "c": 0,
    "e": "Anrufer legen meist auf, wenn ihnen die Wartezeit zu lang ist. Ein niedriger Servicelevel (Erreichbarkeit) begünstigt deshalb Lost Calls. Storno-, Festbestell- und Ausschöpfungsquote sind Outbound-Kennzahlen.",
    "k": "Kennzahlen",
    "s": "LF5 5.1.3"
   },
   {
    "tg": 3,
    "g": "zeitstabilitaet",
    "src": "ZP F24/17",
    "t": "mc",
    "q": "Bei welcher Erfassung wird der Grundsatz der Zeitstabilität verletzt?",
    "a": [
     "Beim Kunden wird „Alter: 34 Jahre“ statt des Geburtsdatums gespeichert.",
     "Bei der Anschrift fehlt die Hausnummer.",
     "Der Kunde wird ein zweites Mal angelegt.",
     "Der Straßenname ist falsch geschrieben.",
     "Für den Kunden sind zwei unterschiedliche Geburtsdaten gespeichert."
    ],
    "c": 0,
    "e": "Zeitstabilität: Daten so erfassen, dass sie lange gültig bleiben – das Alter ist nach einem Jahr falsch, das Geburtsdatum nicht. Fehlende Hausnummer = Vollständigkeit, doppelter Kunde = Redundanzvermeidung, Schreibfehler = Richtigkeit, zwei Geburtsdaten = Konsistenz.",
    "k": "Datenmanagement",
    "s": "LF5 2.2"
   },
   {
    "tg": 2,
    "g": "data-warehouse",
    "src": "ZP F24/18",
    "t": "mc",
    "q": "Was ist ein Data-Warehouse?",
    "a": [
     "eine zentrale Datensammlung, die sich aus verschiedenen Datenquellen im Unternehmen zusammensetzt",
     "ein mathematisch-statistisches Verfahren, das typische Muster in Datensätzen erkennt",
     "ein Anbieter, der Adressen für Marketingaktionen verkauft",
     "eine Online-Produktdatenbank für Kunden",
     "ein Lager für auszuliefernde Waren"
    ],
    "c": 0,
    "e": "Data-Warehouse = zentrale Datensammlung (meist Datenbank) aus verschiedenen Quellen, z. B. Kunden- und Erfolgsdaten. Das Verfahren zur Mustererkennung darin heißt Data-Mining (Verwechslungspaar). Adressverkäufer = Adressbroker.",
    "k": "CRM",
    "s": "LF5 3.1.2"
   },
   {
    "tg": 2,
    "g": "bonitaet-zahlart",
    "src": "ZP F24/19",
    "t": "mc",
    "q": "Die Bonitätsprüfung eines Neukunden fällt negativ aus. Welche Zahlungsart sollten Sie ihm NICHT anbieten?",
    "a": [
     "Lastschrift nach Lieferung",
     "Vorauskasse",
     "Nachnahme",
     "Sofortüberweisung beim Bestellabschluss",
     "Kreditkarte mit Zahlungsgarantie"
    ],
    "c": 0,
    "e": "Bei schlechter Bonität nur Zahlungsarten ohne Ausfallrisiko: Vorauskasse, Nachnahme, Sofortüberweisung, Kreditkarte (Zahlungsgarantie der Kreditkartengesellschaft). Bei der Lastschrift liefert das Unternehmen vor – Rücklastschrift und Widerruf innerhalb von acht Wochen sind möglich.",
    "k": "Zahlungsverkehr",
    "s": "LF5 6.2"
   },
   {
    "tg": 2,
    "g": "versandkosten",
    "src": "ZP F24/20",
    "t": "calc",
    "x": "Preisliste Paketdienst (Beispielwerte): Päckchen bis 2 kg 4,50 € (keine Haftung, nicht versicherbar) · Paket bis 2 kg 5,99 € · Paket bis 5 kg 7,49 € · Transportversicherung für Pakete: bis 2.500 € Warenwert 6,00 € · bis 25.000 € Warenwert 18,00 €\nSendung: Tablet, verpackt 1,2 kg, Warenwert 1.340 €, der volle Wert soll abgesichert werden.",
    "q": "Wie hoch sind die Versandkosten insgesamt?",
    "ans": [
     "11,99"
    ],
    "unit": "€",
    "e": "Päckchen scheiden aus, weil sie weder haften noch versicherbar sind. Paket bis 2 kg 5,99 € + Transportversicherung bis 2.500 € 6,00 € = 11,99 €. Das Buch nennt für DHL-Pakete eine Grundhaftung bis 500 €, Päckchen ohne Haftung.",
    "k": "Versand",
    "s": "LF5 7.2"
   },
   {
    "tg": 3,
    "g": "fuehrungsstil",
    "src": "ZP F24/21",
    "t": "mc",
    "q": "Der Teamleiter trifft alle Entscheidungen allein, gibt sie als Anweisung vor und kontrolliert die Agents eng. Welcher Führungsstil liegt vor?",
    "a": [
     "autoritärer Führungsstil",
     "kooperativer Führungsstil",
     "Laissez-faire-Führungsstil",
     "situativer Führungsstil",
     "Management by Objectives"
    ],
    "c": 0,
    "e": "Autoritär: Vorgesetzter entscheidet allein, enge Kontrolle – schnell, aber ohne Ideen und Korrektiv. Kooperativ: Mitarbeiter werden beteiligt; Laissez-faire: kaum Steuerung. Management by Objectives ist eine Führungstechnik (Zielvereinbarung), kein Führungsstil.",
    "k": "Führung",
    "s": "LF1 1.1.3"
   },
   {
    "tg": 2,
    "g": "stichprobe",
    "src": "ZP F24/22",
    "t": "calc",
    "q": "Die Qualitätssicherung hört 4 % aller Gespräche mit. Am Montag wurden 637 Gespräche geführt. Wie viele Gespräche müssen mindestens mitgehört werden?",
    "ans": [
     "26"
    ],
    "unit": "Gespräche",
    "hint": "Ganze Gespräche – sinnvoll runden.",
    "e": "637 · 4 / 100 = 25,48. Da mindestens 4 % erreicht werden müssen und nur ganze Gespräche mitgehört werden können, wird auf 26 aufgerundet (25 wären nur 3,92 %).",
    "k": "Kennzahlen",
    "s": "LF5 5.1"
   },
   {
    "tg": 3,
    "g": "teambesprechung",
    "src": "ZP F24/23",
    "t": "mc",
    "q": "Welcher Anlass eignet sich am besten für eine Teambesprechung?",
    "a": [
     "die Einführung eines neuen Projekts mit den eingesetzten Agents besprechen",
     "die Leistungsbeurteilung eines einzelnen Mitarbeiters",
     "die Mitteilung einer Kündigung an einen Mitarbeiter",
     "die Erfassung von Kundendaten",
     "die Lösung eines einzelnen technischen Kundenproblems"
    ],
    "c": 0,
    "e": "Teambesprechungen dienen arbeitsbezogenen Informationen und Diskussionen, die alle Beteiligten betreffen – z. B. ein neues Projekt. Beurteilungen und Kündigungen gehören in vertrauliche Einzelgespräche.",
    "k": "Information & Lernen",
    "s": "LF1 5"
   },
   {
    "tg": 3,
    "g": "lerntypen",
    "src": "ZP F24/24",
    "t": "mc",
    "q": "Sie sollen neuen Kollegen die Kundendatenbank vor allem visuell vermitteln. Welche Methode wählen Sie?",
    "a": [
     "die Datenbank über den Beamer vorführen und die Eingabemasken zeigen",
     "Gesprächsmitschnitte vorspielen",
     "die Kollegen an einer Simulation selbst üben lassen",
     "Erfahrungsberichte in der Gruppe diskutieren",
     "den Leitfaden laut vorlesen"
    ],
    "c": 0,
    "e": "Visuell = über die Augen (Bilder, Grafiken, Vorführung). Mitschnitte und Vorlesen = auditiv, Simulation = motorisch, Diskussion = kommunikativ.",
    "k": "Information & Lernen",
    "s": "LF1 6.8"
   },
   {
    "tg": 3,
    "g": "arbeitsraum-mittel",
    "src": "ZP F24/25",
    "t": "match",
    "q": "Ordnen Sie zu: Gehört der Punkt zu den Arbeitsmitteln oder zum Arbeitsraum bzw. Arbeitsumfeld?",
    "pairs": [
     [
      "Bürostuhl mit fünf Rollen",
      "Arbeitsmittel"
     ],
     [
      "Bildschirm",
      "Arbeitsmittel"
     ],
     [
      "Raumtemperatur",
      "Arbeitsraum/-umfeld"
     ],
     [
      "Beleuchtung des Raumes",
      "Arbeitsraum/-umfeld"
     ],
     [
      "Bewegungsfläche von mindestens 1,5 m²",
      "Arbeitsraum/-umfeld"
     ]
    ],
    "e": "Arbeitsmittel sind die Geräte und Möbel, mit denen gearbeitet wird (Stuhl, Bildschirm, Headset, Tastatur). Zum Arbeitsraum bzw. -umfeld gehören Fläche, Klima, Licht und Fluchtwege. Das Buch nennt 12 bis 15 m² je Arbeitsplatz im Großraum und mindestens 1,5 m² Bewegungsfläche.",
    "k": "Arbeitsplatz",
    "s": "LF1 4"
   },
   {
    "tg": 3,
    "g": "arbstaettv-bildschirm",
    "src": "ZP F24/26",
    "t": "mc",
    "q": "Welche Anforderung an den Bildschirm verlangt die Arbeitsstättenverordnung NICHT?",
    "a": [
     "Der Bildschirm muss besonders leicht zu reinigen sein.",
     "Die Zeichen müssen scharf und deutlich dargestellt werden.",
     "Das Bild muss stabil und flimmerfrei sein.",
     "Der Bildschirm muss frei von störenden Reflexionen und Blendungen sein.",
     "Helligkeit und Kontrast müssen einstellbar sein."
    ],
    "c": 0,
    "e": "Die ArbStättV (Anhang 6) stellt Anforderungen an Zeichendarstellung, Bildstabilität, Einstellbarkeit sowie Reflexions- und Blendfreiheit – nicht an die Reinigung (Detail der Verordnung; Reflexionsfreiheit zitiert das Buch).",
    "k": "Arbeitsplatz",
    "s": "LF1 4"
   },
   {
    "tg": 3,
    "g": "meeting-planen",
    "src": "ZP F24/27",
    "t": "order",
    "q": "Sie organisieren das nächste Teammeeting. Bringen Sie die Schritte in eine sinnvolle Reihenfolge.",
    "items": [
     "Thema, Ziel und Teilnehmer festlegen, Tagesordnung entwerfen",
     "Termin mit den Teilnehmern abstimmen",
     "Einladung mit Tagesordnung und letztem Protokoll versenden",
     "nach den Zusagen Raum und Verpflegung organisieren",
     "Unterlagen und Technik bereitlegen"
    ],
    "e": "Erst Inhalt, dann Termin, dann Einladung mit Unterlagen. Raum und Verpflegung erst nach den Zusagen planen, weil erst dann die Teilnehmerzahl feststeht. Unmittelbar vorher Unterlagen und Technik vorbereiten.",
    "k": "Information & Lernen",
    "s": "LF1 5"
   },
   {
    "tg": 3,
    "g": "raumklima",
    "src": "ZP F24/28",
    "t": "mc",
    "q": "Welche Werte sorgen laut Fachbuch für ein angenehmes Raumklima im Büro?",
    "a": [
     "Lufttemperatur zwischen 20 und 23 °C bei 50 bis 60 % Luftfeuchtigkeit",
     "Fenster dauerhaft gekippt für ständige Frischluft",
     "Luftfeuchtigkeit von mindestens 80 %",
     "Raumsprays gegen verbrauchte Luft",
     "Lufttemperatur von 26 °C, damit niemand friert"
    ],
    "c": 0,
    "e": "Das Buch nennt 20–23 °C als angenehm und 50–60 % Luftfeuchtigkeit. Stoßlüften statt Dauerkippen (Zugluft, Energieverlust); Raumsprays belasten die Luft zusätzlich.",
    "k": "Arbeitsplatz",
    "s": "LF1 4"
   },
   {
    "tg": 3,
    "g": "arbeitsplatz-recht",
    "src": "ZP F24/29",
    "t": "mc",
    "q": "Welche Rechtsgrundlage regelt die Einrichtung von Arbeitsstätten einschließlich der Bildschirmarbeitsplätze?",
    "a": [
     "die Arbeitsstättenverordnung",
     "das Arbeitszeitgesetz",
     "das Bundesurlaubsgesetz",
     "das Entgeltfortzahlungsgesetz",
     "das Berufsbildungsgesetz"
    ],
    "c": 0,
    "e": "Die ArbStättV (Grundlage: Arbeitsschutzgesetz) enthält die Regeln zur Bildschirmarbeit; konkretisiert werden sie durch die Technischen Regeln für Arbeitsstätten (ASR). Das ArbZG regelt Arbeitszeiten, nicht die Einrichtung.",
    "k": "Arbeitsplatz",
    "s": "LF1 4"
   },
   {
    "tg": 3,
    "g": "inverssuche",
    "src": "ZP F24/30",
    "t": "mc",
    "q": "Sie haben nur die Telefonnummer eines Anrufers notiert. Mit welchem Dienst finden Sie Name und Anschrift heraus?",
    "a": [
     "Rückwärts- bzw. Inverssuche der Telefonauskunft",
     "R-Gespräch",
     "Call-by-Call",
     "Preselection",
     "Faxabruf"
    ],
    "c": 0,
    "e": "Die Telefonauskunft kann über die Telefonnummer Anschriften von Privatpersonen und Firmen ermitteln (Rückwärts-/Inverssuche). R-Gespräch = Angerufener zahlt; Call-by-Call/Preselection = Anbieterwahl; Faxabruf = Informationen per Fax abrufen.",
    "k": "Netze & Dienste",
    "s": "LF4 3.1"
   },
   {
    "tg": 3,
    "g": "betriebssystem",
    "src": "ZP F24/31",
    "t": "mc",
    "q": "Welche Aufgabe gehört NICHT zu einem Betriebssystem?",
    "a": [
     "Datenbanken und Abfragen erstellen",
     "Arbeitsspeicher, Prozessor und Laufwerke verwalten",
     "Programme laden und beenden",
     "eine grafische Benutzeroberfläche bereitstellen",
     "ein Dateisystem bereitstellen"
    ],
    "c": 0,
    "e": "Betriebssysteme stellen die Grundfunktionalität bereit: GUI, Hardwareverwaltung, Laden/Beenden von Programmen, Dateisystem. Datenbanken erstellt man mit einem Datenbankprogramm (z. B. Access, Base).",
    "k": "Software",
    "s": "LF4 2.1"
   },
   {
    "tg": 3,
    "g": "ocr",
    "src": "ZP F24/32",
    "t": "mc",
    "q": "Die Poststelle scannt täglich 300 Kundenbriefe ein. Welche Software macht daraus bearbeitbaren Text?",
    "a": [
     "OCR-Software (Texterkennung)",
     "Präsentationssoftware",
     "Workforce-Management-System",
     "Firewall",
     "Webbrowser"
    ],
    "c": 0,
    "e": "OCR digitalisiert schriftliche Vorlagen; typische Einsatzfelder laut Buch sind Kundenkorrespondenz, Formulare und Verträge sowie Dokumenten-Management-Systeme.",
    "k": "Software",
    "s": "LF4 2.2"
   },
   {
    "tg": 3,
    "g": "wms",
    "src": "ZP F24/33",
    "t": "mc",
    "q": "Mit welchem System plant die Workforce-Managerin, wie viele Agents am Montag zwischen 9 und 10 Uhr benötigt werden?",
    "a": [
     "mit dem Workforce-Management-System (Personaleinsatzplanung)",
     "mit der Pausenverwaltung",
     "mit der Zeiterfassung",
     "mit dem Kampagnen-Management-System",
     "mit Unified Messaging"
    ],
    "c": 0,
    "e": "WMS bzw. PEP-Software plant die Kapazitäten an Agents für die Hotline, Grundlage ist das prognostizierte Anrufaufkommen (Forecast) und die AHT. Die Pausenverwaltung steuert nur die Pausen im laufenden Betrieb.",
    "k": "Software",
    "s": "LF4 2.3"
   },
   {
    "tg": 3,
    "g": "protokolle",
    "src": "ZP F24/34",
    "t": "mc",
    "q": "Welches Protokoll sorgt für eine sichere, verschlüsselte Datenübertragung zwischen Browser und Webserver?",
    "a": [
     "HTTPS",
     "HTTP",
     "SMTP",
     "POP3",
     "FTP"
    ],
    "c": 0,
    "e": "HTTPS = verschlüsselte Übertragung (erkennbar am „s“ und Schloss-Symbol, SSL-Zertifikat). HTTP = unverschlüsselte Webseitenübertragung, SMTP = E-Mail versenden, POP3 = E-Mail abholen, FTP = Dateien hoch- und herunterladen.",
    "k": "Netze & Dienste",
    "s": "LF4 1.1.6"
   },
   {
    "tg": 3,
    "g": "url",
    "src": "ZP F24/35",
    "t": "match",
    "q": "Ordnen Sie die Bestandteile der Webadresse https://www.kontaktwerk.de zu.",
    "pairs": [
     [
      "https",
      "Übertragungsprotokoll"
     ],
     [
      "www",
      "Angabe des Dienstes"
     ],
     [
      "kontaktwerk",
      "Name des Internetangebots"
     ],
     [
      "de",
      "Top Level Domain"
     ]
    ],
    "e": "Aufbau laut Buch: Protokoll (http/https) – Dienst (www = World Wide Web) – Name des Internetangebots (Domainname) – Top Level Domain (.de = Deutschland).",
    "k": "Netze & Dienste",
    "s": "LF4 1.1.6"
   },
   {
    "tg": 3,
    "g": "stamm-bewegung",
    "src": "ZP F24/36",
    "t": "match",
    "q": "Ordnen Sie die Daten aus der Rechnung zu.",
    "pairs": [
     [
      "Lieferdatum",
      "Bewegungsdaten"
     ],
     [
      "Anschrift des Kunden",
      "Stammdaten"
     ],
     [
      "Artikelnummer",
      "Stammdaten"
     ],
     [
      "Rechnungsbetrag",
      "Bewegungsdaten"
     ],
     [
      "Bestelldatum",
      "Bewegungsdaten"
     ]
    ],
    "e": "Stammdaten ändern sich selten oder nie (Anschrift, Kundennummer, Artikelnummer, Geburtsdatum). Bewegungsdaten entstehen bei jedem Vorgang neu bzw. ändern sich häufig (Bestell-/Lieferdatum, Menge, Betrag).",
    "k": "Datenbanken",
    "s": "LF4 4.4"
   },
   {
    "tg": 3,
    "g": "kontrollen",
    "src": "ZP F24/37",
    "t": "mc",
    "q": "Welche Maßnahme nach § 64 BDSG gewährleistet, dass personenbezogene Daten gegen Zerstörung oder Verlust geschützt sind?",
    "a": [
     "Verfügbarkeitskontrolle",
     "Eingabekontrolle",
     "Zugangskontrolle",
     "Transportkontrolle",
     "Trennbarkeit"
    ],
    "c": 0,
    "e": "Verfügbarkeitskontrolle = Schutz gegen Zerstörung/Verlust (z. B. Backups, USV). Eingabekontrolle = nachvollziehen, wer wann was eingegeben hat; Zugangskontrolle = Unbefugte von Anlagen fernhalten; Transportkontrolle = Schutz bei Übermittlung; Trennbarkeit = getrennte Verarbeitung nach Zwecken.",
    "k": "Datenschutz",
    "s": "LF4 6.1"
   },
   {
    "tg": 3,
    "g": "passwort",
    "src": "ZP F24/38",
    "t": "mc",
    "q": "Welches Passwort ist am sichersten?",
    "a": [
     "Kr7#vT!q2Lz&",
     "Sommer2026!",
     "12345678",
     "Lisa1998",
     "Passwort"
    ],
    "c": 0,
    "e": "Sichere Passwörter: Groß- und Kleinbuchstaben, Ziffern, Sonderzeichen, mindestens acht Zeichen, keine Wörter aus Wörterbüchern und keine Bezüge zur Person (Namen, Geburtsjahre). „Sommer2026!“ fällt der Wörterbuch-Methode zum Opfer.",
    "k": "Datensicherheit",
    "s": "LF4 5.2.1"
   },
   {
    "tg": 3,
    "g": "antivirus-funktion",
    "src": "ZP F24/39",
    "t": "mc",
    "q": "Was bedeutet „Scannen“ bei einem Antivirenprogramm?",
    "a": [
     "Festplatten und angeschlossene Laufwerke werden auf Viren überprüft.",
     "Verdächtige Dateien werden in einem verschlüsselten Verzeichnis eingesperrt.",
     "Die Virendefinitionen werden über das Internet aktualisiert.",
     "Laufende Anwendungen werden in Echtzeit im Hintergrund überwacht.",
     "Es wird festgelegt, wann Updates automatisch starten."
    ],
    "c": 0,
    "e": "Funktionen laut Buch: Scannen (Laufwerke prüfen), Wächter (Echtzeitschutz), Quarantäne (verschlüsseltes Verzeichnis), Internetupdate (Virendefinitionen), Zeitplaner (Zeitpunkte für Scan und Update).",
    "k": "Datensicherheit",
    "s": "LF4 5.2.2"
   },
   {
    "tg": 3,
    "g": "firewall",
    "src": "ZP F24/40",
    "t": "mc",
    "q": "Welche Aufgabe kann eine Firewall NICHT übernehmen?",
    "a": [
     "bereits auf dem PC vorhandene Viren entfernen",
     "den Datenverkehr zwischen zwei Netzen regeln",
     "den Datenverkehr protokollieren",
     "Hackerangriffe blockieren und melden",
     "festlegen, welche Programme ins Internet dürfen"
    ],
    "c": 0,
    "e": "Die Firewall ist ein „Türsteher“ zwischen Netzen: regeln, protokollieren, kontrollieren, verhindern, Angriffe melden, Programmzugriffe steuern. Viren auf dem Rechner findet und entfernt das Antivirenprogramm.",
    "k": "Datensicherheit",
    "s": "LF4 5.2.3"
   },
   {
    "tg": 3,
    "g": "blacklist",
    "src": "ZP F24/41",
    "t": "mc",
    "q": "Was ist eine Blacklist im Spamfilter?",
    "a": [
     "eine Liste von Absenderadressen, von denen keine E-Mails empfangen werden sollen",
     "eine Liste von Absendern, die ausdrücklich E-Mails senden dürfen",
     "eine Liste typischer Spam-Schlüsselwörter",
     "der Ordner, in dem verdächtige E-Mails zunächst abgelegt werden",
     "eine Liste gesperrter Webseiten"
    ],
    "c": 0,
    "e": "Blacklist = gesperrte Absender. Verwechslungspaar: Whitelist = erlaubte Absender. Schlüsselwörter = Wortfilter; Ablageordner = Quarantäne- bzw. Spamordner.",
    "k": "Datensicherheit",
    "s": "LF4 5.2.5"
   },
   {
    "tg": 1,
    "g": "dienstleistung-merkmal",
    "src": "ZP F24/42",
    "t": "mc",
    "q": "Welches Merkmal trifft nur auf eine Dienstleistung zu, nicht auf eine Sachleistung?",
    "a": [
     "Sie ist immateriell.",
     "Sie ist lagerfähig.",
     "Sie kann vor dem Kauf vorgeführt werden.",
     "Sie ist übertragbar.",
     "Erstellung und Nutzung finden zeitversetzt statt."
    ],
    "c": 0,
    "e": "Dienstleistung: immateriell, nicht lagerfähig, nicht übertragbar, Kunde wirkt mit, Erstellung und Nutzung gleichzeitig, keine Vorführung möglich – daher „Vertrauensgut“. Die übrigen Optionen beschreiben Sachleistungen.",
    "k": "Sektoren & DL",
    "s": "LF2 1.2.2"
   },
   {
    "tg": 4,
    "g": "kg-geschaeftsfuehrung",
    "src": "ZP F24/43",
    "t": "mc",
    "q": "Wer führt die gewöhnlichen Geschäfte einer KG?",
    "a": [
     "jeder Komplementär allein (Einzelgeschäftsführung)",
     "alle Gesellschafter nur gemeinsam",
     "die Kommanditisten",
     "eine von der IHK bestellte Geschäftsführung",
     "die Gesellschafterversammlung"
    ],
    "c": 0,
    "e": "Unternehmerische Entscheidungen treffen nur die Komplementäre; jeder darf gewöhnliche Geschäfte allein führen. Außergewöhnliche Handlungen (z. B. Aufnahme neuer Gesellschafter) brauchen die Zustimmung aller. Kommanditisten sind von der Geschäftsführung ausgeschlossen.",
    "k": "Recht",
    "s": "LF1 1.3.2"
   },
   {
    "tg": 4,
    "g": "handelsgewerbe",
    "src": "ZP F24/44",
    "t": "mc",
    "q": "Welches Merkmal gehört zu einem Handelsgewerbe?",
    "a": [
     "Die Tätigkeit soll einen Gewinn erzielen.",
     "Die Tätigkeit ist nur kurzfristig angelegt.",
     "Es handelt sich um einen freien Beruf, z. B. eine Anwaltskanzlei.",
     "Die Tätigkeit ist nach außen nicht erkennbar.",
     "Es werden höchstens fünf Mitarbeiter beschäftigt."
    ],
    "c": 0,
    "e": "Handelsgewerbe laut Buch: selbstständig und auf Dauer angelegt, nach außen erkennbar, auf Gewinn ausgerichtet. Freie Berufe gelten nicht als Handelsgewerbe. Die Mitarbeiterzahl ist nur ein Hilfskriterium für den kaufmännisch eingerichteten Geschäftsbetrieb.",
    "k": "Recht",
    "s": "LF1 1.3.1"
   },
   {
    "tg": 4,
    "g": "gewerbeaufsicht",
    "src": "ZP F24/45",
    "t": "mc",
    "q": "Für welche Aufgabe ist die IHK zuständig und NICHT die Gewerbeaufsicht?",
    "a": [
     "Zwischen- und Abschlussprüfungen durchführen und Ausbildungsbetriebe beraten",
     "die Einhaltung des Jugendarbeitsschutzgesetzes überwachen",
     "Arbeitsschutzbestimmungen im Betrieb kontrollieren",
     "die Einhaltung von Umweltschutzbestimmungen überwachen",
     "die Einhaltung der Arbeitszeitvorschriften kontrollieren"
    ],
    "c": 0,
    "e": "Die IHK ist „zuständige Stelle“ nach BBiG: Beratung, Prüfungen, Aus- und Weiterbildung. Die staatliche Gewerbeaufsicht überwacht Schutzgesetze wie JArbSchG, Arbeits- und Umweltschutz.",
    "k": "Institutionen",
    "s": "LF1 1.4"
   },
   {
    "tg": 4,
    "g": "gmbh-organe",
    "src": "ZP F24/46",
    "t": "mc",
    "q": "Welches Organ ist bei der GmbH das oberste Organ der internen Willensbildung?",
    "a": [
     "die Gesellschafterversammlung",
     "die Geschäftsführung",
     "der Vorstand",
     "die Komplementäre",
     "der Lenkungsausschuss"
    ],
    "c": 0,
    "e": "GmbH-Organe laut Buch: Geschäftsführer (entscheiden, vertreten nach außen), Gesellschafterversammlung (oberstes Organ der Willensbildung), ab 500 Arbeitnehmern ein Aufsichtsrat. Vorstand = AG, Komplementäre = KG.",
    "k": "Recht",
    "s": "LF1 1.3.3"
   },
   {
    "tg": 4,
    "g": "organigramm",
    "src": "ZP F24/47",
    "t": "mc",
    "q": "Was zeigt ein Organigramm NICHT?",
    "a": [
     "den genauen Ablauf der Bearbeitung einer Kundenbeschwerde",
     "die Verteilung der Aufgaben auf Stellen und Abteilungen",
     "die hierarchische Struktur und die Weisungsbefugnisse",
     "die Einordnung von Stabsstellen",
     "die personelle Besetzung der Stellen"
    ],
    "c": 0,
    "e": "Das Organigramm stellt die Aufbauorganisation dar. Arbeitsabläufe gehören zur Ablauforganisation und werden z. B. im Flussdiagramm dargestellt – ein Nachteil des Organigramms ist gerade, dass es keine Prozesse zeigt.",
    "k": "Organisation",
    "s": "LF1 1.2.1"
   },
   {
    "tg": 4,
    "g": "ausbildungsrahmenplan",
    "src": "ZP F24/48",
    "t": "mc",
    "q": "Wie heißt der Teil der Ausbildungsordnung, der die zu vermittelnden Kenntnisse und Fertigkeiten den Ausbildungsjahren und Wochen zuordnet?",
    "a": [
     "Ausbildungsrahmenplan",
     "Ausbildungsberufsbild",
     "Prüfungsanforderungen",
     "Rahmenlehrplan",
     "Berichtsheft"
    ],
    "c": 0,
    "e": "Der Ausbildungsrahmenplan beantwortet, in welchem Ausbildungsjahr welche Inhalte vermittelt werden und wie viele Wochen je Inhalt einzuplanen sind. Der Rahmenlehrplan ist kein Teil der Ausbildungsordnung, sondern gilt für die Berufsschule.",
    "k": "Ausbildung",
    "s": "LF1 2.1.1"
   },
   {
    "tg": 4,
    "g": "muschg-kuendigung",
    "src": "ZP F24/49",
    "t": "mc",
    "q": "Eine Auszubildende teilt dem Betrieb in der Probezeit ihre Schwangerschaft mit. Kurz darauf erhält sie die Kündigung. Wie ist die Rechtslage?",
    "a": [
     "Die Kündigung ist unwirksam; der Kündigungsschutz des Mutterschutzgesetzes gilt auch in der Probezeit.",
     "Die Kündigung ist wirksam, weil in der Probezeit ohne Gründe gekündigt werden darf.",
     "Die Kündigung ist wirksam, wenn der Betriebsrat zustimmt.",
     "Die Kündigung ist wirksam, weil Auszubildende nicht unter das Mutterschutzgesetz fallen.",
     "Die Kündigung wird erst nach der Geburt wirksam."
    ],
    "c": 0,
    "e": "MuSchG: Während der gesamten Schwangerschaft und bis vier Monate nach der Entbindung darf der Arbeitgeber nicht kündigen – das gilt auch für Auszubildende und in der Probezeit. Die Probezeitregel des BBiG tritt hinter dem besonderen Kündigungsschutz zurück.",
    "k": "Schutzgesetze",
    "s": "LF1 2.2.5"
   },
   {
    "tg": 4,
    "g": "muschg-arbeitszeit",
    "src": "ZP F24/50",
    "t": "mc",
    "q": "Welche Beschäftigung einer schwangeren, 22-jährigen Mitarbeiterin ist zulässig?",
    "a": [
     "Arbeit zwischen 6 und 20 Uhr mit höchstens 8,5 Stunden täglich",
     "Nachtschicht von 22 bis 6 Uhr, weil sie es ausdrücklich wünscht",
     "täglich 10 Stunden mit späterem Freizeitausgleich",
     "Überstunden bei hohem Anrufaufkommen",
     "Arbeit ohne jede Einschränkung bis zum Entbindungstermin"
    ],
    "c": 0,
    "e": "MuSchG laut Buch: höchstens 8,5 Stunden täglich (unter 18: 8 Stunden), keine Überstunden, Nachtarbeitsverbot ab 20 Uhr, Schutzfristen vor und nach der Geburt. Ein Wunsch der Mitarbeiterin hebt das Nachtarbeitsverbot zwischen 22 und 6 Uhr nicht auf.",
    "k": "Schutzgesetze",
    "s": "LF1 2.2.5"
   },
   {
    "tg": 4,
    "g": "bg-ueberwachung",
    "src": "ZP F24/51",
    "t": "mc",
    "q": "Wer überwacht neben der staatlichen Gewerbeaufsicht den Arbeits- und Gesundheitsschutz in den Betrieben?",
    "a": [
     "die Berufsgenossenschaften",
     "die Industrie- und Handelskammern",
     "die Krankenkassen",
     "die Bundesagentur für Arbeit",
     "die Gewerkschaften"
    ],
    "c": 0,
    "e": "Zusammenfassung LF1 Kap. 3: Neben dem Staat (Gewerbeaufsichtsämter, Ämter für Arbeitsschutz) sind die Berufsgenossenschaften als Träger der Unfallversicherung für die Überwachung des Arbeitsschutzes zuständig.",
    "k": "Arbeitsschutz",
    "s": "LF1 3.1"
   },
   {
    "tg": 4,
    "g": "ihk-pruefung",
    "src": "ZP F24/52",
    "t": "mc",
    "q": "Bei welcher Institution wird ein Auszubildender zur Abschlussprüfung angemeldet?",
    "a": [
     "bei der Industrie- und Handelskammer",
     "bei der Berufsschule",
     "beim Gewerbeaufsichtsamt",
     "bei der Berufsgenossenschaft",
     "bei der Agentur für Arbeit"
    ],
    "c": 0,
    "e": "Die IHK ist zuständige Stelle nach BBiG und führt Zwischen- und Abschlussprüfungen durch. Die Teilnahme an der Zwischenprüfung ist Voraussetzung für die Zulassung zur Abschlussprüfung.",
    "k": "Institutionen",
    "s": "LF1 1.4"
   },
   {
    "tg": 4,
    "g": "jav-wahl",
    "src": "ZP F24/53",
    "t": "mc",
    "q": "Wer ist bei der Wahl der Jugend- und Auszubildendenvertretung NICHT wahlberechtigt?",
    "a": [
     "eine 20-jährige Sachbearbeiterin, die ihre Ausbildung bereits abgeschlossen hat",
     "ein 17-jähriger Mitarbeiter ohne Ausbildungsvertrag",
     "eine 24-jährige Auszubildende",
     "ein 16-jähriger Auszubildender",
     "eine 22-jährige Auszubildende im zweiten Ausbildungsjahr"
    ],
    "c": 0,
    "e": "Wahlberechtigt (aktives Wahlrecht) sind Jugendliche unter 18 Jahren und Auszubildende unter 25 Jahren. Wählbar (passives Wahlrecht) sind alle Arbeitnehmer unter 25 – die Sachbearbeiterin dürfte also gewählt werden, aber nicht wählen.",
    "k": "Mitbestimmung",
    "s": "LF1 2.3.2"
   },
   {
    "tg": 4,
    "g": "tarifverhandlung",
    "src": "ZP F24/54",
    "t": "order",
    "q": "Bringen Sie den typischen Ablauf eines Tarifkonflikts in die richtige Reihenfolge.",
    "items": [
     "Kündigung des bestehenden Tarifvertrags",
     "Aufnahme der Tarifverhandlungen",
     "Erklärung des Scheiterns der Verhandlungen",
     "Urabstimmung und Streik",
     "Annahme des neuen Ergebnisses, wenn in einer zweiten Urabstimmung mindestens 25 % zustimmen"
    ],
    "e": "Tarifverhandlungen setzen einen gekündigten Vertrag voraus. Scheitern sie, stimmen die Gewerkschaftsmitglieder in der Urabstimmung über einen Streik ab. Ein neues Ergebnis gilt als angenommen, wenn in der zweiten Urabstimmung mindestens 25 % zustimmen (Ablaufdetail ergänzt; das Buch behandelt Tarifautonomie und Streiks).",
    "k": "Mitbestimmung",
    "s": "LF1 2.3.4"
   },
   {
    "tg": 4,
    "g": "tarifautonomie",
    "src": "ZP F24/55",
    "t": "mc",
    "q": "Was bedeutet Tarifautonomie?",
    "a": [
     "Tarifverträge werden ohne Einmischung des Staates zwischen den Tarifvertragsparteien ausgehandelt.",
     "Jeder Arbeitnehmer verhandelt sein Gehalt selbst.",
     "Der Staat legt Löhne und Gehälter per Gesetz fest.",
     "Der Betriebsrat schließt Tarifverträge mit dem Arbeitgeber ab.",
     "Tarifverträge gelten automatisch für alle Unternehmen in Europa."
    ],
    "c": 0,
    "e": "Tarifautonomie ist durch Art. 9 Abs. 3 GG geschützt: Die Tarifvertragsparteien (Arbeitgeber bzw. Arbeitgeberverbände und Gewerkschaften) verhandeln ohne staatliche Einmischung. Betriebsrat und Arbeitgeber schließen Betriebsvereinbarungen.",
    "k": "Mitbestimmung",
    "s": "LF1 2.3.4"
   },
   {
    "tg": 4,
    "g": "erste-hilfe",
    "src": "ZP F24/56",
    "t": "mc",
    "q": "Wie sieht das Rettungszeichen „Erste Hilfe“ aus?",
    "a": [
     "weißes Kreuz auf grünem Grund",
     "rotes Kreuz auf weißem Grund",
     "weißes Kreuz auf rotem Grund",
     "grünes Kreuz auf gelbem Grund",
     "schwarzes Kreuz auf blauem Grund"
    ],
    "c": 0,
    "e": "Rettungszeichen nach ASR A1.3 sind grün mit weißem Symbol (Erste Hilfe: weißes Kreuz auf grün). Brandschutzzeichen sind rot, Verbotszeichen rot umrandet, Gebotszeichen blau, Warnzeichen gelb (Detail der ASR; das Buch verweist auf ASR A1.3).",
    "k": "Arbeitsschutz",
    "s": "LF1 3.2"
   },
   {
    "tg": 4,
    "g": "verbandbuch",
    "src": "ZP F24/57",
    "t": "mc",
    "q": "Sie entnehmen dem Erste-Hilfe-Kasten ein Pflaster für eine kleine Schnittwunde. Was ist zu tun?",
    "a": [
     "die Hilfeleistung im Verbandbuch dokumentieren",
     "nichts, bei kleinen Verletzungen ist keine Dokumentation nötig",
     "sofort die Berufsgenossenschaft anrufen",
     "einen Unfallbericht an die Krankenkasse schicken",
     "das Pflaster ersetzen und die Entnahme verschweigen"
    ],
    "c": 0,
    "e": "Jede Erste-Hilfe-Leistung wird dokumentiert (Verbandbuch), damit bei Spätfolgen ein Arbeitsunfall nachweisbar ist und der Versicherungsschutz der Berufsgenossenschaft greift (Vorgabe der DGUV, ergänzend zum Buch).",
    "k": "Arbeitsschutz",
    "s": "LF1 3.2"
   },
   {
    "tg": 4,
    "g": "brandfall-verhalten",
    "src": "ZP F24/58",
    "t": "mc",
    "q": "Welche Regel für das Verhalten im Brandfall ist FALSCH?",
    "a": [
     "gefährdete Personen mit dem Aufzug schnell nach unten bringen",
     "Menschenrettung geht vor Brandbekämpfung",
     "Fenster und Türen schließen",
     "Sammelplatz aufsuchen und Vollzähligkeit prüfen",
     "die Feuerwehr einweisen"
    ],
    "c": 0,
    "e": "Abwehrender Brandschutz laut Buch: Brand melden, Hilfsbedürftige in Sicherheit bringen, Räume verlassen – dabei keine Aufzüge benutzen –, Ruhe bewahren, Fenster und Türen schließen, Vollzähligkeit prüfen, kleine Brände selbst löschen, Feuerwehr einweisen.",
    "k": "Arbeitsschutz",
    "s": "LF1 3.3"
   },
   {
    "tg": 4,
    "g": "sondermuell",
    "src": "ZP F24/59",
    "t": "mc",
    "q": "Wie entsorgen Sie leere Batterien aus dem Büro?",
    "a": [
     "über besondere Annahmestellen, z. B. Sammelboxen im Handel",
     "im gelben Sack",
     "im Restmüll",
     "in der blauen Tonne",
     "in der Biotonne"
    ],
    "c": 0,
    "e": "Schadstoffhaltige Abfälle (Problemabfälle wie Batterien, Druckerpatronen, Computerschrott) müssen laut Buch besonderen Annahmestellen zugeführt werden.",
    "k": "Umweltschutz",
    "s": "LF1 3.4"
   },
   {
    "tg": 4,
    "g": "energie-sparen",
    "src": "ZP F24/60",
    "t": "mc",
    "q": "Welche Maßnahme senkt die Heizkosten kurzfristig und ohne Investition?",
    "a": [
     "die Raumtemperatur in den Büros von 24 °C auf 21 °C senken",
     "neue Fenster einbauen lassen",
     "den Fuhrpark auf Elektroautos umstellen",
     "jedes Jahr den Stromanbieter wechseln",
     "alle Heizkörper austauschen"
    ],
    "c": 0,
    "e": "Temperatur senken wirkt sofort und kostet nichts; 21 °C liegt noch im empfohlenen Bereich von 20–23 °C. Fenster- und Heizkörpertausch oder E-Fuhrpark sind langfristige Investitionen, der Stromanbieter betrifft nicht die Heizung.",
    "k": "Umweltschutz",
    "s": "LF1 3.4"
   }
  ]
 },
 {
  "id": "H25",
  "name": "Herbst 2025",
  "note": "Nachbau · Originalreihenfolge",
  "items": [
   {
    "tg": 1,
    "g": "offshoring",
    "src": "ZP H25/1",
    "t": "mc",
    "q": "In einer Fachzeitschrift lesen Sie: „Ein Energieversorger betreibt seine Kundenhotline inzwischen über eine eigene Tochtergesellschaft in Rumänien, weil Personal- und Mietkosten dort deutlich niedriger sind.“ Wie wird diese Standortstrategie bezeichnet?",
    "a": [
     "Offshoring",
     "Outsourcing",
     "Reshoring",
     "Insourcing",
     "Crowdsourcing"
    ],
    "c": 0,
    "e": "Buchdefinition: Beim Offshoring verlagert ein Unternehmen Tätigkeiten ins Ausland; sie bleiben organisatorisch im Unternehmen (hier: eigene Tochter). Beim Outsourcing werden Tätigkeiten dagegen an ein anderes Unternehmen ausgelagert – die räumliche Entfernung spielt dabei keine Rolle. Die Rückverlagerung ins Inland (Reshoring) beschreibt das Buch als aktuellen Gegentrend.",
    "k": "Branche & Historie",
    "s": "LF2 1.1.3"
   },
   {
    "tg": 1,
    "g": "dienstleistung-merkmal",
    "src": "ZP H25/2",
    "t": "mc",
    "q": "Ein Kunde fragt, warum er die Telefonberatung Ihres Unternehmens nicht vorab ausprobieren kann wie ein Gerät im Laden. Welches Merkmal von Dienstleistungen erklärt das?",
    "a": [
     "Dienstleistungen sind immaterielle Güter – sie sind nicht greifbar und lassen sich vor der Inanspruchnahme nicht begutachten.",
     "Dienstleistungen können auf Vorrat erstellt und gelagert werden.",
     "Dienstleistungen werden grundsätzlich ohne Mitwirkung des Kunden erbracht.",
     "Dienstleistungen werden zeitlich versetzt zu ihrer Nutzung erstellt.",
     "Dienstleistungen sind physische Güter mit festen, prüfbaren Eigenschaften."
    ],
    "c": 0,
    "e": "Dienstleistungen sind immateriell: nicht greifbar, nicht lagerfähig und vor dem Kauf nicht prüfbar. Erstellung und Inanspruchnahme fallen zeitlich zusammen, und der Kunde wirkt an der Erstellung mit. Deshalb muss Dialogmarketing Vertrauen in die Leistung besonders deutlich kommunizieren.",
    "k": "Sektoren & DL",
    "s": "LF2 1.2.2"
   },
   {
    "tg": 1,
    "g": "klassisch-vs-dm",
    "src": "ZP H25/3",
    "t": "mc",
    "q": "Ein Getränkehersteller überlegt, ob er ein neues Produkt mit klassischer Werbung oder mit Dialogmarketing einführen soll. Welches Argument spricht für das klassische Marketing?",
    "a": [
     "Eine bundesweite Plakat- und TV-Kampagne erreicht in kurzer Zeit sehr viele Menschen und steigert den Bekanntheitsgrad.",
     "Jeder Empfänger wird individuell und persönlich angesprochen.",
     "Der Erfolg lässt sich über die Reaktionen der Empfänger rasch kontrollieren.",
     "Streuverluste werden durch eine gezielte Zielgruppenauswahl gering gehalten.",
     "Der Empfänger kann unmittelbar antworten und in einen Dialog treten."
    ],
    "c": 0,
    "e": "Buchtabelle „Klassisches Marketing vs. Dialogmarketing“: Klassisches Marketing spricht einseitig den Massenmarkt an, Ziel ist die Steigerung des Bekanntheitsgrades. Individuelle Ansprache, rasche Erfolgskontrolle, geringe Streuverluste und direkte Responsemöglichkeit sind Merkmale des Dialogmarketings.",
    "k": "Marketing",
    "s": "LF2 1.3.2"
   },
   {
    "tg": 1,
    "g": "dialog-vs-direkt",
    "src": "ZP H25/4",
    "t": "mc",
    "q": "Welche Maßnahme ordnet das Buch dem Direktmarketing und nicht dem Dialogmarketing zu?",
    "a": [
     "Versand eines Frühjahrskatalogs an 200.000 Haushalte",
     "Bestellannahme an der Hotline nach einem TV-Spot",
     "individuelle Antwort-E-Mail auf eine Kundenanfrage",
     "Beratung von Websitebesuchern im Chat",
     "Outbound-Anruf zur Terminvereinbarung"
    ],
    "c": 0,
    "e": "Beide wollen eine messbare Reaktion (Response). Dialogmarketing setzt auf individuelle Kommunikation, vor allem per Telefon und neue Medien (Inbound/Outbound, Direct Response, Chat, individueller Schriftverkehr). Direktmarketing nutzt massenhafte, überwiegend schriftliche Kommunikation in gleicher Form: Massen-Mailings, Massen-E-Mails, Postwurfsendungen, Prospekte und Kataloge.",
    "k": "Marketing",
    "s": "LF2 1"
   },
   {
    "tg": 1,
    "g": "direct-response",
    "src": "ZP H25/5",
    "t": "mc",
    "q": "Ein Teleshopping-Sender blendet während der Produktvorführung eine Bestellnummer ein; die Anrufe laufen in Ihrem Callcenter auf. Wie heißt diese Inbound-Leistung?",
    "a": [
     "Direct Response",
     "Cross-Selling",
     "Help Desk",
     "Kundenrückgewinnung",
     "Adressqualifizierung"
    ],
    "c": 0,
    "e": "Direct Response ist die Bestellung unmittelbar nach einem TV- oder Radiospot; wegen der Anrufspitzen wird oft ein Overflow-Callcenter eingesetzt. Cross-Selling ist der Verkauf zusätzlicher Produkte, ein Help Desk die unternehmensinterne technische Hotline; Kundenrückgewinnung und Adressqualifizierung sind Outbound-Leistungen.",
    "k": "Leistungen",
    "s": "LF2 2.2.1"
   },
   {
    "tg": 1,
    "g": "front-back",
    "src": "ZP H25/6",
    "t": "mc",
    "q": "Welche Tätigkeit gehört typischerweise zum Backoffice?",
    "a": [
     "Rechnungen nach einem Kundenanruf erstellen und korrigieren",
     "eingehende Anrufe an der Service-Hotline annehmen",
     "Standardfragen im Kundenchat beantworten",
     "einen Anrufer an die Fachabteilung weiterverbinden",
     "Adressdaten telefonisch mit dem Kunden abgleichen"
    ],
    "c": 0,
    "e": "Frontoffice = direkter Kundenkontakt (Anrufe, Chat, Weitervermittlung, Datenabgleich im Gespräch), möglichst mit Lösung im Erstkontakt. Backoffice = weiterführende Sachbearbeitung ohne direkten Kundenkontakt, z. B. Rechnungserstellung.",
    "k": "Typologie",
    "s": "LF2 2.1.3"
   },
   {
    "tg": 2,
    "g": "din5008",
    "src": "ZP H25/7",
    "t": "mc",
    "q": "Welche Aufgabe erfüllt die DIN 5008 für die Geschäftskorrespondenz?",
    "a": [
     "Sie liefert ein einheitliches Grundgerüst für übersichtliche, gut lesbare Schriftstücke.",
     "Sie schreibt den Wortlaut von Geschäftsbriefen verbindlich vor.",
     "Sie legt die Pflichtangaben auf Geschäftsbriefen fest.",
     "Sie regelt die Rechtschreibung der deutschen Sprache.",
     "Sie gilt ausschließlich für Briefe an Behörden."
    ],
    "c": 0,
    "e": "Die DIN 5008 enthält Schreib- und Gestaltungsregeln (Gliederung, Zahlen, Datum, Satzzeichen). Sie ist eine Norm, kein Gesetz, und gibt keinen Wortlaut vor. Die Pflichtangaben auf Geschäftsbriefen stammen aus dem HGB (§ 37a), die Rechtschreibung aus dem amtlichen Regelwerk.",
    "k": "Schriftliche Kommunikation",
    "s": "LF3 1.1"
   },
   {
    "tg": 2,
    "g": "din5008-datum",
    "src": "ZP H25/8",
    "t": "mc",
    "q": "Welche Datumsschreibweise entspricht der DIN 5008?",
    "a": [
     "14. Oktober 2026",
     "14.Oktober 2026",
     "14/10/2026",
     "Oktober 14, 2026",
     "2026.10.14"
    ],
    "c": 0,
    "e": "Nach DIN 5008 sind zulässig: numerisch 14.10.2026 bzw. international 2026-10-14 sowie alphanumerisch 14. Oktober 2026 – mit Leerzeichen nach dem Tagespunkt. Schrägstriche, amerikanische Reihenfolge oder Punkte in der ISO-Schreibweise sind nicht normgerecht.",
    "k": "Schriftliche Kommunikation",
    "s": "LF3 1.1"
   },
   {
    "tg": 2,
    "g": "perspektive",
    "src": "ZP H25/9",
    "t": "mc",
    "q": "Sie müssen einer Kundin mitteilen, dass eine vorzeitige Kündigung laut Vertrag nicht möglich ist. Sie möchten die Sache in den Vordergrund stellen, sodass niemandem die Schuld zugewiesen wird. Welche Formulierung wählen Sie?",
    "a": [
     "„Die Vertragsbedingungen sehen eine Kündigung vor Ablauf der Mindestlaufzeit leider nicht vor.“",
     "„Ich finde, Sie hätten den Vertrag genauer lesen sollen.“",
     "„Sie können leider nicht vorzeitig kündigen.“",
     "„Wir haben entschieden, Ihre Kündigung abzulehnen.“",
     "„Ich persönlich würde Ihnen gern helfen, darf aber nicht.“"
    ],
    "c": 0,
    "e": "Die Es-Formulierung stellt eine Sache in den Vordergrund, bezieht die Aussage auf keine Person, niemand hat die Schuld – geeignet für schlechte Nachrichten. Ich-Formulierung: persönliche Meinung, Entschuldigung, Zuständigkeit. Sie-Formulierung: für den Empfänger positive Aussagen, Appelle. Wir-Formulierung: das Unternehmen als geschlossene Einheit, z. B. bei Entscheidungen nach internen Regeln.",
    "k": "Schriftliche Kommunikation",
    "s": "LF3 1.2"
   },
   {
    "tg": 2,
    "g": "kollege-abwesend",
    "src": "ZP H25/10",
    "t": "mc",
    "q": "Ein verärgerter Kunde verlangt eine Kollegin aus der Buchhaltung, die heute krank ist. Sie kennen sich in dem Sachgebiet nicht aus. Wie reagieren Sie am besten?",
    "a": [
     "Sie nehmen das Anliegen mit allen Details auf, sagen zu, sich zu kümmern, und rufen den Kunden zeitnah mit einer Antwort zurück.",
     "Sie bitten den Kunden, es morgen noch einmal zu versuchen, wenn die Kollegin wieder da ist.",
     "Sie legen den Kunden in die Warteschleife, bis sich zufällig eine zuständige Person findet.",
     "Sie erklären dem Kunden, woran die Kollegin erkrankt ist.",
     "Sie schalten den Lautsprecher ein, damit die Kollegen im Raum mithören und helfen können."
    ],
    "c": 0,
    "e": "Der Kunde darf nicht abgewimmelt werden – „keine Zuständigkeit“ nennt das Buch ausdrücklich als Fehler im Beschwerdegespräch. Sie übernehmen Verantwortung, klären den Sachverhalt intern und melden sich verbindlich zurück. Angaben zur Erkrankung einer Kollegin sind vertraulich; Mithören über Lautsprecher ohne Zustimmung verletzt den Datenschutz.",
    "k": "Gesprächsführung",
    "s": "LF5 1.1"
   },
   {
    "tg": 2,
    "g": "gespraechsfoerderer",
    "src": "ZP H25/11",
    "t": "multi",
    "q": "Welche zwei Äußerungen wirken im Kundengespräch gesprächsfördernd?",
    "a": [
     "„Ich kann gut verstehen, dass Sie das ärgert, Frau Yilmaz.“",
     "„Was ist Ihnen bei einem neuen Tarif besonders wichtig?“",
     "„Sie müssen die Rechnung bis Freitag bezahlen!“",
     "„Da machen Sie es sich aber sehr einfach.“",
     "„Wenn Sie heute nicht zusagen, ist das Angebot weg.“",
     "„Ach, das ist doch halb so wild.“"
    ],
    "cs": [
     0,
     1
    ],
    "e": "Gesprächsförderer signalisieren dem Kunden, dass er ernst genommen wird und eingeladen ist, sein Anliegen vorzutragen – z. B. Verständnis zeigen und offene Fragen stellen. Die übrigen Aussagen sind Gesprächsstörer laut Buch: Befehlen („müssen“), Bewerten, Drohen/Warnen, Herunterspielen.",
    "k": "Gesprächsführung",
    "s": "LF3 3.2.4"
   },
   {
    "tg": 2,
    "g": "offene-fragen",
    "src": "ZP H25/12",
    "t": "mc",
    "q": "Ein Kunde sagt: „Mein Internet spinnt.“ In welcher Gesprächsphase befinden Sie sich jetzt, und welche Frageart setzen Sie vorwiegend ein?",
    "a": [
     "Bedarfsermittlung – offene Fragen, z. B. „Was genau passiert, wenn Sie eine Seite aufrufen?“",
     "Bedarfsermittlung – Suggestivfragen, z. B. „Sie haben den Router doch sicher falsch angeschlossen?“",
     "Gesprächsabschluss – geschlossene Fragen, z. B. „Ist sonst alles klar?“",
     "Begrüßung – rhetorische Fragen, z. B. „Wer kennt das nicht?“",
     "Lösungsphase – Alternativfragen, z. B. „Montag oder Dienstag?“"
    ],
    "c": 0,
    "e": "Fragetrichter: Zu Beginn der Bedarfsermittlung offene Fragen (W-Fragen), die viele Informationen liefern; zum Ende geschlossene Fragen zur Absicherung. Suggestivfragen sind manipulativ und gehören nicht in die Bedarfsermittlung.",
    "k": "Gesprächsführung",
    "s": "LF3 3.2.2"
   },
   {
    "tg": 2,
    "g": "legitimation",
    "src": "ZP H25/13",
    "t": "mc",
    "q": "Ein Anrufer nennt seinen Namen und möchte Auskunft über seine letzte Rechnung. Welche Angaben eignen sich, um vorher seine Identität zu prüfen (Legitimation)?",
    "a": [
     "Kundennummer und Geburtsdatum",
     "Wohnort und Lieblingsfarbe",
     "die Rufnummer, von der er gerade anruft",
     "der Name des Beraters, mit dem er zuletzt gesprochen hat",
     "Postleitzahl und Straße"
    ],
    "c": 0,
    "e": "Vor der Auskunft über personenbezogene Daten ist die Identität zu prüfen – mit Daten, die nur der Kunde kennen kann. Das Buch nennt z. B. Kontonummer, Geburtsdatum, Datum der ersten Bestellung, Kundennummer, letzten Rechnungsbetrag oder eine selbst gewählte Sicherheitsfrage; Dialogfix fragt Kundennummer und Geburtsdatum ab. Adresse oder Rufnummer sind für Dritte leicht zugänglich.",
    "k": "Gesprächsführung",
    "s": "LF5 1.1.1"
   },
   {
    "tg": 2,
    "g": "responsequote",
    "src": "ZP H25/14",
    "t": "calc",
    "x": "Die Dialog-GmbH hat für einen Kunden ein Mailing mit Antwortkarte verschickt.\nAuswertung nach vier Wochen:\nAntworten (Response): 1.042\nResponsequote: 8 %",
    "q": "Wie viele Mailings wurden verschickt?",
    "ans": [
     "13.025",
     "13025"
    ],
    "unit": "Mailings",
    "hint": "Ganze Zahl.",
    "e": "Responsequote = Antworten · 100 / versandte Mailings → versandte Mailings = 1.042 · 100 / 8 = 13.025. Probe: 8 % von 13.025 = 1.042. Gesucht ist der Grundwert – 8 % von 1.042 (= 83,36) wäre die falsche Bezugsgröße. Die Responsequote wird im Buch nicht eigens definiert; die Rechenlogik entspricht der Erfolgsquote (Erfolge · 100 / Nettokontakte).",
    "k": "Kennzahlen",
    "s": "LF5 5.2.2"
   },
   {
    "tg": 2,
    "g": "beschwerde-ursachen",
    "src": "ZP H25/15",
    "t": "multi",
    "q": "Ein Onlinehändler erhält gehäuft Beschwerden. Welche zwei Ursachen sind abwicklungsbezogen?",
    "a": [
     "Die Bestellung kommt deutlich später als zugesagt an.",
     "Die zugesagte Rückerstattung wird nicht wie versprochen ausgeführt.",
     "Das gelieferte Gerät hat einen Sachmangel.",
     "Der Agent war am Telefon unfreundlich.",
     "Der Kunde empfindet das Preis-Leistungs-Verhältnis als schlecht.",
     "Der Mitarbeiter wirkte fachlich unsicher."
    ],
    "cs": [
     0,
     1
    ],
    "e": "Das Buch ordnet Beschwerdeursachen drei Bereichen zu: produkt- bzw. dienstleistungsbezogen (Sachmangel, Preis-Leistungs-Verhältnis), mitarbeiter- bzw. interaktionsbezogen (Unfreundlichkeit, mangelnde Fachkompetenz) und abwicklungsbezogen (Lieferzeiten, Einhaltung von Zusagen, Bearbeitungszeiten).",
    "k": "Beschwerden",
    "s": "LF5 4.1.1"
   },
   {
    "tg": 2,
    "g": "manipulation",
    "src": "ZP H25/16",
    "t": "mc",
    "q": "Ein Kunde sagt im Reklamationsgespräch: „Überall sonst bekommt man in so einem Fall sofort ein neues Gerät – das weiß doch jeder!“ Welche manipulative Strategie wendet er an?",
    "a": [
     "Verallgemeinern",
     "Schmeicheln",
     "Anteilnahme erwecken",
     "Drohen",
     "Übertreiben"
    ],
    "c": 0,
    "e": "Beim Verallgemeinern beruft sich der Kunde auf angeblich allgemeingültige Regeln („branchenüblich“), um einen Wissensvorsprung vorzutäuschen. Reaktion laut Buch: deutlich machen, dass es um sein konkretes Anliegen geht und Ihnen der einzelne Fall wichtig ist.",
    "k": "Beschwerden",
    "s": "LF5 4.1.4"
   },
   {
    "tg": 2,
    "g": "beschwerde-fehler",
    "src": "ZP H25/17",
    "t": "match",
    "q": "Ordnen Sie die Äußerungen des Agents den Fehlern im Beschwerdegespräch zu.",
    "pairs": [
     [
      "„Ich weiß schon, worum es geht – ich schicke Ihnen einfach ein neues Gerät.“",
      "Lösung zu schnell anbieten"
     ],
     [
      "„Hätten Sie die Bedienungsanleitung gelesen, wäre das nicht passiert.“",
      "Schuld zuschieben"
     ],
     [
      "„Uns trifft keine Schuld, der Paketdienst hat gestreikt.“",
      "Rechtfertigung"
     ],
     [
      "„Das kann eigentlich gar nicht sein, das Gerät ist geprüft.“",
      "Reklamation anzweifeln"
     ],
     [
      "„Mein Kollege war im Urlaub, deshalb blieb Ihr Auftrag liegen.“",
      "Interne Fehler erklären"
     ]
    ],
    "e": "Das Buch nennt zehn Fehler im Beschwerdegespräch, u. a. Routine, innere Ablehnung, keine Zuständigkeit, den Kunden „erziehen“, Lösung zu schnell anbieten, Schuld zuschieben, Reklamation anzweifeln, Beschwerdegrund herunterspielen, interne Fehler erklären, Rechtfertigung. Rechtfertigung = äußere Umstände als Erklärung; interne Fehler erklären = Abläufe im eigenen Haus schildern.",
    "k": "Beschwerden",
    "s": "LF5 4.1.5"
   },
   {
    "tg": 3,
    "g": "pareto",
    "src": "ZP H25/18",
    "t": "mc",
    "q": "Ihre Teamleiterin sagt: „Mit 20 % unserer Aufgaben erreichen wir 80 % des Ergebnisses – also erledigen wir diese zuerst.“ Auf welches Prinzip bezieht sie sich?",
    "a": [
     "Pareto-Prinzip",
     "Eisenhower-Prinzip",
     "ALPEN-Methode",
     "Methode 635",
     "Mindmapping"
    ],
    "c": 0,
    "e": "Pareto-Prinzip (80/20-Regel): 20 % der Aufgaben bringen 80 % des Arbeitserfolgs – entscheidend ist, das Wichtige zuerst zu tun. Eisenhower ordnet nach Wichtigkeit und Dringlichkeit, ALPEN ist eine Methode der Tagesplanung, 635 und Mindmapping sind Kreativ- bzw. Strukturierungstechniken.",
    "k": "Information & Lernen",
    "s": "LF1 6.1"
   },
   {
    "tg": 3,
    "g": "diagramm-art",
    "src": "ZP H25/19",
    "t": "mc",
    "q": "Sie wollen in der Teamsitzung zeigen, welchen Anteil Telefon, E-Mail, Chat und Social Media am gesamten Kontaktaufkommen des letzten Monats hatten. Welche Darstellung wählen Sie?",
    "a": [
     "Kreisdiagramm",
     "Liniendiagramm",
     "Organigramm",
     "Flussdiagramm",
     "Streudiagramm"
    ],
    "c": 0,
    "e": "Ein Kreisdiagramm zeigt die Anteile eines Ganzen (100 %). Liniendiagramme stellen Entwicklungen über die Zeit dar, Säulen- und Balkendiagramme Größenvergleiche; Organigramm (Aufbauorganisation) und Flussdiagramm (Abläufe) sind keine Zahlendiagramme.",
    "k": "Präsentation",
    "s": "LF2 3.2"
   },
   {
    "tg": 3,
    "g": "gruppenarbeit-phasen",
    "src": "ZP H25/20",
    "t": "order",
    "q": "Ihr Team soll in einer Gruppenarbeit die Wartezeiten an der Hotline verkürzen. Bringen Sie die Phasen der Gruppenarbeit in die richtige Reihenfolge.",
    "items": [
     "Ziel bestimmen: Wartezeit unter 30 Sekunden",
     "Teilaspekte prüfen und Teilziele ableiten",
     "Lösungsvorschläge sammeln, z. B. per Brainstorming",
     "optimale Lösung anhand vereinbarter Kriterien auswählen",
     "ausgewählte Lösung umsetzen",
     "Abschlussbetrachtung: Ergebnis und Arbeitsweise auswerten"
    ],
    "e": "Die sechs Phasen laut Buch: 1. Bestimmung des Ziels, 2. Prüfung (Teilaspekte, Teilziele – noch keine Diskussion), 3. Sammeln von Lösungsvorschlägen, 4. Auswahl der optimalen Lösung, 5. Umsetzung, 6. Abschlussbetrachtung (Ergebnis und Arbeitsweise der Gruppe).",
    "k": "Information & Lernen",
    "s": "LF1 6.3"
   },
   {
    "tg": 3,
    "g": "lerntypen",
    "src": "ZP H25/21",
    "t": "match",
    "q": "Welcher Lerntyp profitiert jeweils am meisten von der beschriebenen Lernmethode?",
    "pairs": [
     [
      "erstellt farbige Lernplakate und Schaubilder",
      "visueller Lerntyp"
     ],
     [
      "nimmt den Stoff als Sprachmemo auf und hört ihn unterwegs an",
      "auditiver Lerntyp"
     ],
     [
      "übt Kundengespräche im Rollenspiel und schreibt Karteikarten",
      "motorischer Lerntyp"
     ],
     [
      "erklärt den Stoff der Lerngruppe und diskutiert offene Fragen",
      "kommunikativer Lerntyp"
     ]
    ],
    "e": "Visuell: Lernen über Sehen (Bilder, Grafiken, Mindmaps). Auditiv: Hören und lautes Sprechen. Motorisch (haptisch): Tun, Ausprobieren, Schreiben. Kommunikativ: Gespräch und Diskussion. Meist ist ein Mix der Kanäle am wirksamsten.",
    "k": "Information & Lernen",
    "s": "LF1 6.8"
   },
   {
    "tg": 3,
    "g": "ergonomie",
    "src": "ZP H25/22",
    "t": "multi",
    "q": "Sie richten einen neuen Bildschirmarbeitsplatz ein. Welche zwei Maßnahmen dienen der Ergonomie?",
    "a": [
     "Bildschirmneigung und Sehabstand an den Nutzer anpassen",
     "einen höhenverstellbaren Schreibtisch bereitstellen",
     "auf jeden Schreibtisch eine Grünpflanze stellen",
     "die Fenster den ganzen Tag gekippt lassen",
     "die Raumtemperatur fest auf 26 °C einstellen",
     "den Bildschirm direkt vor das Fenster stellen"
    ],
    "cs": [
     0,
     1
    ],
    "e": "Ergonomie heißt, den Arbeitsplatz an den Menschen anzupassen: Bildschirm (Neigung, Abstand, Höhe), Tisch und Stuhl müssen sich einstellen lassen. Pflanzen und Lüften betreffen das Raumklima; ein Bildschirm vor dem Fenster führt zu Blendung.",
    "k": "Arbeitsplatz",
    "s": "LF1 4"
   },
   {
    "tg": 3,
    "g": "telefonkonferenz",
    "src": "ZP H25/23",
    "t": "mc",
    "q": "Während einer Videokonferenz mit der Zentrale fällt Ihnen eine Frage ein, der Referent spricht aber gerade. Wie verhalten Sie sich?",
    "a": [
     "Sie notieren die Frage und stellen sie, sobald Fragen zugelassen sind.",
     "Sie unterbrechen sofort, damit die Frage nicht verloren geht.",
     "Sie besprechen die Frage leise mit Ihrer Sitznachbarin, während Ihr Mikrofon eingeschaltet ist.",
     "Sie lassen Ihr Mikrofon dauerhaft offen, um jederzeit reagieren zu können.",
     "Sie verlassen die Konferenz und klären die Frage später per E-Mail mit Kollegen."
    ],
    "c": 0,
    "e": "In Telefon- und Videokonferenzen gilt: nicht unterbrechen, Mikrofon stumm schalten, wenn man nicht spricht, Fragen notieren und zum vorgesehenen Zeitpunkt stellen. Nebengespräche bei offenem Mikrofon stören alle Teilnehmer.",
    "k": "Kommunikationsmedien",
    "s": "LF4 1.1.1"
   },
   {
    "tg": 3,
    "g": "skill-routing",
    "src": "ZP H25/24",
    "t": "mc",
    "q": "Die Telefonanlage stellt einen Anruf zur Tarifberatung in türkischer Sprache direkt zu einer Agentin durch, die Türkisch spricht und für Tarife geschult ist. Welche Funktion ist hier aktiv?",
    "a": [
     "Skill Based Routing der ACD",
     "Interactive Voice Response (IVR)",
     "Predictive Dialing",
     "Computer Telephony Integration (CTI)",
     "Automatic Number Identification (ANI)"
    ],
    "c": 0,
    "e": "Das Skill Based Routing der ACD verteilt Anrufe an den Mitarbeiter, der aufgrund seiner Fähigkeiten (Skills) am besten helfen kann. Abgrenzung: IVR = Sprachdialogsystem, das den Anrufer per Tastenwahl/Sprache vorsortiert; CTI = Verknüpfung von Telefon und Computer (z. B. Kundenmaske öffnet sich); ANI = Übermittlung der Anrufernummer; Predictive Dialer = Wählsystem im Outbound.",
    "k": "Branchentechnik",
    "s": "LF4 1.2.2"
   },
   {
    "tg": 3,
    "g": "standardsoftware",
    "src": "ZP H25/25",
    "t": "mc",
    "q": "Welche Aussage zur Standardsoftware ist zutreffend?",
    "a": [
     "Meist ist damit das Office-Paket mit Textverarbeitung, Tabellenkalkulation, Präsentations- und Datenbankprogramm gemeint.",
     "Standardsoftware wird speziell für die Abläufe eines einzelnen Unternehmens programmiert.",
     "Eine amtliche Richtlinie legt fest, welche Programme zur Standardsoftware gehören.",
     "Standardsoftware ist nur als Komplettpaket erhältlich.",
     "Das Workforce-Management-System gehört zur Standardsoftware."
    ],
    "c": 0,
    "e": "Laut Buch gibt es keine amtliche Richtlinie, was Standardsoftware ist; meist ist das Office-Paket gemeint, das es als Einzellösungen und als Komplettpaket gibt. Speziell programmierte Software ist Individualsoftware; Zeiterfassung, PEP/WMS und Kampagnenmanagement zählen zur Branchensoftware.",
    "k": "Software",
    "s": "LF4 2.2"
   },
   {
    "tg": 3,
    "g": "ocr",
    "src": "ZP H25/26",
    "t": "mc",
    "q": "Eingehende Kundenbriefe werden eingescannt. Welche Software sorgt dafür, dass der Text danach durchsucht und bearbeitet werden kann?",
    "a": [
     "OCR-Software (Texterkennung)",
     "Firewall",
     "Spamfilter",
     "ACD-Software",
     "Tabellenkalkulation"
    ],
    "c": 0,
    "e": "OCR (Optical Character Recognition) wandelt eingescannte Bilder oder PDFs in editierbaren Text um und gleicht Erkennungsfehler mit einem Wörterbuch ab. Sie ist die Grundlage für die Digitalisierung von Dokumenten in einem Dokumenten-Management-System.",
    "k": "Software",
    "s": "LF4 2.2"
   },
   {
    "tg": 3,
    "g": "wms",
    "src": "ZP H25/27",
    "t": "mc",
    "x": "Auszug aus dem Workforce-Management-System, Ansicht „Schichtinfo“ – Agentin L. Brandt, 14.10.:\nRahmenzeit 08:00–16:30 · Kommen 07:56 · Pause 12:00–12:30 · Gehen 16:34 · Status: anwesend",
    "q": "Wofür wird diese Ansicht des WMS in erster Linie genutzt?",
    "a": [
     "Zeiterfassung der einzelnen Mitarbeiter",
     "Auswahl neuer Bewerber",
     "strategische Entscheidung über künftige Schichtmodelle",
     "Überweisung der Schichtzulage durch die Bank",
     "Pflege der Produktdatenbank"
    ],
    "c": 0,
    "e": "Kommen-, Gehen- und Pausenzeiten je Mitarbeiter sind Daten der Zeiterfassung, die im WMS mit Personaleinsatzplanung, Urlaubs- und Fehlzeitenplanung verknüpft ist. Strategische Entscheidungen über Schichtmodelle trifft die Leitung – nicht die Einzelansicht.",
    "k": "Software",
    "s": "LF4 2.3"
   },
   {
    "tg": 1,
    "g": "interne-ausschreibung",
    "src": "ZP H25/28",
    "t": "mc",
    "q": "Die Dialog-GmbH schreibt die Stelle einer Teamleitung intern im Intranet aus. Wen spricht sie damit an?",
    "a": [
     "alle Mitarbeiter des Unternehmens",
     "ausschließlich die Führungskräfte",
     "nur die Mitglieder des Betriebsrats",
     "externe Bewerber über Jobportale",
     "nur die Auszubildenden"
    ],
    "c": 0,
    "e": "Neue Mitarbeiter werden über eine interne Stellenausschreibung (eigene Belegschaft) oder eine Stellenanzeige (externer Arbeitsmarkt) gesucht. Der Betriebsrat kann verlangen, dass Stellen vorab intern ausgeschrieben werden.",
    "k": "Mitarbeiter",
    "s": "LF2 2.3.1"
   },
   {
    "tg": 1,
    "g": "social-recruiting",
    "src": "ZP H25/29",
    "t": "mc",
    "q": "Welcher Vorteil spricht für Social Media Recruiting?",
    "a": [
     "Kandidaten können anhand ihrer Profilangaben vorausgewählt und zielgenau angesprochen werden.",
     "Es werden ausschließlich Personen erreicht, die aktiv eine Stelle suchen.",
     "Es gehen dadurch grundsätzlich weniger Bewerbungen ein.",
     "Es werden alle Erwerbstätigen in Deutschland erreicht.",
     "Es wird nur das Know-how der eigenen Belegschaft genutzt."
    ],
    "c": 0,
    "e": "Social Media Recruiting erreicht auch passiv Suchende und erlaubt eine zielgruppengenaue Ansprache über Profil- und Interessendaten (unter Beachtung der DSGVO). Es erreicht nie „alle“, und das Nutzen eigener Mitarbeiter ist ein Merkmal der internen Personalbeschaffung. Hinweis: Social Media Recruiting behandelt das Buch nicht eigens – allgemeines Fachwissen.",
    "k": "Mitarbeiter",
    "s": "LF2 2.3.1"
   },
   {
    "tg": 3,
    "g": "produktdatenbank",
    "src": "ZP H25/30",
    "t": "mc",
    "q": "Die Agents sollen sich schnell über technische Daten und Preise neuer Smartphones informieren können. Welche Datenbank nutzen sie dafür?",
    "a": [
     "Produktdatenbank",
     "Lieferdatenbank",
     "Kundenhistorie",
     "Blacklist des Spamfilters",
     "Personalakte"
    ],
    "c": 0,
    "e": "Mit der Kundendatenbank verbunden sind laut Buch u. a. Produkt-, Lösungs- und Lieferdatenbank. Die Produktdatenbank liefert Eigenschaften und Preise der Produkte; die Lieferdatenbank den Lieferstatus, die Kundenhistorie die bisherigen Kontakte eines Kunden.",
    "k": "Datenmanagement",
    "s": "LF5 2.2"
   },
   {
    "tg": 3,
    "g": "zeitstabilitaet",
    "src": "ZP H25/31",
    "t": "mc",
    "q": "Eine Kundin wird neu angelegt. Welche Erfassung entspricht dem Grundsatz der Zeitstabilität?",
    "a": [
     "Geburtsdatum „12.03.1998“ statt Alter „28 Jahre“",
     "Alter „28 Jahre“ statt Geburtsdatum",
     "Status „Auszubildende“ ohne Angabe der Ausbildungsdauer",
     "„derzeit arbeitslos“ ohne Erfassungsdatum",
     "„Neukundin“ als dauerhafter Kundenstatus"
    ],
    "c": 0,
    "e": "Zeitstabilität: Daten so erfassen, dass sie für einen längeren Zeitraum gültig bleiben (Buchbeispiel: „Auszubildender“ nur mit Ausbildungsdauer). Das Geburtsdatum bleibt richtig, das Alter veraltet jedes Jahr. Weitere Grundsätze: Richtigkeit, Vollständigkeit, Redundanzvermeidung (Dubletten), Konsistenz.",
    "k": "Datenmanagement",
    "s": "LF5 2.2"
   },
   {
    "tg": 3,
    "g": "passwort",
    "src": "ZP H25/32",
    "t": "mc",
    "q": "Welches Passwort erfüllt die Kriterien für ein sicheres Passwort am besten?",
    "a": [
     "Wq8#tZ2!mR",
     "Dialog2026",
     "Sommer!!",
     "12345678",
     "MariaMueller"
    ],
    "c": 0,
    "e": "Sichere Passwörter kombinieren Groß- und Kleinbuchstaben, Ziffern und Sonderzeichen, enthalten kein Wort aus dem Wörterbuch (Schutz gegen Dictionary-Angriffe) und sind mindestens 8 Zeichen lang (Schutz gegen Brute-Force).",
    "k": "Datensicherheit",
    "s": "LF4 5.2.1"
   },
   {
    "tg": 3,
    "g": "antivirus-funktion",
    "src": "ZP H25/33",
    "t": "mc",
    "q": "Ihr Antivirenprogramm meldet: „Vollständige Prüfung abgeschlossen – 0 Bedrohungen gefunden.“ Welche Funktion wurde ausgeführt?",
    "a": [
     "Scan: Festplatten, Laufwerke und Dateien wurden auf Schadsoftware durchsucht.",
     "Update: die Virensignaturen wurden aktualisiert.",
     "Quarantäne: eine infizierte Datei wurde isoliert.",
     "Wächter: ein Programm wurde beim Start in Echtzeit überwacht.",
     "Firewall: der Netzwerkverkehr wurde gefiltert."
    ],
    "c": 0,
    "e": "Die vier Bestandteile eines Antivirenprogramms: Scan (Durchsuchen von Laufwerken und Dateien), Update (aktuelle Virensignaturen), Wächter (Echtzeitüberwachung) und Quarantäne (Isolieren verdächtiger Dateien). Die Firewall ist ein eigenes Schutzprogramm.",
    "k": "Datensicherheit",
    "s": "LF4 5.2.2"
   },
   {
    "tg": 3,
    "g": "blacklist",
    "src": "ZP H25/34",
    "t": "mc",
    "q": "Ein Absender schickt seit Wochen Werbe-Spam an die Service-Adresse. Wie sorgen Sie dafür, dass seine Mails künftig nicht mehr zugestellt werden?",
    "a": [
     "Sie tragen die Absenderadresse in die Blacklist des Spamfilters ein.",
     "Sie tragen die Absenderadresse in die Whitelist ein.",
     "Sie antworten dem Absender und bitten um Austragung.",
     "Sie öffnen den Anhang, um den Absender zu identifizieren.",
     "Sie leiten alle Mails an die gesamte Belegschaft weiter."
    ],
    "c": 0,
    "e": "Blacklist = Liste von Adressen, von denen keine E-Mails angenommen werden; Whitelist = Adressen, die immer zugestellt werden. Auf Spam antworten bestätigt dem Absender eine aktive Adresse, Anhänge unbekannter Absender können Schadsoftware enthalten.",
    "k": "Datensicherheit",
    "s": "LF4 5.2.5"
   },
   {
    "tg": 3,
    "g": "prozent-zeit",
    "src": "ZP H25/35",
    "t": "calc",
    "x": "To-do-Liste der Auszubildenden Lea, Arbeitstag 7,5 Stunden:\n· Berichtsheft führen: 36 Minuten\n· Kundenkorrespondenz, Teammeeting, Telefondienst: restliche Zeit",
    "q": "Wie viel Prozent ihrer täglichen Arbeitszeit plant Lea für das Berichtsheft ein?",
    "ans": [
     "8"
    ],
    "unit": "%",
    "e": "7,5 h = 450 Minuten → 36 · 100 / 450 = 8 %. Probe: 8 % von 450 Minuten = 36 Minuten. Fehlerquelle: Stunden und Minuten mischen – 36 / 7,5 = 4,8 ist keine Prozentangabe.",
    "k": "Information & Lernen",
    "s": "LF1 6.1"
   },
   {
    "tg": 3,
    "g": "datenschutz-umfang",
    "src": "ZP H25/36",
    "t": "mc",
    "q": "Welche Daten schützt das Datenschutzrecht (DSGVO und BDSG)?",
    "a": [
     "alle personenbezogenen Daten, also alle Informationen über eine identifizierte oder identifizierbare natürliche Person",
     "alle Daten eines Unternehmens einschließlich seiner Umsatzzahlen",
     "nur Stammdaten wie Name und Anschrift",
     "nur Daten juristischer Personen wie einer GmbH",
     "nur Bewegungsdaten wie Bestellungen"
    ],
    "c": 0,
    "e": "Geschützt sind alle personenbezogenen Daten natürlicher Personen – Stamm- wie Bewegungsdaten. Daten juristischer Personen und reine Unternehmenskennzahlen fallen nicht darunter (sie können aber als Geschäftsgeheimnis geschützt sein).",
    "k": "Datenschutz",
    "s": "LF4 6.1"
   },
   {
    "tg": 4,
    "g": "gmbh-haftung",
    "src": "ZP H25/37",
    "t": "mc",
    "q": "Welche Aussage zur Haftung einer GmbH trifft zu?",
    "a": [
     "Für die Verbindlichkeiten haftet den Gläubigern nur die GmbH mit ihrem Gesellschaftsvermögen.",
     "Die Gesellschafter haften zusätzlich mit ihrem Privatvermögen.",
     "Die Geschäftsführer haften immer persönlich für alle Schulden der GmbH.",
     "Verluste werden sofort nach Köpfen auf die Gesellschafter verteilt.",
     "Die Zahl der Gesellschafter ist gesetzlich auf fünf begrenzt."
    ],
    "c": 0,
    "e": "Laut Buch haftet den Gläubigern grundsätzlich nur die GmbH mit ihrem Gesellschaftsvermögen; es gilt eine strikte Trennung zum Privatvermögen der Gesellschafter. Die Zahl der Gesellschafter ist unbegrenzt; Gewinne werden nach Geschäftsanteilen verteilt.",
    "k": "Recht",
    "s": "LF1 1.3.3"
   },
   {
    "tg": 4,
    "g": "kg-haftung",
    "src": "ZP H25/38",
    "t": "mc",
    "q": "Welche Aussage zur Kommanditgesellschaft ist gesetzlich zutreffend?",
    "a": [
     "Die Komplementäre haften unbeschränkt, also auch mit ihrem Privatvermögen.",
     "Die Kommanditisten haften unbeschränkt mit ihrem gesamten Vermögen.",
     "Die Kommanditisten führen die Geschäfte der KG.",
     "Zur Gründung ist ein Mindestkapital von 25.000 € vorgeschrieben.",
     "In eine KG dürfen keine neuen Gesellschafter aufgenommen werden."
    ],
    "c": 0,
    "e": "Komplementäre (Vollhafter) haften unbeschränkt, gesamtschuldnerisch und unmittelbar und führen die Geschäfte. Kommanditisten (Teilhafter) haften nur mit ihrer Einlage. Ein Mindestkapital gibt es bei der KG nicht; die Aufnahme neuer Gesellschafter nennt das Buch ausdrücklich als Vorteil.",
    "k": "Recht",
    "s": "LF1 1.3.2"
   },
   {
    "tg": 4,
    "g": "hr-eintrag",
    "src": "ZP H25/39",
    "t": "mc",
    "q": "Die Mehler KG wird ins Handelsregister eingetragen. Welche Angabe gehört zur Eintragung?",
    "a": [
     "der Sitz der Gesellschaft",
     "der Jahresumsatz",
     "die Zahl der Mitarbeiter",
     "die Anschriften aller Kunden",
     "der Gewinn des letzten Geschäftsjahres"
    ],
    "c": 0,
    "e": "Eingetragen werden u. a. Firma und Sitz sowie – laut Buch – die Namen aller Gesellschafter und die Höhe der Einlagen der Kommanditisten. Das Handelsregister wird elektronisch beim Amtsgericht geführt; Personengesellschaften stehen in Abteilung A. Umsatz, Gewinn oder Mitarbeiterzahl werden nicht eingetragen.",
    "k": "Recht",
    "s": "LF1 1.3.1"
   },
   {
    "tg": 4,
    "g": "ablauforganisation",
    "src": "ZP H25/40",
    "t": "mc",
    "q": "Welche Aussage beschreibt die Ablauforganisation?",
    "a": [
     "Sie legt Arbeitsabläufe unter Berücksichtigung von Raum, Zeit, Mitarbeitern und Arbeitsmitteln fest und standardisiert sie.",
     "Sie gliedert das Unternehmen in Stellen und Abteilungen.",
     "Sie zeigt im Organigramm, wer wem gegenüber weisungsbefugt ist.",
     "Sie legt fest, ob ein Ein- oder Mehrliniensystem gilt.",
     "Sie ordnet Stabsstellen den Instanzen zu."
    ],
    "c": 0,
    "e": "Die Ablauforganisation gestaltet die Arbeitsabläufe (Workflow) und beherrscht sie durch Standardisierung und Routinen. Stellen, Abteilungen, Weisungsbefugnisse, Leitungssysteme und Stabsstellen gehören zur Aufbauorganisation. Beide stehen in engem Abhängigkeitsverhältnis.",
    "k": "Organisation",
    "s": "LF1 1.2.3"
   },
   {
    "tg": 4,
    "g": "ihk-aufgaben",
    "src": "ZP H25/41",
    "t": "mc",
    "q": "Welche Beschreibung trifft auf die Industrie- und Handelskammer zu?",
    "a": [
     "Interessenvertretung der gewerblichen Wirtschaft mit Aufgaben in Beratung, Wirtschaftsförderung sowie Aus- und Weiterbildung",
     "Träger der gesetzlichen Unfallversicherung",
     "Behörde zur Überwachung der Arbeitsschutzgesetze",
     "Interessenvertretung der Arbeitnehmer beim Abschluss von Tarifverträgen",
     "freiwilliger Zusammenschluss von Callcenter-Unternehmen einer Branche"
    ],
    "c": 0,
    "e": "Buchtabelle „Externe Institutionen“: IHK = Interessenvertretung der gewerblichen Wirtschaft, zuständige Stelle nach BBiG, führt Zwischen- und Abschlussprüfung durch. Unfallversicherung = Berufsgenossenschaft, Überwachung der Schutzgesetze = Aufsichtsbehörden/Gewerbeaufsicht, Tarifverträge = Gewerkschaft, Branchenzusammenschluss = Interessenverband (z. B. CCV, DDV).",
    "k": "Institutionen",
    "s": "LF1 1.4"
   },
   {
    "tg": 4,
    "g": "kg-gewinn",
    "src": "ZP H25/42",
    "t": "calc",
    "x": "Gesellschaftsvertrag der Hansen & Lenz KG (Auszug):\n· Komplementär Jan Hansen: Kapitaleinlage 150.000 €\n· Kommanditistin Mia Lenz: Kapitaleinlage 50.000 €\n· Gewinnverteilung: Jeder Gesellschafter erhält vorab 4 % seiner Einlage; der Rest wird im Verhältnis 3 : 2 (Hansen : Lenz) verteilt.\nJahresgewinn: 60.000 €",
    "q": "Wie viel Prozent des Jahresgewinns erhält Jan Hansen?",
    "ans": [
     "62"
    ],
    "unit": "%",
    "e": "Vorabverzinsung: Hansen 4 % von 150.000 = 6.000 €, Lenz 4 % von 50.000 = 2.000 € → 8.000 €. Restgewinn 60.000 − 8.000 = 52.000 €, 3 : 2 = 5 Teile à 10.400 € → Hansen 31.200 €, Lenz 20.800 €. Hansen gesamt 37.200 € → 37.200 · 100 / 60.000 = 62 %. Probe: Lenz 22.800 € + 37.200 € = 60.000 €. Hinweis: Das Buch nennt die 4-%-Verzinsung als gesetzliche Regel; seit dem MoPeG (1.1.2024) verteilt das Gesetz ohne Vertragsregel nach Beteiligungsverhältnis – deshalb ist die Regel hier als Vertragsklausel vorgegeben.",
    "k": "Recht",
    "s": "LF1 1.3.2"
   },
   {
    "tg": 4,
    "g": "gmbh-merkmal",
    "src": "ZP H25/43",
    "t": "mc",
    "q": "Für welche Rechtsform schreibt das Gesetz ein Mindestkapital von grundsätzlich 25.000 € vor?",
    "a": [
     "GmbH",
     "KG",
     "OHG",
     "Einzelunternehmen",
     "eingetragener Kaufmann (e. K.)"
    ],
    "c": 0,
    "e": "Das Stammkapital der GmbH beträgt grundsätzlich mindestens 25.000 €; die Geschäftsanteile der Gesellschafter können unterschiedlich hoch sein. Personengesellschaften (KG, OHG) und Einzelunternehmen haben kein gesetzliches Mindestkapital.",
    "k": "Recht",
    "s": "LF1 1.3.3"
   },
   {
    "tg": 4,
    "g": "probezeit-kuendigung",
    "src": "ZP H25/44",
    "t": "mc",
    "q": "Die Auszubildende Sara möchte nach sechs Wochen in eine andere Ausbildung wechseln; sie ist noch in der Probezeit. Wie kann sie kündigen?",
    "a": [
     "jederzeit ohne Einhaltung einer Frist und ohne Angabe von Gründen – aber schriftlich",
     "nur mit einer Frist von vier Wochen und schriftlicher Begründung",
     "mündlich gegenüber dem Ausbilder, ohne Frist",
     "nur mit Zustimmung der IHK",
     "gar nicht – in der Probezeit kann nur der Ausbildungsbetrieb kündigen"
    ],
    "c": 0,
    "e": "§ 22 BBiG: In der Probezeit können beide Seiten jederzeit ohne Kündigungsfrist und ohne Angabe von Gründen kündigen; die Kündigung muss schriftlich erfolgen. Die Vier-Wochen-Frist gilt erst nach der Probezeit, wenn der Auszubildende die Ausbildung aufgibt oder wechselt.",
    "k": "BBiG",
    "s": "LF1 2.1.4"
   },
   {
    "tg": 4,
    "g": "ausbildungsrahmenplan",
    "src": "ZP H25/45",
    "t": "mc",
    "q": "Welcher Teil der Ausbildungsordnung gliedert die im Betrieb zu vermittelnden Fertigkeiten, Kenntnisse und Fähigkeiten sachlich und zeitlich?",
    "a": [
     "Ausbildungsrahmenplan",
     "Rahmenlehrplan",
     "Ausbildungsvertrag",
     "Ausbildungsnachweis (Berichtsheft)",
     "Berufsbild"
    ],
    "c": 0,
    "e": "Der Ausbildungsrahmenplan ist Teil der Ausbildungsordnung und die Grundlage des betrieblichen Ausbildungsplans. Der Rahmenlehrplan gilt für die Berufsschule; das Berufsbild nennt nur die Inhalte, ohne zeitliche Gliederung.",
    "k": "Ausbildung",
    "s": "LF1 2.1.1"
   },
   {
    "tg": 4,
    "g": "sgb9-pflichtplaetze",
    "src": "ZP H25/46",
    "t": "calc",
    "x": "Die Dialog-GmbH beschäftigt im Jahresdurchschnitt:\n· 149 Arbeitnehmer auf Arbeitsplätzen im Sinne des SGB IX\n· 12 Auszubildende\nSGB IX (Auszug): Arbeitgeber mit mindestens 20 Arbeitsplätzen beschäftigen auf wenigstens 5 % der Arbeitsplätze schwerbehinderte Menschen. Stellen für Auszubildende zählen nicht mit. Bruchteile von 0,5 und mehr werden aufgerundet, kleinere abgerundet (bei weniger als 60 Arbeitsplätzen stets abgerundet).",
    "q": "Wie viele Pflichtarbeitsplätze muss die Dialog-GmbH mit schwerbehinderten Menschen besetzen?",
    "ans": [
     "7"
    ],
    "unit": "Arbeitsplätze",
    "e": "149 · 5 % = 7,45 → Bruchteil 0,45 < 0,5 → abrunden → 7 Pflichtarbeitsplätze. Typischer Fehler: Auszubildende mitzählen (161 · 5 % = 8,05 → 8). Buch: Pflicht ab 20 Beschäftigten, Quote 5 %; Auszubildenden- und Rundungsregel ergänzt aus dem SGB IX.",
    "k": "Schutzgesetze",
    "s": "LF1 2.2.6"
   },
   {
    "tg": 4,
    "g": "ausgleichsabgabe",
    "src": "ZP H25/47",
    "t": "mc",
    "q": "Die Dialog-GmbH beschäftigt weniger schwerbehinderte Menschen, als die Pflichtquote verlangt. Welche Folge ergibt sich daraus?",
    "a": [
     "Sie muss für die unbesetzten Pflichtarbeitsplätze eine Ausgleichsabgabe zahlen.",
     "Sie muss den Betrieb bis zur Erfüllung der Quote schließen.",
     "Sie darf bis zur Erfüllung nur noch schwerbehinderte Bewerber einstellen.",
     "Die Pflicht entfällt, wenn der Betriebsrat zustimmt.",
     "Sie erhält vom Integrationsamt eine Unbedenklichkeitsbescheinigung."
    ],
    "c": 0,
    "e": "Wird die 5-%-Quote nicht erreicht, ist eine Ausgleichsabgabe zu zahlen, mit der anderweitig Arbeitsplätze für schwerbehinderte Menschen finanziert werden. Zweiter Schwerpunkt des Schwerbehindertenrechts: besonderer Kündigungsschutz – ohne Zustimmung des Integrationsamts ist eine Kündigung unwirksam.",
    "k": "Schutzgesetze",
    "s": "LF1 2.2.6"
   },
   {
    "tg": 4,
    "g": "br-groesse",
    "src": "ZP H25/48",
    "t": "calc",
    "x": "Belegschaft der Nordlicht Service GmbH:\n· 2 Geschäftsführer\n· 5 leitende Angestellte\n· 186 Angestellte\n· 16 Auszubildende\nAlle Beschäftigten sind volljährig.\n§ 9 BetrVG (Auszug): 51 bis 100 Arbeitnehmer → 5 Mitglieder · 101 bis 200 → 7 · 201 bis 400 → 9",
    "q": "Aus wie vielen Mitgliedern besteht der Betriebsrat?",
    "ans": [
     "9"
    ],
    "unit": "Mitglieder",
    "e": "Arbeitnehmer im Sinne des BetrVG sind nach § 5 auch die zur Berufsausbildung Beschäftigten; Geschäftsführer und leitende Angestellte zählen nicht (§ 5 Abs. 2 und 3 BetrVG – ergänzt aus dem Gesetz). 186 + 16 = 202 → Stufe 201 bis 400 → 9 Mitglieder. Typischer Fehler: Auszubildende vergessen (186 → 7 Mitglieder).",
    "k": "Mitbestimmung",
    "s": "LF1 2.3.1"
   },
   {
    "tg": 4,
    "g": "br-wahlrecht",
    "src": "ZP H25/49",
    "t": "mc",
    "q": "Wer ist nach dem aktuellen Betriebsverfassungsgesetz bei der Betriebsratswahl wahlberechtigt (aktives Wahlrecht)?",
    "a": [
     "alle Arbeitnehmer ab 16 Jahren sowie Leiharbeitnehmer, die länger als drei Monate im Betrieb eingesetzt werden",
     "alle Arbeitnehmer ab 18 Jahren; Leiharbeitnehmer grundsätzlich nicht",
     "nur Arbeitnehmer, die mindestens sechs Monate dem Betrieb angehören",
     "alle Arbeitnehmer ab 16 Jahren einschließlich der leitenden Angestellten",
     "nur Mitglieder einer Gewerkschaft"
    ],
    "c": 0,
    "e": "§ 7 BetrVG in der Fassung seit 2021: wahlberechtigt sind alle Arbeitnehmer ab 16 Jahren; Leiharbeitnehmer, wenn sie länger als drei Monate im Betrieb eingesetzt werden. Das Buch nennt noch die alte Altersgrenze von 18 Jahren – maßgeblich ist die aktuelle Rechtslage, so auch in der Originalprüfung. Sechs Monate Betriebszugehörigkeit betreffen die Wählbarkeit (passives Wahlrecht).",
    "k": "Mitbestimmung",
    "s": "LF1 2.3.1"
   },
   {
    "tg": 4,
    "g": "br-rechte",
    "src": "ZP H25/50",
    "t": "mc",
    "q": "Für welche Maßnahme braucht die Geschäftsleitung zwingend die Zustimmung des Betriebsrats?",
    "a": [
     "Einführung eines Systems, mit dem Gespräche der Agents zur Leistungskontrolle mitgehört und ausgewertet werden",
     "Planung des Personalbedarfs für das kommende Jahr",
     "Verlagerung eines Standorts in eine andere Stadt",
     "Investition in eine neue Telefonanlage",
     "Erweiterung des Angebots um Chat-Support"
    ],
    "c": 0,
    "e": "Echte Mitbestimmung besteht laut Buch u. a. bei Beginn und Ende der täglichen Arbeitszeit, Pausen, Gesundheits- und Unfallschutz, Einführung von Arbeitskontrollen (Monitoring) und Überstunden. Personalplanung und wirtschaftliche Entscheidungen (Standort, Investitionen, Angebot) unterliegen nur Informations- und Beratungsrechten.",
    "k": "Mitbestimmung",
    "s": "LF1 2.3.1"
   },
   {
    "tg": 3,
    "g": "buerostuhl",
    "src": "ZP H25/51",
    "t": "mc",
    "q": "Welche Anforderung an einen Bürodrehstuhl im Callcenter ist richtig?",
    "a": [
     "Er muss sich individuell an den Nutzer anpassen lassen und standsicher sein – mit mindestens fünf Rollen.",
     "Vier Rollen reichen, wenn die Rückenlehne hoch genug ist.",
     "Armlehnen sind vorgeschrieben, eine Höhenverstellung nicht.",
     "Ein Hocker ohne Lehne ist grundsätzlich vorzuziehen.",
     "Er darf nicht verstellbar sein, damit keine Fehleinstellungen entstehen."
    ],
    "c": 0,
    "e": "Laut Buch muss ein guter Bürostuhl individuell anpassbar sein, wechselnde Sitzhaltungen erlauben (dynamisches Sitzen), den Körper gut abstützen und standsicher sein – mindestens fünf Rollen. Fehleinstellungen vermeidet eine Einweisung, nicht ein starrer Stuhl.",
    "k": "Arbeitsplatz",
    "s": "LF1 4"
   },
   {
    "tg": 4,
    "g": "arbeitsschutz-beratung",
    "src": "ZP H25/52",
    "t": "multi",
    "q": "Die Dialog-GmbH plant neue Arbeitsplätze und möchte sich zu Arbeitsschutz und Unfallverhütung beraten lassen. Welche zwei Stellen kommen dafür in Betracht?",
    "a": [
     "die Aufsichtsperson der zuständigen Berufsgenossenschaft",
     "das Gewerbeaufsichtsamt bzw. Amt für Arbeitsschutz",
     "die Verbraucherzentrale",
     "das Amtsgericht (Handelsregister)",
     "die Agentur für Arbeit",
     "das Finanzamt"
    ],
    "cs": [
     0,
     1
    ],
    "e": "Die Berufsgenossenschaft (für kaufmännische Tätigkeiten die Verwaltungs-Berufsgenossenschaft) ist Träger der Unfallversicherung und für Unfallverhütung zuständig. Die staatlichen Aufsichtsbehörden (Gewerbeaufsicht, Amt für Arbeitsschutz) überwachen die Schutzgesetze und beraten Betriebe.",
    "k": "Institutionen",
    "s": "LF1 1.4"
   },
   {
    "tg": 3,
    "g": "grossraum",
    "src": "ZP H25/53",
    "t": "mc",
    "q": "Die Geschäftsleitung plant ein Großraumbüro statt Einzelbüros. Welches Argument spricht aus Unternehmenssicht dafür?",
    "a": [
     "geringere Kosten je Arbeitsplatz durch bessere Flächenausnutzung",
     "geringerer Geräuschpegel als in Einzelbüros",
     "mehr Privatsphäre für die Mitarbeiter",
     "individuell regelbares Raumklima für jeden Einzelnen",
     "weniger Ablenkung durch Kollegen"
    ],
    "c": 0,
    "e": "Großraumbüros sparen Fläche und Kosten (der Buchtext nennt bis zu 20 % weniger Bürofläche) und vereinfachen die Kommunikation. Nachteile: Geräuschpegel, Ablenkung, schwieriges Raumklima, fehlende Privatsphäre.",
    "k": "Arbeitsplatz",
    "s": "LF1 4"
   },
   {
    "tg": 3,
    "g": "beleuchtung",
    "src": "ZP H25/54",
    "t": "mc",
    "q": "Welche Anforderung an die Beleuchtung eines Bildschirmarbeitsplatzes ist richtig?",
    "a": [
     "Der Arbeitsbereich ist gleichmäßig und blendfrei ausgeleuchtet.",
     "Der Arbeitsplatz wird nur durch eine punktuelle Schreibtischlampe beleuchtet.",
     "Leuchten werden so angeordnet, dass sie sich im Bildschirm spiegeln.",
     "Der Raum wird möglichst dunkel gehalten, damit der Bildschirm besser lesbar ist.",
     "Direktes Sonnenlicht auf dem Bildschirm verbessert die Lesbarkeit."
    ],
    "c": 0,
    "e": "Bildschirmarbeitsplätze brauchen eine ausreichende, gleichmäßige und blendfreie Beleuchtung ohne Spiegelungen auf dem Bildschirm; starke Hell-Dunkel-Kontraste ermüden die Augen.",
    "k": "Arbeitsplatz",
    "s": "LF1 4"
   },
   {
    "tg": 4,
    "g": "brandschutztuer",
    "src": "ZP H25/55",
    "t": "mc",
    "q": "Welches Verhalten verstößt gegen den vorbeugenden Brandschutz?",
    "a": [
     "Eine Brandschutztür wird mit einem Holzkeil offen gehalten, damit die Kollegen schneller durchkommen.",
     "Der Feuerlöscher hängt gut sichtbar und frei zugänglich im Flur.",
     "Fluchtwege sind mit grün-weißen Rettungszeichen gekennzeichnet.",
     "Die Brandschutzordnung hängt am Schwarzen Brett aus.",
     "Die Kaffeemaschine wird nach Feierabend ausgeschaltet."
    ],
    "c": 0,
    "e": "Brandschutztüren sollen im Brandfall die Ausbreitung von Feuer und Rauch verhindern und müssen selbstständig schließen können. Ein Keil hebt diese Schutzwirkung auf – ein erheblicher Mangel.",
    "k": "Arbeitsschutz",
    "s": "LF1 3.3"
   },
   {
    "tg": 4,
    "g": "verpackg",
    "src": "ZP H25/56",
    "t": "mc",
    "q": "Welche Regelung dient in erster Linie dem Umweltschutz?",
    "a": [
     "Verpackungsgesetz (VerpackG)",
     "Bürgerliches Gesetzbuch (BGB)",
     "Berufsbildungsgesetz (BBiG)",
     "Jugendarbeitsschutzgesetz (JArbSchG)",
     "Handelsgesetzbuch (HGB)"
    ],
    "c": 0,
    "e": "Das VerpackG enthält die Rücknahmepflicht für Verpackungen und verpflichtet Handel und Hersteller, Verpackungsabfälle vorrangig zu vermeiden, sonst wiederzuverwenden oder zu recyceln. Weitere Umweltgesetze laut Buch: KrWG, GewAbfV, UVPG, BImSchG.",
    "k": "Umweltschutz",
    "s": "LF1 3.4"
   },
   {
    "tg": 4,
    "g": "krwg-hierarchie",
    "src": "ZP H25/57",
    "t": "order",
    "q": "Bringen Sie die Stufen der Zielhierarchie des Kreislaufwirtschaftsgesetzes in die richtige Reihenfolge – höchste Priorität zuerst.",
    "items": [
     "Abfallvermeidung",
     "Wiederverwendung",
     "Wiederverwertung (Recycling)",
     "energetische Verwertung",
     "Beseitigung"
    ],
    "e": "Buchbeispiele: 1. Vermeidung (Intranet statt Papier), 2. Wiederverwendung (Pfandflaschen), 3. Wiederverwertung/Recycling (Altpapier wird zu neuem Papier), 4. energetische Verwertung (Verbrennung zur Energiegewinnung), 5. Beseitigung (Deponie, z. B. defekte Tonerkartuschen als Sondermüll).",
    "k": "Umweltschutz",
    "s": "LF1 3.4"
   },
   {
    "tg": 4,
    "g": "umweltbelastung",
    "src": "ZP H25/58",
    "t": "mc",
    "q": "Welche Situation stellt eine betriebsbedingte Umweltbelastung dar?",
    "a": [
     "Aus einem defekten Laserdrucker gelangen gesundheitsschädliche Emissionen (Tonerstaub) in die Raumluft.",
     "Ein Mitarbeiter fährt mit dem Fahrrad zur Arbeit.",
     "Das Unternehmen bezieht Ökostrom.",
     "Altpapier wird getrennt gesammelt.",
     "Die Kantine bietet täglich ein vegetarisches Gericht an."
    ],
    "c": 0,
    "e": "Typische Umweltbelastungen im Dialogmarketing laut Buch: Papierverbrauch, Energieverbrauch und Abfall – insbesondere Problemabfall wie Tonerreste und Druckerpatronen. Emissionen defekter Geräte belasten Umwelt und Gesundheit; die übrigen Beispiele sind umweltschonende Maßnahmen.",
    "k": "Umweltschutz",
    "s": "LF1 3.4"
   },
   {
    "tg": 4,
    "g": "energie-sparen",
    "src": "ZP H25/59",
    "t": "mc",
    "q": "Mit welcher Maßnahme senken Sie im Büroalltag ohne Aufwand den Stromverbrauch?",
    "a": [
     "Licht in Räumen und am Arbeitsplatz ausschalten, wenn es nicht benötigt wird",
     "Monitore nach Feierabend im Stand-by-Modus lassen",
     "Drucker grundsätzlich über Nacht eingeschaltet lassen",
     "Ladegeräte dauerhaft in der Steckdose lassen",
     "möglichst viele Dokumente farbig ausdrucken"
    ],
    "c": 0,
    "e": "Nicht benötigte Verbraucher ausschalten ist die einfachste Energiesparmaßnahme. Das Buch nennt ausdrücklich Geräte im Stand-by als Energieverbraucher.",
    "k": "Umweltschutz",
    "s": "LF1 3.4"
   },
   {
    "tg": 4,
    "g": "papierlos-ziel",
    "src": "ZP H25/60",
    "t": "mc",
    "q": "Die Dialog-GmbH stellt interne Mitteilungen von Papierformularen und Hauspost auf E-Mail und Intranet um. Welches umweltorientierte Ziel verfolgt sie damit vorrangig?",
    "a": [
     "Abfallvermeidung",
     "Zeitersparnis",
     "Kostensenkung",
     "Datensicherheit",
     "höhere Mitarbeitermotivation"
    ],
    "c": 0,
    "e": "Buchbeispiel zur obersten Stufe des KrWG: Durch verstärkte Nutzung des Intranets vermindert die Dialogfix GmbH ihren Papierabfall um 30 %. Zeit- und Kostenersparnis sind ökonomische, keine ökologischen Ziele.",
    "k": "Umweltschutz",
    "s": "LF1 3.4"
   }
  ]
 },
 {
  "id": "F26",
  "name": "Frühjahr 2026",
  "note": "Nachbau · Originalreihenfolge",
  "items": [
   {
    "tg": 1,
    "g": "hardskills",
    "src": "ZP F26/1",
    "t": "multi",
    "q": "In einer Stellenanzeige für Agents stehen verschiedene Anforderungen. Welche zwei gehören zu den Hard Skills?",
    "a": [
     "abgeschlossene kaufmännische Berufsausbildung",
     "Anwenderkenntnisse in MS Office",
     "Teamfähigkeit",
     "Belastbarkeit",
     "Einfühlungsvermögen",
     "Frustrationstoleranz"
    ],
    "cs": [
     0,
     1
    ],
    "e": "Hard Skills sind fachliche Qualifikationen, die sich über Zeugnisse oder Tests prüfen lassen (Ausbildung, Zertifikate, Berufserfahrung, Produkt-, Sprach- und EDV-Kenntnisse). Soft Skills sind persönliche und soziale Kompetenzen wie Teamfähigkeit, Belastbarkeit oder Einfühlungsvermögen – sie werden v. a. im Bewerbungsverfahren (z. B. Assessment-Center) geprüft.",
    "k": "Mitarbeiter",
    "s": "LF2 2.3.2"
   },
   {
    "tg": 1,
    "g": "prozent-steigerung",
    "src": "ZP F26/2",
    "t": "calc",
    "q": "Die Dialog-GmbH bildete vor drei Jahren 15 Kaufleute für Dialogmarketing aus, heute sind es 24. Um wie viel Prozent ist die Zahl der Auszubildenden gestiegen?",
    "ans": [
     "60"
    ],
    "unit": "%",
    "e": "Veränderung · 100 / Ausgangswert = (24 − 15) · 100 / 15 = 900 / 15 = 60 %. Grundwert ist der alte Wert. Häufiger Fehler: durch den neuen Wert teilen (9 / 24 = 37,5 %). Probe: 15 · 1,6 = 24.",
    "k": "Branche & Historie",
    "s": "LF2 1.1.2"
   },
   {
    "tg": 1,
    "g": "strukturschwach",
    "src": "ZP F26/3",
    "t": "mc",
    "q": "Welche Region ist ein typisches Beispiel für eine strukturschwache Region, in der sich Callcenter mit staatlicher Förderung angesiedelt haben?",
    "a": [
     "eine ländliche Region oder ein altindustrialisiertes Gebiet, in dem z. B. Bergbau und Stahlindustrie weggebrochen sind",
     "das Zentrum einer wirtschaftsstarken Großstadt mit Vollbeschäftigung",
     "eine Region mit dem höchsten Lohnniveau Deutschlands",
     "ein Gebiet, in dem ausschließlich Hightech-Unternehmen ansässig sind",
     "ein Standort, an dem keine Arbeitskräfte verfügbar sind"
    ],
    "c": 0,
    "e": "Strukturschwache Regionen haben eine geringe Wirtschaftskraft – ländliche Räume oder altindustrialisierte Gebiete, in denen Wirtschaftszweige wie Kohle, Stahl oder Werften weggebrochen sind. Die Ansiedlung von Callcentern soll dort Arbeitsplätze schaffen.",
    "k": "Branche & Historie",
    "s": "LF2 1.1.2"
   },
   {
    "tg": 1,
    "g": "direct-response",
    "src": "ZP F26/4",
    "t": "mc",
    "q": "Welche Maßnahme ist ein Beispiel für Dialogmarketing?",
    "a": [
     "Ein Radiosender nennt nach dem Werbespot eine Hotline, über die Hörer sofort bestellen können.",
     "Ein Versandhändler verschickt 100.000 identische Prospekte.",
     "Eine Plakatkampagne wirbt bundesweit für ein neues Getränk.",
     "Ein Unternehmen verteilt Postwurfsendungen an alle Haushalte.",
     "Ein Verlag schaltet eine Zeitungsanzeige ohne Kontaktmöglichkeit."
    ],
    "c": 0,
    "e": "Direct Response – die sofortige Bestellung über eine Hotline nach einem TV- oder Radiospot – ordnet das Buch dem Dialogmarketing zu. Massenhafte, gleichförmige Schriftwerbung (Prospekte, Postwurfsendungen) ist Direktmarketing; Plakat und Anzeige ohne Antwortmöglichkeit sind klassisches Marketing.",
    "k": "Leistungen",
    "s": "LF2 2.2.1"
   },
   {
    "tg": 1,
    "g": "dm-merkmale",
    "src": "ZP F26/5",
    "t": "multi",
    "q": "Welche zwei Merkmale kennzeichnen Dialogmarketing im Vergleich zum klassischen Marketing?",
    "a": [
     "personalisierte Beziehung zum Empfänger",
     "rasche Erfolgskontrolle möglich",
     "hohe Streuverluste",
     "Ansprache eines anonymen Massenmarkts",
     "Ziel ist vor allem die Steigerung des Bekanntheitsgrades",
     "langfristige Planung notwendig"
    ],
    "cs": [
     0,
     1
    ],
    "e": "Buchtabelle: Dialogmarketing = zweiseitige Kommunikation, individuelle und zielgenaue Ansprache, geringe Streuverluste, direkte Responsemöglichkeit, Ziel direkte Reaktion, personalisierte Beziehung, flexibler Einsatz, rasche Erfolgskontrolle. Die übrigen Merkmale gehören zum klassischen Marketing.",
    "k": "Marketing",
    "s": "LF2 1.3.2"
   },
   {
    "tg": 1,
    "g": "overflow",
    "src": "ZP F26/6",
    "t": "mc",
    "q": "Nach einem TV-Spot erwartet die Dialog-GmbH mehr Anrufe, als ihre eigenen Agents annehmen können. Welche Lösung beschreibt ein Overflow-Konzept?",
    "a": [
     "Anrufe, die das eigene Team nicht annehmen kann, werden automatisch an einen externen Dienstleister weitergeleitet.",
     "Alle Anrufe werden grundsätzlich in die Warteschleife gelegt.",
     "Überzählige Anrufer hören eine Ansage und werden getrennt.",
     "Die Hotline wird während des Spots abgeschaltet.",
     "Die Agents führen mehrere Gespräche gleichzeitig."
    ],
    "c": 0,
    "e": "Overflow = überzählige Anrufe bei Anrufspitzen (Peaks). Sie werden an ein Overflow-Callcenter bzw. einen externen Dienstleister oder einen anderen Standort weitergeleitet. Das Buch nennt dies ausdrücklich bei Direct Response.",
    "k": "Leistungen",
    "s": "LF2 2.2.1"
   },
   {
    "tg": 2,
    "g": "textbausteine",
    "src": "ZP F26/7",
    "t": "mc",
    "q": "Die Schadenabteilung einer Versicherung beantwortet täglich viele gleichartige Anfragen schriftlich. Womit wird die Korrespondenz am besten vereinheitlicht und beschleunigt?",
    "a": [
     "mit Textbausteinen",
     "mit Pressemitteilungen",
     "mit einem Organigramm",
     "mit einer Blacklist",
     "mit einer Mindmap"
    ],
    "c": 0,
    "e": "Textbausteine ermöglichen eine schnelle, einheitliche Beantwortung standardisierter Anfragen; Rechtschreibung und Styleguide werden vorab geprüft. Nachteile laut Buch: Gefahr unpersönlicher Antworten, Fehler im Baustein landen bei jedem Kunden.",
    "k": "Schriftliche Kommunikation",
    "s": "LF3 1.3"
   },
   {
    "tg": 2,
    "g": "fuenfsatz-ausklammerung",
    "src": "ZP F26/8",
    "t": "order",
    "q": "Sie argumentieren nach dem Fünfsatz-Bauplan „Ausklammerung“. Bringen Sie die Sätze in die richtige Reihenfolge.",
    "items": [
     "„Bisher haben wir vor allem über die monatliche Grundgebühr gesprochen.“",
     "„Dabei war Ihnen ein möglichst niedriger Preis besonders wichtig.“",
     "„Außer Acht gelassen haben wir bisher die Netzabdeckung an Ihrem Wohnort.“",
     "„Gerade dort bietet der Tarif Plus einen deutlich besseren Empfang.“",
     "„Deshalb empfehle ich Ihnen den Tarif Plus.“"
    ],
    "e": "Bauplan Ausklammerung laut Buch: 1. Einstieg mit Bezugnahme auf das diskutierte Thema, 2. Bezugnahme auf bisher gebrachte Argumente, 3. Argument 1 (eigenes Thema einbringen), 4. Argument 2, 5. eigener Zielsatz. Ziel: bisher diskutierte Themen in den Hintergrund stellen und einen neuen Punkt einbringen.",
    "k": "Gesprächsführung",
    "s": "LF3 3.2.1"
   },
   {
    "tg": 2,
    "g": "kundentypen",
    "src": "ZP F26/9",
    "t": "match",
    "q": "Ordnen Sie die Gesprächsstrategien dem passenden Kundentyp zu.",
    "pairs": [
     [
      "ruhig bleiben, sich nicht hetzen lassen und mit Fragen den roten Faden halten",
      "der Ungeduldige"
     ],
     [
      "um Rat und Einschätzung bitten, keinesfalls zurechtweisen",
      "der Besserwisser"
     ],
     [
      "nicht drängen, gezielt fragen und Zwischenergebnisse zusammenfassen",
      "der Entscheidungsschwache"
     ],
     [
      "gezielt unterbrechen und das Gesagte zusammenfassen",
      "der Vielredner"
     ],
     [
      "offene Fragen stellen, Zeit lassen und Interesse signalisieren",
      "der Schweiger"
     ]
    ],
    "e": "Strategien laut Kundentypologie des Buches. Weitere Typen: der Aggressive (nicht provozieren lassen, sachlich bleiben) und der Impulsive (verbindlichen Abschluss und nächste Schritte festhalten). Jeder Kunde bleibt trotzdem individuell zu behandeln.",
    "k": "Kundentypen",
    "s": "LF3 4.2"
   },
   {
    "tg": 3,
    "g": "bildschirm-fenster",
    "src": "ZP F26/10",
    "t": "mc",
    "q": "Wie stellen Sie einen Schreibtisch mit Bildschirm auf, damit Sie bei der Arbeit nicht geblendet werden?",
    "a": [
     "so, dass die Blickrichtung parallel zur Fensterfront verläuft",
     "so, dass Sie direkt zum Fenster hinausschauen",
     "so, dass Sie mit dem Rücken zum Fenster sitzen",
     "direkt unter eine Deckenleuchte",
     "möglichst dicht an die Fensterscheibe, um das Tageslicht voll zu nutzen"
    ],
    "c": 0,
    "e": "Der Bildschirm steht im rechten Winkel zum Fenster, die Blickrichtung verläuft parallel zur Fensterfront. Blick ins Helle blendet, ein Fenster im Rücken spiegelt sich im Bildschirm.",
    "k": "Arbeitsplatz",
    "s": "LF1 4"
   },
   {
    "tg": 2,
    "g": "buchstabiertafel",
    "src": "ZP F26/11",
    "t": "mc",
    "q": "Ein Anrufer aus Irland versteht das Wort „Kunde“ nicht. Wie buchstabieren Sie es nach der internationalen Buchstabiertafel?",
    "a": [
     "Kilo – Uniform – November – Delta – Echo",
     "Köln – Unna – Nürnberg – Düsseldorf – Essen",
     "Kaufmann – Ulrich – Nordpol – Dora – Emil",
     "Kilo – Union – Nancy – Denver – Easy",
     "King – Uniform – Nordpol – David – Echo"
    ],
    "c": 0,
    "e": "Die internationale Buchstabiertafel (ITU/NATO: Alfa, Bravo, Charlie …) ist für fremdsprachige Anrufer gedacht. „Kaufmann, Ulrich …“ und die neue Tafel mit Städtenamen (Köln, Unna …) sind deutsche Buchstabiertafeln.",
    "k": "Gesprächsführung",
    "s": "LF3 4.3"
   },
   {
    "tg": 2,
    "g": "entscheidungsschwach",
    "src": "ZP F26/12",
    "t": "mc",
    "q": "Ein Kunde kann sich nicht zwischen zwei Tarifen entscheiden. Wie helfen Sie ihm, selbst Gründe für oder gegen eine Entscheidung zu finden?",
    "a": [
     "Sie geben ihm ein unterstützendes Argument, das zu seinem ermittelten Bedarf passt.",
     "Sie stellen eine Alternativfrage: „Nehmen Sie Tarif A oder Tarif B?“",
     "Sie spielen die Unterschiede herunter, damit er sich schneller entscheidet.",
     "Sie überreden ihn, den teureren Tarif zu nehmen.",
     "Sie stellen eine Intonationsfrage."
    ],
    "c": 0,
    "e": "Der Entscheidungsschwache darf nicht gedrängt werden. Ein unterstützendes, bedarfsbezogenes Argument gibt ihm einen Grund, mit dem er selbst entscheiden kann; das Buch empfiehlt zudem gezielte Fragen und das Zusammenfassen von Zwischenergebnissen. Eine Alternativfrage erzwingt eine Wahl, liefert aber keine Gründe; Überreden und Herunterspielen sind Gesprächsstörer.",
    "k": "Kundentypen",
    "s": "LF3 4.2"
   },
   {
    "tg": 2,
    "g": "gespraechsphasen",
    "src": "ZP F26/13",
    "t": "match",
    "q": "Sie erstellen einen Gesprächsleitfaden. Ordnen Sie die Gesprächsinhalte der passenden Gesprächsphase zu.",
    "pairs": [
     [
      "Meldeformel mit offener Frage",
      "Begrüßung"
     ],
     [
      "Legitimation mit Kundennummer und Geburtsdatum",
      "Begrüßung"
     ],
     [
      "offene Fragen nach dem genauen Anliegen",
      "Bedarfsermittlung"
     ],
     [
      "Nutzenargumentation",
      "Beratung und Lösung"
     ],
     [
      "Einwände des Kunden behandeln",
      "Beratung und Lösung"
     ],
     [
      "Zusammenfassung und Abschlussfrage",
      "Gesprächsabschluss"
     ]
    ],
    "e": "Das Beratungsgespräch laut Buch: Begrüßung (Meldeformel, Legitimation) → Bedarfsermittlung (Fragetrichter, aktives Zuhören) → Beratung und Lösung (Nutzenargumentation, Einwandbehandlung) → Gesprächsabschluss (Zielvereinbarung, Zusammenfassung, Termin, Abschlussfrage, Verabschiedung).",
    "k": "Gesprächsführung",
    "s": "LF5 1.1"
   },
   {
    "tg": 2,
    "g": "legitimation",
    "src": "ZP F26/14",
    "t": "multi",
    "q": "Ein Kollege erinnert Sie daran, zu Beginn des Gesprächs die Identität des Anrufers zu prüfen. Mit welchen zwei Prüfdaten identifizieren Sie einen Kunden eindeutig?",
    "a": [
     "Kundennummer",
     "Geburtsdatum",
     "Wohnort",
     "Postleitzahl",
     "gebuchter Tarifname",
     "Farbe des Smartphones"
    ],
    "cs": [
     0,
     1
    ],
    "e": "Prüfdaten müssen dem Kunden eindeutig zugeordnet und für Dritte schwer zugänglich sein – das Buch nennt u. a. Kundennummer, Geburtsdatum, Kontonummer, Datum der ersten Bestellung, letzten Rechnungsbetrag oder eine selbst gewählte Sicherheitsfrage. Wohnort, PLZ oder Tarifname teilen viele Kunden.",
    "k": "Gesprächsführung",
    "s": "LF5 1.1.1"
   },
   {
    "tg": 2,
    "g": "kartons",
    "src": "ZP F26/15",
    "t": "calc",
    "q": "Ein Kunde bestellt 740 bedruckte USB-Sticks für eine Werbeaktion. Die Sticks werden nur kartonweise verkauft, ein Karton enthält 25 Stück. Wie viele Kartons benötigt der Kunde?",
    "ans": [
     "30"
    ],
    "unit": "Kartons",
    "e": "740 / 25 = 29,6 → es werden ganze Kartons verkauft, also aufrunden: 30 Kartons. Probe: 29 Kartons = 725 Sticks (zu wenig), 30 Kartons = 750 Sticks (reicht). Kaufmännisches Runden wäre hier fachlich falsch.",
    "k": "Gesprächsführung",
    "s": "LF5 1.1"
   },
   {
    "tg": 3,
    "g": "multitasking",
    "src": "ZP F26/16",
    "t": "mc",
    "q": "Was versteht man unter Multitasking am Arbeitsplatz im Callcenter?",
    "a": [
     "Der Kundenberater führt mehrere Tätigkeiten gleichzeitig aus, z. B. telefonieren und Daten im CRM erfassen.",
     "Der Kundenberater führt mehrere Kundengespräche gleichzeitig.",
     "Der Kundenberater spricht Kunden über mehrere Kanäle an.",
     "Der Kundenberater nimmt in der Mittagspause weiter Anrufe an.",
     "Mehrere Kundenberater bearbeiten gemeinsam denselben Kundenfall."
    ],
    "c": 0,
    "e": "Multitasking = mehrere Tätigkeiten zur gleichen Zeit, typisch: Gespräch führen und parallel Datenbanken nutzen. Laut Buch wechselt das Gehirn dabei zwischen den Tätigkeiten; mehr als zwei komplexe Aufgaben gleichzeitig gelingen kaum. Die Ansprache über mehrere Kanäle heißt Multichannel – nicht verwechseln.",
    "k": "Datenmanagement",
    "s": "LF5 2.4"
   },
   {
    "tg": 2,
    "g": "ausschoepfung",
    "src": "ZP F26/17",
    "t": "calc",
    "x": "Outbound-Aktion der Dialog-GmbH: Bestandskunden sollen ein neues Tablet kaufen.\nAngewählte Kunden: 2.400 · erreichte Kunden: 1.932 · Käufe: 338",
    "q": "Berechnen Sie die Ausschöpfungsquote.",
    "ans": [
     "80,5"
    ],
    "unit": "%",
    "hint": "Kaufmännisch auf eine Nachkommastelle runden.",
    "e": "Ausschöpfungsquote = erreichte Personen (Nettokontakte) · 100 / Anzahl der Kontaktdaten = 1.932 · 100 / 2.400 = 80,5 %. Probe: 80,5 % von 2.400 = 1.932. Eine niedrige Quote deutet auf schlechte Datenqualität oder nicht ausgeschöpfte Daten hin.",
    "k": "Kennzahlen",
    "s": "LF5 5.2.1"
   },
   {
    "tg": 2,
    "g": "erfolgsquote",
    "src": "ZP F26/18",
    "t": "calc",
    "x": "Outbound-Aktion der Dialog-GmbH: Bestandskunden sollen ein neues Tablet kaufen.\nAngewählte Kunden: 2.400 · erreichte Kunden: 1.932 · Käufe: 338",
    "q": "Berechnen Sie die Erfolgsquote der Aktion.",
    "ans": [
     "17,5"
    ],
    "unit": "%",
    "hint": "Kaufmännisch auf eine Nachkommastelle runden.",
    "e": "Erfolgsquote = Erfolge · 100 / Nettokontakte = 338 · 100 / 1.932 = 17,49 % ≈ 17,5 %. Bezugsgröße sind die erreichten Kunden, nicht die angewählten (338 / 2.400 = 14,1 % wäre falsch). Probe: 17,5 % von 1.932 ≈ 338.",
    "k": "Kennzahlen",
    "s": "LF5 5.2.2"
   },
   {
    "tg": 2,
    "g": "positiv-formulieren",
    "src": "ZP F26/19",
    "t": "mc",
    "q": "Welche Aussage ist positiv formuliert?",
    "a": [
     "„Gemeinsam finden wir eine Lösung für Sie.“",
     "„Vielleicht wäre das eine Möglichkeit …“",
     "„Sie müssen das Formular erst ausfüllen.“",
     "„Das kann ich Ihnen am Telefon leider nicht sagen.“",
     "„Da haben wir wohl ein Problem.“"
    ],
    "c": 0,
    "e": "Verstärker wie „wir beide“/„gemeinsam“ signalisieren eine gemeinsame Lösung. „Vielleicht“, „müssen“, „nicht“ und „Problem“ nennt das Buch als Reizwörter: Sie wirken unsicher, bevormundend oder reden dem Kunden ein Problem ein.",
    "k": "Gesprächsführung",
    "s": "LF5 1.1"
   },
   {
    "tg": 2,
    "g": "schufa-anlass",
    "src": "ZP F26/20",
    "t": "mc",
    "q": "In welchem Fall hat die Dialog-GmbH ein berechtigtes Interesse, eine SCHUFA-Auskunft über einen Kunden einzuholen?",
    "a": [
     "Der Kunde kauft ein Smartphone auf Raten mit einer Laufzeit von 24 Monaten.",
     "Der Kunde bezahlt Zubehör per Vorkasse.",
     "Der Kunde informiert sich über verschiedene Tarife.",
     "Der Kunde tauscht ein defektes Ladegerät um.",
     "Der Kunde bezahlt bar bei Abholung im Shop."
    ],
    "c": 0,
    "e": "Eine Bonitätsauskunft ist nur gerechtfertigt, wenn das Unternehmen ein Kreditrisiko eingeht, also die Leistung vor der Zahlung erbringt (Ratenkauf, Laufzeitvertrag, Rechnungskauf). Bei Vorkasse, Barzahlung, Beratung oder Umtausch besteht kein Ausfallrisiko.",
    "k": "Zahlungsverkehr",
    "s": "LF5 6.1"
   },
   {
    "tg": 2,
    "g": "einwandbehandlung",
    "src": "ZP F26/21",
    "t": "order",
    "q": "Ein Trainer fragt Sie, wie die Schritte der Einwandbehandlung aufeinander aufbauen. Bringen Sie sie in die richtige Reihenfolge.",
    "items": [
     "aktiv zuhören und den Einwand analysieren",
     "den Einwand inhaltlich bestätigen",
     "mit Nutzenargumenten auf den Einwand eingehen",
     "absichern, ob der Einwand ausgeräumt ist",
     "positiv verabschieden"
    ],
    "e": "Erst verstehen (zuhören, analysieren), dann den Kunden bestätigen, erst danach argumentieren und absichern; ein positiver Abschluss sichert die Beziehung. Das Buch nennt Einwände eine Chance und vertieft die Methoden in Band 2 – die Schrittfolge entspricht der IHK-Lösung, nicht einem Buchwortlaut.",
    "k": "Gesprächsführung",
    "s": "LF5 1.1"
   },
   {
    "tg": 2,
    "g": "zufriedenheit-befragung",
    "src": "ZP F26/22",
    "t": "multi",
    "q": "Ein Mobilfunkanbieter lässt alle Neukunden telefonisch zu ihrer Zufriedenheit befragen. Welche zwei Gründe sprechen für eine solche Befragung?",
    "a": [
     "Die Dienstleistung soll stärker an den Wünschen der Kunden ausgerichtet werden.",
     "Begeisterte Kunden empfehlen das Unternehmen weiter und werden zu Werbeträgern.",
     "Die Befragung dient ausschließlich der Aktualisierung von Adressdaten.",
     "Kunden empfinden Befragungen grundsätzlich als Belästigung.",
     "Durch die Befragung sinkt die Zahl der Neukunden.",
     "Die Befragung ersetzt das Beschwerdemanagement vollständig."
    ],
    "cs": [
     0,
     1
    ],
    "e": "Zufriedenheitsbefragungen zeigen, wo die Leistung von den Kundenerwartungen abweicht, und sind ein Instrument der Kundenbindung. Sehr zufriedene Kunden empfehlen das Unternehmen weiter. Eine Befragung ersetzt weder Datenpflege noch Beschwerdemanagement.",
    "k": "Kundenbindung",
    "s": "LF5 3.2"
   },
   {
    "tg": 2,
    "g": "prozentpunkte",
    "src": "ZP F26/23",
    "t": "calc",
    "x": "Kundenzufriedenheitsbefragung (Gesamtkundschaft jeweils 40.000):\nVorjahr: 18.000 zufriedene Kunden\nlaufendes Jahr: 26.000 zufriedene Kunden",
    "q": "Um wie viele Prozentpunkte ist der Anteil der zufriedenen Kunden gestiegen?",
    "ans": [
     "20"
    ],
    "unit": "Prozentpunkte",
    "e": "Vorjahr: 18.000 · 100 / 40.000 = 45 % · laufendes Jahr: 26.000 · 100 / 40.000 = 65 % → Differenz 65 − 45 = 20 Prozentpunkte. Nicht verwechseln: Die relative Steigerung beträgt (65 − 45) · 100 / 45 = 44,4 % – das sind Prozent, keine Prozentpunkte.",
    "k": "Kundenbindung",
    "s": "LF5 3.2"
   },
   {
    "tg": 2,
    "g": "kulanz",
    "src": "ZP F26/24",
    "t": "mc",
    "q": "In welcher Aussage verhält sich die Mitarbeiterin kulant?",
    "a": [
     "„Obwohl die Gewährleistung seit einem Jahr abgelaufen ist, reparieren wir Ihr Headset kostenlos.“",
     "„Innerhalb der gesetzlichen Gewährleistung beheben wir den Mangel kostenlos.“",
     "„Sie können den Kauf innerhalb von 14 Tagen widerrufen.“",
     "„Sie können Ihren Vertrag zum Ende der Mindestlaufzeit kündigen.“",
     "„Seien Sie froh, andere Kunden haben viel größere Probleme.“"
    ],
    "c": 0,
    "e": "Kulanz ist ein freiwilliges, großzügiges Entgegenkommen – typischerweise nach Ablauf der gesetzlichen Gewährleistung (Buchbeispiel: Reparatur des Laserdruckers drei Monate nach Ablauf). Gewährleistung, Widerrufsrecht und Kündigung zum Laufzeitende sind gesetzliche bzw. vertragliche Rechte. Grenze der Kulanz: der Kundenwert.",
    "k": "Kundenbindung",
    "s": "LF5 4.2.3"
   },
   {
    "tg": 3,
    "g": "strat-operativ",
    "src": "ZP F26/25",
    "t": "multi",
    "q": "Welche zwei Entscheidungen sind strategisch?",
    "a": [
     "Die Dialog-GmbH will in zwei Jahren einen Standort in Österreich eröffnen.",
     "Der Marktanteil soll in den nächsten vier Jahren um 5 Prozentpunkte steigen.",
     "Ein Mitarbeiter aus dem Backoffice hilft morgen in der Hotline aus.",
     "Die Pausenzeiten werden für die nächste Woche neu eingeteilt.",
     "Für den heutigen Nachmittag wird eine Verkaufsprämie ausgelobt.",
     "Wegen eines Anrufpeaks wird die Warteschleifenansage geändert."
    ],
    "cs": [
     0,
     1
    ],
    "e": "Strategische Entscheidungen sind langfristig, betreffen das Unternehmen als Ganzes und werden von der Unternehmensführung getroffen (neue Märkte, Standorte, Ziele über mehrere Jahre). Operative Entscheidungen betreffen das kurzfristige Tagesgeschäft.",
    "k": "Entscheidungsmethoden",
    "s": "LF1 1.1.2"
   },
   {
    "tg": 3,
    "g": "entscheidungsmatrix",
    "src": "ZP F26/26",
    "t": "calc",
    "x": "Gewichtete Entscheidungsmatrix Teamleitung (Punkte 1 = schlecht bis 6 = sehr gut)\nKriterium (Gewicht): K1 / K2 / K3 / K4\nFachkompetenz (20 %): 5 / 3 / 4 / 6\nKommunikation (25 %): 3 / 5 / 4 / 5\nFührungskompetenz (30 %): 2 / 4 / 6 / 3\nBerufserfahrung (15 %): 6 / 3 / 2 / 3\nZeugnisse (10 %): 4 / 5 / 3 / 2",
    "q": "Für welchen Kandidaten entscheidet sich die Dialog-GmbH nach der höchsten gewichteten Punktzahl? Geben Sie die Nummer an.",
    "ans": [
     "3"
    ],
    "unit": "Kandidat Nr.",
    "hint": "Punkte × Gewicht je Kriterium, dann addieren.",
    "e": "K1: 1,00 + 0,75 + 0,60 + 0,90 + 0,40 = 3,65 · K2: 0,60 + 1,25 + 1,20 + 0,45 + 0,50 = 4,00 · K3: 0,80 + 1,00 + 1,80 + 0,30 + 0,30 = 4,20 · K4: 1,20 + 1,25 + 0,90 + 0,45 + 0,20 = 4,00 → Kandidat 3. Ungewichtet lägen K1 und K2 mit je 20 Punkten vorn – die starke Gewichtung der Führungskompetenz entscheidet.",
    "k": "Entscheidungsmethoden",
    "s": "LF1 1.1.2"
   },
   {
    "tg": 2,
    "g": "mak",
    "src": "ZP F26/27",
    "t": "calc",
    "q": "Ihr Team umfasst 32 Mitarbeiter und hat eine Produktivität von 78 %. Wie hoch ist die Mitarbeiterkapazität (MAK), die netto zur Verfügung steht?",
    "ans": [
     "24,96"
    ],
    "unit": "MAK",
    "hint": "Zwei Nachkommastellen.",
    "e": "MAK netto = Mitarbeiter · Produktivität = 32 · 0,78 = 24,96 MAK. Probe: 24,96 / 32 = 0,78. Hintergrund: Nicht die ganze Arbeitszeit steht für Kundengespräche zur Verfügung (Pausen, Schulungen, Nachbearbeitung). Die Kennzahl MAK wird im Buch nicht eigens behandelt – allgemeines Fachwissen aus der Personaleinsatzplanung.",
    "k": "Kennzahlen",
    "s": "LF5 5.1.4"
   },
   {
    "tg": 3,
    "g": "diagramm-art",
    "src": "ZP F26/28",
    "t": "mc",
    "q": "Die Geschäftsführung will zeigen, wie sich Umsatz und Mitarbeiterzahl in den letzten acht Jahren entwickelt haben. Welche Diagrammart ist am besten geeignet?",
    "a": [
     "Liniendiagramm (Kurvendiagramm)",
     "Kreisdiagramm",
     "Piktogramm",
     "Streudiagramm",
     "Organigramm"
    ],
    "c": 0,
    "e": "Entwicklungen über die Zeit zeigt man mit einem Linien- bzw. Kurvendiagramm; zwei Größen lassen sich als zwei Linien (ggf. mit zweiter Achse) darstellen. Das Kreisdiagramm zeigt Anteile eines Ganzen zu einem Zeitpunkt.",
    "k": "Präsentation",
    "s": "LF2 3.2"
   },
   {
    "tg": 3,
    "g": "umsatzanteil",
    "src": "ZP F26/29",
    "t": "calc",
    "x": "Gesamtumsatz der Dialog-GmbH 2025: 8.000.000 €\nUmsatz zweier Mobilfunkgeräte 2025 (Q1 / Q2 / Q3 / Q4):\nPhone Nova: 120.000 € / 95.000 € / 130.000 € / 175.000 €\nPhone Orbit: 210.000 € / 90.000 € / 140.000 € / 240.000 €",
    "q": "Wie hoch ist der Anteil der beiden Geräte am Gesamtumsatz 2025?",
    "ans": [
     "15"
    ],
    "unit": "%",
    "e": "Nova: 520.000 € · Orbit: 680.000 € · zusammen 1.200.000 €. Anteil = 1.200.000 · 100 / 8.000.000 = 15 %. Probe: 15 % von 8 Mio. € = 1,2 Mio. €. Fehlerquelle: Quartalswerte einzeln in Prozent umrechnen und Rundungsfehler aufaddieren.",
    "k": "Präsentation",
    "s": "LF2 3.2"
   },
   {
    "tg": 3,
    "g": "besprechung-ablauf",
    "src": "ZP F26/30",
    "t": "order",
    "q": "Sie organisieren eine Besprechung der Geschäftsleitung. Bringen Sie die Arbeitsschritte in eine sinnvolle Reihenfolge.",
    "items": [
     "Inhalte und Ziele der Besprechung klären",
     "Tagesordnung mit der Leitung abstimmen",
     "Einladungen mit Tagesordnung versenden",
     "nach den Zusagen den Besprechungsraum reservieren",
     "Raum und Medien vorbereiten",
     "Ergebnisprotokoll anfertigen",
     "Protokoll an die Teilnehmer versenden"
    ],
    "e": "Planung (Ziele, Tagesordnung, Teilnehmer, Einladung, Raum) → Vorbereitung (Raum einrichten, Medien prüfen) → Durchführung → Nachbereitung (Protokoll erstellen und verteilen). Die Tagesordnung steht vor der Einladung, weil sie mitgeschickt wird.",
    "k": "Information & Lernen",
    "s": "LF1 5"
   },
   {
    "tg": 3,
    "g": "tabellenkalkulation",
    "src": "ZP F26/31",
    "t": "mc",
    "q": "Für welche Aufgabe setzt die Teamleitung typischerweise ein Tabellenkalkulationsprogramm ein?",
    "a": [
     "Statistiken aus ACD-Daten erstellen",
     "einen Geschäftsbrief mit Textbausteinen schreiben",
     "Anrufe an freie Agents weiterleiten",
     "eingescannte Briefe in Text umwandeln",
     "das Netzwerk vor Angriffen schützen"
    ],
    "c": 0,
    "e": "Typische Anwendungen der Tabellenkalkulation laut Buch: Personaleinsatzpläne, Statistiken, Auswertung von ACD-Daten, grafische Darstellungen. Briefe = Textverarbeitung, Anrufverteilung = ACD, Texterkennung = OCR, Netzwerkschutz = Firewall.",
    "k": "Software",
    "s": "LF4 2.2"
   },
   {
    "tg": 3,
    "g": "wms",
    "src": "ZP F26/32",
    "t": "mc",
    "q": "Wofür wird ein Workforce-Management-System (WMS) vorrangig eingesetzt?",
    "a": [
     "um die benötigten Mitarbeiterkapazitäten für die Hotline zu planen",
     "um eingehende Anrufe nach Skills zu verteilen",
     "um eingescannte Briefe in Text umzuwandeln",
     "um Kundendaten für Mailings zu selektieren",
     "um E-Mails auf Spam zu prüfen"
    ],
    "c": 0,
    "e": "Das WMS plant die Kapazitäten der Agents (Personaleinsatzplanung) und ist mit Urlaubs- und Fehlzeitenplanung sowie Zeiterfassung verknüpft. Die Anrufverteilung übernimmt die ACD, die Selektion für Kampagnen das Kampagnen-Management-System.",
    "k": "Software",
    "s": "LF4 2.3"
   },
   {
    "tg": 3,
    "g": "suchmethode",
    "src": "ZP F26/33",
    "t": "mc",
    "q": "Sie geben in eine Suchmaschine das Schlagwort „Rufnummernmitnahme“ ein und erhalten eine Trefferliste. Welche Suchmethode haben Sie genutzt?",
    "a": [
     "Volltextsuche",
     "katalogisierte Suche",
     "Metasuche",
     "Inverssuche",
     "SQL-Abfrage"
    ],
    "c": 0,
    "e": "Volltextsuche: Die Datenbank der Suchmaschine wird nach dem eingegebenen Schlagwort durchsucht. Katalogisierte Suche: redaktionell nach Themen aufbereitete Rubriken. Metasuche: nutzt mehrere Suchmaschinen gleichzeitig und entfernt Dopplungen.",
    "k": "Netze & Dienste",
    "s": "LF4 3.4"
   },
   {
    "tg": 3,
    "g": "cloud",
    "src": "ZP F26/34",
    "t": "mc",
    "q": "Kollegen an drei Standorten sollen gleichzeitig an derselben Präsentation arbeiten. Welche Lösung ermöglicht dieses kollaborative Arbeiten?",
    "a": [
     "ein cloudbasiertes Office-Paket (z. B. Microsoft 365)",
     "ein lokal installiertes Betriebssystem wie Linux",
     "eine OCR-Software",
     "eine Firewall",
     "ein Predictive Dialer"
    ],
    "c": 0,
    "e": "Cloud-Computing stellt Software und Speicher über das Internet bereit; als Vorteil nennt das Buch die Zusammenarbeit über mehrere Standorte und den Zugriff von verschiedenen Geräten. Nachteile: Sicherungsaufwand, technische Abhängigkeit, sensible Daten beim Drittanbieter.",
    "k": "Software",
    "s": "LF4 2.2"
   },
   {
    "tg": 3,
    "g": "servicenummer",
    "src": "ZP F26/35",
    "t": "mc",
    "q": "Die Dialog-GmbH möchte eine Bestellhotline einrichten, die für Anrufer kostenlos ist. Welche Rufnummerngasse wählt sie?",
    "a": [
     "0800",
     "0180",
     "0900",
     "0137",
     "0700"
    ],
    "c": 0,
    "e": "0800 = Freecall, für den Anrufer kostenlos. 0180 = Servicedienste (kostenpflichtig, gedeckelte Preise), 0900 = Premium-Dienste (frei tarifierbar), 0137 = Televoting, 0700 = persönliche Vanity-Rufnummer.",
    "k": "Netze & Dienste",
    "s": "LF4 3.2"
   },
   {
    "tg": 3,
    "g": "bewegungsdaten",
    "src": "ZP F26/36",
    "t": "mc",
    "q": "Welche Angabe im Kundenkonto eines Onlineshops gehört zu den Bewegungsdaten?",
    "a": [
     "die Bestellmenge der letzten Bestellung",
     "das Geburtsdatum",
     "die Kundennummer",
     "der Nachname",
     "die Rechnungsanschrift"
    ],
    "c": 0,
    "e": "Stammdaten ändern sich selten oder nie (Name, Geburtsdatum, Kundennummer, Anschrift). Bewegungsdaten entstehen laufend bei Geschäftsvorfällen (Bestellungen, Mengen, Zahlungen). Klassische Verwechslungsgefahr!",
    "k": "Datenbanken",
    "s": "LF4 4.4"
   },
   {
    "tg": 3,
    "g": "dsb-pflicht",
    "src": "ZP F26/37",
    "t": "mc",
    "q": "Wann muss ein Unternehmen nach § 38 BDSG einen betrieblichen Datenschutzbeauftragten benennen?",
    "a": [
     "wenn in der Regel mindestens 20 Personen ständig mit der automatisierten Verarbeitung personenbezogener Daten beschäftigt sind",
     "wenn mindestens 10 Personen gelegentlich personenbezogene Daten verarbeiten",
     "erst ab 250 Beschäftigten",
     "nur wenn der Betriebsrat dies verlangt",
     "nur wenn das Unternehmen seinen Sitz im Ausland hat"
    ],
    "c": 0,
    "e": "§ 38 BDSG: Benennungspflicht, wenn in der Regel mindestens 20 Personen ständig mit der automatisierten Verarbeitung personenbezogener Daten beschäftigt sind – unabhängig davon außerdem bei riskanten Kernverarbeitungen (Art. 37 DSGVO). Das Buch nennt noch die frühere Schwelle von 10 Personen; seit 2019 gilt 20.",
    "k": "Datenschutz",
    "s": "LF4 6.1"
   },
   {
    "tg": 3,
    "g": "db-ziel",
    "src": "ZP F26/38",
    "t": "mc",
    "q": "Was bedeutet eine konsistente Speicherung von Daten in einer Datenbank?",
    "a": [
     "Die Daten sind fehler- und widerspruchsfrei gespeichert.",
     "Die Daten sind möglichst platzsparend gespeichert.",
     "Die Daten werden für einen langen Zeitraum aufbewahrt.",
     "Die Daten sind für alle Mitarbeiter frei zugänglich.",
     "Die Daten werden täglich gesichert."
    ],
    "c": 0,
    "e": "Ziele einer Datenbank laut Buch: effiziente Speicherung (sparsamer Speicher, schneller Zugriff), dauerhafte Speicherung (längerer Zeitraum) und konsistente Speicherung (fehlerfrei, widerspruchsfrei). Tägliche Sicherung ist ein Backup, keine Konsistenz.",
    "k": "Datenbanken",
    "s": "LF4 4.1"
   },
   {
    "tg": 3,
    "g": "db-aufbau",
    "src": "ZP F26/39",
    "t": "mc",
    "q": "Eine Tabelle „Kunden“ enthält die Spalten Kundennummer, Vorname und Nachname. Welche Aussage zum Aufbau einer relationalen Datenbank ist richtig?",
    "a": [
     "Jede Zeile der Tabelle ist ein Datensatz.",
     "Jede Spalte der Tabelle ist ein Datensatz.",
     "Der Feldname ist der Inhalt einer einzelnen Zelle.",
     "Ein Datenfeld ist die Gesamtheit aller Zeilen.",
     "Die ganze Tabelle entspricht einem Datenfeld."
    ],
    "c": 0,
    "e": "Tabelle = Datei, Zeile = Datensatz, Spalte = Datenfelder derselben Art, Feldname = Spaltenüberschrift, einzelne Zelle = Datenfeld (z. B. „658741“). Hierarchie: Datenfeld < Datensatz < Datei < Datenbank.",
    "k": "Datenbanken",
    "s": "LF4 4.3"
   },
   {
    "tg": 3,
    "g": "dsgvo-grundsatz",
    "src": "ZP F26/40",
    "t": "mc",
    "q": "Welcher Grundsatz für die Verarbeitung personenbezogener Daten ist in Art. 5 DSGVO festgelegt?",
    "a": [
     "Zweckbindung",
     "Datenmaximierung",
     "unbegrenzte Speicherdauer",
     "öffentliche Zugänglichkeit",
     "freie Weitergabe an Dritte"
    ],
    "c": 0,
    "e": "Art. 5 DSGVO: Rechtmäßigkeit, Treu und Glauben, Transparenz, Zweckbindung, Datenminimierung, Richtigkeit, Speicherbegrenzung, Integrität und Vertraulichkeit, Rechenschaftspflicht. „Datenmaximierung“ ist das Gegenteil der Datenminimierung.",
    "k": "Datenschutz",
    "s": "LF4 6.1"
   },
   {
    "tg": 3,
    "g": "malware-schutz",
    "src": "ZP F26/41",
    "t": "mc",
    "q": "Mit welcher Maßnahme verringern Sie die Gefahr, dass Schadsoftware auf die Rechner gelangt?",
    "a": [
     "ein aktuelles Antivirenprogramm mit Echtzeitwächter",
     "ein Brute-Force-Angriff auf das Administratorpasswort",
     "SSL-Verschlüsselung der Firmenwebsite",
     "eine unterbrechungsfreie Stromversorgung (USV)",
     "ein Parallelsystem für den Fall eines Serverausfalls"
    ],
    "c": 0,
    "e": "Antivirenprogramme (Scan, Update, Wächter, Quarantäne) erkennen und blockieren Schadsoftware. Brute-Force ist eine Angriffsmethode, SSL verschlüsselt die Datenübertragung, USV und Parallelsysteme schützen vor Strom- bzw. Systemausfall (physikalischer Schutz).",
    "k": "Datensicherheit",
    "s": "LF4 5.2.2"
   },
   {
    "tg": 3,
    "g": "datengeheimnis",
    "src": "ZP F26/42",
    "t": "mc",
    "q": "Neue Mitarbeiter unterschreiben eine Verpflichtungserklärung zur Wahrung des Datengeheimnisses. Wozu verpflichten sie sich?",
    "a": [
     "personenbezogene Daten nur nach Anweisung zu erheben, zu verarbeiten oder zu nutzen – auch über das Arbeitsverhältnis hinaus",
     "keine Betriebsgeheimnisse an die Presse weiterzugeben",
     "ihre Passwörter monatlich zu ändern",
     "im Büro keine privaten E-Mails zu lesen",
     "Überstunden nur mit Zustimmung des Betriebsrats zu leisten"
    ],
    "c": 0,
    "e": "Buchmuster: Den Verpflichteten ist untersagt, ohne entsprechende Anweisung personenbezogene Daten zu erheben, zu verarbeiten oder zu nutzen; die Pflicht gilt über die Dauer der Tätigkeit hinaus. Das BDSG verlangt die Erklärung nicht mehr ausdrücklich, sie ist aber ein geeignetes Mittel, die DSGVO-Pflichten umzusetzen.",
    "k": "Datenschutz",
    "s": "LF4 6.1"
   },
   {
    "tg": 1,
    "g": "dienstleistung-merkmal",
    "src": "ZP F26/43",
    "t": "mc",
    "q": "Welche Eigenschaft unterscheidet eine Dienstleistung wie die Hotline-Beratung von einem Sachgut wie einem Smartphone?",
    "a": [
     "Sie ist immateriell und kann nicht gelagert werden.",
     "Sie kann vor dem Kauf ausprobiert werden.",
     "Sie wird auf Vorrat produziert.",
     "Sie ist ein physisches, greifbares Gut.",
     "Sie entsteht ohne Beteiligung des Kunden."
    ],
    "c": 0,
    "e": "Dienstleistungen sind immateriell, nicht lagerfähig und vorab nicht prüfbar; Erstellung und Inanspruchnahme fallen zusammen, der Kunde wirkt mit. Sachgüter sind greifbar, lagerfähig und können vor dem Kauf begutachtet werden.",
    "k": "Sektoren & DL",
    "s": "LF2 1.2.2"
   },
   {
    "tg": 4,
    "g": "aufbauorganisation",
    "src": "ZP F26/44",
    "t": "mc",
    "q": "Welche Aussage beschreibt die Aufbauorganisation?",
    "a": [
     "Sie gliedert das Unternehmen nach Aufgaben in Stellen und Abteilungen und legt Zuständigkeiten fest.",
     "Sie legt die zeitliche Reihenfolge der Arbeitsschritte fest.",
     "Sie standardisiert die Routinen der Auftragsbearbeitung.",
     "Sie beschreibt den Workflow einer Kundenanfrage.",
     "Sie regelt die Pausenzeiten der Mitarbeiter."
    ],
    "c": 0,
    "e": "Die Aufbauorganisation gliedert das Unternehmen in Stellen und Abteilungen (Funktionen) und regelt Weisungsbefugnisse – dargestellt im Organigramm. Reihenfolge, Routinen und Workflow sind Gegenstand der Ablauforganisation.",
    "k": "Organisation",
    "s": "LF1 1.2.1"
   },
   {
    "tg": 1,
    "g": "inbound-outbound",
    "src": "ZP F26/45",
    "t": "mc",
    "q": "Welche Leistung gehört NICHT zum Outbound?",
    "a": [
     "technischer Support bei Störungsmeldungen von Kunden",
     "Rückgewinnung ehemaliger Abonnenten",
     "telefonisches Mahnwesen",
     "Terminvereinbarung für den Außendienst",
     "Adressqualifizierung nach einem Mailing"
    ],
    "c": 0,
    "e": "Inbound: Die Initiative liegt beim Kunden, das Unternehmen reagiert (Bestellannahme, technische Hotline, Kundenservice). Outbound: Das Unternehmen geht aktiv auf den Kunden zu (Telesales, Adressqualifizierung, Kundenbindung, Rückgewinnung, Mahnwesen, Marktforschung).",
    "k": "Leistungen",
    "s": "LF2 2.2.2"
   },
   {
    "tg": 4,
    "g": "gmbh-gewinn",
    "src": "ZP F26/46",
    "t": "calc",
    "x": "Die Nordwind Service GmbH hat vier Gesellschafter. Stammeinlagen (Geschäftsanteile):\nArndt 60.000 € · Brandt 90.000 € · Celik 150.000 € · Demir 100.000 €\nDer Gesellschaftsvertrag enthält keine Regelung zur Gewinnverteilung. Auszuschüttender Gewinn: 240.000 €",
    "q": "Wie viel Euro erhält Brandt?",
    "ans": [
     "54.000",
     "54000",
     "54.000,00",
     "54000,00"
    ],
    "unit": "€",
    "e": "Ohne vertragliche Regelung wird nach dem Verhältnis der Geschäftsanteile verteilt (§ 29 Abs. 3 GmbHG). Stammkapital 400.000 € → Brandt 90.000 / 400.000 = 22,5 % → 22,5 % von 240.000 € = 54.000 €. Probe über alle Gesellschafter: Arndt 36.000 + Brandt 54.000 + Celik 90.000 + Demir 60.000 = 240.000 €.",
    "k": "Recht",
    "s": "LF1 1.3.3"
   },
   {
    "tg": 4,
    "g": "hr-eintrag",
    "src": "ZP F26/47",
    "t": "multi",
    "q": "Welche zwei Angaben werden bei einer Personengesellschaft (z. B. KG) ins Handelsregister eingetragen?",
    "a": [
     "die Namen der Gesellschafter",
     "der Sitz (Ort der Niederlassung)",
     "die Zahl der Beschäftigten",
     "der Umsatz des Vorjahres",
     "die Namen der wichtigsten Kunden",
     "die Kontoverbindung"
    ],
    "cs": [
     0,
     1
    ],
    "e": "Eingetragen werden u. a. Firma, Sitz, die Namen aller Gesellschafter und bei der KG die Einlagen der Kommanditisten. Das Handelsregister ist öffentlich und wird elektronisch beim Amtsgericht geführt; Personengesellschaften stehen in Abteilung A.",
    "k": "Recht",
    "s": "LF1 1.3.1"
   },
   {
    "tg": 4,
    "g": "wegeunfall-meldung",
    "src": "ZP F26/48",
    "t": "mc",
    "q": "Ein Auszubildender verunglückt auf dem direkten Weg zur Arbeit und fällt mehrere Tage aus. An wen richtet der Betrieb die Unfallanzeige?",
    "a": [
     "an die Berufsgenossenschaft",
     "an die Krankenkasse",
     "an die IHK",
     "an die Agentur für Arbeit",
     "an die Rentenversicherung"
    ],
    "c": 0,
    "e": "Arbeits- und Wegeunfälle werden dem Träger der gesetzlichen Unfallversicherung gemeldet – für kaufmännische Tätigkeiten die Berufsgenossenschaft (VBG). Sie trägt die Kosten der Heilbehandlung. Die Meldepflicht besteht bei mehr als drei Tagen Arbeitsunfähigkeit (ergänzt aus dem Gesetz).",
    "k": "Sozialversicherung",
    "s": "LF1 2.4.1"
   },
   {
    "tg": 4,
    "g": "bbig11",
    "src": "ZP F26/49",
    "t": "multi",
    "q": "Welche zwei Angaben muss die Vertragsniederschrift eines Berufsausbildungsvertrags nach § 11 BBiG enthalten?",
    "a": [
     "die Dauer des Urlaubs",
     "die Zahlung und Höhe der Ausbildungsvergütung",
     "den Namen der Berufsschule",
     "die Kleiderordnung im Betrieb",
     "die Zahl der Beschäftigten im Betrieb",
     "den Termin der Zwischenprüfung"
    ],
    "cs": [
     0,
     1
    ],
    "e": "§ 11 BBiG verlangt u. a.: Art, sachliche und zeitliche Gliederung und Ziel der Ausbildung, Beginn und Dauer, Ausbildungsmaßnahmen außerhalb der Ausbildungsstätte, tägliche Ausbildungszeit, Probezeit, Zahlung und Höhe der Vergütung, Urlaubsdauer, Kündigungsvoraussetzungen sowie einen Hinweis auf Tarifverträge und Betriebsvereinbarungen.",
    "k": "BBiG",
    "s": "LF1 2.1.2"
   },
   {
    "tg": 4,
    "g": "freiwillige-leistung",
    "src": "ZP F26/50",
    "t": "mc",
    "q": "Welche Leistung erbringt ein Arbeitgeber freiwillig, also ohne gesetzliche Verpflichtung?",
    "a": [
     "einen Zuschuss zur Betreuung der Kinder im Betriebskindergarten",
     "den Arbeitgeberanteil zur Rentenversicherung",
     "den Beitrag zur gesetzlichen Unfallversicherung",
     "die Entgeltfortzahlung im Krankheitsfall",
     "die Zahlung des gesetzlichen Mindestlohns"
    ],
    "c": 0,
    "e": "Sozialversicherungsbeiträge, Unfallversicherung (trägt der Arbeitgeber allein), Entgeltfortzahlung und Mindestlohn sind gesetzlich vorgeschrieben. Kita-Zuschüsse, Fahrtkostenzuschüsse oder Betriebsfeiern sind freiwillige Sozialleistungen. Hinweis: Das Buch behandelt freiwillige Leistungen nicht eigens – allgemeines Fachwissen.",
    "k": "Sozialversicherung",
    "s": "LF1 2.4.1"
   },
   {
    "tg": 4,
    "g": "wegeunfall",
    "src": "ZP F26/51",
    "t": "mc",
    "q": "Wer trägt die Kosten der Heilbehandlung nach einem Unfall auf dem direkten Weg zwischen Wohnung und Betrieb?",
    "a": [
     "die gesetzliche Unfallversicherung",
     "die Pflegeversicherung",
     "der Arbeitnehmer selbst",
     "die Arbeitslosenversicherung",
     "die private Haftpflichtversicherung des Arbeitnehmers"
    ],
    "c": 0,
    "e": "Die gesetzliche Unfallversicherung (Berufsgenossenschaft) übernimmt Kosten bei Arbeitsunfällen, Wegeunfällen und Berufskrankheiten und ist für Unfallverhütung zuständig. Die Beiträge zahlt allein der Arbeitgeber.",
    "k": "Sozialversicherung",
    "s": "LF1 2.4.1"
   },
   {
    "tg": 4,
    "g": "jarbschg-berufsschule",
    "src": "ZP F26/52",
    "t": "mc",
    "x": "§ 9 JArbSchG (Auszug, sinngemäß): Der Arbeitgeber darf Jugendliche nicht beschäftigen an einem Berufsschultag mit mehr als fünf Unterrichtsstunden von mindestens je 45 Minuten, einmal in der Woche. Solche Berufsschultage werden mit der durchschnittlichen täglichen Arbeitszeit auf die Arbeitszeit angerechnet; im Übrigen die Unterrichtszeit einschließlich der Pausen und notwendigen Wegezeiten.",
    "q": "Die 17-jährige Auszubildende Mara hat dienstags sechs Unterrichtsstunden à 45 Minuten. Wie wird dieser Berufsschultag auf ihre Arbeitszeit angerechnet?",
    "a": [
     "mit der durchschnittlichen täglichen Arbeitszeit",
     "nur mit der reinen Unterrichtszeit ohne Pausen",
     "gar nicht – sie muss nach der Schule noch in den Betrieb",
     "pauschal mit vier Stunden",
     "mit der vollen wöchentlichen Arbeitszeit"
    ],
    "c": 0,
    "e": "Nach § 9 Abs. 2 JArbSchG wird ein solcher Berufsschultag mit der durchschnittlichen täglichen Arbeitszeit angerechnet, und Mara darf danach nicht mehr beschäftigt werden (gilt seit 2020 auch für volljährige Auszubildende). Das Buch nennt noch die frühere pauschale Anrechnung mit 8 Stunden. Ein zweiter Berufsschultag zählt nur mit Unterrichtszeit, Pausen und Wegezeiten.",
    "k": "Schutzgesetze",
    "s": "LF1 2.2.1"
   },
   {
    "tg": 4,
    "g": "jarbschg-regeln",
    "src": "ZP F26/53",
    "t": "mc",
    "q": "Die 16-jährige Auszubildende Tina arbeitet am Montag aus betrieblichen Gründen nur 6 Stunden. Was gilt nach § 8 Abs. 2a JArbSchG?",
    "a": [
     "Sie darf an den übrigen Werktagen derselben Woche bis zu 8,5 Stunden täglich beschäftigt werden.",
     "Sie darf den Ausfall in der Folgewoche mit bis zu 10 Stunden täglich nachholen.",
     "Sie muss den Ausfall am Samstag nacharbeiten.",
     "Ihre Wochenarbeitszeit darf dadurch auf 45 Stunden steigen.",
     "Die ausgefallenen Stunden werden ihr von der Vergütung abgezogen."
    ],
    "c": 0,
    "e": "Wird die Arbeitszeit an einzelnen Werktagen auf unter 8 Stunden verkürzt, dürfen Jugendliche an den übrigen Werktagen derselben Woche bis zu 8,5 Stunden arbeiten – die Wochenarbeitszeit von 40 Stunden bleibt die Grenze. Samstagsarbeit ist für Jugendliche grundsätzlich verboten.",
    "k": "Schutzgesetze",
    "s": "LF1 2.2.1"
   },
   {
    "tg": 4,
    "g": "urlaub-jarbschg",
    "src": "ZP F26/54",
    "t": "mc",
    "x": "Alle Auszubildenden der Dialog-GmbH erhalten 27 Werktage Urlaub im Jahr. Alter zu Beginn des Kalenderjahres: Ben 16 Jahre · Lina 15 Jahre · Can 20 Jahre.\nJArbSchG: mindestens 30 Werktage (noch nicht 16 Jahre), 27 Werktage (noch nicht 17), 25 Werktage (noch nicht 18).",
    "q": "Welche Aussage zum Urlaubsanspruch ist richtig?",
    "a": [
     "Ben erhält genau den gesetzlichen Mindesturlaub.",
     "Lina erhält genau den gesetzlichen Mindesturlaub.",
     "Can erhält weniger als den gesetzlichen Mindesturlaub.",
     "Alle drei erhalten ausreichend Urlaub.",
     "Ben erhält mehr als den gesetzlichen Mindesturlaub."
    ],
    "c": 0,
    "e": "Maßgeblich ist das Alter zu Beginn des Kalenderjahres. Ben (16, noch nicht 17) → 27 Werktage = genau das Minimum. Lina (15) → 30 Werktage, sie bekommt 3 zu wenig. Für Can (20) gilt das Bundesurlaubsgesetz mit 24 Werktagen – er liegt darüber.",
    "k": "Schutzgesetze",
    "s": "LF1 2.2.1"
   },
   {
    "tg": 4,
    "g": "sicherheit-buero",
    "src": "ZP F26/55",
    "t": "mc",
    "q": "Sie richten mit einem Kollegen einen Bildschirmarbeitsplatz ein. Welche Maßnahme entspricht den Sicherheitsbestimmungen?",
    "a": [
     "Die Anschlussdosen im Fußboden werden fußbodenbündig abgedeckt.",
     "Der Bürodrehstuhl erhält vier Rollen.",
     "Am Rollcontainer lassen sich alle Schubladen gleichzeitig ausziehen.",
     "Der Lichtschalter wird hinter dem Vorhang montiert, damit er nicht stört.",
     "Das Verlängerungskabel wird quer über den Gang gelegt."
    ],
    "c": 0,
    "e": "Bündig abgedeckte Bodendosen vermeiden Stolperstellen – Stolpern, Ausrutschen und Stürzen sind laut Buch auch im Büro häufige Unfallursachen. Bürostühle brauchen mindestens fünf Rollen, gleichzeitig ausziehbare Schubladen bringen Container zum Kippen, Schalter müssen erreichbar sein.",
    "k": "Arbeitsschutz",
    "s": "LF1 3.2"
   },
   {
    "tg": 4,
    "g": "brandschutzordnung",
    "src": "ZP F26/56",
    "t": "mc",
    "q": "Für welchen Personenkreis ist Teil B der Brandschutzordnung nach DIN 14096 bestimmt?",
    "a": [
     "für alle Personen, die sich regelmäßig im Gebäude aufhalten, z. B. die Beschäftigten",
     "für alle Personen, die sich auch nur kurzfristig im Gebäude aufhalten, z. B. Besucher",
     "für Personen mit besonderen Brandschutzaufgaben, z. B. Brandschutzhelfer",
     "ausschließlich für die Feuerwehr",
     "ausschließlich für die Geschäftsführung"
    ],
    "c": 0,
    "e": "DIN 14096: Teil A (Aushang) für alle Personen, auch kurzfristig anwesende; Teil B für Personen, die sich regelmäßig im Gebäude aufhalten – mit zusätzlichen Hinweisen zur Brandverhütung; Teil C für Personen mit besonderen Brandschutzaufgaben.",
    "k": "Arbeitsschutz",
    "s": "LF1 3.3"
   },
   {
    "tg": 4,
    "g": "brandschutz-arten",
    "src": "ZP F26/57",
    "t": "mc",
    "q": "Im vorbeugenden Brandschutz unterscheidet man organisatorischen, baulichen und technischen Brandschutz. Welche Maßnahme gehört zum baulichen Brandschutz?",
    "a": [
     "das Gebäude in Brandabschnitte aufteilen",
     "eine Brandschutzordnung aushängen",
     "Brandschutzhelfer schulen",
     "eine Brandmeldeanlage installieren",
     "Feuerlöscher in ausreichender Zahl bereitstellen"
    ],
    "c": 0,
    "e": "Baulicher Brandschutz laut Buch: Fluchtwege und Notausgänge, Evakuierungsszenarien mit Sammelpunkten, Brandverhalten der Baustoffe, Brandabschnitte, Brandschutztüren, integrierte Löschsysteme. Brandschutzordnung und Schulungen sind organisatorisch, Brandmeldeanlagen und Feuerlöscher technisch.",
    "k": "Arbeitsschutz",
    "s": "LF1 3.3"
   },
   {
    "tg": 4,
    "g": "oeko-oeko",
    "src": "ZP F26/58",
    "t": "mc",
    "q": "Die Dialog-GmbH will ökonomische und ökologische Ziele in Einklang bringen. Welche Maßnahme ist dazu geeignet?",
    "a": [
     "Gebrauchte Kartons werden geschreddert und als Füllmaterial für den Versand wiederverwendet.",
     "Leere Batterien werden über den Gelben Sack entsorgt.",
     "Die Büros werden im Winter nur noch auf 16 °C geheizt.",
     "In der Kantine wird Einweggeschirr aus Kunststoff eingesetzt.",
     "Zum Wassersparen werden besonders aggressive Reinigungsmittel verwendet."
    ],
    "c": 0,
    "e": "Wiederverwendung spart Kosten für Füllmaterial und vermeidet Abfall (Stufe 2 der KrWG-Hierarchie). Batterien gehören in die Sammelbehälter des Handels, nicht in den Gelben Sack; 16 °C unterschreitet die Mindesttemperatur für Büroarbeit (Arbeitsstättenregel, ergänzt); Einweggeschirr und aggressive Chemie belasten die Umwelt.",
    "k": "Umweltschutz",
    "s": "LF1 3.4"
   },
   {
    "tg": 4,
    "g": "energie-sparen",
    "src": "ZP F26/59",
    "t": "mc",
    "q": "Die Dialog-GmbH will dauerhaft Heizenergie sparen, ohne die Arbeitsbedingungen zu verschlechtern. Welche Maßnahme ist am besten geeignet?",
    "a": [
     "eine elektronische Regelung der Raumtemperatur mit Absenkung nachts und am Wochenende",
     "die Heizung tagsüber auf 17 °C herunterregeln",
     "Fenster bei laufender Heizung dauerhaft gekippt lassen",
     "Heizkörper mit Aktenschränken zustellen",
     "die Heizung im Winter ganz abschalten"
    ],
    "c": 0,
    "e": "Die automatische Absenkung außerhalb der Arbeitszeit spart Energie, ohne die Raumtemperatur während der Arbeit zu senken. Stoßlüften statt Dauerkippen; zugestellte Heizkörper verschwenden Wärme; zu niedrige Temperaturen verstoßen gegen den Arbeitsschutz.",
    "k": "Umweltschutz",
    "s": "LF1 3.4"
   },
   {
    "tg": 4,
    "g": "toner",
    "src": "ZP F26/60",
    "t": "mc",
    "q": "Wie entsorgen Sie leere Tonerkartuschen am umweltfreundlichsten?",
    "a": [
     "Sie senden sie zur Wiederaufbereitung an den Hersteller zurück.",
     "Sie werfen sie in den Restmüll.",
     "Sie entsorgen sie über den Gelben Sack.",
     "Sie geben sie ins Altpapier, weil sie in Karton verpackt waren.",
     "Sie sammeln sie, bis der Hausmeister sie mit dem Gartenabfall entsorgt."
    ],
    "c": 0,
    "e": "Druckerpatronen und Tonerreste sind laut Buch Problemabfall. Die Rückgabe zur Wiederaufbereitung entspricht der Wiederverwendung (Stufe 2 der KrWG-Hierarchie); nur defekte, nicht mehr befüllbare Kartuschen werden als Sondermüll beseitigt.",
    "k": "Umweltschutz",
    "s": "LF1 3.4"
   }
  ]
 },
 {
  "id": "X6",
  "name": "Izuré-Übungssatz",
  "note": "Eigene Aufgaben · Buch-Hotspots außerhalb der Originalprüfungen",
  "items": [
   {
    "tg": 1,
    "g": "up-cross",
    "src": "IZ Übung/1",
    "t": "match",
    "q": "Ordnen Sie die Verkaufssituationen der passenden Verkaufstechnik zu.",
    "pairs": [
     [
      "Die Kundin fragt nach Tarif S, der Agent empfiehlt den höherwertigen Tarif M.",
      "Up-Selling"
     ],
     [
      "Zum Smartphone bietet der Agent eine passende Schutzhülle an.",
      "Cross-Selling"
     ],
     [
      "Statt der Basisversicherung schließt der Kunde die Premiumversicherung ab.",
      "Up-Selling"
     ],
     [
      "Zur Druckerbestellung verkauft der Agent zusätzlich Tonerkartuschen.",
      "Cross-Selling"
     ]
    ],
    "e": "Up-Selling = Verkauf eines höherwertigen Produkts statt des ursprünglich gewünschten. Cross-Selling = Verkauf zusätzlicher, ergänzender Produkte. Beide erfasst die Verkaufsquote (LF5). Klassisches Verwechslungspaar.",
    "k": "Leistungen",
    "s": "LF2 2.2.1"
   },
   {
    "tg": 1,
    "g": "contact-center",
    "src": "IZ Übung/2",
    "t": "mc",
    "q": "Worin unterscheidet sich ein Contact Center von einem klassischen Callcenter?",
    "a": [
     "Das Contact Center betreut Kunden über mehrere Kanäle – Telefon, E-Mail, Chat, Social Media, Messenger.",
     "Das Contact Center arbeitet ausschließlich im Outbound.",
     "Das Contact Center ist immer ein externer Dienstleister.",
     "Das Contact Center telefoniert nur mit Geschäftskunden (B2B).",
     "Beide Begriffe bedeuten dasselbe."
    ],
    "c": 0,
    "e": "Callcenter = Kundenkontakt nur per Telefon. Contact Center = Multichannel (Telefon, E-Mail, Chat, Social Media, Messenger). Die Begriffe sind nicht synonym. Sind die Kanäle zusätzlich vernetzt, spricht man von Omnichannel.",
    "k": "Typologie",
    "s": "LF2 2.1.2"
   },
   {
    "tg": 1,
    "g": "typologie",
    "src": "IZ Übung/3",
    "t": "mc",
    "q": "Die KommunikativAktiv KG arbeitet als externer Dienstleister für verschiedene Auftraggeber und telefoniert sowohl im Inbound als auch im Outbound. Wie ist sie in der Unternehmenstypologie einzuordnen?",
    "a": [
     "externer Dienstleister mit Mischform aus Inbound und Outbound",
     "Inhouse-Callcenter im Inbound",
     "Inhouse-Callcenter mit Mischform",
     "externer Dienstleister nur im Outbound",
     "Mischform aus intern und extern, nur im Inbound"
    ],
    "c": 0,
    "e": "Die Typologie kombiniert die Tätigkeit (Inbound, Outbound, Mischform) mit der organisatorischen Einbindung (intern, extern, Mischform) zu 9 Feldern. KommunikativAktiv ist extern und macht In- und Outbound (Buch: Typ 6); Dialogfix ist intern mit Mischform (Typ 3).",
    "k": "Typologie",
    "s": "LF2 2.1.1"
   },
   {
    "tg": 1,
    "g": "marketingmix",
    "src": "IZ Übung/4",
    "t": "match",
    "q": "Ordnen Sie die Maßnahmen der Dialogfix GmbH dem passenden Instrument des Marketingmix zu.",
    "pairs": [
     [
      "Styleguide und Schulungen für die Kundenkommunikation",
      "People (Personalpolitik)"
     ],
     [
      "betriebliches Vorschlagswesen zur Verbesserung interner Abläufe",
      "Processes (Prozesspolitik)"
     ],
     [
      "Lounge-Bereich für Besucher",
      "Physical facilities (Ausstattungspolitik)"
     ],
     [
      "Werbebanner in einer Computerzeitschrift",
      "Promotion (Kommunikationspolitik)"
     ],
     [
      "Finanzierungsangebot ab 500 € Bestellwert",
      "Price (Preispolitik)"
     ]
    ],
    "e": "Die 4 klassischen P (Product, Price, Promotion, Place) werden für Dienstleistungen um People, Processes und Physical facilities zu den 7 P erweitert. Dialogmarketing gehört schwerpunktmäßig zur Kommunikationspolitik.",
    "k": "Marketing",
    "s": "LF2 1.3.1"
   },
   {
    "tg": 1,
    "g": "softskills-outbound",
    "src": "IZ Übung/5",
    "t": "multi",
    "q": "Welche zwei Soft Skills sind laut Buch besonders für Mitarbeiter im Outbound wichtig?",
    "a": [
     "Frustrationstoleranz",
     "Überzeugungskraft",
     "Geduld",
     "Einfühlungsvermögen",
     "Zuhören können",
     "Hilfsbereitschaft"
    ],
    "cs": [
     0,
     1
    ],
    "e": "Outbound verlangt aktive, durchsetzungsstarke Eigenschaften: Überzeugungskraft, Ehrgeiz, Zielstrebigkeit, Frustrationstoleranz, Selbstvertrauen, positives Denken. Inbound verlangt reaktive, empathische: Geduld, Einfühlungsvermögen, Zuhören können, Freundlichkeit, Hilfsbereitschaft.",
    "k": "Mitarbeiter",
    "s": "LF2 2.3.2"
   },
   {
    "tg": 1,
    "g": "ausbildungsberufe",
    "src": "IZ Übung/6",
    "t": "mc",
    "q": "Welche Aussage zu den Ausbildungsberufen im Dialogmarketing trifft zu?",
    "a": [
     "Die Servicefachkraft wird in 2 Jahren ausgebildet; diese Ausbildung kann auf die 3-jährige Ausbildung zum Kaufmann/zur Kauffrau angerechnet werden.",
     "Beide Berufe dauern 3 Jahre.",
     "Die Servicefachkraft lernt 3 Jahre, Kaufleute 2 Jahre.",
     "Kaufmännische Steuerung und Controlling gehören nur zur Ausbildung der Servicefachkraft.",
     "Beide Berufe gibt es erst seit 2020."
    ],
    "c": 0,
    "e": "Seit 2006 gibt es zwei Berufe: Servicefachkraft für Dialogmarketing (2 Jahre) und Kaufmann/-frau für Dialogmarketing (3 Jahre). Kaufleute lernen zusätzlich Personal, kaufmännische Steuerung und Kontrolle, Qualitätssicherung sowie Vertrieb und Marketing.",
    "k": "Mitarbeiter",
    "s": "LF2 2.3.3"
   },
   {
    "tg": 1,
    "g": "querschnittsbranche",
    "src": "IZ Übung/7",
    "t": "mc",
    "q": "Warum bezeichnet man das Dialogmarketing als Querschnittsbranche?",
    "a": [
     "Weil seine Leistungen in vielen verschiedenen Branchen erbracht werden und es in der amtlichen Statistik nicht als eigene Branche geführt wird.",
     "Weil es ausschließlich zum primären Sektor gehört.",
     "Weil es nur Cross-Selling betreibt.",
     "Weil es rechtlich zur Industrie gezählt wird.",
     "Weil es nur grenzüberschreitend tätig ist."
    ],
    "c": 0,
    "e": "Dialogmarketing wird z. B. im Handel, in Banken, Versicherungen, Telekommunikation und im öffentlichen Dienst eingesetzt. Das Statistische Bundesamt führt es nicht als eigene Branche – deshalb „Querschnittsbranche“. Es gehört zum tertiären Sektor.",
    "k": "Sektoren & DL",
    "s": "LF2 1.2.1"
   },
   {
    "tg": 1,
    "g": "inbound-outbound",
    "src": "IZ Übung/8",
    "t": "mc",
    "q": "Wodurch unterscheidet sich Inbound von Outbound?",
    "a": [
     "Im Inbound geht die Initiative vom Kunden aus, im Outbound vom Unternehmen.",
     "Im Inbound telefoniert man nur mit Neukunden, im Outbound nur mit Bestandskunden.",
     "Inbound findet immer im Inhouse-Callcenter statt, Outbound immer beim Dienstleister.",
     "Im Inbound werden nur E-Mails bearbeitet, im Outbound nur Telefonate.",
     "Outbound macht den größten Teil aller Gespräche der Branche aus."
    ],
    "c": 0,
    "e": "Buchdefinition: Inbound = Bearbeitung eingehender Kontakte, der Kunde hat die Initiative, das Unternehmen reagiert. Outbound = aktives Zugehen des Unternehmens auf den Kunden. Outbound macht etwa ein Drittel aller Gespräche aus.",
    "k": "Typologie",
    "s": "LF2 2.1.1"
   },
   {
    "tg": 2,
    "g": "kommunikationsmittel",
    "src": "IZ Übung/9",
    "t": "match",
    "q": "Ordnen Sie die Beispiele dem passenden Kommunikationsmittel zu.",
    "pairs": [
     [
      "Tonfall und Sprechtempo",
      "paraverbal"
     ],
     [
      "gewählte Worte im Gespräch",
      "verbal"
     ],
     [
      "Mimik und Körperhaltung",
      "nonverbal"
     ],
     [
      "Lautstärke und Pausen",
      "paraverbal"
     ],
     [
      "Gestik beim Präsentieren",
      "nonverbal"
     ]
    ],
    "e": "Verbal = gesprochenes oder geschriebenes Wort. Paraverbal = hörbare Ausdrucksform (Tonfall, Lautstärke, Tempo, Stimmlage, Pausen). Nonverbal = sichtbare Körpersprache. Am Telefon entfällt das Sichtbare – deshalb müssen verbale und paraverbale Anteile übereinstimmen (Kongruenz). Verwechslungspaar paraverbal/nonverbal!",
    "k": "Kommunikationsmodelle",
    "s": "LF3 2.1"
   },
   {
    "tg": 2,
    "g": "watzlawick",
    "src": "IZ Übung/10",
    "t": "mc",
    "q": "Wie lautet das erste Axiom nach Paul Watzlawick im Wortlaut?",
    "a": [
     "„Man kann nicht nicht kommunizieren.“",
     "„Man kann nicht kommunizieren.“",
     "„Man muss immer kommunizieren.“",
     "„Jede Kommunikation hat einen Inhalts- und einen Beziehungsaspekt.“",
     "„Kommunikation ist immer symmetrisch.“"
    ],
    "c": 0,
    "e": "Die doppelte Verneinung ist der Prüfungspunkt: Jedes Verhalten – auch Schweigen oder Wegsehen – ist eine Botschaft. Der Inhalts- und Beziehungsaspekt ist das 2. Axiom, symmetrisch/komplementär das 5.",
    "k": "Watzlawick",
    "s": "LF3 2.3"
   },
   {
    "tg": 2,
    "g": "transaktionsanalyse",
    "src": "IZ Übung/11",
    "t": "match",
    "q": "Ordnen Sie die Äußerungen dem Ich-Zustand nach der Transaktionsanalyse (Eric Berne) zu.",
    "pairs": [
     [
      "„Das haben Sie falsch gemacht, das weiß doch jeder!“",
      "kritisches Eltern-Ich"
     ],
     [
      "„Machen Sie sich keine Sorgen, ich kümmere mich darum.“",
      "fürsorgliches Eltern-Ich"
     ],
     [
      "„Welche Fehlermeldung zeigt das Gerät genau an?“",
      "Erwachsenen-Ich"
     ],
     [
      "„Ich will das jetzt sofort, sonst kündige ich!“",
      "rebellisches Kind-Ich"
     ],
     [
      "„Wie toll, das probiere ich gleich aus!“",
      "freies Kind-Ich"
     ]
    ],
    "e": "Drei Ich-Zustände mit sechs Ausprägungen: Eltern-Ich (fürsorglich/nährend, kritisch), Erwachsenen-Ich (sachlich, lösungsorientiert), Kind-Ich (frei, angepasst, rebellisch). Verärgerte Kunden sprechen oft aus dem kritischen Eltern-Ich oder rebellischen Kind-Ich – Ziel ist der sanfte Wechsel ins Erwachsenen-Ich.",
    "k": "Kommunikationsmodelle",
    "s": "LF3 2.5"
   },
   {
    "tg": 2,
    "g": "transaktionsanalyse",
    "src": "IZ Übung/12",
    "t": "mc",
    "q": "Ein Agent fragt sachlich: „Welche Version der Software nutzen Sie?“ Der Kunde antwortet: „Belehren Sie mich nicht, ich bin doch kein Anfänger!“ Welche Transaktion liegt vor?",
    "a": [
     "gekreuzte Transaktion",
     "parallele Transaktion",
     "verdeckte Transaktion",
     "komplementäre Transaktion",
     "symmetrische Transaktion"
    ],
    "c": 0,
    "e": "Der Agent spricht aus dem Erwachsenen- das Erwachsenen-Ich an; die Antwort kommt aus einem anderen Zustand (Kind-Ich gegen vermutetes Eltern-Ich) – das ist eine gekreuzte Transaktion, sie führt oft zu Störungen. Parallel = Antwort aus dem angesprochenen Zustand; verdeckt = zwei Ebenen gleichzeitig. Symmetrisch/komplementär sind Begriffe aus Watzlawicks 5. Axiom.",
    "k": "Kommunikationsmodelle",
    "s": "LF3 2.5"
   },
   {
    "tg": 2,
    "g": "johari",
    "src": "IZ Übung/13",
    "t": "mc",
    "q": "Nach einem Coaching sagt die Teamleiterin zu Ihnen: „Dir ist wohl nicht bewusst, dass du im Gespräch oft seufzt.“ Welcher Bereich des Johari-Fensters wird durch dieses Feedback verkleinert?",
    "a": [
     "der blinde Fleck",
     "die öffentliche Person (Arena)",
     "die Privatperson",
     "das Unbekannte",
     "der Beziehungsaspekt"
    ],
    "c": 0,
    "e": "Blinder Fleck = anderen bekannt, mir selbst unbekannt – er wird durch Feedback kleiner. Offenheit (Selbstoffenbarung) verkleinert dagegen den Bereich Privatperson. Beides vergrößert die Arena (öffentliche Person).",
    "k": "Kommunikationsmodelle",
    "s": "LF3 2.6"
   },
   {
    "tg": 2,
    "g": "maslow",
    "src": "IZ Übung/14",
    "t": "order",
    "q": "Bringen Sie die Stufen der Bedürfnispyramide nach Maslow in die richtige Reihenfolge – von unten nach oben.",
    "items": [
     "physiologische Grundbedürfnisse",
     "Sicherheitsbedürfnisse",
     "soziale Bedürfnisse",
     "Wertschätzung und Anerkennung",
     "Selbstverwirklichung"
    ],
    "e": "Höhere Stufen werden laut Maslow erst relevant, wenn die darunterliegenden erfüllt sind: Essen/Schlaf → Schutz/Arbeitsplatz → Zugehörigkeit → Lob/Status → persönliche Entwicklung.",
    "k": "Kommunikationsmodelle",
    "s": "LF3 2.8"
   },
   {
    "tg": 2,
    "g": "aktives-zuhoeren",
    "src": "IZ Übung/15",
    "t": "mc",
    "q": "Welche Reaktion ist ein Beispiel für aktives Zuhören?",
    "a": [
     "„Sie ärgern sich also, weil die Lieferung schon zum zweiten Mal zu spät kommt.“",
     "„Das passiert bei uns eigentlich nie.“",
     "„Mhm … Moment, ich schaue kurz in meine Mails.“",
     "„Da hätten Sie eben früher bestellen müssen.“",
     "„Wie war noch mal Ihr Name?“"
    ],
    "c": 0,
    "e": "Aktives Zuhören (nach Carl Rogers) meldet Inhalt UND Emotion zurück. Nebenbei Mails lesen ist Pseudo-Zuhören, „bei uns nie“ spielt herunter, „hätten Sie eben“ ist ein Vorwurf.",
    "k": "Gesprächsführung",
    "s": "LF3 3.2.3"
   },
   {
    "tg": 2,
    "g": "stress",
    "src": "IZ Übung/16",
    "t": "multi",
    "q": "Welche zwei Maßnahmen gehören zur Stressprävention – also dazu, Stress gar nicht erst entstehen zu lassen?",
    "a": [
     "klare Ziele und Zuständigkeiten vereinbaren",
     "den Arbeitsplatz ergonomisch einrichten",
     "nach Feierabend Sport treiben",
     "autogenes Training",
     "eine Massage",
     "Yoga-Übungen in der Pause"
    ],
    "cs": [
     0,
     1
    ],
    "e": "Stressprävention reduziert Stressoren (Zeitmanagement, klare Ziele, ergonomischer Arbeitsplatz, Konflikte früh klären). Stressbewältigung baut entstandenen Stress ab (Sport, Massage, Entspannungstechniken, Yoga). Stressoren können Eustress oder Disstress auslösen.",
    "k": "Stimme & Stress",
    "s": "LF3 6.2"
   },
   {
    "tg": 2,
    "g": "gespraechsabschluss",
    "src": "IZ Übung/17",
    "t": "order",
    "q": "Bringen Sie die Schritte des Gesprächsabschlusses in die richtige Reihenfolge.",
    "items": [
     "Zielvereinbarung: Verbindlichkeit der Vereinbarung darstellen",
     "das Wichtigste zusammenfassen",
     "bei Bedarf einen Termin vereinbaren",
     "Abschlussfrage mit Namen: „Kann ich sonst noch etwas für Sie tun, Herr Ralus?“",
     "freundlich verabschieden",
     "erst auflegen, wenn der Kunde aufgelegt hat"
    ],
    "e": "Die sechs Schritte laut Buch: Zielvereinbarung, Zusammenfassung, Terminvereinbarung, Abschlussfrage, Verabschiedung, Gesprächsende. Wer zuerst auflegt, wirkt ungeduldig oder unhöflich.",
    "k": "Gesprächsführung",
    "s": "LF5 1.1.4"
   },
   {
    "tg": 2,
    "g": "sichere-formulierung",
    "src": "IZ Übung/18",
    "t": "mc",
    "q": "Welche Formulierung ist eine sichere Formulierung im Sinne des Buches?",
    "a": [
     "„Bitte nennen Sie mir Ihre Kundennummer.“",
     "„Dürfte ich Sie vielleicht nach Ihrer Kundennummer fragen?“",
     "„Ich würde vorschlagen, dass wir es mal versuchen.“",
     "„Könnten Sie eventuell morgen noch einmal anrufen?“",
     "„Ich werde versuchen, Ihnen das zu erklären.“"
    ],
    "c": 0,
    "e": "Sichere Formulierungen verzichten auf Konjunktive („dürfte“, „würde“, „könnten“) und Weichmacher wie „vielleicht“. „Ich werde versuchen, Ihnen das zu erklären“ hört der Kunde laut Buch als „Sie werden mich bestimmt nicht verstehen.“",
    "k": "Gesprächsführung",
    "s": "LF5 1.1.3"
   },
   {
    "tg": 2,
    "g": "beschwerde-reklamation",
    "src": "IZ Übung/19",
    "t": "mc",
    "q": "Ein Kunde meldet einen Defekt an seinem vier Monate alten Headset und verlangt die Reparatur. Außerdem ärgert er sich über die unfreundliche Hotline. Welche Aussage trifft zu?",
    "a": [
     "Die verlangte Mangelbeseitigung ist eine Reklamation mit rechtlichem Anspruch; der Ärger über die Hotline ist eine Beschwerde.",
     "Beides sind Reklamationen, weil der Kunde unzufrieden ist.",
     "Beides sind Beschwerden ohne rechtlichen Hintergrund.",
     "Eine Reklamation liegt nur vor, wenn der Kunde schriftlich reklamiert.",
     "Die Unfreundlichkeit begründet einen Anspruch auf Mangelbeseitigung."
    ],
    "c": 0,
    "e": "Beschwerde = jede geäußerte Unzufriedenheit. Reklamation = zusätzlich ein rechtlicher Anspruch auf Mangelbeseitigung aus einer Kaufvertragsstörung. Oft gehen beide ineinander über; für die Gesprächsführung ist die Unterscheidung zunächst unerheblich.",
    "k": "Beschwerden",
    "s": "LF5 4.1.1"
   },
   {
    "tg": 2,
    "g": "haltegespraech",
    "src": "IZ Übung/20",
    "t": "order",
    "q": "Eine Kundin möchte ihren Vertrag kündigen. Bringen Sie die Schritte des Haltegesprächs in die richtige Reihenfolge.",
    "items": [
     "in das Gespräch einsteigen und Bedauern ausdrücken",
     "den Grund für die Kündigung mit offenen Fragen ermitteln",
     "die emotionale Ebene klären",
     "eine Lösung bzw. ein kulantes Angebot unterbreiten",
     "das Gespräch abschließen"
    ],
    "e": "Im Haltegespräch wird das Produkt unter erschwerten Bedingungen neu verkauft. Widrigkeiten laut Buch: versteckte Kündigungsgründe, Einwände gegen die Lösung, unangemessene Forderungen – Kulanz endet beim wirtschaftlichen Prinzip (Kundenwert).",
    "k": "Kundenbindung",
    "s": "LF5 4.2"
   },
   {
    "tg": 2,
    "g": "aht",
    "src": "IZ Übung/21",
    "t": "calc",
    "x": "Tagesauswertung Agentin Mia Kraft:\nbearbeitete Gespräche: 60\nGesprächszeit gesamt: 4 Stunden 10 Minuten\nNachbearbeitungszeit gesamt: 50 Minuten",
    "q": "Berechnen Sie die AHT in Sekunden.",
    "ans": [
     "300"
    ],
    "unit": "Sekunden",
    "e": "AHT = (Gesprächszeit + Nachbearbeitungszeit) / Anzahl Gespräche = (15.000 s + 3.000 s) / 60 = 300 s = 5 Minuten. Fehlerquelle: nur die Gesprächszeit nehmen (250 s). Probe: 60 · 300 s = 18.000 s = 5 Stunden.",
    "k": "Kennzahlen",
    "s": "LF5 5.1.1"
   },
   {
    "tg": 2,
    "g": "servicelevel-calc",
    "src": "IZ Übung/22",
    "t": "calc",
    "x": "ACD-Report Service-Hotline, Montag:\nangenommene Anrufe gesamt: 1.250\ndavon innerhalb von 20 Sekunden angenommen: 1.050\nZielvorgabe: 80/20",
    "q": "Welchen Servicelevel (in %) hat die Hotline erreicht?",
    "ans": [
     "84"
    ],
    "unit": "%",
    "e": "1.050 · 100 / 1.250 = 84 % der Anrufe wurden innerhalb von 20 Sekunden angenommen → 84/20, die Vorgabe 80/20 ist erfüllt. Servicelevel 80/20 heißt: 80 % der Anrufe werden in höchstens 20 Sekunden angenommen – nicht „80 % Erfolg“.",
    "k": "Kennzahlen",
    "s": "LF5 5.1.2"
   },
   {
    "tg": 2,
    "g": "auslastung",
    "src": "IZ Übung/23",
    "t": "calc",
    "x": "Agent Tom Weiß, Nettoarbeitszeit 7,5 Stunden:\nGesprächszeit 4,5 Stunden · Nachbearbeitungszeit 1,5 Stunden · Anrufwartezeit 1,5 Stunden",
    "q": "Berechnen Sie Toms Auslastung (Occupancy).",
    "ans": [
     "80"
    ],
    "unit": "%",
    "e": "Produktivzeit = Gesprächszeit + Nachbearbeitungszeit = 6 h. Auslastung = 6 · 100 / 7,5 = 80 % – laut Buch der angemessene Wert. Höhere Werte belasten die Agents dauerhaft, niedrigere verursachen unnötige Kosten. Wartezeit gehört nicht zur Produktivzeit.",
    "k": "Kennzahlen",
    "s": "LF5 5.1.4"
   },
   {
    "tg": 2,
    "g": "lcq",
    "src": "IZ Übung/24",
    "t": "calc",
    "q": "An der Bestellhotline gingen 480 Anrufe ein, 456 wurden angenommen, die übrigen Anrufer legten vorher auf. Wie hoch ist die Lost-Call-Quote?",
    "ans": [
     "5"
    ],
    "unit": "%",
    "e": "Aufgelegte Anrufe = 480 − 456 = 24. Lost-Call-Quote = 24 · 100 / 480 = 5 %. Bezugsgröße sind die eingehenden, nicht die angenommenen Anrufe (24 / 456 = 5,3 % wäre falsch). Ziel: möglichst nahe 0 %.",
    "k": "Kennzahlen",
    "s": "LF5 5.1.3"
   },
   {
    "tg": 2,
    "g": "fcr",
    "src": "IZ Übung/25",
    "t": "calc",
    "q": "Von 390 bearbeiteten Anfragen im technischen Support konnten 351 bereits im ersten Kontakt gelöst werden. Wie hoch ist die First Call Resolution?",
    "ans": [
     "90"
    ],
    "unit": "%",
    "e": "FCR = Lösungen beim Erstkontakt · 100 / bearbeitete Anfragen = 351 · 100 / 390 = 90 %. Eine hohe FCR steigert die Kundenzufriedenheit und senkt Kosten, weil Folgeanrufe entfallen.",
    "k": "Kennzahlen",
    "s": "LF5 5.1.5"
   },
   {
    "tg": 2,
    "g": "kreditkarten",
    "src": "IZ Übung/26",
    "t": "match",
    "q": "Ordnen Sie die Beschreibungen dem Kartentyp zu.",
    "pairs": [
     [
      "Umsätze werden monatlich gesammelt und in einer Summe ohne Zinsen fällig.",
      "Charge-Card"
     ],
     [
      "Umsätze können in Raten mit Zinsen zurückgezahlt werden – echte Kreditkarte.",
      "Credit-Card"
     ],
     [
      "Jede Zahlung wird direkt vom Girokonto abgebucht.",
      "Debit-Card"
     ],
     [
      "Die Karte muss vorab mit Guthaben aufgeladen werden.",
      "Prepaid-Card"
     ]
    ],
    "e": "In Deutschland ist die Charge-Card üblich (Kurzkredit ohne Zinsen), in den USA die Credit-Card. Die Debit-Card hat keine Kreditfunktion; die Prepaid-Card eignet sich für bonitätsschwache Kunden. Für Unternehmen: Zahlungsgarantie, aber Transaktionsgebühren.",
    "k": "Zahlungsverkehr",
    "s": "LF5 6.2"
   },
   {
    "tg": 2,
    "g": "zielkauf-finanzkauf",
    "src": "IZ Übung/27",
    "t": "mc",
    "q": "Ein Kunde möchte sein neues Notebook „in 30 Tagen auf einmal“ bezahlen, eine andere Kundin „in 24 Monatsraten“. Welche Zuordnung ist richtig?",
    "a": [
     "Kunde: Zielkauf (Zahlungsziel), meist kostenfrei · Kundin: Finanzkauf (Ratenzahlung) mit Zinsen und Gebühren",
     "Kunde: Finanzkauf · Kundin: Zielkauf",
     "beide: Zielkauf, weil beide später zahlen",
     "beide: Finanzkauf, weil beide einen Kredit erhalten",
     "Kunde: Vorauskasse · Kundin: Nachnahme"
    ],
    "c": 0,
    "e": "Zielkauf = Zahlung des Gesamtbetrags zu einem späteren Termin, 7–30 Tage meist kostenfrei. Finanzkauf = Ratenzahlung über z. B. 6–72 Monate mit Zinsen und Bearbeitungsgebühren. Beide setzen ausreichende Bonität voraus.",
    "k": "Zahlungsverkehr",
    "s": "LF5 6.2"
   },
   {
    "tg": 2,
    "g": "iban",
    "src": "IZ Übung/28",
    "t": "mc",
    "q": "Wie ist eine deutsche IBAN aufgebaut?",
    "a": [
     "DE + 2-stellige Prüfziffer + 8-stellige Bankleitzahl + 10-stellige Kontonummer",
     "DE + 8-stellige Kontonummer + 10-stellige Bankleitzahl",
     "BIC + Kontonummer",
     "2-stellige Prüfziffer + DE + Kontonummer + BIC",
     "DE + Postleitzahl der Bank + Kontonummer"
    ],
    "c": 0,
    "e": "IBAN (International Bank Account Number) Deutschland: Länderkennung DE, 2 Prüfziffern, 8 Stellen Bankleitzahl, 10 Stellen Kontonummer = 22 Zeichen. Der BIC identifiziert dagegen die Bank weltweit. SEPA: Überweisung in einem Bankgeschäftstag, 8 Wochen Widerspruchsfrist bei Lastschriften.",
    "k": "Zahlungsverkehr",
    "s": "LF5 6.2"
   },
   {
    "tg": 2,
    "g": "versand-haftung",
    "src": "IZ Übung/29",
    "t": "mc",
    "q": "Ein Kunde meldet, dass sein Zubehör, das als DHL-Päckchen verschickt wurde, nicht angekommen ist. Was gilt?",
    "a": [
     "Für Päckchen haftet DHL nicht – anders als für Pakete (bis 500 €).",
     "DHL haftet für Päckchen bis 500 €.",
     "DHL haftet für Päckchen pauschal mit 25 €.",
     "DHL haftet unbegrenzt.",
     "Es haftet grundsätzlich der Empfänger."
    ],
    "c": 0,
    "e": "Laut Buch haftet DHL bei Paketen ohne Zusatzversicherung bis 500 €, bei Einschreiben pauschal mit 25 €. Keine Haftung bei Päckchen, Bücher- und Warensendungen, bei Schäden durch den Versender oder bei verspäteter Schadensmeldung. Wertvolles also als Paket oder versichert versenden.",
    "k": "Versand",
    "s": "LF5 7.3"
   },
   {
    "tg": 2,
    "g": "kundenlebenszyklus",
    "src": "IZ Übung/30",
    "t": "order",
    "q": "Bringen Sie die Phasen des Kundenlebenszyklus in die richtige Reihenfolge.",
    "items": [
     "Akquisitionsphase",
     "Angebotsphase",
     "Kaufphase",
     "After-Sales-Phase",
     "Betreuungsphase",
     "Optimierungsphase"
    ],
    "e": "Der Kauf liegt in der Mitte des Zyklus – danach folgen After-Sales (Fragen, Reklamationen direkt nach dem Kauf), langfristige Betreuung und Optimierung. CRM richtet alle Unternehmensbereiche auf diese langfristige Beziehung aus.",
    "k": "CRM",
    "s": "LF5 3.1.2"
   },
   {
    "tg": 2,
    "g": "crm-saeulen",
    "src": "IZ Übung/31",
    "t": "multi",
    "q": "Welche zwei Aufgabenfelder gehören zu den drei Säulen des CRM im Dialogmarketing?",
    "a": [
     "Neukundengewinnung",
     "Kundenrückgewinnung (Winback)",
     "Lagerhaltung",
     "Buchhaltung",
     "Personalbeschaffung",
     "Produktion"
    ],
    "cs": [
     0,
     1
    ],
    "e": "Die drei Säulen des CRM: Bestandskundenpflege, Neukundengewinnung und Kundenrückgewinnung. CRM ist laut Buch die Strategie, alle Unternehmensbereiche auf langfristige Kundenbeziehungen auszurichten.",
    "k": "CRM",
    "s": "LF5 3.1.1"
   },
   {
    "tg": 2,
    "g": "storno",
    "src": "IZ Übung/32",
    "t": "calc",
    "q": "Nach einer Outbound-Aktion liegen 640 Aufträge vor. Innerhalb der Widerrufsfrist werden 96 storniert. Wie hoch ist die Stornoquote?",
    "ans": [
     "15"
    ],
    "unit": "%",
    "e": "Stornoquote = Stornos · 100 / Gesamtaufträge = 96 · 100 / 640 = 15 %. Die gesetzliche Widerrufsfrist beträgt zwei Wochen. Eine hohe Stornoquote kann auf Produktmängel oder nicht bedarfsgerechte Gesprächsführung hinweisen.",
    "k": "Kennzahlen",
    "s": "LF5 5.2.3"
   },
   {
    "tg": 3,
    "g": "ani-dnis",
    "src": "IZ Übung/33",
    "t": "mc",
    "q": "Die Dialog-GmbH betreut zwei Kunden über zwei verschiedene 0800-Nummern auf derselben Anlage. Welcher Dienst erkennt, welche der beiden Nummern der Anrufer gewählt hat?",
    "a": [
     "DNIS (Dialed Number Identification Service)",
     "ANI (Automatic Number Identification)",
     "IVR (Interactive Voice Response)",
     "Predictive Dialer",
     "Call Blending"
    ],
    "c": 0,
    "e": "DNIS erkennt die gewählte Nummer und ermöglicht so die Zuordnung zum Projekt. ANI übermittelt dagegen die Rufnummer des Anrufers (z. B. für das Öffnen des Kundendatensatzes per CTI). Klassisches Verwechslungspaar!",
    "k": "Branchentechnik",
    "s": "LF4 1.2.1"
   },
   {
    "tg": 3,
    "g": "acd-ivr-cti",
    "src": "IZ Übung/34",
    "t": "match",
    "q": "Ordnen Sie die Funktionen der passenden Technik zu.",
    "pairs": [
     [
      "Sprachcomputer, der Anrufer per Tastenwahl oder Sprache vorsortiert",
      "IVR"
     ],
     [
      "verteilt eingehende Anrufe auf freie Agents",
      "ACD"
     ],
     [
      "öffnet beim Anruf automatisch den Kundendatensatz (Screen-Pop-up)",
      "CTI"
     ],
     [
      "schaltet Inbound-Agents in ruhigen Zeiten auf Outbound um",
      "Call Blending"
     ]
    ],
    "e": "ACD = Kernstück der TK-Anlage (Routing, Reporting, Echtzeitmanagement). IVR = Sprachdialogsystem zur Vorselektion. CTI = Verschmelzung von Telefon, Computer und Datenbank. Call Blending = Mischung von In- und Outbound (Swinging Agents).",
    "k": "Branchentechnik",
    "s": "LF4 1.2.2"
   },
   {
    "tg": 3,
    "g": "dialer",
    "src": "IZ Übung/35",
    "t": "mc",
    "q": "Bei welchem Dialer wählt das System erst, nachdem der Agent die Anwahl bestätigt hat, sodass er sich vorher auf den Kunden vorbereiten kann?",
    "a": [
     "Preview Dialing",
     "Power Dialing",
     "Predictive Dialing",
     "Call Blending",
     "Overflow"
    ],
    "c": 0,
    "e": "Preview Dialing = Wahlhilfe nach Bestätigung durch den Agent (kaum Produktivitätsgewinn). Power Dialing wählt automatisch und stellt nur freien Agents Gespräche zu. Predictive Dialing berechnet per Forecasting, wie viele Anwahlen nötig sind – höchste Produktivität, aber Risiko von Silent Calls.",
    "k": "Branchentechnik",
    "s": "LF4 1.2.5"
   },
   {
    "tg": 3,
    "g": "dialer",
    "src": "IZ Übung/36",
    "t": "mc",
    "q": "Ein Kunde beschwert sich: Sein Telefon klingelt, er hebt ab – aber niemand meldet sich. Was ist die typische Ursache?",
    "a": [
     "Ein Silent Call: Der Predictive Dialer hat mehr Nummern angewählt, als Agents frei waren, und das Gespräch verworfen.",
     "Die IVR ist ausgefallen.",
     "Der Kunde hat eine 0900-Nummer gewählt.",
     "Das Gespräch wurde per Skill Based Routing weitergeleitet.",
     "Die Firewall hat das Gespräch blockiert."
    ],
    "c": 0,
    "e": "Durch die Overdial-Funktion wählen Power- und Predictive Dialer mehr Nummern an, als Agents frei sind. Ist kein Agent verfügbar, wird der erreichte Kunde „gedropt“ – ein Silent Call. Massenhafte Anrufe dieser Art verstoßen gegen das UWG; die Bundesnetzagentur kann Rufnummern abschalten.",
    "k": "Branchentechnik",
    "s": "LF4 1.2.5"
   },
   {
    "tg": 3,
    "g": "pop3-imap",
    "src": "IZ Übung/37",
    "t": "mc",
    "q": "Sie möchten Ihre dienstlichen E-Mails auf PC, Tablet und Smartphone jeweils auf demselben Stand sehen. Welches Protokoll ist dafür geeignet?",
    "a": [
     "IMAP",
     "POP3",
     "SMTP",
     "FTP",
     "HTTP"
    ],
    "c": 0,
    "e": "Bei IMAP bleiben die Mails auf dem Server und werden auf allen Geräten synchronisiert. POP3 holt die Mails ab und löscht sie meist auf dem Server. SMTP dient dem Versenden, FTP dem Dateitransfer, HTTP der Übertragung von Webseiten.",
    "k": "Netze & Dienste",
    "s": "LF4 1.1.6"
   },
   {
    "tg": 3,
    "g": "virus-wurm",
    "src": "IZ Übung/38",
    "t": "mc",
    "q": "Worin unterscheidet sich ein Wurm von einem Virus?",
    "a": [
     "Der Wurm verbreitet sich selbstständig über Netzwerke, der Virus braucht ein Wirtsprogramm.",
     "Der Virus verbreitet sich selbstständig, der Wurm braucht ein Wirtsprogramm.",
     "Der Wurm verschlüsselt Dateien und verlangt Lösegeld.",
     "Der Wurm ist harmlos, weil er keine Dateien befällt.",
     "Es gibt keinen Unterschied."
    ],
    "c": 0,
    "e": "Virus: befällt Programmdateien und vermehrt sich nur über andere Programme (Wirt). Wurm: „Netzwerk-Virus“, befällt keine Dateien, verbreitet sich selbstständig und beansprucht Rechenzeit. Lösegeld verlangt Ransomware.",
    "k": "Datensicherheit",
    "s": "LF4 5.1"
   },
   {
    "tg": 3,
    "g": "malware",
    "src": "IZ Übung/39",
    "t": "match",
    "q": "Ordnen Sie die Beschreibungen der passenden Bedrohung zu.",
    "pairs": [
     [
      "Eine gefälschte Bank-Mail fordert per Link zur Eingabe von Zugangsdaten auf.",
      "Phishing"
     ],
     [
      "Dateien werden verschlüsselt, für die Freigabe wird Lösegeld verlangt.",
      "Ransomware"
     ],
     [
      "Ein Programm sammelt heimlich Surfgewohnheiten und sendet sie ins Internet.",
      "Spyware"
     ],
     [
      "Eine scheinbar nützliche Gratis-App stiehlt im Hintergrund Passwörter.",
      "Trojaner"
     ],
     [
      "Eine Kettenmail warnt vor einem angeblichen Virus und bittet ums Weiterleiten.",
      "Hoax"
     ]
    ],
    "e": "Phishing = Password + Fishing. Ransom = Lösegeld. Spyware = Spionagesoftware. Trojaner geben vor, harmlos zu sein. Hoax = Falschmeldung („Ente“), die Panik und Weiterleiten auslösen soll.",
    "k": "Datensicherheit",
    "s": "LF4 5.1"
   },
   {
    "tg": 3,
    "g": "backup",
    "src": "IZ Übung/40",
    "t": "match",
    "q": "Ordnen Sie die Beschreibungen der passenden Backup-Art zu.",
    "pairs": [
     [
      "sichert alle Daten 1:1",
      "Voll-Backup"
     ],
     [
      "sichert nur die Änderungen seit dem letzten inkrementellen Backup",
      "inkrementelles Backup"
     ],
     [
      "sichert alle Änderungen seit dem letzten Voll-Backup",
      "differenzielles Backup"
     ],
     [
      "sichert täglich die wichtigsten Dateien eines Verzeichnisses auf wechselnden Medien",
      "partielles Backup"
     ]
    ],
    "e": "Das Voll-Backup braucht viel Speicher. Inkrementelle Sicherungen sind klein, aber ohne das Voll-Backup wertlos. Differenzielle Sicherungen wachsen bis zum nächsten Voll-Backup. Verwechslungsgefahr: inkrementell (seit letzter Teilsicherung) ↔ differenziell (seit letzter Vollsicherung).",
    "k": "Datensicherheit",
    "s": "LF4 5.2.7"
   },
   {
    "tg": 3,
    "g": "firewall",
    "src": "IZ Übung/41",
    "t": "mc",
    "q": "Welche Aussage zu Firewalls trifft zu?",
    "a": [
     "Eine Personal-Firewall ist Software auf dem einzelnen PC, eine Netzwerk-Firewall ist Hardware im Firmennetz.",
     "Eine Firewall erkennt und entfernt Viren in Dateien.",
     "Eine Personal-Firewall schützt das gesamte Firmennetz.",
     "Eine Firewall ersetzt die Datensicherung.",
     "Eine Firewall verschlüsselt E-Mails."
    ],
    "c": 0,
    "e": "Die Firewall regelt, kontrolliert und protokolliert den Datenverkehr zwischen zwei Netzen („Türsteher“). Personal-Firewall = Software auf dem PC, Netzwerk-Firewall = Hardware im großen Netz. Viren entfernt das Antivirenprogramm.",
    "k": "Datensicherheit",
    "s": "LF4 5.2.3"
   },
   {
    "tg": 3,
    "g": "primaerschluessel",
    "src": "IZ Übung/42",
    "t": "mc",
    "q": "Welche Spalte der Tabelle „Kunden“ eignet sich als Primärschlüssel?",
    "a": [
     "Kundennummer",
     "Nachname",
     "Postleitzahl",
     "Geburtsdatum",
     "Wohnort"
    ],
    "c": 0,
    "e": "Der Primärschlüssel identifiziert jeden Datensatz eindeutig – sein Inhalt kommt nur einmal vor (z. B. Kundennummer), üblicherweise in der ersten Spalte. Namen, PLZ, Geburtsdaten oder Orte können mehrfach vorkommen. Ein Fremdschlüssel ist der Primärschlüssel einer anderen Tabelle.",
    "k": "Datenbanken",
    "s": "LF4 4.3"
   },
   {
    "tg": 3,
    "g": "datenhierarchie",
    "src": "IZ Übung/43",
    "t": "order",
    "q": "Bringen Sie die Begriffe der Datenhierarchie in die richtige Reihenfolge – von der kleinsten zur größten Einheit.",
    "items": [
     "Datenfeld",
     "Datensatz",
     "Datei",
     "Datenbank"
    ],
    "e": "Datenfeld (z. B. Kundennummer „658741“) → Datensatz (alle Felder eines Kunden) → Datei (alle Kundendatensätze, in der relationalen DB eine Tabelle) → Datenbank (verknüpfte Dateien).",
    "k": "Datenbanken",
    "s": "LF4 4.3"
   },
   {
    "tg": 3,
    "g": "omnichannel",
    "src": "IZ Übung/44",
    "t": "mc",
    "q": "Ein Kunde beginnt eine Anfrage im Chat und setzt sie später am Telefon fort, ohne etwas wiederholen zu müssen. Welches Konzept liegt vor?",
    "a": [
     "Omnichannel",
     "Multichannel",
     "Call Blending",
     "Outsourcing",
     "Preview Dialing"
    ],
    "c": 0,
    "e": "Omnichannel: Alle Kanäle sind verfügbar UND miteinander vernetzt – nahtloses Kundenerlebnis. Multichannel: mehrere Kanäle ohne vollständige Vernetzung. Grundlage ist Customer Centricity (Kunde im Mittelpunkt).",
    "k": "Branchentechnik",
    "s": "LF4 1.2.6"
   },
   {
    "tg": 3,
    "g": "tkg-warteschleife",
    "src": "IZ Übung/45",
    "t": "mc",
    "q": "Warum wurden mit der TKG-Novelle 2013 die Rufnummerngassen 01806 und 01807 eingeführt?",
    "a": [
     "Weil Warteschleifen seitdem für den Anrufer kostenlos sein müssen.",
     "Weil 0800-Nummern abgeschafft wurden.",
     "Weil Televoting nur noch über 0180 laufen darf.",
     "Weil 0900-Nummern keine Preisansage mehr brauchen.",
     "Weil Mobilfunkanrufe kostenlos wurden."
    ],
    "c": 0,
    "e": "Seit der TKG-Novelle 2013 dürfen Warteschleifen – Zeiten, in denen das Anliegen nicht bearbeitet wird – nichts kosten. Daher: 01806 (Festpreis pro Anruf) und 01807 (erste 30 Sekunden kostenlos). 0900 = Premium-Dienste mit Preisansage, 0800 = Freecall.",
    "k": "Netze & Dienste",
    "s": "LF4 3.2"
   },
   {
    "tg": 3,
    "g": "suchoperator",
    "src": "IZ Übung/46",
    "t": "mc",
    "q": "Mit welcher Eingabe findet eine Suchmaschine nur Seiten, die die Wörter genau in dieser Reihenfolge enthalten?",
    "a": [
     "\"Handy Datenblatt\"",
     "Handy -Datenblatt",
     "Handy +Datenblatt",
     "define:Handy",
     "Handy filetype:pdf"
    ],
    "c": 0,
    "e": "Anführungszeichen = exakte Wortfolge. Minus = Begriff ausschließen, Plus = Begriff muss enthalten sein, define: = Begriffsdefinition, filetype: = bestimmter Dateityp.",
    "k": "Netze & Dienste",
    "s": "LF4 3.4"
   },
   {
    "tg": 3,
    "g": "eisenhower",
    "src": "IZ Übung/47",
    "t": "match",
    "q": "Ordnen Sie den Aufgabentypen nach dem Eisenhower-Prinzip die richtige Behandlung zu.",
    "pairs": [
     [
      "wichtig und dringend",
      "sofort selbst erledigen"
     ],
     [
      "wichtig, aber nicht dringend",
      "terminieren und selbst erledigen"
     ],
     [
      "dringend, aber nicht wichtig",
      "delegieren"
     ],
     [
      "weder wichtig noch dringend",
      "Papierkorb"
     ]
    ],
    "e": "Eisenhower ordnet Aufgaben nach Wichtigkeit und Dringlichkeit in vier Felder (A bis D). D-Aufgaben dürfen laut Buch „mit gutem Gewissen in den Papierkorb wandern“ – als bewusste Entscheidung.",
    "k": "Information & Lernen",
    "s": "LF1 6.1"
   },
   {
    "tg": 3,
    "g": "alpen",
    "src": "IZ Übung/48",
    "t": "calc",
    "q": "Sie planen Ihren 8-Stunden-Arbeitstag nach der ALPEN-Methode mit der 60/40-Regel. Wie viele Stunden verplanen Sie fest mit Aufgaben?",
    "ans": [
     "4,8"
    ],
    "unit": "Stunden",
    "e": "ALPEN: Aufgaben notieren, Länge schätzen, Pufferzeiten einplanen, Entscheidungen treffen, Nachkontrolle. 60/40-Regel: 60 % der Zeit verplanen, 40 % als Puffer → 8 h · 0,6 = 4,8 h (4 h 48 min). Probe: 4,8 h + 3,2 h Puffer = 8 h.",
    "k": "Information & Lernen",
    "s": "LF1 6.1"
   },
   {
    "tg": 3,
    "g": "protokollart",
    "src": "IZ Übung/49",
    "t": "mc",
    "q": "Nach der Teambesprechung sollen nur die gefassten Beschlüsse kurz festgehalten werden. Welche Protokollart wählen Sie?",
    "a": [
     "Ergebnisprotokoll",
     "Verlaufsprotokoll",
     "Gesprächsleitfaden",
     "Sendeprotokoll",
     "Reporting"
    ],
    "c": 0,
    "e": "Das Ergebnisprotokoll hält nur Ergebnisse und Beschlüsse fest und ist kürzer. Das Verlaufsprotokoll dokumentiert zusätzlich den Ablauf mit Beiträgen und Diskussion.",
    "k": "Information & Lernen",
    "s": "LF1 5.1"
   },
   {
    "tg": 3,
    "g": "informationskanal",
    "src": "IZ Übung/50",
    "t": "mc",
    "q": "Eine Teamleiterin muss einem Mitarbeiter mitteilen, dass seine Leistungen deutlich nachgelassen haben. Welchen Informationskanal wählt sie?",
    "a": [
     "ein Einzelgespräch",
     "eine Rundmail an das Team",
     "einen Beitrag im Intranet",
     "einen Punkt im Teammeeting",
     "einen Aushang am Schwarzen Brett"
    ],
    "c": 0,
    "e": "Sensible, kritische und persönliche Themen gehören ins Einzelgespräch. Intranet und Rundmail eignen sich für Informationen an alle, Meetings für komplexe Themen mit Diskussion.",
    "k": "Information & Lernen",
    "s": "LF1 5.1"
   },
   {
    "tg": 3,
    "g": "laerm-klima",
    "src": "IZ Übung/51",
    "t": "mc",
    "q": "Welche Werte gelten laut Buch als Richtwerte für einen Callcenter-Arbeitsplatz?",
    "a": [
     "Lärm höchstens 2 sone, Lufttemperatur 20–23 °C, Luftfeuchtigkeit 50–60 %",
     "Lärm höchstens 8 sone, Lufttemperatur 26–28 °C, Luftfeuchtigkeit 20–30 %",
     "Lärm höchstens 2 Dezibel, Lufttemperatur 17 °C, Luftfeuchtigkeit 80 %",
     "Lärm unbegrenzt, solange Headsets getragen werden",
     "Lärm höchstens 4 sone, Lufttemperatur 15–18 °C"
    ],
    "c": 0,
    "e": "Sone misst das subjektive Lautheitsempfinden (2 sone = normale Unterhaltung, doppelt so laut wie 1 sone); Dezibel misst den Schalldruck. Ab etwa 26 °C sinkt die Leistungsfähigkeit.",
    "k": "Arbeitsplatz",
    "s": "LF1 4.3"
   },
   {
    "tg": 3,
    "g": "management-by",
    "src": "IZ Übung/52",
    "t": "match",
    "q": "Ordnen Sie die Beschreibungen der passenden Führungstechnik zu.",
    "pairs": [
     [
      "Ziele werden gemeinsam vereinbart und nach Ablauf überprüft.",
      "Management by objectives"
     ],
     [
      "Mitarbeiter entscheiden Routinefälle selbst, die Führung greift nur bei Ausnahmen ein.",
      "Management by exception"
     ],
     [
      "Die Führung gibt Kennzahlen verbindlich vor und prüft Soll gegen Ist.",
      "Management by results"
     ],
     [
      "Klar abgegrenzte Aufgaben werden mit Entscheidungskompetenz übertragen.",
      "Management by delegation"
     ]
    ],
    "e": "Führungstechniken sind organisatorische Techniken – nicht zu verwechseln mit Führungsstilen (autoritär, kooperativ, Laissez-faire, situativ). Buchbeispiel exception: Gutschriften bis 20 € entscheidet der Mitarbeiter selbst.",
    "k": "Führung",
    "s": "LF1 1.1.3"
   },
   {
    "tg": 3,
    "g": "smart",
    "src": "IZ Übung/53",
    "t": "mc",
    "q": "Wofür steht das „A“ in der SMART-Regel zur Zielformulierung laut Buch?",
    "a": [
     "aktiv beeinflussbar",
     "angemessen bezahlt",
     "abteilungsübergreifend",
     "anonym",
     "automatisch"
    ],
    "c": 0,
    "e": "SMART: spezifisch, messbar, aktiv beeinflussbar, realistisch, terminiert. Die Regel wird beim Management by objectives genutzt. Andere Quellen deuten das A teils anders – maßgeblich ist hier der Buchwortlaut.",
    "k": "Führung",
    "s": "LF1 1.1.3"
   },
   {
    "tg": 3,
    "g": "zielbeziehung",
    "src": "IZ Übung/54",
    "t": "mc",
    "q": "Die Dialog-GmbH will nur noch teures Recyclingpapier mit Umweltsiegel einsetzen, gleichzeitig soll die Rentabilität steigen. Welche Zielbeziehung liegt vor?",
    "a": [
     "Zielkonflikt",
     "Zielharmonie",
     "Zielneutralität",
     "Sachziel",
     "Zielvereinbarung"
    ],
    "c": 0,
    "e": "Zielkonflikt: Ein Ziel (ökologisch) ist nur erreichbar, wenn ein anderes (wirtschaftlich) beeinträchtigt wird. Lösung: Priorisierung oder Kompromiss. Zielharmonie: Ziele ergänzen sich, z. B. Umsatzwachstum sichert Arbeitsplätze.",
    "k": "Entscheidungsmethoden",
    "s": "LF1 1.1.1"
   },
   {
    "tg": 3,
    "g": "pmi",
    "src": "IZ Übung/55",
    "t": "mc",
    "q": "Ein Teamleiter markiert alle Aspekte einer Entscheidung mit „+“, „–“ oder „i“ (interessant). Welche Methode nutzt er?",
    "a": [
     "PMI (Plus-Minus-Interesting)",
     "CAF (Consider all Facts)",
     "gewichtete Entscheidungsmatrix",
     "intuitive Entscheidung",
     "Pareto-Prinzip"
    ],
    "c": 0,
    "e": "CAF sammelt nur alle Faktoren ungewichtet; PMI ordnet sie zusätzlich als Plus, Minus oder interessant ein; das gewichtete PMI vergibt Punkte. Die Entscheidungsmatrix bewertet mehrere Alternativen nach Kriterien.",
    "k": "Entscheidungsmethoden",
    "s": "LF1 1.1.2"
   },
   {
    "tg": 3,
    "g": "verstaendlichmacher",
    "src": "IZ Übung/56",
    "t": "mc",
    "q": "Ihre Folie enthält lange Schachtelsätze und viele Fremdwörter. Gegen welchen Verständlichmacher nach Schulz von Thun verstößt sie vor allem?",
    "a": [
     "Einfachheit",
     "Gliederung",
     "Prägnanz",
     "Stimulanz",
     "Appell"
    ],
    "c": 0,
    "e": "Die vier Verständlichmacher: Einfachheit (kurze Sätze, Wortschatz der Zielgruppe), Gliederung (logische Struktur), Prägnanz (Wesentliches in wenigen Worten), Stimulanz (Farben, Beispiele). Der Appell ist eine Seite der Nachricht (Vier-Ohren-Modell).",
    "k": "Präsentation",
    "s": "LF2 3.2"
   },
   {
    "tg": 3,
    "g": "datenkategorien",
    "src": "IZ Übung/57",
    "t": "match",
    "q": "Ordnen Sie die Kundendaten der passenden Datenkategorie zu.",
    "pairs": [
     [
      "Geburtsdatum und Anschrift",
      "Grunddaten"
     ],
     [
      "Anzahl der Beschwerden im letzten Jahr",
      "Aktionsdaten"
     ],
     [
      "Durchschnittsumsatz je Bestellung",
      "Ergebnisdaten"
     ],
     [
      "Reaktion auf das letzte Mailing",
      "Aktionsdaten"
     ]
    ],
    "e": "Grunddaten: Wer ist der Kunde? (Adresse, Soziodemografie, Bonität – auch Stammdaten genannt). Aktionsdaten: Was passierte wann? (Kontakte, Reaktionen, Beschwerden, Retouren). Ergebnisdaten: Welche Ergebnisse? (Umsatz, Kaufhäufigkeit, Zahlverhalten).",
    "k": "Datenmanagement",
    "s": "LF5 2.1"
   },
   {
    "tg": 3,
    "g": "datenpflege",
    "src": "IZ Übung/58",
    "t": "mc",
    "q": "Welche Maßnahme zur Pflege von Bestandskundendaten ist laut Buch die günstigste und effizienteste?",
    "a": [
     "der interne Abgleich bei jedem Kundenkontakt",
     "der externe Abgleich durch einen Dienstleister",
     "eine eigene Outbound-Aktion nur zur Datenprüfung",
     "das Löschen aller Kunden nach einem Jahr",
     "der Kauf neuer Adressen beim Adressbroker"
    ],
    "c": 0,
    "e": "Pflegemaßnahmen laut Buch: Bereinigung (inaktive Kunden löschen), externer Abgleich, interner Abgleich und Abgleich per Outbound. Der interne Abgleich nutzt jeden ohnehin stattfindenden Kontakt – z. B. beim Sicherheitsabgleich zu Gesprächsbeginn.",
    "k": "Datenmanagement",
    "s": "LF5 2.3"
   },
   {
    "tg": 4,
    "g": "kaufmannsarten",
    "src": "IZ Übung/59",
    "t": "match",
    "q": "Ordnen Sie die Beschreibungen der passenden Kaufmannsart zu.",
    "pairs": [
     [
      "betreibt ein Handelsgewerbe; die Eintragung im Handelsregister wirkt nur rechtsbezeugend",
      "Istkaufmann"
     ],
     [
      "Kleingewerbetreibender, der erst durch freiwillige Eintragung Kaufmann wird",
      "Kannkaufmann"
     ],
     [
      "GmbH, die kraft ihrer Rechtsform Kaufmann ist",
      "Formkaufmann"
     ]
    ],
    "e": "Istkaufmann: Eintragung deklaratorisch (bezeugt eine schon bestehende Eigenschaft). Kannkaufmann und Formkaufmann: Eintragung konstitutiv (begründet die Kaufmannseigenschaft erst). Freie Berufe (Ärzte, Anwälte) betreiben kein Handelsgewerbe.",
    "k": "Recht",
    "s": "LF1 1.3.1"
   },
   {
    "tg": 4,
    "g": "firmengrundsatz",
    "src": "IZ Übung/60",
    "t": "mc",
    "q": "In derselben Stadt soll ein zweites Unternehmen unter dem Namen „Dialogfix GmbH“ eingetragen werden. Gegen welchen Grundsatz der Firmenwahl verstößt das?",
    "a": [
     "Firmenausschließlichkeit",
     "Firmenbeständigkeit",
     "Firmenöffentlichkeit",
     "Firmenwahrheit und -klarheit",
     "Rechtsformzusatz"
    ],
    "c": 0,
    "e": "Firmenausschließlichkeit: Eine Firma muss sich am selben Ort deutlich von anderen unterscheiden. Wahrheit/Klarheit: keine irreführenden Angaben; Beständigkeit: Firma nur zusammen mit dem Handelsgeschäft übertragbar; Öffentlichkeit: Eintragung und Angabe auf Geschäftsbriefen; Rechtsformzusatz legt die Haftung offen.",
    "k": "Recht",
    "s": "LF1 1.3.1"
   },
   {
    "tg": 4,
    "g": "firmenarten",
    "src": "IZ Übung/61",
    "t": "match",
    "q": "Ordnen Sie die Firmen der passenden Firmenart zu.",
    "pairs": [
     [
      "Weber & Hansen KG",
      "Personenfirma"
     ],
     [
      "Telefonservice Nord GmbH",
      "Sachfirma"
     ],
     [
      "Zyxora GmbH",
      "Fantasiefirma"
     ],
     [
      "Lena Brandt Kundenservice e. K.",
      "Mischfirma"
     ]
    ],
    "e": "Personenfirma = Name eines oder mehrerer Inhaber/Gesellschafter; Sachfirma = beschreibt den Gegenstand des Unternehmens; Fantasiefirma = frei erfunden (Buch: Dialogfix GmbH); Mischfirma = Kombination aus Person und Sache. „Firma“ ist der Name, unter dem der Kaufmann Geschäfte betreibt – nicht das Unternehmen selbst.",
    "k": "Recht",
    "s": "LF1 1.3.1"
   },
   {
    "tg": 4,
    "g": "hr-abteilung",
    "src": "IZ Übung/62",
    "t": "mc",
    "q": "In welcher Abteilung des Handelsregisters wird eine GmbH eingetragen?",
    "a": [
     "Abteilung B",
     "Abteilung A",
     "Abteilung C",
     "Sie wird nicht eingetragen.",
     "im Gewerberegister statt im Handelsregister"
    ],
    "c": 0,
    "e": "Abteilung A (HRA): Einzelkaufleute und Personengesellschaften (z. B. KG). Abteilung B (HRB): Kapitalgesellschaften (z. B. GmbH). Das Register wird elektronisch beim Amtsgericht geführt; Eintragungen genießen öffentlichen Glauben.",
    "k": "Recht",
    "s": "LF1 1.3.1"
   },
   {
    "tg": 4,
    "g": "leitungssystem",
    "src": "IZ Übung/63",
    "t": "mc",
    "q": "Eine Agentin erhält Weisungen sowohl von ihrer Teamleiterin als auch direkt von der Qualitätsmanagerin und der IT-Leitung. Welches Leitungssystem liegt vor?",
    "a": [
     "Mehrlinienorganisation",
     "Einlinienorganisation",
     "Stablinienorganisation",
     "Spartenorganisation",
     "Ablauforganisation"
    ],
    "c": 0,
    "e": "Mehrlinienorganisation: Aufträge kommen nach Aufgabentyp von mehreren Stellen – kurze Wege, aber Gefahr widersprüchlicher Anweisungen. Einlinie: nur eine übergeordnete Instanz. Stablinie: Einlinie mit beratenden Stabsstellen ohne (disziplinarische) Weisungsbefugnis.",
    "k": "Organisation",
    "s": "LF1 1.2.2"
   },
   {
    "tg": 4,
    "g": "gmbh-co-kg",
    "src": "IZ Übung/64",
    "t": "mc",
    "q": "Was kennzeichnet eine GmbH & Co. KG?",
    "a": [
     "Sie ist rechtlich eine KG, deren einziger Komplementär eine GmbH ist.",
     "Sie ist eine GmbH, deren Gesellschafter unbeschränkt haften.",
     "Sie ist eine KG ohne Kommanditisten.",
     "Sie ist eine Kapitalgesellschaft mit Mindestkapital 50.000 €.",
     "Sie ist eine GmbH, die im Handelsregister Abteilung A steht."
    ],
    "c": 0,
    "e": "Bei der GmbH & Co. KG übernimmt eine GmbH die Rolle des Vollhafters. Die unmittelbare, unbeschränkte Haftung des Komplementärs wird so zu einer mittelbaren, beschränkten Haftung.",
    "k": "Recht",
    "s": "LF1 1.3.3"
   },
   {
    "tg": 4,
    "g": "probezeit-dauer",
    "src": "IZ Übung/65",
    "t": "mc",
    "q": "Wie lang muss die Probezeit in einem Berufsausbildungsverhältnis nach § 20 BBiG sein?",
    "a": [
     "mindestens einen Monat, höchstens vier Monate",
     "mindestens drei, höchstens sechs Monate",
     "genau sechs Monate",
     "höchstens zwei Wochen",
     "Sie kann frei vereinbart werden."
    ],
    "c": 0,
    "e": "Die Probezeit dauert mindestens einen und höchstens vier Monate. In dieser Zeit können beide Seiten jederzeit ohne Frist und ohne Grund kündigen – schriftlich. Die Paragrafenangabe (§ 20 BBiG) ist ergänzt aus dem Gesetz; das Buch behandelt die Probezeit bei der Beendigung (§ 22 BBiG).",
    "k": "BBiG",
    "s": "LF1 2.1.4"
   },
   {
    "tg": 4,
    "g": "weiterbeschaeftigung",
    "src": "IZ Übung/66",
    "t": "mc",
    "q": "Lara hat ihre Abschlussprüfung bestanden. Am nächsten Tag arbeitet sie wie gewohnt weiter, ohne dass etwas vereinbart wurde. Was gilt nach § 24 BBiG?",
    "a": [
     "Es entsteht automatisch ein unbefristetes Arbeitsverhältnis.",
     "Es entsteht ein auf sechs Monate befristetes Arbeitsverhältnis.",
     "Lara arbeitet weiter als Auszubildende.",
     "Das Arbeitsverhältnis entsteht erst mit einem schriftlichen Vertrag.",
     "Lara muss eine neue Probezeit absolvieren, bevor ein Vertrag entsteht."
    ],
    "c": 0,
    "e": "Wird ein Auszubildender im Anschluss an die Ausbildung beschäftigt, ohne dass etwas vereinbart ist, gilt ein Arbeitsverhältnis auf unbestimmte Zeit als begründet – ohne ausdrückliche Vereinbarung. Die Ausbildung endet mit Bekanntgabe des Prüfungsergebnisses.",
    "k": "BBiG",
    "s": "LF1 2.1.4"
   },
   {
    "tg": 4,
    "g": "ausbildender-pflichten",
    "src": "IZ Übung/67",
    "t": "multi",
    "q": "Welche zwei Pflichten hat der Ausbildende gegenüber der Auszubildenden?",
    "a": [
     "Ausbildungsmittel kostenlos zur Verfügung stellen",
     "für den Besuch der Berufsschule freistellen",
     "die Weisungen der Auszubildenden befolgen",
     "die Berufsschulnoten an die Eltern melden",
     "eine Übernahme nach der Ausbildung garantieren",
     "Überstunden unbegrenzt anordnen"
    ],
    "cs": [
     0,
     1
    ],
    "e": "Pflichten des Ausbildenden: Handlungsfähigkeit vermitteln, kostenlose Arbeitsmittel, Freistellung für Berufsschule und Prüfungen, Urlaub gewähren, Fürsorge, angemessene und jährlich steigende Vergütung, Zeugnis. Pflichten der Auszubildenden: lernen, sorgfältig arbeiten, Weisungen befolgen, Schweigepflicht u. a.",
    "k": "BBiG",
    "s": "LF1 2.1.3"
   },
   {
    "tg": 4,
    "g": "jarbschg-pause",
    "src": "IZ Übung/68",
    "t": "calc",
    "q": "Der 16-jährige Auszubildende Jonas arbeitet heute 7 Stunden. Wie lang müssen seine Ruhepausen nach dem JArbSchG insgesamt mindestens sein?",
    "ans": [
     "60"
    ],
    "unit": "Minuten",
    "e": "JArbSchG: 30 Minuten bei mehr als 4,5 bis 6 Stunden, 60 Minuten bei mehr als 6 Stunden Arbeitszeit. Pausen zählen nur ab 15 Minuten, frühestens 1 Stunde nach Beginn und spätestens 1 Stunde vor Ende; höchstens 4,5 Stunden am Stück ohne Pause. Für Erwachsene gilt das ArbZG (30 Minuten ab 6 Stunden).",
    "k": "Schutzgesetze",
    "s": "LF1 2.2.1"
   },
   {
    "tg": 4,
    "g": "jarbschg-freizeit",
    "src": "IZ Übung/69",
    "t": "type",
    "q": "Die 17-jährige Auszubildende Emma beendet ihre Arbeit heute um 19:30 Uhr. Wann darf sie morgen frühestens wieder beschäftigt werden? (Uhrzeit hh:mm)",
    "ans": [
     "07:30",
     "7:30",
     "07.30",
     "7.30",
     "0730"
    ],
    "unit": "Uhr",
    "e": "Nach Arbeitsende steht Jugendlichen eine ununterbrochene Freizeit von mindestens 12 Stunden zu: 19:30 Uhr + 12 h = 07:30 Uhr. Zusätzlich gilt: Beschäftigung nur zwischen 6 und 20 Uhr – 7:30 Uhr liegt innerhalb dieses Rahmens.",
    "k": "Schutzgesetze",
    "s": "LF1 2.2.1"
   },
   {
    "tg": 4,
    "g": "br-rechte-stufen",
    "src": "IZ Übung/70",
    "t": "match",
    "q": "Ordnen Sie die Maßnahmen der Geschäftsleitung dem passenden Beteiligungsrecht des Betriebsrats zu.",
    "pairs": [
     [
      "kurzfristige Anordnung von Überstunden",
      "Mitbestimmungsrecht"
     ],
     [
      "Versetzung eines Agents in eine andere Abteilung",
      "Mitwirkungsrecht"
     ],
     [
      "Investition in einen neuen Standort",
      "Informations- und Beratungsrecht"
     ],
     [
      "Einführung eines Monitoring-Systems für Gespräche",
      "Mitbestimmungsrecht"
     ]
    ],
    "e": "Mitbestimmung (stärkstes Recht, ohne Zustimmung unwirksam): Arbeitszeit, Pausen, Gesundheitsschutz, Arbeitskontrollen/Monitoring, Überstunden. Mitwirkung (Anhörung, Widerspruch): personelle Einzelmaßnahmen wie Einstellung und Versetzung – ab 20 wahlberechtigten Arbeitnehmern. Information/Beratung: wirtschaftliche Angelegenheiten.",
    "k": "Mitbestimmung",
    "s": "LF1 2.3.1"
   },
   {
    "tg": 4,
    "g": "br-kuendigung",
    "src": "IZ Übung/71",
    "t": "mc",
    "q": "Die Geschäftsleitung kündigt einem Mitarbeiter, ohne den Betriebsrat vorher anzuhören. Welche Folge hat das nach § 102 BetrVG?",
    "a": [
     "Die Kündigung ist unwirksam.",
     "Die Kündigung ist wirksam, der Betriebsrat erhält eine Entschädigung.",
     "Die Kündigung wird automatisch in eine Abmahnung umgewandelt.",
     "Der Betriebsrat muss die Kündigung nachträglich genehmigen, sonst ist sie verjährt.",
     "Es hat keine Folge, die Anhörung ist freiwillig."
    ],
    "c": 0,
    "e": "Vor jeder Kündigung ist der Betriebsrat anzuhören – sonst ist die Kündigung unwirksam. Widerspricht der Betriebsrat einer ordentlichen Kündigung, bleibt sie dennoch gültig; der Arbeitnehmer kann Kündigungsschutzklage erheben.",
    "k": "Mitbestimmung",
    "s": "LF1 2.3.1"
   },
   {
    "tg": 4,
    "g": "sv-traeger",
    "src": "IZ Übung/72",
    "t": "match",
    "q": "Ordnen Sie die Zweige der Sozialversicherung ihrem Träger zu.",
    "pairs": [
     [
      "Krankenversicherung",
      "gesetzliche Krankenkassen (z. B. AOK)"
     ],
     [
      "Unfallversicherung",
      "Berufsgenossenschaften"
     ],
     [
      "Rentenversicherung",
      "Deutsche Rentenversicherung"
     ],
     [
      "Arbeitslosenversicherung",
      "Bundesagentur für Arbeit"
     ],
     [
      "Pflegeversicherung",
      "Pflegekassen bei den Krankenkassen"
     ]
    ],
    "e": "Fünf Zweige; die Krankenkassen ziehen die Beiträge für alle Zweige ein, zu denen Arbeitgeber und Arbeitnehmer beitragen. Die Unfallversicherung zahlt allein der Arbeitgeber, alle anderen werden paritätisch finanziert.",
    "k": "Sozialversicherung",
    "s": "LF1 2.4.1"
   },
   {
    "tg": 4,
    "g": "sv-prinzip",
    "src": "IZ Übung/73",
    "t": "mc",
    "q": "Eine gutverdienende Agentin und ein Auszubildender erhalten bei gleicher Erkrankung dieselben medizinischen Leistungen der Krankenkasse, obwohl sie unterschiedlich hohe Beiträge zahlen. Welches Prinzip steckt dahinter?",
    "a": [
     "Solidaritätsprinzip",
     "Äquivalenzprinzip",
     "Versicherungspflichtgrenze",
     "Beitragsbemessungsgrenze",
     "Kapitaldeckungsprinzip"
    ],
    "c": 0,
    "e": "Solidaritätsprinzip: Leistungen nach Bedarf, nicht nach Beitragshöhe (Kranken-, Pflegeversicherung). Äquivalenzprinzip: Leistung richtet sich nach den gezahlten Beiträgen (Renten-, teils Arbeitslosenversicherung). Die Beitragsbemessungsgrenze deckelt die Beiträge.",
    "k": "Sozialversicherung",
    "s": "LF1 2.4.1"
   },
   {
    "tg": 4,
    "g": "altersvorsorge",
    "src": "IZ Übung/74",
    "t": "mc",
    "q": "Zu welcher Schicht des Drei-Schichten-Modells der Altersvorsorge gehört die Riester-Rente?",
    "a": [
     "zur 2. Schicht (Zusatzversorgung)",
     "zur 1. Schicht (Basisversorgung)",
     "zur 3. Schicht (private Versorgung)",
     "zu keiner Schicht, sie ist Teil der gesetzlichen Rente",
     "zur Pflegeversicherung"
    ],
    "c": 0,
    "e": "1. Schicht: gesetzliche Rente, Versorgungswerke, Basisrente. 2. Schicht: betriebliche Altersvorsorge und Riester-Rente. 3. Schicht: private Vorsorge wie Lebensversicherung, Fonds oder Immobilien.",
    "k": "Sozialversicherung",
    "s": "LF1 2.4.3"
   },
   {
    "tg": 4,
    "g": "brandfall-verhalten",
    "src": "IZ Übung/75",
    "t": "mc",
    "q": "Im Nachbarbüro brennt ein Papierkorb, eine gehbehinderte Kollegin sitzt noch im Raum. Was hat nach dem Absetzen der Brandmeldung Vorrang?",
    "a": [
     "die Kollegin in Sicherheit bringen – Menschenrettung geht vor Brandbekämpfung",
     "zuerst den Brand selbst löschen",
     "die Unterlagen vom Schreibtisch retten",
     "den Aufzug rufen, um schneller nach unten zu kommen",
     "die Fenster öffnen, damit der Rauch abzieht"
    ],
    "c": 0,
    "e": "Abwehrender Brandschutz laut Buch: Brand melden, Hilfsbedürftige in Sicherheit bringen (Menschenrettung vor Brandbekämpfung), Räume verlassen, keine Aufzüge benutzen, Fenster und Türen schließen, Vollzähligkeit prüfen, kleinere Brände selbst löschen, Feuerwehr einweisen.",
    "k": "Arbeitsschutz",
    "s": "LF1 3.3"
   },
   {
    "tg": 4,
    "g": "pdca",
    "src": "IZ Übung/76",
    "t": "order",
    "q": "Umweltmanagementsysteme verbessern sich kontinuierlich nach dem PDCA-Zyklus. Bringen Sie die Phasen in die richtige Reihenfolge.",
    "items": [
     "Plan: Ziele und Prozesse festlegen",
     "Do: Maßnahmen durchführen",
     "Check: Ergebnisse überwachen, Abweichungen feststellen",
     "Act: Maßnahmen anpassen und optimieren"
    ],
    "e": "Der PDCA-Zyklus ist die Grundlage des kontinuierlichen Verbesserungsprozesses, z. B. im EU-Öko-Audit EMAS. Nach „Act“ beginnt der Zyklus erneut.",
    "k": "Umweltschutz",
    "s": "LF1 3.4"
   },
   {
    "tg": 4,
    "g": "entgeltfortzahlung",
    "src": "IZ Übung/77",
    "t": "mc",
    "q": "Ein Agent ist wegen derselben Erkrankung arbeitsunfähig. Wie lange zahlt der Arbeitgeber das Entgelt nach dem Entgeltfortzahlungsgesetz weiter?",
    "a": [
     "bis zu sechs Wochen",
     "bis zu drei Tagen",
     "bis zu drei Monaten",
     "unbegrenzt",
     "gar nicht – ab dem ersten Tag zahlt die Krankenkasse"
    ],
    "c": 0,
    "e": "Bei Arbeitsunfähigkeit durch Krankheit zahlt der Arbeitgeber bis zu sechs Wochen weiter; danach zahlt die Krankenkasse Krankengeld (ergänzt).",
    "k": "Schutzgesetze",
    "s": "LF1 2.2.4"
   },
   {
    "tg": 4,
    "g": "arbzg-nacht",
    "src": "IZ Übung/78",
    "t": "mc",
    "q": "Welcher Zeitraum ist nach dem Arbeitszeitgesetz Nachtzeit?",
    "a": [
     "23 bis 6 Uhr",
     "20 bis 6 Uhr",
     "22 bis 5 Uhr",
     "0 bis 8 Uhr",
     "18 bis 6 Uhr"
    ],
    "c": 0,
    "e": "§ 2 ArbZG: Nachtzeit ist die Zeit von 23 bis 6 Uhr; Nachtarbeit liegt vor, wenn mehr als zwei Stunden der Nachtzeit umfasst sind. Nicht verwechseln mit dem JArbSchG: Jugendliche dürfen nur zwischen 6 und 20 Uhr beschäftigt werden.",
    "k": "Schutzgesetze",
    "s": "LF1 2.2.2"
   },
   {
    "tg": 4,
    "g": "jav-wahl",
    "src": "IZ Übung/79",
    "t": "mc",
    "q": "Unter welcher Voraussetzung wird in einem Betrieb mit Betriebsrat eine Jugend- und Auszubildendenvertretung (JAV) gewählt?",
    "a": [
     "wenn in der Regel mindestens fünf Arbeitnehmer unter 18 Jahren oder Auszubildende unter 25 Jahren beschäftigt sind",
     "wenn mindestens 20 Auszubildende beschäftigt sind",
     "nur wenn die IHK dies anordnet",
     "nur in Betrieben mit mehr als 500 Beschäftigten",
     "wenn die Geschäftsleitung zustimmt"
    ],
    "c": 0,
    "e": "Das Buch nennt die Grenze von fünf jugendlichen bzw. auszubildenden Beschäftigten; die Altersgrenzen (unter 18 bzw. Auszubildende unter 25) sind ergänzt aus § 60 BetrVG. Die JAV überwacht u. a. die Einhaltung der Schutzvorschriften für Jugendliche und Auszubildende.",
    "k": "Mitbestimmung",
    "s": "LF1 2.3.2"
   }
  ]
 }
];
