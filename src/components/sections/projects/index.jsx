import "./styles.css";
import ProjectContainer from "./ProjectContainer";
import { projectData, projectButtons, projectTechnologies } from "./data";
import { useState } from "react";

const Projects = () => {
  const [currentlyShowing, setCurrentlyShowing] = useState(projectData);
  const [message, setMessage] = useState(
    "All projects. Use buttons to filter."
  );

  const handleProjectBtnClick = (e) => {
    let clickedTechId = e.target.id;
    const temp = projectTechnologies.filter(
      (tech) => tech.id === clickedTechId
    );
    let matchingProjects = [];

    e.preventDefault();

    if (temp[0] === undefined) {
      // tbh I have no fking clue what this is guarding.
      return;
    }

    for (let i = 0; i < temp[0].value.length; i++) {
      const matchingProject = projectData.filter(
        (project) => temp[0].value[i] === project.id
      );
      matchingProjects = [...matchingProjects, ...matchingProject];
    }

    const title = projectButtons.filter((btn) => btn.id === clickedTechId);
    setCurrentlyShowing(matchingProjects);
    setMessage(
      clickedTechId === "showall"
        ? "All projects."
        : title[0].name + " PROJECTS"
    );
  };

  return (
    <div className="project" id="projects">
      <div className="project-title">
        <h1>some of my projects</h1>
      </div>
      <div className="project-buttons">
        {projectButtons.map((technology) => (
          <a key={technology.id} href="/" onClick={handleProjectBtnClick}>
            <span id={technology.id} className="project-buttons_btn">
              {technology.name}
            </span>
          </a>
        ))}
      </div>
      <p className="project-help">{message}</p>
      <div className="projects-container_projects">
        <ProjectContainer currentlyShowing={currentlyShowing} />
      </div>
    </div>
  );
};

export default Projects;
