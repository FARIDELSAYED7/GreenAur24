import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import ComingSoonModal from './ui/ComingSoonModal';

const Events: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const events = [
    {
      title: "EcoVerse Hackathon",
      date: "November 22, 2024",
      location: "Nile University",
      description: "Join us for an innovative hackathon focused on environmental solutions.",
      image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8"
    },
    {
      title: "Sustainability Summit",
      date: "December 15, 2024",
      location: "Virtual Event",
      description: "A global conference on sustainable development and climate action.",
      image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8"
    }
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Upcoming Events
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsModalOpen(true)}
                  className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
                >
                  Register Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;