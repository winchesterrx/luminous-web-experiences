
import { motion } from 'framer-motion';

interface SkillIconProps {
  name: string;
  icon: string;
  color: string;
}

const SkillIcon = ({ name, icon, color }: SkillIconProps) => {
  // Map color names to Tailwind CSS classes
  const colorMap: Record<string, string> = {
    primary: 'from-primary/20 to-primary/5 hover:from-primary/30 hover:to-primary/10 text-primary',
    secondary: 'from-secondary/20 to-secondary/5 hover:from-secondary/30 hover:to-secondary/10 text-secondary',
    accent: 'from-accent/20 to-accent/5 hover:from-accent/30 hover:to-accent/10 text-accent',
    blue: 'from-blue-500/20 to-blue-500/5 hover:from-blue-500/30 hover:to-blue-500/10 text-blue-500',
    purple: 'from-purple-500/20 to-purple-500/5 hover:from-purple-500/30 hover:to-purple-500/10 text-purple-500',
    green: 'from-green-500/20 to-green-500/5 hover:from-green-500/30 hover:to-green-500/10 text-green-500',
  };
  
  const colorClass = colorMap[color] || colorMap.primary;
  
  return (
    <motion.div 
      className="flex flex-col items-center justify-center"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div 
        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-b ${colorClass} p-4 flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg group`}
      >
        <motion.div 
          className="w-full h-full"
          whileHover={{ rotate: 5, scale: 1.1 }}
          dangerouslySetInnerHTML={{ __html: icon }}
        />
      </div>
      <p className="mt-3 text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{name}</p>
    </motion.div>
  );
};

export default SkillIcon;
