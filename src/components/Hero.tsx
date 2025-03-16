
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20 pb-10 px-6"
    >
      <div className="max-w-4xl mx-auto text-center animate-fade-in z-10">
        <div className="inline-block mb-6 px-3 py-1 rounded-full bg-dark-light/30 border border-dark-light/50 backdrop-blur-sm">
          <p className="text-sm font-code text-gray-300">Desenvolvedor Web & Criador de Experiências Digitais</p>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
          <span className="neon-text-blue">Gabriel</span>{" "}
          <span className="neon-text-purple">Silva</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          Transformando ideias em código e criando experiências digitais únicas
        </p>
        
        <a 
          href="#contact" 
          className="neon-button group"
        >
          <span className="relative z-10 flex items-center justify-center">
            Entre em Contato
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </a>
      </div>
      
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300">
          <ChevronDown size={24} />
        </a>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-10 w-32 h-32 bg-neon-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-2/3 left-1/4 w-24 h-24 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Code snippet decoration */}
      <div className="absolute top-1/4 -right-10 opacity-10 rotate-12 hidden md:block">
        <pre className="text-xs text-neon-green font-code">
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
        <pre className="text-xs text-neon-blue font-code">
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
    </section>
  );
};

export default Hero;
