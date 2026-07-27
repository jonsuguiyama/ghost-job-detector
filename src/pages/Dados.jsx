import { useEffect, useMemo, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import StatTile from '../components/StatTile';
import CityBarChart from '../components/CityBarChart';
import WaffleChart from '../components/WaffleChart';
import SourcesCompact from '../components/SourcesCompact';

export const ROWS_PER_PAGE = 10;
const GRID_COLUMNS = 3;

export function buildRows(stats) {
  const cells = [
    ...stats.slice(0, 4).map((stat) => ({ type: 'stat', stat })),
    { type: 'city' },
    ...stats.slice(4, 11).map((stat) => ({ type: 'stat', stat })),
    { type: 'waffle' },
    ...stats.slice(11).map((stat) => ({ type: 'stat', stat }))
  ];

  const rows = [];
  let row = [];
  let rowSpan = 0;

  cells.forEach((cell) => {
    const span = cell.type === 'stat' ? cell.stat.span : 2;
    row.push(cell);
    rowSpan += span;
    if (rowSpan >= GRID_COLUMNS) {
      rows.push(row);
      row = [];
      rowSpan = 0;
    }
  });
  if (row.length) rows.push(row);

  return rows;
}

export default function Dados() {
  const { t } = useLanguage();
  const stats = t.stats;
  const rows = useMemo(() => buildRows(stats), [stats]);
  const [visibleRowCount, setVisibleRowCount] = useState(ROWS_PER_PAGE);
  const sentinelRef = useRef(null);

  useEffect(() => {
    setVisibleRowCount(ROWS_PER_PAGE);
  }, [rows]);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisibleRowCount((count) => Math.min(count + ROWS_PER_PAGE, rows.length));
      }
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, [rows.length]);

  const visibleRows = rows.slice(0, visibleRowCount);
  const hasMore = visibleRowCount < rows.length;

  const renderCell = (cell, key) => {
    if (cell.type === 'city') {
      return <CityBarChart key={key} title={t.dataPage.cityChartTitle} />;
    }
    if (cell.type === 'waffle') {
      return (
        <WaffleChart
          key={key}
          percent={t.dataPage.waffleStat.percent}
          label={t.dataPage.waffleStat.label}
          source={t.dataPage.waffleStat.source}
        />
      );
    }
    const { stat } = cell;
    return (
      <StatTile
        key={key}
        value={stat.value}
        label={stat.label}
        source={stat.source}
        span={stat.span}
        chart={stat.chart}
        percent={stat.percent}
      />
    );
  };

  return (
    <div className="page-wrap">
      <h1 className="data-title">{t.dataPage.title}</h1>
      <p className="data-sub">{t.dataPage.sub}</p>

      <div className="bento-grid">
        {visibleRows.map((row, rowIndex) =>
          row.map((cell, cellIndex) => renderCell(cell, `${rowIndex}-${cellIndex}`))
        )}
      </div>

      {hasMore && <div ref={sentinelRef} className="load-more-sentinel" />}

      <SourcesCompact />
    </div>
  );
}
