import "./right.style.css";
import IconFeed from "../../images/feed-icon.svg";
import IconRight from "../../images/right-icon.svg";

const RightComponent = (props) => {
  return (
    <div className="right-container">
      <div className="overall-block">
        <div className="title">
          <h2>Add to your feed</h2>
          <img src={IconFeed} alt="" />
        </div>
        <ul className="feed-list">
          <li>
            <a>
              <div className="avater"></div>
            </a>
            <div>
              <span>Linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <div className="avater"></div>
            </a>
            <div>
              <span>Evidence</span>
              <button>Follow</button>
            </div>
          </li>
        </ul>
        <a className="recommendation">
          View all recommendation
          <img src={IconRight} alt="" />
        </a>
      </div>
      <div className="banner-card">
        <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
export default RightComponent;
