import "./home.style.css";

import HeaderComponent from "./home-header-component/header.component";
import HomeNav from "./home-nav-component/home-nav.component";

const HomeComponent = (props) => {
  return (
    <div className="home-container">
      <div className="header-container">
        <HeaderComponent />
      </div>
      <HomeNav />
    </div>
  );
};

export default HomeComponent;
