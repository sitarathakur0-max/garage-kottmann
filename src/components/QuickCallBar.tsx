import React from 'react';
import { BUSINESS_INFO } from '../data/garageInfo';
import { Phone, CalendarCheck } from 'lucide-react';
import { PageId } from '../types';

interface QuickCallBarProps {
  onNavigate: (page: PageId) => void;
}

export const QuickCallBar: React.FC<QuickCallBarProps> = ({ onNavigate }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 p-2.5 bg-[#0D1117]/95 backdrop-blur-lg border-t border-slate-800 shadow-2xl">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={BUSINESS_INFO.contact.phoneTel}
          id="sticky-mobile-phone-btn"
          className="flex items-center justify-center gap-2 py-3 px-3 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-bold text-sm rounded-lg shadow-md transition-transform active:scale-[0.98]"
        >
          <Phone className="w-4 h-4 stroke-[2.5]" />
          <span>Anrufen</span>
        </a>
        <button
          onClick={() => {
            onNavigate('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          id="sticky-mobile-inquiry-btn"
          className="flex items-center justify-center gap-2 py-3 px-3 bg-slate-800 hover:bg-slate-700 active:bg-slate-900 text-white font-semibold text-sm rounded-lg border border-slate-700 transition-colors"
        >
          <CalendarCheck className="w-4 h-4 text-amber-400" />
          <span>Anfrage senden</span>
        </button>
      </div>
    </div>
  );
};
