import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import { Link } from "react-router-dom";

const AllTest = () => {
  return (
    <div>
      <SectionTitle
        heading="All Test"
        subHeading="Admin can see and update all the list of tests"
      />

      <div className="mx-3 mx-auto border-y-4 border-blue-600 mt-5 mb-10">
        <table className="table">
          {/* head */}
          <thead className="text-lg">
            <tr>
              <th></th>
              <th>Image</th>
              <th>Test Name</th>
              <th>Reservation</th>
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
              <td className="text-lg font-semibold">AUTOMATED BLOOD CULTURE</td>
              <td className="text-lg font-semibold">3 Slots Booked</td>
              <th>
                <div className="flex  items-center">
                  <Link
                    to={"/dashboard/admin/all-test/update"}
                    className="btn btn-ghost btn-sm text-2xl"
                  >
                    <FaEdit className="text-blue-600"></FaEdit>
                  </Link>
                  <button className="btn btn-ghost btn-sm text-xl text-red-600">
                    <FaTrash></FaTrash>
                  </button>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTest;
