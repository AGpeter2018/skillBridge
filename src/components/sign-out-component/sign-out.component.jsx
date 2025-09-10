import "./sign-out.style.css";

const SignOut = (props) => {
  return (
    <div className="sign-out" onClick={() => props.signOut()}>
      <a>Sign Out</a>
    </div>
  );
};

export default SignOut;
