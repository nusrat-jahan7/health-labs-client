import { FaTrash } from "react-icons/fa6";
import SectionTitle from "../../components/SectionTitle";

const Appointments = () => {
  return (
    <div>
      <SectionTitle heading="My Upcoming Appointments" />

      <div className="w-9/12 mx-auto border-y-4 border-blue-600 my-10">
        <table className="table">
          {/* head */}
          <thead className="text-lg">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Test Name</th>
              <th>Date & Time</th>
              <th> Price </th>
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
              <td>Zemlak, Daniel and Leannon</td>
              <td>
                <div>
                  {" "}
                  <p>12.12.23</p>
                  <p>4:00 - 9:00</p>
                </div>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-lg text-red-500">
                  <FaTrash></FaTrash>
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <div className="w-9/12 mx-auto border-y-4 border-yellow-600 my-10">
        <table className="table">
          <thead className="text-lg">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th> Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item) => (
              <tr key={item._id} className="text-lg">
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
                          src={item?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item?.name}</td>
                <td>$ {item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-lg text-red-500"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default Appointments;
