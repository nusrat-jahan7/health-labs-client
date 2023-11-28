import { FaUser, FaUsers } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";

const AllUsers = () => {
  return (
    <div>
      <SectionTitle
        heading="All Users"
        subHeading="Admin can see all the users and control their activities!"
      />

      <div className="mx-3 mx-auto border-y-4 border-blue-600 mt-5 mb-10 overflow-x-scroll lg:overflow-x-hidden">
        <table className="table">
          {/* head */}
          <thead className="text-lg">
            <tr>
              <th></th>
              <th>User Name</th>
              <th>User Email</th>
              <th>User Status</th>
              <th> Role </th>
              <th>Details</th>
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
              <td>Md Sakibul Islam</td>
              <td>sakibxrz22@gmail.com</td>
              <td>
                <label className="swap">
                  <input type="checkbox" />
                  <div className="swap-on btn btn-ghost btn-sm text-green-500 text-xl font-semibold">
                    Active
                  </div>
                  <div className="swap-off btn btn-ghost btn-sm text-red-500 text-xl font-semibold">
                    Blocked
                  </div>
                </label>
              </td>
              <td>
                <button className="btn btn-ghost btn-sm text-blue-500">
                  <FaUsers className="text-2xl"></FaUsers>
                </button>
                <button className="hidden btn btn-ghost btn-sm text-blue-500">
                  <FaUser className="text-2xl"></FaUser>
                </button>
              </td>
              <td>
                <button
                  className="btn bg-blue-600 hover:bg-blue-800 text-white text-lg"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  See Info
                </button>

                {/* modal starts here */}
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box w-10/12 max-w-2xl">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-3xl px-4">
                      User Information :
                    </h3>
                    <div className="avatar flex justify-center pt-6 pb-4">
                      <div className="w-24 rounded ">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <p className="py-2 text-lg font-semibold">
                        Name : Md Sakibul Islam
                      </p>
                      <p className="py-2 text-lg font-semibold">
                        Email Address : sakibxrz22@gmail.com
                      </p>
                      <p className="py-2 text-lg font-semibold">
                        Phone Number : 01778345621
                      </p>
                      <p className="py-2 text-lg font-semibold">
                        Status : Active
                      </p>
                      <p className="py-2 text-lg font-semibold">Role : User</p>
                    </div>
                  </div>
                </dialog>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
