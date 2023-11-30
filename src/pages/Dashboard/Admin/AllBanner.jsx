import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllBanner = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: banners,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["/banners"],
    queryFn: () => axiosSecure.get(`/banners`).then(({ data }) => data.result),
  });

  const handleUpdateBanner = (id) => {
    const updateData = {};

    axiosSecure.patch(`/banners/${id}`, updateData).then((result) => {
      console.log(result);
      if (result?.data?.result.modifiedCount > 0) {
        toast.success("Banner status updated Successfully");
        refetch();
      }
    });
  };

  const handleDelete = (id) => {
    axiosSecure.delete(`/banners/${id}`).then((result) => {
      if (result?.data?.result?.deletedCount === 1) {
        toast.success("Banner delete Successfully");
        refetch();
      }
    });
  };

  return (
    <div>
      <SectionTitle heading="All Banner" />

      <div className="w-11/12 mx-auto border-y-4 border-blue-600 my-10 overflow-x-scroll lg:overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-lg">
            <tr className="text-center">
              <th>Banner Image</th>
              <th>Title</th>
              <th>Coupon Code</th>
              <th>Discount Rate</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="text-center">
            {banners?.map((el) => {
              return (
                <>
                  <tr key={el?._id}>
                    <td>
                      <div className="flex items-center gap-3 justify-center">
                        <div className="avatar">
                          <div className="mask w-20 h-12 rounded-md">
                            <img
                              src={el?.image}
                              alt=""
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="font-bold capitalize">{el?.title}</span>
                    </td>
                    <td className="text-lg font-semibold text-center">
                      <code>{el?.coupon_code}</code>
                    </td>
                    <td className="text-lg font-semibold text-center">
                      {el?.discount_rate}%
                    </td>
                    <td>
                      {el?.isActive ? (
                        <button
                          onClick={() => handleUpdateBanner(el?._id)}
                          disabled={el?.isActive === true}
                          className="btn btn-ghost btn-sm text-blue-500 capitalize disabled:bg-transparent disabled:text-success"
                        >
                          Active
                        </button>
                      ) : (
                        <button
                          onClick={() => handleUpdateBanner(el?._id)}
                          className="btn btn-ghost btn-sm text-blue-500 capitalize disabled:bg-transparent disabled:text-success"
                        >
                          Not Active
                        </button>
                      )}
                    </td>
                    <td className="w-auto mx-auto text-center">
                      <button
                        onClick={() => handleDelete(el?._id)}
                        disabled={el?.isActive === true}
                        className="btn btn-error btn-sm text-white cursor-pointer uppercase"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBanner;
