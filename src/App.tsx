import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuickCallBar } from './components/QuickCallBar';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { BUSINESS_INFO } from './data/garageInfo';

export default function App() {
  const getPageFromHash = (): PageId => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (hash === 'services' || hash === 'leistungen') return 'services';
    if (hash === 'about' || hash === 'ueber-uns' || hash === 'werkstatt') return 'about';
    if (hash === 'faq' || hash === 'fragen') return 'faq';
    if (hash === 'contact' || hash === 'kontakt' || hash === 'anfahrt') return 'contact';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash);
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string | undefined>(undefined);

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update page title when navigating
  useEffect(() => {
    let pageTitle = `${BUSINESS_INFO.name} – Auto Garage & Fahrzeugservice Zürich`;
    if (currentPage === 'services') {
      pageTitle = `Leistungen & Reparaturen – ${BUSINESS_INFO.name} Zürich`;
    } else if (currentPage === 'about') {
      pageTitle = `Über die Garage – ${BUSINESS_INFO.name} Zürich`;
    } else if (currentPage === 'faq') {
      pageTitle = `Häufige Fragen (FAQ) – ${BUSINESS_INFO.name} Zürich`;
    } else if (currentPage === 'contact') {
      pageTitle = `Kontakt & Anfahrt – ${BUSINESS_INFO.name} Regensbergstrasse 244`;
    }
    document.title = pageTitle;
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceForInquiry = (serviceName: string) => {
    setSelectedServiceForInquiry(serviceName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F14] text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      {/* Top Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectServiceForInquiry={handleSelectServiceForInquiry}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onSelectServiceForInquiry={handleSelectServiceForInquiry}
          />
        )}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'faq' && <FaqPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && (
          <ContactPage initialService={selectedServiceForInquiry} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Sticky Quick Call Bar */}
      <QuickCallBar onNavigate={handleNavigate} />
    </div>
  );
}
