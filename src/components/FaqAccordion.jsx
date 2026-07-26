import { useLanguage } from '../i18n/LanguageContext';
import { track } from '../lib/analytics';

export default function FaqAccordion() {
  const { t } = useLanguage();
  return (
    <div>
      <p className="section-title">{t.faqTitle}</p>
      <div className="faq-list">
        {t.faq.map((item, idx) => (
          <details
            key={item.q}
            className="faq-item"
            onToggle={(e) => { if (e.target.open) track('faq-open', { index: idx }); }}
          >
            <summary>{item.q}</summary>
            {/* content is our own static translation copy, not user input */}
            <div className="faq-answer" dangerouslySetInnerHTML={{ __html: item.a }} />
          </details>
        ))}
      </div>
    </div>
  );
}
