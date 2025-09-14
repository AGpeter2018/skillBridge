import React from "react";

import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./components/Login";
import HomeComponent from "./components/home.component";
// import { getUserAuth } from "./actions";
// import { connect } from "react-redux";
import SignIns from "./components/sign-component/sign.component";
import SignUp from "./components/sign-up-component/sign-up.component";
import { auth } from "./firebase";
import { createUserProfileDocument } from "./firebase";

class App extends React.Component {
  // useEffect(() => {
  //   props.getUserAuth();
  // }, {});
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot((snapShot) => {
            this.setState(
              {
                currentUser: {
                  id: snapShot.id,
                  ...snapShot.data(),
                },
              },
              () => {
                console.log(this.state);
              }
            );
          });
        } else {
          this.setState({ currentUser: userAuth });
        }
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Routes>
          <Route
            path="/"
            element={
              this.state.currentUser ? <Navigate to="/home" /> : <LoginPage />
            }
          />
          <Route
            path="/home"
            element={<HomeComponent currentUser={this.state.currentUser} />}
          />

          <Route
            path="/signIns"
            element={
              this.state.currentUser ? <Navigate to="/home" /> : <SignIns />
            }
          />
          <Route
            path="/join"
            element={
              this.state.currentUser ? <Navigate to="/home" /> : <SignUp />
            }
          />
        </Routes>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     user: state.userState.user, // ✅ pull user from redux
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   getUserAuth: () => dispatch(getUserAuth()),
// });

export default App;
