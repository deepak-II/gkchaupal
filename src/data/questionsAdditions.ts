// src/data/questionsAdditions.ts
export type Question = {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
  category?: string;
  year?: number;
};

export const questionsAdditions: Question[] = [
  // ===== Multiple Choice Questions =====
  {
    id: 1001,
    question: "What is the proposed maximum imprisonment for mass religious conversions under Rajasthan's new anti-conversion bill?",
    options: ["10 years", "14 years", "Life imprisonment", "20 years"],
    answer: "Life imprisonment",
    explanation: "The bill proposes life imprisonment for mass conversions.",
    category: "CA",
    year: 2025
  },
  {
    id: 1002,
    question: "Which sector is India expanding its biofuel program to, according to the provided text?",
    options: ["Automobile manufacturing", "The construction equipment sector", "The aviation industry", "The shipping industry"],
    answer: "The construction equipment sector",
    explanation: "The program is being extended to construction equipment to reduce diesel use and emissions.",
    category: "CA",
    year: 2025
  },
  {
    id: 1003,
    question: "What is the name of the post-war Gaza plan reportedly being circulated within the Trump administration?",
    options: [
      "\"Gaza Peace and Prosperity\" plan",
      "\"The Abraham Accords for Gaza\"",
      "The \"GREAT Trust\" proposal",
      "\"Operation Gaza Reconstruction\""
    ],
    answer: "The \"GREAT Trust\" proposal",
    explanation: "Reports refer to the plan as the GREAT Trust proposal.",
    category: "CA",
    year: 2025
  },
  {
    id: 1004,
    question: "According to the new rules for India's Green Credit Programme, what canopy density is required for plantation eligibility?",
    options: ["10%", "25%", "40%", "50%"],
    answer: "40%",
    explanation: "Eligibility requires a minimum 40% canopy density.",
    category: "CA",
    year: 2025
  },
  {
    id: 1005,
    question: "What is the proposed higher tax slab for 'sin' and ultra-luxury goods under the new GST reform proposal?",
    options: ["28%", "32%", "40%", "50%"],
    answer: "40%",
    explanation: "The proposal keeps a special higher 40% rate for such goods.",
    category: "CA",
    year: 2025
  },
  {
    id: 1006,
    question: "What is the name of the Indian non-profit organization that won the 2025 Ramon Magsaysay Award?",
    options: ["Educate Girls", "Girls' Power Foundation", "Women and Child Welfare Foundation", "Girls Education Initiative"],
    answer: "Educate Girls",
    explanation: "Educate Girls is the 2025 awardee.",
    category: "CA",
    year: 2025
  },
  {
    id: 1007,
    question: "How many families has the Uttar Pradesh government identified under its 'zero poverty campaign' as of August 2025?",
    options: ["1.32 lakh", "13.32 lakh", "25 lakh", "3.72 lakh"],
    answer: "13.32 lakh",
    explanation: "13.32 lakh families have been identified so far.",
    category: "CA",
    year: 2025
  },
  {
    id: 1008,
    question: "Which of the following is NOT a consequence of the increased safety surveillance by the DGCA?",
    options: ["More financial penalties", "More show-cause notices", "Suspension of licenses", "Imposing new flight routes"],
    answer: "Imposing new flight routes",
    explanation: "The surveillance may cause penalties/notices/suspensions, not route changes.",
    category: "CA",
    year: 2025
  },
  {
    id: 1009,
    question: "What is the name of the campaign launched by the Uttar Pradesh government to enforce helmet usage for two-wheeler riders?",
    options: ["Helmet is Life", "Ride Safe UP", "No Helmet, No Petrol", "Wear a Helmet, Save a Life"],
    answer: "No Helmet, No Petrol",
    explanation: "Fuel is refused without helmets to promote safety.",
    category: "CA",
    year: 2025
  },
  {
    id: 1010,
    question: "What total valuation is Tata Capital reportedly aiming for with its IPO?",
    options: ["$2 billion", "$11 billion", "$1.8 billion", "₹17,200 crore"],
    answer: "$11 billion",
    explanation: "Reports peg the target valuation at around $11B.",
    category: "CA",
    year: 2025
  },
  {
    id: 1011,
    question: "What is the name of the legal act that the British used to brand denotified tribes as 'criminals by birth'?",
    options: [
      "The Criminal Code Act of 1871",
      "The Criminal Tribes Act of 1871",
      "The Colonial Criminal Act of 1871",
      "The British Criminal Act of 1871"
    ],
    answer: "The Criminal Tribes Act of 1871",
    explanation: "That was the stigmatizing colonial law.",
    category: "CA",
    year: 2025
  },
  {
    id: 1012,
    question: "According to the provided text, what did USTR Jamieson Greer state about the court ruling on tariffs?",
    options: [
      "It would lead to financial ruin for the U.S. Treasury.",
      "It would be appealed to the Supreme Court.",
      "It would not deter the administration's trade agenda.",
      "It would immediately reverse all tariffs."
    ],
    answer: "It would not deter the administration's trade agenda.",
    explanation: "Greer said the agenda would continue despite the ruling.",
    category: "CA",
    year: 2025
  },
  {
    id: 1013,
    question: "What is India's net-zero emission target year?",
    options: ["2030", "2050", "2070", "2080"],
    answer: "2070",
    explanation: "India has announced a 2070 net-zero target.",
    category: "CA",
    year: 2025
  },
  {
    id: 1014,
    question: "What is the primary focus of the new DGCA framework to identify systemic weaknesses?",
    options: [
      "Airlines and pilots only",
      "Airport operators and air traffic control",
      "The entire aviation ecosystem",
      "Airline maintenance protocols"
    ],
    answer: "The entire aviation ecosystem",
    explanation: "It emphasizes a whole-of-system approach.",
    category: "CA",
    year: 2025
  },
  {
    id: 1015,
    question: "What is the full form of FOP, as used in the context of food labeling?",
    options: ["Food-On-Package", "Front-Of-Pack", "Food Origin and Processing", "Full On-Package"],
    answer: "Front-Of-Pack",
    explanation: "FOP = Front-Of-Pack labeling.",
    category: "CA",
    year: 2025
  },

  // ===== Statement-Based Questions =====
  {
    id: 1016,
    question:
      "Which of the following statements are correct regarding the new GST system proposal?\n\nI. The current GST framework has four main slabs.\nII. The new proposal aims to consolidate the tax structure into two main slabs of 5% and 18%.\nIII. A separate, higher rate of 40% would be reserved for 'sin' and ultra-luxury goods.\nIV. The restructuring is expected to have no impact on government revenue.",
    options: ["I and II only", "I, II, and III only", "II, III, and IV only", "I, II, III, and IV"],
    answer: "I, II, and III only",
    explanation:
      "I–III are correct. IV is wrong—the reform is projected to have a short-term negative revenue impact.",
    category: "CA",
    year: 2025
  },
  {
    id: 1017,
    question:
      "Which of the following statements are correct about the 'GREAT Trust' proposal for Gaza?\n\nI. The plan was developed by the Gaza Humanitarian Foundation (GHF).\nII. It proposes the temporary relocation of Gaza's population.\nIII. It suggests using 'digital tokens' for property rights.\nIV. The plan has received widespread support from human rights organizations.",
    options: ["I and II only", "II and III only", "I, II, and III only", "I, II, III, and IV"],
    answer: "I, II, and III only",
    explanation:
      "I–III are supported by the text. IV is false—the plan drew widespread criticism from human rights orgs and UN experts.",
    category: "CA",
    year: 2025
  },
  {
    id: 1018,
    question:
      "Which of the following statements are correct regarding the FSSAI's proposed food labeling?\n\nI. The FOP labeling initiative is a mandatory public health measure to combat NCDs.\nII. A star-rating system is one of the models under consideration.\nIII. The new regulations will be voluntary for a period before becoming mandatory.\nIV. The Supreme Court has directed the FSSAI to finalize and implement the regulations.",
    options: ["I and IV only", "II and III only", "II, III, and IV only", "I, II, III, and IV"],
    answer: "II, III, and IV only",
    explanation:
      "II–IV are correct; I is wrong because there will be a 48-month voluntary phase before it becomes mandatory.",
    category: "CA",
    year: 2025
  },
  {
    id: 1019,
    question:
      "Which of the following statements are correct regarding the DGCA's increased safety surveillance?\n\nI. The DGCA will conduct an additional 15% safety surveillance this year.\nII. The decision followed a review that found mid-air collision risk above acceptable benchmarks.\nIII. Recent audits revealed deficiencies in pilot training and aircraft maintenance.\nIV. The increased surveillance is a punitive measure that will only result in license suspensions.",
    options: ["I and II only", "II and III only", "I, II, and III only", "I, II, III, and IV"],
    answer: "I, II, and III only",
    explanation:
      "I–III are correct. IV is wrong—actions include notices and penalties; the approach is proactive, not purely punitive.",
    category: "CA",
    year: 2025
  },
  {
    id: 1020,
    question:
      "Which of the following statements are correct about the Uttar Pradesh government's 'zero poverty campaign'?\n\nI. The campaign was launched in August 2024 to make the state poverty-free by 2027.\nII. The state's goal was to identify at least 25 ultra-poor families in every Gram Panchayat.\nIII. The identified families are to be linked to various government welfare schemes.\nIV. As of August 2025, 13.32 lakh families have been identified, and all have already started receiving benefits.",
    options: ["I and II only", "I, II, and III only", "II, III, and IV only", "I, II, III, and IV"],
    answer: "I, II, and III only",
    explanation:
      "I–III are accurate; IV is incorrect—only a subset (about 3.72 lakh) had begun receiving benefits by Aug 2025.",
    category: "CA",
    year: 2025
  },
  {
    id: 1021,
    question:
      "Which of the following statements are correct regarding the new Green Credit rules for tree plantation?\n\nI. The new rules, notified on August 29, 2025, replace an earlier system.\nII. One green credit will be awarded for each surviving tree older than five years.\nIII. The credits are non-tradable and non-transferable.\nIV. The credits can be used to meet compensatory afforestation obligations and ESG reporting.",
    options: ["I and II only", "III and IV only", "I, III, and IV only", "I, II, III, and IV"],
    answer: "I, II, III, and IV",
    explanation:
      "All four statements are correct as per the new rules.",
    category: "CA",
    year: 2025
  },
  {
    id: 1022,
    question:
      "Which of the following statements are correct regarding the 'No Helmet, No Petrol' campaign in Uttar Pradesh?\n\nI. The campaign is a month-long drive ending on September 30, 2025.\nII. It is mandatory for both the rider and the pillion to wear helmets to get fuel.\nIII. The campaign is legally based on the Motor Vehicles Act, 1988.\nIV. The campaign is a punitive measure to enforce road safety.",
    options: ["I and IV only", "I, II, and III only", "II, III, and IV only", "I, II, III, and IV"],
    answer: "I, II, and III only",
    explanation:
      "I–III are correct. IV is wrong—the drive is positioned as proactive/preventive, not punitive.",
    category: "CA",
    year: 2025
  },
  {
    id: 1023,
    question:
      "Which of the following statements are correct regarding the welfare board for denotified and nomadic tribes in Uttar Pradesh?\n\nI. The British enacted the Criminal Tribes Act of 1871, branding these tribes as 'criminals by birth'.\nII. The stigma was removed on August 31, 1952, now marked as 'Vimukt Jati Diwas'.\nIII. The government will provide voting rights and housing colonies to members of these tribes.\nIV. The Chief Minister announced the creation of the board at a state-level event in Lucknow.",
    options: ["I and II only", "III and IV only", "II, III, and IV only", "I, II, III, and IV"],
    answer: "I, II, III, and IV",
    explanation:
      "All four statements are explicitly mentioned in the text.",
    category: "CA",
    year: 2025
  },
  {
    id: 1024,
    question:
      "Which of the following statements are correct regarding India's biofuel program expansion?\n\nI. The program is being extended to the construction equipment sector to reduce crude oil imports and advance net-zero goals.\nII. The construction equipment sector accounts for 3–4% of India's annual diesel consumption.\nIII. Blending biofuels is expected to help reduce the carbon footprint of construction operations.\nIV. One challenge is that blending can increase NOx emissions and slightly decrease fuel efficiency.",
    options: ["I and II only", "III and IV only", "II, III, and IV only", "I, II, III, and IV"],
    answer: "I, II, III, and IV",
    explanation:
      "All four statements are correct per the provided text.",
    category: "CA",
    year: 2025
  },
  {
    id: 1025,
    question:
      "Which of the following statements are correct about the relationship between India and China discussed at the SCO Summit?\n\nI. The meeting was the first between PM Modi and President Xi since their informal talks in Kazan last year.\nII. PM Modi stated that a peaceful border is a prerequisite for the overall relationship.\nIII. President Xi suggested that the border issue should not define the overall relationship.\nIV. Both leaders agreed their relations should be viewed through the lens of a third country.",
    options: ["I and II only", "III and IV only", "I, II, and III only", "I, II, III, and IV"],
    answer: "I, II, and III only",
    explanation:
      "I–III are correct; IV is incorrect—the meeting reaffirmed that ties shouldn’t be viewed through a third-country lens.",
    category: "CA",
    year: 2025
  }
];

export default questionsAdditions;
