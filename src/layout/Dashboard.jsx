import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "/images/footer-logo.png";
import { FaBook, FaHome, FaRegStickyNote, FaUser } from "react-icons/fa";
import { GrTest } from "react-icons/gr";
import { FaUsers } from "react-icons/fa6";
import {
  MdDocumentScanner,
  MdEditDocument,
  MdNoteAdd,
  MdOutlineEventNote,
} from "react-icons/md";
import { IoDocuments } from "react-icons/io5";

const Dashboard = () => {
  const isAdmin = true;

  return (
    <div className="lg:flex max-w-7xl mx-auto gap-12 bg-blue-50">
      <div className="lg:w-3/12 lg:min-h-screen bg-blue-500">
        <div className="flex justify-center mt-5">
          <Link to="/">
            <img className="w-40" src={logo} alt="" />
          </Link>
        </div>
        <ul className="p-4 pt-7 space-y-3 flex flex-wrap lg:flex-col">
          {isAdmin ? (
            <>
              <h1 className="lg:text-2xl font-bold text-white text-center">
                Admin Dashboard
              </h1>
              <li>
                <NavLink
                  to="/dashboard/admin/all-users"
                  className="btn btn-ghost flex items-center gap-2 lg:text-xl text-white mt-4"
                >
                  {" "}
                  <FaUsers className="hidden lg:block"></FaUsers> All Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/admin/add-test"
                  className="btn btn-ghost flex items-center gap-2 lg:text-xl text-white mt-4"
                >
                  {" "}
                  <MdNoteAdd className="hidden lg:block"></MdNoteAdd> Add Test
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/admin/all-test"
                  className="btn btn-ghost flex items-center gap-2 lg:text-xl text-white mt-4"
                >
                  {" "}
                  <IoDocuments className="hidden lg:block"></IoDocuments> All
                  Test
                </NavLink>
                <li>
                  <NavLink
                    to="/dashboard/admin/reservation"
                    className="btn btn-ghost flex items-center gap-2 lg:text-xl text-white mt-4"
                  >
                    {" "}
                    <MdOutlineEventNote className="hidden lg:block" />{" "}
                    Reservation
                  </NavLink>
                </li>
              </li>
              <li>
                <NavLink
                  to="/dashboard/admin/add-banner"
                  className="btn btn-ghost flex items-center gap-2 lg:text-xl text-white mt-4"
                >
                  {" "}
                  <MdEditDocument className="hidden lg:block" /> Add Banner
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/admin/all-banner"
                  className="btn btn-ghost flex items-center gap-2 lg:text-xl text-white mt-4"
                >
                  {" "}
                  <MdDocumentScanner className="hidden lg:block" /> All Banner
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-white text-center">
                User Dashboard
              </h1>
              <li>
                <NavLink
                  to="/dashboard/my-profile"
                  className="btn btn-ghost flex items-center gap-2 lg:text-xl text-white mt-4"
                >
                  {" "}
                  <FaUser className="hidden lg:block"></FaUser> My Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/my-appointments"
                  className="btn btn-ghost flex items-center gap-2 lg:text-xl text-white mt-4"
                >
                  {" "}
                  <FaBook className="hidden lg:block"></FaBook> My Appointments
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/test-results"
                  className="btn btn-ghost flex items-center gap-2 lg:text-xl text-white mt-4"
                >
                  {" "}
                  <FaRegStickyNote className="hidden lg:block"></FaRegStickyNote>
                  Test Result
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            {" "}
            <NavLink
              to="/"
              className="btn btn-ghost flex items-center gap-2 lg:text-xl text-white mt-4"
            >
              {" "}
              <FaHome className="hidden lg:block"></FaHome> Home{" "}
            </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink
              to="/all-test"
              className="btn btn-ghost flex items-center gap-2 lg:text-xl text-white mt-4"
            >
              {" "}
              <GrTest className="hidden lg:block"></GrTest> All tests{" "}
            </NavLink>{" "}
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
