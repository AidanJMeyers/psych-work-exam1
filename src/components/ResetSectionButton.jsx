import React, { useState } from 'react';
import { resetPrefix } from '../storage';

/**
 * Clears every stored key under `prefix` after a confirmation step.
 * Used to reset one chapter's practice questions, or the practice exam,
 * without touching the rest of the dashboard's progress.
 *
 * Props:
 *   prefix  - storage key prefix to clear (e.g. 'studyguide:ch2:q')
 *   label   - button text when idle
 *   note    - short line describing exactly what will be cleared
 *   onReset - called after the clear completes
 */
export default function ResetSectionButton({ prefix, label = 'Reset', note, onReset }) {
  const [confirming, setConfirming] = useState(false);
  const [busy, setBusy] = useState(false);

  const doReset = async () => {
    setBusy(true);
    await resetPrefix(prefix);
    setBusy(false);
    setConfirming(false);
    onReset?.();
  };

  if (!confirming) {
    return (
      <button
        onClick={() => setConfirming(true)}
        className="px-3 py-1.5 text-xs font-semibold bg-slate-200 text-slate-700 rounded hover:bg-slate-300 whitespace-nowrap"
      >
        {label}
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2 flex-wrap justify-end">
      {note && <span className="text-xs text-slate-600">{note}</span>}
      <button
        onClick={doReset}
        disabled={busy}
        className="px-3 py-1.5 text-xs font-semibold bg-red-600 text-white rounded hover:bg-red-700 disabled:bg-slate-300 whitespace-nowrap"
      >
        {busy ? 'Clearing…' : 'Yes, clear'}
      </button>
      <button
        onClick={() => setConfirming(false)}
        disabled={busy}
        className="px-3 py-1.5 text-xs font-semibold bg-slate-200 text-slate-700 rounded hover:bg-slate-300"
      >
        Cancel
      </button>
    </div>
  );
}
