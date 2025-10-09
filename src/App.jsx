import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Pages
import Home from './pages/Home';
import AboutFlyrunz from './pages/AboutFlyrunz';
import Programs from './pages/Programs'
import ContactSupport from './pages/ContactSupport';
import MeetTheTeam from './pages/MeetTheTeam';
import NotFound from './pages/NotFound';


// Layout
import PageWrapper from './components/layout/PageWrapper';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutFlyrunz /></PageWrapper>} />
        <Route path="/programs" element={<PageWrapper><Programs /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactSupport /></PageWrapper>} />
        <Route path="/team" element={<PageWrapper><MeetTheTeam /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 animate-gradient"
          >
            <motion.img
              src="/images/flyrunzicon.png"
              alt="Flyrunz Loading"
              className="h-20 w-20 mb-4"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-blue-700 font-semibold text-lg tracking-wide"
            >
              Preparing your global journey…
            </motion.p>
          </motion.div>
        ) : (
          <div className="flex flex-col min-h-screen bg-white text-gray-800">
            <Navbar />
            <div className="flex-grow flex flex-col">
              <AnimatedRoutes />
            </div>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
