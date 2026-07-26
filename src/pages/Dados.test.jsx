import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LanguageProvider } from '../i18n/LanguageContext';
import Dados from './Dados';
import { translations } from '../i18n/translations';
import { cityBreakdown } from '../lib/cityData';

function renderDados() {
  return render(
    <LanguageProvider>
      <Dados />
    </LanguageProvider>
  );
}

beforeEach(() => {
  localStorage.setItem('ghostJobLang', 'en');
});

describe('Dados page', () => {
  it('renders the page title and every city in the bar chart', () => {
    renderDados();
    expect(screen.getByRole('heading', { level: 1, name: translations.en.dataPage.title })).toBeInTheDocument();
    cityBreakdown.forEach((row) => {
      expect(screen.getByText(row.city)).toBeInTheDocument();
    });
  });

  it('renders up to the first page of stat tiles (12) without crashing', () => {
    renderDados();
    const expectedCount = Math.min(12, translations.en.stats.length);
    expect(screen.getAllByText(/./, { selector: '.stat-tile-value' })).toHaveLength(expectedCount);
  });

  it('does not render a "load more" sentinel when everything already fits on one page', () => {
    const { container } = renderDados();
    if (translations.en.stats.length <= 12) {
      expect(container.querySelector('.load-more-sentinel')).not.toBeInTheDocument();
    }
  });
});
