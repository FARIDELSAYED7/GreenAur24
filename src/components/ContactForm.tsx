import React from 'react';
import { motion } from 'framer-motion';
import Input from './ui/Input';
import TextArea from './ui/TextArea';
import Button from './ui/Button';

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <motion.form
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <Input
        label="Name"
        type="text"
        id="name"
        required
        placeholder="Your name"
      />
      <Input
        label="Email"
        type="email"
        id="email"
        required
        placeholder="your.email@example.com"
      />
      <TextArea
        label="Message"
        id="message"
        required
        placeholder="How can we help you?"
        rows={4}
      />
      <Button type="submit" variant="primary" fullWidth>
        Send Message
      </Button>
    </motion.form>
  );
};

export default ContactForm;