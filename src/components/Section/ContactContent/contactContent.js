import AnimatedSection from "@/utils/motion";
import React from "react";

const ContactContent = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-text">
          <AnimatedSection>Send me a massage</AnimatedSection>
        </div>
        <a href="mailto:arisndk36@gmail.com" target="_blank">
          <AnimatedSection>
            arisndk36
            <br />
            @gmail.com
          </AnimatedSection>
        </a>
      </div>
      <div className="contact-container">
        <div className="contact-text">
          <AnimatedSection>Or connect with me on socials</AnimatedSection>
        </div>
        <a href="https://www.instagram.com/arisndka/" target="_blank">
          <AnimatedSection>Instagram</AnimatedSection>
        </a>
        <a href="https://github.com/arisandika" target="_blank">
          <AnimatedSection>Github</AnimatedSection>
        </a>
        <a href="https://www.linkedin.com/in/ari-sandika/" target="_blank">
          <AnimatedSection>Linkedin</AnimatedSection>
        </a>
      </div>
    </>
  );
};

export default ContactContent;
