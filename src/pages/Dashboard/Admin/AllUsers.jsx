import { FaUser, FaUsers } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Spinner from "../../../components/Spinner";
import { useState } from "react";
import { districts, upazilas } from "../../../enums";
import toast from "react-hot-toast";

const AllUsers = () => {
  const { user, loading } = useAuth();
  const client = useAxiosSecure();
  const [userData, setUserData] = useState();

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => client.get("/admin/users").then(({ data }) => data.result),
  });

  if (loading || isLoading) {
    return <Spinner />;
  }

  const usersWithoutMe = users?.filter((el) => el?.email !== user?.email);

  const district = districts.find((dis) => dis.value === userData?.district_id);

  const upazila = upazilas.find((upa) => upa.value === userData?.upazila_id);

  const updateUserStatus = (user) => {
    const payload = {
      status: !user?.status,
      role: user?.role,
    };

    client.patch(`/admin/users/${user?.email}`, payload).then(({ data }) => {
      if (data?.result?.modifiedCount) {
        refetch();
        toast.success("Successfully update user status");
      }
    });
  };

  const updateUserRole = (user) => {
    const payload = {
      status: user?.status,
      role: user?.role === "admin" ? "patient" : "admin",
    };

    client.patch(`/admin/users/${user?.email}`, payload).then(({ data }) => {
      if (data?.result?.modifiedCount) {
        refetch();
        toast.success("Successfully update user role");
      }
    });
  };

  return (
    <div>
      <SectionTitle heading="All Users" />

      <div className="w-11/12 mx-auto border-y-4 border-blue-600 my-10 overflow-x-scroll lg:overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-lg">
            <tr className="text-center">
              <th className="text-left pl-5">User Info</th>
              <th className="text-left">Email</th>
              <th>Account Status</th>
              <th> Role </th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {usersWithoutMe?.map((el) => (
              <tr key={el?._id} className="text-lg">
                <td className="w-auto">
                  <div className="flex items-center gap-3 w-auto">
                    <div className="avatar">
                      <div className="mask mask-squircle w-14 h-14">
                        <img src={el?.avatar} alt="" />
                      </div>
                    </div>
                    <div>
                      <span className="font-bold">{el?.name}</span>
                    </div>
                  </div>
                </td>
                <td className="w-auto mx-auto text-left">
                  <div>{el?.email}</div>
                </td>
                <td className="w-auto mx-auto text-center">
                  {el?.status === true ? (
                    <div
                      onClick={() => updateUserStatus(el)}
                      className="swap-on btn btn-ghost btn-sm text-green-500 text-xl font-semibold"
                    >
                      Active
                    </div>
                  ) : (
                    <div
                      onClick={() => updateUserStatus(el)}
                      className="swap-off btn btn-ghost btn-sm text-red-500 text-xl font-semibold"
                    >
                      Blocked
                    </div>
                  )}
                </td>
                <td className="w-auto mx-auto text-center">
                  {el?.role === "admin" ? (
                    <button
                      onClick={() => updateUserRole(el)}
                      className="btn btn-ghost btn-sm text-green-500"
                    >
                      <FaUser className="text-2xl"></FaUser>
                    </button>
                  ) : (
                    <button
                      onClick={() => updateUserRole(el)}
                      className="btn btn-ghost btn-sm text-blue-500"
                    >
                      <FaUsers className="text-2xl"></FaUsers>
                    </button>
                  )}
                </td>
                <td className="w-fit mx-auto text-center">
                  <button
                    className="btn bg-blue-600 hover:bg-blue-800 text-white text-lg block w-full whitespace-nowrap"
                    onClick={() => {
                      setUserData(el);
                      document.getElementById("my_modal_3").showModal();
                    }}
                  >
                    See Details
                  </button>

                  {/* modal starts here */}
                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box w-10/12 max-w-2xl text-left">
                      <form method="dialog">
                        <button
                          onClick={() => {
                            setUserData(null);
                            document.getElementById("my_modal_3").close();
                          }}
                          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >
                          ✕
                        </button>
                      </form>
                      <h3 className="font-bold text-3xl px-4 text-center">
                        User Information
                      </h3>
                      <div className="avatar flex justify-start p-4">
                        <div className="w-24 rounded ">
                          <img src={userData?.avatar} />
                        </div>
                      </div>
                      <h3 className="font-bold text-2xl px-4 text-left">
                        {userData?.name}
                      </h3>
                      <div className="pl-4 mt-6">
                        <p className="py-2 text-lg font-semibold">
                          Email Address : {userData?.email}
                        </p>
                        <p className="py-2 text-lg font-semibold">
                          Blood Group : {userData?.blood_group || "N/A"}
                        </p>
                        <p className="py-2 text-lg font-semibold">
                          District : {district?.label || "N/A"}
                        </p>
                        <p className="py-2 text-lg font-semibold">
                          Upazila : {upazila?.label || "N/A"}
                        </p>
                        <p className="py-2 text-lg font-semibold">
                          Status :{" "}
                          {userData?.status === true ? "Active" : "Blocked"}
                        </p>
                        <p className="py-2 text-lg font-semibold capitalize">
                          Role :{" "}
                          {userData?.role === "admin" ? userData?.role : "User"}
                        </p>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
