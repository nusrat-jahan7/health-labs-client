import SectionTitle from "../../components/SectionTitle";
import { FaEdit } from "react-icons/fa";

const MyProfile = () => {
  return (
    <div>
      <SectionTitle
        heading="My Profile"
        subHeading="A user can see and edit his/her personal information"
      />

      <div className="w-9/12 mx-auto mt-8">
        <div className="avatar flex justify-center pb-4">
          <div className="w-24 rounded ">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <h3 className="font-bold text-2xl px-4 text-center">
          Md Sakibul Islam
        </h3>
        <div className="pl-4 mt-6">
          <p className="py-2 text-lg font-semibold">
            Email Address : sakibxrz22@gmail.com
          </p>
          <p className="py-2 text-lg font-semibold">Blood Group : AB+</p>
          <p className="py-2 text-lg font-semibold">District : Bhola</p>
          <p className="py-2 text-lg font-semibold">Upazila : Bhola</p>
          <p className="py-2 text-lg font-semibold">Status : Active</p>
          <p className="py-2 text-lg font-semibold">Role : User</p>
        </div>
        <button
          className="btn flex w-full bg-blue-600 hover:bg-blue-800 text-white text-lg mt-6"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          {" "}
          <FaEdit></FaEdit>
          Edit
        </button>
        <dialog id="my_modal_3" className="modal ">
          <div className="modal-box w-10/12 max-w-2xl bg-blue-100">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-3xl px-4 text-gray-600">
              Update User Information :
            </h3>
            <div className="avatar flex justify-center pt-6 ">
              <h3 className="font-bold text-2xl px-4 text-center text-blue-600">
                Md Sakibul Islam
              </h3>
            </div>
            <form action="" className="container flex flex-col mx-auto ">
              <div className="grid grid-cols-4 gap-6 px-6 rounded-md">
                <div className="grid grid-cols-6 gap-4 w-full mx-auto col-span-full">
                  <div className="col-span-full">
                    <label
                      htmlFor="name"
                      className="lg:text-lg lg:font-semibold text-blue-600"
                    >
                      Blood Group
                    </label>
                    <input
                      required
                      id=""
                      name="blood"
                      type="text"
                      placeholder="Input Your Blood Group"
                      className="w-full my-3 rounded-md p-3"
                    />
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="website"
                      className="lg:text-lg lg:font-semibold text-blue-600"
                    >
                      District
                    </label>
                    <input
                      required
                      id=""
                      name="district"
                      type="text"
                      placeholder="Input Your District Name"
                      className="w-full p-3 my-3 rounded-md"
                    />
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="name"
                      className="lg:text-lg lg:font-semibold text-blue-600"
                    >
                      Upazila
                    </label>
                    <input
                      required
                      id=""
                      name="upazila"
                      type="text"
                      placeholder="Input Your Upazila Name"
                      className="w-full my-3 rounded-md p-3"
                    />
                  </div>
                  <button
                    type="submit"
                    className="col-span-full lg:w-80 mx-auto btn bg-blue-600 text-white text-lg hover:bg-blue-800"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default MyProfile;
