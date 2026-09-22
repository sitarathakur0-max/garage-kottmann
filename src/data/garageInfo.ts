import { ServiceItem, ProcessStep, MaintenanceTip, FaqItem, WorkshopValue } from '../types';

export const BUSINESS_INFO = {
  name: 'Garage Kottmann',
  tagline: 'Ihre zuverlässige Autowerkstatt in Zürich',
  category: 'Auto Garage & Fahrzeugservice',
  description: 'Lokale Autowerkstatt an der Regensbergstrasse 244 in Zürich für fachmännische Reparaturen, Service, Bremsen und Diagnose.',
  address: {
    street: 'Regensbergstrasse 244',
    postalCode: '8050',
    city: 'Zürich',
    district: 'Zürich-Oerlikon / Zürich Nord',
    country: 'Schweiz',
    fullFormatted: 'Regensbergstrasse 244, 8050 Zürich',
    directionsHint: 'Gut erreichbar an der Regensbergstrasse im Zürcher Norden (Kreis 11). Park- und Anhaltebereiche direkt vor der Werkstatt vorhanden.',
    publicTransportHint: 'In unmittelbarer Nähe zu den Haltestellen im Quartier Oerlikon / Seebach / Affoltern.'
  },
  contact: {
    phoneDisplay: '044 311 58 57',
    phoneTel: 'tel:0443115857',
    phoneInternational: '+41 44 311 58 57',
    contactNotice: 'Für Termine und Werkstattanfragen erreichen Sie uns telefonisch oder über das Kontaktformular.'
  },
  meta: {
    establishedArea: 'Zürich',
    postalCode: '8050',
    focus: 'Reparaturen aller gängigen Personenwagen & leichte Nutzfahrzeuge'
  }
};

