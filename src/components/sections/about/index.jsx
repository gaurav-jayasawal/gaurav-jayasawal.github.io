import "./styles.css";
import ResumeButton from "./ResumeButton";
import TechnologyButton from "./TechnologyButton";
import MyResume from "../../../assets/resume.pdf";
import AboutImage from "../../../assets/about_image.png";

const About = () => {
  const technologies = [
    "React",
    "Android",
    "HTML5",
    "CSS3",
    "Vanilla JS",
    "Java",
    "Flutter",
    "SQL",
    "NoSQL",
    "Express",
    "Kotlin",
    "Adobe XD",
    "PHP",
  ];

  return (
    <div className="NewAbout-component">
      <div className="NewAbout-component--title">
        <h1>a little about me</h1>
      </div>
      <div className="NewAbout-component--contents">
        <div className="NewAbout-component--contents__left">
          <div className="NewAbout-component--content__left-image">
            <img src={AboutImage} width="100%" alt="" />
          </div>
          <div className="NewAbout-component--content__left-button">
            <ResumeButton
              value="RESUME"
              icon="fas fa-arrow-right"
              link={MyResume}
            />
          </div>
        </div>
        <div className="NewAbout-component--contents__right">
          <div className="NewAbout-component--contents__right-description">
            <h3>
              I go to SUNY Plattsburgh and will graduate in May 2019. I am also
              an incoming Software Engineer at{" "}
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
          <div className="NewAbout-component--contents__right-familiar_technologies">
            <h4>Technologies I am familiar with:</h4>
          </div>
          <div className="NewAbout-component--contents__right-description_buttons">
            {technologies.map((tech) => (
              <TechnologyButton name={tech} />
            ))}
          </div>
          <div className="NewAbout-component--contents__right-projects_button">
            <ResumeButton
              value="PROJECTS ON GITHUB"
              icon="fab fa-github"
              link="https://github.com/jgaurav6?tab=repositories"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
