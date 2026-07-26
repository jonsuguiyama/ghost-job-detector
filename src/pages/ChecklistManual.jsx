import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import Ghostometer from '../components/Ghostometer';
import ChecklistPanel from '../components/ChecklistPanel';

export default function ChecklistManual() {
  const { t } = useLanguage();
  const [score, setScore] = useState({ ratio: 0, bucket: 'none', scoreBadgeText: null });

  return (
    <div className="page-wrap page-wrap--fixed-footer">
      <div className="split-layout">
        <div className="split-left">
          <h1>{t.checklistPage.title}</h1>
          <p className="sub">{t.checklistPage.sub}</p>
          <Ghostometer
            mode="controlled"
            ratio={score.ratio}
            verdictInfo={t.verdicts[score.bucket]}
            scoreBadgeText={score.scoreBadgeText}
          />
        </div>
        <div>
          <ChecklistPanel onScoreChange={setScore} />
        </div>
      </div>
    </div>
  );
}
