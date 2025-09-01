// src/data/questions.ts
export type MCQ = {
  id: string
  q: string
  options: string[]
  answer: number
  explanation?: string
  tags?: string[]
}

export const MCQS: MCQ[] = [
  {
    id: 'q-1',
    q: 'Which country launched the Rhisotope Project using radioactive isotopes to deter rhino poaching?',
    options: ['India', 'Namibia', 'South Africa', 'Botswana'],
    answer: 2,
    explanation: 'Led by University of the Witwatersrand (South Africa) with IAEA support.',
    tags: ['Environment', 'Wildlife'],
  },
  {
    id: 'q-2',
    q: 'The appointment of Shashi Prakash Goyal as UP Chief Secretary happened in which year?',
    options: ['2023', '2024', '2025', '2026'],
    answer: 2,
    explanation: 'He took charge in 2025 (late August).',
    tags: ['Polity', 'State Administration'],
  },
]// src/data/questions.ts

export type MCQ = {
  id: string;
  date?: string;           // optional publish date
  category?: string;       // e.g., "Current Affairs"
  region?: string;         // e.g., "UP"
  question: string;
  options: string[];
  answer: number;          // 0-based index of correct option
  explanation?: string;
  tags?: string[];
};

export const questions: MCQ[] = [
  // --- Multiple Choice Questions ---
  {
    id: "2025-09-01-q1",
    date: "2025-09-01",
    category: "Current Affairs",
    question:
      "What is the proposed maximum imprisonment for mass religious conversions under Rajasthan's new anti-conversion bill?",
    options: ["10 years", "14 years", "Life imprisonment", "20 years"],
    answer: 2,
    explanation: "The bill proposes life imprisonment for mass conversions.",
    tags: ["Rajasthan", "Bills"]
  },
  {
    id: "2025-09-01-q2",
    category: "Economy/Energy",
    question:
      "Which sector is India expanding its biofuel program to, according to the text?",
    options: [
      "Automobile manufacturing",
      "The construction equipment sector",
      "The aviation industry",
      "The shipping industry"
    ],
    answer: 1,
    explanation:
      "The program is being extended to the construction equipment sector (CE)."
  },
  {
    id: "2025-09-01-q3",
    category: "IR/West Asia",
    question:
      "What is the name of the post-war Gaza plan reportedly being circulated within the Trump administration?",
    options: [
      '"Gaza Peace and Prosperity" plan',
      '"The Abraham Accords for Gaza"',
      'The "GREAT Trust" proposal',
      '"Operation Gaza Reconstruction"'
    ],
    answer: 2,
    explanation: 'The proposal is called the "GREAT Trust".'
  },
  {
    id: "2025-09-01-q4",
    category: "Environment/Policy",
    question:
      "According to the new rules for India's Green Credit Programme, what canopy density is required for a plantation to be eligible for green credit?",
    options: ["10%", "25%", "40%", "50%"],
    answer: 2,
    explanation: "Plantations must achieve at least 40% canopy density."
  },
  {
    id: "2025-09-01-q5",
    category: "GST Reforms",
    question:
      'What is the proposed higher tax slab for "sin" and ultra-luxury goods under the new GST reform proposal?',
    options: ["28%", "32%", "40%", "50%"],
    answer: 2,
    explanation:
      'The proposal reserves a 40% slab for "sin" and ultra-luxury goods.'
  },
  {
    id: "2025-09-01-q6",
    category: "Awards",
    question:
      "What is the name of the Indian non-profit organization that won the 2025 Ramon Magsaysay Award?",
    options: ["Educate Girls", "Girls' Power Foundation", "Women and Child Welfare Foundation", "Girls Education Initiative"],
    answer: 0,
    explanation: "Educate Girls is the 2025 awardee from India."
  },
  {
    id: "2025-09-01-q7",
    category: "State Schemes (UP)",
    region: "UP",
    question:
      'How many families has the Uttar Pradesh government identified under its "zero poverty campaign" as of August 2025?',
    options: ["1.32 lakh", "13.32 lakh", "25 lakh", "3.72 lakh"],
    answer: 1,
    explanation:
      "13.32 lakh families have been identified; 3.72 lakh have started receiving benefits."
  },
  {
    id: "2025-09-01-q8",
    category: "Aviation Safety",
    question:
      "Which of the following is NOT a consequence of the increased safety surveillance by the DGCA?",
    options: [
      "More financial penalties",
      "More show-cause notices",
      "Suspension of licenses",
      "Imposing new flight routes"
    ],
    answer: 3,
    explanation:
      "DGCA actions include penalties, notices, suspensions—not imposing new routes."
  },
  {
    id: "2025-09-01-q9",
    category: "Road Safety (UP)",
    region: "UP",
    question:
      "What is the name of the campaign launched by the UP government to enforce helmet usage for two-wheeler riders?",
    options: [
      '"Helmet is Life"',
      '"Ride Safe UP"',
      '"No Helmet, No Petrol"',
      '"Wear a Helmet, Save a Life"'
    ],
    answer: 2,
    explanation:
      'Fuel pumps deny fuel without helmets—campaign titled "No Helmet, No Petrol".'
  },
  {
    id: "2025-09-01-q10",
    category: "Markets/IPO",
    question:
      "What is the total valuation Tata Capital is reportedly aiming for with its IPO?",
    options: ["$2 billion", "$11 billion", "$1.8 billion", "₹17,200 crore"],
    answer: 1,
    explanation: "Target valuation mentioned is about $11 billion."
  },
  {
    id: "2025-09-01-q11",
    category: "History/Society",
    question:
      "What is the name of the legal act that the British used to brand denotified tribes as 'criminals by birth'?",
    options: [
      "The Criminal Code Act of 1871",
      "The Criminal Tribes Act of 1871",
      "The Colonial Criminal Act of 1871",
      "The British Criminal Act of 1871"
    ],
    answer: 1,
    explanation: "It was the Criminal Tribes Act, 1871."
  },
  {
    id: "2025-09-01-q12",
    category: "Trade/US Policy",
    question:
      "According to the text, what did US Trade Representative Jamieson Greer state about the court ruling on tariffs?",
    options: [
      "It would lead to financial ruin for the U.S. Treasury.",
      "It would be appealed to the Supreme Court.",
      "It would not deter the administration's trade agenda.",
      "It would immediately reverse all tariffs."
    ],
    answer: 2,
    explanation:
      "He said the ruling would not deter the administration’s trade agenda."
  },
  {
    id: "2025-09-01-q13",
    category: "Climate Targets",
    question: "What is India's net-zero emission target year?",
    options: ["2030", "2050", "2070", "2080"],
    answer: 2,
    explanation: "India has set 2070 as the net-zero target year."
  },
  {
    id: "2025-09-01-q14",
    category: "Aviation Safety",
    question:
      "What is the primary focus of the new framework adopted by the DGCA to identify systemic weaknesses?",
    options: [
      "Airlines and pilots only",
      "Airport operators and air traffic control",
      "The entire aviation ecosystem",
      "Airline maintenance protocols"
    ],
    answer: 2,
    explanation:
      "The framework covers the entire aviation ecosystem end-to-end."
  },
  {
    id: "2025-09-01-q15",
    category: "Food Regulation",
    question: "What is the full form of FOP in food labeling?",
    options: [
      "Food-On-Package",
      "Front-Of-Pack",
      "Food Origin and Processing",
      "Full On-Package"
    ],
    answer: 1,
    explanation: "FOP stands for Front-Of-Pack."
  },

  // --- Statement-Based Questions (treated as MCQs with explanations) ---
  {
    id: "2025-09-01-s1",
    category: "GST Reforms",
    question:
      "Which of the following statements are correct regarding the new GST system proposal?\nI. Current framework has four slabs.\nII. New proposal consolidates into two main slabs (5% & 18%).\nIII. 40% rate for sin/ultra-luxury goods.\nIV. No impact on govt revenue.",
    options: [
      "I and II only",
      "I, II, and III only",
      "II, III, and IV only",
      "I, II, III, and IV"
    ],
    answer: 1,
    explanation:
      "I–III are correct; IV is wrong—short-term negative revenue impact is projected."
  },
  {
    id: "2025-09-01-s2",
    category: "IR/West Asia",
    question:
      'Which statements are correct about the "GREAT Trust" proposal for Gaza?\nI. Developed by the Gaza Humanitarian Foundation (GHF).\nII. Proposes temporary relocation of Gaza’s population.\nIII. Uses digital tokens for property rights.\nIV. Widely supported by human rights orgs.',
    options: [
      "I and II only",
      "II and III only",
      "I, II, and III only",
      "I, II, III, and IV"
    ],
    answer: 2,
    explanation:
      "I–III are supported by the text; IV is incorrect—there is widespread criticism."
  },
  {
    id: "2025-09-01-s3",
    category: "Food Regulation",
    question:
      "Which statements are correct regarding FSSAI's proposed food labeling?\nI. FOP is immediately mandatory.\nII. Star rating is under consideration.\nIII. Voluntary initially, then mandatory.\nIV. Supreme Court directed FSSAI to finalize & implement.",
    options: [
      "I and IV only",
      "II and III only",
      "II, III, and IV only",
      "I, II, III, and IV"
    ],
    answer: 2,
    explanation:
      "II–IV are correct; I is wrong because the scheme is voluntary initially (48 months)."
  },
  {
    id: "2025-09-01-s4",
    category: "Aviation Safety",
    question:
      "Which statements are correct regarding DGCA's increased safety surveillance?\nI. Additional 15% surveillance this year.\nII. Mid-air collision risk above benchmarks.\nIII. Audits found training/maintenance gaps.\nIV. Purely punitive; only suspensions.",
    options: [
      "I and II only",
      "II and III only",
      "I, II, and III only",
      "I, II, III, and IV"
    ],
    answer: 2,
    explanation:
      "I–III are correct; IV is wrong—the measure is proactive, with varied actions (not only suspensions)."
  },
  {
    id: "2025-09-01-s5",
    category: "State Schemes (UP)",
    region: "UP",
    question:
      'Which statements are correct about UP’s "zero poverty campaign"?\nI. Launched Aug 2024 to make state poverty-free by 2027.\nII. Target ≥25 ultra-poor families per Gram Panchayat.\nIII. Link identified families to welfare schemes.\nIV. All 13.32 lakh identified already receiving benefits.',
    options: [
      "I and II only",
      "I, II, and III only",
      "II, III, and IV only",
      "I, II, III, and IV"
    ],
    answer: 1,
    explanation:
      "I–III are correct; IV is wrong—only 3.72 lakh had started receiving benefits."
  },
  {
    id: "2025-09-01-s6",
    category: "Environment/Policy",
    question:
      "Which statements are correct regarding the new Green Credit rules for tree plantation?\nI. New rules (Aug 29, 2025) replace an earlier system.\nII. One credit per surviving tree older than 5 years.\nIII. Credits are non-tradable & non-transferable.\nIV. Credits can be used for compensatory afforestation & ESG reporting.",
    options: [
      "I and II only",
      "III and IV only",
      "I, III, and IV only",
      "I, II, III, and IV"
    ],
    answer: 3,
    explanation:
      "All four statements are correct per the notification details."
  },
  {
    id: "2025-09-01-s7",
    category: "Road Safety (UP)",
    region: "UP",
    question:
      'Which statements are correct regarding "No Helmet, No Petrol" in UP?\nI. Month-long drive till 30 Sept 2025.\nII. Both rider & pillion must wear helmets to get fuel.\nIII. Based on Motor Vehicles Act, 1988.\nIV. It is a punitive measure.',
    options: [
      "I and IV only",
      "I, II, and III only",
      "II, III, and IV only",
      "I, II, III, and IV"
    ],
    answer: 1,
    explanation:
      "I–III are correct; IV is wrong—the campaign is preventive, not punitive."
  },
  {
    id: "2025-09-01-s8",
    category: "History/Society",
    question:
      "Which statements are correct about the welfare board for denotified & nomadic tribes in UP?\nI. British enacted Criminal Tribes Act, 1871.\nII. Stigma removed on Aug 31, 1952 (Vimukt Jati Diwas).\nIII. Govt to provide voting rights & housing colonies.\nIV. CM announced the board at a state-level event in Lucknow.",
    options: [
      "I and II only",
      "III and IV only",
      "II, III, and IV only",
      "I, II, III, and IV"
    ],
    answer: 3,
    explanation: "All four statements are correct."
  },
  {
    id: "2025-09-01-s9",
    category: "Economy/Energy",
    question:
      "Which statements are correct regarding India’s biofuel program expansion?\nI. Extending to construction equipment sector for import reduction & net-zero goals.\nII. CE sector uses ~3–4% of India’s annual diesel.\nIII. Blending reduces carbon footprint of operations.\nIV. Challenge: possible ↑NOx and slight ↓efficiency.",
    options: [
      "I and II only",
      "III and IV only",
      "II, III, and IV only",
      "I, II, III, and IV"
    ],
    answer: 3,
    explanation: "All four statements are supported by the text."
  },
  {
    id: "2025-09-01-s10",
    category: "IR/China",
    question:
      "Which statements are correct about India–China relations discussed at the SCO Summit?\nI. First Modi–Xi meeting since informal talks in Kazan last year.\nII. PM Modi: peaceful border is a prerequisite for overall ties.\nIII. Xi: border issue should not define overall relationship.\nIV. Both agreed relations should be viewed through lens of a third country.",
    options: [
      "I and II only",
      "III and IV only",
      "I, II, and III only",
      "I, II, III, and IV"
    ],
    answer: 2,
    explanation:
      "I–III are correct; IV is wrong—leaders agreed ties should NOT be seen through a third-country lens."
  }
];