import { MapPin } from 'lucide-react';

interface MapSectionProps {
  currentLang: 'ES' | 'PT' | 'EN';
}

export default function MapSection({ currentLang }: MapSectionProps) {
  const t = {
    ES: {
      title: 'Cobertura Integral Iberia',
      intro: 'Nuestras brigadas de montaje están estratégicamente desplegadas para responder ágilmente a cualquier requerimiento industrial.',
    },
    PT: {
      title: 'Cobertura Integrada Ibéria',
      intro: 'As nossas equipas de montadores estão dispostas estrategicamente para responder com rapidez em qualquer ponto industrial.',
    },
    EN: {
      title: 'Full Iberian Coverage',
      intro: 'Our structural assembly and installation squads are strategically positioned to deploy rapidly to any logistical or logistics hub in Spain and Portugal.',
    }
  }[currentLang];

  return (
    <section id="coverage" className="py-20 md:py-28 bg-[#0a0f1d] text-white relative overflow-hidden border-b border-white/5">
      
      {/* Abstract technological geometry background */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title row */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono text-blue-400 tracking-[0.25em] font-bold uppercase block">
            // Geolocation and Deployment Area
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight">
            {t.title}
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded" />
          <p className="text-gray-300 font-light leading-relaxed">
            {t.intro}
          </p>
        </div>

      </div>
    </section>
  );
}
