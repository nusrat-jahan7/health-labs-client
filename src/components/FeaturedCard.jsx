import { PiBrain } from "react-icons/pi";
import { FaUsers } from "react-icons/fa6";
import SectionTitle from "./SectionTitle";

const FeaturedCard = () => {
  return (
    <div>
      <SectionTitle
        heading="Featured Tests"
        subHeading="Most Booked tests are here for today! Please check it out"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-5 gap-6 my-8">
        <div className="card bg-base-100 shadow-xl border-2">
          <h2 className="text-white bg-blue-600 text-xl absolute right-0 mr-2 px-3 rounded-xl mt-2">
            Neurosurgery
          </h2>
          <div className="card-body text-center">
            <div className="flex justify-center">
              <PiBrain className="text-9xl mt-6 text-gray-500"></PiBrain>
            </div>

            <p className="py-2 text-2xl font-semibold">
              MRI (Magnetic Resonance Imaging)
            </p>
            <div className="flex justify-center items-center text-gray-400 gap-3 pb-3">
              <FaUsers className="text-2xl"></FaUsers>
              <span className="text-lg font-semibold">8 People Booked</span>
            </div>
            <div className="card-actions justify-center">
              <button className="btn bg-blue-600 text-white text-lg">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl ">
          <h2 className="text-white bg-blue-600 text-xl absolute right-0 mr-2 px-3 rounded-xl mt-2">
            Neurosurgery
          </h2>
          <div className="card-body text-center">
            <div className="flex justify-center">
              <PiBrain className="text-9xl mt-6 text-gray-500"></PiBrain>
            </div>

            <p className="py-2 text-2xl font-semibold">
              MRI (Magnetic Resonance Imaging)
            </p>
            <div className="flex justify-center items-center text-gray-400 gap-3 pb-3">
              <FaUsers className="text-2xl"></FaUsers>
              <span className="text-lg font-semibold">8 People Booked</span>
            </div>
            <div className="card-actions justify-center">
              <button className="btn bg-blue-600 text-white text-lg">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl ">
          <h2 className="text-white bg-blue-600 text-xl absolute right-0 mr-2 px-3 rounded-xl mt-2">
            Neurosurgery
          </h2>
          <div className="card-body text-center">
            <div className="flex justify-center">
              <PiBrain className="text-9xl mt-6 text-gray-500"></PiBrain>
            </div>

            <p className="py-2 text-2xl font-semibold">
              MRI (Magnetic Resonance Imaging)
            </p>
            <div className="flex justify-center items-center text-gray-400 gap-3 pb-3">
              <FaUsers className="text-2xl"></FaUsers>
              <span className="text-lg font-semibold">8 People Booked</span>
            </div>
            <div className="card-actions justify-center">
              <button className="btn bg-blue-600 text-white text-lg">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl ">
          <h2 className="text-white bg-blue-600 text-xl absolute right-0 mr-2 px-3 rounded-xl mt-2">
            Neurosurgery
          </h2>
          <div className="card-body text-center">
            <div className="flex justify-center">
              <PiBrain className="text-9xl mt-6 text-gray-500"></PiBrain>
            </div>

            <p className="py-2 text-2xl font-semibold">
              MRI (Magnetic Resonance Imaging)
            </p>
            <div className="flex justify-center items-center text-gray-400 gap-3 pb-3">
              <FaUsers className="text-2xl"></FaUsers>
              <span className="text-lg font-semibold">8 People Booked</span>
            </div>
            <div className="card-actions justify-center">
              <button className="btn bg-blue-600 text-white text-lg">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
