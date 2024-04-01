import React from "react";
import "./style.css";
import AdminSidebar from "./components/AdminSidebar";

const Admin = ({ children }) => {
  return (
    <div className="flex">
      <AdminSidebar />
      {children}
    </div>
  );
};

export default Admin;
