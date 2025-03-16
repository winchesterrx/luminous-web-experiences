
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12",
      isScrolled ? "bg-dark-lighter/80 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a 
          href="#hero" 
          className="text-2xl font-display font-bold neon-text-blue tracking-wide"
        >
          Gabriel<span className="text-neon-purple">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {[
            { href: "#about", label: "Sobre" },
            { href: "#portfolio", label: "Projetos" },
            { href: "#contact", label: "Contato" }
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-lg font-medium text-gray-200 hover:text-neon-blue transition-colors duration-300"
            >
              {label}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-200 hover:text-neon-blue transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 z-40 flex flex-col items-center justify-center bg-dark-lighter/95 backdrop-blur-lg transition-all duration-300 md:hidden",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-8 text-center">
          {[
            { href: "#hero", label: "Início" },
            { href: "#about", label: "Sobre" },
            { href: "#portfolio", label: "Projetos" },
            { href: "#contact", label: "Contato" }
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-2xl font-medium text-gray-200 hover:text-neon-blue transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
