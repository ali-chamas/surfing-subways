import React from "react";
import signupImage from "../../../assets/login/signup.jpg";
const SignupForm = ({ setLogin }) => {
  return (
    <div className="flex border-radius">
      <div className="flex column gap bg-primary p align-center form center">
        <h2>Welcome</h2>
        <input type="text" placeholder="name" className="input w-full" />
        <input type="text" placeholder="email" className="input w-full" />
        <input type="text" placeholder="password" className="input w-full" />
        <input type="text" placeholder="location" className="input w-full" />
        <button type="button" className="btn-style bg-secondary text-black">
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
      </div>
      <div className="img-container">
        <img src={signupImage} alt="" />
      </div>
    </div>
  );
};

export default SignupForm;
