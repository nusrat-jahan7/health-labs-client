import { Link, NavLink } from "react-router-dom";
import navLogo from "/images/nav-logo.png";
import { FaCartPlus } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  const menus = (
    <>
      <li>
        <NavLink to="/" className="pr-5 text-lg text-gray-600 font-semibold">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-test"
          className="pr-5 text-lg text-gray-600 font-semibold"
        >
          All Tests
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/blog"}
          className="pr-5 text-lg text-gray-600 font-semibold"
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/reviews"}
          className="pr-5 text-lg text-gray-600 font-semibold"
        >
          Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/faq"}
          className="pr-5 text-lg text-gray-600 font-semibold"
        >
          FAQ
        </NavLink>
      </li>
    </>
  );
  // fixed z-10 bg-opacity-30 bg-black
  return (
    <div className="drawer bg-opacity-30 bg-white text-black max-w-7xl mx-auto z-50">
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
            <img className="w-60 hidden lg:block" src={navLogo} alt="" />
            <img className="w-36 lg:hidden" src={navLogo} alt="" />
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {menus}
            </ul>
          </div>

          <div className="hidden lg:block">
            {user?.email ? (
              <div className="flex items-center gap-2">
                <div className="relative group">
                  <div className="w-10 rounded-full cursor-pointer">
                    <img
                      className="rounded-full object-cover w-10 h-10"
                      src={
                        user?.photoURL ?? "https://i.ibb.co/t4NG2L4/user.png"
                      }
                    />
                  </div>
                  <div className="hidden z-50 group-hover:block rounded-md absolute right-[-1rem] min-w-[200px] bg-white drop-shadow-lg">
                    <p className="px-5 py-3 border-b font-medium text-md rounded-t-md cursor-default hover:bg-[#F5F5F5]">
                      {user?.displayName}
                    </p>
                    <Link
                      to={
                        isAdmin
                          ? "/dashboard/admin/all-users"
                          : "/dashboard/my-profile"
                      }
                      className="block px-5 py-3 border-b font-medium text-md rounded-t-md cursor-pointer hover:bg-[#F5F5F5]"
                    >
                      Dashboard
                    </Link>
                    <p
                      onClick={logOut}
                      className="px-5 py-3 border-b font-medium text-md cursor-pointer hover:bg-red-500 hover:text-white"
                    >
                      Logout
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <button className="hidden btn lg:inline-block">
                <Link to="/login">Sign in</Link>
              </button>
            )}
          </div>

          {/* {user?.email ? (
            <button
              onClick={logOut}
              className="btn bg-red-500 text-white text-lg hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="btn bg-blue-500 text-white text-lg hover:bg-blue-700">
                Sign in
              </button>
            </Link>
          )} */}
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
