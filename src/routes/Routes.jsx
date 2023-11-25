import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../layout/Dashboard";
import FeaturedTest from "../pages/FeaturedTest";
import AllTests from "../pages/AllTests";

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
        element: <AllTests />
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
    // children=[
    //   {
    //     path: "/dashboard",
    //     element:
    //   }
    // ]
  },
]);
