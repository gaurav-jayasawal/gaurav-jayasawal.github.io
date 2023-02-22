import "./styles.css";

const FooterSocialButton = (props) => {
  return (
    <div className="footerSocialButton">
      <a
        href={props.href}
        className="footerSocialButtonLink"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i id="icon" className={props.class} />
      </a>
    </div>
  );
};

export default FooterSocialButton;