export const WORKSHOP_SERVICES: ServiceItem[] = [
  {
    id: 'wartung-service',
    title: 'Service & Inspektion',
    category: 'wartung',
    categoryLabel: 'Wartung',
    shortDescription: 'Regelmässige Inspektion und Wartungsarbeiten nach Herstellervorgaben für Langlebigkeit und Zuverlässigkeit Ihres Fahrzeugs.',
    fullDescription: 'Ein sorgfältiger Service schützt vor unerwarteten Pannen und erhält den Wert Ihres Wagens. Wir führen Wartungsarbeiten gemäss Herstellerangaben durch, inklusive Austausch von Motorenöl, Ölfilter, Pollen- und Luftfilter sowie der Prüfung aller relevanten Flüssigkeitsstände.',
    iconName: 'Wrench',
    checklist: [
      'Motorenöl- und Filterwechsel',
      'Kontrolle von Kühl-, Brems- und Scheibenwischwasser',
      'Prüfung von Beleuchtungs- und Signaleinrichtungen',
      'Sichtprüfung von Unterboden, Manschetten und Schläuchen',
      'Zurücksetzen der Serviceintervall-Anzeige'
    ],
    practicalNote: 'Regelmässige Wartungsintervalle verhindern teure Folgeschäden an Motor und Nebenaggregaten.'
  },
  {
    id: 'diagnose-elektronik',
    title: 'Fehlerdiagnose & Motorelektronik',
    category: 'diagnose',
    categoryLabel: 'Diagnose',
    shortDescription: 'Präzise Auslesung von Fehlerspeichern und gezielte Lokalisierung bei aufleuchtenden Kontrolllampen oder unruhigem Motorlauf.',
    fullDescription: 'Moderne Fahrzeuge verfügen über komplexe elektronische Steuergeräte. Bei Fehlermeldungen, Notlaufprogrammen oder unerklärlichen Symptomen nutzen wir Diagnosewerkzeuge, um die Ursache im Motorsteuergerät, ABS/ESP oder Sensorsystem exakt zu bestimmen.',
    iconName: 'Cpu',
    checklist: [
      'Auslesen und Löschen des OBD-Fehlerspeichers',
      'Prüfung von Sensoren (z. B. Lambdasonden, Raddrehzahl, Luftmassenmesser)',
      'Analyse von Zündsystem und Einspritzkomponenten',
      'Messung von Bordnetzspannung und Ruhestrom'
    ],
    practicalNote: 'Eine frühzeitige Abklärung bei leuchtender Motorkontrollleuchte schützt Katalysator und Motorinnenteile.'
  },
  {
    id: 'bremsen-sicherheit',
    title: 'Bremsenservice & Fahrsicherheit',
    category: 'sicherheit',
    categoryLabel: 'Sicherheit',
    shortDescription: 'Kontrolle, Wartung und fachgerechter Austausch von Bremsscheiben, Bremsbelägen und Bremsflüssigkeit.',
    fullDescription: 'Die Bremsanlage ist das sicherheitsrelevanteste System Ihres Autos. Wir überprüfen Scheiben, Beläge, Bremsleitungen und Sättel auf Verschleiss, Rissbildung oder Korrosion und setzen das System fachmännisch instand.',
    iconName: 'ShieldAlert',
    checklist: [
      'Messung der Mindestdicke von Bremsscheiben und Belägen',
      'Überprüfung des Siedepunkts der Bremsflüssigkeit',
      'Dichtigkeitsprüfung von Bremsschläuchen und Leitungen',
      'Gangbarmachen und Reinigung von Bremssätteln und Führungen'
    ],
    practicalNote: 'Verschleiss macht sich oft durch Schleifgeräusche, Flattern im Bremspedal oder verlängerte Bremswege bemerkbar.'
  },
  {
    id: 'mfk-vorbereitung',
    title: 'MFK-Vorbereitung (Motorfahrzeugkontrolle)',
    category: 'sicherheit',
    categoryLabel: 'Sicherheit',
    shortDescription: 'Gründlicher Vorab-Check aller prüfungsrelevanten Punkte vor dem offiziellen Prüftermin beim Strassenverkehrsamt.',
    fullDescription: 'Vor der amtlichen Motorfahrzeugkontrolle (MFK) prüfen wir Ihr Fahrzeug auf Herz und Nieren. Festgestellte Mängel sprechen wir vorab mit Ihnen ab und beheben diese, damit die Prüfung ohne Überraschungen bestanden werden kann.',
    iconName: 'FileCheck',
    checklist: [
      'Lichteinstellung und Leuchtweitenregulierung',
      'Fahrwerks- und Gelenkspielprüfung (Spurstangen, Traggelenke, Stossdämpfer)',
      'Bremswirkung und Gleichmässigkeit',
      'Unterboden- und Rostkontrolle',
      'Abgaskontrolle und Auspuffdichtheit'
    ],
    practicalNote: 'Eine gute Vorbereitung spart Gebühren und den Zeitaufwand für Nachprüfungen beim Strassenverkehrsamt.'
  },
  {
    id: 'reifen-raeder',
    title: 'Reifenservice & Radwechsel',
    category: 'wartung',
    categoryLabel: 'Wartung',
    shortDescription: 'Fachgerechter saisonaler Radwechsel, Prüfung von Profiltiefe, Alterszustand und korrektem Luftdruck.',
    fullDescription: 'Reifen stellen den einzigen Kontakt zwischen Fahrzeug und Strasse her. Wir führen den saisonalen Wechsel zwischen Sommer- und Winterrädern durch, kontrollieren die Profiltiefe, das Ablaufbild sowie den Zustand der Ventile.',
    iconName: 'Disc',
    checklist: [
      'Radwechsel mit vorgeschriebenem Drehmoment',
      'Prüfung der gesetzlichen Mindestprofiltiefe und des Laufbildes',
      'Sichtkontrolle auf Risse, Fremdkörper und Reifenalter',
      'Optimierung des Reifenfülldrucks für sicheres Fahrverhalten'
    ],
    practicalNote: 'Ungleichmässig abgefahrene Reifen deuten häufig auf eine verstellte Achsgeometrie oder fehlerhaften Reifendruck hin.'
  },
  {
    id: 'fahrwerk-lenkung',
    title: 'Fahrwerk, Stossdämpfer & Lenkung',
    category: 'mechanik',
    categoryLabel: 'Mechanik',
    shortDescription: 'Instandstellung von Querlenkern, Stoßdämpfern, Federung und Lenkungskomponenten für stabiles Fahrverhalten.',
    fullDescription: 'Schlaglöcher und Bordsteinkanten belasten das Fahrwerk kontinuierlich. Poltern, schwammiges Lenkverhalten oder unruhige Strassenlage prüfen wir gründlich und tauschen ausgeschlagene Komponenten fachgerecht aus.',
    iconName: 'Sliders',
    checklist: [
      'Überprüfung von Stossdämpfern auf Dichtigkeit und Dämpfwirkung',
      'Kontrolle von Querlenkerbuchsen, Koppelstangen und Stabilisatoren',
      'Prüfung des Lenkungsspiels und der Servounterstützung',
      'Kontrolle der Achsmanschetten gegen Fettaustritt'
    ],
    practicalNote: 'Ein intaktes Fahrwerk verkürzt Bremswege und sorgt für zuverlässige Spurtreue in Kurven.'
  },
  {
    id: 'auspuff-abgas',
    title: 'Auspuffanlage & Abgasreinigung',
    category: 'mechanik',
    categoryLabel: 'Mechanik',
    shortDescription: 'Reparatur und Instandsetzung von Schalldämpfern, Katalysatoren, Partikelfiltern und Rohrverbindungen.',
    fullDescription: 'Dröhnen, Klappern oder Abgasgeruch weisen oft auf undichte oder gerissene Auspuffteile hin. Wir lokalisieren Undichtigkeiten, ersetzen defekte Schalldämpfer oder Halterungen und stellen die einwandfreie Funktion sicher.',
    iconName: 'Flame',
    checklist: [
      'Lokalisation von Rissen und Rostlöchern am Abgasstrang',
      'Austausch von defekten Rohrstücken, Schellen oder Endtöpfen',
      'Überprüfung der Aufhängegummis und Schwingungsdämpfer',
      'Kontrolle von Katalysator und Partikelfiltersystem'
    ],
    practicalNote: 'Dichte Abgasanlagen schützen die Insassen vor giftigen Gasen und gewährleisten zulässige Emissionswerte.'
  },
  {
    id: 'batterie-elektrik',
    title: 'Batterie & Bordelektrik',
    category: 'mechanik',
    categoryLabel: 'Mechanik',
    shortDescription: 'Testen der Starterbatterie, Überprüfung der Lichtmaschine und Behebung von Kontakt- und Anlassproblemen.',
    fullDescription: 'Eine schwächelnde Autobatterie ist eine der häufigsten Pannenursachen. Wir testen den Ladezustand und die Kaltstartleistung des Akkus, prüfen die Ladespannung des Alternators und tauschen ermüdete Batterien aus.',
    iconName: 'BatteryCharging',
    checklist: [
      'Messung der Batteriespannung und des Innenwiderstands',
      'Belastungstest der Starterbatterie',
      'Prüfung der Generator-Ladespannung (Lichtmaschine)',
      'Reinigung und Konservierung der Polklemmen'
    ],
    practicalNote: 'Insbesondere vor dem Wintereinbruch empfiehlt sich ein präventiver Batterietest.'
  }
];

