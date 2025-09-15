import "./home.style.css";
import { connect } from "react-redux";

import HeaderComponent from "./home-header-component/header.component";
import HomeNav from "./home-nav-component/home-nav.component";
import SectionHome from "./section-home-component/section-home.component";
import LeftComponent from "./left-component/left.component";
import MainComponent from "./main-component/main.component";
import RightComponent from "./right-component/right.component";
import { useSelector } from "react-redux";

const HomeComponent = ({ user, children }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <div className="home-container">
      <div className="header-container">
        <HeaderComponent />
      </div>
      <HomeNav user={user} currentUser={currentUser} />
      <div className="container">
        <SectionHome>{children}</SectionHome>
      </div>
      <div className="layout">
        <LeftComponent />
        <MainComponent />
        <RightComponent />
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     user: state.userState.user, // ✅ pull user from redux
//   };
// };

export default HomeComponent;
