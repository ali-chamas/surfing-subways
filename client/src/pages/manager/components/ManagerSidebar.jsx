import React, { useContext, useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
const ManagerSidebar = () => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="flex column justify-between h-full bg-primary p align-center sidebar">
      <div className="flex column gap align-center">
        <h1 className="special-font large-font">Surfing Subways</h1>
        <button
          onClick={() => navigate("/dashboard/manager")}
          className={`btn-style w-full p  ${
            pathname == "/dashboard/manager"
              ? "bg-secondary text-black"
              : "bg-primary text-white"
          }`}
        >
          My station
        </button>
        <button
          onClick={() => navigate("/dashboard/manager/myRides")}
          className={`btn-style w-full p ${
            pathname == "/dashboard/manager/myRides"
              ? "bg-secondary text-black"
              : "bg-primary text-white"
          }`}
        >
          My rides
        </button>

        <button
          onClick={() => navigate("/dashboard/manager/myReviews")}
          className={`btn-style w-full p ${
            pathname == "/dashboard/manager/myReviews"
              ? "bg-secondary text-black"
              : "bg-primary text-white"
          }`}
        >
          My reviews
        </button>
        <button
          onClick={() => navigate("/dashboard/manager/myMessages")}
          className={`btn-style w-full p ${
            pathname == "/dashboard/manager/myMessages"
              ? "bg-secondary text-black"
              : "bg-primary text-white"
          }`}
        >
          My messages
        </button>
      </div>
      <button className="btn-style bg-danger text-white" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default ManagerSidebar;
