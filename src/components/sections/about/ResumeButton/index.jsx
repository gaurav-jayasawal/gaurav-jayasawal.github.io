import "./styles.css";

const ResumeButton = (props) => {
  return (
    <a href={props.link} target="_blank">
      <div className="ResumeButton-component">
        <div className="ResumeButton-component--text">{props.value}</div>
        <div className="ResumeButton-component--icon">
          <i className={props.icon} />
        </div>
      </div>
    </a>
  );
};

export default ResumeButton;
