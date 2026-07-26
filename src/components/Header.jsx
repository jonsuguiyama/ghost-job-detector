import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import GhostIcon from './GhostIcon';
import { useLanguage } from '../i18n/LanguageContext';
import { APP_NAME } from '../lib/constants';

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="brand" onClick={() => setNavOpen(false)}>
          <GhostIcon size={22} color="var(--accent)" eyeColor="var(--page)" />
          {APP_NAME}
        </Link>

        <button
          className="nav-toggle"
          aria-label="Menu"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((v) => !v)}
        >
          ☰
        </button>

        <nav className={`main-nav${navOpen ? ' open' : ''}`} onClick={() => setNavOpen(false)}>
          <NavLink to="/checklist" className={({ isActive }) => (isActive ? 'active' : '')}>
            {t.nav.checklist}
          </NavLink>
          <NavLink to="/analise-automatica" className={({ isActive }) => (isActive ? 'active' : '')}>
            {t.nav.analysis}
          </NavLink>
          <NavLink to="/dados" className={({ isActive }) => (isActive ? 'active' : '')}>
            {t.nav.data}
          </NavLink>
          <NavLink to="/sobre" className={({ isActive }) => (isActive ? 'active' : '')}>
            {APP_NAME}
          </NavLink>
        </nav>

        <div className="header-right">
          <fieldset className="lang-switch">
            <legend className="sr-only">Language</legend>
            {['pt', 'en', 'es'].map((code) => (
              <button
                key={code}
                className={`lang-btn${lang === code ? ' active' : ''}`}
                onClick={() => setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </fieldset>
        </div>
      </div>
    </header>
  );
}
