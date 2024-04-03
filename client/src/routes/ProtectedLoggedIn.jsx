import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context/userContent";

const PrivateRoutes = () => {
  const { token } = useContext(UserContext);

  return token ? <Navigate to="/" /> : <Outlet />;
};

export default PrivateRoutes;
