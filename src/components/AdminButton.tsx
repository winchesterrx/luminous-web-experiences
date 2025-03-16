
import { Lock } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import AdminPanel from "./AdminPanel";

const AdminButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        className="fixed bottom-8 left-8 z-30 w-10 h-10 rounded-full bg-dark-light/50 backdrop-blur-sm flex items-center justify-center hover:bg-primary/20 transition-colors duration-300 border border-dark-light/30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        aria-label="Admin Panel"
      >
        <Lock size={16} className="text-gray-400" />
      </motion.button>
      
      <AdminPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default AdminButton;
