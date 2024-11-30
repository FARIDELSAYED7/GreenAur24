import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '../data/contact';
import IconWrapper from './ui/IconWrapper';

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
      {contactInfo.map((info, index) => (
        <motion.div
          key={info.id}
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="flex items-center space-x-4"
        >
          <IconWrapper>
            {info.type === 'email' && <Mail className="w-5 h-5 text-green-600" />}
            {info.type === 'phone' && <Phone className="w-5 h-5 text-green-600" />}
            {info.type === 'address' && <MapPin className="w-5 h-5 text-green-600" />}
          </IconWrapper>
          <span className="text-gray-700">{info.value}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ContactInfo;