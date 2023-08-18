import React, { useState, useRef } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";
import Link from "next/link";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import AnimatedSection from "@/utils/motion";
import { CustomButton } from "../../Button/buttonCustom";
import data from "../../../utils/data";

function RecentProjects() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");
  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  const mouseXPosition = mouse.x !== null ? mouse.clientX : 0;
  const mouseYPosition = mouse.y !== null ? mouse.clientY : 0;

  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#ffffff00",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    project: {
      opacity: 1,
      backgroundColor: "#70FF4D",
      color: "#000",
      height: 65,
      width: 65,
      fontSize: "14px",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  const projectEnter = () => {
    setCursorText("View");
    setCursorVariant("project");
  };

  const projectLeave = () => {
    setCursorText("");
    setCursorVariant("default");
  };

  return (
    <section className="container-section" ref={ref}>
      <div className="grid-container-2">
        <AnimatedSection>02/</AnimatedSection>
        <AnimatedSection>
          Recent <br /> Work
        </AnimatedSection>
        <AnimatedSection>
          Creative <br /> Development
        </AnimatedSection>
      </div>
      {data.map((project, index) => (
        <div className="grid-project" key={index}>
          <motion.div
            variants={variants}
            className="circle"
            animate={cursorVariant}
            transition={spring}
          >
            <span className="cursorText">{cursorText}</span>
          </motion.div>
          <Link href={`./${project.href}`}>
            <ParallaxProvider>
              <ParallaxBanner
                layers={[
                  { image: project.imageUrl, speed: -20 },
                  { image: project.imageUrl, speed: -10 },
                ]}
                className="overlay-container"
                onMouseEnter={projectEnter}
                onMouseLeave={projectLeave}
              >
                <div className="image-overlay">
                  <span className="cursorText">{cursorText}</span>
                </div>
              </ParallaxBanner>
            </ParallaxProvider>
          </Link>
          <div className="card-project">
            <div className="card-project-col">
              <div className="card-project-title">
                <AnimatedSection>{project.title}</AnimatedSection>
              </div>
              <div className="card-project-flex">
                <AnimatedSection>{project.category}</AnimatedSection>
                <div className="md:hidden">
                  <AnimatedSection>{project.year}</AnimatedSection>
                </div>
              </div>
            </div>
            <div className="card-project-desc">
              <AnimatedSection>{project.desc}</AnimatedSection>
            </div>
            <div className="card-project-year">
              <AnimatedSection>{project.year}</AnimatedSection>
            </div>
          </div>
        </div>
      ))}
      <div className="more-project-container">
        <AnimatedSection>
          <Link href="/projects">
            <CustomButton>More Projects</CustomButton>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default RecentProjects;
