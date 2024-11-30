import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Events from './components/Events';
import Projects from './components/Projects';
import Partners from './components/Partners';
import TeamMembers from './components/TeamMembers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Activities from './components/Activities';
import Services from './components/Services';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/" element={
            <>
              <Hero />
              <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="container mx-auto px-6 py-20"
              >
                <section id="about" className="mb-20">
                  <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center mb-10"
                  >
                    About Us
                  </motion.h2>
                  <div className="grid md:grid-cols-2 gap-10">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-green-50 p-8 rounded-lg shadow-lg"
                    >
                      <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                      <p className="text-gray-700">
                      To foster environmental awareness, promote sustainable practices, and inspire collective action to protect and preserve our planet.</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-green-50 p-8 rounded-lg shadow-lg"
                    >
                      <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                      <p className="text-gray-700">
                      A world where environmental responsibility is a shared commitment across generations.</p>
                    </motion.div>
                  </div>
                </section>
              </motion.main>
              <TeamMembers />
              <Partners />
              <Projects/>
              <Services />
              <Events />
              <Contact />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;