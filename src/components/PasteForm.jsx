import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { itemWeights, maxWeight, bucketFor, analyzeText } from '../lib/scoring';
import { track } from '../lib/analytics';

const QUESTION_ORDER = ['days', 'aggregator', 'form', 'duplicate', 'evergreen', 'silence', 'freeze'];

const initialAnswers = {
  days: '', aggregator: undefined, form: undefined, duplicate: undefined,
  evergreen: undefined, silence: undefined, freeze: undefined
};

function ToggleGroup({ value, options, onSelect }) {
  return (
    <div className="toggle-group">
      {options.map((opt) => (
        <button
          key={String(opt.value)}
          type="button"
          className={`toggle-btn${value === opt.value ? ' active' : ''}`}
          onClick={() => onSelect(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export default function PasteForm({ onScoreChange }) {
  const { t } = useLanguage();
  const p = t.paste;
  const [text, setText] = useState('');
  const [answers, setAnswers] = useState(initialAnswers);
  const [step, setStep] = useState(0);
  const analysis = analyzeText(text);

  useEffect(() => {
    if (text.trim().length === 0) {
      onScoreChange({ ratio: 0, bucket: 'incomplete', scoreBadgeText: null, incomplete: true });
      return;
    }

    const daysNum = Number.parseInt(answers.days, 10);
    let weight = 0;
    let checkedCount = 0;
    const add = (flag, w) => { if (flag) { weight += w; checkedCount += 1; } };

    add(!Number.isNaN(daysNum) && daysNum >= 30, itemWeights[0]);
    add(analysis.salaryAbsent, itemWeights[1]);
    add(analysis.isGeneric, itemWeights[2]);
    add(answers.aggregator === true, itemWeights[3]);
    add(answers.evergreen === true, itemWeights[4]);
    add(answers.silence === true, itemWeights[5]);
    add(answers.freeze === true, itemWeights[6]);
    add(answers.form === true, itemWeights[7]);
    add(answers.duplicate === true, itemWeights[8]);

    const ratio = weight / maxWeight;
    const bucket = checkedCount === 0 ? 'none' : bucketFor(ratio);
    onScoreChange({
      ratio: checkedCount === 0 ? 0 : ratio,
      bucket,
      scoreBadgeText: t.scoreBadge(checkedCount, itemWeights.length, weight, maxWeight),
      incomplete: false
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, answers, t]);

  const setAnswer = (field, value) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
    track('paste-field-set', { field, value });
    const idx = QUESTION_ORDER.indexOf(field);
    if (idx === step && step < QUESTION_ORDER.length - 1) {
      setStep(step + 1);
    }
  };

  const setDays = (value) => {
    setAnswers((prev) => ({ ...prev, days: value }));
  };

  const advanceDays = () => {
    if (answers.days === '' || Number.isNaN(Number.parseInt(answers.days, 10))) return;
    track('paste-field-set', { field: 'days', value: answers.days });
    if (step === 0) setStep(1);
  };

  const yn = [{ value: true, label: p.yes }, { value: false, label: p.no }];
  const ynu = [...yn, { value: null, label: p.unsure }];

  const questions = {
    days: (
      <div className="paste-field">
        <p className="field-label">{p.daysLabel}</p>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <input
            type="text"
            inputMode="numeric"
            className="paste-number"
            value={answers.days}
            onChange={(e) => setDays(e.target.value.replace(/\D/g, ''))}
            onKeyDown={(e) => { if (e.key === 'Enter') advanceDays(); }}
          />
          {step === 0 && (
            <button type="button" className="toggle-btn" onClick={advanceDays}>{p.nextLabel}</button>
          )}
        </div>
      </div>
    ),
    aggregator: (
      <div className="paste-field">
        <p className="field-label">{p.aggregatorLabel}</p>
        <ToggleGroup value={answers.aggregator} options={yn} onSelect={(v) => setAnswer('aggregator', v)} />
      </div>
    ),
    form: (
      <div className="paste-field">
        <p className="field-label">{p.formLabel}</p>
        <ToggleGroup value={answers.form} options={yn} onSelect={(v) => setAnswer('form', v)} />
      </div>
    ),
    duplicate: (
      <div className="paste-field">
        <p className="field-label">{p.duplicateLabel}</p>
        <ToggleGroup value={answers.duplicate} options={yn} onSelect={(v) => setAnswer('duplicate', v)} />
      </div>
    ),
    evergreen: (
      <div className="paste-field">
        <p className="field-label">{p.evergreenLabel}</p>
        <ToggleGroup value={answers.evergreen} options={ynu} onSelect={(v) => setAnswer('evergreen', v)} />
      </div>
    ),
    silence: (
      <div className="paste-field">
        <p className="field-label">{p.silenceLabel}</p>
        <ToggleGroup value={answers.silence} options={ynu} onSelect={(v) => setAnswer('silence', v)} />
      </div>
    ),
    freeze: (
      <div className="paste-field">
        <p className="field-label">{p.freezeLabel}</p>
        <ToggleGroup value={answers.freeze} options={ynu} onSelect={(v) => setAnswer('freeze', v)} />
      </div>
    )
  };

  const allAnswered = QUESTION_ORDER.every((f) => f === 'days'
    ? answers.days !== '' && !Number.isNaN(Number.parseInt(answers.days, 10))
    : answers[f] !== undefined);

  const reset = () => {
    setText(''); setAnswers(initialAnswers); setStep(0);
    track('reset-click', { mode: 'paste' });
  };

  return (
    <div>
      <p className="section-title">{p.sectionTitle}</p>
      <div className="paste-field">
        <label className="field-label" htmlFor="pasteText">{p.textLabel}</label>
        <textarea
          id="pasteText"
          className="paste-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {text.trim().length > 0 && (
          <div>
            <span className="auto-badge">{analysis.salaryAbsent ? p.autoSalaryAbsent : p.autoSalaryPresent}</span>
            <span className="auto-badge">{analysis.isGeneric ? p.autoGenericYes : p.autoGenericNo}</span>
          </div>
        )}
      </div>

      {text.trim().length > 0 && (
        <div className="quiz-box">
          {allAnswered ? (
            <>
              <p className="required-note" style={{ margin: '0 0 10px' }}>{p.doneMessage}</p>
              <button type="button" className="toggle-btn" onClick={() => setStep(0)}>{p.restartQuestions}</button>
            </>
          ) : (
            <>
              <p className="quiz-progress">{p.progressTemplate(step + 1)}</p>
              {questions[QUESTION_ORDER[step]]}
              {step > 0 && (
                <button type="button" className="quiz-back" onClick={() => setStep(step - 1)}>{p.backLabel}</button>
              )}
            </>
          )}
        </div>
      )}

      {!allAnswered && <button className="reset-btn" onClick={reset}>{t.resetLabel}</button>}
    </div>
  );
}
