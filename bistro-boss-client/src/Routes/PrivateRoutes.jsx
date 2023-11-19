import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return (
    <Navigate
      to="/authentication/login"
      state={{ from: location }}
      replace
    ></Navigate>
  );
};

export default PrivateRoutes;
