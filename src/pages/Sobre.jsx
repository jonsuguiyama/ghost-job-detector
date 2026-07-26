import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import QuoteCarousel from '../components/QuoteCarousel';
import FaqAccordion from '../components/FaqAccordion';

export default function Sobre() {
  const { t } = useLanguage();

  return (
    <div className="page-wrap">
      <div className="split-layout">
        <div className="split-left">
          <h1>{t.sobrePage.title}</h1>
          <p className="sub">{t.sobrePage.sub}</p>
          <QuoteCarousel />
        </div>
        <div>
          <p className="section-title">{t.stepsTitle}</p>
          <div className="steps">
            <ol>
              {t.steps.map((step) => (
                <li key={step.lead}><b>{step.lead}</b> {step.rest}</li>
              ))}
            </ol>
          </div>

          <FaqAccordion />
          <p className="section-title">{t.sourcesTitle}</p>
          <Link to="/dados" className="btn">{t.sourcesPageLink}</Link>
        </div>
      </div>
    </div>
  );
}
