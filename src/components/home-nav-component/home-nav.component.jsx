import React, { Component } from "react";
import { connect } from "react-redux";
import { signOutApi } from "../../actions";
import { Navigate } from "react-router-dom";

// Import your icons
import IconHome from "../../images/nav-home.svg";
import IconNetwork from "../../images/nav-network.svg";
import IconJobs from "../../images/nav-jobs.svg";
import IconNotification from "../../images/nav-notifications.svg";
import JoinHeader from "../join-component/join-component";
import IconUser from "../../images/user.svg";
import IconPlus from "../../images/square-plus-solid-full.svg";
import IconDown from "../../images/down-icon.svg";
import IconNav from "../../images/nav-work.svg";

import SignOut from "../sign-out-component/sign-out.component";
import "./home-nav.style.css";
import { signOut } from "firebase/auth";

class HomeNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { to: "/home", icon: IconHome, label: "Home" },
        {
          to: "/network",
          icon: IconNetwork,
          label: "My Network",
          className: "network",
        },
        { to: "/jobs", icon: IconJobs, label: "Jobs" },
        {
          to: "/post",
          icon: IconPlus,
          label: "Post",
          className: "plus",
        },
        {
          to: "/notifications",
          icon: IconNotification,
          label: "Notifications",
          className: "network",
        },
        {
          to: "/",
          icon: IconUser,
          icon2: IconDown,
          label: "Me",
          className: "user",
        },
        {
          to: "/works",
          icon: IconNav,
          icon2: IconDown,
          label: "Works",
          className: "work",
        },
      ],
    };
  }

  render() {
    return (
      <div className="home-nav-container">
        <footer className="home-nav-footer">
          {this.state.navItems.map((item, index) => (
            <JoinHeader
              key={index}
              className={`Home-nav ${item.className || ""} ${
                item.label === "Works" ? "works-nav" : ""
              }`}
              to={item.to}
            >
              {!this.props.user && <Navigate to="/" replace />}
              {item.label === "Me" &&
              this.props.user &&
              this.props.user.photoURL ? (
                <img
                  src={this.props.user.photoURL}
                  alt="User profile"
                  className={`home-img ${
                    item.label === "Me" || item.label === "Post"
                      ? "user-image"
                      : ""
                  }`}
                />
              ) : (
                <img
                  src={item.icon}
                  alt={`${item.label} icon`}
                  className={`home-img ${
                    item.label === "Me" || item.label === "Post"
                      ? "user-image"
                      : ""
                  }`}
                />
              )}
              <span className={item.className || ""}>
                {item.label}
                {item.icon2 && (
                  <img
                    src={item.icon2}
                    alt="dropdown icon"
                    className="down-icon"
                  />
                )}
                {item.label === "Me" && (
                  <SignOut signOut={this.props.signOut} />
                )}
              </span>
            </JoinHeader>
          ))}
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userState.user, // ✅ pull user from redux
  };
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeNav);
