import "./styles.css";
import { projectData, projectButtons, projectTechnologies } from "./data";
import { useState } from "react";

const Projects = () => {
  // State

  const [currentlyShowing, setCurrentlyShowing] = useState(projectData);
  const [message, setMessage] = useState(
    "All projects. Use buttons to filter."
  );

  // Helper functions

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

  // Sub components

  const Project = ({ project }) => {
    return (
      <div key={project.id} className="ProjectContainer_Project_Image">
        <div
          className="projectContainer-overlay"
          style={{ background: project.color, color: project.fontColor }}
        >
          <h3>{project.title}</h3>
          <div className="projectContainer-overlay_technologies">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="projectContainer-overlay_technologies--box"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <a>
          <img src={project.source} alt="" />
        </a>
      </div>
    );
  };

  const ProjectContainer = () => {
    return (
      <div className="ProjectContainer_Projects">
        {currentlyShowing.map((project) => (
          <Project project={project} />
        ))}
      </div>
    );
  };

  const ProjectButtons = () => {
    return (
      <div className="project-buttons">
        {projectButtons.map((technology) => (
          <a key={technology.id} href="/" onClick={handleProjectBtnClick}>
            <span id={technology.id} className="project-buttons_btn">
              {technology.name}
            </span>
          </a>
        ))}
        <p className="project-help">{message}</p>
      </div>
    );
  };

  const ProjectSectionTitle = () => {
    return (
      <div className="project-title">
        <h1>some of my projects</h1>
      </div>
    );
  };

  // Projects

  return (
    <div className="project" id="projects">
      <ProjectSectionTitle />
      <ProjectButtons />
      <ProjectContainer />
    </div>
  );
};

export default Projects;