export const WORKSHOP_PROCESS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Kontaktaufnahme & Terminabsprache',
    description: 'Rufen Sie uns direkt an oder senden Sie Ihre Anfrage über das Kontaktformular mit Fahrzeugangaben.',
    detail: 'Wir erfassen Ihre Anliegen, klären die Symptome und vereinbaren einen passenden Termin zur Begutachtung.',
    iconName: 'PhoneCall'
  },
  {
    stepNumber: '02',
    title: 'Sichtprüfung & Diagnose vor Ort',
    description: 'Ihr Fahrzeug wird in unserer Werkstatt an der Regensbergstrasse 244 sorgfältig in Augenschein genommen.',
    detail: 'Auf der Hebebühne und bei Bedarf mit Diagnosegeräten ermitteln wir den genauen Instandsetzungsbedarf.',
    iconName: 'Search'
  },
  {
    stepNumber: '03',
    title: 'Transparente Absprache der Arbeiten',
    description: 'Bevor wir mit den Arbeiten beginnen, besprechen wir den Befund verständlich und nachvollziehbar mit Ihnen.',
    detail: 'Keine versteckten Massnahmen: Sie wissen genau, welche Teile repariert oder ausgetauscht werden.',
    iconName: 'MessageSquareText'
  },
  {
    stepNumber: '04',
    title: 'Fachgerechte Reparatur & Probefahrt',
    description: 'Sorgfältige Ausführung aller mechanischen Arbeiten nach bewährten Werkstattstandards.',
    detail: 'Nach Abschluss erfolgt eine abschliessende Funktionsprüfung, damit Sie wieder sicher unterwegs sind.',
    iconName: 'CheckCircle2'
  }
];

export const WORKSHOP_VALUES: WorkshopValue[] = [
  {
    title: 'Direkter Werkstattkontakt',
    description: 'Sprechen Sie direkt mit den Fachleuten, die Ihr Fahrzeug begutachten und reparieren – ohne bürokratische Umwege.',
    iconName: 'Users'
  },
  {
    title: 'Fundierte Fehlersuche',
    description: 'Statt auf Verdacht Teile zu tauschen, gehen wir der wahren Ursache mit Geduld und Prüfmethodik auf den Grund.',
    iconName: 'Compass'
  },
  {
    title: 'Ehrliche & pragmatische Beratung',
    description: 'Wir erklären Ihnen genau, was sofort nötig ist und was zu einem späteren Zeitpunkt beobachtet werden kann.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Standort Zürich-Nord',
    description: 'Zentral gelegen an der Regensbergstrasse 244 in 8050 Zürich – gut angebunden für Quartier und Umgebung.',
    iconName: 'MapPin'
  }
];

