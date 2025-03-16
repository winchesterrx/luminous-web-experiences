
import { useState } from 'react';
import { motion } from 'framer-motion';
import { LockIcon } from 'lucide-react';
import AdminPanel from './AdminPanel';

const AdminButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-dark-light rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Admin Panel"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1.7
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <LockIcon size={18} className="text-primary" />
      </motion.button>

      <AdminPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default AdminButton;
