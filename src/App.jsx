import React, { useEffect, useState } from 'react';
import ChapterView from './components/ChapterView.jsx';
import ExamView from './components/ExamView.jsx';
import ReviewLaterView from './components/ReviewLaterView.jsx';
import HomeView from './components/HomeView.jsx';
import { units, getUnit, allChapters } from './data/units.js';
import { storage, resetAll } from './storage';

export default function App() {
  // unit === null → welcome menu. Otherwise the open exam unit.
  const [unitId, setUnitId] = useState(() => {
    const saved = localStorage.getItem('studyguide:unit');
    return saved && getUnit(saved) ? saved : null;
  });
  const [active, setActive] = useState(() => localStorage.getItem('studyguide:activeTab') || '');
  const [progress, setProgress] = useState({});
  const [noteCount, setNoteCount] = useState(0);
  const [showReset, setShowReset] = useState(false);

  const unit = getUnit(unitId);

  useEffect(() => {
    if (unitId) localStorage.setItem('studyguide:unit', unitId);
    else localStorage.removeItem('studyguide:unit');
  }, [unitId]);

  useEffect(() => { localStorage.setItem('studyguide:activeTab', active); }, [active]);

  // If the saved tab does not belong to the open unit, fall back to its first chapter.
  useEffect(() => {
    if (!unit) return;
    const valid =
      active === 'review' ||
      (active === 'exam' && unit.exam) ||
      unit.chapters.some((c) => `ch${c.id}` === active);
    if (!valid) setActive(`ch${unit.chapters[0].id}`);
  }, [unitId]); // eslint-disable-line react-hooks/exhaustive-deps

  const refreshProgress = async () => {
    const p = {};
    await Promise.all(
      allChapters.map(async (ch) => {
        const reviewed = await Promise.all(
          ch.blocks.map((b) => storage.get(`studyguide:ch${ch.id}:block${b.id}:reviewed`))
        );
        p[`ch${ch.id}`] = { reviewed: reviewed.filter(Boolean).length, total: ch.blocks.length };
      })
    );
    await Promise.all(
      units
        .filter((u) => u.exam && u.exam.length)
        .map(async (u) => {
          const answers = await Promise.all(
            u.exam.map((_, i) => storage.get(`${u.examPrefix}${i}`))
          );
          p[`exam:${u.id}`] = {
            reviewed: answers.filter((s) => s && s.submitted).length,
            total: u.exam.length
          };
        })
    );
    setProgress(p);

    const allKeys = await storage.keys();
    const commentKeys = allKeys.filter((k) => k.endsWith(':comment'));
    const count = (await Promise.all(commentKeys.map((k) => storage.get(k))))
      .filter((v) => v && String(v).trim()).length;
    setNoteCount(count);
  };

  useEffect(() => {
    refreshProgress();
    const interval = setInterval(refreshProgress, 1500);
    return () => clearInterval(interval);
  }, []);

  const goHome = () => { setUnitId(null); setActive(''); };

  // Jumping to a block can cross units, which remounts the chapter. Poll for the
  // block, then land on it instantly and re-assert once the figures have loaded
  // and reflowed the page (a smooth scroll gets cancelled by that reflow).
  const scrollToBlock = (anchor, tries = 25) => {
    const el = document.getElementById(`block-${anchor}`);
    if (!el) {
      if (tries > 0) setTimeout(() => scrollToBlock(anchor, tries - 1), 120);
      return;
    }
    const land = () => el.scrollIntoView({ block: 'start' });
    land();
    setTimeout(land, 300);
    setTimeout(land, 800);
  };

  const navigate = (target, anchor) => {
    // Review Later links can point at a chapter in a different unit.
    if (target && target.startsWith('ch')) {
      const chId = Number(target.slice(2));
      const owner = units.find((u) => u.chapters.some((c) => c.id === chId));
      if (owner && owner.id !== unitId) setUnitId(owner.id);
    } else if (target && target.startsWith('exam')) {
      const owner = units.find((u) => `exam:${u.id}` === target || (target === 'exam' && u.id === 'exam1'));
      if (owner && owner.id !== unitId) setUnitId(owner.id);
      setActive('exam');
      return;
    }
    setActive(target);
    if (anchor) scrollToBlock(anchor);
  };

  // ---------------------------------------------------------------- welcome
  if (!unit) {
    return (
      <div className="min-h-screen bg-slate-50">
        {active === 'review' ? (
          <main>
            <div className="max-w-5xl mx-auto px-4 pt-6">
              <button
                onClick={goHome}
                className="text-sm font-semibold text-slate-600 hover:text-slate-900"
              >
                &larr; Course home
              </button>
            </div>
            <ReviewLaterView chapters={allChapters} units={units} onNavigate={navigate} />
          </main>
        ) : (
          <HomeView
            onOpenUnit={(id) => {
              setUnitId(id);
              const u = getUnit(id);
              setActive(`ch${u.chapters[0].id}`);
            }}
            onOpenReview={() => setActive('review')}
            noteCount={noteCount}
          />
        )}
      </div>
    );
  }

  // ------------------------------------------------------------------ unit
  const currentChapter = unit.chapters.find((c) => `ch${c.id}` === active);
  const examProgress = progress[`exam:${unit.id}`];

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-72 bg-slate-900 text-slate-200 min-h-screen sticky top-0 max-h-screen overflow-y-auto scrollbar-thin">
        <div className="p-5 border-b border-slate-800">
          <button
            onClick={goHome}
            className="text-xs font-semibold text-slate-400 hover:text-white mb-2 block"
          >
            &larr; All exams
          </button>
          <div className="text-xs uppercase tracking-wider text-sky-400 font-bold">PSY 319</div>
          <div className="text-xl font-bold text-white mt-1">{unit.label}</div>
          <div className="text-xs text-slate-400 mt-1">{unit.chapterLabel}</div>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {unit.chapters.map((ch) => {
            const p = progress[`ch${ch.id}`] || { reviewed: 0, total: ch.blocks.length };
            const isActive = active === `ch${ch.id}`;
            return (
              <button
                key={ch.id}
                onClick={() => setActive(`ch${ch.id}`)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition flex items-start gap-3 ${
                  isActive ? 'bg-sky-600 text-white shadow' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <span className={`text-xs font-bold mt-0.5 ${isActive ? 'text-sky-100' : 'text-slate-500'}`}>
                  {ch.id}
                </span>
                <span className="flex-1">
                  <div className="font-semibold leading-tight">{ch.title}</div>
                  <div className={`text-[10px] mt-0.5 ${isActive ? 'text-sky-100' : 'text-slate-500'}`}>
                    {p.reviewed}/{p.total} reviewed
                  </div>
                </span>
              </button>
            );
          })}
          <div className="my-2 border-t border-slate-800" />
          {unit.exam && unit.exam.length > 0 ? (
            <button
              onClick={() => setActive('exam')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition flex items-start gap-3 ${
                active === 'exam' ? 'bg-emerald-600 text-white shadow' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span className="text-base">🎯</span>
              <span className="flex-1">
                <div className="font-semibold">Practice Exam</div>
                <div className={`text-[10px] mt-0.5 ${active === 'exam' ? 'text-emerald-100' : 'text-slate-500'}`}>
                  {examProgress?.reviewed || 0}/{unit.exam.length} answered
                </div>
              </span>
            </button>
          ) : (
            <div className="px-3 py-2.5 rounded-lg text-sm text-slate-500 flex items-start gap-3">
              <span className="text-base opacity-50">🎯</span>
              <span className="flex-1">
                <div className="font-semibold text-slate-400">Practice Exam</div>
                <div className="text-[10px] mt-0.5">Added once the chapter set is final</div>
              </span>
            </div>
          )}
          <button
            onClick={() => setActive('review')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition flex items-start gap-3 ${
              active === 'review' ? 'bg-amber-500 text-white shadow' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <span className="text-base">📝</span>
            <span className="flex-1">
              <div className="font-semibold">Review Later</div>
              <div className={`text-[10px] mt-0.5 ${active === 'review' ? 'text-amber-100' : 'text-slate-500'}`}>
                {noteCount} note{noteCount === 1 ? '' : 's'}
              </div>
            </span>
          </button>
        </nav>
        <div className="p-3 border-t border-slate-800">
          <button
            onClick={() => setShowReset(true)}
            className="w-full px-3 py-2 text-xs font-semibold bg-red-900/40 text-red-300 rounded hover:bg-red-900/70"
          >
            Reset All Progress
          </button>
        </div>
      </aside>

      {/* Mobile top nav */}
      <div className="md:hidden fixed top-0 inset-x-0 z-20 bg-slate-900 text-white overflow-x-auto scrollbar-thin flex gap-1 px-2 py-2 border-b border-slate-800">
        <button
          onClick={goHome}
          className="whitespace-nowrap px-3 py-1.5 rounded text-xs font-semibold bg-slate-700"
        >
          &larr; Exams
        </button>
        {unit.chapters.map((ch) => {
          const p = progress[`ch${ch.id}`] || { reviewed: 0, total: ch.blocks.length };
          const isActive = active === `ch${ch.id}`;
          return (
            <button
              key={ch.id}
              onClick={() => setActive(`ch${ch.id}`)}
              className={`whitespace-nowrap px-3 py-1.5 rounded text-xs font-semibold ${isActive ? 'bg-sky-600' : 'bg-slate-800'}`}
            >
              Ch{ch.id} · {p.reviewed}/{p.total}
            </button>
          );
        })}
        {unit.exam && unit.exam.length > 0 && (
          <button
            onClick={() => setActive('exam')}
            className={`whitespace-nowrap px-3 py-1.5 rounded text-xs font-semibold ${active === 'exam' ? 'bg-emerald-600' : 'bg-slate-800'}`}
          >
            Exam
          </button>
        )}
        <button
          onClick={() => setActive('review')}
          className={`whitespace-nowrap px-3 py-1.5 rounded text-xs font-semibold ${active === 'review' ? 'bg-amber-500' : 'bg-slate-800'}`}
        >
          📝 {noteCount}
        </button>
      </div>

      {/* Main */}
      <main className="flex-1 min-w-0 md:pt-0 pt-14">
        {active === 'exam' && unit.exam ? (
          <ExamView
            key={unit.id}
            exam={unit.exam}
            chapters={unit.chapters}
            config={unit.examConfig}
            storagePrefix={unit.examPrefix}
          />
        ) : active === 'review' ? (
          <ReviewLaterView chapters={allChapters} units={units} onNavigate={navigate} />
        ) : currentChapter ? (
          <ChapterView key={currentChapter.id} chapter={currentChapter} />
        ) : (
          <div className="p-10 text-slate-500">Select a chapter.</div>
        )}
        <footer className="max-w-5xl mx-auto px-4 py-10 text-center text-xs text-slate-400">
          PSY 319 study dashboard · progress saves in this browser
        </footer>
      </main>

      {showReset && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Reset all progress?</h3>
            <p className="text-sm text-slate-600 mb-5">
              This clears every review checkbox, confidence rating, comment, practice answer, and exam
              answer — <strong>across every exam in the course</strong>. This cannot be undone. To clear just
              one section, use the reset button inside that section instead.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowReset(false)}
                className="px-4 py-2 text-sm font-semibold bg-slate-200 text-slate-700 rounded hover:bg-slate-300"
              >
                Cancel
              </button>
              <button
                onClick={async () => { await resetAll(); setShowReset(false); window.location.reload(); }}
                className="px-4 py-2 text-sm font-semibold bg-red-600 text-white rounded hover:bg-red-700"
              >
                Reset Everything
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
