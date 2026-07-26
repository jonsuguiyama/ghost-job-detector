import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import Ghostometer from '../components/Ghostometer';
import { track } from '../lib/analytics';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="hero-section">
      <div className="hero">
        <div>
          <h1>{t.home.title}</h1>
          <p className="hero-sub">{t.home.sub}</p>
          <div className="hero-ctas">
            <Link
              to="/checklist"
              className="btn"
              onClick={() => track('home-cta-click', { target: 'checklist' })}
            >
              {t.home.ctaChecklist}
            </Link>
            <Link
              to="/analise-automatica"
              className="btn"
              onClick={() => track('home-cta-click', { target: 'paste' })}
            >
              {t.home.ctaPaste}
            </Link>
          </div>
        </div>

        <div>
          <Ghostometer mode="auto" quotes />
        </div>
      </div>
    </div>
  );
}
