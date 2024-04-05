import React, { useContext } from "react";
import "../../../common/styles/sidebar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
const AdminSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { logout } = useContext(UserContext);
  return (
    <div className="flex column justify-between h-full bg-primary p align-center sidebar">
      <div className="flex column gap align-center">
        <h1 className="special-font large-font">Surfing Subways</h1>
        <button
          onClick={() => navigate("/dashboard/admin")}
          className={`flex align-center btn-style w-full p medium-font ${
            pathname == "/dashboard/admin"
              ? "bg-secondary text-black"
              : "bg-primary text-white"
          }`}
        >
          <i className="icon-dashboard"></i>
          Dashboard
        </button>
        <button
          onClick={() => navigate("/dashboard/admin/stations")}
          className={`flex align-center btn-style w-full p medium-font ${
            pathname == "/dashboard/admin/stations"
              ? "bg-secondary text-black"
              : "bg-primary text-white"
          }`}
        >
          <i className="icon-stations"></i>
          Stations
        </button>
        <button
          onClick={() => navigate("/dashboard/admin/coin-requests")}
          className={`flex align-center btn-style w-full p medium-font ${
            pathname == "/dashboard/admin/coin-requests"
              ? "bg-secondary text-black"
              : "bg-primary text-white"
          }`}
        >
          <i className="icon-coin-requests"></i>
          Coin requests
        </button>
      </div>
      <button className="btn-style bg-danger text-white" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default AdminSidebar;
