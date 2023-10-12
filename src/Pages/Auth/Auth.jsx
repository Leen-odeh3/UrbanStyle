import "./Auth.css";
import Signin from "./Signin";
import Signup from "./Signup";

const Auth = () => {
  return (
    <div className="auth">
    <Signin/>
    <Signup/>
    </div>
  );
};

export default Auth;
