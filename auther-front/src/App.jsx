import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Register from './pages/auth/Register'
import AboutAthar from './components/AboutAthar'
import AboutManbar from './components/AboutManbar'
import Agenda from './components/Agenda'
import Footer from './components/Footer'
import Countdown from './components/Countdown'
import FAQ from './components/FAQ'
import useReveal from './hooks/useReveal'
import useActiveSection from "./hooks/useActiveSection";

function App() {
  const [view, setView] = useState('home');
  const [pendingSection, setPendingSection] = useState(null);

  const isHome = view === 'home';

  useActiveSection(isHome);
  useReveal(isHome);

  useEffect(() => {
    if (!isHome || !pendingSection) return;

    const el = document.getElementById(pendingSection);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setPendingSection(null);
  }, [isHome, pendingSection]);

  const showHome = () => {
    setPendingSection(null);
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showRegister = () => setView('register');

  const navigateToSection = (sectionId) => {
    if (isHome) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    setPendingSection(sectionId);
    setView('home');
  };

  const handleAboutAthar = () => navigateToSection('about-athar');
  const handleAboutManbar = () => navigateToSection('about-manbar');
  const handleAgenda = () => navigateToSection('agenda');
  const handleFaq = () => navigateToSection('faq');

  if (view === 'register') {
    return (
      <>
        <Navbar 
          onHomeClick={showHome}
          onRegisterClick={showRegister}
          onAboutAtharClick={handleAboutAthar}
          onAboutManbarClick={handleAboutManbar}
          onAgendaClick={handleAgenda}
          onFaqClick={handleFaq}
        />
        <Register onBack={showHome} />
      </>
    );
  }

  return (
    <>
      <Navbar 
        onHomeClick={showHome}
        onRegisterClick={showRegister}
        onAboutAtharClick={handleAboutAthar}
        onAboutManbarClick={handleAboutManbar}
        onAgendaClick={handleAgenda}
        onFaqClick={handleFaq}
      />
      <Hero onRegisterClick={showRegister} />
      <AboutAthar/>
      <AboutManbar/>
      <Agenda/>
      <FAQ/>
      <Footer/>
      <Countdown/>
    </>
  )
}

export default App
