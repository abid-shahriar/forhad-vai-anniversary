import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
}

const MotionWrapper = ({ children }: Props) => {
  return (
    <motion.div
      exit={{ opacity: 0, animationDuration: '5s', animationDelay: '10s' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
