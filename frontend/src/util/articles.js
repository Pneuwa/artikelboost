import { artikelColors } from "./colors";

export const articles = ["all", "der", "die", "das"];

export const articleTips = [
  {
    artikel: "der",
    type: "Masculine",
    color: artikelColors.der.Nominativ,
    labelColor: "text-indigo-700",
    contentColor: "text-indigo-600",
    tips: [
      {
        label: "Common Groups",
        content: [
          {
            title: "Weekdays",
            value:
              "der Montag, der Dienstag, der Mittwoch, der Donnerstag, der Freitag, der Samstag, der Sonntag",
          },
          {
            title: "Months",
            value:
              "der Januar, der Februar, der März, der April, der Mai, der Juni, der Juli, der August, der September, der Oktober, der November, der Dezember",
          },
          {
            title: "Seasons",
            value: "der Frühling, der Sommer, der Herbst, der Winter",
          },
          {
            title: "Weather Terms",
            value:
              "der Regen, der Schnee, der Blitz, der Hagel, der Nebel, der Wind, der Sturm",
          },
          {
            title: "Directions",
            value: "der Norden, der Süden, der Osten, der Westen",
          },
          {
            title: "Male Persons and Professions",
            value:
              "der Vater, der Bruder, der Lehrer, der Arzt, der Student, der Bäcker",
          },
          {
            title: "Most alcoholic drinks",
            value:
              "der Whisky, der Wein, der Wodka, der Sekt (but not das Bier!)",
          },
          {
            title: "Car Brands",
            value: "der BMW, der Nissan, der Mercedes, der Ford, der Porsche",
          },
          {
            title: "Trains",
            value: "der ICE, der Regionalexpress, der Intercity",
          },
          {
            title: "Nouns Derived from Verbs Without Endings",
            value:
              "der Fang (fangen), der Gang (gehen), der Gesang (singen), der Sprung (springen), der Schlaf (schlafen), der Wille (wollen)",
          },
        ],
      },
      {
        label: "Typical Endings",
        content: [
          {
            title: "-er",
            value: "der Lehrer, der Computer, der Teller, der Sommer",
          },
          { title: "-ig", value: "der Honig, der König, der Essig, der Käfig" },
          {
            title: "-ismus",
            value: "der Journalismus, der Kommunismus, der Realismus",
          },
          {
            title: "-ist",
            value: "der Tourist, der Journalist, der Polizist, der Pianist",
          },
          {
            title: "-ling",
            value:
              "der Schmetterling, der Lehrling, der Zwilling, der Frühling",
          },
          {
            title: "-or",
            value: "der Motor, der Autor, der Doktor, der Professor",
          },
        ],
      },
    ],
  },
  {
    artikel: "die",
    type: "Feminine",
    color: artikelColors.die.Nominativ,
    labelColor: "text-rose-700",
    contentColor: "text-rose-600",
    tips: [
      {
        label: "Common Groups",
        content: [
          {
            title: "Numbers as used as nouns",
            value: "die Eins, die Zwei, die Drei, die Million, die Milliarde",
          },
          {
            title: "Fruits",
            value:
              "die Banane, die Orange, die Kirsche, die Traube, die Ananas (but not der Apfel!)",
          },
          {
            title: "Flowers",
            value: "die Rose, die Tulpe, die Nelke, die Lilie",
          },
          {
            title: "Aircrafts",
            value: "die Boeing 747, die Concorde, die Airbus",
          },
          {
            title: "Motorcycle Brands",
            value: "die Harley-Davidson, die Yamaha, die Honda",
          },
          {
            title: "Ship Names",
            value: "die Titanic, die Queen Mary, die Gorch Fock",
          },
          {
            title: "Female Persons and Professions",
            value:
              "die Mutter, die Schwester, die Lehrerin, die Ärztin, die Studentin",
          },
          {
            title: "Most Trees",
            value: "die Eiche, die Buche, die Birke (but der Baum!)",
          },
        ],
      },
      {
        label: "Typical Endings",
        content: [
          {
            title: "-e",
            value:
              "die Lampe, die Straße, die Blume, die Tasche, die Sonne (most common)",
          },
          {
            title: "-ei",
            value: "die Bäckerei, die Bücherei, die Metzgerei, die Malerei",
          },
          {
            title: "-ie",
            value: "die Familie, die Biologie, die Chemie, die Industrie",
          },
          {
            title: "-in",
            value:
              "die Lehrerin, die Studentin, die Freundin (female persons/professions)",
          },
          {
            title: "-heit/-keit",
            value:
              "die Freiheit, die Möglichkeit, die Schönheit, die Krankheit",
          },
          {
            title: "-schaft",
            value:
              "die Freundschaft, die Mannschaft, die Wissenschaft, die Botschaft",
          },
          {
            title: "-t",
            value:
              "die Fahrt (fahren), die Kunst (können), die Nacht, die Welt (often from verbs)",
          },
          {
            title: "-ung",
            value: "die Zeitung, die Wohnung, die Übung, die Meinung",
          },
          { title: "-ik", value: "die Musik, die Politik, die Fabrik" },
          {
            title: "-sion/-tion",
            value: "die Diskussion, die Information, die Revision",
          },
          { title: "-ur", value: "die Kultur, die Natur, die Agentur" },
        ],
      },
      {
        label: "Endings of Foreign Words",
        content: [
          {
            title: "-ade",
            value: "die Limonade, die Marmelade, die Promenade",
          },
          { title: "-age", value: "die Garage, die Reportage, die Collage" },
          { title: "-anz", value: "die Eleganz, die Bilanz, die Toleranz" },
          {
            title: "-enz",
            value: "die Intelligenz, die Konferenz, die Existenz",
          },
          { title: "-ion", value: "die Nation, die Religion, die Lektion" },
          {
            title: "-tät",
            value: "die Universität, die Qualität, die Realität",
          },
        ],
      },
    ],
  },
  {
    artikel: "das",
    type: "Neutrum",
    color: artikelColors.das.Nominativ,
    labelColor: "text-emerald-700",
    contentColor: "text-emerald-600",
    tips: [
      {
        label: "Common Groups",
        content: [
          {
            title: "Subjectivized Adjectives",
            value:
              "das Gute (the good), das Neue (the new), das Alte (the old)",
          },
          {
            title: "Verbs turned into Nouns",
            value:
              "das Essen (eating/the food), das Lesen (reading), das Schreiben (writing), das Schwimmen (swimming)",
          },
          {
            title: "Color Names",
            value: "das Blau, das Rot, das Grün, das Gelb",
          },
          {
            title: "Chemical Elements",
            value: "das Gold, das Eisen, das Wasserstoff, das Uran, das Helium",
          },
          {
            title: "Metals",
            value: "das Aluminium, das Silber, das Kupfer, das Zinn",
          },
          {
            title: "Young Animals / Children",
            value: "das Kind, das Kalb (calf), das Fohlen (foal)",
          },
          {
            title: "Hotels, Cinemas, Cafés",
            value: "das Hotel, das Kino, das Café",
          },
        ],
      },
      {
        label: "Typical Endings",
        content: [
          {
            title: "-chen (Diminutive)",
            value: "das Mädchen, das Brötchen, das Häuschen",
          },
          {
            title: "-lein (Diminutive)",
            value: "das Fräulein, das Büchlein, das Blümlein",
          },
          {
            title: "-ment",
            value: "das Dokument, das Argument, das Element, das Parlament",
          },
          {
            title: "-nis",
            value:
              "das Ergebnis, das Geheimnis, das Erlebnis (but die Finsternis!, die Erkenntnis!)",
          },
          { title: "-o", value: "das Auto, das Kino, das Büro, das Radio" },
          {
            title: "-tum",
            value:
              "das Eigentum, das Christentum, das Bürgertum (but der Reichtum!)",
          },
          {
            title: "-um",
            value:
              "das Museum, das Datum, das Zentrum, das Studium (Latin origin)",
          },
        ],
      },
      {
        label: "Nouns with the prefix",
        content: [
          {
            title: "Ge- (many, but not all)",
            value:
              "das Gebäude, das Gefühl, das Geschenk, das Gericht (but der Gebrauch, die Geschichte!)",
          },
        ],
      },
    ],
  },
];
