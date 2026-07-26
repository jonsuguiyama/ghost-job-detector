import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import QuoteCarousel from './QuoteCarousel';

const statusVar = {
  neutral: 'var(--status-neutral)',
  good: 'var(--status-good)',
  warning: 'var(--status-warning)',
  critical: 'var(--status-critical)'
};

const AUTO_SEQUENCE = [
  { bucket: 'none', ratio: 0 },
  { bucket: 'low', ratio: 0.2 },
  { bucket: 'medium', ratio: 0.5 },
  { bucket: 'high', ratio: 0.85 }
];

export default function Ghostometer({
  mode = 'controlled',
  ratio = 0,
  verdictInfo,
  scoreBadgeText,
  quotes = false,
  large = false
}) {
  const { t } = useLanguage();
  const [autoIndex, setAutoIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (mode !== 'auto') return undefined;
    intervalRef.current = setInterval(() => {
      setAutoIndex((i) => (i + 1) % AUTO_SEQUENCE.length);
    }, 3200);
    return () => clearInterval(intervalRef.current);
  }, [mode]);

  const effectiveRatio = mode === 'auto' ? AUTO_SEQUENCE[autoIndex].ratio : ratio;
  const effectiveVerdict = mode === 'auto' ? t.verdicts[AUTO_SEQUENCE[autoIndex].bucket] : verdictInfo;
  const color = statusVar[effectiveVerdict.status] || statusVar.neutral;
  const angle = -90 + effectiveRatio * 180;
  const svgWidth = large ? 390 : 320;
  const svgHeight = large ? 231 : 190;

  return (
    <div className={`gauge-card${large ? ' gauge-card--lg' : ''}`}>
      <div className="gauge-wrap">
        <svg width={svgWidth} height={svgHeight} viewBox="0 0 200 120">
          <defs>
            <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--status-good)" />
              <stop offset="50%" stopColor="var(--status-warning)" />
              <stop offset="100%" stopColor="var(--status-critical)" />
            </linearGradient>
          </defs>
          <path d="M 15 105 A 85 85 0 0 1 185 105" fill="none" stroke="url(#arcGrad)" strokeWidth="14" strokeLinecap="round" />
          <g className="needle" style={{ transform: `rotate(${angle}deg)` }}>
            <line x1="100" y1="105" x2="100" y2="30" stroke={color} strokeWidth="3" strokeLinecap="round" />
            <circle cx="100" cy="105" r="6" fill={color} />
          </g>
        </svg>
        <div className="gauge-ticks">
          <span>{t.gaugeTicks.low}</span>
          <span>{t.gaugeTicks.high}</span>
        </div>
        <p className="gauge-label">{effectiveVerdict.label}</p>
        <p className="verdict" style={{ color }}>{effectiveVerdict.verdict}</p>
        <p className="verdict-detail">{effectiveVerdict.detail}</p>
        {mode !== 'auto' && scoreBadgeText && <p className="score-badge">{scoreBadgeText}</p>}
      </div>
      {quotes && <QuoteCarousel />}
    </div>
  );
}
