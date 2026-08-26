# PSY 319 — Psychology of Work · Exam 1 Study Dashboard

Interactive study guide covering **Chapters 1, 2, 3, 4, and 6** of Truxillo, Bauer &
Erdogan, *Psychology and Work: An Introduction to Industrial and Organizational
Psychology*.

**Live site:** https://aidanjmeyers.github.io/psych-work-exam1/

---

## What's in it

| Chapter | Title | Study blocks | Vocab terms | Practice questions |
|---|---|---:|---:|---:|
| 1 | I-O Psychology: The Profession & Its History | 15 | 30 | 50 |
| 2 | Research Methods | 18 | 68 | 69 |
| 3 | Job Analysis | 13 | 44 | 65 |
| 4 | Measuring Work Performance: Criterion Measures | 12 | 25 | 52 |
| 6 | Personnel Selection: Tests & Other Procedures | 18 | 50 | 94 |
| | **Totals** | **76** | **217** | **330** |
| — | **Practice Exam** (fresh items, none repeated from the chapter banks) | — | — | 80 |

**Every question is multiple choice**, matching the exam format.

### Per chapter, three sub-tabs

1. **Study Guide** — every block leads with the textbook's own figure or table
   (rendered directly from the PDF, not recreated), followed by expanded
   explanation, comparison tables, and callouts flagging likely exam traps. Each
   block has a *reviewed* checkbox, a 1–5 confidence slider, and a note box.
2. **Key Review** — opens with a **comprehensive multi-paragraph chapter summary**
   (~1,100–1,250 words, with a Copy button) written as a base for weekly overview
   papers, followed by the numbers worth memorizing, the full vocabulary list,
   principles and rules, and mnemonics.
3. **Practice Questions** — MCQs with per-question submit, running score,
   difficulty chips, detailed explanations on submit, and a note box.

### Global tabs

- **Practice Exam** — 80 fresh questions distributed proportionally across the five
  chapters plus five integrative cross-chapter items. Optional 75-minute timer,
  80% pass threshold, and a per-chapter breakdown when complete.
- **Review Later** — surfaces every block and question you left a note on, grouped
  by chapter, with a "Export as Markdown" download.

All progress (reviewed, confidence, notes, answers) persists in browser storage.
"Reset All Progress" in the sidebar clears everything after a confirmation.

---

## Images

67 figures and tables were rendered directly from the textbook PDF's own page
vectors at 3× zoom, so they are the book's original artwork rather than
recreations. See [`images/MANIFEST.md`](images/MANIFEST.md) for the full accounting
— every extracted image is either placed in a chapter block or logged with a reason
for not being used.

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
