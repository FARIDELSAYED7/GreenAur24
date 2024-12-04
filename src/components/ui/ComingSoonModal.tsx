import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComingSoonModal = ({ isOpen, onClose }: ComingSoonModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-xl p-8 shadow-2xl w-[90%] max-w-md mx-auto z-10"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-3xl font-bold text-center mb-4">Coming Soon!</h2>
            <p className="text-center text-gray-600 text-lg">
              We're working hard to bring you an amazing new feature. Stay tuned!
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ComingSoonModal;
