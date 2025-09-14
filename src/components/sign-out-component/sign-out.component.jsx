import "./sign-out.style.css";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";

const SignOut = ({ currentUser }) => {
  return currentUser ? (
    <div className="sign-out" onClick={() => auth.signOut()}>
      Sign Out
    </div>
  ) : (
    ""
  );
};

export default SignOut;
