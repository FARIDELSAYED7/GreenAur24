import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Wind, Sun, School } from 'lucide-react';

const Services: React.FC = () => {
  const Services = [
    {
      title: "Youth Leadership and Engagement",
      description: "Empowering young leaders to drive environmental responsibility and creative solutions through programs and global exposure.",
      icon: "Youth",
      stats: "500+ youth leaders engaged",
      category: "Leadership"
    },
    {
      title: "Awareness Campaigns and Events",
      description: "Organizing educational campaigns and events in schools, universities, and public spaces to inspire environmental action.",
      icon: "Campaign",
      stats: "1,000+ events organized",
      category: "Education"
    },
    {
      title: "Community Initiatives and Volunteer Opportunities",
      description: "Hands-on projects like cleanups and tree planting that bring communities together for ecological action.",
      icon: "Community",
      stats: "200+ community projects",
      category: "Community"
    },
    {
      title: "Competitions and Awards",
      description: "Innovative contests to inspire environmental solutions with recognition to encourage creativity.",
      icon: "Trophy",
      stats: "50+ competitions held",
      category: "Innovation"
    },
    {
      title: "Global Networking and Opportunities",
      description: "Connecting participants with international conferences and programs to expand their global impact on sustainability.",
      icon: "Network",
      stats: "100+ global connections",
      category: "Networking"
    },
    {
      title: "Sustainability Consulting",
      description: "Advising organizations on eco-friendly practices to reduce their environmental footprint.",
      icon: "Consulting",
      stats: "30+ organizations advised",
      category: "Consulting"
    },
    {
      title: "Eco-Tours and Ecotourism Initiatives",
      description: "Organizing eco-friendly travel experiences to natural destinations, supporting conservation and local communities.",
      icon: "Eco-Tourism",
      stats: "10+ eco-tours organized",
      category: "Tourism"
    },
    {
      title: "Collaborative Partnerships",
      description: "Building alliances with like-minded organizations to enhance environmental initiatives and sustainable development.",
      icon: "Partnership",
      stats: "15+ partnerships formed",
      category: "Collaboration"
    }
  ];

  return (
    <section id="Services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {Services.map((Service, index) => (
            <motion.div
              key={Service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  {Service.icon === "Youth" && <School className="w-6 h-6 text-green-600" />}
                  {Service.icon === "Campaign" && <Droplets className="w-6 h-6 text-green-600" />}
                  {Service.icon === "Community" && <Sun className="w-6 h-6 text-green-600" />}
                  {Service.icon === "Trophy" && <Sun className="w-6 h-6 text-green-600" />}
                  {Service.icon === "Network" && <Sun className="w-6 h-6 text-green-600" />}
                  {Service.icon === "Consulting" && <Sun className="w-6 h-6 text-green-600" />}
                  {Service.icon === "Eco-Tourism" && <Sun className="w-6 h-6 text-green-600" />}
                  {Service.icon === "Partnership" && <Sun className="w-6 h-6 text-green-600" />}
                </div>
                <div className="flex-1">
                  <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    {Service.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-2">{Service.title}</h3>
                  <p className="text-gray-600 mb-4">{Service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">{Service.stats}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      Learn More →
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services
;