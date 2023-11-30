import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "/images/footer-logo.png";
import { FaBook, FaHome, FaRegStickyNote, FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import {
  MdDocumentScanner,
  MdEditDocument,
  MdNoteAdd,
  MdOutlineEventNote,
} from "react-icons/md";
import { IoDocuments } from "react-icons/io5";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const { logOut } = useAuth();

  return (
    <div className="lg:flex  bg-blue-50">
      <div className="lg:w-3/12 lg:min-h-screen bg-blue-500 border-r border-blue-500 lg:sticky lg:h-screen lg:top-0 ">
        <div className="flex justify-center pt-5">
          <Link to="/">
            <img className="w-40" src={logo} alt="" />
          </Link>
        </div>
        <ul className="p-5 ">
          {isAdmin ? (
            <>
              <div>
                <h1 className="text-2xl font-bold text-white text-center">
                  Admin Dashboard
                </h1>
              </div>
              <div className="flex justify-center flex-wrap lg:block">
                <li>
                  <NavLink
                    to="/dashboard/admin/all-users"
                    className="btn btn-ghost flex items-center gap-2 lg:text-xl text-white mt-2 justify-start"
                  >
                    <FaUsers className="hidden lg:block"></FaUsers> All Users
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/admin/add-test"
                    className="btn btn-ghost flex items-center gap-2 lg:text-xl text-white mt-2 justify-start"
                  >
                    <MdNoteAdd className="hidden lg:block"></MdNoteAdd> Add Test
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/admin/all-test"
                    className="btn btn-ghost flex items-center gap-2 lg:text-xl text-white mt-2 justify-start"
                  >
                    <IoDocuments className="hidden lg:block"></IoDocuments> All
                    Test
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/admin/reservation"
                    className="btn btn-ghost flex items-center gap-2 lg:text-xl text-white mt-2 justify-start"
                  >
                    <MdOutlineEventNote className="hidden lg:block" />
                    Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/admin/add-banner"
                    className="btn btn-ghost flex items-center gap-2 lg:text-xl text-white mt-2 justify-start"
                  >
                    <MdEditDocument className="hidden lg:block" /> Add Banner
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/admin/all-banner"
                    className="btn btn-ghost flex items-center gap-2 lg:text-xl text-white mt-2 justify-start"
                  >
                    <MdDocumentScanner className="hidden lg:block" /> All Banner
                  </NavLink>
                </li>
              </div>
            </>
          ) : (
            <>
              <div>
                <h1 className="text-2xl font-bold text-white text-center">
                  User Dashboard
                </h1>
              </div>
              <div className="flex justify-center flex-wrap lg:block">
                <li>
                  <NavLink
                    to="/dashboard/my-profile"
                    className="btn btn-ghost flex items-center gap-2 lg:text-xl text-white mt-2 justify-start"
                  >
                    <FaUser className="hidden lg:block"></FaUser> My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/my-appointments"
                    className="btn btn-ghost flex items-center gap-2 lg:text-xl text-white mt-2 justify-start"
                  >
                    <FaBook className="hidden lg:block"></FaBook> My
                    Appointments
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/test-results"
                    className="btn btn-ghost flex items-center gap-2 lg:text-xl text-white mt-2 justify-start"
                  >
                    <FaRegStickyNote className="hidden lg:block"></FaRegStickyNote>
                    Test Result
                  </NavLink>
                </li>
              </div>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink
              to="/"
              className="btn btn-ghost flex items-center gap-2 lg:text-xl text-white lg:justify-start"
            >
              <FaHome className="hidden lg:block"></FaHome> Home
            </NavLink>
          </li>
        </ul>
        <div
          onClick={logOut}
          className="btn rounded-none text-blue-500 lg:flex items-center lg:text-xl mt-4 absolute bottom-0 left-0 w-full hover:bg-red-500 hover:text-white border-none hidden"
        >
          Logout
        </div>
      </div>
      <div className="flex-1 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
