
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Github, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSent(false);
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 px-6 bg-dark-lighter/30">
      <div className="max-w-7xl mx-auto">
        <p className="text-neon-purple font-code text-sm text-center mb-2">Entre em contato</p>
        <h2 className="section-heading neon-text-green">Contato</h2>
        <p className="section-subheading max-w-3xl mx-auto">
          Vamos conversar sobre seu próximo projeto ou ideia
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-display font-bold mb-6">Vamos criar algo incrível juntos</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Estou sempre aberto a novos desafios e oportunidades de colaboração. Se você tem um projeto em mente ou precisa de ajuda com desenvolvimento web, entre em contato comigo.
            </p>
            
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-dark-light/50 flex items-center justify-center">
                  <Send size={18} className="text-neon-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">gabriel.silva@exemplo.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-sm font-medium mb-4">Redes Sociais</p>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/gabriielssantoss" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-light/50 flex items-center justify-center hover:bg-neon-pink/20 transition-colors duration-300"
                >
                  <Instagram size={20} className="text-white" />
                </a>
                <a 
                  href="https://linkedin.com/in/gabriel-silva" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-light/50 flex items-center justify-center hover:bg-neon-blue/20 transition-colors duration-300"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
                <a 
                  href="https://github.com/winchesterrx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-light/50 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <Github size={20} className="text-white" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 md:p-8">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-light/30 rounded-md border border-dark-light/50 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all duration-300"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-light/30 rounded-md border border-dark-light/50 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all duration-300"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-light/30 rounded-md border border-dark-light/50 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all duration-300 resize-none"
                  placeholder="Descreva seu projeto ou ideia..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSending || isSent}
                className={cn(
                  "w-full py-3 rounded-md font-medium relative overflow-hidden group transition-all duration-300",
                  isSending ? "bg-dark-light text-gray-400" : 
                  isSent ? "bg-neon-green/20 text-neon-green" : 
                  "bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white"
                )}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center">
                  {isSending ? 'Enviando...' : isSent ? 'Mensagem Enviada!' : 'Enviar Mensagem'}
                  {!isSending && !isSent && <Send size={16} className="ml-2" />}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
