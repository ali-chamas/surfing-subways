import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const PrivateRoutes = () => {
  const { token } = useContext(UserContext);

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
