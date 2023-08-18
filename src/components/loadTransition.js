import { motion } from "framer-motion";

const LoadTransition = () => {
  return (
    <>
      <motion.div
        className="slide-in flex justify-center items-center text-light text-6xl"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 1 }}
      ></motion.div>
      <motion.div
        className="slide-out flex justify-center items-center text-light text-6xl"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1 }}
      ></motion.div>
    </>
  );
};

export default LoadTransition;
