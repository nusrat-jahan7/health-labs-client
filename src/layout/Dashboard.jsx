import { NavLink, Outlet } from "react-router-dom";
import logo from "/images/footer-logo.png";
import { FaBook, FaPeopleArrows, FaUser } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex max-w-7xl mx-auto">
      <div className="w-3/12 min-h-screen bg-blue-500">
        <div className="flex justify-center mt-5">
          <img className="w-40" src={logo} alt="" />
        </div>
        <ul className="p-4 pt-7 space-y-3">
          <NavLink
            to="/dashboard/profile"
            className="btn btn-ghost flex items-center gap-2 text-xl text-white mt-4"
          >
            {" "}
            <FaUser></FaUser> My Profile
          </NavLink>
          <NavLink
            to="/dashboard/my-appointments"
            className="btn btn-ghost flex items-center gap-2 text-xl text-white mt-4"
          >
            {" "}
            <FaBook></FaBook> My Appointments
          </NavLink>
          <NavLink
            to="/dashboard/test-results"
            className="btn btn-ghost flex items-center gap-2 text-xl text-white mt-4"
          >
            {" "}
            <FaBook></FaBook>Test Result
          </NavLink>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
