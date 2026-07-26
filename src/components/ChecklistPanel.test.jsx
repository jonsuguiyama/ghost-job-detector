import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageProvider } from '../i18n/LanguageContext';
import ChecklistPanel from './ChecklistPanel';
import { itemWeights, maxWeight } from '../lib/scoring';

function renderChecklist() {
  const onScoreChange = vi.fn();
  render(
    <LanguageProvider>
      <ChecklistPanel onScoreChange={onScoreChange} />
    </LanguageProvider>
  );
  return { onScoreChange };
}

beforeEach(() => {
  localStorage.setItem('ghostJobLang', 'en');
});

describe('ChecklistPanel', () => {
  it('starts with no signals checked', () => {
    const { onScoreChange } = renderChecklist();
    const lastCall = onScoreChange.mock.calls.at(-1)[0];
    expect(lastCall.bucket).toBe('none');
    expect(lastCall.ratio).toBe(0);
  });

  it('renders one checkbox per checklist item', () => {
    renderChecklist();
    expect(screen.getAllByRole('checkbox')).toHaveLength(itemWeights.length);
  });

  it('updates the score when an item is checked', async () => {
    const user = userEvent.setup();
    const { onScoreChange } = renderChecklist();

    const checkboxes = screen.getAllByRole('checkbox');
    await user.click(checkboxes[0]);

    const lastCall = onScoreChange.mock.calls.at(-1)[0];
    expect(lastCall.bucket).not.toBe('none');
    expect(lastCall.scoreBadgeText).toContain(`${itemWeights[0]} / ${maxWeight}`);
  });

  it('unchecking the only checked item goes back to "none"', async () => {
    const user = userEvent.setup();
    const { onScoreChange } = renderChecklist();

    const checkboxes = screen.getAllByRole('checkbox');
    await user.click(checkboxes[0]);
    await user.click(checkboxes[0]);

    const lastCall = onScoreChange.mock.calls.at(-1)[0];
    expect(lastCall.bucket).toBe('none');
  });

  it('reset clears every checked item', async () => {
    const user = userEvent.setup();
    const { onScoreChange } = renderChecklist();

    const checkboxes = screen.getAllByRole('checkbox');
    await user.click(checkboxes[0]);
    await user.click(checkboxes[1]);
    await user.click(screen.getByRole('button', { name: 'reset' }));

    checkboxes.forEach((box) => expect(box).not.toBeChecked());
    const lastCall = onScoreChange.mock.calls.at(-1)[0];
    expect(lastCall.bucket).toBe('none');
  });

  it('checking every item reaches the "high" bucket', async () => {
    const user = userEvent.setup();
    const { onScoreChange } = renderChecklist();

    for (const box of screen.getAllByRole('checkbox')) {
      await user.click(box);
    }

    const lastCall = onScoreChange.mock.calls.at(-1)[0];
    expect(lastCall.bucket).toBe('high');
    expect(lastCall.ratio).toBe(1);
  });
});
