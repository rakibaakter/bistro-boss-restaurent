import { Outlet } from "react-router-dom";
import DashboardNavbar from "../DashboardNavBar/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="flex ">
      <div className="w-1/2 ">
        <DashboardNavbar />
      </div>

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
