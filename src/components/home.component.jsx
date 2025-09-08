import "./home.style.css";

import HeaderComponent from "./home-header-component/header.component";
import HomeNav from "./home-nav-component/home-nav.component";
import SectionHome from "./section-home-component/section-home.component";
import LeftComponent from "./left-component/left.component";
import MainComponent from "./main-component/main.component";
import RightComponent from "./right-component/right.component";

const HomeComponent = (props) => {
  return (
    <div className="home-container">
      <div className="header-container">
        <HeaderComponent />
      </div>
      <HomeNav />
      <div className="container">
        <SectionHome>{props.children}</SectionHome>
      </div>
      <div className="layout">
        <LeftComponent>{props.children}</LeftComponent>
        <MainComponent>{props.children}</MainComponent>
        <RightComponent>{props.children}</RightComponent>
      </div>
    </div>
  );
};

export default HomeComponent;
