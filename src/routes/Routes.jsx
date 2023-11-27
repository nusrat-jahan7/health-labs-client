import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../layout/Dashboard";
import FeaturedTest from "../pages/FeaturedTest";
import AllTests from "../pages/AllTests";
import TestDetails from "../pages/TestDetails";
import MyProfile from "../pages/Dashboard/MyProfile";
import Appointments from "../pages/Dashboard/Appointments";
import TestResults from "../pages/Dashboard/TestResults";
import AllUsers from "../pages/Dashboard/Admin/AllUsers";
import AddTest from "../pages/Dashboard/Admin/AddTest";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/featured-test",
        element: <FeaturedTest />,
      },
      {
        path: "/all-test",
        element: <AllTests />,
      },
      {
        path: "/tests/:slug",
        element: <TestDetails />,
        loader: ({ params }) =>
          fetch(
            `https://diagnostic-center-server.vercel.app/tests/${params.slug}`
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/my-profile",
        element: <MyProfile />,
      },
      {
        path: "/dashboard/my-appointments",
        element: <Appointments />,
      },
      {
        path: "/dashboard/test-results",
        element: <TestResults />,
      },
      {
        path: "/dashboard/admin/all-users",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/admin/add-test",
        element: <AddTest />,
      },
    ],
  },
]);
