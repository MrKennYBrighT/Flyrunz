import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const teamMembers = [
  {
    name: 'Adara Victor',
    role: 'Lead Education Consultant & CEO',
    bio: 'With over a decade of experience in international education advisory, Victor has guided thousands of students toward successful academic placements across Europe, North America, and Asia.',
    photo: '/images/adaravictore.jpeg',
  },
  {
    name: 'Tolu B.',
    role: 'Vocational Training Specialist',
    bio: 'Tolu designs and manages Flyrunz’s vocational programs, helping professionals gain globally recognized certifications and hands-on skills.',
    photo: '/images/authentic-portrait.jpg',
  },
  {
    name: 'Chika N.',
    role: 'Career Mobility Advisor',
    bio: 'Chika supports clients in navigating career transitions, visa pathways, and global job markets with tailored strategies and mentorship.',
    photo: '/images/academic-advisory.jpg',
  },
];

const MeetTheTeam = () => {
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
      <div className="max-w-6xl mx-auto text-center">clear
        {/* Team Image with entrance + hover zoom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          whileHover={{ scale: 1.02 }}
          className="mb-10"
        >
          <img
            src="/images/team-collaboration.jpg"
            alt="Flyrunz team collaborating"
            className="w-full rounded-xl shadow-md object-cover aspect-[4/3] mx-auto"
          />
        </motion.div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          Meet the Flyrunz Team
        </h2>
        <p className="text-gray-700 mb-10">
          Our team of experienced consultants and advisors bring deep expertise in education, vocational training, and career development. We’re here to guide you every step of the way.
        </p>

        {/* Team Cards */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-left"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-blue-700 text-center">{member.name}</h3>
              <p className="text-sm text-gray-600 text-center mb-2">{member.role}</p>
              <p className="text-gray-700 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
