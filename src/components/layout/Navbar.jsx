import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionButton = ({ bg, text, label }) => (
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
    whileTap={{ scale: 0.95 }}
    style={buttonStyle(bg, text)}
    aria-label={label}
  >
    {label}
  </motion.button>
);

const MotionOutlineButton = ({ border, label }) => (
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
    whileTap={{ scale: 0.95 }}
    style={outlineButtonStyle(border)}
    aria-label={label}
  >
    {label}
  </motion.button>
);

const buttonStyle = (bgColor, textColor) => ({
  backgroundColor: bgColor,
  color: textColor,
  padding: "12px 24px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  transition: "background-color 0.3s",
  fontSize: "clamp(0.9rem, 2vw, 1rem)",
});

const outlineButtonStyle = (borderColor) => ({
  backgroundColor: "transparent",
  color: borderColor,
  padding: "12px 24px",
  borderRadius: "8px",
  border: `2px solid ${borderColor}`,
  cursor: "pointer",
  transition: "all 0.3s",
  fontSize: "clamp(0.9rem, 2vw, 1rem)",
});
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

  const handleLinkClick = () => setIsOpen(false); // DRY helper

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md transition-shadow duration-300">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/images/logo.jpeg" alt="Flyrunz Logo" className="h-10 w-auto" />
          <span className="hidden md:inline-block text-sm text-blue-700 font-semibold">
            Empowering Global Journeys
          </span>
        </div>

        <ul className="hidden md:flex gap-8 items-center text-gray-700 font-medium tracking-wide">
          <li><Link to="/" onClick={handleHomeClick} className="transition-all duration-300 hover:text-blue-700 hover:border-b-2 hover:border-blue-700">Home</Link></li>
          <li><Link to="/about" className="transition-all duration-300 hover:text-blue-700 hover:border-b-2 hover:border-blue-700">About</Link></li>
          <li><Link to="/programs" className="transition-all duration-300 hover:text-blue-700 hover:border-b-2 hover:border-blue-700">Programs</Link></li>
          <li><Link to="/team" className="transition-all duration-300 hover:text-blue-700 hover:border-b-2 hover:border-blue-700">Meet the Team</Link></li>
          <li><Link to="/contact" className="transition-all duration-300 hover:text-blue-700 hover:border-b-2 hover:border-blue-700">Contact</Link></li>
          <li>
            <a href="#inquiry">
              <MotionButton bg="#1D4ED8" text="#FFFFFF" label="Claim Your Global Opportunity" />
            </a>
          </li>
        </ul>

        {/* ✅ Styled Hamburger Button */}
       <button
  aria-label="Toggle menu"
  onClick={() => setIsOpen(!isOpen)}
  className="md:hidden p-2 rounded border-2 border-blue-700 bg-white focus:outline-none hover:bg-blue-50 transition"
  style={{ backgroundColor: '#ffffff' }} // force white background
>
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ backgroundColor: 'transparent' }} // force no fill
  >
    <path
      d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
      stroke="#1D4ED8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</button>

      </nav>
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-6 transition-all duration-300 ease-in-out border-t border-blue-100 shadow-sm">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li><Link to="/" onClick={() => { handleHomeClick(); handleLinkClick(); }} className="block py-2 px-2 rounded hover:bg-blue-50 hover:text-blue-700 transition">Home</Link></li>
            <li><Link to="/about" onClick={handleLinkClick} className="block py-2 px-2 rounded hover:bg-blue-50 hover:text-blue-700 transition">About</Link></li>
            <li><Link to="/programs" onClick={handleLinkClick} className="block py-2 px-2 rounded hover:bg-blue-50 hover:text-blue-700 transition">Programs</Link></li>
            <li><Link to="/team" onClick={handleLinkClick} className="block py-2 px-2 rounded hover:bg-blue-50 hover:text-blue-700 transition">Meet the Team</Link></li>
            <li><Link to="/contact" onClick={handleLinkClick} className="block py-2 px-2 rounded hover:bg-blue-50 hover:text-blue-700 transition">Contact</Link></li>
            <li>
              <a href="#inquiry" onClick={handleLinkClick}>
                <MotionButton bg="#1D4ED8" text="#FFFFFF" label="Claim Your Global Opportunity" />
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleLinkClick}>
                <MotionOutlineButton border="#1D4ED8" label="Talk to an Advisor" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
