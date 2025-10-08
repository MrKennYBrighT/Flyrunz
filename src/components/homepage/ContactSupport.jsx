import { motion } from 'framer-motion';

const ContactSupport = () => {
  return (
    <section className="bg-blue-50 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-700 mb-6"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-700 mb-10"
        >
          Whether you're a student, professional, or institution, Flyrunz is here to guide you. Reach out to us anytime.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Head Office</h3>
            <p className="text-gray-700 mb-4">
              127 Alao Akala Way, Okebadan, Akobo, Ibadan, Oyo State
            </p>

            <h3 className="text-xl font-semibold text-blue-700 mb-2">Branch Office</h3>
            <p className="text-gray-700 mb-4">
              Joke Plaza, UI Area, Bodija, Ibadan, Oyo State
            </p>

            <h3 className="text-xl font-semibold text-blue-700 mb-2">Phone</h3>
            <p className="text-gray-700 mb-4">
              +234 911 438 7785<br />
              +234 706 058 3041
            </p>

            <h3 className="text-xl font-semibold text-blue-700 mb-2">Email</h3>
            <p className="text-gray-700 mb-4">contact@flyrunz.com</p>
          </div>

          <div className="flex flex-col items-center">
            <motion.img
              src="/images/adaravictor.jpeg"
              alt="Adara Victor - CEO"
              className="w-40 h-40 rounded-full object-cover mb-4 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-700 text-center text-sm"
            >
              Adara Victor, Lead Consultant & CEO of Flyrunz Travels. Your trusted path to global opportunities.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSupport;
