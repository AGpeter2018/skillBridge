import "./main.style.css";
import IconUser from "../../images/user.svg";
import IconPhoto from "../../images/image-solid-full.svg";
import IconVideo from "../../images/video-solid-full.svg";
import IconEvent from "../../images/calendar-solid-full.svg";
import IconArticle from "../../images/newspaper-solid-full.svg";
import IconEllipsis from "../../images/ellipsis-solid-full.svg";
import Img from "../../images/img.jpg";
import IconClapp from "../../images/hands-clapping-solid-full.svg";
import IconLike from "../../images/thumbs-up-solid-full.svg";
import { FaRegCommentDots } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { FaHandsClapping } from "react-icons/fa6";

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
        <div>
          <div className="article">
            <div className="shared-actor">
              <a>
                <img className="user-post" src={IconUser} alt="" />
                <div>
                  <span>Title</span>
                  <span>Info</span>
                  <span>Data</span>
                </div>
              </a>
              <button className="button-icon">
                <img src={IconEllipsis} alt="" />
              </button>
            </div>
            <div className="description">Description</div>
            <div className="shared-img">
              <a>
                <img src={Img} alt="" />
              </a>
            </div>
            <div className="social-count">
              <li>
                <button>
                  {/* <img src={IconLike} alt="" /> */}
                  <BiLike className="like" />
                  {/* <img src={IconClapp} alt="" /> */}
                  <FaHandsClapping />
                  <span>75</span>
                </button>
              </li>
              <li>
                <a>2 comments</a>
              </li>
            </div>
            <div className="social-icon">
              <button>
                <BiLike />
                <span>Like</span>
              </button>
              <button>
                <FaRegCommentDots />
                <span>Comments</span>
              </button>
              <button>
                <FaShare />
                <span>Share</span>
              </button>
              <button>
                <IoIosSend />
                <span>Send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainComponent;
