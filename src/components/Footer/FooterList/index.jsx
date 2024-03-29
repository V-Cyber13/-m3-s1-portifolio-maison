import whatsappIcon from "../../../assets/whatsapp-icon.png";
import linkedInIcon from "../../../assets/linkedin-icon.png";
import gitHubIcon from "../../../assets/github-icon.png";

export const FooterList = () => {
  return (
    <>
      <li>
        <a className="link">
          <img src={whatsappIcon} alt="Logo do Whatsapp" />
        </a>
      </li>
      <li>
        <a className="link">
          <img src={linkedInIcon} alt="Logo do LinkedIn" />
        </a>
      </li>
      <li>
        <a className="link">
          <img src={gitHubIcon} alt="Logo do GitHub" />
        </a>
      </li>
    </>
  );
};