# PSY 319 — Psychology of Work · Course Study Dashboard

Interactive study dashboard for Truxillo, Bauer & Erdogan, *Psychology and Work: An
Introduction to Industrial and Organizational Psychology* (2nd ed.).

**Live site:** https://aidanjmeyers.github.io/psych-work-exam1/

The site opens on a course home menu listing each exam. Pick an exam to open its
chapters, key reviews, and practice questions. Progress is tracked separately per
exam, so finishing Exam 1 does not reset or inflate Exam 2.

---

## Exam 1 — Foundations & Industrial Psychology

Chapters 1–4 and 6.

| Chapter | Title | Study blocks | Vocab terms | Practice questions |
|---|---|---:|---:|---:|
| 1 | I-O Psychology: The Profession & Its History | 15 | 30 | 50 |
| 2 | Research Methods | 18 | 68 | 69 |
| 3 | Job Analysis | 13 | 44 | 65 |
| 4 | Measuring Work Performance: Criterion Measures | 12 | 25 | 52 |
| 6 | Personnel Selection: Tests & Other Procedures | 18 | 50 | 94 |
| | **Totals** | **76** | **217** | **330** |
| — | **Practice Exam** (fresh items, none repeated from the chapter banks) | — | — | 80 |

## Exam 2 — Training, Motivation & Organizational Psychology

In progress. The final exam covers **Chapters 8–14**. Chapters 8 through 11 are
complete; 12 through 14 are added as the material is covered, and the Exam 2
practice exam is written once the chapter set is final.

| Chapter | Title | Study blocks | Vocab terms | Practice questions |
|---|---|---:|---:|---:|
| 8 | Training and Development | 11 | 52 | 76 |
| 9 | Work Motivation | 12 | 74 | 100 |
| 10 | Leadership at Work | 11 | 40 | 91 |
| 11 | Job Attitudes and Emotions at Work | 9 | 39 | 72 |
| | **Totals** | **43** | **205** | **339** |

**Every question is multiple choice**, matching the exam format.

---

## Per chapter, three sub-tabs

1. **Study Guide** — every block leads with the textbook's own figure or table
   (rendered directly from the PDF, not recreated), followed by expanded
   explanation, comparison tables, and callouts flagging likely exam traps. Each
   block has a *reviewed* checkbox, a 1–5 confidence slider, and a note box.
2. **Key Review** — opens with a **comprehensive multi-paragraph chapter summary**
   (~1,100–1,250 words, with a Copy button) written as a base for weekly overview
   papers, followed by the numbers worth memorizing, the full vocabulary list,
   principles and rules, and mnemonics.
3. **Practice Questions** — MCQs with per-question submit, running score,
   difficulty chips, detailed explanations on submit, and a note box. A **Reset
   answers** button clears just that chapter's practice answers.

## Global features

- **Course home** — exam cards with chapter chips, blocks-reviewed progress bars,
  and practice/exam answered counts.
- **Practice Exam** (per exam) — Exam 1 has 80 fresh questions distributed
  proportionally across its five chapters plus five integrative cross-chapter items.
  Optional 75-minute timer, 80% pass threshold, per-chapter breakdown when complete,
  and its own **Reset exam** button.
- **Review Later** — surfaces every block and question you left a note on, grouped
  by exam and chapter, with an "Export as Markdown" download. Clicking a note jumps
  to the item, switching exams automatically if the note lives in another one.

All progress (reviewed, confidence, notes, answers) persists in browser storage
under `studyguide:` keys. Each section's reset button clears only its own keys;
"Reset All Progress" in the sidebar clears every exam after a confirmation.

---

## Images

102 figures and tables were rendered directly from the textbook PDF's own page
vectors at 3× zoom, so they are the book's original artwork rather than
recreations. See [`images/MANIFEST.md`](images/MANIFEST.md) for the full accounting
— every extracted image is either placed in a chapter block or logged with a reason
for not being used.

---

## Adding a chapter

1. Write `src/chapters/chNN_blocks.jsx`, `chNN_keyreview.js`, and
   `chNN_questions.js`, then a `chNN_<slug>.jsx` wrapper exporting
   `{ id, title, subtitle, blocks, keyReview, questions }`.
2. Register the chapter in the right unit in [`src/data/units.js`](src/data/units.js).
3. Add a `manualChunks` line for `chNN` in `vite.config.js` to keep it code-split.

Adding a whole exam means appending a unit to `units.js` with its own `examPrefix`,
which keeps its stored progress isolated from the other exams.

---

## Running locally

```bash
npm install
npm run dev
```

## Building

```bash
npm run build
```

Deployment is automatic: pushing to `main` triggers the GitHub Actions workflow in
`.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages.

---

## Stack

Vite 5 · React 18 · Tailwind CSS 3. No runtime dependencies beyond React.
