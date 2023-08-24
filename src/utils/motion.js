// export const navVariants = {
//   hidden: {
//     opacity: 0,
//     y: -50,
//     transition: {
//       type: "spring",
//       stiffness: 300,
//       damping: 140,
//     },
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       stiffness: 80,
//       delay: 0.4,
//     },
//   },
// };

export const buttonVariants = {
  hover: {
    backgroundPosition: "top",
    x: [0, -2, 2, -2, 2, 0],
    transition: {
      duration: 0.3,
    },
  },
};

export const leftToRightVariants = {
  initial: { opacity: 0, x: -100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.8,
      type: "spring",
      stiffness: 10,
    },
  },
};

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 80 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedLeftToRight = ({ children, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
      transition={{ duration: 0.9, delay: delay || 0 }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRightToLeft = ({ children, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
      transition={{ duration: 0.9, delay: delay || 0 }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedTopToBottom = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const isMobileView = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: isMobileView ? 1 : 0, y: isMobileView ? 0 : -100 }} // Adjust initial y based on mobile view
      animate={{
        opacity: inView ? 1 : isMobileView ? 1 : 0,
        y: inView ? 0 : isMobileView ? 0 : -30,
      }} 
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export {
  AnimatedSection,
  AnimatedLeftToRight,
  AnimatedRightToLeft,
  AnimatedTopToBottom,
};
