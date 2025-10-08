import { motion } from 'framer-motion';
import { lazy } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import LazySection from '../components/layout/LazySection';

// Lazy-loaded components
const HeroSection = lazy(() => import('../components/homepage/HeroSection'));
const Inquiry = lazy(() => import('../components/homepage/Inquiry'));
const AboutFlyrunz = lazy(() => import('../components/homepage/AboutFlyrunz'));
const FeaturedPrograms = lazy(() => import('../components/homepage/FeaturedPrograms'));
const PathfinderTool = lazy(() => import('../components/homepage/PathfinderTool'));
const ImpactTracker = lazy(() => import('../components/homepage/ImpactTracker'));
const Testimonials = lazy(() => import('../components/homepage/Testimonials'));
const MeetTheTeam = lazy(() => import('../components/homepage/MeetTheTeam'));
const Partners = lazy(() => import('../components/homepage/Partners'));
const BlogCenter = lazy(() => import('../components/homepage/BlogCenter'));
const ContactSupport = lazy(() => import('../components/homepage/ContactSupport'));

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <PageWrapper>
        <LazySection component={HeroSection} id="hero" />
        <LazySection
          component={Inquiry}
          id="inquiry"
          fallback={<div className="text-orange-500 text-center py-10">Loading Inquiry Form...</div>}
        />
        <LazySection component={AboutFlyrunz} id="about" />
        <LazySection component={FeaturedPrograms} id="programs" />
        <LazySection component={PathfinderTool} id="pathfinder" />
        <LazySection component={ImpactTracker} id="impact" />
        <LazySection component={Testimonials} id="testimonials" />
        <LazySection
          component={MeetTheTeam}
          id="team"
          fallback={<div className="text-blue-500 text-center py-10">Loading Team Section...</div>}
        />
        <LazySection component={Partners} id="partners" />
        <LazySection component={BlogCenter} id="blog" />
        <LazySection component={ContactSupport} id="contact" />
      </PageWrapper>
    </motion.div>
  );
};

export default Home;
