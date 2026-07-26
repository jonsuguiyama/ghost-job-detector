import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { LanguageProvider } from '../i18n/LanguageContext';
import Ghostometer from './Ghostometer';
import { translations } from '../i18n/translations';

function renderGauge(props) {
  return render(
    <LanguageProvider>
      <Ghostometer {...props} />
    </LanguageProvider>
  );
}

beforeEach(() => {
  localStorage.setItem('ghostJobLang', 'en');
});

describe('Ghostometer - controlled mode', () => {
  it('renders the verdict text and detail passed in', () => {
    renderGauge({ mode: 'controlled', ratio: 0.8, verdictInfo: translations.en.verdicts.high });
    expect(screen.getByText(translations.en.verdicts.high.verdict)).toBeInTheDocument();
    expect(screen.getByText(translations.en.verdicts.high.detail)).toBeInTheDocument();
  });

  it('shows the score badge only when scoreBadgeText is provided', () => {
    const { rerender } = renderGauge({ mode: 'controlled', ratio: 0, verdictInfo: translations.en.verdicts.none });
    expect(screen.queryByText(/signals:/)).not.toBeInTheDocument();

    rerender(
      <LanguageProvider>
        <Ghostometer mode="controlled" ratio={0.5} verdictInfo={translations.en.verdicts.medium} scoreBadgeText="signals: 2 / 9 - weight: 4 / 13" />
      </LanguageProvider>
    );
    expect(screen.getByText(/signals: 2 \/ 9/)).toBeInTheDocument();
  });

  it('renders the low/high gauge tick labels', () => {
    renderGauge({ mode: 'controlled', ratio: 0, verdictInfo: translations.en.verdicts.none });
    expect(screen.getByText('real')).toBeInTheDocument();
    expect(screen.getByText('ghost')).toBeInTheDocument();
  });
});

describe('Ghostometer - auto mode', () => {
  beforeEach(() => { vi.useFakeTimers(); });
  afterEach(() => { vi.useRealTimers(); });

  it('starts at the "none" verdict and cycles through the sequence over time', () => {
    renderGauge({ mode: 'auto' });
    expect(screen.getByText(translations.en.verdicts.none.verdict)).toBeInTheDocument();

    act(() => { vi.advanceTimersByTime(3200); });
    expect(screen.getByText(translations.en.verdicts.low.verdict)).toBeInTheDocument();

    act(() => { vi.advanceTimersByTime(3200); });
    expect(screen.getByText(translations.en.verdicts.medium.verdict)).toBeInTheDocument();

    act(() => { vi.advanceTimersByTime(3200); });
    expect(screen.getByText(translations.en.verdicts.high.verdict)).toBeInTheDocument();

    act(() => { vi.advanceTimersByTime(3200); });
    expect(screen.getByText(translations.en.verdicts.none.verdict)).toBeInTheDocument();
  });

  it('never shows a score badge in auto mode', () => {
    renderGauge({ mode: 'auto' });
    expect(screen.queryByText(/signals:/)).not.toBeInTheDocument();
  });
});

describe('Ghostometer - quotes slot', () => {
  it('renders a quote when quotes=true', () => {
    renderGauge({ mode: 'auto', quotes: true });
    expect(screen.getByText(new RegExp(translations.en.quotes[0].source))).toBeInTheDocument();
  });

  it('renders no quote block when quotes is omitted', () => {
    renderGauge({ mode: 'auto' });
    translations.en.quotes.forEach((q) => {
      expect(screen.queryByText(new RegExp(q.source))).not.toBeInTheDocument();
    });
  });
});
