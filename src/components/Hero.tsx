import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen pt-20 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Welcome to 
              <span className="text-green-600"> GreenAura</span>
            </h1>
            <h1 className="text-xl font-bold text-gray-600 mb-8">
              Building a 
              <span className="text-green-600"> Sustainable </span>
              Future Together
            </h1>
          
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-green-700 transition-colors"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="md:w-1/2"
          >
            <img
              src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e"
              alt="Nature"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;