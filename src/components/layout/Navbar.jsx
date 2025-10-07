import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'programs', 'inquiry', 'team', 'contact'];
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
          {[
            { id: 'hero', label: 'Home' },
            { id: 'about', label: 'About' }
          ].map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`relative transition-all duration-300 ${
                  activeSection === id
                    ? 'text-blue-700 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-blue-700'
                    : 'hover:text-blue-700 hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-gradient-to-r hover:after:from-blue-500 hover:after:to-blue-700'
                }`}
              >
                {label}
              </a>
            </li>
          ))}

          {/* Programs Dropdown */}
          <li className="relative group">
            <a
              href="#programs"
              className={`transition-all duration-300 ${
                activeSection === 'programs'
                  ? 'text-blue-700 border-b-2 border-blue-700'
                  : 'hover:text-blue-700 hover:border-b-2 hover:border-blue-700'
              }`}
            >
              Programs
            </a>
            <ul className="absolute hidden group-hover:flex flex-col bg-white shadow-lg mt-2 rounded-md w-56 text-sm z-50 animate-fade-in">
              {[
                { id: 'study-abroad', icon: '🇨🇦', label: 'Study Abroad' },
                { id: 'vocational', icon: '🛠️', label: 'Vocational Training' },
                { id: 'career', icon: '💼', label: 'Career Mobility' },
                { id: 'language', icon: '🗣️', label: 'Language Immersion' }
              ].map(({ id, icon, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-blue-50 transition"
                  >
                    {icon} {label}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          {/* Remaining Links */}
          {[
            { id: 'inquiry', label: 'Make Inquiry' },
            { id: 'team', label: 'Team' },
            { id: 'contact', label: 'Contact' }
          ].map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`relative transition-all duration-300 ${
                  activeSection === id
                    ? 'text-blue-700 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-blue-700'
                    : 'hover:text-blue-700 hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-gradient-to-r hover:after:from-blue-500 hover:after:to-blue-700'
                }`}
              >
                {label}
              </a>
            </li>
          ))}

          {/* CTA Button */}
          <li>
            <a
              href="https://wa.me/2349114387785"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white font-bold px-6 py-2 rounded-full shadow-xl hover:scale-105 hover:brightness-110 transition duration-300"
            >
              Claim Your Global Opportunity
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-blue-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-6 transition-all duration-300 ease-in-out">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'inquiry', label: 'Make Inquiry' },
              { id: 'team', label: 'Team' },
              { id: 'contact', label: 'Contact' }
            ].map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-blue-700">
                  {label}
                </a>
              </li>
            ))}
            <li>
              <details className="group">
                <summary className="cursor-pointer hover:text-blue-700">
                  Programs
                </summary>
                <ul className="pl-4 mt-2 text-sm">
                  {[
                    { id: 'study-abroad', icon: '🇨🇦', label: 'Study Abroad' },
                    { id: 'vocational', icon: '🛠️', label: 'Vocational Training' },
                    { id: 'career', icon: '💼', label: 'Career Mobility' },
                    { id: 'language', icon: '🗣️', label: 'Language Immersion' }
                  ].map(({ id, icon, label }) => (
                    <li key={id}>
                      <a href={`#${id}`} className="block py-1 hover:text-blue-700">
                        {icon} {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li>
              <a
                href="https://wa.me/2349114387785"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white font-bold px-6 py-2 rounded-full shadow-xl text-center hover:scale-105 hover:brightness-110 transition duration-300"
              >
                Claim Your Global Opportunity
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
