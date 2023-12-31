import { FaCalendar, FaUsers } from "react-icons/fa6";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const AllTestCard = ({ test, date, today }) => {
  const { title, image, price, discount_percent, available_slots, slug } = test;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="relative" src={image} alt="" />
      </figure>
      <h2 className="text-white bg-lime-600 text-xl absolute right-0 mr-2 px-3 rounded-xl mt-2">
        {discount_percent} %
      </h2>
      <div>
        <div className="p-4">
          <div className="text-center">
            <h2 className=" text-2xl line-clamp-1 text-gray-600 font-bold">
              {title}
            </h2>
            <p className="text-2xl text-center text-gray-600 font-bold">
              $ {price}{" "}
            </p>
          </div>
          <div className="pl-4 py-3">
            <div className="flex  items-center text-blue-600 gap-3 pb-2">
              <FaUsers className="text-2xl"></FaUsers>
              <span className="text-lg font-semibold">
                {" "}
                {available_slots} Seats Available
              </span>
            </div>
            <div className="flex  items-center text-blue-600 gap-3">
              <FaCalendar className="text-2xl"></FaCalendar>
              <span className="text-lg font-semibold">{date}</span>
            </div>
          </div>
        </div>
        <div className="card-actions justify-end items-center">
          <Link
            to={`/tests/${slug}/${today}`}
            className="btn border-0 rounded-t-none bg-blue-600 hover:bg-blue-800 text-lg text-white w-full uppercase"
          >
            Details test
            <HiArrowNarrowRight className="text-2xl "></HiArrowNarrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllTestCard;
