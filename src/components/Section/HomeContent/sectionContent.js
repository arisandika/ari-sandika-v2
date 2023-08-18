import React from "react";
import Link from "next/link";
import AnimatedSection from "@/utils/motion";
import { CustomButton } from "../../Button/buttonCustom";

const SectionContent = () => {
  return (
    <section className="container-section">
      <div className="grid-container">
        <div className="grid-1">
          <AnimatedSection>01/</AnimatedSection>
        </div>
        <div className="grid-2">
          <AnimatedSection>
            I&apos;m driven by a passion for innovation in every line of code.
            With unwavering determination, I craft modern solutions that reshape
            the digital realm.
          </AnimatedSection>
          <AnimatedSection>
            Dive into the realm of fluid layouts and adaptable designs. Witness
            how I&apos;ve brought responsiveness to life, ensuring seamless user
            interactions across devices of all sizes.
          </AnimatedSection>
          <div className="grid-3">
            <AnimatedSection>
              I recognize that my path in web development is just beginning. I
              am devoted to continual exploration and skill enhancement,
              committed to staying at the forefront of emerging technologies.
            </AnimatedSection>
            <div className="grid-4">
              <AnimatedSection>
                <Link href="/about">
                  <CustomButton>More about me</CustomButton>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContent;
