import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import Ghostometer from '../components/Ghostometer';
import PasteForm from '../components/PasteForm';

export default function AnaliseAutomatica() {
  const { t } = useLanguage();
  const [score, setScore] = useState({ ratio: 0, bucket: 'incomplete', scoreBadgeText: null, incomplete: true });

  const verdictInfo = score.incomplete ? t.paste.incomplete : t.verdicts[score.bucket];

  return (
    <div className="page-wrap page-wrap--fixed-footer">
      <div className="split-layout">
        <div className="split-left">
          <h1>{t.analysisPage.title}</h1>
          <p className="sub">{t.analysisPage.sub}</p>
          <Ghostometer
            mode="controlled"
            ratio={score.ratio}
            verdictInfo={verdictInfo}
            scoreBadgeText={score.scoreBadgeText}
          />
        </div>
        <div>
          <PasteForm onScoreChange={setScore} />
        </div>
      </div>
    </div>
  );
}
