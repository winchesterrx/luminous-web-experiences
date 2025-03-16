
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-12 pb-6 px-6 bg-dark-lighter">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-8">
          <a 
            href="#hero" 
            className="w-12 h-12 rounded-full bg-dark-light/50 flex items-center justify-center hover:bg-dark-light transition-colors duration-300"
          >
            <ChevronUp size={20} className="text-gray-400" />
          </a>
        </div>
        
        <div className="border-t border-dark-light/50 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2024 Gabriel Silva - Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-6">
            {[
              { href: "#hero", label: "Início" },
              { href: "#about", label: "Sobre" },
              { href: "#portfolio", label: "Projetos" },
              { href: "#contact", label: "Contato" }
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-gray-400 hover:text-neon-blue transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
