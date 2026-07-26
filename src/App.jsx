import { Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ChecklistManual from './pages/ChecklistManual';
import AnaliseAutomatica from './pages/AnaliseAutomatica';
import Sobre from './pages/Sobre';

const FIXED_FOOTER_PATHS = new Set(['/checklist', '/analise-automatica']);

function AppShell() {
  const location = useLocation();
  const fixedFooter = FIXED_FOOTER_PATHS.has(location.pathname);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checklist" element={<ChecklistManual />} />
        <Route path="/analise-automatica" element={<AnaliseAutomatica />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Footer fixed={fixedFooter} />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  );
}
