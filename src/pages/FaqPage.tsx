import React, { useState } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, FAQ_ITEMS } from '../data/garageInfo';
import { HelpCircle, ChevronDown, Search, Phone, ArrowRight, AlertCircle, MessageSquare } from 'lucide-react';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Alle Themen' },
    { id: 'Termine & Ablauf', label: 'Termine & Ablauf' },
    { id: 'Reparaturen & Diagnose', label: 'Reparaturen & Diagnose' },
    { id: 'MFK', label: 'MFK-Kontrolle' },
    { id: 'Service', label: 'Service & Fahrzeugtypen' },
  ];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 py-8">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wide">
          <span>Antworten & Beratung</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
          Häufig gestellte Fragen (FAQ)
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Wissenswertes über Reparaturabläufe, Terminvereinbarungen, MFK-Vorbereitungen und den Werkstattbesuch bei Garage Kottmann in Zürich.
        </p>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#111721] p-3 rounded-xl border border-slate-800">
          <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Frage durchsuchen..."
              className="w-full bg-[#0E131A] border border-slate-700 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>
      </section>

      {/* Accordion FAQ Items */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-[#111721] rounded-xl border border-slate-800 text-slate-400 space-y-3">
            <AlertCircle className="w-8 h-8 text-amber-500 mx-auto" />
            <p className="text-base font-semibold text-white">Keine Einträge gefunden</p>
            <p className="text-xs">Versuchen Sie einen anderen Suchbegriff oder kontaktieren Sie uns direkt per Telefon.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  id={`faq-item-${faq.id}`}
                  className="bg-[#121822] border border-slate-800 rounded-xl overflow-hidden shadow-md transition-all"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left text-base font-semibold text-white hover:text-amber-400 transition-colors"
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
                    <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4 bg-[#0E131A]/60">
                      <p>{faq.answer}</p>
                      <div className="mt-3 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        Kategorie: {faq.category}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Unresolved question banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111721] border border-slate-800 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white font-heading">
              Ihre Frage war nicht dabei?
            </h3>
            <p className="text-xs text-slate-300">
              Rufen Sie uns direkt in der Werkstatt an oder nutzen Sie das Kontaktformular.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={BUSINESS_INFO.contact.phoneTel}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-colors"
            >
              <Phone className="w-4 h-4 stroke-[2.5]" />
              <span>{BUSINESS_INFO.contact.phoneDisplay}</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors"
            >
              <span>Nachricht senden</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
