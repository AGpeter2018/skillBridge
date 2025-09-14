import { useState } from "react";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import firebase from "firebase/compat/app";
import { postArticleApi } from "../../actions";

import "./postmodel.style.css";
import IconTimes from "../../images/xmark-solid-full.svg";
import IconUser from "../../images/user.svg";
import IconPhoto from "../../images/image-solid-full.svg";
import IconVideo from "../../images/youtube-brands-solid-full.svg";
import IconComment from "../../images/comment-dots-regular-full.svg";

const PostModel = (props) => {
  const [editText, setEditText] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [assetArear, setassetArear] = useState("");

  function switchAssetArea(area) {
    setShareImage("");
    setVideoLink("");
    setassetArear(area);
  }

  const postArticle = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    const payload = {
      image: shareImage,
      video: videoLink,
      user: props.user,
      description: editText,
      timestamp: firebase.firestore.Timestamp.now(),
    };

    props.postArticle(payload);
    reset(e);
  };

  function handleImageChange(e) {
    const image = e.target.files[0];
    if (image === "" || image === undefined) {
      alert(`not an image, the file is a ${typeof image}`);
      return;
    }
    setShareImage(image);
  }

  function handleChange(e) {
    setEditText(e.target.value);
  }

  const reset = (e) => {
    setEditText("");
    setShareImage("");
    setVideoLink("");
    setassetArear("");
    props.handleClick(e);
  };

  return (
    <>
      {props.showModal === "open" && (
        <div className="post-block">
          <div className="content">
            <div className="header">
              <h2>Create a post</h2>
              <button onClick={(event) => reset(event)}>
                <img src={IconTimes} alt="times icon" />
              </button>
            </div>
            <div className="share-content">
              <div className="user-info">
                {props.user.photoURL ? (
                  <img src={props.user.photoURL} className="info-icon" />
                ) : (
                  <img src={IconUser} alt="user icon" className="info-icon" />
                )}
                <span>Name</span>
              </div>
              <div className="editor">
                <textarea
                  value={editText}
                  onChange={handleChange}
                  placeholder="What's on your mind today ?"
                  autoFocus="true"
                />
                {assetArear === "image" ? (
                  <div className="uploadImg">
                    <input
                      type="file"
                      accept="image/gif, image/jpeg, image/png"
                      name="image"
                      id="file"
                      style={{ display: "none" }}
                      onChange={handleImageChange}
                    />
                    <p>
                      <label htmlFor="file">Select an image to share</label>
                    </p>

                    {shareImage && (
                      <img src={URL.createObjectURL(shareImage)} />
                    )}
                  </div>
                ) : (
                  assetArear === "media" && (
                    <>
                      <input
                        type="text"
                        placeholder="Please input video link"
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                      />
                      {videoLink && (
                        <div className="video-wrapper">
                          <ReactPlayer
                            width={"100%"}
                            url={videoLink}
                            controls
                          />
                        </div>
                      )}
                    </>
                  )
                )}
              </div>
            </div>
            <div className="share-creation">
              <div className="attachment-asset">
                <button
                  className="asset-button"
                  onClick={() => switchAssetArea("image")}
                >
                  <img src={IconPhoto} alt="" />
                </button>
                <button
                  className="asset-button"
                  onClick={() => switchAssetArea("media")}
                >
                  <img src={IconVideo} alt="" />
                </button>
              </div>
              <div className="share-comment">
                <button className="asset-button button ">
                  <img src={IconComment} alt="" />
                  Anyone
                </button>
              </div>
              <button
                className="postbtn"
                disabled={!editText}
                onClick={(event) => postArticle(event)}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     user: state.userState.user, // ✅ pull user from redux
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   postArticle: (payload) => dispatch(postArticleApi(payload)),
// });

export default PostModel;
