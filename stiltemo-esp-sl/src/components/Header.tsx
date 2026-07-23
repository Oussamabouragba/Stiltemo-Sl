import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, PhoneCall } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  currentLang: 'ES' | 'PT' | 'EN';
  setLang: (lang: 'ES' | 'PT' | 'EN') => void;
  activeSection: string;
}

export default function Header({ currentLang, setLang, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = {
    ES: {
      services: 'Servicios',
      projects: 'Proyectos',
      coverage: 'Cobertura',
      about: 'Nosotros',
      contact: 'Contacto',
      cta: 'Solicitar Presupuesto',
    },
    PT: {
      services: 'Serviços',
      projects: 'Projetos',
      coverage: 'Cobertura',
      about: 'Nós',
      contact: 'Contacto',
      cta: 'Pedir Orçamento',
    },
    EN: {
      services: 'Services',
      projects: 'Projects',
      coverage: 'Coverage',
      about: 'About Us',
      contact: 'Contact',
      cta: 'Request Quote',
    },
  }[currentLang];

  const menuItems = [
    { id: 'services', label: t.services },
    { id: 'about', label: t.about },
    { id: 'projects', label: t.projects },
    { id: 'coverage', label: t.coverage },
    { id: 'contact', label: t.contact },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of header
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
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#192850]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* STILTEMO Official Logo */}
          <div 
            id="logo-container"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Logo variant="horizontal" dark={true} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6" id="nav-desktop">
            <div className="flex items-center gap-1.5 lg:gap-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative cursor-pointer ${
                    activeSection === item.id
                      ? 'text-white font-semibold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#4f46e5]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-md p-1" id="lang-switcher">
              <Globe className="w-3.5 h-3.5 text-gray-400 mx-1" />
              {(['ES', 'PT', 'EN'] as const).map((lang) => (
                <button
                  key={lang}
                  id={`lang-btn-${lang}`}
                  onClick={() => setLang(lang)}
                  className={`text-[10px] uppercase font-bold px-1.5 py-1 rounded transition-colors cursor-pointer ${
                    currentLang === lang
                      ? 'bg-white text-[#192850]'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Primary CTA Button */}
            <button
              id="header-cta-btn"
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded font-medium text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-md shadow-indigo-950/40 hover:shadow-indigo-900/60 transition-all active:scale-95 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              {t.cta}
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Quick Lang Switcher Mobile */}
            <button
              id="mobile-lang-quick"
              onClick={() => {
                const order: ('ES' | 'PT' | 'EN')[] = ['ES', 'PT', 'EN'];
                const next = order[(order.indexOf(currentLang) + 1) % order.length];
                setLang(next);
              }}
              className="text-xs font-bold text-gray-300 bg-white/10 px-2 py-1 rounded flex items-center gap-1 border border-white/10"
            >
              <Globe className="w-3 h-3" />
              {currentLang}
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 rounded text-gray-300 hover:text-white bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-dropdown"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#131d3b]/98 border-b border-white/10 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-600/20 text-white font-semibold border-l-4 border-blue-500'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <div className="flex justify-between items-center px-3 text-sm text-gray-400">
                  <span>Idioma / Language</span>
                  <div className="flex gap-1.5 bg-white/5 p-1 rounded-md">
                    {(['ES', 'PT', 'EN'] as const).map((lang) => (
                      <button
                        key={lang}
                        id={`mobile-lang-btn-${lang}`}
                        onClick={() => setLang(lang)}
                        className={`text-xs uppercase font-bold px-2 py-1 rounded ${
                          currentLang === lang
                            ? 'bg-white text-[#192850]'
                            : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  id="mobile-menu-cta"
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded font-medium text-center shadow-lg transition-transform active:scale-[0.98]"
                >
                  {t.cta}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
