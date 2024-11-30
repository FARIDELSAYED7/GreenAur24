import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const TeamMembers = () => {
  const team = [
    {
      name: "Dr. Wafik Noseir",
      role: "Supervisor | Member of the World Environment Congress",
      image: "images/team/Dr.Wafik_noseir.jpg",
      social: {
        linkedin: "https://linkedin.com",
        email: "wafik@greenaura.com"
      }
    },
    {
      name: "Ahmed Hany",
      role: "Founder & CEO",
      image: "images/team/Ahmed_hany.png",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "michael@greenaura.com"
      }
    },
    
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Team
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={member.social.linkedin}
                      className="text-white p-2 rounded-full bg-blue-600 hover:bg-blue-700"
                    >
                      <Linkedin className="w-5 h-5" />   
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={`mailto:${member.social.email}`}
                      className="text-white p-2 rounded-full bg-red-600 hover:bg-red-700"
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-green-600 font-medium mb-3">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;