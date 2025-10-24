import { useEffect, lazy } from 'react';
import { motion } from 'framer-motion';
import LazySection from '../components/layout/LazySection';

// Preload HeroSection for faster initial render
import('../components/homepage/HeroSection');

// Lazy-loaded components
const HeroSection = lazy(() => import('../components/homepage/HeroSection'));
const Inquiry = lazy(() => import('../components/homepage/Inquiry'));
const FeaturedPrograms = lazy(() => import('../components/homepage/FeaturedPrograms'));
const PathfinderTool = lazy(() => import('../components/homepage/PathfinderTool'));
const ImpactTracker = lazy(() => import('../components/homepage/ImpactTracker'));
const Testimonials = lazy(() => import('../components/homepage/Testimonials'));
const BlogList = lazy(() => import('../components/BlogList'));

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
      <LazySection
        component={HeroSection}
        id="hero"
        fallback={<div className="text-center py-10">Loading Hero...</div>}
      />
      <LazySection
        component={Inquiry}
        id="inquiry"
        fallback={<div className="text-orange-500 text-center py-10">Loading Inquiry Form...</div>}
      />
      <LazySection
        component={FeaturedPrograms}
        id="programs"
        fallback={<div className="text-center py-10">Loading Programs...</div>}
      />
      <LazySection
        component={PathfinderTool}
        id="pathfinder"
        fallback={<div className="text-center py-10">Loading Pathfinder Tool...</div>}
      />
      <LazySection
        component={ImpactTracker}
        id="impact"
        fallback={<div className="text-center py-10">Loading Impact Tracker...</div>}
      />
      <LazySection
        component={Testimonials}
        id="testimonials"
        fallback={<div className="text-center py-10">Loading Testimonials...</div>}
      />
      <LazySection
        component={BlogList}
        id="blog"
        fallback={<div className="text-center py-10">Loading Blog Posts...</div>}
      />
    </motion.div>
  );
};

export default Home;
