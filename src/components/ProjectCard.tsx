
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  index: number;
}

const ProjectCard = ({ title, description, imageUrl, projectUrl, index }: ProjectCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card rounded-xl overflow-hidden group"
    >
      <div className="relative overflow-hidden h-48 sm:h-64">
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity duration-300"></div>
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-neon-blue transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4">
          {description}
        </p>
        
        <a 
          href={projectUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-neon-green hover:text-white transition-colors duration-300"
        >
          Ver Projeto
          <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
