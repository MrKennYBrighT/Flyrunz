import React from 'react';
import { motion } from 'framer-motion';

const programs = [
  {
    title: 'Study Abroad Pathways',
    description:
      'Explore academic opportunities across top universities worldwide. We guide you through admissions, visa processing, and scholarship applications.',
    icon: '🎓',
  },
  {
    title: 'Career Mobility Programs',
    description:
      'Advance your professional journey with global internships, job placements, and skill development tailored to international standards.',
    icon: '🌍',
  },
  {
    title: 'Institutional Partnerships',
    description:
      'We collaborate with schools, colleges, and organizations to create custom mobility programs, exchange initiatives, and global outreach.',
    icon: '🤝',
  },
  {
    title: 'Visa & Travel Support',
    description:
      'From documentation to interview prep, we provide end-to-end support for student, work, and visitor visas.',
    icon: '✈️',
  },
];

const Programs = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-4 md:px-8 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-screen-xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-purple-700">
          Our Programs
        </h2>
        <p className="text-center text-lg mb-12">
          Whether you're a student, professional, or institution, Flyrunz offers tailored programs to help you thrive globally.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-purple-50 border border-purple-200 rounded-lg p-6 shadow-md"
            >
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">
                {program.title}
              </h3>
              <p className="text-gray-700">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Programs;
