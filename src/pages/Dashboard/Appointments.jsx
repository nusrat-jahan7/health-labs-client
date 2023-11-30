import SectionTitle from "../../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";

const Appointments = () => {
  const client = useAxiosPublic();
  const secureClient = useAxiosSecure();
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const { data: tests } = useQuery({
    queryKey: ["tests"],
    queryFn: () => client.get(`/tests`).then(({ data }) => data.result),
  });

  const {
    data: appointments,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tests", user?.email],
    queryFn: () =>
      secureClient
        .get(`/appointments/${user?.email}`)
        .then(({ data }) => data.result),
    enabled: !loading,
  });

  const handleCancel = (id) => {
    secureClient.delete(`/appointments/${id}`).then(({ data }) => {
      if (data?.result?.deletedCount) {
        refetch();
        toast.success("Appointment canceled successfully");
      }
    });
  };

  if (isLoading || loading) {
    return <Spinner />;
  }

  return (
    <div>
      <SectionTitle heading="Upcoming Appointments" />

      <div className="w-11/12 mx-auto border-y-4 border-blue-600 my-10 overflow-x-scroll lg:overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-lg">
            <tr className="text-center">
              <th className="text-left pl-5">Test Details</th>
              <th>Patient Info</th>
              <th>Appointment</th>
              <th>Payment Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
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
                        {
                          tests.find((test) => el?.test_slug === test?.slug)
                            ?.title
                        }
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
                  <br />
                  {!el?.payment_status && (
                    <div
                      onClick={() => {
                        const paymentInfo = {
                          appointment_id: el?._id,
                          user_email: user?.email,
                          price: tests.find(
                            (test) => el?.test_slug === test?.slug
                          )?.price,
                        };
                        localStorage.setItem(
                          "appointment-info",
                          JSON.stringify(paymentInfo)
                        );
                        navigate("/payment");
                      }}
                      className="badge badge-primary pb-0.5 text-white cursor-pointer mt-2"
                    >
                      Pay Now
                    </div>
                  )}
                </td>
                <td className="w-auto mx-auto text-center">
                  <button
                    onClick={() => handleCancel(el?._id)}
                    className="btn btn-error btn-sm text-white cursor-pointer uppercase"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
