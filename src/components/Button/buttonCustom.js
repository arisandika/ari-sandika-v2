import { motion, useAnimation } from "framer-motion";
import { buttonVariants } from "@/utils/motion";

const CustomButton = ({ children }) => {
  const controls = useAnimation();

  const handleMouseEnter = () => {
    controls.start("hover");
  };

  const handleMouseLeave = () => {
    controls.stop();
  };

  return (
    <div>
      <motion.button
        className={`button-primary`}
        variants={buttonVariants}
        whileHover="hover"
        animate={controls}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </motion.button>
    </div>
  );
};

const FooterButton = ({ children }) => {
  const controls = useAnimation();

  const handleMouseEnter = () => {
    controls.start("hover");
  };

  const handleMouseLeave = () => {
    controls.stop();
  };

  return (
    <div>
      <motion.button
        className={`button-footer-variant`}
        variants={buttonVariants}
        whileHover="hover"
        animate={controls}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </motion.button>
    </div>
  );
};

export { CustomButton, FooterButton };
