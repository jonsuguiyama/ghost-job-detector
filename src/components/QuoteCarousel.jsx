import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { usePrefersReducedMotion } from '../lib/usePrefersReducedMotion';

const WORDS_PER_MINUTE = 200;
const MIN_DURATION_MS = 4500;
const BASE_OVERHEAD_MS = 1500;

function readingDuration(text) {
  const words = text.trim().split(/\s+/).length;
  const readMs = (words / WORDS_PER_MINUTE) * 60000;
  return Math.max(MIN_DURATION_MS, readMs + BASE_OVERHEAD_MS);
}

export default function QuoteCarousel() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const quotes = t.quotes;
  const duration = readingDuration(quotes[index].text);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return undefined;
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, duration);
    return () => clearTimeout(timer);
  }, [index, duration, quotes.length, reducedMotion]);

  const quote = quotes[index];

  return (
    <div className="quote-carousel">
      <blockquote key={index} className={reducedMotion ? undefined : 'quote-enter'}>
        “{quote.text}”
        <cite>{quote.source}</cite>
      </blockquote>
      <style>{`
        @keyframes quoteEnter {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .quote-enter { animation: quoteEnter 500ms ease-out; }
      `}</style>
    </div>
  );
}
