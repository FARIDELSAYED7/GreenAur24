import React from 'react';
import { motion } from 'framer-motion';
import { partners } from '../data/partners';
import PartnerCard from './PartnerCard';
import SectionTitle from './ui/SectionTitle';

const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle title="Our Partners" subtitle="Working together for a sustainable future" />
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <PartnerCard key={partner.name} partner={partner} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;