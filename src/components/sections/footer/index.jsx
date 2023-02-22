import "./styles.css";
import FooterSocialButton from "./footer_social_buttons";
import logo from "../../../assets/name_logo.svg";

const Footer = () => {
  return (
    <div className="footer">
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
        <div className="footer_row2-social">
          <div className="footer_row2-social--container">
            <FooterSocialButton
              href="mailto:jgaurav6@gmail.com"
              class="far fa-envelope"
            />
            <FooterSocialButton
              href="https://www.linkedin.com/in/gauravjj/"
              class="fab fa-linkedin-in"
            />
            <FooterSocialButton
              href="https://www.instagram.com/gauravjj/"
              class="fab fa-instagram"
            />
            <FooterSocialButton
              href="https://github.com/jgaurav6"
              class="fab fa-github"
            />
          </div>
        </div>
      </div>
      <div className="footer_row3">
        <hr id="footer-hr" />
      </div>
      <div className="footer_row4">
        <h4>Handcrafted and developed by me © 2018 Gaurav Jayasawal.</h4>
        <h5>Made with React JS</h5>
      </div>
    </div>
  );
};

export default Footer;
