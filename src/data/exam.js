import part1 from './exam_part1.js';
import part2 from './exam_part2.js';

export const examConfig = {
  subject: 'PSY 319 · Exam 1',
  totalQuestions: part1.length + part2.length,
  timed: true,
  timeLimitMin: 75,
  passThreshold: 80
};

// Fresh items — none of these repeat the per-chapter practice banks.
export const exam = [...part1, ...part2];
