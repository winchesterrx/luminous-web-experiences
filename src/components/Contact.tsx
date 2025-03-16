import { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Github, Send, Mail, MapPin, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useData } from '../context/DataContext';

const Contact = () => {
  const { contactData } = useData();
  
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
    
    // Format the message for WhatsApp
    const whatsappMessage = encodeURIComponent(
      `*Nova mensagem de contato:*\n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}\n\n*Mensagem:*\n${formData.message}`
    );
    
    // WhatsApp API URL with the phone number
    const whatsappUrl = `https://wa.me/5517997799982?text=${whatsappMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Complete the UI feedback
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSent(false);
      }, 3000);
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5
      }
    }
  };
  
  return (
    <section id="contact" className="py-24 px-6 bg-dark-lighter/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.p variants={itemVariants} className="text-accent font-mono text-sm text-center mb-2">Entre em contato</motion.p>
          <motion.h2 variants={itemVariants} className="section-heading neon-text-accent">Contato</motion.h2>
          <motion.p variants={itemVariants} className="section-subheading max-w-3xl mx-auto">
            Vamos conversar sobre seu próximo projeto ou ideia
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-display font-bold mb-6 text-gradient">Vamos criar algo incrível juntos</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Estou sempre aberto a novos desafios e oportunidades de colaboração. Se você tem um projeto em mente ou precisa de ajuda com desenvolvimento web, entre em contato comigo.
            </p>
            
            <div className="flex flex-col space-y-6 mb-12">
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 rounded-full animated-gradient-border flex items-center justify-center">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">{contactData.email}</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 rounded-full animated-gradient-border flex items-center justify-center">
                  <Phone size={20} className="text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Telefone</p>
                  <p className="font-medium">{contactData.phone}</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 rounded-full animated-gradient-border flex items-center justify-center">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Localização</p>
                  <p className="font-medium">{contactData.location}</p>
                </div>
              </motion.div>
            </div>
            
            <div>
              <p className="text-sm font-medium mb-4">Redes Sociais</p>
              <div className="flex space-x-4">
                <motion.a 
                  href={contactData.instagram}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-light/50 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45] transition-colors duration-300"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram size={20} className="text-white" />
                </motion.a>
                <motion.a 
                  href={contactData.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-light/50 flex items-center justify-center hover:bg-[#0077b5]/20 hover:text-[#0077b5] transition-colors duration-300"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={20} className="text-white" />
                </motion.a>
                <motion.a 
                  href={contactData.github}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-light/50 flex items-center justify-center hover:bg-white/20 hover:text-white transition-colors duration-300"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} className="text-white" />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-xl blur-xl opacity-50"></div>
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 md:p-8 relative z-10">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-light/30 rounded-md border border-dark-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
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
                  className="w-full px-4 py-3 bg-dark-light/30 rounded-md border border-dark-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
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
                  className="w-full px-4 py-3 bg-dark-light/30 rounded-md border border-dark-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none"
                  placeholder="Descreva seu projeto ou ideia..."
                ></textarea>
              </div>
              
              <motion.button 
                type="submit" 
                disabled={isSending || isSent}
                className={cn(
                  "w-full py-3 rounded-md font-medium relative overflow-hidden group transition-all duration-300",
                  isSending ? "bg-dark-light text-gray-400" : 
                  isSent ? "bg-accent/20 text-accent" : 
                  "bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white"
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative flex items-center justify-center">
                  {isSending ? 'Enviando...' : isSent ? 'Mensagem Enviada!' : 'Enviar Mensagem'}
                  {!isSending && !isSent && (
                    <motion.span 
                      initial={{ x: 0 }}
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="ml-2"
                    >
                      <Send size={16} />
                    </motion.span>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
