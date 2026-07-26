import { createContext, useContext, useMemo, useState } from 'react';
import { translations } from './translations';
import { track } from '../lib/analytics';

const LanguageContext = createContext(null);

function detectLang() {
  const stored = localStorage.getItem('ghostJobLang');
  if (stored && translations[stored]) return stored;
  const nav = (navigator.language || 'pt').toLowerCase();
  if (nav.startsWith('es')) return 'es';
  if (nav.startsWith('pt')) return 'pt';
  return 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectLang);

  const setLang = (next) => {
    setLangState(next);
    localStorage.setItem('ghostJobLang', next);
    track('language-switch', { lang: next });
  };

  const value = useMemo(() => ({ lang, setLang, t: translations[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
