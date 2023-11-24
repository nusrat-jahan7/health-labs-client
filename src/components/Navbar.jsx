import { Link, NavLink } from "react-router-dom";
import navLogo from "/images/nav-logo.png";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  const menus = (
    <>
      <NavLink to="/" className="px-3 text-lg font-semibold">
        Home
      </NavLink>
      <NavLink to="/" className="px-3 text-lg font-semibold">
        All Tests
      </NavLink>
      <NavLink className="px-3 text-lg font-semibold">Featured Tests</NavLink>
    </>
  );
  // fixed z-10 bg-opacity-30 bg-black
  return (
    <div className="drawer bg-opacity-30 bg-white text-black max-w-7xl mx-auto">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <img className="w-36" src={navLogo} alt="" />
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {menus}
            </ul>
          </div>
          <Link to={"/dashboard"}>
            <FaCartPlus className="text-3xl mr-3"></FaCartPlus>
          </Link>
          <Link to={"/login"}>
            <button className="btn bg-blue-500 text-white text-lg hover:bg-blue-700">
              Sign in
            </button>
          </Link>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          {menus}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
