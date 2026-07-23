import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, ShieldCheck, HardHat, TrendingUp, Globe2 } from 'lucide-react';

interface HeroProps {
  currentLang: 'ES' | 'PT' | 'EN';
}

export default function Hero({ currentLang }: HeroProps) {
  const heroImg = '/src/assets/images/hero_bg_1779792959904.png';

  const t = {
    ES: {
      headline: 'Soluciones de Intralogística y Montaje Industrial',
      subheadline: 'Especialistas en la instalación, montaje y mantenimiento de grandes sistemas de almacenamiento industrial en España y Portugal.',
      viewProjects: 'Ver Proyectos',
      contactUs: 'Contactar',
      stats: [
        { value: '22+', label: 'Técnicos Propios', icon: HardHat, desc: 'Especialistas titulados y cualificados.' },
        { value: '1.5M - 3M€', label: 'Volumen Anual', icon: TrendingUp, desc: 'Crecimiento estructural sostenido.' },
        { value: 'Iberia', label: 'España y Portugal', icon: Globe2, desc: 'Cobertura geográfica completa.' },
        { value: 'Premium', label: 'Proyectos Certificados', icon: ShieldCheck, desc: 'Socio de confianza para fabricantes líderes.' },
      ]
    },
    PT: {
      headline: 'Soluções de Intralogística e Montagem Industrial',
      subheadline: 'Especialistas na instalação, montagem e manutenção de sistemas de armazenamento industrial de grande escala em Espanha e Portugal.',
      viewProjects: 'Ver Projetos',
      contactUs: 'Contactar',
      stats: [
        { value: '22+', label: 'Técnicos Próprios', icon: HardHat, desc: 'Especialistas qualificados e certificados.' },
        { value: '1.5M - 3M€', label: 'Volume Anual', icon: TrendingUp, desc: 'Crescimento estrutural consolidado.' },
        { value: 'Iberia', label: 'Espanha e Portugal', icon: Globe2, desc: 'Cobertura geográfica integrada.' },
        { value: 'Premium', label: 'Projetos Certificados', icon: ShieldCheck, desc: 'Parceiro estratégico dos construtores.' },
      ]
    },
    EN: {
      headline: 'Industrial Assembly & Intralogistics Solutions',
      subheadline: 'Specialists in installation, assembly and maintenance of large-scale industrial storage systems across Spain and Portugal.',
      viewProjects: 'View Projects',
      contactUs: 'Contact Us',
      stats: [
        { value: '22+', label: 'In-House Technicians', icon: HardHat, desc: 'Qualified and certified specialists.' },
        { value: '1.5M – 3M€', label: 'Annual Volume', icon: TrendingUp, desc: 'Steady, structural growth.' },
        { value: 'Iberia', label: 'Spain & Portugal', icon: Globe2, desc: 'Full geographical deployment.' },
        { value: 'Premium', label: 'Certified Projects', icon: ShieldCheck, desc: 'Subcontractor of choice for major OEMs.' },
      ]
    }
  }[currentLang];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center bg-[#0d1527] overflow-hidden pt-20">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="STILTEMO industrial storage assembly site background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-35 mix-blend-luminosity scale-105"
        />
        {/* Modern dark gradient masks */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1527] via-[#0d1527]/90 to-[#192850]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1527] via-transparent to-[#0d1527]/70" />
        
        {/* Abstract technological layout lines overlaying background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-950/80 to-indigo-950/80 border border-blue-500/30 rounded-full text-blue-300 text-xs font-mono uppercase tracking-[0.15em] font-semibold"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              STILTEMO ESP SL • Precision Subcontracting
            </motion.div>

            {/* Main Premium Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-white tracking-tight leading-none"
            >
              {t.headline}
            </motion.h1>

            {/* Industrial Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed"
            >
              {t.subheadline}
            </motion.p>

            {/* Core Action Callouts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4 items-center pt-2"
            >
              <button
                id="hero-contact-button"
                onClick={() => handleScrollTo('contact')}
                className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded font-medium text-sm tracking-wider uppercase flex items-center gap-2 shadow-lg shadow-indigo-950/70 hover:shadow-indigo-900/90 transition-all cursor-pointer hover:-translate-y-0.5"
              >
                {t.contactUs}
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                id="hero-projects-button"
                onClick={() => handleScrollTo('projects')}
                className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded font-medium text-sm tracking-wider uppercase flex items-center gap-2 transition-all cursor-pointer"
              >
                {t.viewProjects}
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            </motion.div>
          </div>

          {/* Interactive Industrial Floating stats layout */}
          <div className="lg:col-span-5 w-full mt-4 lg:mt-0" id="hero-stats-panel">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
            >
              {/* Highlight line accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
              
              <h3 className="text-white font-mono uppercase tracking-widest text-xs font-bold mb-6 text-gray-400 border-b border-white/5 pb-3">
                // System Capacity Indicators
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {t.stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="flex flex-col p-4 bg-white/5 rounded-lg border border-white/5 hover:border-blue-500/30 transition-colors group">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-500/10 rounded border border-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight">
                          {stat.value}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-gray-200 leading-tight">
                        {stat.label}
                      </span>
                      <span className="text-xs text-gray-400 mt-1 leading-snug font-light">
                        {stat.desc}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Regulatory standard indicator */}
              <div className="mt-6 flex items-center justify-between gap-4 text-[10px] text-gray-400 font-mono border-t border-white/5 pt-4">
                <span>HEADQUARTERS: VIGO, ES</span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  OPERATIONAL IN IBERIA
                </span>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>

      {/* Decorative metal support rack styling on absolute footer */}
      <div className="w-full h-2 bg-slate-950 border-t border-white/10 flex gap-1 z-10">
        <div className="flex-1 bg-gradient-to-r from-blue-900 to-transparent" />
        <div className="w-4 bg-orange-600/60" />
        <div className="w-4 bg-orange-600/60" />
        <div className="flex-1 bg-gradient-to-l from-indigo-900 to-transparent" />
      </div>
    </section>
  );
}
