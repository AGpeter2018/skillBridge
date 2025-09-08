import "./main.style.css";
import IconUser from "../../images/user.svg";
import IconPhoto from "../../images/image-solid-full.svg";
import IconVideo from "../../images/video-solid-full.svg";
import IconEvent from "../../images/calendar-solid-full.svg";
import IconArticle from "../../images/newspaper-solid-full.svg";

const MainComponent = (props) => {
  return (
    <div className="main-container">
      <div className="common-card">
        <div className="share-box">
          Share
          <div className="user-profile">
            <img className="user" src={IconUser} alt="" />
            <button>Start a post</button>
          </div>
          <div className="span-block">
            <button>
              <img src={IconPhoto} alt="" />
              <span>Photo</span>
            </button>
            <button>
              <img src={IconVideo} alt="" />
              <span>Video</span>
            </button>
            <button>
              <img src={IconEvent} alt="" />
              <span>Event</span>
            </button>
            <button>
              <img src={IconArticle} alt="" />
              <span>article</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainComponent;
