
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SkillIconProps {
  name: string;
  icon: string;
  color: string;
}

const SkillIcon = ({ name, icon, color }: SkillIconProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const neonColor = color === 'blue' 
    ? 'shadow-[0_0_10px_rgba(0,238,255,0.7)]'
    : color === 'purple' 
      ? 'shadow-[0_0_10px_rgba(155,48,255,0.7)]'
      : 'shadow-[0_0_10px_rgba(57,255,20,0.7)]';
  
  return (
    <div 
      className="flex flex-col items-center justify-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={cn(
          "w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-dark-light/50 rounded-xl mb-2 transition-all duration-300",
          isHovered && neonColor
        )}
      >
        <div dangerouslySetInnerHTML={{ __html: icon }} className="w-8 h-8 md:w-10 md:h-10" />
      </div>
      <span className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
        {name}
      </span>
    </div>
  );
};

export default SkillIcon;
