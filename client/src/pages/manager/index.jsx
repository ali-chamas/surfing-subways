import React from "react";
import ManagerSidebar from "./components/ManagerSidebar";

const Manager = ({ children }) => {
  return (
    <div className="flex">
      <ManagerSidebar />
      {children}
    </div>
  );
};

export default Manager;
