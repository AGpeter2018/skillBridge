import "./sign-out.style.css";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import { signOutApi } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

const SignOut = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  return currentUser ? (
    <div className="sign-out" onClick={() => dispatch(signOutApi())}>
      Sign Out
    </div>
  ) : null;
};

export default SignOut;
