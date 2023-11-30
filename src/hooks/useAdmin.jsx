import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const client = useAxiosSecure();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: () =>
      client.get(`/is_admin/${user?.email}`).then(({ data }) => data),
    enabled: !loading,
  });
  return [isAdmin?.admin, isAdminLoading];
};

export default useAdmin;
