import { useLanguage } from '../i18n/LanguageContext';

export default function Footer({ fixed = false }) {
  const { t } = useLanguage();
  return (
    <footer className={`site-footer${fixed ? ' site-footer--fixed' : ''}`}>
      <div className="site-footer-inner">
        {t.footer.builtBy} React, Vite, React Router &amp; Umami
      </div>
    </footer>
  );
}
