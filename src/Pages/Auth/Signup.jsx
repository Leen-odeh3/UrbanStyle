import { useState } from "react";
import "./Auth.css";
import { auth } from "./../../Firebase/config";
// import { useAuthState } from "react-firebase-hooks/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  // const [user] = useAuthState(auth);
  const [email, setemail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className="signup">
      <h2>Dont have an account?</h2>
      <p>Sign up with your email and password</p>
      <form>
        <input
          type="text"
          placeholder="Display Name"
          title="please fill out this feild."
          onChange={(e) => setDisplayName(e.target.value)}
          required
        />
        <input
          onChange={(e) => setemail(e.target.value)}
          type="email"
          placeholder="Email"
          title="please fill out this feild."
          required
        />
        <input
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          placeholder="Password"
          title="please fill out this feild."
          required
        />
        <input
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          title="please fill out this feild."
          required
        />
        <div>
          <button
            className="button-btn"
            onClick={(e) => {
              e.preventDefault();

              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed up
                  const user = userCredential.user;
                  // ...
                 
                 
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  // ..
                });
            }}
          >
            {" "}
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
