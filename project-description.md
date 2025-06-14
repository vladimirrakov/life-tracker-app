# M322 Benutzerschnittstellen entwerfen und implementieren

## Portfolio
Vladimir Rakov, INFW2024a
Version 1 12.05.2025

## Inhaltsverzeichnis
1. [Einführung](#1-einführung)
   1. [Auftraggeber](#11-auftraggeber)
   2. [Thema des Fallbeispiels](#12-thema-des-fallbeispiels)
   3. [Zielplattform](#13-zielplattform)
   4. [Nutzeranalyse](#14-nutzeranalyse)
   5. [Demografische Merkmale der Zielgruppe](#15-demografische-merkmale-der-zielgruppe)
   6. [Psychografische Merkmale](#16-psychografische-merkmale)
2. [Persona](#2-persona)
   1. [Persona 1](#21-persona-1)
   2. [Persona 2](#22-persona-2)
3. [Anforderungen für Vorhaben / Produkt](#3-anforderungen-für-vorhaben--produkt)
4. [Vorkonzepte](#4-vorkonzepte)
   1. [Farbkonzept](#41-farbkonzept)
   2. [Begründung Farbkonzept](#42-begründung-farbkonzept)
   3. [Schriftarten](#43-schriftarten)
   4. [Begründung Schriftarten](#44-begründung-schriftarten)
   5. [Logo](#45-logo)
   6. [Begründung Logo](#46-begründung-logo)
5. [Mockups und Storyboard](#5-mockups-und-storyboard)

## Versionen dieses Dokumentes
| Name | Abgegeben am |
|------|--------------|
| Version 1 | 12.05.2025 |

## 1 Einführung

### 1.1 Auftraggeber
Die MedTech Solutions AG mit Sitz in Zürich ist der Auftraggeber für die Life Tracker App. Das 2017 gegründete Unternehmen hat sich auf die Entwicklung digitaler Gesundheitslösungen spezialisiert und beschäftigt mittlerweile 85 Mitarbeiter. Mit einem jährlichen Umsatz von 12 Millionen CHF gehört das Unternehmen zu den mittelständischen Playern im Schweizer Digital-Health-Sektor, konnte jedoch in den letzten drei Jahren einen beachtlichen Marktanteil von 18% im Bereich der Gesundheits-Apps aufbauen.

### 1.2 Thema des Fallbeispiels
Die Life Tracker App dient als digitales Tagebuch und Analysewerkzeug, das Menschen hilft, ihre Gesundheit ganzheitlich zu betrachten und zu optimieren. Das zentrale Ziel für den Nutzer ist das Erkennen von Mustern in seinem Lebensstil und deren Auswirkungen auf sein Wohlbefinden.

Der typische Ablauf beginnt mit der täglichen Erfassung verschiedener Lebensindikatoren durch den Nutzer. Dazu gehören:
- Körperliche Messungen (Gewicht, Blutdruck, Herzfrequenz, Schlafqualität)
- Ernährungsdaten (Mahlzeiten, Kalorienaufnahme, Wasserzufuhr)
- Aktivitätsdaten (Sport, Bewegung im Alltag)
- Stimmung und mentale Verfassung
- Umgebungsfaktoren (Wetter, Luftqualität)

Die App ergänzt diese Daten automatisch mit externen Faktoren wie aktuellen Wetterbedingungen. Ärzte oder Gesundheitscoaches, denen der Nutzer Zugang gewährt hat, können die Einträge einsehen und kommentieren, wodurch ein medizinisches Feedback-System entsteht.

Im Nutzungsumfeld wird die App vorwiegend im privaten Bereich verwendet, sowohl zu Hause als auch unterwegs. Die Hauptaufgabe des Produkts ist es, dem Nutzer durch Datenvisualisierung und KI-gestützte Analysen Zusammenhänge zwischen Verhaltensweisen und Wohlbefinden aufzuzeigen. Langfristig soll die App dabei helfen, gesündere Gewohnheiten zu etablieren und die Lebensqualität zu verbessern.

### 1.3 Zielplattform
Mobile Applikation (Android oder iOS).

### 1.4 Nutzeranalyse
Die Kunden von MedTech Solutions AG sind primär Privatpersonen, Ärzte, Gesundheitscoaches sowie kleinere und mittlere Gesundheitseinrichtungen.

Das Unternehmen strebt an, durch innovative digitale Lösungen die Selbstverantwortung der Menschen für ihre Gesundheit zu stärken und gleichzeitig die Kommunikation mit Gesundheitsexperten zu erleichtern.

Wirtschaftlich verfolgt MedTech Solutions das Ziel, bis 2027 den Umsatz auf 25 Millionen CHF zu steigern und den Marktanteil auf 30% auszubauen, wobei der Fokus auf dem DACH-Raum liegt.

### 1.5 Demografische Merkmale der Zielgruppe

| Merkmal | Beschreibung |
|---------|-------------|
| Alter | Hauptzielgruppe 25-55 Jahre, mit Schwerpunkt auf der Altersgruppe 30-45 Jahre |
| Geschlecht | Ausgeglichen, leicht höherer Anteil an weiblichen Nutzern (55%) |
| Einkommensniveau | Mittleres bis hohes Einkommen, durchschnittlich 65.000-120.000 CHF jährlich |
| Bildungsstand | Überwiegend Hochschulabschluss oder höhere Berufsbildung |
| Wohnsituation | Urban bis suburban, überwiegend in Städten oder stadtnahen Gebieten |
| Beruflicher Status | Fachkräfte, Führungskräfte, Selbstständige, Angestellte im Gesundheitswesen |

### 1.6 Psychografische Merkmale
Die typischen Nutzer der Life Tracker App sind gesundheitsbewusste Personen, die proaktiv ihre Gesundheit verbessern möchten. Sie haben ein grundlegendes Verständnis für digitale Technologien und nutzen regelmäßig Smartphones und Apps. Ihre Interessen umfassen häufig Gesundheit, Fitness, Ernährung und persönliche Entwicklung.

Diese Zielgruppe legt Wert auf Effizienz und datenbasierte Entscheidungen. Sie sind bereit, Zeit in die Selbstoptimierung zu investieren und schätzen wissenschaftlich fundierte Ansätze. Viele haben bereits Erfahrungen mit anderen Gesundheits-Apps oder Fitness-Trackern gemacht, suchen aber nach einer umfassenderen Lösung, die verschiedene Lebensbereiche integriert.

Besonders angesprochen werden Personen mit spezifischen gesundheitlichen Anliegen oder chronischen Erkrankungen, die ihre Gesundheit engmaschig überwachen müssen, sowie präventiv orientierte Menschen, die ihre Lebensgewohnheiten optimieren möchten.

## 2 Persona

### 2.1 Persona 1
**Name, Alter, Beruf:** Thomas Weber, 38, Projektmanager

**Endgerät:** Hauptsächlich iPhone 13 Pro für tägliche Eingaben, zusätzlich MacBook Air für ausführlichere Wochenanalysen.

**Nutzungszeit:** Morgens (6:30-7:00 Uhr) zur Planung des Tages und abends (22:00-22:30 Uhr) zur Reflexion.

**Nutzungsdauer:** Durchschnittlich 15 Minuten täglich, am Wochenende bis zu 30 Minuten für tiefergehende Analysen.

**Zweck der Nutzung:** Überwachung der Work-Life-Balance und Stresslevels, da er unter gelegentlichen Schlafstörungen und leichtem Bluthochdruck leidet.

**Erfahrungen mit ähnlichen Produkten:** Hat zuvor Fitbit und Apple Health genutzt, vermisste jedoch die ganzheitliche Betrachtung und Korrelationsanalysen verschiedener Gesundheitsparameter.

**Familiäre Situation:** Verheiratet, zwei Kinder (7 und 10 Jahre), wodurch zusätzlicher Zeitdruck und Verantwortung entsteht.

**Gesundheitsziele:** Reduktion des Körpergewichts um 5 kg, Verbesserung der Schlafqualität und Senkung des Blutdrucks ohne Medikamente.

**Herausforderungen:** Findet selten Zeit für regelmäßigen Sport durch berufliche Termine und familiäre Verpflichtungen.

**Ernährungsverhalten:** Isst häufig geschäftlich auswärts, versucht bewusst auf ausgewogene Ernährung zu achten.

**Motivation:** Will präventiv handeln, da sein Vater früh an Herzinfarkt erkrankte.

### 2.2 Persona 2
**Name, Alter, Beruf:** Sabine Müller, 42, Gymnasiallehrerin

**Endgerät:** Samsung Galaxy S22 für tägliche Eingaben, Samsung Galaxy Tab für ausführlichere Auswertungen.

**Nutzungszeit:** Morgens (7:00-7:30 Uhr) und nachmittags nach der Schule (16:00-16:30 Uhr).

**Nutzungsdauer:** 20-25 Minuten täglich, verteilt auf mehrere kurze Sessions zwischen beruflichen Verpflichtungen.

**Zweck der Nutzung:** Management einer leichten Hypothyreose und chronischer Migräne; Erfassung von Symptomen und deren Korrelation mit Ernährung, Aktivität und Stresslevel.

**Erfahrungen mit ähnlichen Produkten:** Nutzte bisher verschiedene spezialisierte Apps (Kopfschmerztagebuch, Ernährungstracker), wünscht sich jedoch eine integrierte Lösung zur Erkennung von Zusammenhängen.

**Technische Affinität:** Mittleres Niveau, bevorzugt intuitive Interfaces ohne lange Einarbeitungszeit.

**Präferenzen zur Datenvisualisierung:** Bevorzugt klare, übersichtliche Grafiken, die Trends auf einen Blick erkennbar machen.

**Sozialer Aspekt:** Möchte Daten mit ihrer Endokrinologin und Neurologin teilen können, um Behandlungsansätze zu optimieren.

**Zeitmanagement:** Stark strukturierter Alltag durch Schulrhythmus, hohe Regelmäßigkeit bei der App-Nutzung möglich.

**Datenschutzbedenken:** Sehr hohe Sensibilität bezüglich der Vertraulichkeit gesundheitsbezogener Daten.

## 3 Anforderungen für Vorhaben / Produkt

**Intuitive Dateneingabe mit maximal drei Klicks pro Eintragskategorie**
- Typ: Funktional
- Priorität: Hoch
- Begründung: Zeitdruck ist der häufigste Grund für Abbruch regelmäßiger App-Nutzung. Die Zielgruppe besteht aus beruflich stark eingebundenen Personen, die effiziente Prozesse benötigen, um die App dauerhaft zu nutzen.

**Automatische Datenintegration mit gängigen Wearables und Smart-Home-Geräten**
- Typ: Funktional
- Priorität: Mittel
- Begründung: Reduziert manuelle Eingaben und erhöht Datengenauigkeit. Die Zielgruppe nutzt bereits häufig Smart-Watches oder Fitness-Tracker, deren Daten ohne Zusatzaufwand integriert werden sollten.

**KI-basierte Korrelationsanalyse zwischen Gesundheitsparametern und Lebensstil**
- Typ: Funktional
- Priorität: Hoch
- Begründung: Stellt das zentrale Alleinstellungsmerkmal der App dar und adressiert direkt das Hauptbedürfnis der Zielgruppe nach Mustererkennung.

**Ende-zu-Ende-Verschlüsselung aller persönlichen Gesundheitsdaten**
- Typ: Nicht-funktional
- Priorität: Hoch
- Begründung: Gesundheitsdaten sind hochsensibel und unterliegen strengen Datenschutzanforderungen. Die bildungsstarke Zielgruppe ist besonders sensibilisiert für Datenschutzaspekte.

**Offline-Funktionalität mit automatischer Synchronisation bei Wiederverbindung**
- Typ: Funktional
- Priorität: Niedrig
- Begründung: Ermöglicht Nutzung auch bei schlechter Internetverbindung, was besonders für Nutzer auf Reisen oder in ländlichen Gebieten relevant ist.

**Barrierefreies Design**
- Typ: Nicht-funktional
- Priorität: Mittel
- Begründung: Sichert Zugänglichkeit für alle potenziellen Nutzer, insbesondere auch für ältere Nutzer innerhalb der Zielgruppe (45-55 Jahre) und Personen mit Einschränkungen.

## 4 Vorkonzepte

### 4.1 Farbkonzept
Das im Mock-up umgesetzte Farbkonzept umfasst folgende Farben:

1. Primärfarbe: #3A7CA5 (Tiefes Blau) - Verwendet für Header-Elemente, Navigation, Buttons und wichtige Überschriften
2. Sekundärfarbe: #16C172 (Frisches Grün) - Eingesetzt für Erfolgsmeldungen, aktivierte Switches und positive Indikatoren
3. Hintergrundfarbe: #F2F2F2 (Helles Grau) - Bildet die Grundlage der App und dient als neutraler Hintergrund
4. Akzentfarbe 1: #D81E5B (Gedämpftes Rot) - Für Fehlermeldungen und negative Stimmungsindikatoren
5. Akzentfarbe 2: #FFC857 (Warmes Gelb) - Für Hinweise, neutrale Stimmung und mittlere Wertebereiche
6. Ergänzungsfarben:
   - #FFFFFF (Weiß) - Für Karten, Formulare und Kontrastbereiche
   - #333333 (Dunkelgrau) - Für Texte und Icons

### 4.2 Begründung Farbkonzept
Das Farbkonzept folgt einer wohlüberlegten psychologischen und funktionalen Logik:

Das tiefe Blau als Primärfarbe strahlt Vertrauen, Professionalität und Zuverlässigkeit aus – essenzielle Eigenschaften für eine App, die mit sensiblen Gesundheitsdaten arbeitet. Diese Farbe schafft eine beruhigende Atmosphäre und signalisiert gleichzeitig medizinische Kompetenz.

Das frische Grün als Sekundärfarbe symbolisiert Gesundheit, Wachstum und Vitalität. Es unterstützt das zentrale Versprechen der App, die Gesundheit zu verbessern, und dient als positive Verstärkung bei erfolgreichen Eingaben oder erreichten Zielen.

Die neutrale Hintergrundfarbe (helles Grau) reduziert die visuelle Belastung bei längerer Nutzung und lässt die Inhalte in den Vordergrund treten. Dies ist besonders wichtig für eine App, die täglich und über längere Zeiträume verwendet wird.

Die Akzentfarben Rot und Gelb folgen intuitiven Farbcodes: Rot signalisiert Vorsicht oder negative Entwicklungen, während Gelb als Warnfarbe mittlere Zustände markiert. Die Farbpalette ermöglicht so eine schnelle visuelle Einordnung von Gesundheitsdaten ohne zusätzliche Erklärungen.

Das Weiß für Kartenhintergründe schafft klare visuelle Abgrenzungen zwischen Sektionen und erhöht die Lesbarkeit der Eingabefelder. Die gesamte Farbpalette erfüllt zudem die Anforderungen an Barrierefreiheit mit ausreichenden Kontrastverhältnissen.

### 4.3 Schriftarten
Im Mock-up werden zwei Schriftarten verwendet:

1. Montserrat - Eingesetzt für Überschriften, Buttons und Navigationselemente
2. Source Sans Pro - Verwendet für Fließtext, Formulareingaben und Beschreibungen

### 4.4 Begründung Schriftarten
Die Auswahl der Schriftarten vereint funktionale und ästhetische Überlegungen:

Montserrat als geometrische Sans-Serif-Schrift für Überschriften und interaktive Elemente vermittelt Modernität und technische Präzision. Ihre klaren, offenen Formen und die gute Unterscheidbarkeit der Zeichen gewährleisten optimale Lesbarkeit auch bei kleineren Größen auf mobilen Geräten. Die verschiedenen Schriftstärken ermöglichen eine klare visuelle Hierarchie innerhalb der App.

Source Sans Pro wurde speziell für digitale Interfaces entwickelt und ist ideal für Fließtexte und Eingabefelder. Sie bietet eine exzellente Lesbarkeit bei verschiedenen Bildschirmgrößen und Auflösungen, was besonders wichtig für eine Gesundheits-App ist, die auch von Nutzern mit Sehschwächen verwendet werden könnte. Ihr neutraler, freundlicher Charakter schafft eine einladende Atmosphäre und ermöglicht längere Leseperioden ohne Ermüdung.

Die Kombination beider Schriftarten erzeugt eine harmonische Balance zwischen professionellem Auftreten und Zugänglichkeit. Beide Schriftfamilien verfügen über umfangreiche Zeichensätze und Gewichtungsvarianten, was Konsistenz über verschiedene Sprachen und Anwendungsfälle hinweg sicherstellt. Als webkompatible Schriften gewährleisten sie zudem schnelle Ladezeiten und korrekte Darstellung auf allen Geräten.

### 4.5 Logo
Das Logo der Life Tracker App besteht aus zwei Hauptelementen:

1. Einem kreisförmigen Symbol mit einem stilisierten Plus-Zeichen im Inneren
2. Dem Schriftzug "Life Tracker" in der Schriftart Montserrat Bold

Das Symbol verwendet die Primärfarbe (#3A7CA5) für den Kreis und die Sekundärfarbe (#16C172) für das Plus-Zeichen. Die Kombination aus Kreis und Plus ist minimalistisch gestaltet mit klaren, einfachen Linien.

### 4.6 Begründung Logo
Das Logo vereint mehrere symbolische Elemente, die perfekt zur Funktion und zum Zweck der App passen:

Der Kreis symbolisiert Ganzheitlichkeit, Kontinuität und den Lebenszyklus – zentrale Konzepte einer App, die das gesamte Wohlbefinden trackt und verbessert. Die runde Form vermittelt zudem Harmonie und Balance, was die ganzheitliche Gesundheitsphilosophie der App unterstreicht.

Das Plus-Zeichen im Inneren hat eine mehrfache Bedeutung: Es steht offensichtlich für Gesundheit und medizinische Versorgung (wie bei einem Erste-Hilfe-Symbol), signalisiert aber auch die positive Wirkung der App und die Möglichkeit, neue Einträge hinzuzufügen – eine Kernfunktion der Anwendung.

Die Verwendung der Primär- und Sekundärfarben im Logo schafft visuelle Konsistenz mit dem Gesamtdesign der App und verstärkt die Markenidentität. Die schlichte, moderne Gestaltung des Logos sorgt für gute Erkennbarkeit auch bei kleinen Darstellungsgrößen auf mobilen Geräten und ermöglicht vielseitige Anwendung in verschiedenen Kontexten.

Der Schriftzug "Life Tracker" in Montserrat Bold ergänzt das Symbol perfekt und kommuniziert klar den Zweck der App. Die Verwendung der gleichen Schriftart wie für Überschriften in der App schafft eine kohärente visuelle Identität.

## 5 Mockups und Storyboard
Die Mockups der Seiten sind in der Datei **"app-web-v1.html"** in diesem Projektordner vefügbar.