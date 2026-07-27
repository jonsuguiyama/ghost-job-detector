import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import StatTile from '../components/StatTile';
import CityBarChart from '../components/CityBarChart';
import WaffleChart from '../components/WaffleChart';
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
  const firstRows = visibleStats.slice(0, 4);
  const restRows = visibleStats.slice(4);

  const renderTile = (stat) => (
    <StatTile
      key={`${stat.value}-${stat.label}`}
      value={stat.value}
      label={stat.label}
      source={stat.source}
      span={stat.span}
      chart={stat.chart}
      percent={stat.percent}
    />
  );

  return (
    <div className="page-wrap">
      <h1 className="data-title">{t.dataPage.title}</h1>
      <p className="data-sub">{t.dataPage.sub}</p>

      <div className="bento-grid">
        {firstRows.map(renderTile)}
        <CityBarChart title={t.dataPage.cityChartTitle} />
        {restRows.map(renderTile)}
        <WaffleChart
          percent={t.dataPage.waffleStat.percent}
          label={t.dataPage.waffleStat.label}
          source={t.dataPage.waffleStat.source}
        />
      </div>

      {hasMore && <div ref={sentinelRef} className="load-more-sentinel" />}

      <SourcesCompact />
    </div>
  );
}
