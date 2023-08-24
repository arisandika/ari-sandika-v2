import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CustomCanvasLink } from "@/utils/hooks/routerCustom";
import styled from "@/utils/styled";
import { useRouter } from "next/router";
import { AnimatedRi, AnimatedLeftToRight, AnimatedLeftTo, AnimatedLeftToRightRightghtToLeftAnimatedLeftToRight } from "@/utils/motion";

const ButtonNav = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const [bgNav, setBgNav] = useState(false);

  useEffect(() => {
    const changeBg = () => {
      setBgNav(window.scrollY >= 300);
    };

    window.addEventListener("scroll", changeBg);

    return () => {
      window.removeEventListener("scroll", changeBg);
    };
  }, []);

  return (
    <>
      <div className={`btn-nav-container`}>
        <div className={`btn-nav`}>
          <Link
            href="/"
            className={`btn-nav-logo btn-nav-logo-dark 
            `}
          >
            Ari Sandika
          </Link>
          <button
            className={`button-circle ${
              isOpen ? `button-cirle-closed hover:rotate-90` : ""
            }`}
            onClick={handleClick}
          >
            <span
              className={`button-top ${
                isOpen ? `${styled.buttonTopOpen}` : `${styled.buttonTopClose}`
              }`}
            ></span>
            <span
              className={`button-middle ${
                isOpen ? `${styled.buttonMidOpen}` : `${styled.buttonMidClose}`
              }`}
            ></span>
            <span
              className={`button-bottom ${
                isOpen
                  ? `${styled.buttonBottomOpen}`
                  : `${styled.buttonBottomClose}`
              }`}
            ></span>
          </button>
        </div>
      </div>
      <div>
        <div
          className={`canvas ${isOpen ? `canvas-open` : `canvas-close`}
          }`}
        >
          <div className={`text-canvas`}>
            Menu
            <span className={`text-sideline`} />
          </div>
          <div className="canvas-link-container space-y-3">
            <AnimatedLeftToRight delay={0.1}>
              <CustomCanvasLink href="/" title="Home" toggle={handleClick} />
            </AnimatedLeftToRight>
            <AnimatedLeftToRight delay={0.2}>
              <CustomCanvasLink
                href="/projects"
                title="Projects"
                toggle={handleClick}
              />
            </AnimatedLeftToRight>
            <AnimatedLeftToRight delay={0.3}>
              <CustomCanvasLink
                href="/about"
                title="About"
                toggle={handleClick}
              />
            </AnimatedLeftToRight>
            <AnimatedLeftToRight delay={0.4}>
              <CustomCanvasLink
                href="/contact"
                title="Contact"
                toggle={handleClick}
              />
            </AnimatedLeftToRight>
          </div>
          <div className={`text-canvas`}>
            Social
            <span className={`text-sideline`} />
          </div>
          <div className={`link-social`}>
            <a href="https://www.instagram.com/arisndka/" target="_blank">
              Instagram
            </a>
            <a href="https://github.com/arisandika" target="_blank">
              Github
            </a>
            <a href="https://www.linkedin.com/in/ari-sandika/" target="_blank">
              Linkedin
            </a>
            <a href="#">Resume</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonNav;
