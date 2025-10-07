import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const programs = [
  {
    title: 'Academic Advisory & Study Abroad',
    description:
      'Learn more about how Flyrunz can support your journey through personalized guidance and global partnerships.',
    image: '/images/academic-advisory.jpg',
    alt: 'Student in graduation attire holding diploma',
    objectPosition: 'object-top',
  },
  {
    title: 'Vocational & Skills Training',
    description:
      'Gain hands-on skills and certifications that open doors to global employment opportunities.',
    image: '/images/vocational-training.jpg',
    alt: 'Person welding in a vocational workshop',
    objectPosition: 'object-[0_60%]',
  },
  {
    title: 'Educational & Career Consultancy',
    description:
      'Navigate your academic and career path with expert advice tailored to your goals.',
    image: '/images/student-consultation.jpg',
    alt: 'Professional walking through airport terminal',
    objectPosition: 'object-[0_60%]',
  },
  {
    title: 'Institutional Partnerships',
    description:
      'Collaborate with Flyrunz to deliver world-class programs and expand global reach.',
    image: '/images/partnerships.jpg',
    alt: 'Diverse team in a meeting room',
    objectPosition: 'object-top',
  },
];

const FeaturedPrograms = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          Explore Our Practice Areas
        </h2>
        <p className="text-gray-700 mb-10">
          We offer tailored programs designed to open doors of opportunity for students, professionals, and institutions worldwide.
        </p>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {programs.map((program) => (
            <motion.div
              key={program.title}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img
                src={program.image}
                alt={program.alt}
                className={`w-full aspect-[4/3] object-cover ${program.objectPosition} rounded-t-lg`}
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-700">{program.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
