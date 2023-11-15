import "./authentication.css";
import { Outlet } from "react-router-dom";

const AuthenticationLayout = () => {
  return (
    <div className="layout-background min-h-screen px-2 py-6 md:px-16 md:py-16 lg:px-32 lg:py-20">
      <Outlet />
    </div>
  );
};

export default AuthenticationLayout;
