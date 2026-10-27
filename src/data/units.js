import ch1 from '../chapters/ch01_io_profession_history.jsx';
import ch2 from '../chapters/ch02_research_methods.jsx';
import ch3 from '../chapters/ch03_job_analysis.jsx';
import ch4 from '../chapters/ch04_criterion_measures.jsx';
import ch6 from '../chapters/ch06_personnel_selection.jsx';
import ch8 from '../chapters/ch08_training_development.jsx';
import ch9 from '../chapters/ch09_work_motivation.jsx';
import ch10 from '../chapters/ch10_leadership_work.jsx';
import ch11 from '../chapters/ch11_job_attitudes_emotions.jsx';
import { exam as exam1 } from './exam.js';

/**
 * A "unit" is one exam's worth of the course. The dashboard is a course hub:
 * the welcome screen lists units, and clicking one opens its chapters,
 * practice exam and notes.
 *
 * Storage keys are chapter-scoped (`studyguide:ch{N}:...`), so chapters never
 * collide across units. Exam keys are namespaced per unit via `examPrefix`;
 * Exam 1 keeps the original `studyguide:exam:q` prefix so existing progress
 * carries over untouched.
 */
export const units = [
  {
    id: 'exam1',
    label: 'Exam 1',
    title: 'Exam 1 — Foundations & Industrial Psychology',
    blurb: 'The profession and its history, research methods, job analysis, criterion measures, and personnel selection.',
    chapterLabel: 'Chapters 1–4 and 6',
    accent: 'sky',
    chapters: [ch1, ch2, ch3, ch4, ch6],
    exam: exam1,
    examPrefix: 'studyguide:exam:q',
    examConfig: {
      subject: 'PSY 319 · Exam 1',
      totalQuestions: exam1.length,
      timed: true,
      timeLimitMin: 75,
      passThreshold: 80
    }
  },
  {
    id: 'exam2',
    label: 'Exam 2',
    title: 'Exam 2 — Training, Motivation & Organizational Psychology',
    blurb: 'Building out now. Chapters 8 through 11 are complete; 12 through 14 are added as the material is covered.',
    chapterLabel: 'Chapters 8–11 of 8–14',
    accent: 'emerald',
    inProgress: true,
    chapters: [ch8, ch9, ch10, ch11],
    // No practice exam yet — it will be written once the chapter set is final.
    exam: null,
    examPrefix: 'studyguide:exam2:q',
    examConfig: {
      subject: 'PSY 319 · Exam 2',
      totalQuestions: 0,
      timed: true,
      timeLimitMin: 75,
      passThreshold: 80
    }
  }
];

export function getUnit(id) {
  return units.find((u) => u.id === id) || null;
}

/** Every chapter across every unit — used by Review Later to resolve notes. */
export const allChapters = units.flatMap((u) => u.chapters);

/** Every exam question across every unit, tagged with its unit. */
export const allExamEntries = units
  .filter((u) => u.exam && u.exam.length)
  .map((u) => ({ unitId: u.id, prefix: u.examPrefix, exam: u.exam }));
