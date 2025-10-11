import React from 'react';
import { motion } from 'framer-motion';

const programs = [
  {
    title: 'Flight Booking & Reservations',
    description:
      'We help you secure affordable and flexible flight options tailored to your travel plans.',
    icon: '🛫',
  },
  {
    title: 'Educational Consultancy & Career Advisory',
    description:
      'Get expert guidance on academic pathways, career planning, and international education opportunities.',
    icon: '🎓',
  },
  {
    title: 'Visa Advisory & Travel Support',
    description:
      'From documentation to interview prep, we provide full support for student, work, and visitor visas.',
    icon: '📑',
  },
  {
    title: 'Institutional Partnerships & Exchange Programs',
    description:
      'We collaborate with institutions to build global exchange programs and strategic partnerships.',
    icon: '🤝',
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
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center text-blue-700">
          Our Programs
        </h2>
        <p className="text-center text-base text-gray-600 mb-12">
          Whether you're a student, professional, or institution, Flyrunz offers tailored programs to help you thrive globally.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm"
            >
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                {program.title}
              </h3>
              <p className="text-sm text-gray-600">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Programs;
