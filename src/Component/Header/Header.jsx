import { NavLink } from "react-router-dom";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../../Firebase/config";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <div className="header">
        <img
          src="./../../../public/images/logo.png"
          alt="Urbanstyle Logo"
          className="logo"
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <nav>
            <NavLink to="/shop">shop</NavLink>
            {user && (
              <>
                <NavLink
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    signOut(auth)
                      .then(() => {
                        // Sign-out successful.
                      })
                      .catch((error) => {
                        // An error happened.
                      });
                  }}
                >
                  sign out
                </NavLink>
                <NavLink to="/orders">orders</NavLink>
              </>
            )}
            {!user && <NavLink to="/auth">sign in</NavLink>}
          </nav>

          <img
            src="../../../public/images/shopping-bag.png"
            alt="Shopping Bag"
            className="icon-bag"
          />
        </div>
      </div>
      {!user && 
      <div
        style={{
          position: "absolute",
          right: "30px",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        Hello, Guest
      </div>}
      {user && 
      <div
        style={{
          position: "absolute",
          right: "30px",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        Hello,{user.displayName}
      </div>}
    </>
  );
};

export default Header;
