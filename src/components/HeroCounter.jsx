import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function HeroCounter() {
  const { lang, t } = useLanguage();
  const [count, setCount] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/stats')
      .then((r) => (r.ok ? r.json() : { count: null }))
      .then((data) => { if (!cancelled) setCount(data.count ?? null); })
      .catch(() => { if (!cancelled) setCount(null); });
    return () => { cancelled = true; };
  }, []);

  if (count === null) return null;

  const locale = lang === 'pt' ? 'pt-BR' : lang === 'es' ? 'es-ES' : 'en-US';
  return <p className="hero-counter mono">{t.home.counterTemplate(count.toLocaleString(locale))}</p>;
}
