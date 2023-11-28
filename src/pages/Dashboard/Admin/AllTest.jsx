import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";

const AllTest = () => {
  return (
    <div>
      <SectionTitle
        heading="All Test"
        subHeading="Admin can see and update all the list of tests"
      />

      <div className="mr-8 mx-auto border-y-4 border-blue-600 mt-5 mb-10">
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
                  <button className="btn btn-ghost btn-sm text-2xl">
                    <FaEdit
                      className="text-blue-600"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    ></FaEdit>
                  </button>
                  {/* modal starts here */}
                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box w-10/12 max-w-2xl bg-blue-100">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <h3 className="font-bold text-3xl px-4 text-gray-600">
                        Test Information :
                      </h3>

                      <form
                        action=""
                        className="container flex flex-col mx-auto mt-4 space-y-12"
                      >
                        <div className="grid grid-cols-4 gap-6 p-6 rounded-md">
                          <div className="grid grid-cols-6 gap-4 w-full mx-auto col-span-full ">
                            <div className="col-span-full sm:col-span-3">
                              <label
                                htmlFor="name"
                                className="lg:text-lg lg:font-semibold text-blue-600"
                              >
                                Test Name
                              </label>
                              <input
                                required
                                id=""
                                name="name"
                                type="text"
                                placeholder="Ex- Serum Foundation"
                                className="w-full my-3 rounded-md p-3"
                              />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                              <label
                                htmlFor="website"
                                className="lg:text-lg lg:font-semibold text-blue-600"
                              >
                                Image url
                              </label>
                              <input
                                required
                                id=""
                                name="image"
                                type="text"
                                placeholder="https://"
                                className="w-full p-3 my-3 rounded-md"
                              />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                              <label className="lg:text-lg lg:font-semibold text-blue-600">
                                Price
                              </label>
                              <input
                                required
                                id=""
                                name="price"
                                type="text"
                                placeholder="$"
                                className="w-full p-3 my-3 rounded-md"
                              />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                              <label className="lg:text-lg lg:font-semibold text-blue-600">
                                Promo Code
                              </label>
                              <input
                                required
                                id=""
                                name="code"
                                type="text"
                                placeholder=""
                                className="w-full p-3 my-3 rounded-md"
                              />
                            </div>
                            <div className="col-span-full">
                              <label className="lg:text-lg lg:font-semibold text-blue-600">
                                Short Description
                              </label>
                              <input
                                id=""
                                name="description"
                                type="text"
                                placeholder=""
                                className="w-full p-3 my-3 py-6 rounded-md-pink-700"
                              />
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="col-span-full lg:w-80 mx-auto btn bg-blue-600 text-white text-lg hover:bg-blue-800"
                          >
                            Update Test
                          </button>
                        </div>
                      </form>
                    </div>
                  </dialog>
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
