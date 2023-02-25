import "./styles.css";
import MyResume from "../../../assets/resume_2023.pdf";
import AboutImage from "../../../assets/about_image.png";
import { technologies } from "./data";

const About = () => {
  // Sub components

  const FamiliarTechnologies = () => {
    return (
      <div>
        <div className="NewAbout-component--contents__right-familiar_technologies">
          <h4>Technologies I am familiar with:</h4>
        </div>
        <div className="NewAbout-component--contents__right-description_buttons">
          {technologies.map((tech) => (
            <TechnologyButton name={tech} />
          ))}
        </div>
      </div>
    );
  };

  const AboutSectionImage = () => {
    return (
      <div className="NewAbout-component--content__left-image">
        <img src={AboutImage} width="100%" alt="" />
      </div>
    );
  };

  const TechnologyButton = (props) => {
    return <span className="TechnologyButton-component">{props.name}</span>;
  };

  const ButtonWithIcon = (props) => {
    return (
      <div className={props.styleClassName}>
        <a href={props.link} target="_blank">
          <div className="ButtonWithIcon-component">
            <div className="ButtonWithIcon-component--text">{props.value}</div>
            <div className="ButtonWithIcon-component--icon">
              <i className={props.icon} />
            </div>
          </div>
        </a>
      </div>
    );
  };

  const AboutDescription = () => {
    return (
      <div className="NewAbout-component--contents__right-description">
        <h3>
          Welcome to my portfolio website! I am a software engineer at Google,
          currently working on the Google Play Protect client team. With a
          passion for building secure and reliable software, I am proud to
          contribute to ensuring the safety of over 3 billion Android devices
          worldwide.
        </h3>
        <h3>
          When I'm not coding, you can find me on the football pitch, playing as
          a center forward. Football is probably the only thing I love more than
          programming. My love for the game extends to supporting my favorite
          club, Chelsea.
        </h3>
      </div>
    );
  };

  // About

  return (
    <div className="NewAbout-component" id="about">
      <div className="NewAbout-component--title">
        <h1>a little about me</h1>
      </div>

      <div className="NewAbout-component--contents">
        <div className="NewAbout-component--contents__left">
          <AboutSectionImage />
          <ButtonWithIcon
            styleClassName="NewAbout-component--content__left-button"
            value="RESUME"
            icon="fas fa-arrow-right"
            link={MyResume}
          />
        </div>

        <div className="NewAbout-component--contents__right">
          <AboutDescription />
          <FamiliarTechnologies />
          <ButtonWithIcon
            value="PROJECTS ON GITHUB"
            styleClassName="NewAbout-component--contents__right-projects_button"
            icon="fab fa-github"
            link="https://github.com/jgaurav6?tab=repositories"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
