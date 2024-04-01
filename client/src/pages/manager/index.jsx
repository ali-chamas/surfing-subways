import React from "react";
import ManagerSidebar from "./components/ManagerSidebar";
import "./style.css";
import "../../common/styles/sidebar.css";
const Manager = ({ children }) => {
  return (
    <div className="flex manager-section">
      <ManagerSidebar />
      {children}
    </div>
  );
};

export default Manager;
