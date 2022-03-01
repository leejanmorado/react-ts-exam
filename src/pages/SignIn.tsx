import { useNavigate } from "react-router";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="sign-in">
      <div className="input-field">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
      </div>
      <div className="input-field">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <div className="button-group">
        <button className="button" onClick={() => navigate("sign-up")}>
          Sign Up
        </button>
        <button className="button" onClick={() => navigate("home")}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
