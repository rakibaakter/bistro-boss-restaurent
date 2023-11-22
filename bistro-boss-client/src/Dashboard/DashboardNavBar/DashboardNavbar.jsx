import { NavLink } from "react-router-dom";
import {
  FaBitbucket,
  FaBook,
  FaCalendar,
  FaCreditCard,
  FaHome,
  FaList,
  FaShoppingBag,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { FaBookBookmark, FaRankingStar } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";

const DashboardNavbar = () => {
  const isAdmin = true;

  const mainNavItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          <FaHome />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          <LuMenu />
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop/salad"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          <FaShoppingBag />
          Shop
        </NavLink>
      </li>
    </>
  );

  const adminNavItems = (
    <>
      <li>
        <NavLink
          to="/dashboard/admin-home"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          <FaHome />
          Admin Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/add-item"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          <FaUtensils />
          Add Items
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/manage-items"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          <FaList />
          Manage Items
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/manage-bookings"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          <FaBook />
          Manage Bookings
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/all-users"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          <FaUsers />
          All Users
        </NavLink>
      </li>
    </>
  );

  const userNavItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          <FaHome />
          User Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          <FaCalendar />
          Reservation
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          <FaCreditCard />
          Payment History
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/my-cart"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          <FaBitbucket />
          My Cart
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          <FaRankingStar />
          Add Review
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          <FaBookBookmark />
          My Booking
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="drawer z-10 lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-ghost drawer-button lg:hidden"
          >
            <MdDashboard className="text-4xl text-orange-400 " />
          </label>
        </div>
        <div className="drawer-side  ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul
            className="menu p-4 md:w-80 min-h-full
           bg-orange-400 text-base-content md:text-xl font-medium uppercase"
          >
            {/* Sidebar content here */}
            {isAdmin ? adminNavItems : userNavItems}
            <div className="divider"></div>
            {mainNavItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
