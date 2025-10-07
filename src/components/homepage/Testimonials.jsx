import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    name: 'Amina O.',
    country: 'Kenya',
    quote:
      'Flyrunz helped me secure a scholarship and study in Canada. It changed my life completely!',
    image: '/images/authentic-portrait.jpg',
  },
  {
    name: 'Luis M.',
    country: 'Mexico',
    quote:
      'The vocational training program I joined through Flyrunz landed me a job within 3 months.',
    image: '/images/authentic-portrait.jpg',
  },
  {
    name: 'Fatima B.',
    country: 'Nigeria',
    quote:
      'I never imagined I could study abroad. Flyrunz made it possible and guided me every step of the way.',
    image: '/images/authentic-portrait.jpg',
  },
];

const Testimonials = () => {
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
          What Our Users Say
        </h2>
        <p className="text-gray-700 mb-10">
          Hear from students and professionals who’ve transformed their lives with Flyrunz.
        </p>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-left"
            >
              <img
                src={t.image}
                alt={`Portrait of ${t.name}`}
                className="w-16 h-16 rounded-full object-cover mb-4"
              />
              <p className="text-gray-800 italic mb-4">“{t.quote}”</p>
              <div className="text-sm text-blue-700 font-semibold">
                {t.name} – {t.country}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
