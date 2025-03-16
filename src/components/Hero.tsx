
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, GitBranch, Terminal } from 'lucide-react';

const Hero = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const roles = ["Web Developer", "Front-end Specialist", "Full-Stack Engineer", "UI/UX Enthusiast"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    
    const typeWriter = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        if (typingRef.current) 
          typingRef.current.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 50;
      } else {
        if (typingRef.current) 
          typingRef.current.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 150;
      }
      
      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingDelay = 1500;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingDelay = 500;
      }
      
      setTimeout(typeWriter, typingDelay);
    };
    
    typeWriter();
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20 pb-10 px-6"
    >
      <motion.div 
        className="max-w-4xl mx-auto text-center z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          variants={itemVariants}
          className="inline-block mb-6 px-4 py-2 rounded-full bg-dark-light/30 border border-dark-light/50 backdrop-blur-sm animated-gradient-border"
        >
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-code text-gray-300">
              <span ref={typingRef} className="typing-text"></span>
              <span className="cursor">|</span>
            </span>
          </div>
        </motion.div>
        
        <motion.h1 
          variants={itemVariants} 
          className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight leading-tight"
        >
          <span className="neon-text-primary">Gabriel</span>{" "}
          <span className="neon-text-secondary">Silva</span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
        >
          Transformando ideias em experiências digitais 
          <span className="text-gradient font-semibold"> extraordinárias </span>
          com código limpo e design inovador
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <motion.a 
            href="#contact" 
            className="neon-button relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center">
              Entre em Contato
              <motion.span 
                className="ml-2"
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </span>
          </motion.a>
          
          <motion.a 
            href="#portfolio" 
            className="px-6 py-3 rounded-md border border-dark-light/50 hover:border-primary/50 transition-colors duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GitBranch size={18} />
            Ver Projetos
          </motion.a>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 text-muted-foreground"
        >
          <span className="flex items-center gap-2 text-sm">
            <Terminal size={16} className="text-primary" />
            JavaScript
          </span>
          <span className="flex items-center gap-2 text-sm">
            <Terminal size={16} className="text-secondary" />
            TypeScript
          </span>
          <span className="flex items-center gap-2 text-sm">
            <Terminal size={16} className="text-accent" />
            React.js
          </span>
          <span className="flex items-center gap-2 text-sm">
            <Terminal size={16} className="text-primary" />
            Next.js
          </span>
          <span className="flex items-center gap-2 text-sm">
            <Terminal size={16} className="text-secondary" />
            Node.js
          </span>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <a 
          href="#about" 
          className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </a>
      </motion.div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-1/3 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 8,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 10,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-2/3 left-1/4 w-24 h-24 bg-accent/5 rounded-full blur-3xl"
        animate={{ 
          y: [0, 15, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 7,
          ease: "easeInOut"
        }}
      />
      
      {/* Code snippet decoration */}
      <div className="absolute top-1/4 -right-10 opacity-10 rotate-12 hidden md:block">
        <pre className="text-xs text-primary font-mono">
          {`function createExperience() {
  const ideas = getClientVision();
  const tech = selectBestTechnologies();
  
  return new DigitalExperience({
    design: createUniqueConcept(ideas),
    frontend: buildResponsiveUI(tech),
    backend: implementBusinessLogic(),
    animation: addSmoothTransitions()
  });
}`}
        </pre>
      </div>
      
      <div className="absolute bottom-1/4 -left-10 opacity-10 -rotate-12 hidden md:block">
        <pre className="text-xs text-secondary font-mono">
          {`const project = {
  client: "You",
  scope: "Landing Page",
  technologies: [
    "React", "Tailwind CSS",
    "JavaScript", "Node.js"
  ],
  features: [
    "Responsive Design",
    "Animated UI",
    "Interactive Elements",
    "Fast Performance"
  ]
};`}
        </pre>
      </div>
      
      {/* Tech logos */}
      <div className="absolute bottom-10 left-0 right-0 overflow-hidden">
        <div className="marquee">
          <div className="marquee-content">
            <Code className="mx-4 text-gray-700" size={20} />
            <span className="mx-4 text-gray-700">HTML</span>
            <Code className="mx-4 text-gray-700" size={20} />
            <span className="mx-4 text-gray-700">CSS</span>
            <Code className="mx-4 text-gray-700" size={20} />
            <span className="mx-4 text-gray-700">JavaScript</span>
            <Code className="mx-4 text-gray-700" size={20} />
            <span className="mx-4 text-gray-700">React</span>
            <Code className="mx-4 text-gray-700" size={20} />
            <span className="mx-4 text-gray-700">Node.js</span>
            <Code className="mx-4 text-gray-700" size={20} />
            <span className="mx-4 text-gray-700">TypeScript</span>
            <Code className="mx-4 text-gray-700" size={20} />
            <span className="mx-4 text-gray-700">Tailwind</span>
          </div>
          <div className="marquee-content">
            <Code className="mx-4 text-gray-700" size={20} />
            <span className="mx-4 text-gray-700">HTML</span>
            <Code className="mx-4 text-gray-700" size={20} />
            <span className="mx-4 text-gray-700">CSS</span>
            <Code className="mx-4 text-gray-700" size={20} />
            <span className="mx-4 text-gray-700">JavaScript</span>
            <Code className="mx-4 text-gray-700" size={20} />
            <span className="mx-4 text-gray-700">React</span>
            <Code className="mx-4 text-gray-700" size={20} />
            <span className="mx-4 text-gray-700">Node.js</span>
            <Code className="mx-4 text-gray-700" size={20} />
            <span className="mx-4 text-gray-700">TypeScript</span>
            <Code className="mx-4 text-gray-700" size={20} />
            <span className="mx-4 text-gray-700">Tailwind</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
