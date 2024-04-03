import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const PrivateRoutes = () => {
  const { user } = useContext(UserContext);

  return user.role_id == 2 ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
