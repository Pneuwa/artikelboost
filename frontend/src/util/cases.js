export const cases = ["all", "Nominativ", "Akkusativ", "Dativ", "Genitiv"];

export const casesInfo = [
  {
    case_name: "Nominativ",
    case_en: "Nominative",
    description: {
      purpose: "is the most basic form of a noun or pronoun",
      questions: ["Who", "What"],
      question_desc: "(the subject of the sentence)",
      note: "It's the doer of the action",
    },
    examples: [
      {
        parts: [
          {
            text: "Der Mann",
            highlight: true,
            article: "der",
            case: "Nominativ",
          },
          { text: " arbeitet im Büro.", highlight: false },
        ],
        example_en: "The man works in the office.",
      },
      {
        parts: [
          {
            text: "Die Frau",
            highlight: true,
            article: "die",
            case: "Nominativ",
          },
          { text: " liest ein Buch.", highlight: false },
        ],
        example_en: "The woman is reading a book.",
      },
      {
        parts: [
          {
            text: "Das Kind",
            highlight: true,
            article: "das",
            case: "Nominativ",
          },
          { text: " spielt im Garten.", highlight: false },
        ],
        example_en: "The child is playing in the garden.",
      },
      {
        parts: [
          {
            text: "Die Schüler",
            highlight: true,
            article: "die",
            case: "Nominativ",
          },
          { text: " schreiben eine Prüfung.", highlight: false },
        ],
        example_en: "The students are taking a test.",
      },
      {
        parts: [
          {
            text: "Ein Mann",
            highlight: true,
            article: "der",
            case: "Nominativ",
          },
          { text: " steht vor der Tür.", highlight: false },
        ],
        example_en: "A man is standing at the door.",
      },
      {
        parts: [
          {
            text: "Eine Frau",
            highlight: true,
            article: "die",
            case: "Nominativ",
          },
          { text: " telefoniert.", highlight: false },
        ],
        example_en: "A woman is on the phone.",
      },
      {
        parts: [
          {
            text: "Ein Kind",
            highlight: true,
            article: "das",
            case: "Nominativ",
          },
          { text: " spielt draußen.", highlight: false },
        ],
        example_en: "A child is playing outside.",
      },
    ],
    table: [],
  },
  {
    case_name: "Akkusativ",
    case_en: "Accusative",
    description: {
      purpose: "is used for the direct object of a verb",
      questions: ["Whom", "What"],
      question_desc: "(the thing that receives the action directly)",
      note: `Many verbs directly "act upon" an accusative object. Also, some prepositions in German always require the Accusative case such as durch, für, gegen, ohne, and um (e.g. Ich gehe durch den Park. — I walk through the park).`,
    },
    examples: [
      {
        parts: [
          { text: "Ich sehe ", highlight: false },
          {
            text: "den Mann",
            highlight: true,
            article: "der",
            case: "Akkusativ",
          },
          { text: ".", highlight: false },
        ],
        example_en: "I see the man.",
      },
      {
        parts: [
          { text: "Wir besuchen ", highlight: false },
          {
            text: "die Frau",
            highlight: true,
            article: "die",
            case: "Akkusativ",
          },
          { text: ".", highlight: false },
        ],
        example_en: "We are visiting the woman.",
      },
      {
        parts: [
          { text: "Er hat ", highlight: false },
          {
            text: "das Buch",
            highlight: true,
            article: "das",
            case: "Akkusativ",
          },
          { text: " gekauft.", highlight: false },
        ],
        example_en: "He bought the book.",
      },
      {
        parts: [
          { text: "Sie hört ", highlight: false },
          {
            text: "die Kinder",
            highlight: true,
            article: "die",
            case: "Akkusativ",
          },
          { text: " lachen.", highlight: false },
        ],
        example_en: "She hears the children laughing.",
      },
      {
        parts: [
          { text: "Ich sehe ", highlight: false },
          {
            text: "einen Mann",
            highlight: true,
            article: "der",
            case: "Akkusativ",
          },
          { text: ".", highlight: false },
        ],
        example_en: "I see a man.",
      },
      {
        parts: [
          { text: "Wir besuchen ", highlight: false },
          {
            text: "eine Frau",
            highlight: true,
            article: "die",
            case: "Akkusativ",
          },
          { text: ".", highlight: false },
        ],
        example_en: "We are visiting a woman.",
      },
      {
        parts: [
          { text: "Er kauft ", highlight: false },
          {
            text: "ein Buch",
            highlight: true,
            article: "das",
            case: "Akkusativ",
          },
          { text: ".", highlight: false },
        ],
        example_en: "He is buying a book.",
      },
    ],
    table: [
      { content: "Accusative", isBold: true },
      { content: "Direct Object" },
      { content: "Whom? What?" },
      { content: "den", isBold: true, color: "text-blue-300" },
      { content: "die", isBold: true, color: "text-rose-300" },
      { content: "das", isBold: true, color: "text-green-300" },
      { content: "die", isBold: true, color: "text-rose-400" },
    ],
  },
  {
    case_name: "Dativ",
    case_en: "Dative",
    description: {
      purpose:
        "is used for the indirect object of a verb, or for the recipient of an action",
      questions: ["To whom", "For whom"],
      question_desc: "",
      note: `Many verbs and prepositions require the Dative case.`,
    },
    examples: [
      {
        parts: [
          { text: "Ich gebe ", highlight: false },
          { text: "dem Mann", highlight: true, article: "der", case: "Dativ" },
          { text: " ein Buch.", highlight: false },
        ],
        example_en: "I give the man a book.",
      },
      {
        parts: [
          { text: "Er dankt ", highlight: false },
          { text: "der Frau", highlight: true, article: "die", case: "Dativ" },
          { text: ".", highlight: false },
        ],
        example_en: "He thanks the woman.",
      },
      {
        parts: [
          { text: "Wir helfen ", highlight: false },
          { text: "dem Kind", highlight: true, article: "das", case: "Dativ" },
          { text: ".", highlight: false },
        ],
        example_en: "We help the child.",
      },
      {
        parts: [
          { text: "Sie gibt ", highlight: false },
          {
            text: "den Kindern",
            highlight: true,
            article: "die",
            case: "Dativ",
          },
          { text: " Geschenke.", highlight: false },
        ],
        example_en: "She gives the children gifts.",
      },
      {
        parts: [
          { text: "Ich gebe ", highlight: false },
          {
            text: "einem Mann",
            highlight: true,
            article: "der",
            case: "Dativ",
          },
          { text: " das Geld.", highlight: false },
        ],
        example_en: "I give a man the money.",
      },
      {
        parts: [
          { text: "Er hilft ", highlight: false },
          {
            text: "einer Frau",
            highlight: true,
            article: "die",
            case: "Dativ",
          },
          { text: ".", highlight: false },
        ],
        example_en: "He helps a woman.",
      },
      {
        parts: [
          { text: "Sie zeigt das Bild ", highlight: false },
          {
            text: "einem Kind",
            highlight: true,
            article: "das",
            case: "Dativ",
          },
          { text: ".", highlight: false },
        ],
        example_en: "She shows the picture to a child.",
      },
    ],
    table: [
      { content: "Dative", isBold: true },
      { content: "Indirect Object" },
      { content: "To whom? For whom?" },
      { content: "dem", isBold: true, color: "text-blue-700" },
      { content: "der", isBold: true, color: "text-rose-700" },
      { content: "dem", isBold: true, color: "text-green-700" },
      { content: "den (+ noun -n)", isBold: true, color: "text-rose-800" },
    ],
  },
  {
    case_name: "Genitiv",
    case_en: "Genitive",
    description: {
      purpose: "is used to show possession or belonging",
      questions: ["Whose", "Of what"],
      question_desc: "",
      note: `It's less common in spoken German than the other cases, often replaced by von + Dativ in informal speech, but it's crucial in formal writing and fixed expressions.`,
    },
    examples: [
      {
        parts: [
          { text: "Das ist das Auto ", highlight: false },
          {
            text: "des Mannes",
            highlight: true,
            article: "der",
            case: "Genitiv",
          },
          { text: ".", highlight: false },
        ],
        example_en: "That is the man's car.",
      },
      {
        parts: [
          { text: "Der Name ", highlight: false },
          {
            text: "der Frau",
            highlight: true,
            article: "die",
            case: "Genitiv",
          },
          { text: " ist bekannt.", highlight: false },
        ],
        example_en: "The woman's name is well known.",
      },
      {
        parts: [
          { text: "Die Farbe ", highlight: false },
          {
            text: "des Hauses",
            highlight: true,
            article: "das",
            case: "Genitiv",
          },
          { text: " ist schön.", highlight: false },
        ],
        example_en: "The color of the house is beautiful.",
      },
      {
        parts: [
          { text: "Die Spielsachen ", highlight: false },
          {
            text: "der Kinder",
            highlight: true,
            article: "die",
            case: "Genitiv",
          },
          { text: " liegen überall.", highlight: false },
        ],
        example_en: "The children's toys are lying everywhere.",
      },
      {
        parts: [
          { text: "Die Tasche ", highlight: false },
          {
            text: "eines Mannes",
            highlight: true,
            article: "der",
            case: "Genitiv",
          },
          { text: " wurde gefunden.", highlight: false },
        ],
        example_en: "The bag of a man was found.",
      },
      {
        parts: [
          { text: "Das Buch ", highlight: false },
          {
            text: "einer Frau",
            highlight: true,
            article: "die",
            case: "Genitiv",
          },
          { text: " liegt hier.", highlight: false },
        ],
        example_en: "The book of a woman is here.",
      },
      {
        parts: [
          { text: "Die Tür ", highlight: false },
          {
            text: "eines Hauses",
            highlight: true,
            article: "das",
            case: "Genitiv",
          },
          { text: " ist offen.", highlight: false },
        ],
        example_en: "The door of a house is open.",
      },
    ],
    table: [
      { content: "Genitive", isBold: true },
      { content: "Possession" },
      { content: "Whose? Of what?" },
      { content: "des (+ noun -s/-es)", isBold: true, color: "text-sky-400" },
      { content: "der", isBold: true, color: "text-pink-400" },
      { content: "des (+ noun -s/-es)", isBold: true, color: "text-lime-400" },
      { content: "der", isBold: true, color: "text-pink-500" },
    ],
  },
];
