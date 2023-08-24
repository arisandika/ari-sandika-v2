import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import ParallaxText from "./parralaxText";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { AnimatedLeftToRight, AnimatedRightToLeft } from "@/utils/motion";

const HeaderContent = () => {
  return (
    <>
      <div className="hero-container">
        <div className="blank-space-1" />
        <div className="hero-content-1">
          <AnimatedLeftToRight>
            Hey there, I&apos;m Ari – <br /> I create and design website. <br />{" "}
            based in Tangerang
          </AnimatedLeftToRight>
        </div>
        <div className="hero-container-2">
          <div className="blank-space-2" />
          <div className="hero-content-2">
          </div>
        </div>
        <div className="blank-space-4" />
        <ParallaxText baseVelocity={5}>
          Front end web developer & Web Designer —{" "}
        </ParallaxText>
      </div>
    </>
  );
};

export default HeaderContent;
