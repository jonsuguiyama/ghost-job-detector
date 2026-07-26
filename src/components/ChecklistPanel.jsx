import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { itemIds, itemWeights, maxWeight, bucketFor } from '../lib/scoring';
import { track } from '../lib/analytics';

export default function ChecklistPanel({ onScoreChange }) {
  const { t } = useLanguage();
  const [checked, setChecked] = useState(() => new Array(itemWeights.length).fill(false));

  useEffect(() => {
    const checkedCount = checked.filter(Boolean).length;
    const weight = itemWeights.reduce((a, w, idx) => a + (checked[idx] ? w : 0), 0);
    const ratio = weight / maxWeight;
    const bucket = checkedCount === 0 ? 'none' : bucketFor(ratio);
    onScoreChange({
      ratio: checkedCount === 0 ? 0 : ratio,
      bucket,
      scoreBadgeText: t.scoreBadge(checkedCount, itemWeights.length, weight, maxWeight)
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked, t]);

  const toggle = (idx) => {
    setChecked((prev) => {
      const next = [...prev];
      next[idx] = !next[idx];
      track('item-toggle', { index: idx, checked: next[idx], weight: itemWeights[idx] });
      return next;
    });
  };

  return (
    <div>
      <p className="section-title">{t.checklistPage.sectionSignals}</p>
      <div>
        {t.items.map((text, idx) => (
          <label key={itemIds[idx]} className={`item${checked[idx] ? ' checked' : ''}`}>
            <input
              type="checkbox"
              className="item-checkbox"
              checked={checked[idx]}
              onChange={() => toggle(idx)}
              aria-label={text}
            />
            <div>
              <div className="item-text">{text}</div>
              <div className="item-weight">{t.weightLabel} {itemWeights[idx]}</div>
            </div>
          </label>
        ))}
      </div>
      <button
        className="reset-btn"
        onClick={() => { setChecked(new Array(itemWeights.length).fill(false)); track('reset-click', { mode: 'checklist' }); }}
      >
        {t.resetLabel}
      </button>
    </div>
  );
}
