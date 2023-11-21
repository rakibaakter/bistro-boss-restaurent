import { Outlet } from "react-router-dom";
import DashboardNavbar from "../DashboardNavBar/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="flex w-full ">
      <div className="">
        <DashboardNavbar />
      </div>

      <div
        className="flex-1 max-h-screen overflow-auto
       text-center px-4 md:px-16 lg:px-32"
      >
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
