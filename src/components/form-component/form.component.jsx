import "./form.style.css";

import GoogleImg from "../../images/google.svg";
import { signInWithGoogle } from "../../firebase";
const FormComponent = (props) => (
  <div className="form-container">
    <form>
      <button type="button" className="google-btn" onClick={signInWithGoogle}>
        <img src={GoogleImg} alt="Google" />
        Sign in with Google
      </button>
    </form>
  </div>
);

export default FormComponent;
