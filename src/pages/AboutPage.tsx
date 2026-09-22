import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, WORKSHOP_VALUES } from '../data/garageInfo';
import { Wrench, MapPin, Phone, ShieldCheck, CheckCircle2, ArrowRight, Car, Compass, Users } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 py-8">
      {/* 1. Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wide">
          <span>Über Garage Kottmann</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
          Solides Handwerk & Verlässlichkeit in Zürich
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Ihre lokale Anlaufstelle für Fahrzeugreparaturen und Servicearbeiten an der Regensbergstrasse 244 in 8050 Zürich.
        </p>
      </section>

      {/* 2. Main Story & Workshop Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual: Strategic authentic automotive technician & workspace image */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=1200&auto=format&fit=crop"
                alt="Fachmännische Fahrzeugbegutachtung und Reparatur im Motorraum"
                className="w-full h-80 sm:h-[420px] object-cover object-center filter brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#121820]/90 backdrop-blur-md border border-slate-700 text-slate-200">
                <p className="text-xs font-mono text-amber-400 font-semibold uppercase">
                  Werkstattphilosophie
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  Gründliche Schadensanalyse und handwerkliche Sorgfalt bei jedem Handgriff.
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy Text */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading leading-snug">
              Eine Werkstatt, in der Handwerk und Ehrlichkeit zählen
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Die <strong>Garage Kottmann</strong> versteht sich als bodenständige, unabhängige Autowerkstatt für den Zürcher Norden. In einer Zeit, in der Fahrzeuge immer komplexer werden, bleibt eines unverändert: Autofahrerinnen und Autofahrer suchen nach einer Werkstatt, der sie vertrauen können.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Wir setzen auf den direkten Kontakt zwischen Werkstatt und Kunde. Bei uns besprechen Sie Symptome und Reparaturbedarf unmittelbar mit den Fachleuten. Wir erklären Ihnen verständlich, welche Massnahmen für die Betriebssicherheit zwingend erforderlich sind und welche Arbeiten aufgeschoben werden können.
            </p>

            <div className="pt-2 space-y-3">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Fokus auf echte Fehlerursachen</strong>
                  Kein voreiliger Teiletausch: Wir prüfen die Baugruppen systematisch.
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Transparente Absprachen</strong>
                  Bevor Zusatzaufwände entstehen, halten wir stets Rücksprache mit Ihnen.
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Verlässliche Arbeitsweise</strong>
                  Reparaturen nach anerkannten handwerklichen Regeln der Automobilbranche.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Four Core Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111721] rounded-2xl border border-slate-800 p-8 sm:p-12 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
              Grundsätze
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Unsere Arbeitswerte
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-[#151D29] border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-heading">Fachkompetenz</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Präziser Umgang mit Mechanik, Elektronik, Fahrwerk und Sicherheitssystemen.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#151D29] border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-heading">Direkter Dialog</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Keine langen Wege: Sie sprechen direkt mit den Menschen, die an Ihrem Auto arbeiten.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#151D29] border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-heading">Lösungsorientiert</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Wir suchen die sinnvollste und wirtschaftlichste Reparaturmethode für Ihr Fahrzeug.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#151D29] border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-heading">Lokal verwurzelt</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Fester Bestandteil des Quartiers an der Regensbergstrasse in 8050 Zürich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Location Context and CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121822] border border-slate-800 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Besuchen Sie uns an der Regensbergstrasse 244
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              Vereinbaren Sie vorab einen Termin, damit wir genügend Zeit für die Begutachtung Ihres Autos einplanen können.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={BUSINESS_INFO.contact.phoneTel}
              id="about-call-btn"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all"
            >
              <Phone className="w-4 h-4 stroke-[2.5]" />
              <span>{BUSINESS_INFO.contact.phoneDisplay}</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              id="about-contact-btn"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors"
            >
              <span>Anfahrt & Kontakt</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
