import React, { useEffect } from "react";

import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./components/Login";
import HomeComponent from "./components/home.component";
import { getUserAuth } from "./actions";
import { useSelector, useDispatch } from "react-redux";
// import { connect } from "react-redux";
import SignIns from "./components/sign-component/sign.component";
import SignUp from "./components/sign-up-component/sign-up.component";
// import { setCurrentUser } from "./actions";

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const unsubscribeFromAuth = dispatch(getUserAuth());
    return () => {
      if (unsubscribeFromAuth) unsubscribeFromAuth();
    };
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={currentUser ? <Navigate to="/home" /> : <LoginPage />}
        />
        <Route path="/home" element={<HomeComponent />} />

        <Route
          path="/signIns"
          element={currentUser ? <Navigate to="/home" /> : <SignIns />}
        />
        <Route
          path="/join"
          element={currentUser ? <Navigate to="/home" /> : <SignUp />}
        />
      </Routes>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     user: state.userState.user, // ✅ pull user from redux
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   getUserAuth: () => dispatch(getUserAuth()),
// });

export default App;
