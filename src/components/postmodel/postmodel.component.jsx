import { useState } from "react";

import "./postmodel.style.css";
import IconTimes from "../../images/xmark-solid-full.svg";
import IconUser from "../../images/user.svg";
import IconPhoto from "../../images/image-solid-full.svg";
import IconVideo from "../../images/youtube-brands-solid-full.svg";
import IconComment from "../../images/comment-dots-regular-full.svg";

const PostModel = () => {
  const [editText, setEditText] = useState("");
  return (
    <div className="post-block">
      <div className="content">
        <div className="header">
          <h2>Create a post</h2>
          <button>
            <img src={IconTimes} alt="times icon" />
          </button>
        </div>
        <div className="share-content">
          <div className="user-info">
            <img src={IconUser} alt="user icon" className="info-icon" />
            <span>Name</span>
          </div>
        </div>
        <div className="share-creation">
          <div className="attachment-asset">
            <button className="asset-button">
              <img src={IconPhoto} alt="" />
            </button>
            <button className="asset-button">
              <img src={IconVideo} alt="" />
            </button>
          </div>
          <div className="share-comment">
            <button className="asset-button button ">
              <img src={IconComment} alt="" />
              Anyone
            </button>
          </div>
          <button className="postbtn">Post</button>
        </div>
      </div>
    </div>
  );
};

export default PostModel;
