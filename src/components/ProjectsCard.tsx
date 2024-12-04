import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { projects } from '../types/projects';
import Button from './ui/Button';
import IconWrapper from './ui/IconWrapper';
import ComingSoonModal from './ui/ComingSoonModal';

interface ProjectsCardProps {
  Project: projects;
  index: number;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ Project, index }) => {
  const { icon: Icon } = Project;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="p-8">
        <IconWrapper className="mb-6">
          <Icon className="w-8 h-8 text-green-600" />
        </IconWrapper>
        
        <h3 className="text-2xl font-semibold mb-4">{Project.title}</h3>
        <p className="text-gray-600 mb-6">{Project.description}</p>
        
        <ul className="space-y-3 mb-6">
          {Project.features.map((feature, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="flex items-center text-gray-700"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
              {feature}
            </motion.li>
          ))}
        </ul>

        <Button variant="primary" fullWidth onClick={() => setIsModalOpen(true)}>
          Learn More
        </Button>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;