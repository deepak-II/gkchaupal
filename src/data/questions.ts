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
]