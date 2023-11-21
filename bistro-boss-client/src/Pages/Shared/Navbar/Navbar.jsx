import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { MdOutlineShoppingCart } from "react-icons/md";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();

  // console.log(user?.photoURL);

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
        <NavLink
          to="/shop/salad"
          className={({ isActive }) => (isActive ? "text-amber-500" : "")}
        >
          Our Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/my-cart"
          className={({ isActive }) => (isActive ? "text-amber-500" : "")}
        >
          <div className="flex relative">
            <MdOutlineShoppingCart className="text-3xl text-amber-600 " />
            <span className="badge absolute  -right-3 -top-3 bg-white text-amber-600 h-6 w-6">
              {cart.length}
            </span>
          </div>
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="navbar bg-black text-white opacity-70 fixed z-10 font-bold">
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
            className="uppercase text-black menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-white  rounded-box w-52 "
          >
            {navLinks}
          </ul>
        </div>
        <div className="uppercase md:pl-12">
          <h2 className="md:font-extrabold md:text-3xl ">Bistro boss</h2>
          <h3
            // style={{ letterSpacing: "5px" }}
            className="md:font-bold md:text-2xl md:tracking-[5px] "
          >
            Restaurant
          </h3>
        </div>
      </div>
      <div className="navbar-center hidden w-2/3 lg:flex lg:justify-end">
        <ul className="uppercase menu menu-horizontal px-1 space-x-2 items-center">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end pr-2">
        {user ? (
          <div className="flex items-center gap-2 md:gap-4">
            <div className="flex flex-col justify-center">
              <img
                className="h-8 w-6 md:h-8 md:w-10 rounded-full mx-auto"
                src={user?.photoURL}
                alt=""
              />
              <span>{user?.displayName}</span>
            </div>
            <button onClick={handleLogOut} className="font-normal">
              Log Out
            </button>
          </div>
        ) : (
          <NavLink to="/authentication/login">Log In</NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
