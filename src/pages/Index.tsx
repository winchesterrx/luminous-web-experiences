
import { useEffect } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import AdminButton from '../components/AdminButton';

const Index = () => {
  useEffect(() => {
    // Add a programming background image to the body
    document.body.style.backgroundImage = `
      linear-gradient(to bottom, rgba(12, 15, 26, 0.92), rgba(12, 15, 26, 0.98)),
      url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')
    `;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundPosition = 'center';
    
    return () => {
      // Clean up when component unmounts
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundAttachment = '';
      document.body.style.backgroundPosition = '';
    };
  }, []);

  useEffect(() => {
    // Smooth scroll animation for navigation
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick as EventListener);
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick as EventListener);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <ParticleBackground />
      <NavBar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <AdminButton />
    </div>
  );
};

export default Index;
