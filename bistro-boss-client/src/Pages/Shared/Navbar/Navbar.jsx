import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/UseAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Sign Out Successfully",
          showClass: {
            popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
          },
          hideClass: {
            popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
          },
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-amber-500" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? "text-amber-500" : "")}
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink to="/shop/salad">Our Shop</NavLink>
      </li>
      <li>
        {user ? (
          <button onClick={handleLogOut}>Log Out</button>
        ) : (
          <NavLink to="/authentication/login">Log In</NavLink>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-black text-white opacity-50 fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="uppercase text-black menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {navLinks}
          </ul>
        </div>
        <div className="uppercase pl-12">
          <h2 className="font-extrabold text-3xl ">Bistro boss</h2>
          <h3 style={{ letterSpacing: "5px" }} className="font-bold text-2xl ">
            Restaurant
          </h3>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="uppercase menu menu-horizontal px-1 space-x-2">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">{user && <p>{user?.displayName}</p>}</div>
    </div>
  );
};

export default Navbar;
