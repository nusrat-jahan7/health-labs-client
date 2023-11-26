import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "/images/footer-logo.png";
import { FaBook, FaHome, FaRegStickyNote, FaUser } from "react-icons/fa";
import { GrTest } from "react-icons/gr";

const Dashboard = () => {
  return (
    <div className="flex max-w-7xl mx-auto">
      <div className="w-3/12 min-h-screen bg-blue-500">
        <div className="flex justify-center mt-5">
          <Link to="/">
            <img className="w-40" src={logo} alt="" />
          </Link>
        </div>
        <ul className="p-4 pt-7 space-y-3">
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
