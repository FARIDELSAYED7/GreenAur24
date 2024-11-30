import React from 'react';
import { motion } from 'framer-motion';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import SectionTitle from './ui/SectionTitle';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-green-50">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Contact Us" 
          subtitle="Let's work together for a sustainable future"
        />

        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;