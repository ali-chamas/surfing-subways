import React, { useState } from "react";
import "../../../common/styles/sidebar.css";
import { useNavigate, useLocation } from "react-router-dom";
const AdminSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className="flex column justify-between h-full bg-primary p align-center sidebar">
      <div className="flex column gap align-center">
        <h1 className="special-font large-font">Surfing Subways</h1>
        <button
          onClick={() => navigate("/dashboard/admin")}
          className={`btn-style w-full p  ${
            pathname == "/dashboard/admin"
              ? "bg-secondary text-black"
              : "bg-primary text-white"
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => navigate("/dashboard/admin/stations")}
          className={`btn-style w-full p ${
            pathname == "/dashboard/admin/stations"
              ? "bg-secondary text-black"
              : "bg-primary text-white"
          }`}
        >
          Stations
        </button>
        <button
          onClick={() => navigate("/dashboard/admin/coin-requests")}
          className={`btn-style w-full p ${
            pathname == "/dashboard/admin/coin-requests"
              ? "bg-secondary text-black"
              : "bg-primary text-white"
          }`}
        >
          Coin reuqests
        </button>
      </div>
      <button className="btn-style bg-danger text-white">Logout</button>
    </div>
  );
};

export default AdminSidebar;
