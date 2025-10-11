import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Inquiry = () => {
  const [category, setCategory] = useState('');
  const [destination, setDestination] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('Category', category);
    formData.append('Destination', destination);
    formData.append('Email', email);
    formData.append('Phone', phone);
    formData.append(
      'Message',
      `Inquiry for ${category} in ${destination}. Contact via email: ${email}, phone: ${phone}.`
    );

    try {
      const response = await fetch('https://formspree.io/f/xldplznv', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        setStatus('✅ Inquiry sent successfully! We’ll get back to you shortly.');
        setCategory('');
        setDestination('');
        setEmail('');
        setPhone('');
      } else {
        setStatus('❌ Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('❌ Failed to send inquiry. Check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-blue-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="w-full">
          <img
            src="/images/student-consultation.jpg"
            alt="Student receiving consultation"
            className="w-full rounded-xl shadow-lg object-cover aspect-[4/3] transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Form Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
            Find Your Perfect Travel or Study Opportunity
          </h2>
          <p className="text-gray-700 mb-6">
            Select your interest and destination. We’ll reach out with tailored options.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-4">
              {/* Updated Dropdown: Category */}
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-blue-50 border border-blue-200 px-3 py-2 rounded w-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled hidden>Categories</option>
                <option value="Study Program">Study Program</option>
                <option value="Visa Application">Visa Application</option>
                <option value="Work + Travel">Work + Travel</option>
                <option value="Internship / Stipend">Internship / Stipend</option>
                <option value="Tour Packages">Tour Packages</option>
                <option value="Dependent / Family Visa">Dependent / Family Visa</option>
                <option value="Book Consultation">Book Consultation</option>
              </select>

              {/* Updated Dropdown: Destination */}
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="bg-blue-50 border border-blue-200 px-3 py-2 rounded w-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled hidden>Country</option>
                <option value="Poland">Poland</option>
                <option value="Malta">Malta</option>
                <option value="Spain">Spain</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Dubai">Dubai</option>
                <option value="Schengen (EU)">Schengen (EU)</option>
              </select>

              {/* Updated Email Field */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="bg-blue-50 border border-blue-200 px-3 py-2 rounded w-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              {/* Updated Phone Field */}
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Your Phone Number"
                className="bg-blue-50 border border-blue-200 px-3 py-2 rounded w-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              {/* Centered Animated Button */}
              <div className="flex justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 0 0.5rem rgba(29, 78, 216, 0.6)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    disabled={!category || !destination || !email || !phone || isSubmitting}
                    style={{
                      background: 'linear-gradient(to right, #1D4ED8, #2563EB)',
                      color: '#FFFFFF',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: category && destination && email && phone ? 'pointer' : 'not-allowed',
                      opacity: category && destination && email && phone ? 1 : 0.6,
                      fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {isSubmitting ? (
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                        style={{
                          width: '20px',
                          height: '20px',
                          border: '3px solid #fff',
                          borderTop: '3px solid transparent',
                          borderRadius: '50%',
                          margin: '0 auto',
                        }}
                      />
                    ) : (
                      '📩 Make Inquiry '
                    )}
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </form>

          {status && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-center text-sm text-green-700 font-medium"
            >
              {status}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Inquiry;
