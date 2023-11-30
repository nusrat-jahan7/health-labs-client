import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Spinner from "../../../components/Spinner";
import SectionTitle from "../../../components/SectionTitle";

const Reservations = () => {
  const { loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const [appointmentId, setAppointmentId] = useState(null);

  const { data: tests, loading: testIsLoading } = useQuery({
    queryKey: ["tests"],
    queryFn: () => axiosPublic.get(`/tests`).then(({ data }) => data.result),
  });

  const {
    data: appointments,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["appointments"],
    queryFn: () =>
      axiosSecure.get(`admin/appointments`).then(({ data }) => data.result),
  });

  const handleSubmitReport = (e) => {
    e.preventDefault();

    const form = e.target;
    const result = form?.test_result?.value;

    const payload = {
      status: "delivered",
      test_result: result,
    };

    axiosSecure
      .patch(`/admin/appointments/${appointmentId}`, payload)
      .then((result) => {
        console.log(result);
        if (result?.data?.result?.modifiedCount) {
          refetch();
          document.getElementById("my_modal_3").close();
          toast.success("Report delivered successful");
        }
      });
  };

  const handleDelete = (id) => {
    axiosSecure.delete(`/appointments/${id}`).then((result) => {
      if (result?.data?.result?.deletedCount) {
        toast.success("Reservation deleted successful");
        refetch();
      }
    });
  };

  if (loading || isLoading || testIsLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <SectionTitle heading="Reservations" />

      <div className="w-11/12 mx-auto border-y-4 border-blue-600 my-10 overflow-x-scroll lg:overflow-x-auto">
        <table className="table">
          <thead className="text-lg">
            <tr className="text-center">
              <th className="text-left pl-5">Test Details</th>
              <th>Patient Info</th>
              <th>Appointment</th>
              <th>Payment Status</th>
              <th>Delivery Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="text-center">
            {appointments?.map((el) => (
              <tr key={el?._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={
                            tests.find((test) => el?.test_slug === test?.slug)
                              ?.image
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {tests.find((test) => el?.test_slug === test?.slug)
                          ?.title || "N/A"}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="w-auto mx-auto text-center">
                  {el?.user_email}
                  <br />

                  {el?.phone && (
                    <span className="badge badge-outline gap-2 pb-0.5 ">
                      {el?.phone}
                    </span>
                  )}
                </td>
                <td className="text-center">
                  {el?.booking_date}
                  <br />
                  {el?.booking_slot}
                </td>
                <td className="w-auto mx-auto text-center">
                  <div
                    className={`badge ${
                      el?.payment_status === true
                        ? "badge-success"
                        : "badge-error"
                    } gap-2 pb-0.5 text-white uppercase`}
                  >
                    {el?.payment_status === true ? "Paid" : "Unpaid"}
                  </div>
                </td>
                <td>
                  <button
                    disabled={el?.status === "delivered"}
                    onClick={() => {
                      setAppointmentId(el?._id);
                      document.getElementById("my_modal_3").showModal();
                    }}
                    className="btn btn-ghost btn-sm text-blue-500 capitalize disabled:bg-transparent disabled:text-success"
                  >
                    <FaCloudUploadAlt></FaCloudUploadAlt>
                    {el?.status}
                  </button>
                </td>
                <td className="w-auto mx-auto text-center">
                  <button
                    onClick={() => handleDelete(el?._id)}
                    className="btn btn-error btn-sm text-white cursor-pointer uppercase"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-3xl px-4 text-gray-600 text-center">
                Submit Report
              </h3>
              <form onSubmit={handleSubmitReport}>
                <div className="flex-1 mt-5">
                  <p className="font-semibold pb-2">Report as PDF Link</p>
                  <input
                    required
                    type="text"
                    name="test_result"
                    placeholder="Only Submit PDF Link"
                    className="p-2 rounded-md input input-bordered w-full"
                  />
                </div>
                <button
                  type="submit"
                  className="mx-auto w-full mt-4 btn bg-blue-500 hover:bg-blue-500 text-white text-center"
                >
                  Submit
                </button>
              </form>
            </div>
          </dialog>
        </table>
      </div>
    </div>
  );
};

export default Reservations;
