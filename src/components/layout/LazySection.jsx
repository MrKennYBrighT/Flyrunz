import { Suspense } from 'react';
import { motion } from 'framer-motion';

const LazySection = ({ component: Component, id }) => (
  <Suspense fallback={null}>
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
