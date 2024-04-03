import React, { useContext, useEffect, useState } from "react";
import "./style.css";

import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import { UserContext } from "../../context/userContent";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { token } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="login-section flex center">
      {isLogin ? (
        <LoginForm setLogin={setIsLogin} />
      ) : (
        <SignupForm setLogin={setIsLogin} />
      )}
    </section>
  );
};

export default Login;
