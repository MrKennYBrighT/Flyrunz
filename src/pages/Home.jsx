import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import HeroSection from '../components/homepage/HeroSection';
import Inquiry from '../components/homepage/Inquiry';
import AboutFlyrunz from '../components/homepage/AboutFlyrunz';
import FeaturedPrograms from '../components/homepage/FeaturedPrograms';
import PathfinderTool from '../components/homepage/PathfinderTool';
import ImpactTracker from '../components/homepage/ImpactTracker';
import Testimonials from '../components/homepage/Testimonials';
import MeetTheTeam from '../components/homepage/MeetTheTeam';
import Partners from '../components/homepage/Partners';
import BlogCenter from '../components/homepage/BlogCenter';
import ContactSupport from '../components/homepage/ContactSupport';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <PageWrapper>
        <HeroSection />
        <Inquiry />
        <AboutFlyrunz />
        <FeaturedPrograms />
        <PathfinderTool />
        <ImpactTracker />
        <Testimonials />
        <MeetTheTeam />
        <Partners />
        <BlogCenter />
        <ContactSupport />
      </PageWrapper>
    </motion.div>
  );
};

export default Home;
