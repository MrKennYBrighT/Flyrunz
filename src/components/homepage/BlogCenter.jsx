import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const blogPosts = [
  {
    title: 'Top 10 Scholarships for African Students in Canada',
    excerpt: 'Explore fully funded opportunities and application tips for studying in Canada.',
    image: '/images/african-student.webp',
    category: 'Study Abroad',
    date: 'Oct 5, 2025',
    link: '/blog/scholarships-canada',
  },
  {
    title: 'Vocational Certifications That Boost Global Employability',
    excerpt: 'Discover hands-on training programs that lead to high-demand careers abroad.',
    image: '/images/global-emp.webp',
    category: 'Vocational Training',
    date: 'Sep 28, 2025',
    link: '/blog/vocational-certifications',
  },
  {
    title: 'How Fatima B. Landed a Tech Job in Germany',
    excerpt: 'A Flyrunz success story: from Nigeria to Berlin in 6 months.',
    image: '/images/techjob.webp',
    category: 'Success Stories',
    date: 'Sep 20, 2025',
    link: '/blog/fatima-success-story',
  },
];

const BlogCenter = () => {
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
    <section className="bg-white py-16 px-6 md:px-20" id="blog">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          Flyrunz Blog & Resource Center
        </h2>
        <p className="text-gray-700 mb-10">
          Expert insights, global opportunities, and real stories to guide your journey.
        </p>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.a
              key={post.title}
              href={post.link}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="block bg-blue-50 rounded-xl shadow hover:shadow-lg transition duration-300 text-left overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <span className="text-xs text-blue-600 font-semibold uppercase">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-gray-800 mt-2 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogCenter;
