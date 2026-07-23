import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectItem } from '../types';
import { Calendar, MapPin, Layers, Building, Eye, ChevronRight } from 'lucide-react';

interface ProjectsProps {
  currentLang: 'ES' | 'PT' | 'EN';
}

export default function Projects({ currentLang }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'automated' | 'heavy' | 'mezzanine'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const mainProjectImage = '/src/assets/images/project_warehouse_1779793003547.png';

  const t = {
    ES: {
      title: 'Proyectos Destacados',
      subtitle: 'Precisión Mecánica y Rigor Estructural Demostrado',
      filterAll: 'Ver Todo',
      filterAutomated: 'Automatizados',
      filterHeavy: 'Sistemas Pesados',
      filterMezzanine: 'Altillos y Pasarelas',
      collabBadge: 'Socio de confianza / Ingeniería principal',
      exploreBtn: 'Ver Ficha Técnica',
      specsTitle: 'Especificaciones Técnicas',
      closeBtn: 'Cerrar Ficha',
      moreDetails: 'Detalle de Ejecución',
    },
    PT: {
      title: 'Projetos de Destaque',
      subtitle: 'Precisão Mecânica e Rigor Estrutural Comprovado',
      filterAll: 'Ver Tudo',
      filterAutomated: 'Automatizados',
      filterHeavy: 'Estanteria Pesada',
      filterMezzanine: 'Mezaninos e Plataformas',
      collabBadge: 'Parceiro técnico / Engenharia principal',
      exploreBtn: 'Ver Ficha Técnica',
      specsTitle: 'Especificações Técnicas',
      closeBtn: 'Fechar Ficha',
      moreDetails: 'Detalhe da Execução',
    },
    EN: {
      title: 'Featured Projects',
      subtitle: 'Demonstrated Structural Precision & Construction Excellence',
      filterAll: 'All Systems',
      filterAutomated: 'Automated High-Bay',
      filterHeavy: 'Heavy Racking',
      filterMezzanine: 'Mezzanines & Walkways',
      collabBadge: 'Subcontractor / Master Erector',
      exploreBtn: 'View Technical Sheet',
      specsTitle: 'Engineering Parameters',
      closeBtn: 'Close Details',
      moreDetails: 'Construction Log',
    }
  }[currentLang];

  const projects: ProjectItem[] = [
    {
      id: "p1",
      title: "Renova Automated Logistics Project",
      partner: "Socio del Fabricante Principal / Racking Global OEM",
      location: "Iberian Logistics Hub",
      year: "2025",
      description: currentLang === 'ES' 
        ? "Montaje mecánico integral de silo autoportante de almacenamiento transelevador automatizado de alta capacidad. Tolerancias de verticalidad críticas corregidas a láser en rangos inferiores a 1.5mm a altura máxima de 28 metros."
        : currentLang === 'PT'
        ? "Montagem mecânica integral de silo autoportante para sistema automatizado de transelevador de grande capacidade. Tolerâncias de nivelamento milimétricas corrigidas com prumo a laser em alturas superiores a 25 metros."
        : "Turnkey structural erection of high-bay clad-rack stacker crane automated warehouse system. Tight mechanical tolerances and laser plumb calibration executed to 1/1000 accuracy at heights reaching 28 meters.",
      specs: [
        { label: "Storage Height", value: "28.5 Meters" },
        { label: "Bay Capacity", value: "62,500 Pallet Placements" },
        { label: "Railing Tolerance", value: "≤ 1.2 mm relative deviation" },
        { label: "Assembly Time", value: "45 Working Days" },
      ],
      image: mainProjectImage,
      type: 'automated'
    },
    {
      id: "p2",
      title: "Vigo Automotive Tier-1 Cluster Installation",
      partner: "Grandes Fabricantes de Estanterías",
      location: "Vigo (Pontevedra), Spain",
      year: "2024",
      description: currentLang === 'ES'
        ? "Instalación express de estanterías convencionales de paletización pesada de doble fondo y canales dinámicos con rodillos por gravedad para flujo FIFO de componentes de motor. Integración estricta con transportadores."
        : currentLang === 'PT'
        ? "Montagem express de estantes para paletização pesada e linhas de rolos dinâmicos gravíticos sob lógica industrial FIFO. Total integração física com tapetes alimentadores industriais."
        : "Express assembly of double-deep heavy-duty selective pallet racks and gravity roller conveyor flow structures for FIFO production line feeding. Integrated with high-speed material handling lanes.",
      specs: [
        { label: "Installed Shelves", value: "14,500 Pick Positions" },
        { label: "Section Weight Profile", value: "Up to 3,500 kg per level" },
        { label: "Seismic Bracing", value: "Seismic level III Galicia compliance" },
        { label: "Crew Capacity", value: "14 Certified Structural Erectors" },
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      type: 'heavy'
    },
    {
      id: "p3",
      title: "Port of Leixões Multi-Tier Mezzanine Platform",
      partner: "OEM Metálico Ibérico",
      location: "Matosinhos (Oporto), Portugal",
      year: "2025",
      description: currentLang === 'ES'
        ? "Estructura autoportante de altillo industrial de 3 niveles con escaleras de servicio, barandillas perimetrales pivotantes de seguridad y rejillas galvanizadas para aumentar la superficie de consolidación."
        : currentLang === 'PT'
        ? "Estrutura metálica de mezanino industrial multi-nível com escadas de serviço integradas, guarda-corpos articulados e placas de piso galvanizadas para picking intensivo de cargas."
        : "Multi-tier structural mezzanine platform consisting of 3 storage and picking levels, connected with safe access stairs, safety gates, and heavy grating panels for consolidated cargo sorting.",
      specs: [
        { label: "Mezzanine Surface", value: "3,200 Square Meters" },
        { label: "Load Profile Limit", value: "650 kg/m² uniformly distributed" },
        { label: "Structure Framework", value: "Cold-formed sigma beam profiles" },
        { label: "Deflection Factor", value: "L/300 verification checked" },
      ],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      type: 'mezzanine'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.type === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#0a0f1d] text-white border-b border-slate-800 relative grid-pattern">
      {/* Dynamic background lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono text-blue-400 tracking-[0.2em] font-medium uppercase block">
            // Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            {t.title}
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded" />
          <p className="text-lg text-slate-300 font-light pt-2">
            {t.subtitle}
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="projects-filter-bar">
          <button
            id="filter-btn-all"
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded font-semibold transition-colors border cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/20'
                : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-100'
            }`}
          >
            {t.filterAll}
          </button>
          <button
            id="filter-btn-automated"
            onClick={() => setActiveFilter('automated')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded font-semibold transition-colors border cursor-pointer ${
              activeFilter === 'automated'
                ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/20'
                : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-100'
            }`}
          >
            {t.filterAutomated}
          </button>
          <button
            id="filter-btn-heavy"
            onClick={() => setActiveFilter('heavy')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded font-semibold transition-colors border cursor-pointer ${
              activeFilter === 'heavy'
                ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/20'
                : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-100'
            }`}
          >
            {t.filterHeavy}
          </button>
          <button
            id="filter-btn-mezzanine"
            onClick={() => setActiveFilter('mezzanine')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded font-semibold transition-colors border cursor-pointer ${
              activeFilter === 'mezzanine'
                ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/20'
                : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-100'
            }`}
          >
            {t.filterMezzanine}
          </button>
        </div>

        {/* Projects Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                id={`project-card-${project.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900/40 border border-slate-800 rounded-lg overflow-hidden flex flex-col justify-between group h-full shadow-xl hover:border-blue-500/50 hover:bg-slate-900/80 transition-all duration-300"
              >
                <div>
                  {/* Photo area with absolute tags */}
                  <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
                    
                    <span className="absolute top-3 left-3 bg-blue-900/90 text-white font-mono text-[9px] font-semibold tracking-widest px-2.5 py-1 uppercase rounded-sm border border-blue-700 shadow shadow-black">
                      {project.type === 'automated' ? 'Automated Clad-Rack' : project.type === 'heavy' ? 'Heavy Industry' : 'Multi-tier platform'}
                    </span>

                    <span className="absolute bottom-3 right-3 text-white font-mono text-[10px] flex items-center gap-1.5 bg-slate-950/95 backdrop-blur-sm shadow border border-slate-800 rounded px-2.5 py-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      {project.year}
                    </span>
                  </div>

                  {/* Text card details */}
                  <div className="p-6 space-y-4 text-left">
                    <div className="space-y-1.5">
                      <div className="flex gap-1 items-center text-xs font-mono text-blue-400">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{project.location}</span>
                      </div>
                      <h3 className="text-lg font-sans font-bold leading-snug tracking-tight text-slate-100 group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm font-light text-slate-400 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Card footer details / Technical Sheet Button */}
                <div className="p-6 pt-0 border-t border-slate-800/60 flex items-center mt-auto">
                  <button
                    id={`project-tech-btn-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 bg-slate-900 hover:bg-blue-600 text-white hover:text-white rounded border border-slate-800 hover:border-blue-500 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    {t.exploreBtn}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Detailed Sheet Overlay Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div id="project-tech-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-slate-900 border border-slate-750 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl overflow-hidden"
              >
                {/* Header aspect ratio banner inside sheet */}
                <div className="relative aspect-[16/6] bg-slate-950">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                  <div className="absolute bottom-4 left-6 text-white text-left">
                    <span className="text-[10px] uppercase tracking-widest font-mono text-blue-400 bg-blue-950/80 px-2 py-0.5 border border-blue-800/50 rounded">
                      {selectedProject.partner}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold font-sans tracking-tight mt-1.5 text-white">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Specifications sheet detail content */}
                <div className="p-6 md:p-8 space-y-6 text-left">
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                      // {t.moreDetails}
                    </h4>
                    <p className="text-slate-300 leading-relaxed font-light">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Core Technical Specifications List */}
                  <div className="space-y-4 pt-4 border-t border-slate-800">
                    <h4 className="text-xs font-mono font-bold text-slate-100 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-blue-400" />
                      {t.specsTitle}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono">
                      {selectedProject.specs.map((spec, i) => (
                        <div key={i} className="flex flex-col p-3 bg-slate-950/60 border border-slate-800 rounded">
                          <span className="text-[10px] text-slate-400 uppercase">{spec.label}</span>
                          <span className="text-sm font-bold text-blue-400 mt-0.5">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action row in modal */}
                  <div className="pt-6 border-t border-slate-800 flex items-center justify-between gap-4">
                    <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      <span>{selectedProject.location}</span>
                    </div>

                    <button
                      id="close-tech-sheet-btn"
                      onClick={() => setSelectedProject(null)}
                      className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded border border-slate-700 font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      {t.closeBtn}
                    </button>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
