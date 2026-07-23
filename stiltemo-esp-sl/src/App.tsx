import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import MapSection from './components/MapSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [currentLang, setLang] = useState<'ES' | 'PT' | 'EN'>('ES');
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Multi-language welcome console toast for a professional logging touch
  useEffect(() => {
    console.log(
      "%cSTILTEMO ESP SL %c• Intralogistics & Industrial Construction System Erection online.",
      "color: #192850; font-weight: bold; font-family: monospace; font-size: 14px;",
      "color: #4f46e5; font-family: monospace; font-size: 11px;"
    );
  }, []);

  // Monitor active scrolled sections using IntersectionObserver to update Header underparts automatically
  useEffect(() => {
    const sections = ['hero', 'services', 'about', 'projects', 'coverage', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // focused center of the screen
      threshold: 0,
    };

    const handleObserve = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserve, observerOptions);
    
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 font-sans overflow-x-hidden antialiased selection:bg-[#192850] selection:text-white" id="stiltemo-app-container">
      {/* Precision Header */}
      <Header
        currentLang={currentLang}
        setLang={setLang}
        activeSection={activeSection}
      />

      {/* Main Corporate Sections */}
      <main id="main-content-flow">
        {/* Hero Section */}
        <Hero currentLang={currentLang} />

        {/* Services Section */}
        <Services currentLang={currentLang} />

        {/* About Section */}
        <About currentLang={currentLang} />

        {/* Projects Section */}
        <Projects currentLang={currentLang} />

        {/* Coverage Map Section */}
        <MapSection currentLang={currentLang} />

        {/* Contact Section */}
        <Contact currentLang={currentLang} />
      </main>

      {/* Corporate Footer */}
      <Footer currentLang={currentLang} />
    </div>
  );
}
