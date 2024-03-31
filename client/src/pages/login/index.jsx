import React, { useState } from "react";
import "./style.css";

import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
const Login = () => {
  const [login, setLogin] = useState(true);
  return (
    <section className="login-section flex center">
      isLogin
      <LoginForm setLogin={setLogin} />
      :
      <SignupForm setLogin={setLogin} />
    </section>
  );
};

export default Login;
