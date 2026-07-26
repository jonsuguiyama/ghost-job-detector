import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { translations } from './i18n/translations';

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );
}

beforeEach(() => {
  localStorage.setItem('ghostJobLang', 'en');
});

describe('App routing - each page renders without crashing', () => {
  it('renders Home at /', () => {
    renderAt('/');
    expect(screen.getByRole('heading', { level: 1, name: translations.en.home.title })).toBeInTheDocument();
  });

  it('renders Manual Checklist at /checklist', () => {
    renderAt('/checklist');
    expect(screen.getByRole('heading', { level: 1, name: translations.en.checklistPage.title })).toBeInTheDocument();
  });

  it('renders Automatic Analysis at /analise-automatica', () => {
    renderAt('/analise-automatica');
    expect(screen.getByRole('heading', { level: 1, name: translations.en.analysisPage.title })).toBeInTheDocument();
  });

  it('renders the About/GhostGig page at /sobre', () => {
    renderAt('/sobre');
    expect(screen.getByRole('heading', { level: 1, name: translations.en.sobrePage.title })).toBeInTheDocument();
  });

  it('renders the Data page at /dados', () => {
    renderAt('/dados');
    expect(screen.getByRole('heading', { level: 1, name: translations.en.dataPage.title })).toBeInTheDocument();
  });
});

describe('App - header and footer are present on every page', () => {
  it.each(['/', '/checklist', '/analise-automatica', '/sobre', '/dados'])('shows nav and footer at %s', (path) => {
    renderAt(path);
    const nav = within(screen.getByRole('navigation'));
    expect(nav.getByRole('link', { name: translations.en.nav.checklist })).toBeInTheDocument();
    expect(screen.getByText(new RegExp(translations.en.footer.builtBy))).toBeInTheDocument();
  });
});

describe('App - navigation', () => {
  it('navigates from Home to Manual Checklist via the nav link', async () => {
    const user = userEvent.setup();
    renderAt('/');

    const nav = within(screen.getByRole('navigation'));
    await user.click(nav.getByRole('link', { name: translations.en.nav.checklist }));
    expect(screen.getByRole('heading', { level: 1, name: translations.en.checklistPage.title })).toBeInTheDocument();
  });
});

describe('App - language switch persists across the visible language buttons', () => {
  it('switches every page string to Portuguese when PT is selected', async () => {
    const user = userEvent.setup();
    renderAt('/');

    await user.click(screen.getByRole('button', { name: 'PT' }));
    expect(screen.getByRole('heading', { level: 1, name: translations.pt.home.title })).toBeInTheDocument();
  });
});
