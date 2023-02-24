import "./styles.css";
import ProjectCard from "./project_card";
import { industryExperience } from "./data";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <div className="experience-title">
        <h1>my experiences</h1>
      </div>
      <div className="project-card-list">
        {industryExperience.map((experience) => (
          <ProjectCard details={experience} key={experience.company_name} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
