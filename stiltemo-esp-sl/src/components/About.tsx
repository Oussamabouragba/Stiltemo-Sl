import { motion } from 'motion/react';
import { ShieldAlert, Award, FileSpreadsheet, Layers, Building2 } from 'lucide-react';

interface AboutProps {
  currentLang: 'ES' | 'PT' | 'EN';
}

export default function About({ currentLang }: AboutProps) {
  const aboutImg = '/src/assets/images/about_site_1779792982304.png';

  const t = {
    ES: {
      title: 'Quiénes Somos',
      subtitle: 'Socio de confianza para fabricantes globales de estanterías industriales',
      paragraph1: 'STILTEMO ESP SL es una empresa española especializada en intralogística y montaje industrial, operando como subcontratista técnico de máxima confianza para los principales fabricantes de estanterías metálicas y grandes firmas de ingeniería logística del mundo.',
      paragraph2: 'Prestamos servicios profesionales de instalación, montaje mecánico de alta precisión y asistencia técnica continua en proyectos de almacenamiento de gran envergadura. Nuestra sede en Vigo nos dota de una excelente posición logística para dar cobertura integral a toda la Península Ibérica.',
      coreTitle: 'Pilares de Precisión',
      cores: [
        { title: 'Subcontratación Directa', desc: 'Trabajamos bajo los estándares y planes más rigurosos del fabricante.', icon: Building2 },
        { title: 'Máxima Seguridad y PRL', desc: 'Garantía absoluta en prevención de riesgos laborales y normativas vigentes.', icon: ShieldAlert },
        { title: 'Ingeniería de Montaje', desc: 'Asistencia y replanteo de tolerancias en estructuras complejas.', icon: Layers },
        { title: 'Certificaciones Europeas', desc: 'Acreditados para todo tipo de alturas y sistemas automatizados.', icon: Award }
      ]
    },
    PT: {
      title: 'Quem Somos',
      subtitle: 'Parceiro de confiança para fabricantes mundiais de estantes industriais',
      paragraph1: 'A STILTEMO ESP SL é uma empresa espanhola especializada em intralogística e montagem industrial, atuando como subcontratado técnico de máxima confiança para os principais fabricantes de estantes metálicas e empresas de engenharia logística do mundo.',
      paragraph2: 'Oferecemos serviços profissionais de instalação, montagem mecânica de alta precisão e assistência técnica contínua em projetos de armazenamento de grande escala. A nossa sede em Vigo confere-nos uma excelente posição de mobilidade e logística em toda a Península Ibérica.',
      coreTitle: 'Pilares de Precisão',
      cores: [
        { title: 'Subcontratação Direta', desc: 'Trabalhamos estritamente sob as normas e especificações do fabricante.', icon: Building2 },
        { title: 'Máxima Segurança no Trabalho', desc: 'Garantia e conformidade absoluta em saúde e prevenção de riscos industriais.', icon: ShieldAlert },
        { title: 'Engenharia de Montagem', desc: 'Assistência e precisão em tolerâncias estruturais complexas.', icon: Layers },
        { title: 'Qualificações Europeias', desc: 'Acreditados para montagens de alta visibilidade e silos autoportantes.', icon: Award }
      ]
    },
    EN: {
      title: 'Who We Are',
      subtitle: 'A Trusted Partner for Leading Global Storage System Manufacturers',
      paragraph1: 'STILTEMO ESP SL is a Spanish company specialized in intralogistics and industrial construction, acting as a trusted subcontractor for major warehouse manufacturers and engineering companies.',
      paragraph2: 'We provide professional installation, high-precision mechanical assembly, and continuous technical support for large-scale industrial storage systems. Based in Vigo, our strategic hub allows us to deploy technical crews agilely across Spain and Portugal.',
      coreTitle: 'Core Engineering Principles',
      cores: [
        { title: 'Direct Subcontracting', desc: 'We align directly with manufacturer blueprints, methodologies, and oversight.', icon: Building2 },
        { title: 'Strict Safety & OHS', desc: 'Rigorous compliance with Occupational Health and Safety standards (PRL).', icon: ShieldAlert },
        { title: 'Installation Engineering', desc: 'Accurate alignment, load tolerance checking, and structural validation.', icon: Layers },
        { title: 'Regulatory Compliance', desc: 'Certified in European materials assembly standards for high-bay environments.', icon: Award }
      ]
    }
  }[currentLang];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#0a0f1d] border-b border-slate-800 relative grid-pattern">
      {/* Subtle blue accent background glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono text-blue-400 tracking-[0.2em] font-medium uppercase">
            // Corporate Overview
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            {t.title}
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded" />
          <p className="text-lg text-slate-300 font-medium pt-2">
            {t.subtitle}
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text block and values */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-sans font-bold text-blue-400 tracking-tight border-l-4 border-blue-500 pl-4">
              STILTEMO ESP SL
            </h3>
            
            <p className="text-slate-300 leading-relaxed font-light">
              {t.paragraph1}
            </p>
            
            <p className="text-slate-400 leading-relaxed">
              {t.paragraph2}
            </p>

            {/* Sub-grid of values */}
            <div className="pt-6 border-t border-slate-800">
              <h4 className="text-xs font-mono font-bold text-blue-300 uppercase tracking-widest mb-4">
                {t.coreTitle}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.cores.map((core, i) => {
                  const Icon = core.icon;
                  return (
                    <div key={i} className="flex gap-3 items-start p-4 bg-slate-900/40 border border-slate-800 rounded hover:border-blue-500/50 hover:bg-slate-900/80 transition-all group/card">
                      <div className="p-2 bg-blue-950/40 rounded text-blue-400 border border-blue-900/50 shrink-0 group-hover/card:bg-blue-900/50 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <h5 className="font-semibold text-sm text-slate-100 group-hover/card:text-blue-300 transition-colors">{core.title}</h5>
                        <p className="text-xs text-slate-400 leading-snug">{core.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Blueprint styled image display */}
          <div className="lg:col-span-6" id="about-image-wrapper">
            <div className="relative p-3 bg-slate-900/60 rounded-lg border border-slate-700 shadow-2xl overflow-hidden group">
              {/* Engineering Blueprint Overlay Decor */}
              <div className="absolute top-4 left-4 z-10 text-[10px] text-blue-400 font-mono opacity-80">
                STLT-DWG_9124_L03
              </div>
              <div className="absolute top-4 right-4 z-10 text-[10px] text-white bg-blue-900/80 px-1.5 py-0.5 font-mono uppercase tracking-wider rounded border border-blue-700">
                SCALE: 1:50
              </div>
              
              <div className="relative aspect-[4/3] rounded overflow-hidden bg-slate-950">
                <img
                  src={aboutImg}
                  alt="STILTEMO technical team reviewing installation plans on blue structure"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                
                {/* Visual grid ticks for a technical, modern design */}
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-950/90 to-transparent flex items-end justify-between px-3 pb-2 text-[9px] text-slate-300 font-mono">
                  <span>ELEVATION: +18.40m</span>
                  <span>TOLERANCE: ≤ 1.5mm</span>
                  <span>CAD VERIFIED</span>
                </div>
              </div>

              {/* Dimension indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/90 border border-slate-700 px-3 py-1.5 rounded shadow-lg text-[10px] text-slate-200 font-mono flex items-center gap-1.5 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 anim-pulse" />
                VIGO HQ & DEPOT
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
