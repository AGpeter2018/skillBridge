import React, { Component } from "react";

// Import your icons
import IconHome from "../../images/nav-home.svg";
import IconNetwork from "../../images/nav-network.svg";
import IconJobs from "../../images/nav-jobs.svg";
import IconNotification from "../../images/nav-notifications.svg";
import JoinHeader from "../join-component/join-component";
import IconUser from "../../images/user.svg";
import IconPlus from "../../images/square-plus-solid-full.svg";

import "./home-nav.style.css";

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
          className: "network",
        },
        {
          to: "/notifications",
          icon: IconNotification,
          label: "Notifications",
          className: "network",
        },
        {
          to: "/Profile",
          icon: IconUser,
          label: "Me",
          className: "network",
        },
      ],
    };
  }

  render() {
    return (
      <div className="home-nav-container">
        <footer className="home-nav-footer">
          {this.state.navItems.map((item, index) => (
            <JoinHeader key={index} className="Home-nav" to={item.to}>
              <img
                src={item.icon}
                alt={`${item.label} icon`}
                className={`home-img ${
                  item.label === "Me" || item.label === "Post"
                    ? "user-image"
                    : ""
                }`}
              />
              <span className={item.className || ""}>{item.label}</span>
            </JoinHeader>
          ))}
        </footer>
      </div>
    );
  }
}

export default HomeNav;
