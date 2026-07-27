import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { act, render, screen } from '@testing-library/react';
import { LanguageProvider } from '../i18n/LanguageContext';
import Dados, { buildRows, ROWS_PER_PAGE } from './Dados';
import { translations } from '../i18n/translations';
import { cityBreakdown } from '../lib/cityData';

function renderDados() {
  return render(
    <LanguageProvider>
      <Dados />
    </LanguageProvider>
  );
}

function getLatestObserver() {
  const instances = globalThis.IntersectionObserver.instances;
  return instances[instances.length - 1];
}

// Simulates the sentinel entering the viewport and waits out the loading delay,
// same as a user scrolling to the bottom of the page.
async function loadMoreRows() {
  await act(async () => {
    getLatestObserver().trigger();
    await vi.advanceTimersByTimeAsync(1000);
  });
}

async function loadAllRows(container) {
  const totalRows = buildRows(translations.en.stats).length;
  for (let i = 0; i < totalRows && container.querySelector('.load-more-sentinel'); i += 1) {
    await loadMoreRows();
  }
}

beforeEach(() => {
  localStorage.setItem('ghostJobLang', 'en');
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

describe('Dados page', () => {
  it('renders the page title and every city in the bar chart', async () => {
    const { container } = renderDados();
    expect(screen.getByRole('heading', { level: 1, name: translations.en.dataPage.title })).toBeInTheDocument();
    await loadAllRows(container);
    cityBreakdown.forEach((row) => {
      expect(screen.getByText(row.city)).toBeInTheDocument();
    });
  });

  it('renders the waffle chart value and label once scrolled into view', async () => {
    const { container } = renderDados();
    await loadAllRows(container);
    expect(screen.getByText(`${translations.en.dataPage.waffleStat.percent}%`)).toBeInTheDocument();
    expect(screen.getByText(translations.en.dataPage.waffleStat.label)).toBeInTheDocument();
  });

  it('renders a donut chart for stats flagged chart: "donut" instead of a plain value', async () => {
    const { container } = renderDados();
    await loadAllRows(container);
    const donutStat = translations.en.stats.find((s) => s.chart === 'donut');
    const donutEl = container.querySelector('.donut-percent');
    expect(donutEl).toBeInTheDocument();
    expect(donutEl).toHaveTextContent(donutStat.value);
  });

  it('never splits a bento row across pages - each row\'s spans always sum to exactly 3', () => {
    const rows = buildRows(translations.en.stats);
    rows.forEach((row) => {
      const rowSpan = row.reduce((sum, cell) => sum + (cell.type === 'stat' ? cell.stat.span : 2), 0);
      expect(rowSpan).toBe(3);
    });
  });

  it('shows a "load more" sentinel only when there are more rows than fit on one page', () => {
    const { container } = renderDados();
    const totalRows = buildRows(translations.en.stats).length;
    const sentinel = container.querySelector('.load-more-sentinel');
    if (totalRows > ROWS_PER_PAGE) {
      expect(sentinel).toBeInTheDocument();
    } else {
      expect(sentinel).not.toBeInTheDocument();
    }
  });

  it('loads more rows in fixed-size batches as the sentinel is scrolled into view', async () => {
    const { container } = renderDados();
    const totalRows = buildRows(translations.en.stats).length;
    const initialTiles = container.querySelectorAll('.stat-tile, .city-chart').length;

    await loadMoreRows();

    const afterOneBatch = container.querySelectorAll('.stat-tile, .city-chart').length;
    expect(afterOneBatch).toBeGreaterThan(initialTiles);
    expect(totalRows).toBeGreaterThan(ROWS_PER_PAGE);
  });
});
