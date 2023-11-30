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
import AllTest from "../pages/Dashboard/Admin/AllTest";
import Reservation from "../pages/Dashboard/Admin/Reservation";
import AddBanner from "../pages/Dashboard/Admin/AddBanner";
import AllBanner from "../pages/Dashboard/Admin/AllBanner";
import Payment from "../pages/Payment/Payment";
import Blog from "../pages/Blog";
import Reviews from "../pages/Reviews";
import Faq from "../pages/Faq";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

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
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/tests/:slug/:date",
        element: (
          <PrivateRoute>
            <TestDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://diagnostic-center-server.vercel.app/tests/${params.slug}/${params.date}`
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
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/my-profile",
        element: (
          <PrivateRoute>
            {" "}
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-appointments",
        element: (
          <PrivateRoute>
            <Appointments />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/test-results",
        element: (
          <PrivateRoute>
            <TestResults />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/admin/all-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin/add-test",
        element: (
          <AdminRoute>
            <AddTest />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin/all-test",
        element: (
          <AdminRoute>
            <AllTest />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin/reservation",
        element: (
          <AdminRoute>
            <Reservation />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin/add-banner",
        element: (
          <AdminRoute>
            <AddBanner />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin/all-banner",
        element: (
          <AdminRoute>
            <AllBanner />
          </AdminRoute>
        ),
      },
    ],
  },
]);
