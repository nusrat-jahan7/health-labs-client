import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();

  if (loading) {
    return <Spinner />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
