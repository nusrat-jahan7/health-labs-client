import { FaCheck, FaDownload } from "react-icons/fa6";
import SectionTitle from "../../components/SectionTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../components/Spinner";

const TestResults = () => {
  const client = useAxiosPublic();
  const secureClient = useAxiosSecure();
  const { user, loading } = useAuth();

  const { data: tests } = useQuery({
    queryKey: ["tests"],
    queryFn: () => client.get(`/tests`).then(({ data }) => data.result),
  });

  const { data: appointments, isLoading } = useQuery({
    queryKey: ["appointments", user?.email],
    queryFn: () =>
      secureClient
        .get(`/appointments/${user?.email}`)
        .then(({ data }) => data.result),
    enabled: !loading,
  });

  if (isLoading || loading) {
    return <Spinner />;
  }

  const deliveredAppointments = appointments.filter(
    (el) => el?.status === "delivered"
  );

  const handleDownload = (fileUrl) => {
    const link = document.createElement("a");
    link.href = fileUrl;

    link.download = "test_result.pdf";
    link.target = "_blank";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <div>
      <SectionTitle heading="My Test Results" />

      <div className="w-11/12 mx-auto border-y-4 border-blue-600 my-10 overflow-x-scroll lg:overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-lg">
            <tr className="text-center">
              <th className="text-left pl-5">Test Details</th>
              <th>Patient Info</th>
              <th>Appointment</th>
              <th>Status</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {deliveredAppointments?.map((el) => (
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
                  <div className="badge badge-success pb-0.5 text-white uppercase">
                    delivered
                  </div>
                </td>
                <td className="w-auto mx-auto">
                  <button
                    onClick={() => handleDownload(el?.test_result)}
                    className="btn btn-ghost text-xl text-blue-500 w-full mx-auto"
                  >
                    <FaDownload></FaDownload>
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

export default TestResults;
