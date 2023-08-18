import { FooterButton } from "../Button/buttonCustom";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div />
        <div className="section-content">
          <div className="content">
            <div className="text-content">
              <div className="figure" />
              <p>Do you have any ideas?</p>
            </div>
            <p>Let&apos;s start a project together</p>
          </div>
          <div className="footer-button-container">
            <a href="mailto:arisndk36@gmail.com" target="_blank">
              <FooterButton>arisndk36@gmail.com</FooterButton>
            </a>
            <a href="https://web.whatsapp.com/send/?phone=6288210508008&text&type=phone_number&app_absent=0" target="_blank">
              <FooterButton>+ 62 882 1050 8008</FooterButton>
            </a>
          </div>
        </div>
        <div className="footer-end">
          <div className="text-footer-end">
            <p>Version</p>
            <span>© 2023 Ari Sandika. Based in Tangerang</span>
          </div>
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
        </div>
      </div>
    </>
  );
};

export default Footer;
