import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import StatTile from '../components/StatTile';
import CityBarChart from '../components/CityBarChart';
import SourcesCompact from '../components/SourcesCompact';

const PAGE_SIZE = 12;

export default function Dados() {
  const { t } = useLanguage();
  const stats = t.stats;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const sentinelRef = useRef(null);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [stats]);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisibleCount((count) => Math.min(count + PAGE_SIZE, stats.length));
      }
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, [stats.length]);

  const visibleStats = stats.slice(0, visibleCount);
  const hasMore = visibleCount < stats.length;

  return (
    <div className="page-wrap">
      <h1 className="data-title">{t.dataPage.title}</h1>
      <p className="data-sub">{t.dataPage.sub}</p>

      <CityBarChart title={t.dataPage.cityChartTitle} />

      <div className="bento-grid">
        {visibleStats.map((stat) => (
          <StatTile
            key={`${stat.value}-${stat.label}`}
            value={stat.value}
            label={stat.label}
            source={stat.source}
            size={stat.size}
          />
        ))}
      </div>

      {hasMore && <div ref={sentinelRef} className="load-more-sentinel" />}

      <SourcesCompact />
    </div>
  );
}
