import React from "react";
import loginImg from "../../../assets/login/login.jpg";
const LoginForm = ({ setLogin }) => {
  return (
    <div className="flex border-radius">
      <div className="flex column big-gap bg-primary p align-center form center">
        <h2>Welcome Back!</h2>
        <input type="text" placeholder="email" className="input w-full" />
        <input type="text" placeholder="password" className="input w-full" />
        <button type="button" className="btn-style bg-secondary text-black">
          login
        </button>
        <small className="cursor-pointer">Forgot password?</small>
        <small>
          Doesn't have an account?{" "}
          <span
            className="text-primary cursor-pointer"
            onClick={() => setLogin(false)}
          >
            signup
          </span>
        </small>
      </div>
      <div className="img-container">
        <img src={loginImg} alt="" />
      </div>
    </div>
  );
};

export default LoginForm;
