import react, { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/Login";
import HomeComponent from "./components/home.component";
import { getUserAuth } from "./actions";
import { connect } from "react-redux";

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, {});
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomeComponent user={props.user} />} />
    </Routes>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userState.user, // ✅ pull user from redux
  };
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
