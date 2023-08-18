import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CustomCanvasLink } from "@/utils/hooks/routerCustom";
import styled from "@/utils/styled";
import { useRouter } from "next/router";

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
            className={`btn-nav-logo ${
              bgNav
                ? `btn-nav-logo-dark`
                : `${
                    isOpen
                      ? `${
                          router.pathname === "/"
                            ? "nav-logo-dark btn-nav-logo-dark"
                            : "nav-logo-dark btn-nav-logo-dark"
                        }`
                      : `${
                          router.pathname === "/"
                            ? "nav-logo-light"
                            : "nav-logo-dark btn-nav-logo-dark"
                        }`
                  } `
            }`}
          >
            Ari Sandika
          </Link>
          <button
            className={`button-circle hover:scale-105 ${
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
            <span className={`text-sideline`}>&nbsp;</span>
          </div>
          <div className="canvas-link-container space-y-3">
            <CustomCanvasLink href="/" title="Home" toggle={handleClick} />
            <CustomCanvasLink
              href="/projects"
              title="Projects"
              toggle={handleClick}
            />
            <CustomCanvasLink
              href="/about"
              title="About"
              toggle={handleClick}
            />
            <CustomCanvasLink
              href="/contact"
              title="Contact"
              toggle={handleClick}
            />
          </div>
          <div className={`text-canvas`}>
            Social
            <span className={`text-sideline`}>&nbsp;</span>
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
