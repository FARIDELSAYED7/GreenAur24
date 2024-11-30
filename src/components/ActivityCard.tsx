import React from 'react';
import { motion } from 'framer-motion';
import type { Activity } from '../types/activity';
import Button from './ui/Button';
import IconWrapper from './ui/IconWrapper';

interface ActivityCardProps {
  activity: Activity;
  index: number;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, index }) => {
  const { icon: Icon } = activity;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center mb-4">
        <IconWrapper className="mr-4">
          <Icon className="w-6 h-6 text-green-600" />
        </IconWrapper>
        <div>
          <h3 className="text-xl font-semibold">{activity.title}</h3>
          <span className="text-sm text-green-600">{activity.category}</span>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{activity.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{activity.date}</span>
        <Button variant="primary">
          Learn More →
        </Button>
      </div>
    </motion.div>
  );
};

export default ActivityCard;