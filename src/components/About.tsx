
import { motion } from 'framer-motion';
import { CheckCircle, Code, CodeSquare, Layout, Server } from 'lucide-react';
import SkillIcon from './SkillIcon';
import { useData } from '../context/DataContext';

const About = () => {
  const { aboutData } = useData();
  
  const skills = [
    {
      name: "HTML",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff5722"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M4.1 2H19.9L18.1 20.4L12 22.4L5.9 20.4L4.1 2Z" stroke-width="2" stroke-linejoin="round"></path><path d="M16 7H8L8.4 11.5H15.6L15.2 16.5L12 17.5L8.8 16.5L8.7 15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`,
      color: "primary"
    },
    {
      name: "CSS",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#2196f3"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M4.1 2H19.9L18.1 20.4L12 22.4L5.9 20.4L4.1 2Z" stroke-width="2" stroke-linejoin="round"></path><path d="M16 7H8L8.4 11.5H15.6L15.2 16.5L12 17.5L8.8 16.5L8.7 15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`,
      color: "secondary"
    },
    {
      name: "JavaScript",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffdf00"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M4 3H20V21H4V3Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 12.5C16 11.12 15.12 10 14 10C12.88 10 12 11.12 12 12.5V16.5C12 17.88 12.88 19 14 19C15.12 19 16 17.88 16 16.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 10V13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 16V19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 16C8 14.9391 8.42143 13.9217 9.17157 13.1716C9.92172 12.4214 10.9391 12 12 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`,
      color: "accent"
    },
    {
      name: "React",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#61dafb"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M12 15.0004C13.6569 15.0004 15 13.6573 15 12.0004C15 10.3435 13.6569 9.00037 12 9.00037C10.3431 9.00037 9 10.3435 9 12.0004C9 13.6573 10.3431 15.0004 12 15.0004Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 5.00037C16.9706 5.00037 21 8.13804 21 12.0004C21 15.8627 16.9706 19.0004 12 19.0004C7.02944 19.0004 3 15.8627 3 12.0004C3 8.13804 7.02944 5.00037 12 5.00037Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 5.00037C14.5 8.00037 15 12.0004 12 19.0004" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 5.00037C9.5 8.00037 9 12.0004 12 19.0004" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`,
      color: "primary"
    },
    {
      name: "Node.js",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#8bc500"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M12 1L3 5.5V18.5L12 23L21 18.5V5.5L12 1Z" stroke-width="2" stroke-linejoin="round"></path><path d="M12 1V23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 5.5L12 10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 5.5L12 10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`,
      color: "secondary"
    },
    {
      name: "TypeScript",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#007acc"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M4 3H20V21H4V3Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 12.5C16 11.12 15.12 10 14 10C12.88 10 12 11.12 12 12.5V16.5C12 17.88 12.88 19 14 19C15.12 19 16 17.88 16 16.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 14H13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 14V19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`,
      color: "accent"
    },
    {
      name: "Tailwind",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#06b6d4"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M6 12C8 10 11 10 12 12C13 14 16 14 18 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 16C8 14 11 14 12 16C13 18 16 18 18 16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 8C8 6 11 6 12 8C13 10 16 10 18 8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`,
      color: "primary"
    },
    {
      name: "Next.js",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.197 20.1241C16.775 19.5604 16.3811 18.963 16.018 18.336C15.0868 16.7172 14.4145 14.9448 14.026 13.096L13.638 11.31C13.177 9.30876 12.9202 7.26607 12.871 5.216C16.151 5.69411 18.8471 8.05847 19.8351 11.211C20.0615 11.9273 20.199 12.6708 20.243 13.425C20.2707 13.8797 20.2688 14.3357 20.237 14.79C20.1534 16.0202 19.8487 17.2242 19.337 18.34C19.0043 19.0108 18.5996 19.6394 18.131 20.215" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.804 20.124C7.226 19.5604 7.61988 18.963 7.983 18.336C8.91423 16.7172 9.58655 14.9448 9.975 13.096L10.363 11.31C10.824 9.30876 11.0807 7.26607 11.13 5.216C7.85 5.69411 5.15387 8.05847 4.166 11.211C3.93959 11.9273 3.80211 12.6708 3.758 13.425C3.73027 13.8797 3.73216 14.3357 3.764 14.79C3.84767 16.0202 4.15236 17.2242 4.664 18.34C4.99667 19.0108 5.40138 19.6394 5.87 20.215" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`,
      color: "secondary"
    },
  ];

  const services = [
    {
      icon: <Layout className="text-primary" size={24} />,
      title: "Desenvolvimento Web",
      description: "Criação de websites modernos, responsivos e otimizados para SEO."
    },
    {
      icon: <Code className="text-secondary" size={24} />,
      title: "Aplicações React/Next.js",
      description: "Desenvolvimento de aplicações web interativas com as tecnologias mais modernas."
    },
    {
      icon: <Server className="text-accent" size={24} />,
      title: "Back-end & APIs",
      description: "Criação de APIs RESTful e microsserviços eficientes e escaláveis."
    },
    {
      icon: <CodeSquare className="text-primary" size={24} />,
      title: "Integração & DevOps",
      description: "Integração de sistemas, configuração de CI/CD e implantação em nuvem."
    }
  ];

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
    <section id="about" className="py-24 px-6 bg-dark-lighter/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.p variants={itemVariants} className="text-primary font-mono text-sm text-center mb-2">Quem sou eu</motion.p>
          <motion.h2 variants={itemVariants} className="section-heading neon-text-secondary">Sobre Mim</motion.h2>
          <motion.p variants={itemVariants} className="section-subheading max-w-3xl mx-auto">
            Desenvolvedor apaixonado por criar experiências digitais inovadoras e intuitivas
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="prose prose-invert max-w-none">
              <h3 className="text-3xl font-display font-bold mb-6 text-gradient">{aboutData.title}</h3>
              <p className="text-lg leading-relaxed mb-4">
                {aboutData.bio1}
              </p>
              <p className="text-lg leading-relaxed mb-4">
                {aboutData.bio2}
              </p>
              <p className="text-lg leading-relaxed mb-4">
                {aboutData.bio3}
              </p>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <motion.div 
                    key={index}
                    className="flex gap-3 p-4 rounded-xl bg-dark-light/20 border border-dark-light/30"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="mt-1">{service.icon}</div>
                    <div>
                      <h4 className="text-base font-semibold mb-1">{service.title}</h4>
                      <p className="text-sm text-gray-400">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              <div className="rotating-border">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden relative z-20">
                  <div className="absolute inset-0 bg-gradient-radial from-transparent to-dark-lighter opacity-30 z-10"></div>
                  <img 
                    src="/lovable-uploads/be55f212-becd-4479-8b13-f1f8dd2f5ad8.png" 
                    alt="Gabriel Silva" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 p-4 bg-dark-lighter rounded-xl border border-dark-light/30 z-30"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center w-12 h-12">
                    <span className="font-display text-white text-xl font-bold">5+</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Anos de</p>
                    <p className="font-semibold">Experiência</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-2 -left-2 p-3 bg-dark-lighter rounded-xl border border-dark-light/30 z-30"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-accent" size={20} />
                  <span className="font-medium text-sm">Projetos Entregues</span>
                  <span className="font-bold text-white">12+</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-display font-bold text-center mb-8">Minhas Habilidades</motion.h3>
            
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8"
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <SkillIcon 
                    name={skill.name}
                    icon={skill.icon}
                    color={skill.color}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
