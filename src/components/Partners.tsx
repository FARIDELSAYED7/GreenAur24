import React from 'react';
import { motion } from 'framer-motion';
import { partners } from '../data/partners';
import PartnerCard from './PartnerCard';
import SectionTitle from './ui/SectionTitle';

const Partners: React.FC = () => {
  const isMobile = window.innerWidth <= 768;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.2,
        duration: isMobile ? 0.3 : 0.5
      }
    }
  };

  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.3 : 0.5 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <SectionTitle title="Our Partners" subtitle="Working together for a sustainable future" />
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 items-center justify-items-center mt-8"
        >
          {partners.map((partner, index) => (
            <PartnerCard 
              key={partner.name} 
              partner={partner} 
              index={index}
              isMobile={isMobile}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;