import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Building, FileText, Check, AlertCircle, Briefcase, FileClock } from 'lucide-react';

interface ContactProps {
  currentLang: 'ES' | 'PT' | 'EN';
}

export default function Contact({ currentLang }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    serviceType: 'general'
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const t = {
    ES: {
      title: 'Hablemos de su Proyecto',
      subtitle: 'Solicite Asistencia o Presupuesto sin Compromiso',
      formHeading: 'Formulario de Consulta Técnica',
      nameLabel: 'Nombre Completo',
      companyLabel: 'Empresa',
      emailLabel: 'Correo Electrónico',
      phoneLabel: 'Teléfono de Contacto',
      serviceLabel: 'Tipo de Servicio Requerido',
      messageLabel: 'Detalles del Proyecto (Medidas, ubicación, plazos)',
      submitBtn: 'Enviar Solicitud',
      submitting: 'Procesando Envío...',
      successMsg: '¡Inquiry registrada con éxito! Nuestro departamento de ingeniería de Vigo se pondrá en contacto en un plazo inferior a 24 horas.',
      errorMsg: 'Ocurrió un error. Por favor, compruébelo de nuevo.',
      cardHeading: 'STILTEMO ESP SL',
      cardAddress: 'Calle Manuel Núñez, 2, 2º Piso, Oficina 4\n36203 Vigo, Pontevedra, España',
      hoursLabel: 'Horario Operativo',
      hoursValue: 'Lunes a Viernes: 08:00 – 18:00 (CET)',
      cifLabel: 'Registro Fiscal (CIF)',
      coverageLabel: 'Cobertura',
      coverageValue: 'España y Portugal (Iberia)',
      teamLabel: 'Fuerza Laboral',
      teamValue: '22 Empleados Directos',
      mapPreviewHeader: 'Esquema de Localización (Vigo)',
    },
    PT: {
      title: 'Fale Connosco sobre o seu Projeto',
      subtitle: 'Solicite Apoio Técnico ou Orçamento Sem Compromisso',
      formHeading: 'Formulário de Consulta Técnica',
      nameLabel: 'Nome Completo',
      companyLabel: 'Empresa',
      emailLabel: 'Correio Eletrónico',
      phoneLabel: 'Telefone de Contacto',
      serviceLabel: 'Tipo de Serviço Pretendido',
      messageLabel: 'Detalhes do Projeto (Dimensões, localização, prazos)',
      submitBtn: 'Enviar Pedido',
      submitting: 'A processar...',
      successMsg: 'Pedido registado com sucesso! O nosso departamento técnico em Vigo entrará em contacto nas próximas 24 horas.',
      errorMsg: 'Ocorreu um erro. Por favor, tente novamente.',
      cardHeading: 'STILTEMO ESP SL',
      cardAddress: 'Calle Manuel Núñez, 2, 2º Piso, Oficina 4\n36203 Vigo, Pontevedra, Espanha',
      hoursLabel: 'Horário Operativo',
      hoursValue: 'Segunda a Sexta: 08:00 – 18:00 (CET)',
      cifLabel: 'Registo Fiscal (CIF)',
      coverageLabel: 'Área geográfica',
      coverageValue: 'Espanha e Portugal (Ibérica)',
      teamLabel: 'Equipa de Campo',
      teamValue: '22 Colaboradores Diretos',
      mapPreviewHeader: 'Esquema de Localização (Vigo)',
    },
    EN: {
      title: 'Discuss Your Project',
      subtitle: 'Request a Strategic Subcontracting Quote',
      formHeading: 'Technical Commercial Inquiry',
      nameLabel: 'Full Name',
      companyLabel: 'Company Name',
      emailLabel: 'Business Email',
      phoneLabel: 'Contact Phone Number',
      serviceLabel: 'Requested System Category',
      messageLabel: 'Project Specifications (Estimates, location, height, timelines)',
      submitBtn: 'Send Inquiry',
      submitting: 'Erecting Ticket...',
      successMsg: 'Inquiry received! Our engineering coordination desk in Vigo is reviewing your payload specifications and will summon you within 24h.',
      errorMsg: 'There was an issue processing your details. Please check compliance.',
      cardHeading: 'STILTEMO ESP SL',
      cardAddress: 'Calle Manuel Núñez, 2, 2º Piso, Oficina 4\n36203 Vigo, Pontevedra, Spain',
      hoursLabel: 'Operating Hours',
      hoursValue: 'Monday to Friday: 08:00 – 18:00 (CET)',
      cifLabel: 'Registered Fiscal ID (CIF)',
      coverageLabel: 'Deployment Territory',
      coverageValue: 'Spain & Portugal (Iberian Peninsula)',
      teamLabel: 'Technical Workforce',
      teamValue: '22 In-House Craftsmen',
      mapPreviewHeader: 'Location Coordinates (Vigo)',
    }
  }[currentLang];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    setIsLoading(true);
    setSubmitStatus('idle');

    // Simulate real high-performing database submission to showcase premium usability
    setTimeout(() => {
      setIsLoading(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        serviceType: 'general'
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0a0f1d] text-white relative border-b border-slate-800 grid-pattern">
      {/* Background glow effects */}
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono text-blue-400 tracking-[0.2em] font-medium uppercase block">
            // Access Portal & Estimates
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white">
            {t.title}
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded" />
          <p className="text-lg text-slate-300 font-light pt-2">
            {t.subtitle}
          </p>
        </div>

        {/* Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column A: Modern Interactive Form with Loader */}
          <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800 rounded-xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
            <h3 className="text-lg font-mono font-bold text-blue-400 border-b border-slate-800 pb-3 mb-6 uppercase tracking-wider flex items-center gap-2">
              <FileClock className="w-5 h-5 text-blue-500" />
              {t.formHeading}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5 text-left" id="industrial-contact-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-slate-400 uppercase block">{t.nameLabel} *</label>
                  <input
                    type="text"
                    required
                    id="form-input-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950/80 border border-slate-800 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 font-sans text-slate-100 placeholder-slate-600 transition-colors"
                    placeholder="E.g., Manuel Silva"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-slate-400 uppercase block">{t.companyLabel}</label>
                  <input
                    type="text"
                    id="form-input-company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-slate-950/80 border border-slate-800 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 font-sans text-slate-100 placeholder-slate-600 transition-colors"
                    placeholder="E.g., Renova SA"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-slate-400 uppercase block">{t.emailLabel} *</label>
                  <input
                    type="email"
                    required
                    id="form-input-email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950/80 border border-slate-800 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 font-sans text-slate-100 placeholder-slate-600 transition-colors"
                    placeholder="partner@logisticshub.com"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-slate-400 uppercase block">{t.phoneLabel}</label>
                  <input
                    type="tel"
                    id="form-input-phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950/80 border border-slate-800 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 font-sans text-slate-100 placeholder-slate-600 transition-colors"
                    placeholder="+34 986 22 22 22"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono font-bold text-slate-400 uppercase block">{t.serviceLabel}</label>
                <select
                  id="form-input-service"
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-500 font-sans cursor-pointer text-slate-200"
                >
                  <option value="general" className="bg-slate-900">{currentLang === 'ES' ? 'Consulta General o Colaboración' : currentLang === 'PT' ? 'Consulta Geral ou Parceria' : 'General Inquiry / Procurement'}</option>
                  <option value="heavy" className="bg-slate-900">{currentLang === 'ES' ? 'Montaje de Estantería de Carga Pesada' : currentLang === 'PT' ? 'Instalação de Estanteria de Carga Pesada' : 'Heavy-Duty Racking Assembly'}</option>
                  <option value="auto" className="bg-slate-900">{currentLang === 'ES' ? 'Silo Autoportante / Almacén Automático' : currentLang === 'PT' ? 'Silos Autoportantes / Automáticos' : 'Clad-Rack Stacker Staggering'}</option>
                  <option value="maint" className="bg-slate-900">{currentLang === 'ES' ? 'Mantenimiento Preventivo / Inspección ITE' : currentLang === 'PT' ? 'Inspeção Regular e Reparação' : 'Regular Inspections (ITE) / Repair'}</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono font-bold text-slate-400 uppercase block">{t.messageLabel} *</label>
                <textarea
                  required
                  rows={4}
                  id="form-input-message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 font-sans text-slate-100 placeholder-slate-600 transition-colors"
                  placeholder="..."
                />
              </div>

              <button
                type="submit"
                id="submit-contact-btn"
                disabled={isLoading}
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded font-bold text-xs tracking-widest uppercase shadow-lg shadow-blue-500/25 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>{t.submitting}</span>
                  </>
                ) : (
                  <span>{t.submitBtn}</span>
                )}
              </button>

              {/* Status responses with animation */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    id="contact-form-success"
                    className="p-4 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 rounded text-sm flex gap-3 items-start"
                  >
                    <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <p>{t.successMsg}</p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    id="contact-form-error"
                    className="p-4 bg-red-500/15 border border-red-500/30 text-red-300 rounded text-sm flex gap-3 items-start"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <p>{t.errorMsg}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

          {/* Column B: Professional Corporate Details & Vigo Stylized Map Card */}
          <div className="lg:col-span-5 space-y-8" id="contact-credentials-panel">
            
            {/* STILTEMO Registered office credentials card */}
            <div className="bg-slate-900/60 border border-slate-800 text-white rounded-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden text-left space-y-6">
              {/* Geometric backing grid */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.2em] font-medium">
                  // {t.cardHeading}
                </span>
                <h4 className="text-2xl font-sans font-black tracking-tight leading-none uppercase text-white">
                  STILTEMO ESP SL
                </h4>
              </div>

              {/* Core attributes list */}
              <div className="space-y-5 text-sm font-light">
                <div className="flex gap-3 items-start">
                  <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">Vigo Headquarters</span>
                    <p className="whitespace-pre-line text-slate-200 font-medium leading-snug">{t.cardAddress}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex gap-3 items-start">
                    <Building className="w-5 h-5 text-blue-400 shrink-0" />
                    <div className="space-y-0.5">
                      <span className="text-[10px] uppercase font-mono text-slate-500 block">{t.cifLabel}</span>
                      <p className="text-slate-200 font-mono font-medium">B75213132</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <Briefcase className="w-5 h-5 text-blue-400 shrink-0" />
                    <div className="space-y-0.5">
                      <span className="text-[10px] uppercase font-mono text-slate-500 block">{t.teamLabel}</span>
                      <p className="text-slate-200 font-medium">{t.teamValue}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex gap-3 items-start">
                    <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                    <div className="space-y-0.5">
                      <span className="text-[10px] uppercase font-mono text-slate-500 block">E-mail</span>
                      <a href="mailto:Adminstracion@stiltemo.com" className="text-blue-300 hover:text-white underline font-medium break-all transition-colors">
                        Adminstracion@stiltemo.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                    <div className="space-y-0.5">
                      <span className="text-[10px] uppercase font-mono text-slate-500 block">Call Desk</span>
                      <a href="tel:+34986222222" className="text-blue-300 hover:text-white font-mono font-medium transition-colors">
                        +34 986 22 22 22
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 text-xs font-mono text-slate-400 space-y-1 leading-snug">
                  <div>
                    <span className="text-slate-500 mr-2 uppercase">{t.coverageLabel}:</span>
                    <span className="font-semibold text-slate-200">{t.coverageValue}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 mr-2 uppercase">{t.hoursLabel}:</span>
                    <span className="font-semibold text-slate-200">{t.hoursValue}</span>
                  </div>
                </div>
              </div>
            </div>



          </div>

        </div>

      </div>
    </section>
  );
}
