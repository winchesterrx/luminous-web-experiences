
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Github, Linkedin } from 'lucide-react';
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

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12",
      isScrolled ? "bg-dark-lighter/80 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.a 
          href="#hero" 
          className="text-2xl font-display font-bold tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="neon-text-primary">Gabriel</span>
          <motion.span 
            className="text-secondary"
            animate={{ 
              opacity: [1, 0.5, 1],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >.</motion.span>
        </motion.a>
        
        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex space-x-8 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {[
            { href: "#about", label: "Sobre" },
            { href: "#portfolio", label: "Projetos" },
            { href: "#contact", label: "Contato" }
          ].map(({ href, label }) => (
            <motion.a
              key={href}
              href={href}
              className="text-base font-medium text-gray-200 hover:text-primary transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ y: -2 }}
            >
              {label}
            </motion.a>
          ))}
          
          <motion.div 
            className="flex items-center space-x-3"
            variants={itemVariants}
          >
            <motion.a 
              href="https://github.com/winchesterrx"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-dark-light/50 text-gray-300 hover:bg-primary/20 hover:text-primary transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              <Github size={16} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/gabriel-silva"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-dark-light/50 text-gray-300 hover:bg-secondary/20 hover:text-secondary transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              <Linkedin size={16} />
            </motion.a>
          </motion.div>
          
          <motion.a 
            href="#contact"
            className="px-4 py-2 rounded-md bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Fale Comigo
          </motion.a>
        </motion.nav>
        
        {/* Mobile Menu Toggle */}
        <motion.button 
          className="md:hidden text-gray-200 hover:text-primary transition-colors p-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-dark-lighter/95 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <motion.nav 
              className="flex flex-col space-y-6 text-center"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {[
                { href: "#hero", label: "Início" },
                { href: "#about", label: "Sobre" },
                { href: "#portfolio", label: "Projetos" },
                { href: "#contact", label: "Contato" }
              ].map(({ href, label }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  className="text-2xl font-medium text-gray-200 hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ scale: 1.1 }}
                >
                  {label}
                </motion.a>
              ))}
              
              <motion.div 
                className="flex justify-center space-x-5 pt-6"
                variants={itemVariants}
              >
                <motion.a 
                  href="https://github.com/winchesterrx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-light/50 text-gray-300 hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/gabriel-silva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-light/50 text-gray-300 hover:bg-secondary/20 hover:text-secondary transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <Linkedin size={20} />
                </motion.a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
