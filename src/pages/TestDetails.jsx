import "../App.css";
import test1 from "/images/test-1.jpg";
import { FaBookBookmark, FaDollarSign, FaUsers } from "react-icons/fa6";

const TestDetails = () => {
  return (
    <div>
      <div className="details-banner h-96 ">
        <div className="overlay">
          <div className="flex justify-center items-center h-96 max-w-7xl mx-auto px-5 text-center">
            <h1 className="text-7xl font-bold text-blue-600 uppercase">
              MRI (Magnetic Resonance Imaging)
            </h1>
          </div>
        </div>
      </div>

      {/* details section */}
      <div className="flex items-center gap-20 max-w-7xl mx-auto px-5 my-10 relative">
        <img className="w-3/5" src={test1} alt="" />
        {/* <h1 className="absolute top-0 right-0 bg-blue-600 text-white text-xl px-3 rounded-xl mt-2">
            30%
          </h1> */}

        <div>
          <div className="flex  items-center text-blue-600 gap-3 pb-4">
            <FaUsers className="text-2xl"></FaUsers>
            <span className="text-2xl font-semibold">
              Available Seats : 10{" "}
            </span>
          </div>
          <div className="pb-4 gap-3">
            <div className="badge badge-lg text-xl">8:00 - 9:00</div>
            <div className="badge badge-lg text-xl">9:00 - 10:00</div>
            <div className="badge badge-lg text-xl">4:00 - 5:00</div>
          </div>
          <p className="text-lg border-y py-4">
            Magnetic Resonance Imaging (MRI) is a medical imaging technique that
            uses a strong magnetic field and radio waves to generate detailed
            images of the internal structures of the body.Patients are exposed
            to a strong magnetic field.The patient lies inside a large,
            tube-like machine.The patient lies inside a large, tube-like
            machine.Some patients may feel claustrophobic inside the MRI
            machine.{" "}
          </p>
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="btn bg-blue-600 text-white hover:bg-blue-800 uppercase text-lg mt-4"
          >
            <FaBookBookmark className="text-2xl"></FaBookBookmark>
            book appointments
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box w-11/12 max-w-3xl">
              <div className="flex justify-between font-semibold pt-3 pb-6 px-6">
                <h1 className="text-2xl"> MRI (Magnetic Resonance Imaging)</h1>
                <p className="text-3xl">$ 28</p>
              </div>
              <form method="dialog" className="space-y-4 px-6">
                <div className="">
                  <input
                    size="lg"
                    name="phone"
                    placeholder="your phone number"
                    className="p-2 rounded input input-bordered w-full"
                  />
                </div>

                <div className="join w-full">
                  <input
                    className="input input-bordered join-item w-full rounded"
                    placeholder="use promocode"
                  />
                  <button className="btn join-item rounded bg-lime-600 text-lg text-white border-0 hover:bg-blue-800">
                    APPLY
                  </button>
                </div>
                <div className="modal-action flex justify-center">
                  <button
                    type="submit"
                    className="btn bg-blue-600 hover:bg-blue-800 text-white uppercase text-xl "
                  >
                    <FaDollarSign className="text-xl"></FaDollarSign> pay
                  </button>
                  <button className="btn btn-outline hover:bg-blue-600 hover:text-white border-blue-600 hover:border-blue-600 text-blue-600 uppercase">
                    Close
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default TestDetails;
