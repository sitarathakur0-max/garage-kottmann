import React, { useState } from 'react';
import { BUSINESS_INFO, WORKSHOP_SERVICES } from '../data/garageInfo';
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Car,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Send,
  Navigation,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactPageProps {
  initialService?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    serviceCategory: initialService || 'Wartung & Inspektion',
    message: '',
    preferredContact: 'phone'
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Bitte geben Sie Ihren Namen an.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name muss mindestens 2 Zeichen lang sein.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Bitte geben Sie eine Telefonnummer für Rückfragen an.';
    } else if (!/^[+0-9\s/()-]{6,25}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Bitte geben Sie eine gültige Rufnummer ein (z. B. 044 123 45 67).';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse an.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Bitte beschreiben Sie kurz Ihr Anliegen oder die festgestellten Symptome.';
    } else if (formData.message.trim().length < 8) {
      newErrors.message = 'Ihre Nachricht sollte mindestens 8 Zeichen enthalten.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Clean frontend simulation of client submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 600);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      vehicle: '',
      serviceCategory: 'Wartung & Inspektion',
      message: '',
      preferredContact: 'phone'
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="space-y-16 py-8">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wide">
          <span>Standort & Kontakt</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
          Kontakt zur Werkstatt & Anfahrt
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Haben Sie Fragen zu Reparaturen, möchten Sie eine Diagnose anfordern oder einen Termin vereinbaren? Wir freuen uns auf Ihre Kontaktaufnahme.
        </p>
      </section>

      {/* Main Grid: Direct Contact Details & Interactive Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info & Arrival Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone Card */}
            <div className="bg-[#121822] rounded-2xl border border-slate-800 p-6 sm:p-7 shadow-xl relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 shrink-0 shadow-lg shadow-amber-500/20">
                  <Phone className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Telefonischer Direktkontakt
                  </span>
                  <p className="text-xs text-slate-300">
                    Am schnellsten erreichen Sie uns telefonisch:
                  </p>
                  <a
                    href={BUSINESS_INFO.contact.phoneTel}
                    id="contact-page-phone-btn"
                    className="inline-block text-2xl font-black font-mono text-amber-400 hover:text-amber-300 transition-colors pt-1"
                  >
                    {BUSINESS_INFO.contact.phoneDisplay}
                  </a>
                  <p className="text-[11px] text-slate-400 pt-1">
                    Klicken zum direkten Anrufen auf mobilen Geräten.
                  </p>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-[#121822] rounded-2xl border border-slate-800 p-6 sm:p-7 shadow-xl space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-6 h-6 stroke-[2]" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Standort Werkstatt
                  </span>
                  <h2 className="text-lg font-bold text-white font-heading">{BUSINESS_INFO.name}</h2>
                  <p className="text-sm text-slate-300 font-medium">
                    {BUSINESS_INFO.address.street}
                  </p>
                  <p className="text-sm text-slate-300">
                    {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}
                  </p>
                  <p className="text-xs text-slate-400 pt-1">
                    {BUSINESS_INFO.address.district}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80 space-y-2 text-xs text-slate-400">
                <p>
                  <strong className="text-slate-300 block">Zufahrt & Anhalten:</strong>
                  {BUSINESS_INFO.address.directionsHint}
                </p>
                <p>
                  <strong className="text-slate-300 block">Öffentlicher Verkehr:</strong>
                  {BUSINESS_INFO.address.publicTransportHint}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.name + ' ' + BUSINESS_INFO.address.fullFormatted)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="google-maps-external-link"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>In Google Maps öffnen / Navigation starten</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>

            {/* Practical Consultation Note */}
            <div className="bg-[#0E131A] rounded-xl border border-slate-800 p-5 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-amber-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Termin- und Besichtigungsabsprache</span>
              </div>
              <p className="leading-relaxed">
                Um Wartezeiten zu vermeiden und sicherzustellen, dass die passende Hebebühne oder das Diagnosegerät bereitsteht, empfehlen wir eine kurze telefonische Vorankündigung vor der Fahrzeugabgabe.
              </p>
            </div>
          </div>

          {/* Right Column: Contact & Inquiry Form with Full Frontend Validation */}
          <div className="lg:col-span-7">
            <div className="bg-[#121822] rounded-2xl border border-slate-800 p-7 sm:p-9 shadow-2xl">
              <div className="mb-6 space-y-1.5 border-b border-slate-800 pb-5">
                <h2 className="text-xl sm:text-2xl font-bold text-white font-heading">
                  Werkstattanfrage senden
                </h2>
                <p className="text-xs sm:text-sm text-slate-400">
                  Übermitteln Sie uns unverbindlich Ihre Anfrage. Wir melden uns zeitnah für die Terminbestätigung oder Rücksprache.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-8 space-y-5 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white font-heading">
                      Vielen Dank für Ihre Anfrage!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Ihre Angaben für <strong className="text-white">{formData.serviceCategory}</strong> wurden erfasst. Das Team der Garage Kottmann wird sich baldmöglichst unter {formData.phone} oder per E-Mail bei Ihnen melden.
                    </p>
                  </div>

                  <div className="p-4 bg-[#0D1219] rounded-xl border border-slate-800 max-w-md mx-auto text-left text-xs space-y-1.5 text-slate-400">
                    <p><strong className="text-slate-200">Name:</strong> {formData.name}</p>
                    <p><strong className="text-slate-200">Rückrufnummer:</strong> {formData.phone}</p>
                    {formData.vehicle && <p><strong className="text-slate-200">Fahrzeug:</strong> {formData.vehicle}</p>}
                    <p><strong className="text-slate-200">Gewählter Service:</strong> {formData.serviceCategory}</p>
                  </div>

                  <div className="pt-3">
                    <button
                      onClick={resetForm}
                      id="reset-contact-form-btn"
                      className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors"
                    >
                      Neue Nachricht verfassen
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="form-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Ihr Name / Firma <span className="text-amber-400">*</span>
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="z. B. Markus Meier"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        className={`w-full bg-[#0E131A] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                          errors.name
                            ? 'border-red-500/80 focus:ring-red-500 focus:border-red-500'
                            : 'border-slate-700 focus:border-amber-500 focus:ring-amber-500'
                        }`}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="form-phone" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Telefonnummer für Rückruf <span className="text-amber-400">*</span>
                      </label>
                      <input
                        id="form-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="z. B. 079 123 45 67"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        className={`w-full bg-[#0E131A] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                          errors.phone
                            ? 'border-red-500/80 focus:ring-red-500 focus:border-red-500'
                            : 'border-slate-700 focus:border-amber-500 focus:ring-amber-500'
                        }`}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email and Vehicle Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="form-email" className="block text-xs font-medium text-slate-300 mb-1.5">
                        E-Mail-Adresse <span className="text-amber-400">*</span>
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="ihre.adresse@beispiel.ch"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={`w-full bg-[#0E131A] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                          errors.email
                            ? 'border-red-500/80 focus:ring-red-500 focus:border-red-500'
                            : 'border-slate-700 focus:border-amber-500 focus:ring-amber-500'
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="form-vehicle" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Fahrzeugangaben (optional)
                      </label>
                      <input
                        id="form-vehicle"
                        type="text"
                        value={formData.vehicle}
                        onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                        placeholder="z. B. VW Golf 7, Jg. 2018 / ZH 123456"
                        className="w-full bg-[#0E131A] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label htmlFor="form-service" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Gewünschter Leistungsbereich
                    </label>
                    <select
                      id="form-service"
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                      className="w-full bg-[#0E131A] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                    >
                      <option value="Allgemeiner Service & Inspektion">Allgemeiner Service & Inspektion</option>
                      <option value="Fehlerdiagnose & Warnleuchte">Fehlerdiagnose & Warnleuchte</option>
                      <option value="Bremsen & Sicherheit">Bremsen & Sicherheit</option>
                      <option value="MFK-Vorbereitung (Motorfahrzeugkontrolle)">MFK-Vorbereitung (Motorfahrzeugkontrolle)</option>
                      <option value="Reifenservice & Radwechsel">Reifenservice & Radwechsel</option>
                      <option value="Fahrwerk, Lenkung & Stossdämpfer">Fahrwerk, Lenkung & Stossdämpfer</option>
                      <option value="Auspuffanlage & Abgase">Auspuffanlage & Abgase</option>
                      <option value="Batterie & Elektrik">Batterie & Elektrik</option>
                      <option value="Sonstige Reparatur / Unklare Symptome">Sonstige Reparatur / Unklare Symptome</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="form-message" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Ihre Nachricht / Symptombeschreibung <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      id="form-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Beschreiben Sie kurz Ihr Anliegen, z. B. Geräusche beim Bremsen, Aufleuchten der Motorkontrollleuchte, anstehende MFK oder Wunschzeitraum für den Service..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`w-full bg-[#0E131A] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                        errors.message
                          ? 'border-red-500/80 focus:ring-red-500 focus:border-red-500'
                          : 'border-slate-700 focus:border-amber-500 focus:ring-amber-500'
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Preferred Contact Mode */}
                  <div className="flex items-center gap-4 text-xs text-slate-300 pt-1">
                    <span className="text-slate-400">Bevorzugte Rückmeldung:</span>
                    <label className="inline-flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={() => setFormData({ ...formData, preferredContact: 'phone' })}
                        className="text-amber-500 focus:ring-amber-500"
                      />
                      <span>Telefonanruf</span>
                    </label>
                    <label className="inline-flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={() => setFormData({ ...formData, preferredContact: 'email' })}
                        className="text-amber-500 focus:ring-amber-500"
                      />
                      <span>E-Mail</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="contact-form-submit-btn"
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 transition-all disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Anfrage wird übermittelt...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 stroke-[2.5]" />
                          <span>Anfrage absenden</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2.5">
                      Ihre Daten werden vertraulich ausschliesslich zur Beantwortung Ihrer Werkstattanfrage verwendet.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Section: Genuinely useful interactive map & route guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121822] rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Kartenausschnitt & Lage</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-heading">
                Regensbergstrasse 244, 8050 Zürich
              </h2>
            </div>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent('Regensbergstrasse 244, 8050 Zürich')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors self-start sm:self-auto"
            >
              <span>Grössere Karte anzeigen</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            </a>
          </div>

          {/* Interactive Map Embed */}
          <div className="rounded-xl overflow-hidden border border-slate-700/80 bg-slate-900 aspect-video sm:aspect-[21/9] max-h-[380px] w-full relative">
            <iframe
              title="Standort Garage Kottmann, Regensbergstrasse 244, 8050 Zürich"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.05) brightness(0.9)' }}
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=8.5200%2C47.4080%2C8.5360%2C47.4160&amp;layer=mapnik&amp;marker=47.4116%2C8.5284"
            />
          </div>

          {/* District & Route Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs text-slate-300">
            <div className="p-3.5 rounded-lg bg-[#0E131A] border border-slate-800 space-y-1">
              <span className="font-semibold text-white block">Aus Richtung Oerlikon / Zentrum</span>
              <p className="text-slate-400">
                Über die Regensbergstrasse stadtauswärts in Richtung Affoltern/Seebach.
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-[#0E131A] border border-slate-800 space-y-1">
              <span className="font-semibold text-white block">Aus Richtung Seebach / Glattbrugg</span>
              <p className="text-slate-400">
                Bequeme Anbindung über die Schaffhauserstrasse und Querung zur Regensbergstrasse.
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-[#0E131A] border border-slate-800 space-y-1">
              <span className="font-semibold text-white block">Parkieren & Vorbeifahrt</span>
              <p className="text-slate-400">
                Kommen Sie zur vereinbarten Zeit direkt auf das Werkstattgelände zur Fahrzeugübergabe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
