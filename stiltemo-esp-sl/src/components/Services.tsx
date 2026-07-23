import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Warehouse, Cpu, Wrench, Settings, ChevronDown, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  currentLang: 'ES' | 'PT' | 'EN';
}

export default function Services({ currentLang }: ServicesProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const t = {
    ES: {
      title: 'Soluciones Focales e Intralogística',
      subtitle: 'Nuestros Servicios Técnicos Especializados',
      clickHint: 'Haga clic en cualquier servicio para ver detalles de ingeniería y normativa',
      services: [
        {
          id: 's1',
          title: 'Montaje de Estanterías Industriales',
          icon: Warehouse,
          desc: 'Instalación profesional de sistemas de almacenaje pesado y dinámico.',
          bullets: [
            'Estantería Convencional (Paletización convencional ajustable)',
            'Sistemas Drive-In / Compactos de alta densidad',
            'Sistemas de estantería dinámica por gravedad y Push-Back',
            'Altillos, plataformas elevadas y estructuras de pasarelas multiportantes'
          ],
          standard: 'Cumplimiento exhaustivo de la normativa de montaje UNE-EN 15620.'
        },
        {
          id: 's2',
          title: 'Sistemas de Almacenes Automáticos',
          icon: Cpu,
          desc: 'Ensamblaje mecánico de alta precisión para trincheras, transelevadores y lanzaderas.',
          bullets: [
            'Silos Autoportantes (Clad-Rack) de más de 30 metros de altura',
            'Transelevadores para palets y sistemas Miniload para cajas',
            'Integración de Shuttles y carros satélites automáticos',
            'Alineación láser de perfiles guía de alta tolerancia'
          ],
          standard: 'Estructuras alineadas de acuerdo con FEM 9.831 y UNE-EN 15620.'
        },
        {
          id: 's3',
          title: 'Soporte e Ingeniería Estructural',
          icon: Wrench,
          desc: 'Asistencia técnica en modificaciones y adaptaciones de grandes almacenes existentes.',
          bullets: [
            'Replanteo topográfico de precisión de placas de anclaje',
            'Modificación y reconfiguración de niveles de carga de forma segura',
            'Diseño de refuerzos estructurales y arriostramientos antisísmicos',
            'Enlace directo con ingenierías del fabricante para homologaciones'
          ],
          standard: 'Cálculos supervisados bajo Eurocódigo 3 de estructuras metálicas.'
        },
        {
          id: 's4',
          title: 'Mantenimiento e Inspección Técnica',
          icon: Settings,
          desc: 'Servicio técnico especializado corrector y preventivo para garantizar la seguridad operativa.',
          bullets: [
            'Inspección Técnica de Estanterías (ITE) obligatoria según UNE-EN 15635',
            'Sustitución inmediata de bastidores y largueros dañados en caliente',
            'Instalación de protecciones de pilares y sistemas de seguridad vial',
            'Emisión de informes técnicos de estado de cargas y placas de características'
          ],
          standard: 'Protocolos estipulados según RD 1215/1997.'
        }
      ]
    },
    PT: {
      title: 'Soluções de Intralogística e Serviços',
      subtitle: 'Os Nossos Serviços Técnicos Especializados',
      clickHint: 'Clique em qualquer serviço para ver especificações e engenharia técnica',
      services: [
        {
          id: 's1',
          title: 'Montagem de Estantes Industriais',
          icon: Warehouse,
          desc: 'Instalação profissional de sistemas de armazenamento pesado e dinâmico.',
          bullets: [
            'Estantes Convencionais (Paletização ajustável convencional)',
            'Sistemas Drive-In / Sistemas compactados de alta densidade',
            'Sistemas FIFO/LIFO de gravidade e dinâmica de fluxo',
            'Mezaninos e plataformas estruturais para aproveitamento de altura'
          ],
          standard: 'Montagem em total cumprimento com as normas de tolerância UNE-EN 15620.'
        },
        {
          id: 's2',
          title: 'Sistemas de Armazém Automatizados',
          icon: Cpu,
          desc: 'Montagem mecânica de alta precisão para transelevadores de carga e lançadeiras.',
          bullets: [
            'Silos Autoportantes (Clad-Rack) com mais de 30 metros de altura',
            'Sistemas transelevadores e dinâmicos para caixas (Miniload)',
            'Integração de automatização por Shuttles (Carros multidirecionais)',
            'Nivelamento e alinhamento milimétrico a laser de vias guia'
          ],
          standard: 'Alinhamento em conformidade estrita com FEM 9.831.'
        },
        {
          id: 's3',
          title: 'Suporte de Engenharia Estrutural',
          icon: Wrench,
          desc: 'Asistencia técnica para a adaptação e redesenho de racks industriais.',
          bullets: [
            'Replanteamento topográfico e furação química de alta performance',
            'Alteração estrutural de níveis dos largueiros sem risco',
            'Reforços metálicos de estabilidade e amarrações sísmicas específicas',
            'Ligação técnica permanente com a fábrica para homologação do fabricante'
          ],
          standard: 'Estruturas de aço calculadas em conformidade com o Eurocódigo 3.'
        },
        {
          id: 's4',
          title: 'Manutenção e Inspeção Técnica (ITE)',
          icon: Settings,
          desc: 'Asistência corretiva e auditoria em estanterias sob padrões de alta segurança.',
          bullets: [
            'Inspeção Técnica Periódica nas instalações sob UNE-EN 15635',
            'Substituição de peças, montantes e bastidores deformados',
            'Implementação de barreiras de proteção e sinalização no armazém',
            'Criação de placares informativos e certificados oficiais de carga máxima'
          ],
          standard: 'Segurança mecânica de acordo com o padrão aplicável PT.'
        }
      ]
    },
    EN: {
      title: 'Intralogistics Excellence & Capabilities',
      subtitle: 'Our Specialized Engineering Services',
      clickHint: 'Click on any service card below to view detailed engineering parameters',
      services: [
        {
          id: 's1',
          title: 'Industrial Racking Installation',
          icon: Warehouse,
          desc: 'Heavy-duty steel warehouse racking structures and high-bay installations.',
          bullets: [
            'Adjustable Selective Pallet Racking systems',
            'Drive-In / Drive-Through high-density systems',
            'Gravity flow and Push-Back industrial systems',
            'Mezzanines, structural platforms, and high-tier picking walkways'
          ],
          standard: 'Fully compliant with European UNE-EN 15620 installation parameters.'
        },
        {
          id: 's2',
          title: 'Automated Warehouse Systems',
          icon: Cpu,
          desc: 'High-precision mechanics for stacker cranes, automatic shuttles, and miniloads.',
          bullets: [
            'Clad-Rack high-bay structures exceeding 30 meters height',
            'Stacker cranes (Transelevators) for heavy pallets and miniload system storage',
            'Dynamic automated shuttle systems integration',
            'Laser-guided calibration of guiding rail tracks with millimeter tolerance'
          ],
          standard: 'Strictest compliance with FEM 9.831 structural tolerances.'
        },
        {
          id: 's3',
          title: 'Structural Engineering Support',
          icon: Wrench,
          desc: 'Comprehensive structural remodeling of operating layouts and modifications.',
          bullets: [
            'Precision structural anchor re-surveying',
            'Modifications and upgrades to active beam levels safely',
            'Seismic protective bracing and structural strengthening',
            'Direct layout synchronization with the manufacturer engineers'
          ],
          standard: 'All steel works engineered to European Eurocode 3 specifications.'
        },
        {
          id: 's4',
          title: 'Maintenance & Technical Services',
          icon: Settings,
          desc: 'System repairs, regulatory safety audits (ITE), and warehouse inspections.',
          bullets: [
            'Compulsory Rack Inspections (ITE) according to UNE-EN 15635 standard',
            'Live-rack hot swapping of damaged frames under safety guidelines',
            'Safety guards, column protectors, and warehouse traffic solutions',
            'Issuing load signs, safety stickers, and structure conformity seals'
          ],
          standard: 'Meets highest safety standards under Spain OHS Royal Decree 1215/1997.'
        }
      ]
    }
  }[currentLang];

  const handleCardClick = (id: string) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#0f172a] text-white relative">
      {/* Visual background details */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0d1527] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono text-blue-400 tracking-[0.25em] font-bold uppercase block">
            // High-End Industrial Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight leading-none">
            {t.subtitle}
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded" />
          <p className="text-sm text-gray-400 font-mono">
            {t.clickHint}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="services-cards-grid">
          {t.services.map((service) => {
            const Icon = service.icon;
            const isExpanded = selectedId === service.id;

            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                layout
                onClick={() => handleCardClick(service.id)}
                className={`text-left bg-gradient-to-b from-slate-900/60 to-slate-950/90 border rounded-lg p-6 hover:shadow-xl hover:border-blue-500/40 transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isExpanded ? 'border-blue-500 ring-1 ring-blue-500/30 shadow-blue-950/50' : 'border-white/10'
                }`}
              >
                {/* Structural corner decor */}
                <div className="absolute top-0 right-0 w-8 h-8 opacity-25">
                  <div className="absolute top-0 right-0 w-3 h-0.5 bg-blue-400" />
                  <div className="absolute top-0 right-0 w-0.5 h-3 bg-blue-400" />
                </div>

                <div className="space-y-4">
                  {/* Icon Block */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30 text-blue-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      className="text-gray-400"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </div>

                  <div>
                    <h3 className="text-xl font-sans font-bold text-white tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-300 mt-2 font-light">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Sub-items details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden mt-6 pt-6 border-t border-white/10 space-y-4"
                    >
                      <ul className="space-y-2 text-sm text-gray-300">
                        {service.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex gap-2.5 items-start">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Normative footer inside service card */}
                      <div className="text-xs text-blue-300 font-mono bg-blue-950/50 border border-blue-500/20 rounded p-2.5 flex items-center justify-between">
                        <span>STANDARDS:</span>
                        <span>{service.standard}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic quote callout */}
        <div id="service-summary-callout" className="mt-12 bg-slate-900 border border-white/5 rounded-lg p-6 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-left space-y-1">
            <h4 className="text-sm font-mono font-bold text-blue-300 uppercase">
              // Precision Assembly Standard Guarantee
            </h4>
            <p className="text-xs text-gray-400">
              STILTEMO ESP SL certifies 100% of physical assemblies in structural racking and automated high-bay.
            </p>
          </div>
          <button 
            id="services-cta-button"
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
          >
            {currentLang === 'ES' ? 'Solicitar Asistencia Técnica' : currentLang === 'PT' ? 'Solicitar Apoio Técnico' : 'Request Technical Support'}
          </button>
        </div>

      </div>
    </section>
  );
}
