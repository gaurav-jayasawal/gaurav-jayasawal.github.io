import "./styles.css";

const ProjectContainer = ({ currentlyShowing }) => {
  return (
    <div className="ProjectContainer">
      <div className="ProjectContainer_Project">
        {currentlyShowing.map((image) => (
          <div key={image.id} className="ProjectContainer_Project_Image">
            <div
              className="projectContainer-overlay"
              style={{ background: image.color, color: image.fontColor }}
            >
              <h3>{image.title}</h3>
              <div className="projectContainer-overlay_technologies">
                {image.technologies.map((tech) => (
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
              <img src={image.source} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectContainer;
