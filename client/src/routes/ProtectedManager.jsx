import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context/userContent";

const PrivateRoutes = () => {
  const { user } = useContext(UserContext);

  return user.role_id == 2 ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