export const MAINTENANCE_TIPS: MaintenanceTip[] = [
  {
    id: 'reifendruck',
    title: 'Reifenfülldruck & Profiltiefe regelmässig prüfen',
    description: 'Ein falscher Reifendruck führt zu ungleichmässigem Abrieb, höherem Kraftstoffverbrauch und verlängerten Bremswegen bei Nässe.',
    indicator: 'Empfehlung: Mindestens einmal im Monat bei kalten Reifen kontrollieren.',
    recommendation: 'Achten Sie auch auf die Profiltiefe: Bei Winterreifen wird für optimale Traktion mindestens 4 mm empfohlen.'
  },
  {
    id: 'oelstand',
    title: 'Motorenölstand im Auge behalten',
    description: 'Zu wenig Schmiermittel verursacht erhöhten Reibungsverschleiss und kann zu gravierenden Motorschäden führen.',
    indicator: 'Hinweis: Bei jedem zweiten Tankstopp auf ebenem Untergrund prüfen.',
    recommendation: 'Verwenden Sie ausschliesslich Motorenöl mit den für Ihren Motortyp vorgeschriebenen Spezifikationen.'
  },
  {
    id: 'bremsenkontrolle',
    title: 'Ungewöhnliche Geräusche beim Bremsen beachten',
    description: 'Quietschen, metallisches Schleifen oder ein pulsierendes Bremspedal sind deutliche Warnsignale.',
    indicator: 'Signal: Schleifendes Geräusch deutet auf abgenutzte Bremsbeläge hin.',
    recommendation: 'Zögern Sie nicht und lassen Sie die Bremsanlage zeitnah in der Werkstatt überprüfen.'
  },
  {
    id: 'scheibenwischer-fluessigkeit',
    title: 'Scheibenwaschanlage & Frostschutz',
    description: 'Gute Sicht ist Voraussetzung für Fahrsicherheit – besonders bei schlechtem Wetter und Dunkelheit.',
    indicator: 'Check: Wischerblätter auf Schlierenbildung und Risse untersuchen.',
    recommendation: 'Vor der kalten Jahreszeit ausreichend Frostschutzmittel nachfüllen, um ein Einfrieren der Leitungen zu verhindern.'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Termine & Ablauf',
    question: 'Wie kann ich einen Termin bei Garage Kottmann vereinbaren?',
    answer: 'Am schnellsten und unkompliziertesten erreichen Sie uns telefonisch unter 044 311 58 57. Alternativ können Sie uns über das Kontaktformular auf dieser Webseite Ihre Fahrzeugdaten und Ihr Anliegen mitteilen – wir melden uns zur Terminbestätigung bei Ihnen.'
  },
  {
    id: 'faq-2',
    category: 'Reparaturen & Diagnose',
    question: 'Auf meinem Armaturenbrett leuchtet eine Kontrollleuchte auf – was soll ich tun?',
    answer: 'Wenn eine Warnleuchte (z. B. Motorkontrollleuchte, ABS oder Batterielampe) dauerhaft leuchtet oder blinkt, sollten Sie das Fahrzeug baldmöglichst diagnostizieren lassen. Wir lesen den Fehlerspeicher der Steuergeräte aus und klären ab, welches Bauteil oder welcher Sensor das Signal auslöst.'
  },
  {
    id: 'faq-3',
    category: 'MFK',
    question: 'Was beinhaltet eine Vorbereitung auf die Motorfahrzeugkontrolle (MFK)?',
    answer: 'Wir prüfen alle Punkte, die das Strassenverkehrsamt kontrolliert: Bremswerte, Lenkung, Radlager, Stossdämpfer, Rost an tragenden Teilen, Beleuchtungseinstellung, Abgaswerte und Flüssigkeitsdichtheit. Sollten Mängel vorliegen, informieren wir Sie vorab und besprechen die Instandstellung.'
  },
  {
    id: 'faq-4',
    category: 'Ablauf',
    question: 'Wann erfahre ich, welche Reparaturen an meinem Fahrzeug notwendig sind?',
    answer: 'Nach der Begutachtung in der Werkstatt informieren wir Sie transparent über den festgestellten Zustand. Wir besprechen die notwendigen Schritte mit Ihnen, bevor zusätzliche Arbeiten ausgeführt oder Ersatzteile bestellt werden.'
  },
  {
    id: 'faq-5',
    category: 'Fahrzeugabgabe',
    question: 'Wo befindet sich die Werkstatt und wie gebe ich mein Auto ab?',
    answer: 'Sie finden uns an der Regensbergstrasse 244 in 8050 Zürich. Die Fahrzeugabgabe stimmen wir individuell bei der Terminvereinbarung ab, damit die Übergabe für Sie reibungslos passt.'
  },
  {
    id: 'faq-6',
    category: 'Service',
    question: 'Welche Marken und Fahrzeugtypen werden gewartet?',
    answer: 'Als unabhängige Autowerkstatt reparieren und warten wir gängige Personenwagen und leichte Nutzfahrzeuge markenunabhängig nach anerkannten handwerklichen Grundsätzen.'
  }
];
