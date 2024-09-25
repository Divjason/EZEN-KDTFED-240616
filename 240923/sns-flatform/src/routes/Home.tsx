import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Home = () => {
  const navigate = useNavigate();
  const logout = () => {
    auth.signOut();
    navigate("/login");
  };
  return (
    <h1>
      <button onClick={logout}>Logout</button>
    </h1>
  );
};

export default Home;
