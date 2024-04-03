import React, { useContext, useState } from "react";
import loginImg from "../../../assets/login/login.jpg";
import { UserContext } from "../../../context/userContent";
import { useNavigate } from "react-router-dom";
import { sendRequest } from "../../../tools/request/request";
const LoginForm = ({ setLogin }) => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    if (email == "" || password == "") {
      setError("please fill all fealds");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleLogin = async () => {
    if (validateForm()) {
      const reqBody = {
        email: email,
        password: password,
      };

      try {
        const res = await sendRequest("POST", "/login", reqBody);
        const data = res.data;
        if (res.status == 200) {
          login(data.user, data.authorisation.token);
          navigate("/");
          console.log(data);
        }
        console.log();
      } catch (error) {
        console.log(error);
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div className="flex border-radius">
      <div className="flex column big-gap bg-primary p align-center form center">
        <h2>Welcome Back!</h2>
        <input
          type="text"
          placeholder="email"
          className="input w-full"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="input w-full"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          type="button"
          className="btn-style bg-secondary text-black"
        >
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
        {error && <small className="text-danger">{error}</small>}
      </div>
      <div className="img-container">
        <img src={loginImg} alt="" />
      </div>
    </div>
  );
};

export default LoginForm;
