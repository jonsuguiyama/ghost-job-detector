import { useLanguage } from '../i18n/LanguageContext';
import { track } from '../lib/analytics';

export default function SourcesCompact() {
  const { t } = useLanguage();
  return (
    <div>
      <p className="section-title">{t.sourcesTitle}</p>
      <div className="sources-compact">
        {t.sources.map((src) => (
          <a
            key={src.url}
            href={src.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('source-click', { url: src.url })}
          >
            {src.name} ↗
          </a>
        ))}
      </div>
    </div>
  );
}
