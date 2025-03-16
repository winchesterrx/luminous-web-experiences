
import { motion } from 'framer-motion';
import SkillIcon from './SkillIcon';

// Importing framer-motion
<lov-add-dependency>framer-motion@latest</lov-add-dependency>

const About = () => {
  const skills = [
    {
      name: "HTML",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff5722"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M4.1 2H19.9L18.1 20.4L12 22.4L5.9 20.4L4.1 2Z" stroke-width="2" stroke-linejoin="round"></path><path d="M16 7H8L8.4 11.5H15.6L15.2 16.5L12 17.5L8.8 16.5L8.7 15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`,
      color: "blue"
    },
    {
      name: "CSS",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#2196f3"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M4.1 2H19.9L18.1 20.4L12 22.4L5.9 20.4L4.1 2Z" stroke-width="2" stroke-linejoin="round"></path><path d="M16 7H8L8.4 11.5H15.6L15.2 16.5L12 17.5L8.8 16.5L8.7 15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`,
      color: "purple"
    },
    {
      name: "JavaScript",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffdf00"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M4 3H20V21H4V3Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 12.5C16 11.12 15.12 10 14 10C12.88 10 12 11.12 12 12.5V16.5C12 17.88 12.88 19 14 19C15.12 19 16 17.88 16 16.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 10V13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 16V19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 16C8 14.9391 8.42143 13.9217 9.17157 13.1716C9.92172 12.4214 10.9391 12 12 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`,
      color: "green"
    },
    {
      name: "React",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#61dafb"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M12 15.0004C13.6569 15.0004 15 13.6573 15 12.0004C15 10.3435 13.6569 9.00037 12 9.00037C10.3431 9.00037 9 10.3435 9 12.0004C9 13.6573 10.3431 15.0004 12 15.0004Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 5.00037C16.9706 5.00037 21 8.13804 21 12.0004C21 15.8627 16.9706 19.0004 12 19.0004C7.02944 19.0004 3 15.8627 3 12.0004C3 8.13804 7.02944 5.00037 12 5.00037Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 5.00037C14.5 8.00037 15 12.0004 12 19.0004" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 5.00037C9.5 8.00037 9 12.0004 12 19.0004" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`,
      color: "blue"
    },
    {
      name: "Node.js",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#8bc500"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M12 1L3 5.5V18.5L12 23L21 18.5V5.5L12 1Z" stroke-width="2" stroke-linejoin="round"></path><path d="M12 1V23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 5.5L12 10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 5.5L12 10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`,
      color: "green"
    },
    {
      name: "TypeScript",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#007acc"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M4 3H20V21H4V3Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 12.5C16 11.12 15.12 10 14 10C12.88 10 12 11.12 12 12.5V16.5C12 17.88 12.88 19 14 19C15.12 19 16 17.88 16 16.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 14H13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 14V19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`,
      color: "blue"
    },
    {
      name: "Tailwind",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#06b6d4"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M6 12C8 10 11 10 12 12C13 14 16 14 18 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 16C8 14 11 14 12 16C13 18 16 18 18 16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 8C8 6 11 6 12 8C13 10 16 10 18 8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`,
      color: "purple"
    },
    {
      name: "Next.js",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.197 20.1241C16.775 19.5604 16.3811 18.963 16.018 18.336C15.0868 16.7172 14.4145 14.9448 14.026 13.096L13.638 11.31C13.177 9.30876 12.9202 7.26607 12.871 5.216C16.151 5.69411 18.8471 8.05847 19.8351 11.211C20.0615 11.9273 20.199 12.6708 20.243 13.425C20.2707 13.8797 20.2688 14.3357 20.237 14.79C20.1534 16.0202 19.8487 17.2242 19.337 18.34C19.0043 19.0108 18.5996 19.6394 18.131 20.215" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.804 20.124C7.226 19.5604 7.61988 18.963 7.983 18.336C8.91423 16.7172 9.58655 14.9448 9.975 13.096L10.363 11.31C10.824 9.30876 11.0807 7.26607 11.13 5.216C7.85 5.69411 5.15387 8.05847 4.166 11.211C3.93959 11.9273 3.80211 12.6708 3.758 13.425C3.73027 13.8797 3.73216 14.3357 3.764 14.79C3.84767 16.0202 4.15236 17.2242 4.664 18.34C4.99667 19.0108 5.40138 19.6394 5.87 20.215" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`,
      color: "green"
    },
  ];
  
  return (
    <section id="about" className="py-24 px-6 bg-dark-lighter/30">
      <div className="max-w-7xl mx-auto">
        <p className="text-neon-blue font-code text-sm text-center mb-2">Quem sou eu</p>
        <h2 className="section-heading neon-text-purple">Sobre Mim</h2>
        <p className="section-subheading max-w-3xl mx-auto">
          Desenvolvedor apaixonado por criar experiências digitais inovadoras e intuitivas
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="prose prose-invert max-w-none"
            >
              <p className="text-lg leading-relaxed mb-4">
                Olá! Sou Gabriel Silva, um desenvolvedor full-stack apaixonado por transformar ideias inovadoras em produtos digitais de alta qualidade.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Minha jornada começou há 5 anos, e desde então tenho me dedicado a aprimorar minhas habilidades em desenvolvimento web, criando interfaces modernas e responsivas que proporcionam experiências memoráveis aos usuários.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Trabalho com as tecnologias mais recentes do mercado, sempre focado em desempenho, acessibilidade e experiência do usuário. Minha abordagem combina criatividade com soluções técnicas robustas para entregar projetos que superam expectativas.
              </p>
            </motion.div>
          </div>
          
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-full flex items-center justify-center"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden neon-border relative mx-auto">
                <div className="absolute inset-0 bg-gradient-radial from-transparent to-dark-lighter opacity-30"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Gabriel Silva" 
                  className="w-full h-full object-cover" 
                />
                
                <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-full bg-dark-lighter border-4 border-dark flex items-center justify-center">
                  <span className="font-display text-neon-green text-xl font-bold">5+</span>
                  <span className="text-gray-400 text-xs absolute bottom-2">Anos</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-24">
          <h3 className="text-2xl font-display font-bold text-center mb-12">Minhas Habilidades</h3>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8"
          >
            {skills.map((skill, index) => (
              <SkillIcon 
                key={index}
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
