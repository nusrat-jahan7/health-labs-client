import { FaTrash } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";

const AllBanner = () => {
  return (
    <div>
      <SectionTitle
        heading="All Banner"
        subHeading="Admin can select only one Banner from here for Home!"
      />

      <div className="mx-3 mx-auto border-y-4 border-blue-600 my-10">
        <table className="table">
          {/* head */}
          <thead className="text-lg">
            <tr>
              <th></th>
              <th>Image</th>
              <th>Banner Title</th>
              <th>isActive</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td className="text-lg font-semibold">
                Your Health Is Our Concern
              </td>
              <td className="text-lg text-green-600 underline font-semibold">
                True
              </td>
              <th>
                <button className="btn btn-ghost btn-sm text-xl text-red-600">
                  <FaTrash></FaTrash>
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBanner;
