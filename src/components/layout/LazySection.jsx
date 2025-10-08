import { Suspense } from 'react';
import { motion } from 'framer-motion';

const LazySection = ({ component: Component, id, fallback }) => (
  <Suspense fallback={fallback || <div className="text-center py-10 text-blue-700">Loading...</div>}>
    <motion.div
      id={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Component />
    </motion.div>
  </Suspense>
);

export default LazySection;
