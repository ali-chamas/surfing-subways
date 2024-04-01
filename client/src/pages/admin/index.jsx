import React from "react";
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
