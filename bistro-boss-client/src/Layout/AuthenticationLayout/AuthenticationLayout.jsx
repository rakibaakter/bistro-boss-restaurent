import "./authentication.css";
import { Outlet } from "react-router-dom";

const AuthenticationLayout = () => {
  return (
    <div className="layout-background min-h-screen px-32 py-20">
      <Outlet />
    </div>
  );
};

export default AuthenticationLayout;
