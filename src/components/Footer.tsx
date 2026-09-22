import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/garageInfo';
import { Phone, MapPin, Wrench, Shield, ArrowUp, CheckCircle, Navigation } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090D12] border-t border-slate-800 text-slate-400 text-sm mt-20" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Fusszeile Garage Kottmann</h2>

      {/* Primary Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Identity & Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-amber-500/20">
                <Wrench className="w-5 h-5 text-slate-950 stroke-[2.5]" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight font-heading">
                GARAGE KOTTMANN
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Ihre verlässliche Autowerkstatt für Reparaturen, Fahrzeugservice, MFK-Vorbereitung und computergestützte Diagnose im Zürcher Norden.
            </p>
            <div className="pt-2 flex flex-col gap-1.5 text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-amber-500" />
                Sorgfältige Handwerksarbeit
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-amber-500" />
                Transparente Arbeitsabsprachen
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide font-heading">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => { onNavigate('home'); scrollToTop(); }}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Startseite
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('services'); scrollToTop(); }}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Leistungen & Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('about'); scrollToTop(); }}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Über die Werkstatt
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('faq'); scrollToTop(); }}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Häufige Fragen (FAQ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); scrollToTop(); }}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Kontakt & Anfahrt
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Automotive Focus */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide font-heading">
              Werkstattleistungen
            </h3>
            <ul className="space-y-2 text-xs leading-relaxed text-slate-400">
              <li>• Service nach Herstellervorgaben & Inspektion</li>
              <li>• Motorelektronik & Systemdiagnose</li>
              <li>• Bremseninstandstellung & Sicherheitscheck</li>
              <li>• MFK-Vorbereitung (Motorfahrzeugkontrolle)</li>
              <li>• Saisonaler Reifenservice & Radwechsel</li>
              <li>• Fahrwerk, Stossdämpfer & Lenkung</li>
              <li>• Auspuffanlage & Abgaskontrolle</li>
              <li>• Starterbatterie & Bordelektrik</li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base mb-2 tracking-wide font-heading">
              Standort & Kontakt
            </h3>
            
            <div className="flex items-start gap-3 text-slate-300">
              <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-white">{BUSINESS_INFO.name}</p>
                <p>{BUSINESS_INFO.address.street}</p>
                <p>{BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}</p>
                <p className="text-xs text-slate-500 mt-1">{BUSINESS_INFO.address.district}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Phone className="w-5 h-5 text-amber-500 shrink-0" />
              <div>
                <span className="text-xs text-slate-400 block">Telefonische Erreichbarkeit</span>
                <a
                  href={BUSINESS_INFO.contact.phoneTel}
                  id="footer-phone-link"
                  className="text-base font-bold font-mono text-amber-400 hover:text-amber-300 transition-colors"
                >
                  {BUSINESS_INFO.contact.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => { onNavigate('contact'); scrollToTop(); }}
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
              >
                <Navigation className="w-3.5 h-3.5 text-amber-400" />
                Wegbeschreibung & Karte
              </button>
            </div>
          </div>
        </div>

        {/* Divider and Bottom Details */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. Alle Rechte vorbehalten. {BUSINESS_INFO.address.fullFormatted}.</p>
          <div className="flex items-center gap-6">
            <span>Schweizer Werkstattbetrieb • Zürich Nord</span>
            <button
              onClick={scrollToTop}
              id="back-to-top-button"
              className="flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors focus:outline-none"
              aria-label="Nach oben scrollen"
            >
              <span>Nach oben</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
