import React, { useState } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/garageInfo';
import { Phone, Menu, X, Wrench, MapPin, ChevronRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Startseite' },
    { id: 'services', label: 'Leistungen & Service' },
    { id: 'about', label: 'Über die Garage' },
    { id: 'faq', label: 'Häufige Fragen' },
    { id: 'contact', label: 'Kontakt & Anfahrt' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0D1117]/95 backdrop-blur-md border-b border-slate-800/80 transition-all">
      {/* Top emergency / location strip */}
      <div className="bg-[#121820] border-b border-slate-800/60 py-1.5 px-4 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-medium text-slate-200">Autowerkstatt Zürich</span>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="text-slate-400 hidden sm:inline flex items-center gap-1">
              <MapPin className="w-3 h-3 text-amber-500" />
              {BUSINESS_INFO.address.fullFormatted}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400">Direktkontakt Werkstatt:</span>
            <a
              href={BUSINESS_INFO.contact.phoneTel}
              className="font-mono font-semibold text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1"
              id="header-top-phone-link"
            >
              <Phone className="w-3 h-3" />
              {BUSINESS_INFO.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Garage identity */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 text-left group focus:outline-none focus:ring-2 focus:ring-amber-500/50 rounded-lg p-1 -ml-1 transition-all"
            id="brand-logo-btn"
            aria-label="Garage Kottmann Startseite"
          >
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-extrabold shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform border border-amber-400/40">
              <Wrench className="w-6 h-6 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors font-heading">
                  GARAGE KOTTMANN
                </span>
              </div>
              <p className="text-xs font-mono tracking-wider text-slate-400 uppercase">
                Zürich • Regensbergstrasse 244
              </p>
            </div>
          </button>

          {/* Desktop Navigation links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Hauptnavigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-link-${item.id}`}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all relative ${
                    isActive
                      ? 'text-amber-400 bg-amber-500/10 border border-amber-500/20 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-amber-400 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Primary CTA: Direct Call Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={BUSINESS_INFO.contact.phoneTel}
              id="header-call-button"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm shadow-md shadow-amber-500/20 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              title={`Direktanruf: ${BUSINESS_INFO.contact.phoneDisplay}`}
            >
              <Phone className="w-4 h-4 stroke-[2.5]" />
              <span className="tracking-tight">{BUSINESS_INFO.contact.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={BUSINESS_INFO.contact.phoneTel}
              id="mobile-header-quick-call"
              className="p-2 rounded-lg bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors"
              aria-label={`Anrufen: ${BUSINESS_INFO.contact.phoneDisplay}`}
            >
              <Phone className="w-5 h-5 stroke-[2.5]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Menü schliessen' : 'Menü öffnen'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden border-t border-slate-800 bg-[#0E131A] px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="space-y-1 pb-3 border-b border-slate-800/80">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`mobile-nav-${item.id}`}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-lg text-left text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                      : 'text-slate-200 hover:bg-slate-800/80'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          <div className="pt-2 space-y-3">
            <div className="px-1 text-xs text-slate-400">
              <p className="font-semibold text-slate-300">{BUSINESS_INFO.name}</p>
              <p>{BUSINESS_INFO.address.fullFormatted}</p>
            </div>
            <a
              href={BUSINESS_INFO.contact.phoneTel}
              id="mobile-drawer-call-btn"
              className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/25 transition-all"
            >
              <Phone className="w-5 h-5 stroke-[2.5]" />
              <span>Werkstatt anrufen: {BUSINESS_INFO.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
