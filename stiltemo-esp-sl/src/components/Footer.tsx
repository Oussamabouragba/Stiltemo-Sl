import { Linkedin, Globe, Phone, FileText, ArrowUp } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  currentLang: 'ES' | 'PT' | 'EN';
}

export default function Footer({ currentLang }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const t = {
    ES: {
      precision: 'Precisión en ingeniería. Excelencia industrial.',
      navTitle: 'Navegación Técnica',
      contactTitle: 'Oficina Central Vigo',
      privacy: 'Política de Privacidad',
      legal: 'Aviso Legal',
      cookies: 'Política de Cookies',
      rights: 'Todos los derechos reservados.',
      cif: 'CIF: B75213132',
      addressBrief: 'Oficina 4, 36203 Vigo, España',
    },
    PT: {
      precision: 'Precisão em engenharia. Excelência industrial.',
      navTitle: 'Navegação Técnica',
      contactTitle: 'Escritório Central de Vigo',
      privacy: 'Política de Privacidade',
      legal: 'Aviso Legal',
      cookies: 'Política de Cookies',
      rights: 'Todos os direitos reservados.',
      cif: 'CIF: B75213132',
      addressBrief: 'Escritório 4, 36203 Vigo, Espanha',
    },
    EN: {
      precision: 'Engineering precision. Industrial excellence.',
      navTitle: 'Technical Navigation',
      contactTitle: 'Vigo Central Desk',
      privacy: 'Privacy Policy',
      legal: 'Legal Notice',
      cookies: 'Cookie Preference',
      rights: 'All rights reserved.',
      cif: 'VAT / CIF: B75213132',
      addressBrief: 'Floor 2, Office 4, 36203 Vigo, Spain',
    }
  }[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = [
    { id: 'services', label: currentLang === 'ES' ? 'Servicios' : currentLang === 'PT' ? 'Serviços' : 'Services' },
    { id: 'about', label: currentLang === 'ES' ? 'Nosotros' : currentLang === 'PT' ? 'Nós' : 'About Us' },
    { id: 'projects', label: currentLang === 'ES' ? 'Proyectos' : currentLang === 'PT' ? 'Projetos' : 'Projects' },
    { id: 'coverage', label: currentLang === 'ES' ? 'Cobertura' : currentLang === 'PT' ? 'Cobertura' : 'Coverage' },
    { id: 'contact', label: currentLang === 'ES' ? 'Contacto' : currentLang === 'PT' ? 'Contacto' : 'Contact' },
  ];

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
    <footer id="footer" className="bg-[#0b1224] text-gray-400 border-t border-white/5 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer columns grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/5 pb-12 items-start" id="footer-columns-wrapper">
          
          {/* Col 1: Logo & Precision Quote */}
          <div className="md:col-span-4 space-y-4 text-left">
            <div onClick={scrollToTop}>
              <Logo variant="large" dark={true} />
            </div>

            <p className="text-xs text-indigo-200 uppercase font-mono tracking-widest leading-relaxed pt-2">
              {t.precision}
            </p>

            {/* LinkedIn standard connection row */}
            <div className="flex items-center gap-3 pt-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                id="footer-linkedin-link"
                className="p-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded border border-white/10 transition-colors"
                title="LinkedIn Page"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded border border-white/10 transition-colors"
                title="Official Website Map"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-white font-mono text-xs uppercase tracking-widest font-bold">
              // {t.navTitle}
            </h4>
            <ul className="space-y-2 text-sm">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    id={`footer-nav-link-${item.id}`}
                    onClick={() => handleScrollTo(item.id)}
                    className="hover:text-white transition-colors cursor-pointer text-left py-0.5"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Strategic Contacts */}
          <div className="md:col-span-5 text-left space-y-4">
            <h4 className="text-white font-mono text-xs uppercase tracking-widest font-bold">
              // {t.contactTitle}
            </h4>
            <div className="space-y-2.5 text-sm font-light">
              <p className="leading-snug">
                Calle Manuel Núñez, 2, 2º Piso, Oficina 4<br />
                36203 Vigo, Pontevedra, Spain
              </p>
              <div className="space-y-1 text-xs font-mono">
                <div className="text-gray-400">
                  {t.cif}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-indigo-400" />
                  <a href="tel:+34986222222" className="hover:text-white">
                    +34 986 22 22 22
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-indigo-400" />
                  <a href="mailto:Adminstracion@stiltemo.com" className="hover:text-white break-all">
                    Adminstracion@stiltemo.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Sub-footer */}
        <div id="sub-footer-legal" className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="text-left font-mono">
            &copy; {currentYear} STILTEMO ESP SL. {t.rights}
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono">
            <a href="#about" onClick={(e) => { e.preventDefault(); alert("STILTEMO SL - Legal: Registered in Pontevedra Register. CIF: B75213132."); }} className="hover:text-gray-300">
              {t.legal}
            </a>
            <a href="#about" onClick={(e) => { e.preventDefault(); alert("STILTEMO SL - Privacy Policy: Compliance with Spanish LOPD/RGPD guidelines. User inquiries are strictly private."); }} className="hover:text-gray-300">
              {t.privacy}
            </a>
            <a href="#about" onClick={(e) => { e.preventDefault(); alert("STILTEMO SL - Cookies: Strictly technical local storage preference parameters used."); }} className="hover:text-gray-300">
              {t.cookies}
            </a>
            <button
              onClick={scrollToTop}
              id="back-to-top-btn"
              className="text-indigo-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
              title="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
