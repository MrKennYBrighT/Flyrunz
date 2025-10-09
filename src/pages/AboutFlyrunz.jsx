import { motion } from 'framer-motion';

const AboutFlyrunz = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-6"
        >
          About Flyrunz Travel Consult
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-700 text-lg mb-10"
        >
          Flyrunz Travel Consult is a registered educational and vocational consultancy headquartered in Akobo, Ibadan, with a branch office in Bodija, Ibadan. We specialize in comprehensive advisory services across education, vocational training, and global career development—helping students, professionals, and entrepreneurs access life-changing opportunities.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-700 text-lg mb-6"
        >
          Our approach blends academic advisory, skills training, and career support into a unified framework. Every client receives tailored guidance aligned with their aspirations, whether they’re pursuing international education, technical certification, or career mobility.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-2xl font-semibold text-blue-700 mt-10 mb-4">Our Core Values</h3>
          <ul className="list-disc list-inside text-gray-700 text-lg mb-6">
            <li>Integrity</li>
            <li>Professionalism</li>
            <li>Transparency</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-700 mt-10 mb-4">Our Goals</h3>
          <ul className="list-disc list-inside text-gray-700 text-lg mb-6">
            <li>Simplify access to global education</li>
            <li>Promote vocational excellence</li>
            <li>Empower communities through education</li>
            <li>Build sustainable partnerships with institutions worldwide</li>
            <li>Foster lifelong learning for students and professionals</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFlyrunz;
