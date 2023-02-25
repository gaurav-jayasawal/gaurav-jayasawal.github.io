import "./styles.css";

const SocialButton = (props) => (
  <a href={props.href} target="_blank" rel="noopener noreferrer">
    <div className="socialButtonContainer">
      <i id="icon" className={props.class} />
    </div>
  </a>
);

export default SocialButton;
