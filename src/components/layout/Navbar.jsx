import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // ✅ Added for animated CTA button

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'inquiry'];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeClick = () => {
    sessionStorage.setItem('scrollTarget', 'hero');
    window.location.href = '/';
  };
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md transition-shadow duration-300">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Tagline */}
        <div className="flex items-center gap-3">
          <img src="/images/logo.jpeg" alt="Flyrunz Logo" className="h-10 w-auto" />
          <span className="hidden md:inline-block text-sm text-blue-700 font-semibold">
            Empowering Global Journeys
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 items-center text-gray-700 font-medium tracking-wide">
          <li>
            <Link
              to="/"
              onClick={handleHomeClick}
              className="transition-all duration-300 hover:text-blue-700 hover:border-b-2 hover:border-blue-700"
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="transition-all duration-300 hover:text-blue-700 hover:border-b-2 hover:border-blue-700">
              About
            </Link>
          </li>
          <li>
            <Link to="/programs" className="transition-all duration-300 hover:text-blue-700 hover:border-b-2 hover:border-blue-700">
              Programs
            </Link>
          </li>
          <li>
            <Link to="/team" className="transition-all duration-300 hover:text-blue-700 hover:border-b-2 hover:border-blue-700">
              Meet the Team
            </Link>
          </li>
          <li>
            <Link to="/contact" className="transition-all duration-300 hover:text-blue-700 hover:border-b-2 hover:border-blue-700">
              Contact
            </Link>
          </li>

          {/* CTA Button */}
          <li>
            <motion.a
              href="#inquiry"
              whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white font-bold px-6 py-2 rounded-full shadow-xl transition duration-300 whitespace-nowrap"
            >
              Claim Your Global Opportunity
            </motion.a>
          </li>
          {/* CTA Button */}
        </ul>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-blue-700 bg-transparent focus:outline-none p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-6 transition-all duration-300 ease-in-out border-t border-blue-100 shadow-sm">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li>
              <Link to="/" onClick={handleHomeClick} className="block py-2 px-2 rounded hover:bg-blue-50 hover:text-blue-700 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-2 rounded hover:bg-blue-50 hover:text-blue-700 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/programs" className="block py-2 px-2 rounded hover:bg-blue-50 hover:text-blue-700 transition">
                Programs
              </Link>
            </li>
            <li>
              <Link to="/team" className="block py-2 px-2 rounded hover:bg-blue-50 hover:text-blue-700 transition">
                Meet the Team
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 px-2 rounded hover:bg-blue-50 hover:text-blue-700 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/inquiry"
                className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white font-bold px-6 py-2 rounded-full shadow-xl text-center hover:scale-105 hover:brightness-110 transition duration-300"
              >
                Claim Your Global Opportunity
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block text-center border-2 border-blue-700 text-blue-700 font-medium px-6 py-2 rounded-lg hover:bg-blue-50 transition duration-300"
              >
                Talk to an Advisor
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
