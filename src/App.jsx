import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Footer from "./components/Footer";

function App() {
  const locaation = useLocation();
  const noNavbarFooter =
    locaation.pathname.includes("login") ||
    locaation.pathname.includes("register");
  return (
    <>
      {noNavbarFooter || <Navbar />}
      <Outlet />
      {noNavbarFooter || <Footer />}
    </>
  );
}

export default App;
