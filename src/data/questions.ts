// src/data/questions.ts
import type { Question as MCQ } from './questionsAdditions';
import questionsAdditions from './questionsAdditions';

// Re-export the MCQ type so other files can import it from here
export type { Question as MCQ } from './questionsAdditions';

// Export the array your app uses
export const questions: MCQ[] = [...questionsAdditions];

export default questions;
