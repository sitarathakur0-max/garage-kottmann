import React, { useState } from 'react';
import { PageId, ServiceItem } from '../types';
import { BUSINESS_INFO, WORKSHOP_SERVICES, WORKSHOP_PROCESS, WORKSHOP_VALUES, MAINTENANCE_TIPS, FAQ_ITEMS } from '../data/garageInfo';
import {
  Phone,
  Wrench,
  MapPin,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  ShieldAlert,
  FileCheck,
  Disc,
  Sliders,
  Flame,
  BatteryCharging,
  Search,
  MessageSquareText,
  PhoneCall,
  ChevronDown,
  AlertCircle,
  HelpCircle,
  Car
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectServiceForInquiry?: (serviceName: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectServiceForInquiry }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  // Map service icon names to Lucide components
  const renderServiceIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-amber-400' };
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

  const renderProcessIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-slate-950 stroke-[2.2]' };
    switch (iconName) {
      case 'PhoneCall':
        return <PhoneCall {...props} />;
      case 'Search':
        return <Search {...props} />;
      case 'MessageSquareText':
        return <MessageSquareText {...props} />;
      default:
        return <CheckCircle2 {...props} />;
    }
  };

  return (
    <div className="space-y-24">
      {/* 1. HERO SECTION: Substantial, high-contrast, automotive mechanical aesthetic */}
      <section className="relative pt-6 pb-20 md:pt-12 md:pb-28 overflow-hidden bg-radial-gradient">
        {/* Subtle technical background grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-7">
              {/* Local badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide">
                <MapPin className="w-3.5 h-3.5" />
                <span>{BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-heading">
                Ihre verlässliche <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">Autowerkstatt</span> in Zürich.
              </h1>

              {/* Informative Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Willkommen bei der <strong className="text-white font-medium">{BUSINESS_INFO.name}</strong>. An der Regensbergstrasse 244 führen wir fachgerechte Reparaturen, periodische Wartungen, Bremsenservice, MFK-Vorbereitungen und moderne Fehlerdiagnosen für alle gängigen Personenwagen durch.
              </p>

              {/* Practical Features checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Direkter Austausch mit den Mechanikern</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Reparaturen nach sorgfältiger Diagnose</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Transparente Absprache vor allen Arbeiten</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Zentral gelegen in Zürich-Nord</span>
                </div>
              </div>

              {/* Primary Actions / CTAs */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={BUSINESS_INFO.contact.phoneTel}
                  id="hero-phone-cta-btn"
                  className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/20 transition-all active:scale-95 group"
                >
                  <Phone className="w-5 h-5 stroke-[2.5]" />
                  <span>Jetzt anrufen: {BUSINESS_INFO.contact.phoneDisplay}</span>
                </a>

                <button
                  onClick={() => onNavigate('contact')}
                  id="hero-contact-cta-btn"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white font-semibold text-base border border-slate-700 transition-all group"
                >
                  <span>Werkstatt-Termin anfragen</span>
                  <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Hero Visual: Strategic, realistic automotive bay imagery with technical card overlay */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1613214149922-f1809c99b414?q=80&w=1200&auto=format&fit=crop"
                  alt="Werkstattbereich für Fahrzeugreparaturen und Fahrzeuginspektion"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover object-center group-hover:scale-102 transition-transform duration-700 filter brightness-90"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent opacity-90" />

                {/* Technical status panel overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#121820]/95 backdrop-blur-md border border-slate-700 text-slate-200">
                  <div className="flex items-center justify-between border-b border-slate-700/80 pb-2 mb-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-1.5 font-semibold">
                      <Wrench className="w-3.5 h-3.5" />
                      Werkstatt Zürich-Nord
                    </span>
                    <span className="text-xs font-mono text-slate-400">8050 Zürich</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-normal">
                    Regensbergstrasse 244 • Reparatur & Service aller Fahrzeugtypen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GARAGE INTRODUCTION: Focus on solid craftsmanship and clear consultation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="intro-heading">
        <div className="bg-[#121822] rounded-2xl border border-slate-800 p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
                <span>Handwerk & Verantwortung</span>
              </div>

              <h2 id="intro-heading" className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-heading">
                Persönliche Betreuung für Ihr Fahrzeug an der Regensbergstrasse
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                Ein zuverlässiges Auto ist im Alltag unverzichtbar. Bei der <strong>Garage Kottmann</strong> legen wir Wert auf fundierte handwerkliche Arbeit ohne unnötigen Mehraufwand. Ob es um den regelmässigen Jahresservice, das Beseitigen einer Störung oder die Vorbereitung zur periodischen Fahrzeugprüfung (MFK) geht: Wir prüfen Ihr Fahrzeug gewissenhaft und besprechen jeden Arbeitsschritt offen mit Ihnen.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Dank unserer Lage an der Regensbergstrasse 244 in 8050 Zürich sind wir für Kundinnen und Kunden aus Oerlikon, Seebach, Affoltern und dem gesamten Stadtgebiet Zürich unkompliziert erreichbar.
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#19222E] p-6 rounded-xl border border-slate-700/60 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Haben Sie eine Frage?</span>
                  <span className="text-sm font-semibold text-white">Rufen Sie uns direkt an</span>
                </div>
              </div>

              <p className="text-xs text-slate-300">
                Schildern Sie uns Ihr Anliegen oder vereinbaren Sie direkt Ihren Werkstatt-Termin:
              </p>

              <a
                href={BUSINESS_INFO.contact.phoneTel}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors"
                id="intro-box-call-link"
              >
                <Phone className="w-4 h-4 stroke-[2.5]" />
                {BUSINESS_INFO.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AUTOMOTIVE SERVICE CATEGORIES: Informative, well-structured overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="services-overview-heading">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <span>Leistungsspektrum</span>
            </div>
            <h2 id="services-overview-heading" className="text-2xl sm:text-4xl font-bold text-white font-heading">
              Kompetente Autoreparaturen & Fahrzeugservice
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors group self-start md:self-auto"
            id="view-all-services-btn"
          >
            <span>Alle Leistungen im Detail ansehen</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKSHOP_SERVICES.slice(0, 8).map((service) => (
            <div
              key={service.id}
              id={`home-service-card-${service.id}`}
              className="bg-[#121822] hover:bg-[#161F2C] border border-slate-800 hover:border-slate-700 rounded-xl p-6 transition-all duration-200 flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                    {renderServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                    {service.categoryLabel}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors font-heading">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800/80">
                <button
                  onClick={() => {
                    if (onSelectServiceForInquiry) {
                      onSelectServiceForInquiry(service.title);
                    }
                    onNavigate('contact');
                  }}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-amber-400 transition-colors"
                >
                  <span>Anfrage dazu senden</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WORKSHOP & CRAFTSMANSHIP VALUES: Reasons customers choose Garage Kottmann */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="values-heading">
        <div className="border-t border-slate-800/80 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
              Verlässlichkeit & Qualität
            </span>
            <h2 id="values-heading" className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Warum Autofahrer die Garage Kottmann wählen
            </h2>
            <p className="text-sm text-slate-400">
              Transparenz, solide Diagnose und fachkundige Ausführung stehen bei all unseren Arbeiten an erster Stelle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKSHOP_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#111620] border border-slate-800/90 space-y-3 relative overflow-hidden"
              >
                <div className="w-8 h-8 rounded-md bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-sm font-mono">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-white font-heading">{val.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. REPAIR & SERVICE PROCESS: 4-Step Transparent Procedure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="process-heading">
        <div className="bg-[#111721] rounded-2xl border border-slate-800 p-8 sm:p-12 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
              Schritt für Schritt
            </span>
            <h2 id="process-heading" className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Unser transparenter Werkstattablauf
            </h2>
            <p className="text-sm text-slate-400">
              Vom ersten Anruf bis zur sicheren Weiterfahrt wissen Sie jederzeit, woran an Ihrem Fahrzeug gearbeitet wird.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {WORKSHOP_PROCESS.map((step, idx) => (
              <div key={idx} className="space-y-4 relative">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/20 shrink-0">
                    {renderProcessIcon(step.iconName)}
                  </div>
                  <span className="text-2xl font-black font-mono text-slate-600">
                    {step.stepNumber}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white font-heading">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>

                <p className="text-xs text-slate-500 border-l-2 border-amber-500/40 pl-3">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VEHICLE MAINTENANCE INFORMATION: Useful, practical advice for car owners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="maintenance-tips-heading">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="lg:w-1/3 space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
              Wissenswertes für den Alltag
            </span>
            <h2 id="maintenance-tips-heading" className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Praktische Hinweise zur Fahrzeugpflege
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Kleine, regelmässige Kontrollen helfen, Verschleiss frühzeitig zu erkennen, den Spritverbrauch zu schonen und vor allem die Fahrsicherheit im Strassenverkehr zu sichern.
            </p>
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.contact.phoneTel}
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Unsicherheit? Werkstatt anrufen</span>
              </a>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            {MAINTENANCE_TIPS.map((tip) => (
              <div
                key={tip.id}
                className="bg-[#121822] border border-slate-800 rounded-xl p-5 space-y-3 shadow-md"
              >
                <div className="flex items-center gap-2 text-amber-400">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <h3 className="text-sm font-bold text-white font-heading">{tip.title}</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{tip.description}</p>
                <div className="pt-2 border-t border-slate-800 text-[11px] space-y-1">
                  <span className="text-amber-400/90 font-medium block">{tip.indicator}</span>
                  <span className="text-slate-400 block">{tip.recommendation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS PREVIEW: Relevant everyday answers */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="faq-preview-heading">
        <div className="text-center mb-10 space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
            Klarheit & Antworten
          </span>
          <h2 id="faq-preview-heading" className="text-2xl sm:text-3xl font-bold text-white font-heading">
            Häufige Fragen unserer Kunden
          </h2>
          <p className="text-sm text-slate-400">
            Wichtige Antworten rund um Werkstattaufenthalt, Terminabsprache und Vorab-Informationen.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQ_ITEMS.slice(0, 4).map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#111721] border border-slate-800 rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  id={`home-faq-toggle-${faq.id}`}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-white hover:text-amber-400 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4 bg-[#0E131A]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('faq')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            id="see-all-faqs-btn"
          >
            <span>Alle häufigen Fragen ansehen</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 8. STRONG FINAL CALL-TO-ACTION: Automotive garage closing card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-br from-[#161F2C] to-[#0E141D] border border-amber-500/30 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-medium">
              <Car className="w-3.5 h-3.5" />
              <span>Garage Kottmann • Regensbergstrasse 244, 8050 Zürich</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
              Benötigt Ihr Fahrzeug eine Inspektion oder Reparatur?
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Zögern Sie nicht bei Geräuschen, aufleuchtenden Warnlampen oder anstehendem MFK-Termin. Kontaktieren Sie uns für eine Terminabsprache oder fundierte Einschätzung in unserer Werkstatt.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={BUSINESS_INFO.contact.phoneTel}
                id="final-cta-call-btn"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/25 transition-all active:scale-95"
              >
                <Phone className="w-5 h-5 stroke-[2.5]" />
                <span>Werkstatt anrufen: {BUSINESS_INFO.contact.phoneDisplay}</span>
              </a>

              <button
                onClick={() => onNavigate('contact')}
                id="final-cta-inquiry-btn"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-base border border-slate-700 transition-all"
              >
                <span>Online-Anfrage stellen</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
