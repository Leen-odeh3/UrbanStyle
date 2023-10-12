import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "./../../Firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";


import "./Auth.css";
const Signin = () => {
  const navigate =useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className="signin">
      <h2>Already have an account?</h2>
      <p>Sign in with your email and password</p>
      <form>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setemail(e.target.value)}
          title="please fill out this feild."
          required
        />
        <input
          type="password"
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Password"
          title="please fill out this feild."
          required
        />
        <div>
          <button className="button-btn" 
          onClick={(e)=>{
            e.preventDefault();
            navigate("/");
            signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
          }}
          > SIGN IN</button>
          <button className="btn"> SIGN IN WITH GOOGLE</button>
        </div>
        <Link to="" className="forget-pass">
          Forgot Password?
        </Link>
      </form>
    </div>
  );
};

export default Signin;
