import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const PrivateRoutes = () => {
  const { user } = useContext(UserContext);

  return user ? (
    user.role_id == 2 ? (
      <Navigate to="/dashboard/manager" />
    ) : user.role_id == 1 ? (
      <Navigate to="/dashboard/admin" />
    ) : (
      <Outlet />
    )
  ) : (
    <Outlet />
  );
};

export default PrivateRoutes;
