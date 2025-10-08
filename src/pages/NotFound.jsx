import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 text-center px-6"
    >
      <img
        src="/images/flyrunzicon.png"
        alt="Flyrunz Logo"
        className="h-20 w-20 mb-6 animate-pulse"
      />
      <h1 className="text-6xl font-extrabold text-blue-700 mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-6 max-w-md">
        The page you're looking for doesn't exist or is still under construction.
        But your global journey doesn’t have to stop here.
      </p>
      <Link
        to="/"
        className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white font-bold px-6 py-2 rounded-full shadow-xl hover:scale-105 hover:brightness-110 transition duration-300"
      >
        Return to Homepage
      </Link>
    </motion.div>
  );
};

export default NotFound;
