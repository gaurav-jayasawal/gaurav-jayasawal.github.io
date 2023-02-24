import "./styles.css";
import { industryExperience } from "./data";

const Experience = () => {
  // Sub components

  const ExperienceCardHeader = ({ experience }) => {
    return (
      <div className="experienceCard_row-1">
        <div className="experienceCard_row-1_col1">
          <div className="row-1_col1--logo">
            <img src={experience.logo} width="60px" alt="" />
          </div>
          <div className="row-1_col1--company-name">
            <a href={experience.link} target="_blank" rel="noopener noreferrer">
              {experience.company_name}
            </a>
          </div>
        </div>
        <div className="experienceCard_row-1_col2">{experience.title}</div>
      </div>
    );
  };

  const LineDivider = () => {
    return (
      <div className="row-1_bottom-divider">
        <hr />
      </div>
    );
  };

  const ExperienceCardContent = ({ experience }) => {
    return (
      <div className="experienceCard_row-2">
        <ul className="experienceCard_row-2_ul">
          {experience.duties.map((duty) => (
            <li key={duty}>{duty}</li>
          ))}
        </ul>
      </div>
    );
  };

  const ExperienceCardFooter = ({ experience }) => {
    return (
      <div className="experienceCard_row-3">
        <strong>{experience.date}</strong> | {experience.location}
      </div>
    );
  };

  const ExperienceCard = ({ experience }) => (
    <div className="experienceCard">
      <ExperienceCardHeader experience={experience} />
      <LineDivider />
      <ExperienceCardContent experience={experience} />
      <ExperienceCardFooter experience={experience} />
    </div>
  );

  const ExperienceList = () => {
    return (
      <div className="experience-card-list">
        {industryExperience.map((experience) => (
          <ExperienceCard
            experience={experience}
            key={experience.company_name}
          />
        ))}
      </div>
    );
  };

  // Experiences

  return (
    <div className="experience" id="experience">
      <div className="experience-title">
        <h1>my experiences</h1>
      </div>
      <ExperienceList />
    </div>
  );
};

export default Experience;
