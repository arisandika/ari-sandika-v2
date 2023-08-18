import React from "react";
import { motion } from "framer-motion";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import HeaderContent from "./headerContent";
import ParallaxText from "./parralaxText";
import { headerVariants } from "@/utils/motion";

const Header = () => {
  return (
    <>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            { image: "/images/background/banner-img.jpg", speed: -20 },
            { image: "/images/background/banner-img.jpg", speed: -10 },
          ]}
          className="header-banner"
        >
          <HeaderContent />
          <motion.div
            initial="initial"
            animate="animate"
            variants={headerVariants}
          >
            <ParallaxText baseVelocity={5}>
              Front end web developer & Web Designer —{" "}
            </ParallaxText>
          </motion.div>
        </ParallaxBanner>
      </ParallaxProvider>
    </>
  );
};

export default Header;
