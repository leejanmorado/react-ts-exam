import { useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="sign-in">
      <div className="input-field">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
      </div>
      <div className="input-field">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
      </div>
      <div className="input-field">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <div className="input-field">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input id="confirm-password" type="password" />
      </div>
      <div className="button-group">
        <button className="button" onClick={() => navigate("/")}>
          Sign in
        </button>
        <button className="button" onClick={() => navigate("/")}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignUp;
