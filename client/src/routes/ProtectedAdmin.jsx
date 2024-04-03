import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context/userContent";

const PrivateRoutes = () => {
  const { user } = useContext(UserContext);

  return user.role_id == 1 ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
