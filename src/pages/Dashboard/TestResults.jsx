import { FaAlignRight, FaCheck, FaDownload } from "react-icons/fa6";
import SectionTitle from "../../components/SectionTitle";

const TestResults = () => {
  return (
    <div>
      <SectionTitle heading="My Test Results" />

      <div className="w-9/12 mx-auto border-y-4 border-blue-600 my-10">
        <table className="table">
          {/* head */}
          <thead className="text-lg">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Test Name</th>
              <th>Delivery Status</th>
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
                Zemlak, Daniel and Leannon
              </td>
              <td>
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <FaCheck className="text-green-600"></FaCheck> Delivered
                </div>
              </td>
              <th>
                <button className="btn btn-ghost text-xl text-blue-500">
                  <FaDownload></FaDownload>
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestResults;
