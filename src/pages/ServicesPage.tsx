import React, { useState } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, WORKSHOP_SERVICES } from '../data/garageInfo';
import {
  Wrench,
  Cpu,
  ShieldAlert,
  FileCheck,
  Disc,
  Sliders,
  Flame,
  BatteryCharging,
  Check,
  ArrowRight,
  Phone,
  Search,
  AlertCircle,
  HelpCircle
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onSelectServiceForInquiry: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onSelectServiceForInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const renderServiceIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-amber-400 stroke-[2.2]' };
    switch (iconName) {
      case 'Cpu':
        return <Cpu {...props} />;
      case 'ShieldAlert':
        return <ShieldAlert {...props} />;
      case 'FileCheck':
        return <FileCheck {...props} />;
      case 'Disc':
        return <Disc {...props} />;
      case 'Sliders':
        return <Sliders {...props} />;
      case 'Flame':
        return <Flame {...props} />;
      case 'BatteryCharging':
        return <BatteryCharging {...props} />;
      default:
        return <Wrench {...props} />;
    }
  };

  const filteredServices = WORKSHOP_SERVICES.filter((svc) => {
    const matchesCategory = selectedCategory === 'all' || svc.category === selectedCategory;
    const matchesQuery =
      searchQuery === '' ||
      svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.fullDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.checklist.some((item) => item.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  const handleInquiryClick = (serviceTitle: string) => {
    onSelectServiceForInquiry(serviceTitle);
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 py-8">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wide">
          <span>Werkstatt-Leistungen in Zürich</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
          Fachgerechter Autoservice & Reparaturen
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Von der computerunterstützten Fehlerdiagnose über periodische Servicearbeiten bis zur gründlichen MFK-Vorbereitung: Übersicht über unsere Kernkompetenzen an der Regensbergstrasse 244.
        </p>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111721] p-4 rounded-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {[
              { id: 'all', label: 'Alle Leistungen' },
              { id: 'wartung', label: 'Wartung & Service' },
              { id: 'sicherheit', label: 'Sicherheit & MFK' },
              { id: 'diagnose', label: 'Diagnose & Elektronik' },
              { id: 'mechanik', label: 'Mechanik & Fahrwerk' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                id={`filter-tab-${tab.id}`}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Leistung suchen (z.B. Bremsen, MFK)..."
              className="w-full bg-[#0E131A] border border-slate-700 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Services Detailed Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-[#111721] rounded-xl border border-slate-800 text-slate-400 space-y-3">
            <AlertCircle className="w-8 h-8 text-amber-500 mx-auto" />
            <p className="text-base font-semibold text-white">Keine passende Leistung gefunden</p>
            <p className="text-xs">Versuchen Sie einen anderen Suchbegriff oder wählen Sie "Alle Leistungen".</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="px-4 py-2 bg-amber-500 text-slate-950 text-xs font-bold rounded-lg mt-2"
            >
              Filter zurücksetzen
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                id={`service-detail-card-${service.id}`}
                className="bg-[#121822] border border-slate-800 hover:border-slate-700 rounded-2xl p-7 flex flex-col justify-between space-y-6 shadow-xl transition-all"
              >
                <div className="space-y-4">
                  {/* Top line with category badge and icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                        {renderServiceIcon(service.iconName)}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-amber-400 border border-slate-700">
                          {service.categoryLabel}
                        </span>
                        <h2 className="text-xl font-bold text-white mt-1 font-heading">
                          {service.title}
                        </h2>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* Inspection points checklist */}
                  <div className="bg-[#0E141D] rounded-xl p-4 border border-slate-800/80 space-y-2.5">
                    <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-amber-400" />
                      Typische Prüf- & Arbeitsumfänge:
                    </h3>
                    <ul className="space-y-1.5">
                      {service.checklist.map((item, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                          <span className="text-amber-400 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Practical note */}
                  <div className="text-xs text-slate-400 flex items-start gap-2 bg-amber-500/5 border-l-2 border-amber-500/60 p-3 rounded-r-lg">
                    <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{service.practicalNote}</span>
                  </div>
                </div>

                {/* Card Action buttons */}
                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <span className="text-xs text-slate-400">
                    Spezifische Symptome bei Ihrem Fahrzeug?
                  </span>
                  <button
                    onClick={() => handleInquiryClick(service.title)}
                    id={`service-inquiry-btn-${service.id}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all active:scale-95"
                  >
                    <span>Für diese Leistung anfragen</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Information Banner: Responsible Automotive Practice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111721] border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-lg font-bold text-white font-heading">
              Haben Sie ein spezifisches Problem oder eine Störung?
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Jedes Fahrzeug und jede Situation ist einzigartig. Schildern Sie uns Geräusche, Fehlermeldungen oder Auffälligkeiten unkompliziert am Telefon – wir helfen Ihnen gerne mit einer ersten fachlichen Einschätzung.
            </p>
          </div>
          <a
            href={BUSINESS_INFO.contact.phoneTel}
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>{BUSINESS_INFO.contact.phoneDisplay}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
