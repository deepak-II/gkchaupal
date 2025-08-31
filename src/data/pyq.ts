// src/data/pyq.ts
export type PYQ = {
  id: string
  year: number
  paper: string
  topic: string
  question: string
}

export const PYQS: PYQ[] = [
  {
    id: 'pyq-1',
    year: 2023,
    paper: 'UPSC Prelims',
    topic: 'Environment',
    question:
      'Discuss the concept of Assisted Natural Regeneration (ANR) and its role in ecosystem restoration.',
  },
  {
    id: 'pyq-2',
    year: 2022,
    paper: 'UPPSC Prelims',
    topic: 'Polity',
    question:
      'Which of the following are features of the 73rd Constitutional Amendment Act, 1992? (Select the correct statements).',
  },
]