// src/data/currentAffairs.ts
export type CAItem = {
  id: string
  date: string // YYYY-MM-DD
  title: string
  category: 'National' | 'International' | 'Economy' | 'Science & Tech' | 'Environment' | 'Polity' | 'Society' | 'Defence' | 'Sports' | 'Culture'
  points: string[]
  source?: string
}

export const CURRENT_AFFAIRS: CAItem[] = [
  {
    id: 'ca-2025-08-31-rhisotope',
    date: '2025-08-31',
    title: 'Rhisotope Project: Radioisotopes to deter rhino poaching',
    category: 'Environment',
    points: [
      'Launched in South Africa; pilot with 20 rhinos after ~6 years of R&D',
      'Tiny, safe isotope dose in horn detectable by standard radiation portal monitors at borders',
      'Devalues horn for traditional medicine markets; aim is supply-side deterrence',
    ],
    source: 'University of the Witwatersrand / IAEA (overview)',
  },
  {
    id: 'ca-2025-08-30-up-chief-secretary',
    date: '2025-08-30',
    title: 'Shashi Prakash Goyal appointed Chief Secretary of Uttar Pradesh',
    category: 'Polity',
    points: [
      '1989-batch IAS; previously Additional Chief Secretary to CM',
      'Succeeds Manoj Kumar Singh (1988 batch) after his retirement',
      'Sanjay Prasad to lead CM’s secretariat as Principal Secretary',
    ],
    source: 'State Govt notification / media reports',
  },
]