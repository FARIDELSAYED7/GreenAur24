import React from 'react';
import { motion } from 'framer-motion';
import type { Partner } from '../types/partner';

interface PartnerCardProps {
  partner: Partner;
  index: number;
  isMobile: boolean;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner, index, isMobile }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: isMobile ? 10 : 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.2 : 0.5,
        delay: isMobile ? index * 0.1 : index * 0.2
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      viewport={{ once: true }}
      className="w-full max-w-xs"
    >
      <motion.div
        whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
        whileTap={{ scale: isMobile ? 0.98 : 0.95 }}
        transition={{
          type: "spring",
          stiffness: isMobile ? 500 : 400,
          damping: isMobile ? 20 : 17
        }}
        className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-200"
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: isMobile ? 0.2 : 0.3 }}
          src={partner.logo}
          alt={partner.name}
          loading="lazy"
          className="w-full h-20 md:h-24 object-contain filter hover:brightness-110 transition-all duration-200"
        />
        <div className="mt-3 md:mt-4 text-center">
          <h3 className="text-base md:text-lg font-semibold text-gray-800">{partner.name}</h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PartnerCard;