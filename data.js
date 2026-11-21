// Generiert aus data/samples/ und data/paletten/ — nicht von Hand editieren. Neu erzeugen mit tools/build-data.ps1 oder pipeline/watcher.py --build-only
window.SUNFORGE_DATA = {
  "module": [
    {
      "produkttyp": "modul",
      "hersteller": "AIKO",
      "serie": "Neostar 3P54",
      "leistungsvarianten_wp": [
        470,
        475,
        480,
        485,
        490,
        495,
        500
      ],
      "wirkungsgrad_pct": 25.0,
      "zelltechnologie": "IBC",
      "aufbau": "Glas-Folie",
      "optik": "Black Frame",
      "bifazial": false,
      "masse_mm": [
        1762,
        1134,
        30
      ],
      "rahmenhoehe_mm": 30,
      "gewicht_kg": 20.6,
      "lasten_pa": {
        "wind": 2400,
        "schnee": 5400
      },
      "systemspannung_vdc": 1500,
      "temp_koeff_pmax": -0.26,
      "garantie": {
        "produkt_jahre": 15,
        "leistung_jahre": 30,
        "endwert_pct": 88.85
      },
      "bauarten": [
        "aufdach"
      ],
      "preisklasse": 2,
      "design_score": 7,
      "_quelle": "DB_DE_AIKO_Neostar_3P54-A470-495-MCE54Mw.pdf, extrahiert 2026-09-18 (Showroom-Extraktion)",
      "_status": "freigegeben",
      "_hinweis": "bauarten, preisklasse, design_score kuratiert; Zelltechnologie ABC = IBC"
    },
    {
      "produkttyp": "modul",
      "hersteller": "JinkoSolar",
      "serie": "Tiger Neo N-type 54HL4-B",
      "leistungsvarianten_wp": [
        400,
        405,
        410,
        415,
        420
      ],
      "wirkungsgrad_pct": 21.51,
      "zelltechnologie": "TOPCon",
      "zellen": "108 (6x18)",
      "optik": "Full Black",
      "aufbau": "Glas-Folie",
      "masse_mm": [
        1722,
        1134,
        30
      ],
      "rahmenhoehe_mm": 30,
      "gewicht_kg": 22,
      "lasten_pa": {
        "wind": 2400,
        "schnee": 5400
      },
      "systemspannung_vdc": 1500,
      "temp_koeff_pmax": -0.3,
      "garantie": {
        "produkt_jahre": 25,
        "leistung_jahre": 30,
        "endwert_pct": 87.4
      },
      "bauarten": [
        "aufdach"
      ],
      "_quelle": "DB_DE_Jinko_JKM400-420N-54HL4-B.pdf (solarmarkt.ch), extrahiert 2026-09-16",
      "_status": "freigegeben"
    }
  ],
  "unterkonstruktionen": [
    {
      "produkttyp": "unterkonstruktion",
      "hersteller": "K2 Systems",
      "system": "SingleRail (Dachhaken)",
      "montageart": [
        "aufdach"
      ],
      "dachtypen": [
        "schraegdach"
      ],
      "eindeckungen": [
        "ziegel",
        "biberschwanz",
        "schiefer"
      ],
      "dachneigung_grad": [
        5,
        75
      ],
      "rahmenhoehe_mm": [
        25,
        40
      ],
      "befestigung": "Dachhaken (SingleHook 3S/4S/Alpin/Vario), Schiene SingleRail 36/50",
      "planungstool": "K2 Base (Statikbericht), K2+ Schnittstelle",
      "freigabe_quelle": [
        "SingleRail-roof-hook-assembly-de.pdf (2026-07)",
        "Klemmbereich: K2 Komponentenkatalog (Universalklemme 25-40 mm)"
      ],
      "_status": "freigegeben",
      "_hinweis": "Rahmenhoehe aus zweiter Quelle — kuratiert, nicht aus Montageanleitung"
    }
  ],
  "paletten": [
    {
      "schema_version": "0.2",
      "hersteller": {
        "name": "3S Swiss Solar Solutions AG",
        "land": "CH",
        "website": "https://www.3s-solar.com/de-ch",
        "profil": "Schweizer Systemanbieter (MegaSlate-Erbe) für Solardach, -fassade, -geländer und Overhead mit eigenem Planungstool «3S Designer».",
        "verifiziert": false
      },
      "serien": [
        {
          "id": "solardach",
          "name": "Solardach",
          "produkttyp": "modul",
          "anwendungen": [
            "dach_indach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "richtwerte": {},
          "referenz_tags": [
            "indach"
          ],
          "_quelle": "3s-solar.com; Formate auf Produktseiten, Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        },
        {
          "id": "solarfassade",
          "name": "Solarfassade",
          "produkttyp": "modul",
          "anwendungen": [
            "fassade_hinterlueftet"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "richtwerte": {},
          "referenz_tags": [
            "fassade"
          ],
          "_quelle": "3s-solar.com, Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        },
        {
          "id": "solargelaender",
          "name": "Solargeländer",
          "produkttyp": "modul",
          "anwendungen": [
            "gelaender"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "richtwerte": {},
          "referenz_tags": [
            "gelaender"
          ],
          "_quelle": "3s-solar.com, Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        },
        {
          "id": "solar-overhead",
          "name": "Solar Overhead",
          "produkttyp": "modul",
          "anwendungen": [
            "ueberdachung"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "richtwerte": {},
          "referenz_tags": [
            "ueberdachung"
          ],
          "_quelle": "3s-solar.com, Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        }
      ],
      "slug": "3s-solar"
    },
    {
      "schema_version": "0.2",
      "hersteller": {
        "name": "AIKO",
        "land": "CN",
        "website": "https://aikosolar.com/",
        "profil": "Zelltechnologie-Führer mit ABC-Back-Contact-Modulen (IBC); Neostar-Serien für Wohn- und Gewerbedächer, hohe Wirkungsgrade um 25 %.",
        "verifiziert": false
      },
      "serien": [
        {
          "id": "neostar",
          "name": "Neostar-Serie (ABC Back Contact)",
          "produkttyp": "modul",
          "anwendungen": [
            "dach_aufdach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "optionen": {
            "farben": {
              "technologie": "Black Frame / Full Black",
              "werte": [
                "schwarz"
              ],
              "frei": false
            }
          },
          "richtwerte": {},
          "referenz_tags": [
            "ibc",
            "fullblack"
          ],
          "_quelle": "aikosolar.com; Neostar 3P54 bereits im Konfigurator, Rohaufnahme Web 2026-11-21; Einzelprodukte kommen als Varianten über den Release-Watcher (data/samples/)",
          "_status": "freigegeben"
        }
      ],
      "slug": "aiko"
    },
    {
      "schema_version": "0.2",
      "hersteller": {
        "name": "Contec",
        "land": "CH/DE",
        "website": "https://www.contec.ch/",
        "verifiziert": false,
        "profil": "Modulare Flachdach-Systemlösungen, die Abdichtung, Dämmung, Begrünung und PV-Integration zusammen denken (ContecFix)."
      },
      "serien": [
        {
          "id": "contecfix",
          "name": "ContecFix (Flachdach-Systemlösung mit PV)",
          "produkttyp": "unterkonstruktion",
          "anwendungen": [
            "flachdach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "eindeckungen": [
            "folie",
            "gruendach"
          ],
          "richtwerte": {},
          "referenz_tags": [
            "flachdach",
            "gruendach"
          ],
          "_quelle": "heinze.de/archello Produktserie ContecFix, Rohaufnahme Web 2026-11-21",
          "_status": "freigegeben"
        }
      ],
      "slug": "contec"
    },
    {
      "schema_version": "0.2",
      "hersteller": {
        "name": "Ernst Schweizer AG",
        "land": "CH",
        "website": "https://www.ernstschweizer.ch/",
        "verifiziert": false,
        "profil": "Schweizer Metallbau-Traditionshaus; Solrif ist das etablierte Indach-Rahmensystem (Module werden zur Dachhaut), dazu Aufdach-Systeme MSP."
      },
      "serien": [
        {
          "id": "solrif",
          "name": "Solrif (Indach-Rahmensystem)",
          "produkttyp": "unterkonstruktion",
          "anwendungen": [
            "dach_indach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "eindeckungen": [
            "ziegel",
            "biberschwanz",
            "eternit",
            "schiefer"
          ],
          "richtwerte": {},
          "referenz_tags": [
            "indach",
            "klassiker"
          ],
          "_quelle": "ernstschweizer.ch Technischer Prospekt Solrif; XXL-Variante pv-magazine, Rohaufnahme Web 2026-11-21",
          "_status": "freigegeben"
        },
        {
          "id": "msp",
          "name": "MSP / MSP-PR (Aufdach, Klick-System)",
          "produkttyp": "unterkonstruktion",
          "anwendungen": [
            "dach_aufdach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "eindeckungen": [
            "ziegel",
            "eternit",
            "blech_trapez"
          ],
          "richtwerte": {},
          "_quelle": "ernstschweizer.ch Technischer Prospekt MSP, Rohaufnahme Web 2026-11-21",
          "_status": "freigegeben"
        }
      ],
      "slug": "ernst-schweizer"
    },
    {
      "schema_version": "0.2",
      "hersteller": {
        "name": "ertex solar",
        "land": "AT",
        "website": "https://www.ertex-solar.at/",
        "profil": "Österreichischer VSG-Spezialist (70 Jahre Glasbau), BIPV als Projektware für Fassade, Dach, Überdachung und Geländer.",
        "verifiziert": false
      },
      "serien": [
        {
          "id": "balkongelaender",
          "name": "Balkongeländer",
          "produkttyp": "modul",
          "anwendungen": [
            "gelaender"
          ],
          "ausgestaltung": "parametrisch",
          "parameter": {
            "aufbauten": [
              "2-glas"
            ]
          },
          "richtwerte": {},
          "referenz_tags": [
            "gelaender"
          ],
          "_quelle": "ertex-solar.at, Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        },
        {
          "id": "fassade-isolierend",
          "name": "Isolierende Fassaden",
          "produkttyp": "modul",
          "anwendungen": [
            "fassade_isolierend",
            "curtain_wall"
          ],
          "ausgestaltung": "parametrisch",
          "parameter": {
            "aufbauten": [
              "igu"
            ]
          },
          "richtwerte": {},
          "_quelle": "ertex-solar.at, Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        },
        {
          "id": "fassade-hinterlueftet",
          "name": "Hinterlüftete Fassaden",
          "produkttyp": "modul",
          "anwendungen": [
            "fassade_hinterlueftet"
          ],
          "ausgestaltung": "parametrisch",
          "parameter": {
            "aufbauten": [
              "2-glas"
            ]
          },
          "richtwerte": {},
          "_quelle": "ertex-solar.at, Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        },
        {
          "id": "ueberdachungen",
          "name": "Überdachungen",
          "produkttyp": "modul",
          "anwendungen": [
            "ueberdachung",
            "skylight"
          ],
          "ausgestaltung": "parametrisch",
          "parameter": {
            "aufbauten": [
              "2-glas",
              "igu"
            ]
          },
          "richtwerte": {},
          "_quelle": "ertex-solar.at, Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        },
        {
          "id": "dach-isolierend",
          "name": "Isolierende Dächer",
          "produkttyp": "modul",
          "anwendungen": [
            "skylight",
            "dach_indach"
          ],
          "ausgestaltung": "parametrisch",
          "parameter": {
            "aufbauten": [
              "igu"
            ]
          },
          "richtwerte": {},
          "_quelle": "ertex-solar.at, Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        }
      ],
      "slug": "ertex-solar"
    },
    {
      "schema_version": "0.2",
      "hersteller": {
        "name": "Freesuns SA",
        "land": "CH",
        "website": "https://freesuns.com/de/",
        "profil": "Waadtländer Anbieter von Solardachziegeln mit Fokus Denkmalschutz und 100%-Dachabdeckung, Turnkey-Modell.",
        "verifiziert": false
      },
      "serien": [
        {
          "id": "solaris-heritage",
          "name": "Solaris Heritage",
          "produkttyp": "modul",
          "anwendungen": [
            "dachziegel"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "richtwerte": {},
          "referenz_tags": [
            "dachziegel",
            "denkmalschutz"
          ],
          "_quelle": "freesuns.com (Referenzen: Gerichte Basel-Stadt, Jean-Piaget-Gymnasium NE), Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        }
      ],
      "slug": "freesuns"
    },
    {
      "schema_version": "0.2",
      "hersteller": {
        "name": "Gain Solar (Baoding Jiasheng)",
        "land": "CN",
        "website": "https://www.gainsolarbipv.com/",
        "profil": "Chinesischer BIPV-Hersteller (Dachziegel, Curtain Wall, Fassade, Skylight); farbige Glaze- und Nanofilm-Beschichtungen; sucht EU/CH-Referenzen.",
        "verifiziert": false
      },
      "serien": [
        {
          "id": "solar-roof-tiles",
          "name": "Solar Roof Tiles",
          "produkttyp": "modul",
          "anwendungen": [
            "dachziegel"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "richtwerte": {},
          "referenz_tags": [
            "dachziegel"
          ],
          "_quelle": "gainsolarbipv.com, Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        },
        {
          "id": "bipv-glas",
          "name": "BIPV-Glas (Curtain Wall / Fassade / Skylight)",
          "produkttyp": "modul",
          "anwendungen": [
            "curtain_wall",
            "fassade_hinterlueftet",
            "skylight",
            "sonnenschutz"
          ],
          "ausgestaltung": "parametrisch",
          "optionen": {
            "farben": {
              "technologie": "Coloured Glaze / Nanofilm auf c-Si",
              "werte": [],
              "frei": true
            }
          },
          "richtwerte": {},
          "_quelle": "gainsolarbipv.com, Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        },
        {
          "id": "standard-panels",
          "name": "Mono/Poly Standardpanels",
          "produkttyp": "modul",
          "anwendungen": [
            "dach_aufdach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "richtwerte": {},
          "_quelle": "gainsolarbipv.com, Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        }
      ],
      "slug": "gain-solar"
    },
    {
      "schema_version": "0.2",
      "hersteller": {
        "name": "Innotech",
        "land": "AT",
        "website": "https://www.innotech-safety.com/",
        "verifiziert": false,
        "profil": "Absturzsicherungs-Spezialist mit eigenem PV-Programm: Anschlagpunkte und Seilsysteme für Wartungswege auf PV-Dächern, inkl. abgestimmter Lösungen für Montagesysteme (z.B. K2, Aerocompact)."
      },
      "serien": [
        {
          "id": "aio-anschlagpunkte",
          "name": "AIO Anschlagpunkte",
          "produkttyp": "absturzsicherung",
          "anwendungen": [
            "flachdach",
            "dach_aufdach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "richtwerte": {},
          "referenz_tags": [
            "psaga"
          ],
          "_quelle": "innotech-safety.com Produktfolder AIO, Rohaufnahme Web 2026-11-21",
          "_status": "freigegeben"
        },
        {
          "id": "aio-seilsystem",
          "name": "AIO Seilsysteme (überfahrbar/nicht überfahrbar)",
          "produkttyp": "absturzsicherung",
          "anwendungen": [
            "flachdach",
            "fassade_hinterlueftet"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "richtwerte": {},
          "_quelle": "innotech-safety.com Produktfolder Seilsysteme, Rohaufnahme Web 2026-11-21",
          "_status": "freigegeben"
        },
        {
          "id": "sopv",
          "name": "SOPV (PV-Flachdach-Integration)",
          "produkttyp": "absturzsicherung",
          "anwendungen": [
            "flachdach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "richtwerte": {},
          "referenz_tags": [
            "pv-integration"
          ],
          "_quelle": "innotech-safety.com SOPV-Datenblätter (K2, Aerocompact), Rohaufnahme Web 2026-11-21",
          "_status": "freigegeben"
        }
      ],
      "slug": "innotech"
    },
    {
      "schema_version": "0.2",
      "hersteller": {
        "name": "Intelligent Solar",
        "land": "EU",
        "website": "https://intelligentsolar.eu/",
        "profil": "Custom-BIPV mit Online-Konfigurator «Your Module» (Front/Zelle/Rückseite/IGU frei kombinierbar); Referenz u.a. CERN Science Gateway.",
        "verifiziert": false
      },
      "serien": [
        {
          "id": "your-module",
          "name": "Your Module (Custom)",
          "produkttyp": "modul",
          "anwendungen": [
            "fassade_hinterlueftet",
            "dach_indach",
            "skylight",
            "curtain_wall"
          ],
          "ausgestaltung": "parametrisch",
          "parameter": {
            "aufbauten": [
              "2-glas",
              "glas-folie",
              "igu"
            ]
          },
          "optionen": {
            "farben": {
              "technologie": "Farbbeschichtung",
              "werte": [],
              "frei": true
            },
            "oberflaechen": [
              "matt"
            ]
          },
          "richtwerte": {},
          "referenz_tags": [
            "custom",
            "fassade"
          ],
          "_quelle": "intelligentsolar.eu (Konfigurator Front/Cell/Back/IGU; Referenz Buochs mattbraun), Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        }
      ],
      "slug": "intelligent-solar"
    },
    {
      "schema_version": "0.2",
      "hersteller": {
        "name": "JinkoSolar",
        "land": "CN",
        "website": "https://jinkosolar.eu/",
        "profil": "Grosshersteller; Tiger-Neo-Familie (n-Typ TOPCon) für Wohn- und Gewerbedächer.",
        "verifiziert": false
      },
      "serien": [
        {
          "id": "tiger-neo",
          "name": "Tiger Neo (n-Typ TOPCon)",
          "produkttyp": "modul",
          "anwendungen": [
            "dach_aufdach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "richtwerte": {},
          "referenz_tags": [
            "topcon"
          ],
          "_quelle": "jinkosolar.eu; Tiger Neo 54HL4-B bereits im Konfigurator, Rohaufnahme Web 2026-11-21; Einzelprodukte kommen als Varianten über den Release-Watcher (data/samples/)",
          "_status": "freigegeben"
        }
      ],
      "slug": "jinko"
    },
    {
      "schema_version": "0.2",
      "hersteller": {
        "name": "K2 Systems",
        "land": "DE",
        "website": "https://k2-systems.com/",
        "verifiziert": false,
        "profil": "Montagesystem-Vollsortimenter für Schrägdach, Flachdach, Fassade und Carport; Auslegung über das Planungstool K2 Base."
      },
      "serien": [
        {
          "id": "singlerail",
          "name": "SingleRail",
          "produkttyp": "unterkonstruktion",
          "anwendungen": [
            "dach_aufdach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "parameter": {
            "rahmenhoehe_mm": [
              25,
              40
            ]
          },
          "eindeckungen": [
            "ziegel",
            "biberschwanz",
            "schiefer",
            "eternit"
          ],
          "planungstool": "K2 Base",
          "richtwerte": {},
          "referenz_tags": [
            "schraegdach"
          ],
          "_quelle": "k2-systems.com Katalog; Klemmbereich aus v0.1-Sample, Rohaufnahme Web 2026-11-21",
          "_status": "freigegeben"
        },
        {
          "id": "crossrail",
          "name": "CrossRail / SolidRail",
          "produkttyp": "unterkonstruktion",
          "anwendungen": [
            "dach_aufdach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "eindeckungen": [
            "ziegel",
            "eternit",
            "blech_falz"
          ],
          "planungstool": "K2 Base",
          "richtwerte": {},
          "_quelle": "k2-systems.com Katalog, Rohaufnahme Web 2026-11-21",
          "_status": "freigegeben"
        },
        {
          "id": "minirail",
          "name": "MiniRail / SpeedRail (Trapezblech)",
          "produkttyp": "unterkonstruktion",
          "anwendungen": [
            "dach_aufdach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "eindeckungen": [
            "blech_trapez"
          ],
          "planungstool": "K2 Base",
          "richtwerte": {},
          "_quelle": "k2-systems.com Katalog, Rohaufnahme Web 2026-11-21",
          "_status": "freigegeben"
        },
        {
          "id": "dome",
          "name": "Dome-Familie (Flachdach Süd/Ost-West)",
          "produkttyp": "unterkonstruktion",
          "anwendungen": [
            "flachdach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "eindeckungen": [
            "folie",
            "kies",
            "gruendach"
          ],
          "planungstool": "K2 Base",
          "richtwerte": {},
          "_quelle": "pv-magazine Flachdach-Portfolio, Rohaufnahme Web 2026-11-21",
          "_status": "freigegeben"
        },
        {
          "id": "tiltup",
          "name": "TiltUp",
          "produkttyp": "unterkonstruktion",
          "anwendungen": [
            "flachdach",
            "dach_aufdach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "planungstool": "K2 Base",
          "richtwerte": {},
          "_quelle": "k2-systems.com Katalog, Rohaufnahme Web 2026-11-21",
          "_status": "freigegeben"
        }
      ],
      "slug": "k2-systems"
    },
    {
      "schema_version": "0.2",
      "hersteller": {
        "name": "LONGi",
        "land": "CN",
        "website": "https://eu.longi.com/de/",
        "profil": "Weltgrösster Modulhersteller; aktuelle Generationen Hi-MO X10 (Back Contact) und Hi-MO S10, dazu etablierte Hi-MO-6-Serien.",
        "verifiziert": false
      },
      "serien": [
        {
          "id": "hi-mo-x10",
          "name": "Hi-MO X10 (Back Contact)",
          "produkttyp": "modul",
          "anwendungen": [
            "dach_aufdach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "richtwerte": {},
          "referenz_tags": [
            "backcontact"
          ],
          "_quelle": "eu.longi.com (Hi-MO X10), Rohaufnahme Web 2026-11-21; Einzelprodukte kommen als Varianten über den Release-Watcher (data/samples/)",
          "_status": "freigegeben"
        },
        {
          "id": "hi-mo-s10",
          "name": "Hi-MO S10",
          "produkttyp": "modul",
          "anwendungen": [
            "dach_aufdach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "richtwerte": {},
          "_quelle": "pv.de (Hi-MO S10), Rohaufnahme Web 2026-11-21; Einzelprodukte kommen als Varianten über den Release-Watcher (data/samples/)",
          "_status": "freigegeben"
        },
        {
          "id": "hi-mo-6",
          "name": "Hi-MO 6",
          "produkttyp": "modul",
          "anwendungen": [
            "dach_aufdach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "richtwerte": {},
          "_quelle": "42watt/memodo Sortiment, Rohaufnahme Web 2026-11-21; Einzelprodukte kommen als Varianten über den Release-Watcher (data/samples/)",
          "_status": "freigegeben"
        }
      ],
      "slug": "longi"
    },
    {
      "schema_version": "0.2",
      "hersteller": {
        "name": "Megasol Energie AG",
        "land": "CH",
        "website": "https://megasol.ch/",
        "profil": "Schweizer Hersteller mit vollparametrischer BIPV-Fertigung, eigenem Solarmodul-Designer (Red Dot 2025) und Standard-Sortiment.",
        "verifiziert": false
      },
      "serien": [
        {
          "id": "nicer",
          "name": "Nicer",
          "produkttyp": "modul",
          "anwendungen": [
            "dach_aufdach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "richtwerte": {},
          "_quelle": "Platzhalter; Varianten folgen via Watcher/Datenblatt, Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        },
        {
          "id": "match",
          "name": "Match (PV-Dachziegel)",
          "produkttyp": "modul",
          "anwendungen": [
            "dachziegel"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "optionen": {
            "oberflaechen": [
              "blendarm beschichtet"
            ]
          },
          "richtwerte": {},
          "referenz_tags": [
            "dachziegel",
            "blendarm"
          ],
          "_quelle": "pv-magazine 11/2021 (Match-Ziegel), Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        },
        {
          "id": "fassade-individuell",
          "name": "Fassadenmodule individuell",
          "produkttyp": "modul",
          "anwendungen": [
            "fassade_hinterlueftet",
            "fassade_isolierend"
          ],
          "ausgestaltung": "parametrisch",
          "parameter": {
            "formen": [
              "rechteck",
              "dreieck",
              "trapez",
              "frei"
            ],
            "aufbauten": [
              "2-glas",
              "igu"
            ]
          },
          "optionen": {
            "farben": {
              "technologie": "MorphoColor (Fraunhofer-ISE-Lizenz) u.a.",
              "werte": [],
              "frei": true
            },
            "druck": "Digitaldruck"
          },
          "richtwerte": {},
          "referenz_tags": [
            "farbig",
            "fassade"
          ],
          "_quelle": "solarserver 4/2023 (MorphoColor); Massbereiche durch Luca ergaenzen, Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        },
        {
          "id": "levelup",
          "name": "Level Up (Indachsystem)",
          "produkttyp": "unterkonstruktion",
          "anwendungen": [
            "dach_indach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "richtwerte": {},
          "_quelle": "pv-magazine 6/2022 (Indachsystem); Daten durch Luca/Datenblatt ergaenzen, Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        }
      ],
      "slug": "megasol"
    },
    {
      "schema_version": "0.2",
      "hersteller": {
        "name": "Metsolar",
        "land": "LT",
        "website": "https://metsolar.eu/",
        "profil": "Litauischer OEM-Fertiger für Custom-BIPV: Glas-Glas, Glas-Folie, flexibel und PV-Isolierglas.",
        "verifiziert": false
      },
      "serien": [
        {
          "id": "laume-roof",
          "name": "Laumė Roof",
          "produkttyp": "modul",
          "anwendungen": [
            "dach_indach"
          ],
          "ausgestaltung": "parametrisch",
          "richtwerte": {},
          "_quelle": "metsolar.eu, Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        },
        {
          "id": "tauras-skylight",
          "name": "Tauras Skylight",
          "produkttyp": "modul",
          "anwendungen": [
            "skylight"
          ],
          "ausgestaltung": "parametrisch",
          "parameter": {
            "aufbauten": [
              "igu",
              "3-glas"
            ]
          },
          "richtwerte": {},
          "_quelle": "metsolar.eu, Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        },
        {
          "id": "ausra-facade",
          "name": "Ausra Facade",
          "produkttyp": "modul",
          "anwendungen": [
            "fassade_hinterlueftet"
          ],
          "ausgestaltung": "parametrisch",
          "richtwerte": {},
          "_quelle": "metsolar.eu, Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        },
        {
          "id": "kovas-tile",
          "name": "Kovas Tile",
          "produkttyp": "modul",
          "anwendungen": [
            "dachziegel"
          ],
          "ausgestaltung": "parametrisch",
          "richtwerte": {},
          "_quelle": "metsolar.eu, Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        },
        {
          "id": "egle-tile-facade",
          "name": "Egle Tile Facade",
          "produkttyp": "modul",
          "anwendungen": [
            "fassade_hinterlueftet"
          ],
          "ausgestaltung": "parametrisch",
          "richtwerte": {},
          "_quelle": "metsolar.eu, Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        }
      ],
      "slug": "metsolar"
    },
    {
      "schema_version": "0.2",
      "hersteller": {
        "name": "ML System",
        "land": "PL",
        "website": "https://mlsystem.pl/bipv/?lang=en",
        "profil": "Polnischer BIPV-Hersteller mit breitem Portfolio (PhotonWall/PhotonRoof) bis Quantenglas; Fassadenpaneele in Material-Optiken.",
        "verifiziert": false
      },
      "serien": [
        {
          "id": "fassadenpaneele",
          "name": "Photovoltaic Facade Panels (PhotonWall)",
          "produkttyp": "modul",
          "anwendungen": [
            "fassade_hinterlueftet"
          ],
          "ausgestaltung": "parametrisch",
          "optionen": {
            "oberflaechen": [
              "Beton-Optik",
              "Granit-Optik",
              "Holz-Optik",
              "Ziegel-Optik"
            ]
          },
          "richtwerte": {},
          "referenz_tags": [
            "materialoptik",
            "fassade"
          ],
          "_quelle": "mlsystem.pl (Referenz Orkanen Library Malmö), Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        },
        {
          "id": "isolierglas",
          "name": "Photovoltaic Insulated Glass",
          "produkttyp": "modul",
          "anwendungen": [
            "curtain_wall",
            "fassade_isolierend"
          ],
          "ausgestaltung": "parametrisch",
          "parameter": {
            "aufbauten": [
              "igu"
            ]
          },
          "richtwerte": {},
          "_quelle": "mlsystem.pl, Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        },
        {
          "id": "skylights",
          "name": "Photovoltaic Skylights",
          "produkttyp": "modul",
          "anwendungen": [
            "skylight"
          ],
          "ausgestaltung": "parametrisch",
          "parameter": {
            "aufbauten": [
              "igu"
            ]
          },
          "richtwerte": {},
          "_quelle": "mlsystem.pl, Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        },
        {
          "id": "sonnenschutz",
          "name": "Photovoltaic Sunshades",
          "produkttyp": "modul",
          "anwendungen": [
            "sonnenschutz"
          ],
          "ausgestaltung": "parametrisch",
          "richtwerte": {},
          "_quelle": "mlsystem.pl, Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        },
        {
          "id": "dachziegel",
          "name": "Photovoltaic Roof Tiles (PhotonRoof)",
          "produkttyp": "modul",
          "anwendungen": [
            "dachziegel"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "richtwerte": {},
          "_quelle": "mlsystem.pl, Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        }
      ],
      "slug": "ml-system"
    },
    {
      "schema_version": "0.2",
      "hersteller": {
        "name": "novotegra (BayWa r.e.)",
        "land": "DE",
        "website": "https://solar-distribution.baywa-re.de/",
        "verifiziert": false,
        "profil": "Montagesysteme für Schrägdach, Trapezblech, Flachdach, Gründach und Fassade; Auslegung über Solar-Planit, Ausschreibungstexte verfügbar."
      },
      "serien": [
        {
          "id": "schraegdach",
          "name": "Schrägdach-System",
          "produkttyp": "unterkonstruktion",
          "anwendungen": [
            "dach_aufdach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "eindeckungen": [
            "ziegel",
            "biberschwanz",
            "eternit",
            "blech_falz"
          ],
          "planungstool": "Solar-Planit",
          "richtwerte": {},
          "_quelle": "baywa-re Produktübersicht, Rohaufnahme Web 2026-11-21",
          "_status": "freigegeben"
        },
        {
          "id": "trapez",
          "name": "Trapezblech leichte Aufständerung",
          "produkttyp": "unterkonstruktion",
          "anwendungen": [
            "dach_aufdach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "eindeckungen": [
            "blech_trapez"
          ],
          "planungstool": "Solar-Planit",
          "richtwerte": {},
          "_quelle": "baywa-re Montageanleitung Trapezblech, Rohaufnahme Web 2026-11-21",
          "_status": "freigegeben"
        },
        {
          "id": "flachdach3",
          "name": "Flachdach III (Süd/Ost-West)",
          "produkttyp": "unterkonstruktion",
          "anwendungen": [
            "flachdach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "eindeckungen": [
            "folie",
            "kies"
          ],
          "planungstool": "Solar-Planit",
          "richtwerte": {},
          "_quelle": "baywa-re Montageanleitung Flachdach III, Rohaufnahme Web 2026-11-21",
          "_status": "freigegeben"
        },
        {
          "id": "gruendach",
          "name": "Gründach-System (PV Integ)",
          "produkttyp": "unterkonstruktion",
          "anwendungen": [
            "flachdach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "eindeckungen": [
            "gruendach"
          ],
          "planungstool": "Solar-Planit",
          "richtwerte": {},
          "_quelle": "solarserver 11/2021 (PV-Integ-Übernahme); pv-magazine Solar-Planit, Rohaufnahme Web 2026-11-21",
          "_status": "freigegeben"
        },
        {
          "id": "fassade",
          "name": "Fassaden-System",
          "produkttyp": "unterkonstruktion",
          "anwendungen": [
            "fassade_hinterlueftet"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "richtwerte": {},
          "_quelle": "baywa-re Manual Fassade, Rohaufnahme Web 2026-11-21",
          "_status": "freigegeben"
        }
      ],
      "slug": "novotegra"
    },
    {
      "schema_version": "0.2",
      "hersteller": {
        "name": "Onyx Solar",
        "land": "ES",
        "website": "https://onyxsolar.com/",
        "profil": "Spanischer PV-Glas-Hersteller (500+ Projekte, 60 Länder); kristallin für Leistung, amorph für einstellbare Transparenz.",
        "verifiziert": false
      },
      "serien": [
        {
          "id": "pv-glas-kristallin",
          "name": "PV-Glas kristallin",
          "produkttyp": "modul",
          "anwendungen": [
            "fassade_hinterlueftet",
            "curtain_wall",
            "ueberdachung",
            "gelaender",
            "sonnenschutz"
          ],
          "ausgestaltung": "parametrisch",
          "richtwerte": {},
          "referenz_tags": [
            "glas"
          ],
          "_quelle": "onyxsolar.com, Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        },
        {
          "id": "pv-glas-amorph",
          "name": "PV-Glas amorph (transluzent)",
          "produkttyp": "modul",
          "anwendungen": [
            "skylight",
            "curtain_wall",
            "boden_begehbar",
            "laermschutz"
          ],
          "ausgestaltung": "parametrisch",
          "optionen": {
            "oberflaechen": [
              "opak bis transluzent, Transmission projektspezifisch"
            ]
          },
          "richtwerte": {},
          "referenz_tags": [
            "transluzent",
            "glas"
          ],
          "_quelle": "onyxsolar.com (Transmissionswerte nicht beziffert), Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        }
      ],
      "slug": "onyx-solar"
    },
    {
      "schema_version": "0.2",
      "hersteller": {
        "name": "Pixasolar",
        "land": "—",
        "website": "https://www.pixasolar.com/",
        "profil": "BIPV-Hersteller mit vollparametrischer Fertigung («custom is our standard»); vier Designlinien von Full Black bis Keramikdruck, transluzente Varianten für Überkopf und Fassade.",
        "verifiziert": false
      },
      "serien": [
        {
          "id": "pixablack",
          "name": "PixaBlack",
          "produkttyp": "modul",
          "anwendungen": [
            "fassade_hinterlueftet",
            "dach_indach",
            "ueberdachung"
          ],
          "ausgestaltung": "parametrisch",
          "parameter": {
            "breite_mm": [
              300,
              2000
            ],
            "hoehe_mm": [
              300,
              4000
            ],
            "formen": [
              "rechteck",
              "dreieck",
              "trapez",
              "frei"
            ],
            "aufbauten": [
              "1-glas",
              "2-glas",
              "3-glas",
              "igu"
            ],
            "glasdicken_mm": [
              2,
              3.2,
              4,
              5,
              6,
              8,
              10
            ],
            "zelltypen": [
              "M10 Black Contact",
              "M10 TOPCon",
              "G12 TOPCon",
              "Halbzellen",
              "Streifenzellen"
            ]
          },
          "optionen": {
            "farben": {
              "technologie": "Full Black",
              "werte": [
                "schwarz"
              ],
              "frei": false
            },
            "oberflaechen": [
              "Solarglas",
              "matt",
              "ultra-matt"
            ]
          },
          "richtwerte": {},
          "zertifikate": [
            "IEC 61215",
            "IEC 61730",
            "IEC 63092",
            "Brandklasse A1/A2/B-s1,d0",
            "1B1"
          ],
          "referenz_tags": [
            "full-black",
            "fassade"
          ],
          "_quelle": "pixasolar.com, Rohaufnahme 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        },
        {
          "id": "pixacolour",
          "name": "PixaColour",
          "produkttyp": "modul",
          "anwendungen": [
            "fassade_hinterlueftet",
            "dach_indach"
          ],
          "ausgestaltung": "parametrisch",
          "parameter": {
            "breite_mm": [
              300,
              2000
            ],
            "hoehe_mm": [
              300,
              4000
            ],
            "formen": [
              "rechteck",
              "dreieck",
              "trapez",
              "frei"
            ],
            "aufbauten": [
              "1-glas",
              "2-glas",
              "3-glas",
              "igu"
            ],
            "zelltypen": [
              "M10",
              "G12",
              "Halbzellen"
            ]
          },
          "optionen": {
            "farben": {
              "technologie": "Farbbeschichtung",
              "werte": [],
              "frei": true
            },
            "oberflaechen": [
              "matt",
              "ultra-matt",
              "strukturiert"
            ]
          },
          "richtwerte": {},
          "zertifikate": [
            "IEC 61215",
            "IEC 61730",
            "IEC 63092"
          ],
          "referenz_tags": [
            "farbig",
            "fassade"
          ],
          "_quelle": "pixasolar.com, Rohaufnahme 2026-11-20",
          "_status": "freigegeben"
        },
        {
          "id": "pixalucid",
          "name": "PixaLucid",
          "produkttyp": "modul",
          "anwendungen": [
            "skylight",
            "ueberdachung",
            "curtain_wall"
          ],
          "ausgestaltung": "parametrisch",
          "parameter": {
            "breite_mm": [
              300,
              2000
            ],
            "hoehe_mm": [
              300,
              4000
            ],
            "formen": [
              "rechteck"
            ],
            "aufbauten": [
              "2-glas",
              "3-glas",
              "igu"
            ]
          },
          "optionen": {
            "transluzenz_pct": [
              25,
              90
            ],
            "oberflaechen": [
              "Solarglas",
              "mistlite",
              "fluted"
            ]
          },
          "richtwerte": {},
          "zertifikate": [
            "IEC 61215",
            "IEC 61730",
            "IEC 63092"
          ],
          "referenz_tags": [
            "transluzent",
            "skylight"
          ],
          "_quelle": "pixasolar.com, Rohaufnahme 2026-11-20 (FCC/HCC 25–90 %, SCC 45–55 %)",
          "_status": "freigegeben"
        },
        {
          "id": "pixadesign",
          "name": "PixaDesign",
          "produkttyp": "modul",
          "anwendungen": [
            "fassade_hinterlueftet",
            "fassade_isolierend"
          ],
          "ausgestaltung": "parametrisch",
          "parameter": {
            "breite_mm": [
              300,
              2000
            ],
            "hoehe_mm": [
              300,
              4000
            ],
            "formen": [
              "rechteck",
              "frei"
            ],
            "aufbauten": [
              "2-glas",
              "igu"
            ]
          },
          "optionen": {
            "farben": {
              "technologie": "Keramik-Digitaldruck",
              "werte": [],
              "frei": true
            },
            "oberflaechen": [
              "nashiji",
              "fluted",
              "mistlite",
              "wood",
              "water",
              "granite",
              "matt"
            ],
            "druck": "Keramik-Digitaldruck, Motive frei (z.B. Holz-, Stein-Optik)"
          },
          "richtwerte": {},
          "zertifikate": [
            "IEC 61215",
            "IEC 61730",
            "IEC 63092"
          ],
          "referenz_tags": [
            "druck",
            "materialoptik",
            "fassade"
          ],
          "_quelle": "pixasolar.com, Rohaufnahme 2026-11-20",
          "_status": "freigegeben"
        }
      ],
      "slug": "pixasolar"
    },
    {
      "schema_version": "0.2",
      "hersteller": {
        "name": "Solarix",
        "land": "NL",
        "website": "https://solarix-solar.com/de",
        "profil": "Niederländischer Anbieter von Design-Solarfassaden (6 Kollektionen) und Terracotta-Dachmodulen mit patentiertem, einzeln entnehmbarem Montagesystem.",
        "verifiziert": false
      },
      "serien": [
        {
          "id": "fassade-kollektionen",
          "name": "Fassadenmodule (6 Design-Kollektionen)",
          "produkttyp": "modul",
          "anwendungen": [
            "fassade_hinterlueftet"
          ],
          "ausgestaltung": "beides",
          "varianten": [],
          "optionen": {
            "farben": {
              "technologie": "Farbbeschichtung",
              "werte": [
                "farbig",
                "weiss",
                "schwarz",
                "metallic",
                "terracotta"
              ],
              "frei": true
            },
            "oberflaechen": [
              "Glasstrukturen",
              "matt"
            ]
          },
          "richtwerte": {},
          "referenz_tags": [
            "farbig",
            "fassade"
          ],
          "_quelle": "solarix-solar.com (Standard- oder Kundenmasse), Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        },
        {
          "id": "dach-terracotta",
          "name": "Dachmodule Terracotta",
          "produkttyp": "modul",
          "anwendungen": [
            "dach_indach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "optionen": {
            "farben": {
              "technologie": "Farbbeschichtung",
              "werte": [
                "terracotta"
              ],
              "frei": false
            }
          },
          "richtwerte": {},
          "referenz_tags": [
            "terracotta",
            "altbau"
          ],
          "_quelle": "solarix-solar.com, Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        },
        {
          "id": "fassadenmontagesystem",
          "name": "Fassadenmontagesystem",
          "produkttyp": "unterkonstruktion",
          "anwendungen": [
            "fassade_hinterlueftet"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "richtwerte": {},
          "referenz_tags": [
            "fassade"
          ],
          "_quelle": "solarix-solar.com (patentiert, Module einzeln entnehmbar), Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        }
      ],
      "slug": "solarix"
    },
    {
      "schema_version": "0.2",
      "hersteller": {
        "name": "Sunage SA",
        "land": "CH",
        "website": "https://sunage.ch/",
        "profil": "Tessiner BIPV-Hersteller; Suncol-Linie für Dach und Fassade, massfertigbar für beliebige Gebäudehüllen.",
        "verifiziert": false
      },
      "serien": [
        {
          "id": "suncol-tile",
          "name": "Suncol Tile",
          "produkttyp": "modul",
          "anwendungen": [
            "dach_indach",
            "dachziegel"
          ],
          "ausgestaltung": "parametrisch",
          "richtwerte": {},
          "referenz_tags": [
            "indach"
          ],
          "_quelle": "sunage.ch, Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        },
        {
          "id": "suncol-facade",
          "name": "Suncol Facade",
          "produkttyp": "modul",
          "anwendungen": [
            "fassade_hinterlueftet"
          ],
          "ausgestaltung": "parametrisch",
          "richtwerte": {},
          "referenz_tags": [
            "fassade"
          ],
          "_quelle": "sunage.ch, Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        },
        {
          "id": "suncol-bapv",
          "name": "Suncol BAPV",
          "produkttyp": "modul",
          "anwendungen": [
            "dach_aufdach"
          ],
          "ausgestaltung": "parametrisch",
          "parameter": {
            "aufbauten": [
              "2-glas",
              "glas-folie"
            ]
          },
          "richtwerte": {},
          "_quelle": "sunage.ch (Glass-Glass/Glass-Backsheet), Rohaufnahme Website 2026-11-20 (docs/hersteller-paletten.md)",
          "_status": "freigegeben"
        }
      ],
      "slug": "sunage"
    },
    {
      "schema_version": "0.2",
      "hersteller": {
        "name": "SwissWatt One",
        "land": "CH",
        "website": "https://www.enfsolar.com/swisswatt-one",
        "profil": "Schweizer Modulanbieter mit Fokus Fullblack-Dachmodule; Details und Sortiment in Verifizierung.",
        "verifiziert": false
      },
      "serien": [
        {
          "id": "fullblack",
          "name": "Fullblack-Module",
          "produkttyp": "modul",
          "anwendungen": [
            "dach_aufdach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "optionen": {
            "farben": {
              "technologie": "Full Black",
              "werte": [
                "schwarz"
              ],
              "frei": false
            }
          },
          "richtwerte": {},
          "referenz_tags": [
            "fullblack",
            "schweiz"
          ],
          "_quelle": "enfsolar.com-Eintrag; Sortiment durch Hersteller/Luca zu ergänzen, Rohaufnahme Web 2026-11-21; Einzelprodukte kommen als Varianten über den Release-Watcher (data/samples/)",
          "_status": "freigegeben"
        }
      ],
      "slug": "swisswattone"
    },
    {
      "schema_version": "0.2",
      "hersteller": {
        "name": "Trina Solar",
        "land": "CN",
        "website": "https://www.trinasolar.com/",
        "profil": "Grosshersteller mit Vertex-Familie; Vertex S+ für Dächer, neue Serien bis 760 W für Gewerbe und Freifläche.",
        "verifiziert": false
      },
      "serien": [
        {
          "id": "vertex-s-plus",
          "name": "Vertex S+",
          "produkttyp": "modul",
          "anwendungen": [
            "dach_aufdach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "optionen": {
            "farben": {
              "technologie": "Full Black / Black Frame",
              "werte": [
                "schwarz"
              ],
              "frei": false
            }
          },
          "richtwerte": {},
          "_quelle": "trinasolar.com; pv-magazine 3/2026 (neue Serien bis 760 W), Rohaufnahme Web 2026-11-21; Einzelprodukte kommen als Varianten über den Release-Watcher (data/samples/)",
          "_status": "freigegeben"
        },
        {
          "id": "vertex-n",
          "name": "Vertex N (Gewerbe/Freifläche)",
          "produkttyp": "modul",
          "anwendungen": [
            "dach_aufdach",
            "flachdach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "richtwerte": {},
          "_quelle": "pv-magazine 3/2026, Rohaufnahme Web 2026-11-21; Einzelprodukte kommen als Varianten über den Release-Watcher (data/samples/)",
          "_status": "freigegeben"
        }
      ],
      "slug": "trina"
    },
    {
      "schema_version": "0.2",
      "hersteller": {
        "name": "ZinCo",
        "land": "DE",
        "website": "https://www.zinco.de/",
        "verifiziert": false,
        "profil": "Gründach-Systemanbieter; Solarbasis-Systeme halten PV auflastgehalten und durchdringungsfrei auf begrünten Flachdächern."
      },
      "serien": [
        {
          "id": "solarbasis-sb200",
          "name": "Solarbasis SB 200",
          "produkttyp": "unterkonstruktion",
          "anwendungen": [
            "flachdach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "eindeckungen": [
            "gruendach"
          ],
          "richtwerte": {},
          "referenz_tags": [
            "gruendach",
            "durchdringungsfrei"
          ],
          "_quelle": "zinco.de Produktdatenblatt SB 200, Broschüre Gründach+Solar, Rohaufnahme Web 2026-11-21",
          "_status": "freigegeben"
        },
        {
          "id": "solar-grundrahmen",
          "name": "Solar-Grundrahmen",
          "produkttyp": "unterkonstruktion",
          "anwendungen": [
            "flachdach"
          ],
          "ausgestaltung": "standard",
          "varianten": [],
          "eindeckungen": [
            "gruendach"
          ],
          "richtwerte": {},
          "_quelle": "zinco.de Produktdatenblatt Solar-Grundrahmen, Rohaufnahme Web 2026-11-21",
          "_status": "freigegeben"
        }
      ],
      "slug": "zinco"
    }
  ]
};
