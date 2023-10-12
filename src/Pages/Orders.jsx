import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from './../Firebase/config';
import { useAuthState } from "react-firebase-hooks/auth";

const Orders= () => {
    const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  });
  return <div>shop</div>;
};

export default Orders;
