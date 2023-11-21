import { Outlet } from "react-router-dom";
import DashboardNavbar from "../DashboardNavBar/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="flex w-full ">
      <div className="">
        <DashboardNavbar />
      </div>

      <div
        className="flex-1
       text-center px-32"
      >
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
