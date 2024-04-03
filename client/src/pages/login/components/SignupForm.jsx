import React, { useContext, useState } from "react";
import signupImage from "../../../assets/login/signup.jpg";
import { sendRequest } from "../../../tools/request/request";
import { UserContext } from "../../../context/userContext";
import { useNavigate } from "react-router-dom";
const SignupForm = ({ setLogin }) => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    if (name == "" || email == "" || password == "" || location == "") {
      setError("please fill all fealds");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleSignUp = async () => {
    if (validateForm()) {
      const reqBody = {
        username: name,
        email: email,
        password: password,
        location: location,
      };

      try {
        const res = await sendRequest("POST", "/register", reqBody);
        const data = res.data;
        if (res.status == 200) {
          login(data.username, data.authorisation.token);
          navigate("/");
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
      <div className="flex column gap bg-primary p align-center form center">
        <h2>Welcome</h2>
        <input
          type="text"
          placeholder="name"
          className="input w-full"
          onChange={(e) => setName(e.target.value)}
        />
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
        <input
          type="text"
          placeholder="location"
          className="input w-full"
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          type="button"
          className="btn-style bg-secondary text-black"
          onClick={handleSignUp}
        >
          Signup
        </button>
        <small className="cursor-pointer"></small>
        <small>
          Already have an account?
          <span
            className="text-primary cursor-pointer"
            onClick={() => setLogin(true)}
          >
            signup
          </span>
        </small>
        {error && <small className="text-danger">{error}</small>}
      </div>
      <div className="img-container">
        <img src={signupImage} alt="" />
      </div>
    </div>
  );
};

export default SignupForm;
