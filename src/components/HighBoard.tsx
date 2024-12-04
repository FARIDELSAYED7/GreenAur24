import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowLeft, ChevronDown } from 'lucide-react';
import { highBoardSeasons } from '../data/highBoard';
import { Link } from 'react-router-dom';

const HighBoard = () => {
  const [selectedSeason, setSelectedSeason] = useState(highBoardSeasons[0].id);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentSeason = highBoardSeasons.find(season => season.id === selectedSeason)!;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Team
          </Link>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          High Board Members
        </motion.h1>

        {/* Season Selector */}
        <div className="max-w-xs mx-auto mb-16">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between bg-white px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <span className="text-lg font-medium">
                {currentSeason.name} ({currentSeason.year})
              </span>
              <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl z-10"
                >
                  {highBoardSeasons.map(season => (
                    <button
                      key={season.id}
                      onClick={() => {
                        setSelectedSeason(season.id);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                        selectedSeason === season.id ? 'bg-green-50 text-green-600' : ''
                      }`}
                    >
                      {season.name} ({season.year})
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSeason}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="col-span-full grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentSeason.members.map((member, index) => {
                const [isFlipped, setIsFlipped] = useState(false);
                return (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group h-[400px] [perspective:1000px]"
                    onClick={() => setIsFlipped(!isFlipped)}
                  >
                    <div className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''} md:group-hover:[transform:rotateY(180deg)]`}>
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
                          <p className="text-gray-600 mb-6 line-clamp-4">{member.description}</p>
                          <div className="flex justify-center space-x-4 mb-4">
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
                          <div className="space-y-2">
                            {member.achievements.map((achievement, i) => (
                              <p key={i} className="text-sm text-gray-600 line-clamp-1">
                                • {achievement}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HighBoard;
