import "./styles.css";
import SocialButton from "../../common/social_buttons/SocialButton";
import logo from "../../../assets/name_logo.svg";
import { socials } from "../../common/data";

const Footer = () => {
  // Sub components

  const SocialButtons = () => {
    return (
      <div className="footer_row2-social">
        {socials.map((social) => (
          <SocialButton href={social.link} class={social.fontAwesomeClass} />
        ))}
      </div>
    );
  };

  const FooterHeader = () => {
    return (
      <div className="footer_header">
        <h1>Gaurav Jayasawal</h1>
        <h3>
          <a href="mailto:jgaurav6@gmail.com">jgaurav6@gmail.com</a>
        </h3>
        <h4>
          I am a full stack developer looking to get hired in May 2019. Leave me
          an email if you want me in your development team.
        </h4>
      </div>
    );
  };

  const FooterLogoAndLinks = () => {
    return (
      <div className="footer_row2">
        <div className="footer_row2-logo">
          <img src={logo} width="150px" alt="" />
        </div>
        <div className="footer_row2-links">
          <div className="footer_row2-links--container">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
          </div>
        </div>
        <SocialButtons />
      </div>
    );
  };

  const FooterDivider = () => {
    return (
      <div className="footer_row3">
        <hr id="footer-hr" />
      </div>
    );
  };

  const FooterCopyrightDeclaration = () => {
    return (
      <div className="footer_row4">
        <h4>Handcrafted and developed by me © 2018 Gaurav Jayasawal.</h4>
        <h5>Made with React JS</h5>
      </div>
    );
  };

  return (
    <div className="footer">
      <FooterHeader />
      <FooterLogoAndLinks />
      <FooterDivider />
      <FooterCopyrightDeclaration />
    </div>
  );
};

export default Footer;
