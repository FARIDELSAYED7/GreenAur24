import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const menuItems = [
    { name: 'About', path: 'about' },
    { name: 'Team', path: 'team' },
    { name: 'Partners', path: 'partners' },
    { name: 'Projects', path: 'projects' },
    { name: 'Services', path: 'services' },
    { name: 'Events', path: 'events' },
    { name: 'Contact', path: 'contact' },
    { name: 'Activities', path: '/activities' },
  ];

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    
    if (path.startsWith('/')) {
      return; // Let the Link component handle the navigation
    }

    if (!isHomePage) {
      // If we're not on the home page, first navigate to home then scroll
      window.location.href = `/#${path}`;
      return;
    }

    // On home page, just scroll to the section
    scroller.scrollTo(path, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -100,
    });
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
              className="text-2xl font-extrabold text-green-700"
            >
              GreenAura
            </motion.h1>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <motion.div 
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.path.startsWith('/') ? (
                  <Link
                    to={item.path}
                    className="text-black-600 font-semibold hover:text-green-700 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div
                    className="text-black-600 font-semibold hover:text-green-700 transition-colors cursor-pointer"
                    onClick={() => handleNavigation(item.path)}
                  >
                    {item.name}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden p-2 text-black 600"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
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
                  {item.path.startsWith('/') ? (
                    <Link
                      to={item.path}
                      className="block text-black font-semibold hover:text-gray-700 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div
                      className="block text-black font-semibold hover:text-gray-700 transition-colors cursor-pointer"
                      onClick={() => handleNavigation(item.path)}
                    >
                      {item.name}
                    </div>
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