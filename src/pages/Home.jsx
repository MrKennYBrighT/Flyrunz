import { useEffect, lazy } from 'react';
import { motion } from 'framer-motion';
import LazySection from '../components/layout/LazySection';

// Lazy-loaded components
const HeroSection = lazy(() => import('../components/homepage/HeroSection'));
const Inquiry = lazy(() => import('../components/homepage/Inquiry'));
const FeaturedPrograms = lazy(() => import('../components/homepage/FeaturedPrograms'));
const PathfinderTool = lazy(() => import('../components/homepage/PathfinderTool'));
const ImpactTracker = lazy(() => import('../components/homepage/ImpactTracker'));
const Testimonials = lazy(() => import('../components/homepage/Testimonials'));
const Partners = lazy(() => import('../components/homepage/Partners'));
const BlogCenter = lazy(() => import('../components/homepage/BlogCenter'));

const Home = () => {
  useEffect(() => {
    const target = sessionStorage.getItem('scrollTarget');
    if (target) {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        sessionStorage.removeItem('scrollTarget');
      }
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <LazySection component={HeroSection} id="hero" />
      <LazySection
        component={Inquiry}
        id="inquiry"
        fallback={<div className="text-orange-500 text-center py-10">Loading Inquiry Form...</div>}
      />
      <LazySection component={FeaturedPrograms} id="programs" />
      <LazySection component={PathfinderTool} id="pathfinder" />
      <LazySection component={ImpactTracker} id="impact" />
      <LazySection component={Testimonials} id="testimonials" />
      <LazySection component={Partners} id="partners" />
      <LazySection component={BlogCenter} id="blog" />
    </motion.div>
  );
};

export default Home;
