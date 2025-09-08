import { Link } from "react-router-dom";

import IconItem from "../../images/item-icon.svg";
import IconWidget from "../../images/widget-icon.svg";
import IconPlus from "../../images/plus-icon.svg";

import "./left.style.css";

const LeftComponent = (props) => {
  return (
    <div className="container">
      <div className="left-container">
        <div className="info">
          <div className="info-sub">
            <a>
              <div className="photo"></div>
              <Link className="link" to="/">
                Welcome, there !
              </Link>
            </a>
            <a>
              <div className="add-photo">Add a photo</div>
            </a>
          </div>
        </div>
        <div className="widget">
          <a>
            <div>
              <span>Connection</span>
              <span>Grow your network</span>
            </div>
            <img src={IconWidget} alt="Widget image" />
          </a>
        </div>
        <div className="item">
          <span>
            <img src={IconItem} alt="" />
            My items
          </span>
        </div>
      </div>
      <div className="community-card">
        <a>
          <span>Groups</span>
        </a>

        <a>
          <span>
            Event
            <img src={IconPlus} alt="Plus image" />
          </span>
        </a>

        <a>
          <span>Follow Hashtags</span>
        </a>

        <a>
          <span>Discover more</span>
        </a>
      </div>
    </div>
  );
};
export default LeftComponent;
