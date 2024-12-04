import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="mb-20">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-10"
      >
        About Us
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-green-50 p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-700">
            To foster environmental awareness, promote sustainable practices, and inspire collective action to protect and preserve our planet.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-green-50 p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
          <p className="text-gray-700">
            A world where environmental responsibility is a shared commitment across generations.
          </p>
        </motion.div>
      </div>

      <div className="flex justify-center">
        <Link to="/team">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors text-lg font-medium"
          >
            <Users className="w-6 h-6" />
            Meet Our Team
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default About;
