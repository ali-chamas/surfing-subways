import React, { useState } from "react";
import "./style.css";

import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  console.log(isLogin);
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
