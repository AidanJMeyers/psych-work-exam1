import React, { useEffect, useState } from 'react';
import { storage } from '../storage';
import { units } from '../data/units.js';

const ACCENTS = {
  sky: {
    bar: 'from-sky-600 to-indigo-600',
    chip: 'bg-sky-100 text-sky-800',
    btn: 'bg-sky-600 hover:bg-sky-700',
    fill: 'bg-sky-500'
  },
  emerald: {
    bar: 'from-emerald-600 to-teal-600',
    chip: 'bg-emerald-100 text-emerald-800',
    btn: 'bg-emerald-600 hover:bg-emerald-700',
    fill: 'bg-emerald-500'
  }
};

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-slate-900">{value}</div>
      <div className="text-[11px] uppercase tracking-wide text-slate-500">{label}</div>
    </div>
  );
}

export default function HomeView({ onOpenUnit, onOpenReview, noteCount }) {
  const [stats, setStats] = useState({});

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const out = {};
      for (const u of units) {
        const blocks = u.chapters.reduce((n, c) => n + c.blocks.length, 0);
        const questions = u.chapters.reduce((n, c) => n + c.questions.length, 0);

        const reviewedFlags = await Promise.all(
          u.chapters.flatMap((c) =>
            c.blocks.map((b) => storage.get(`studyguide:ch${c.id}:block${b.id}:reviewed`))
          )
        );
        const answerFlags = await Promise.all(
          u.chapters.flatMap((c) =>
            c.questions.map((_, i) => storage.get(`studyguide:ch${c.id}:q${i}`))
          )
        );
        const examFlags = u.exam
          ? await Promise.all(u.exam.map((_, i) => storage.get(`${u.examPrefix}${i}`)))
          : [];

        out[u.id] = {
          blocks,
          questions,
          reviewed: reviewedFlags.filter(Boolean).length,
          answered: answerFlags.filter((s) => s && s.submitted).length,
          examAnswered: examFlags.filter((s) => s && s.submitted).length,
          examTotal: u.exam ? u.exam.length : 0
        };
      }
      if (!cancelled) setStats(out);
    })();
    return () => { cancelled = true; };
  }, []);

  const totalChapters = units.reduce((n, u) => n + u.chapters.length, 0);
  const totalQuestions = units.reduce(
    (n, u) => n + u.chapters.reduce((m, c) => m + c.questions.length, 0) + (u.exam ? u.exam.length : 0),
    0
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <header className="mb-8">
        <div className="text-xs uppercase tracking-[0.2em] text-sky-700 font-bold">
          Rollins College · Fall 2026
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mt-2">PSY 319 — Psychology of Work</h1>
        <p className="text-slate-600 mt-2 text-lg">
          Course study dashboard. Pick an exam to open its chapters, key reviews, and practice questions.
        </p>
        <div className="flex gap-6 mt-5 pb-5 border-b border-slate-200">
          <Stat value={units.length} label="Exams" />
          <Stat value={totalChapters} label="Chapters" />
          <Stat value={totalQuestions} label="Questions" />
          <Stat value={noteCount ?? 0} label="Notes" />
        </div>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {units.map((u) => {
          const a = ACCENTS[u.accent] || ACCENTS.sky;
          const s = stats[u.id];
          const pct = s && s.blocks ? Math.round((s.reviewed / s.blocks) * 100) : 0;
          return (
            <section
              key={u.id}
              className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col"
            >
              <div className={`bg-gradient-to-r ${a.bar} text-white px-5 py-4`}>
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <h2 className="text-xl font-bold">{u.label}</h2>
                  {u.inProgress && (
                    <span className="text-[11px] font-semibold bg-white/25 px-2 py-0.5 rounded-full">
                      In progress
                    </span>
                  )}
                </div>
                <p className="text-sm text-white/90 mt-0.5">{u.chapterLabel}</p>
              </div>

              <div className="px-5 py-4 flex-1 flex flex-col">
                <p className="text-sm font-semibold text-slate-800">{u.title}</p>
                <p className="text-sm text-slate-600 mt-1 flex-1">{u.blurb}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {u.chapters.map((c) => (
                    <span key={c.id} className={`text-[11px] font-semibold px-2 py-1 rounded ${a.chip}`}>
                      Ch {c.id}
                    </span>
                  ))}
                </div>

                {s && (
                  <>
                    <div className="mt-4">
                      <div className="flex justify-between text-xs text-slate-500 mb-1">
                        <span>Blocks reviewed</span>
                        <span>{s.reviewed}/{s.blocks} · {pct}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded overflow-hidden">
                        <div className={`h-full ${a.fill} transition-all`} style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                    <div className="flex gap-5 mt-3 text-xs text-slate-600">
                      <span>
                        <strong className="text-slate-900">{s.answered}</strong>/{s.questions} practice answered
                      </span>
                      {s.examTotal > 0 && (
                        <span>
                          <strong className="text-slate-900">{s.examAnswered}</strong>/{s.examTotal} exam answered
                        </span>
                      )}
                    </div>
                  </>
                )}

                <button
                  onClick={() => onOpenUnit(u.id)}
                  className={`mt-4 w-full px-4 py-2.5 text-sm font-semibold text-white rounded ${a.btn}`}
                >
                  Open {u.label} &rarr;
                </button>
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-6 bg-white border border-slate-200 rounded-xl p-5 flex items-center justify-between gap-4 flex-wrap shadow-sm">
        <div>
          <h3 className="font-bold text-slate-900">📝 Review Later</h3>
          <p className="text-sm text-slate-600">
            Every block and question you flagged with a note, across the whole course.
          </p>
        </div>
        <button
          onClick={onOpenReview}
          className="px-4 py-2 text-sm font-semibold bg-amber-500 text-white rounded hover:bg-amber-600 whitespace-nowrap"
        >
          {noteCount ? `View ${noteCount} note${noteCount === 1 ? '' : 's'}` : 'View notes'}
        </button>
      </div>

      <p className="text-xs text-slate-400 mt-8 text-center">
        Built from Truxillo, Bauer &amp; Erdogan, <em>Psychology and Work</em> (2nd ed.). Progress saves in
        this browser.
      </p>
    </div>
  );
}
