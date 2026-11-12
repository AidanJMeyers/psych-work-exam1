import React from 'react';
import lectureEmphasis from '../data/lectureEmphasis.js';

function SlideTag({ s }) {
  if (!s) return null;
  return (
    <span className="shrink-0 inline-block px-1.5 py-0.5 rounded bg-white/70 border border-current/20 text-[10px] font-bold tabular-nums tracking-tight">
      {String(s).includes('–') || String(s).includes(',') ? `slides ${s}` : `slide ${s}`}
    </span>
  );
}

function Section({ tone, icon, title, lead, items, numbered }) {
  if (!items || items.length === 0) return null;
  const tones = {
    emerald: {
      wrap: 'border-emerald-200',
      head: 'bg-emerald-50 border-emerald-100 text-emerald-900',
      lead: 'text-emerald-700',
      item: 'border-emerald-100',
      topic: 'text-emerald-900',
      tag: 'text-emerald-700'
    },
    amber: {
      wrap: 'border-amber-200',
      head: 'bg-amber-50 border-amber-100 text-amber-900',
      lead: 'text-amber-700',
      item: 'border-amber-100',
      topic: 'text-amber-900',
      tag: 'text-amber-700'
    },
    slate: {
      wrap: 'border-slate-200',
      head: 'bg-slate-50 border-slate-100 text-slate-800',
      lead: 'text-slate-500',
      item: 'border-slate-100',
      topic: 'text-slate-700',
      tag: 'text-slate-500'
    }
  };
  const c = tones[tone] || tones.slate;

  return (
    <div className={`bg-white border-2 rounded-xl shadow-sm overflow-hidden ${c.wrap}`}>
      <div className={`px-5 py-3 border-b ${c.head}`}>
        <h3 className="text-base font-bold flex items-center gap-2">
          <span aria-hidden="true">{icon}</span>
          {title}
          <span className="font-normal opacity-60 text-sm">· {items.length}</span>
        </h3>
        {lead && <p className={`text-xs mt-0.5 ${c.lead}`}>{lead}</p>}
      </div>
      <ul className="divide-y divide-slate-100">
        {items.map((it, i) => (
          <li key={i} className="px-5 py-3">
            <div className="flex items-start gap-2 flex-wrap">
              {numbered && (
                <span className={`shrink-0 text-xs font-bold tabular-nums mt-0.5 ${c.tag}`}>{i + 1}.</span>
              )}
              <span className={`text-[15px] font-semibold leading-snug ${c.topic}`}>{it.t}</span>
              <span className={c.tag}><SlideTag s={it.s} /></span>
            </div>
            {it.note && <p className="text-sm text-slate-600 mt-1 leading-relaxed">{it.note}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function LectureEmphasis({ chapterId }) {
  const data = lectureEmphasis[chapterId];

  if (!data) {
    return (
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
        <p className="text-slate-600 text-sm">
          No lecture deck on file for this chapter yet. This tab compares the professor&rsquo;s own slides
          against the textbook content, and so far only the Exam 2 chapters (8&ndash;14) have decks loaded.
        </p>
      </div>
    );
  }

  const { deckSlides, heavy = [], activities = [], numbers = [], absent = [] } = data;

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl p-5">
        <h2 className="text-2xl font-bold">What She Emphasized</h2>
        <p className="text-emerald-50 text-sm mt-1">
          Read from her Chapter {chapterId} lecture deck ({deckSlides} slides) and lined up against the
          textbook. Slide numbers let you jump straight to the source.
        </p>
        <div className="flex flex-wrap gap-2 mt-3 text-xs font-semibold">
          <span className="px-2 py-1 rounded bg-white/15">{heavy.length} topics with dedicated slides</span>
          <span className="px-2 py-1 rounded bg-white/15">{activities.length} in-class activities</span>
          <span className="px-2 py-1 rounded bg-white/15">{absent.length} textbook-only topics</span>
        </div>
      </div>

      <Section
        tone="emerald"
        icon="★"
        title="On her slides"
        lead="She built a slide for each of these. Highest-probability exam material — study this first."
        items={heavy}
      />

      <Section
        tone="amber"
        icon="✎"
        title="Her in-class activities"
        lead="Scenario and application questions tend to reuse these framings, and several come with her own answer slides."
        items={activities}
        numbered
      />

      {numbers.length > 0 && (
        <div className="bg-white border-2 border-sky-200 rounded-xl shadow-sm overflow-hidden">
          <div className="px-5 py-3 border-b border-sky-100 bg-sky-50">
            <h3 className="text-base font-bold text-sky-900 flex items-center gap-2">
              <span aria-hidden="true">#</span>
              Numbers she put on a slide
              <span className="font-normal opacity-60 text-sm">· {numbers.length}</span>
            </h3>
            <p className="text-xs text-sky-700 mt-0.5">If a figure made it onto a slide, it is worth memorizing.</p>
          </div>
          <ul className="px-5 py-3 space-y-1.5">
            {numbers.map((n, i) => (
              <li key={i} className="text-sm text-slate-700 flex gap-2">
                <span className="text-sky-400 shrink-0">▸</span>
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Section
        tone="slate"
        icon="○"
        title="In the textbook, not on her slides"
        lead="Still fair game — the exam can draw from assigned reading — but this is where to spend time last, not first."
        items={absent}
      />
    </div>
  );
}
