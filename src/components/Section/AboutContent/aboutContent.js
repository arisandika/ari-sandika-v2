import {
  AnimatedLeftToRight,
  AnimatedRightToLeft,
  AnimatedSection,
} from "@/utils/motion";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

const AboutContent = () => {
  return (
    <>
      <div className="grid-about">
        <div className="about-number">
          <AnimatedSection>01/</AnimatedSection>
        </div>
        <div className="about-col">
          <AnimatedSection>
            Passionate <br /> Creative <br />
            Developer
          </AnimatedSection>
          <ParallaxProvider>
            <AnimatedSection>
              <ParallaxBanner
                layers={[
                  { image: "/images/profile/ari-figure.png", speed: -20 },
                  { image: "/images/profile/ari-figure.png", speed: -10 },
                ]}
                className="about-img-1"
              ></ParallaxBanner>
            </AnimatedSection>
          </ParallaxProvider>
          <div className="text-about">
            <AnimatedSection>
              I&apos;m Ari Sandika – a passionate junior front-end and web
              designer on a journey of creativity and learning. Currently
              pursuing my studies in Computer Science at Universitas Pamulang,
              I&apos;ve been immersed in the world of web development and design
              for over a year.
            </AnimatedSection>
          </div>
          <div className="text-about">
            <AnimatedSection>
              My goal is to make every digital interaction an enjoyable and
              seamless experience. I believe that the web should be a place
              where users effortlessly connect with content, and that&apos;s why
              my designs prioritize simplicity, minimalism, elegance, and
              information.
            </AnimatedSection>
          </div>
        </div>
      </div>
      <div className="grid-services">
        <div className="services-number">
          <AnimatedSection>02/</AnimatedSection>
        </div>
        <div className="services-col">
          <AnimatedSection>Services</AnimatedSection>
          <div className="text-services">
            <h3 className="text-base">
              <AnimatedSection>Front End Development</AnimatedSection>
            </h3>
            <AnimatedSection>
              I specialize in constructing scalable websites from scratch. I
              ensure a seamless alignment with the design, putting a spotlight
              on micro animations, transitions, and interactive elements.
            </AnimatedSection>
            <AnimatedSection>
              <div className="underline"/>
            </AnimatedSection>
          </div>
          <div className="text-services">
            <h3 className="text-base">
              <AnimatedSection>Design</AnimatedSection>
            </h3>
            <AnimatedSection>
              Backed by a robust history of designing websites and applications,
              I bring forth impactful and user-centric digital designs. I firmly
              believe that a strong company branding forms the bedrock of every
              successful website.
            </AnimatedSection>
            <AnimatedSection>
              <div className="underline" />
            </AnimatedSection>
          </div>
        </div>
      </div>
      <div className="grid-personal">
        <div className="personal-number">
          <AnimatedSection>03/</AnimatedSection>
        </div>
        <div className="personal-col">
          <AnimatedSection>Personal Interest</AnimatedSection>
          <div className="grid-personal-2">
            <ParallaxProvider>
              <AnimatedLeftToRight>
                <ParallaxBanner
                  layers={[
                    { image: "/images/profile/ari-music.jpg", speed: -20 },
                    { image: "/images/profile/ari-music.jpg", speed: -10 },
                  ]}
                  className="personal-img-1"
                ></ParallaxBanner>
              </AnimatedLeftToRight>
            </ParallaxProvider>
            <AnimatedRightToLeft>
              Beyond the screen, I&apos;m a music enthusiast who has even delved
              into digital music production. This artistic side of me fuels my
              creative approach to design, making every project an opportunity
              to craft interactive and problem-solving solutions.
            </AnimatedRightToLeft>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
