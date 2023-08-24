import React, { useState, useRef } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";
import Link from "next/link";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import data from "../../../utils/data";
import {
  AnimatedLeftToRight,
  AnimatedRightToLeft,
  AnimatedSection,
  leftToRightVariants,
} from "@/utils/motion";

function ProjectsContent() {
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
      backgroundColor: "#A7E92F",
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
    <section className="project-content-container" ref={ref}>
      <div className="grid-content-project-1">
        <AnimatedSection>01/</AnimatedSection>
        <AnimatedSection>Projects</AnimatedSection>
        <div className="content-grid">
          <AnimatedSection>
            A collection of projects I&apos;ve created in partnership with both
            individuals and groups.
          </AnimatedSection>
        </div>
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
          <Link
            href={`${project.href}`}
            target="_blank"
            className="project-image"
          >
            <ParallaxProvider>
              <AnimatedLeftToRight>
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
              </AnimatedLeftToRight>
            </ParallaxProvider>
          </Link>
          <div className="card-project">
            <div className="card-project-col">
              <div className="card-project-title">
                <AnimatedRightToLeft>{project.title}</AnimatedRightToLeft>
              </div>
              <div className="card-project-flex">
                <AnimatedRightToLeft>{project.category}</AnimatedRightToLeft>
                <div>
                  <AnimatedRightToLeft>{project.year}</AnimatedRightToLeft>
                </div>
              </div>
            </div>
            <div className="card-project-desc">
              <AnimatedRightToLeft>{project.desc}</AnimatedRightToLeft>
            </div>
            <div className="card-project-visit">
              <a href={`${project.href}`} target="_blank">
                <AnimatedRightToLeft>Visit Live →</AnimatedRightToLeft>
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProjectsContent;
