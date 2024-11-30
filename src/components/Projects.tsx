import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ProjectsCard';
import SectionTitle from './ui/SectionTitle';
import { Projects as projects} from '../data/projects';
const Projects = () => {
  return (
    <section id="Projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Our Projects" 
          subtitle="Comprehensive environmental solutions for a sustainable future"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ServiceCard 
              key={project.id}
              Project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
