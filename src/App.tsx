import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';

import Header from './components/Header';
import Hero from './components/Hero';
import Events from './components/Events';
import Projects from './components/Projects';
import Partners from './components/Partners';
import TeamMembers from './components/TeamMembers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Activities from './pages/Activities';
import About from './pages/About';
import Services from './components/Services';

function App() {
  const seoData = {
    title: "GreenAura - Student-Led Environmental Initiatives",
    description: "Join GreenAura, a student-driven platform dedicated to environmental sustainability, innovative projects, and community engagement. Together, we're creating a greener future.",
    keywords: "environmental sustainability, student initiatives, green projects, climate action, community engagement",
    url: "https://green-aur24.vercel.app/",
    image: "/images/main.png"
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GreenAura",
    "description": seoData.description,
    "url": seoData.url,
    "logo": seoData.image,
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "GreenAura Team"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@greenaura.org",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://www.facebook.com/greenaura",
      "https://www.instagram.com/greenaura",
      "https://twitter.com/greenaura"
    ]
  };

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Helmet>
            <html lang="en" />
            <title>{seoData.title}</title>
            <meta name="description" content={seoData.description} />
            <meta name="keywords" content={seoData.keywords} />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={seoData.url} />
            <meta property="og:title" content={seoData.title} />
            <meta property="og:description" content={seoData.description} />
            <meta property="og:image" content={seoData.image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={seoData.url} />
            <meta property="twitter:title" content={seoData.title} />
            <meta property="twitter:description" content={seoData.description} />
            <meta property="twitter:image" content={seoData.image} />

            {/* Structured Data */}
            <script type="application/ld+json">
              {JSON.stringify(structuredData)}
            </script>

            {/* Canonical Link */}
            <link rel="canonical" href={seoData.url} />
          </Helmet>

          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/about" element={
              <>
                <Helmet>
                  <title>About Us | GreenAura</title>
                  <meta name="description" content="Learn more about GreenAura's mission, vision, and values." />
                </Helmet>
                <About />
              </>
            } />
            <Route path="/" element={
              <>
                <Header />
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
                  </section>
                </motion.main>
                <TeamMembers />
                <Partners />
                <Projects />
                <Services />
                <Events />
                <Contact />
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;