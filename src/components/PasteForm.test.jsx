import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageProvider } from '../i18n/LanguageContext';
import PasteForm from './PasteForm';

function renderPasteForm() {
  const onScoreChange = vi.fn();
  render(
    <LanguageProvider>
      <PasteForm onScoreChange={onScoreChange} />
    </LanguageProvider>
  );
  return { onScoreChange };
}

beforeEach(() => {
  localStorage.setItem('ghostJobLang', 'en');
});

describe('PasteForm - initial state', () => {
  it('reports an incomplete score before any text is pasted', () => {
    const { onScoreChange } = renderPasteForm();
    const lastCall = onScoreChange.mock.calls.at(-1)[0];
    expect(lastCall.incomplete).toBe(true);
  });

  it('does not show the question quiz before text is pasted', () => {
    renderPasteForm();
    expect(screen.queryByText(/question 1 \/ 7/)).not.toBeInTheDocument();
  });
});

describe('PasteForm - pasting text starts live scoring immediately', () => {
  it('updates the score as soon as text is typed, before any question is answered', async () => {
    const user = userEvent.setup();
    const { onScoreChange } = renderPasteForm();

    const textarea = screen.getByLabelText(/Paste the full job description here/);
    await user.type(textarea, 'Great opportunity, apply now! Competitive salary.');

    const lastCall = onScoreChange.mock.calls.at(-1)[0];
    expect(lastCall.incomplete).toBe(false);
  });
});

describe('PasteForm - days question (regression: should not skip ahead on keystroke)', () => {
  it('stays on question 1/7 while typing digits, and only advances on Next', async () => {
    const user = userEvent.setup();
    renderPasteForm();

    await user.type(screen.getByLabelText(/Paste the full job description here/), 'Some job text here.');

    expect(screen.getByText('question 1 / 7')).toBeInTheDocument();

    const daysInput = screen.getByRole('textbox', { name: '' }); // the bare number-as-text input has no label
    await user.type(daysInput, '3');

    // Regression guard: a single keystroke must NOT advance the quiz to question 2.
    expect(screen.getByText('question 1 / 7')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /Next/ }));
    expect(screen.getByText('question 2 / 7')).toBeInTheDocument();
  });
});

describe('PasteForm - toggle questions (regression: buttons must update state and advance)', () => {
  it('lets the user answer the aggregator question and moves to the next one', async () => {
    const user = userEvent.setup();
    renderPasteForm();

    await user.type(screen.getByLabelText(/Paste the full job description here/), 'Some job text here.');
    await user.type(screen.getByRole('textbox', { name: '' }), '10');
    await user.click(screen.getByRole('button', { name: /Next/ }));

    expect(screen.getByText('question 2 / 7')).toBeInTheDocument();
    const yesButtons = screen.getAllByRole('button', { name: 'Yes' });
    await user.click(yesButtons[0]);

    expect(screen.getByText('question 3 / 7')).toBeInTheDocument();
  });
});

describe('PasteForm - reset', () => {
  it('clears the text and returns to the empty state', async () => {
    const user = userEvent.setup();
    renderPasteForm();

    const textarea = screen.getByLabelText(/Paste the full job description here/);
    await user.type(textarea, 'Some job text here.');
    expect(textarea).toHaveValue('Some job text here.');

    await user.click(screen.getByRole('button', { name: 'reset' }));
    expect(textarea).toHaveValue('');
  });
});
