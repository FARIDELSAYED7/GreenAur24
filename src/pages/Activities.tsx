import React from 'react';
import { motion } from 'framer-motion';
import { activities } from '../data/activities';
import ActivityCard from '../components/ActivityCard';
import { ArrowLeft, Leaf, Globe, Mountain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Activities = () => {
  const navigate = useNavigate();

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <Leaf className="absolute top-20 left-10 text-green-300 w-24 h-24" />
        <Globe className="absolute bottom-20 right-10 text-emerald-300 w-32 h-32" />
        <Mountain className="absolute top-1/2 left-1/4 text-green-200 w-48 h-48" />
      </div>

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleGoBack}
        className="fixed top-6 left-6 z-50 bg-green-100 text-green-700 hover:bg-green-200 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
      >
        <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      </motion.button>

      {/* Header Section */}
      <div className="relative container mx-auto px-6 pt-20 pb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold text-green-800 mb-6 leading-tight text-center"
        >
          Our Environmental <br />Activities
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-green-700 max-w-2xl mx-auto text-center"
        >
          Empowering students to create meaningful environmental impact through innovative and collaborative initiatives.
        </motion.p>
      </div>

      {/* Activities Grid */}
      <motion.div 
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 pb-16"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              variants={cardVariants}
            >
              <ActivityCard 
                activity={activity} 
                index={index} 
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-green-50 to-transparent" />
    </div>
  );
};

export default Activities;