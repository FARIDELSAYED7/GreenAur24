import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ReactTypingEffect from 'react-typing-effect';
import { Link } from 'react-scroll';

const Hero = () => {
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const backgroundVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 2
      }
    }
  };

  const textContainerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  };

  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
    },
    tap: { 
      scale: 0.95 
    }
  };

  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={backgroundVariants}
      className="min-h-screen pt-16 bg-gradient-to-b from-green-50 via-white to-green-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-green-200 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-green-100 blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          <motion.div
            variants={textContainerVariants}
            className="md:w-1/2 space-y-8 text-center md:text-left"
          >
            <motion.div 
              variants={textVariants}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800">
                Welcome to{' '}
                <span className="text-green-600 inline-block">
                  <ReactTypingEffect
                    text={["GreenAura"]}
                    speed={150}
                    eraseDelay={2000}
                    typingDelay={200}
                  />
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-600">
                <ReactTypingEffect
                  text={["Building a Sustainable Future Together"]}
                  speed={100}
                  eraseDelay={2000}
                  typingDelay={1000}
                />
              </h2>
            </motion.div>
          
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <Link
                to="about"
                smooth={true}
                duration={400}
                offset={-80}
                spy={true}
                className="inline-block"
              >
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-green-600 text-white px-8 py-4 rounded-full flex items-center space-x-3 hover:bg-green-700 transition-all mx-auto md:mx-0 text-lg shadow-lg"
                >
                  <span>Get Started</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="md:w-1/2 relative"
          >
            <motion.div
              animate={floatingAnimation}
              className="relative z-10"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="/images/main.png"
                alt="Nature"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
            {/* Decorative elements */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 right-0 w-32 h-32 border-4 border-green-200 rounded-full -z-10 opacity-50"
            />
            <motion.div
              animate={{
                rotate: -360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-0 left-0 w-24 h-24 border-4 border-green-300 rounded-full -z-10 opacity-50"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;