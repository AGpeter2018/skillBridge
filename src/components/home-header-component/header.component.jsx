import "./header.style.css";
import { Link } from "react-router-dom";
import linkedinLogo from "../../images/linkedin-1.png";
import IconSearch from "../../images/search-icon.svg";
import IconMessage from "../../images/nav-messaging.svg";
const HeaderComponent = (props) => {
  return (
    <div className="content-links">
      <a href="/home">
        <img src={linkedinLogo} alt="LinkedIn" className="logo" />
      </a>
      <div className="search">
        <div>
          <input type="text" placeholder="Search" />
        </div>
        <div className="search-icon">
          <img src={IconSearch} alt="Search icon" />
        </div>
      </div>
      <div className="user-box">
        <Link to="/">
          <img src={IconMessage} alt="User icon" className="user-message" />
        </Link>
      </div>
    </div>
  );
};

export default HeaderComponent;
