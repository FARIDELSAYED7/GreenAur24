import React from 'react';
import { motion } from 'framer-motion';
import type { Partner } from '../types/partner';

interface PartnerCardProps {
  partner: Partner;
  index: number;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="w-full max-w-xs"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          src={partner.logo}
          alt={partner.name}
          loading="lazy"
          className="w-full h-24 object-contain filter hover:brightness-110 transition-all duration-300"
        />
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800">{partner.name}</h3>
          <p className="text-sm text-gray-600 mt-2">{partner.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PartnerCard;