"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08 }
    );
    document
      .querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#" className="font-[family-name:var(--font-playfair)] text-xl font-bold text-navy tracking-tight">
            Studio Cella Casalone
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#chi-siamo" className="text-sm font-medium text-gray-600 hover:text-navy transition-colors">Chi Siamo</a>
            <a href="#servizi" className="text-sm font-medium text-gray-600 hover:text-navy transition-colors">Servizi</a>
            <a href="#team" className="text-sm font-medium text-gray-600 hover:text-navy transition-colors">Team</a>
            <a href="#perche" className="text-sm font-medium text-gray-600 hover:text-navy transition-colors">Perch&eacute; Noi</a>
            <a href="#contatti" className="bg-navy text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-navy-light transition-colors">
              Contattaci
            </a>
          </div>
          {/* Mobile menu button */}
          <button className="md:hidden text-navy" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-navy via-navy-dark to-navy relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gold blur-[120px]" />
          <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-gold-light blur-[100px]" />
        </div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 relative z-10">
          <div className="max-w-3xl">
            <p className="reveal text-gold font-semibold text-sm tracking-[0.2em] uppercase mb-6">
              Studio di Commercialisti &middot; Milano
            </p>
            <h1 className="reveal stagger-1 font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              Il vostro partner per <span className="text-gold">crescere</span> con fiducia
            </h1>
            <p className="reveal stagger-2 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Da oltre vent&rsquo;anni al fianco di imprese e professionisti con competenza, trasparenza e attenzione personale. Uno studio che cresce insieme a voi.
            </p>
            <div className="reveal stagger-3 flex flex-col sm:flex-row gap-4">
              <a href="#contatti" className="bg-gold text-white font-semibold px-8 py-4 rounded-full text-center hover:bg-gold-light transition-colors">
                Prenota una Consulenza
              </a>
              <a href="#servizi" className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full text-center hover:bg-white/10 transition-colors">
                Scopri i Servizi
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/40 text-xs tracking-widest uppercase">Scorri</span>
          <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </div>
      </section>

      {/* ── CHI SIAMO ── */}
      <section id="chi-siamo" className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="reveal text-gold font-semibold text-sm tracking-[0.2em] uppercase mb-4">Chi Siamo</p>
              <h2 className="reveal stagger-1 font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-navy leading-tight mb-6">
                Tradizione e innovazione al servizio del cliente
              </h2>
              <p className="reveal stagger-2 text-gray-600 text-lg leading-relaxed mb-6">
                Lo Studio Studio Cella Casalone nasce dalla volont&agrave; di offrire un servizio professionale completo, capace di coniugare rigore tecnico e visione strategica.
              </p>
              <p className="reveal stagger-3 text-gray-600 leading-relaxed mb-8">
                Con sede a Milano, assistiamo societ&agrave;, imprenditori e privati in ogni aspetto della vita fiscale e societaria, dalla costituzione di nuove realt&agrave; alla consulenza ordinaria, fino alle operazioni straordinarie.
              </p>
              <a href="#team" className="reveal stagger-4 inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors">
                Conosci il team
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="reveal-right">
              <div className="bg-gray-50 rounded-3xl p-8 md:p-12 relative">
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gold/10 rounded-2xl" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-navy/5 rounded-2xl" />
                <div className="relative space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy text-lg">Oltre 20 anni</h4>
                      <p className="text-gray-500 text-sm">di esperienza al fianco delle imprese</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy text-lg">Team di 5 professionisti</h4>
                      <p className="text-gray-500 text-sm">dedicati e specializzati</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy text-lg">Riservatezza totale</h4>
                      <p className="text-gray-500 text-sm">e trasparenza in ogni fase</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVIZI ── */}
      <section id="servizi" className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="reveal text-gold font-semibold text-sm tracking-[0.2em] uppercase mb-4">I Nostri Servizi</p>
            <h2 className="reveal stagger-1 font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-navy leading-tight">
              Soluzioni per ogni esigenza
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" /></svg>
                ),
                title: "Consulenza Fiscale",
                desc: "Pianificazione fiscale strategica, dichiarazioni dei redditi, IVA, e gestione di ogni adempimento tributario.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                ),
                title: "Consulenza Societaria",
                desc: "Costituzione di societ&agrave;, operazioni straordinarie, fusioni, scissioni, trasformazioni e cessioni.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                ),
                title: "Contabilit&agrave; e Bilanci",
                desc: "Tenuta della contabilit&agrave; ordinaria e semplificata, redazione bilanci, reportistica periodica.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                ),
                title: "Lavoro e Paghe",
                desc: "Gestione del personale, elaborazione cedolini, consulenza contrattuale e adempimenti contributivi.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                ),
                title: "Startup e PMI",
                desc: "Accompagnamento dalla nascita alla crescita: business plan, agevolazioni, accesso al credito.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                ),
                title: "Revisione e Controllo",
                desc: "Revisione legale dei conti, due diligence, perizie e valutazioni d&rsquo;azienda.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className={`reveal stagger-${i + 1} group bg-white rounded-2xl p-8 border border-gray-100 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 cursor-pointer`}
              >
                <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center text-navy group-hover:bg-gold/10 group-hover:text-gold transition-colors mb-6">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-navy text-xl mb-3" dangerouslySetInnerHTML={{ __html: s.title }} />
                <p className="text-gray-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: s.desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team" className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="reveal text-gold font-semibold text-sm tracking-[0.2em] uppercase mb-4">Il Team</p>
            <h2 className="reveal stagger-1 font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-navy leading-tight mb-6">
              Le persone dietro i numeri
            </h2>
            <p className="reveal stagger-2 text-gray-500 text-lg">
              Professionisti con competenze complementari, uniti da una visione condivisa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { name: "Martino Cella", role: "Socio Fondatore", bio: "Dottore Commercialista e Revisore Legale. Specializzato in consulenza fiscale e societaria per imprese di medie e grandi dimensioni." },
              { name: "Luca Casalone", role: "Socio Fondatore", bio: "Dottore Commercialista e Revisore Legale. Esperto in contabilit\u00e0, bilanci e consulenza per startup e PMI innovative." },
            ].map((m, i) => (
              <div key={i} className={`reveal stagger-${i + 1}`}>
                <div className="bg-gray-50 rounded-3xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-28 h-28 bg-gradient-to-br from-navy to-navy-light rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white font-[family-name:var(--font-playfair)] text-3xl font-bold">
                      {m.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy mb-1">{m.name}</h3>
                  <p className="text-gold font-semibold text-sm tracking-wider uppercase mb-4">{m.role}</p>
                  <p className="text-gray-500 leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERCHE NOI ── */}
      <section id="perche" className="py-24 md:py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold blur-[150px]" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="reveal text-gold font-semibold text-sm tracking-[0.2em] uppercase mb-4">Perch&eacute; Sceglierci</p>
            <h2 className="reveal stagger-1 font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-white leading-tight">
              Un approccio diverso
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Ascolto e Personalizzazione", desc: "Ogni cliente ha una storia diversa. Non esistono soluzioni standard: ogni strategia nasce dall'ascolto attento delle vostre esigenze." },
              { num: "02", title: "Proattivit\u00e0", desc: "Non ci limitiamo a rispondere: anticipiamo. Monitoriamo le novit\u00e0 normative per proporvi soluzioni prima che diventino urgenze." },
              { num: "03", title: "Trasparenza Totale", desc: "Comunicazione chiara, preventivi definiti, nessuna sorpresa. Saprete sempre a che punto siamo e quanto coster\u00e0." },
            ].map((item, i) => (
              <div key={i} className={`reveal stagger-${i + 1}`}>
                <div className="border border-white/10 rounded-2xl p-8 hover:border-gold/30 transition-colors h-full">
                  <span className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-gold/20 block mb-4">{item.num}</span>
                  <h3 className="font-semibold text-white text-xl mb-3">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTATTI ── */}
      <section id="contatti" className="py-24 md:py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="reveal text-gold font-semibold text-sm tracking-[0.2em] uppercase mb-4">Contatti</p>
              <h2 className="reveal stagger-1 font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-navy leading-tight mb-6">
                Parliamone insieme
              </h2>
              <p className="reveal stagger-2 text-gray-600 text-lg leading-relaxed mb-10">
                Il primo incontro &egrave; sempre senza impegno. Raccontateci le vostre esigenze e troveremo insieme la soluzione migliore.
              </p>

              <div className="reveal stagger-3 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Sede</h4>
                    <p className="text-gray-500">Milano, Italia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Email</h4>
                    <p className="text-gray-500">info@studiocellacasalone.it</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Telefono</h4>
                    <p className="text-gray-500">+39 02 XXXX XXX</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal-right">
              <form className="bg-white rounded-3xl p-8 md:p-10 shadow-lg shadow-navy/5">
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1.5">Nome e Cognome</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors" placeholder="Il tuo nome" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1.5">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors" placeholder="tua@email.it" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1.5">Telefono</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors" placeholder="+39 ..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1.5">Messaggio</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors resize-vertical" placeholder="Raccontaci le tue esigenze..." />
                  </div>
                  <button type="submit" className="w-full bg-navy text-white font-semibold py-4 rounded-full hover:bg-navy-light transition-colors">
                    Invia Richiesta
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-navy-dark py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-4">Studio Cella Casalone</h3>
              <p className="text-white/50 leading-relaxed text-sm">
                Studio di Dottori Commercialisti e Revisori Legali. Al vostro fianco con competenza e passione.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Link Rapidi</h4>
              <div className="space-y-3">
                <a href="#chi-siamo" className="block text-white/50 hover:text-gold transition-colors text-sm">Chi Siamo</a>
                <a href="#servizi" className="block text-white/50 hover:text-gold transition-colors text-sm">Servizi</a>
                <a href="#team" className="block text-white/50 hover:text-gold transition-colors text-sm">Team</a>
                <a href="#contatti" className="block text-white/50 hover:text-gold transition-colors text-sm">Contatti</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Sede</h4>
              <p className="text-white/50 text-sm leading-relaxed">
                Milano, Italia<br />
                P.IVA: XX XXXXXXX XXX
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm">&copy; 2026 Studio Studio Cella Casalone. Tutti i diritti riservati.</p>
            <div className="flex gap-6">
              <a href="#" className="text-white/30 hover:text-gold text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/30 hover:text-gold text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
