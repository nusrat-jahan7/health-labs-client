import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = () => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();

  if (loading || isAdminLoading) {
    return <Spinner />;
  }

  if (!user || !isAdmin) {
    return <Navigate to="/login" state={{ from: location }}></Navigate>;
  }

  return children;
};

export default AdminRoute;
