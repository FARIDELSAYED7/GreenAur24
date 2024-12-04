import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Activity } from '../types/activity';
import { Calendar, ArrowRight } from 'lucide-react';
import ComingSoonModal from './ui/ComingSoonModal';

interface ActivityCardProps {
  activity: Activity;
  index: number;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { icon: Icon } = activity;
  
  return (
    <>
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
      >
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 group-hover:opacity-0 transition-opacity duration-300" />
          <div className="h-48 p-6 flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50">
            <Icon className="w-20 h-20 text-green-600 group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="px-3 py-1 text-sm font-medium text-green-600 bg-green-50 rounded-full">
              {activity.category}
            </span>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              {activity.date}
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-3 group-hover:text-green-600 transition-colors">
            {activity.title}
          </h3>
          
          <p className="text-gray-600 mb-6 line-clamp-3">
            {activity.description}
          </p>
          
          <motion.button
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="flex items-center text-green-600 font-semibold group/btn"
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default ActivityCard;