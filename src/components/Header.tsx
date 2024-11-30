import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'About', path: '/#about' },
    { name: 'Events', path: '/#events' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Team', path: '/#team' },
    { name: 'Activities', path: '/activities' },
    { name: 'Contact', path: '/#contact' }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-white shadow-md z-50"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            <motion.h1 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-green-700"
            >
              GreenAura
            </motion.h1>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <motion.div key={item.name}>
                {item.path.startsWith('/#') ? (
                  <a
                    href={item.path.substring(1)}
                    className="text-gray-700 hover:text-green-600 transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className="text-gray-700 hover:text-green-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 space-y-4"
          >
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.path.startsWith('/#') ? (
                  <a
                    href={item.path.substring(1)}
                    className="block text-gray-700 hover:text-green-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className="block text-gray-700 hover:text-green-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;