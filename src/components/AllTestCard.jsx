import { FaSearch } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import test1 from "/images/test-1.jpg";
import { FaCalendar, FaClock, FaUsers } from "react-icons/fa6";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const AllTestCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <SectionTitle
        heading="All Tests"
        subHeading="All tests are available here for today! Please check it out"
      />
      <div className="">
        <FaSearch className="absolute mt-4 ml-4 text-lg text-gray-400"></FaSearch>
        <input
          type="text"
          placeholder="Search here"
          className="input input-bordered w-full pl-10"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 my-8">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={test1} alt="Shoes" />
          </figure>
          <div className="card-body  space-y-2">
            <h2 className="card-title text-2xl text-center text-gray-600 font-bold">
              MRI (Magnetic Resonance Imaging)
            </h2>
            <p className="text-lg line-clamp-2 hidden">
              {" "}
              A non-invasive imaging technique that uses powerful magnets and
              radio waves to create detailed images of the brain and spinal
              cord.
            </p>
            <div className="pl-4 py-3">
              <div className="flex  items-center text-blue-600 gap-3 pb-2">
                <FaUsers className="text-2xl"></FaUsers>
                <span className="text-lg font-semibold">
                  10 Seats Available
                </span>
              </div>
              <div className="flex  items-center text-blue-600 gap-3 pb-2">
                <FaClock className="text-2xl"></FaClock>
                <span className="text-lg font-semibold">8:00 AM - 9:00 AM</span>
              </div>
              <div className="flex  items-center text-blue-600 gap-3">
                <FaCalendar className="text-2xl"></FaCalendar>
                <span className="text-lg font-semibold">29 November, 2023</span>
              </div>
            </div>
            <div className="card-actions justify-end items-center">
              <Link
                to={`/all-test/${1}`}
                className="btn bg-blue-600 hover:bg-blue-800 text-lg text-white w-full uppercase"
              >
                Details test
                <HiArrowNarrowRight className="text-2xl "></HiArrowNarrowRight>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTestCard;
