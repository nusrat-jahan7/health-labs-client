import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "/images/footer-logo.png";
import { FaBook, FaHome, FaRegStickyNote, FaUser } from "react-icons/fa";
import { GrTest } from "react-icons/gr";
import { FaUsers } from "react-icons/fa6";
import { MdNoteAdd, MdOutlineEventNote } from "react-icons/md";

const Dashboard = () => {
  const isAdmin = true;

  return (
    <div className="flex max-w-7xl mx-auto">
      <div className="w-3/12 min-h-screen bg-blue-500">
        <div className="flex justify-center mt-5">
          <Link to="/">
            <img className="w-40" src={logo} alt="" />
          </Link>
        </div>
        <ul className="p-4 pt-7 space-y-3">
          {isAdmin ? (
            <>
              <h1 className="text-2xl font-bold text-white text-center">
                Admin Dashboard
              </h1>
              <li>
                <NavLink
                  to="/dashboard/admin/all-users"
                  className="btn btn-ghost flex items-center gap-2 text-xl text-white mt-4"
                >
                  {" "}
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/admin/add-test"
                  className="btn btn-ghost flex items-center gap-2 text-xl text-white mt-4"
                >
                  {" "}
                  <MdNoteAdd></MdNoteAdd> Add Test
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/admin/all-test"
                  className="btn btn-ghost flex items-center gap-2 text-xl text-white mt-4"
                >
                  {" "}
                  <MdOutlineEventNote /> All Test
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/admin/all-test"
                  className="btn btn-ghost flex items-center gap-2 text-xl text-white mt-4"
                >
                  {" "}
                  <MdOutlineEventNote /> Add Banner
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/admin/all-test"
                  className="btn btn-ghost flex items-center gap-2 text-xl text-white mt-4"
                >
                  {" "}
                  <MdOutlineEventNote /> All Banner
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/admin/all-test"
                  className="btn btn-ghost flex items-center gap-2 text-xl text-white mt-4"
                >
                  {" "}
                  <MdOutlineEventNote /> Reservation
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/dashboard/my-profile"
                  className="btn btn-ghost flex items-center gap-2 text-xl text-white mt-4"
                >
                  {" "}
                  <FaUser></FaUser> My Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/my-appointments"
                  className="btn btn-ghost flex items-center gap-2 text-xl text-white mt-4"
                >
                  {" "}
                  <FaBook></FaBook> My Appointments
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/test-results"
                  className="btn btn-ghost flex items-center gap-2 text-xl text-white mt-4"
                >
                  {" "}
                  <FaRegStickyNote></FaRegStickyNote>Test Result
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            {" "}
            <NavLink
              to="/"
              className="btn btn-ghost flex items-center gap-2 text-xl text-white mt-4"
            >
              {" "}
              <FaHome></FaHome> Home{" "}
            </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink
              to="/all-test"
              className="btn btn-ghost flex items-center gap-2 text-xl text-white mt-4"
            >
              {" "}
              <GrTest></GrTest> All tests{" "}
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
