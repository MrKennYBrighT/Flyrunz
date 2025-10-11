import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-10 px-6 text-sm text-gray-600">
      <div className="max-w-4xl mx-auto">
        {/* CTA */}
        <h3 className="text-lg font-semibold text-blue-700 mb-2">
          Ready to start your journey?
        </h3>
        <p className="mb-6">
          Your Gateway to Global Opportunities
Empowering students, professionals, and institutions to achieve their international goals.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center flex-wrap gap-6 mb-6 text-gray-700">
          {/* WhatsApp */}
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/2347060583041"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-green-600 transition"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 32 32">
              <path d="M16 0C7.163 0 0 7.163 0 16a15.9 15.9 0 002.203 8.078L0 32l8.203-2.156A15.9 15.9 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.6c-3.684 0-7.078-1.203-9.894-3.278l-.7-.5-4.875 1.281 1.3-4.75-.5-.725A13.6 13.6 0 012.4 16c0-7.5 6.1-13.6 13.6-13.6S29.6 8.5 29.6 16 23.5 29.6 16 29.6zm7.6-10.7c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.5-.2-.7.2-.2.4-.8 1.2-1 1.4-.2.2-.4.3-.8.1-.4-.2-1.5-.6-2.8-1.9-1-1-1.8-2.2-2-2.6-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.5-.6.2-.2.1-.4 0-.6-.1-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9c0 1.7 1.2 3.3 1.4 3.5.2.2 2.3 3.5 5.6 4.9.8.3 1.4.5 1.9.6.8.3 1.6.2 2.2.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.7-.5z" />
            </svg>
          </motion.a>

          {/* Email */}
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:flyrunztravels@gmail.com"
            aria-label="Email"
            className="hover:text-blue-700 transition"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z" />
            </svg>
          </motion.a>

          {/* Call */}
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+2349114387785"
            aria-label="Call"
            className="hover:text-gray-800 transition"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22.24 1.76 13.93 1.76 3.5a1 1 0 011-1H6.26a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" />
            </svg>
          </motion.a>
          {/* LinkedIn */}
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/company/flyrunz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700 transition"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.7-1.3 2.4-2.7 5-2.7 5.3 0 6.3 3.5 6.3 8v8.5h-5V17c0-2.6-.1-6-3.7-6-3.7 0-4.3 2.9-4.3 5.8v7.2h-5V8z" />
            </svg>
          </motion.a>

          {/* Instagram */}
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.instagram.com/flyrunztravels?utm_source=qr&igsh=eHFjd3g4eTh1YTFv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-600 transition"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5-.2.6-.5 1-.9 1.5-.5.5-.9.8-1.5 1-.5.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5.2-.6.5-1 .9-1.5.5-.5.9-.8 1.5-1 .5-.2 1.3-.4 2.5-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.8.4-1.2.8-.4.4-.6.7-.8 1.2-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.8.8 1.2.4.4.7.6 1.2.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.8-.4 1.2-.8.4-.4.6-.7.8-1.2.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.8-.8-1.2-.4-.4-.7-.6-1.2-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zm0 4.3a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 1.8a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4zm5.6-2.2a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0z" />
            </svg>
          </motion.a>

          {/* Facebook */}
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.facebook.com/flyrunz?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-600 transition"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
            </svg>
          </motion.a>
        </div>

        {/* Legal & Links */}
        <p>&copy; {new Date().getFullYear()} Flyrunz Travel Consult. All rights reserved.</p>
        <p className="mt-2">
          Built on integrity, professionalism, and transparency.
        </p>
        <p className="mt-1">
          BN: 8720157 &nbsp; | &nbsp;
          <a
            href="https://www.flyrunz.com"
            className="text-blue-700 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.flyrunz.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
