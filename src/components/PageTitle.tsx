import React from 'react';
import { motion } from 'framer-motion';

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl font-bold text-center mb-16"
    >
      {title}
    </motion.h1>
  );
};

export default PageTitle;