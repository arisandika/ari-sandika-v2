import Link from "next/link";
import { CustomButton } from "../../Button/buttonCustom";
import {
  AnimatedLeftToRight,
  AnimatedRightToLeft,
  AnimatedSection,
} from "@/utils/motion";

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
            <AnimatedLeftToRight>
              I recognize that my path in web development is just beginning. I
              am devoted to continual exploration and skill enhancement,
              committed to staying at the forefront of emerging technologies.
            </AnimatedLeftToRight>
            <div className="grid-4">
              <AnimatedRightToLeft>
                <Link href="/about">
                  <CustomButton>More about me</CustomButton>
                </Link>
              </AnimatedRightToLeft>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContent;
