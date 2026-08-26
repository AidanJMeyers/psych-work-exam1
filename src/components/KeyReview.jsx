import React, { useState } from 'react';
import { Card, Pill } from './Visual.jsx';

function ChapterSummary({ summary }) {
  const [copied, setCopied] = useState(false);
  if (!summary) return null;
  const { title, paragraphs = [], wordCount } = summary;

  const copy = async () => {
    const text = paragraphs.join('\n\n');
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — user can still select the text manually */
    }
  };

  return (
    <div className="bg-white border-2 border-violet-200 rounded-xl shadow-sm">
      <div className="px-5 py-4 border-b border-violet-100 bg-violet-50 rounded-t-xl flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h3 className="text-lg font-bold text-violet-900">📄 {title || 'Comprehensive Chapter Summary'}</h3>
          <p className="text-sm text-violet-700 mt-0.5">
            Written as a base for your weekly overview paper — expand, cite, and make it your own.
            {wordCount ? ` ~${wordCount} words.` : ''}
          </p>
        </div>
        <button
          onClick={copy}
          className="px-3 py-1.5 text-xs font-semibold bg-violet-600 text-white rounded hover:bg-violet-700 shrink-0"
        >
          {copied ? 'Copied ✓' : 'Copy summary'}
        </button>
      </div>
      <div className="px-5 py-5 space-y-4 text-slate-800 leading-relaxed">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-[15px]">{p}</p>
        ))}
      </div>
    </div>
  );
}

export default function KeyReview({ keyReview }) {
  if (!keyReview) return null;
  const { summary, vocab = [], laws = [], methods = [], diagrams = [], numbers = [] } = keyReview;
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-violet-600 to-sky-600 text-white rounded-xl p-5">
        <h2 className="text-2xl font-bold">Key Review — Fast Recall</h2>
        <p className="text-violet-100 text-sm mt-1">
          Full chapter summary, vocab, principles, methods and the numbers worth memorizing.
        </p>
      </div>

      <ChapterSummary summary={summary} />

      {numbers.length > 0 && (
        <Card title="Numbers, Dates & Figures Worth Memorizing">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {numbers.map((n, i) => (
              <div key={i} className="border border-slate-200 rounded p-3 bg-amber-50">
                <div className="text-xl font-bold text-amber-900">{n.value}</div>
                <div className="text-sm text-slate-700 mt-0.5">{n.what}</div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {vocab.length > 0 && (
        <Card title={`Key Vocabulary (${vocab.length} terms)`}>
          <div className="grid gap-3 md:grid-cols-2">
            {vocab.map((v, i) => (
              <div key={i} className="border border-slate-200 rounded p-3 bg-slate-50">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-bold text-slate-900">{v.term}</span>
                  {v.tag && <Pill color={v.tagColor || 'blue'}>{v.tag}</Pill>}
                </div>
                <div className="text-sm text-slate-700">{v.def}</div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {laws.length > 0 && (
        <Card title="Principles, Models & Rules">
          <ul className="space-y-3">
            {laws.map((l, i) => (
              <li key={i} className="border-l-4 border-violet-400 pl-3 py-1">
                <div className="font-semibold text-slate-900">{l.name}</div>
                <div className="text-sm text-slate-700">{l.desc}</div>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {methods.length > 0 && (
        <Card title="Methods, Mnemonics & Procedures">
          <div className="grid gap-3 md:grid-cols-2">
            {methods.map((m, i) => (
              <div key={i} className="border border-slate-200 rounded p-3">
                <div className="font-bold text-slate-900 mb-1">{m.name}</div>
                {m.expand && <div className="text-xs text-slate-500 mb-2">{m.expand}</div>}
                <div className="text-sm text-slate-700">{m.desc}</div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {diagrams.length > 0 && (
        <Card title="Diagrams & Comparison Charts">
          <div className="grid gap-4 md:grid-cols-2">
            {diagrams.map((d, i) => (
              <div key={i} className="border border-slate-200 rounded p-3 bg-white">
                <div className="font-semibold text-slate-800 mb-2">{d.title}</div>
                <div className="flex justify-center">{d.visual}</div>
                {d.caption && <div className="text-xs text-slate-600 mt-2 italic">{d.caption}</div>}
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
