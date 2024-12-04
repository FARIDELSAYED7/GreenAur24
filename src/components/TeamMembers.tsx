import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Users } from 'lucide-react';
import { teamMembers } from '../data/teamMembers';
import { Link } from 'react-router-dom';

const TeamMembers = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Team Members
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group h-[400px] [perspective:1000px]"
            >
              <div className="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front of the card */}
                <div className="absolute inset-0">
                  <div className="h-full w-full rounded-xl bg-white shadow-xl [backface-visibility:hidden]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-[300px] w-full rounded-t-xl object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-green-600 font-medium">{member.role}</p>
                    </div>
                  </div>
                </div>

                {/* Back of the card */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-white px-8 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-green-600 font-medium mb-4">{member.role}</p>
                    <div className="flex justify-center space-x-4 mb-6">
                      {member.social.linkedin && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white p-3 rounded-full bg-blue-600 hover:bg-blue-700"
                        >
                          <Linkedin className="w-5 h-5" />
                        </motion.a>
                      )}
                      {member.social.email && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          href={`mailto:${member.social.email}`}
                          className="text-white p-3 rounded-full bg-red-600 hover:bg-red-700"
                        >
                          <Mail className="w-5 h-5" />
                        </motion.a>
                      )}
                      {member.social.github && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white p-3 rounded-full bg-gray-800 hover:bg-gray-900"
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link to="/high-board">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors text-lg font-medium shadow-lg"
            >
              <Users className="w-6 h-6" />
              View High Board Members
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamMembers;