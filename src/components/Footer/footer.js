import {
  AnimatedLeftToRight,
  AnimatedRightToLeft,
  AnimatedSection,
} from "@/utils/motion";
import { FooterButton } from "../Button/buttonCustom";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div />
        <div className="section-content">
          <div className="content">
            <div className="text-content">
              <AnimatedSection>
                <div className="figure" />
              </AnimatedSection>
              <AnimatedSection>Do you have any ideas?</AnimatedSection>
            </div>
            <AnimatedSection>
              Let&apos;s start a project together
            </AnimatedSection>
          </div>
          <AnimatedSection>
            <div className="underline-light" />
          </AnimatedSection>
          <div className="footer-button-container">
            <a href="mailto:arisndk36@gmail.com" target="_blank">
              <AnimatedSection>
                <FooterButton>arisndk36@gmail.com</FooterButton>
              </AnimatedSection>
            </a>
            <a
              href="https://web.whatsapp.com/send/?phone=6288210508008&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <AnimatedSection>
                <FooterButton>+ 62 882 1050 8008</FooterButton>
              </AnimatedSection>
            </a>
          </div>
        </div>
        <div className="footer-end">
          <AnimatedLeftToRight>
            <div className="text-footer-end">
              <p>Version</p>
              <span>© 2023 Ari Sandika. Based in Tangerang</span>
            </div>
          </AnimatedLeftToRight>
          <AnimatedRightToLeft>
            <div className="text-footer-end">
              <p>Social</p>
              <div className="social-footer">
                <a href="https://www.instagram.com/arisndka/" target="_blank">
                  Instagram
                </a>
                <a href="https://github.com/arisandika" target="_blank">
                  Github
                </a>
                <a
                  href="https://www.linkedin.com/in/ari-sandika/"
                  target="_blank"
                >
                  Linkedin
                </a>
                <a href="#">Resume</a>
              </div>
            </div>
          </AnimatedRightToLeft>
        </div>
      </div>
    </>
  );
};

export default Footer;
