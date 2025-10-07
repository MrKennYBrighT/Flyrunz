import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ImpactTracker = () => {
  const stats = [
    { label: 'Students Placed', value: '12,450+' },
    { label: 'Countries Reached', value: '35+' },
    { label: 'Scholarships Awarded', value: '$4.2M+' },
    { label: 'Partner Institutions', value: '120+' },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="bg-blue-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="w-full">
          <img
            src="/images/graduation-celebration.jpg"
            alt="Graduates celebrating success"
            className="w-full rounded-lg shadow-md object-cover aspect-[4/3] transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Stats Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            Our Global Impact
          </h2>
          <p className="text-gray-700 mb-8">
            Flyrunz is changing lives across continents. Here’s a snapshot of what we’ve achieved so far.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300"
              >
                <div className="text-2xl font-bold text-blue-700">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactTracker;
