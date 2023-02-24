import "./styles.css";
import MyResume from "../../../assets/resume.pdf";
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
          I go to SUNY Plattsburgh and will graduate in May 2019. I am also an
          incoming Software Engineer at{" "}
          <a href="https://appian.com" target="_blank">
            Appian Corporation
          </a>
          , Tysons, VA.
        </h3>

        <h3>
          I am the Co-founder and vice president of{" "}
          <a href="https://coding-hub.com" target="_blank">
            Coding Hub
          </a>
          , a club dedicated to build software solutions to improve student
          services on campus.{" "}
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
