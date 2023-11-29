import { FaSearch, FaUser, FaUsers } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import SectionTitle from "../../../components/SectionTitle";

const Reservation = () => {
  return (
    <div>
      <SectionTitle
        heading="Reservation"
        subHeading="Only Admin can see the user Reservation Information!"
      />
      <div className="mb-4 mt-4 mx-10">
        <FaSearch className="absolute mt-4 ml-4 text-lg text-gray-400"></FaSearch>
        <input
          type="text"
          placeholder="Search here"
          className="input input-bordered w-full pl-10"
        />
      </div>
      <div className="mx-3 mx-auto border-y-4 border-blue-600 my-10 overflow-x-scroll lg:overflow-x-hidden">
        <table className="table">
          {/* head */}
          <thead className="text-lg">
            <tr>
              <th></th>
              <th>User Email</th>
              <th>Test Name</th>
              <th> Test Result </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="text-lg">
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>sakibxrz22@gmail.com</td>
              <td>Automated Blood Culture</td>
              <td>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs"
                />
              </td>
              <td>
                <button className="btn btn-ghost btn-sm text-2xl font-bold text-red-500">
                  <RxCross2 />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reservation;
