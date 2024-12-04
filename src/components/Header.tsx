import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'About', path: 'about' },
    { name: 'Events', path: 'events' },
    { name: 'Projects', path: 'projects' },
    { name: 'Team', path: 'team' },
    { name: 'Activities', path: '/activities' },
    { name: 'Contact', path: 'contact' }
  ];

  const handleScroll = (path: string) => {
    setIsOpen(false);
    if (!path.startsWith('/')) {
      scroller.scrollTo(path, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -100
      });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-md z-50"
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
              <motion.div 
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {!item.path.startsWith('/') ? (
                  <ScrollLink
                    to={item.path}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={800}
                    className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer"
                  >
                    {item.name}
                  </ScrollLink>
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

          <motion.button 
            className="md:hidden p-2"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 space-y-4 overflow-hidden"
            >
              {menuItems.map((item) => (
                <motion.div 
                  key={item.name}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {!item.path.startsWith('/') ? (
                    <div
                      className="block text-gray-700 hover:text-green-600 transition-colors cursor-pointer"
                      onClick={() => handleScroll(item.path)}
                    >
                      {item.name}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block text-gray-700 hover:text-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;