import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const partners = [
  {
    name: 'UNESCO',
    logo: '/logos/unesco.png',
    url: 'https://www.unesco.org/',
  },
  {
    name: 'British Council',
    logo: '/logos/british-council.png',
    url: 'https://www.britishcouncil.org/',
  },
  {
    name: 'DAAD',
    logo: '/logos/daad.png',
    url: 'https://www.daad.de/en/',
  },
  {
    name: 'World Bank',
    logo: '/logos/world-bank.png',
    url: 'https://www.worldbank.org/',
  },
];

const Partners = () => {
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
        staggerChildren: 0.2,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          Trusted by Global Partners
        </h2>
        <p className="text-gray-700 mb-10">
          Flyrunz collaborates with globally respected institutions to deliver world-class opportunities.
        </p>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center"
        >
          {partners.map((partner) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={logoVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center items-center group"
              aria-label={`Visit ${partner.name} website`}
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-12 md:h-16 object-contain grayscale group-hover:grayscale-0 transition duration-300 ease-in-out"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
