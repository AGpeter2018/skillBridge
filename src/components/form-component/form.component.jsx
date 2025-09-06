import "./form.style.css";

import GoogleImg from "../../images/google.svg";

const FormComponent = (props) => (
  <form>
    <button type="button" className="google-btn">
      <img src={GoogleImg} alt="Google" />
      Sign in with Google
    </button>
  </form>
);

export default FormComponent;
