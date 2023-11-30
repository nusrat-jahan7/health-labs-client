import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa6";
import client1 from "/images/client-1.jpg";
import client2 from "/images/client-2.jpg";
import client3 from "/images/client-3.jpg";
import client4 from "/images/client-4.jpg";

const Reviews = () => {
  return (
    <div>
      <div className="banner h-auto aspect-auto ">
        <div className="overlay">
          <div className="flex justify-center items-center h-96 max-w-7xl mx-auto px-5 text-center">
            <h1 className="text-7xl font-bold text-blue-600 uppercase">
              What Our Client Say!
            </h1>
          </div>
        </div>
      </div>

      <div className=" mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 ">
        <div className="md:flex items-center bg-blue-200 w-9/12 mx-auto shadow-xl mt-8 rounded-t-full gap-6 md:rounded-l-full rounded-r-xl">
          <figure className="w-72 flex justify-center items-center mx-auto">
            <img src={client1} alt="" className="w-72 h-72 rounded-full" />
          </figure>
          <div className="flex-1 pt-8 pr-8 pl-8 pb-4">
            <div className="flex gap-2 text-3xl text-yellow-400 my-4">
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
            </div>
            <h2 className="card-title">
              <FaQuoteLeft className="text-3xl my-3 text-gray-400" />
            </h2>
            <p>
              Very good Service!I recommend HealthLab Diagnostic Center. I got
              my test result very fast. Very useful diagnostic center for online
              as well as offline for booking appointment at any time.
            </p>
            <h2 className="card-title flex justify-end pr-5">
              <FaQuoteRight className="text-3xl text-right my-3 text-gray-400" />
            </h2>
          </div>
        </div>

        <div className="md:flex items-center  bg-blue-200 w-9/12 mx-auto shadow-xl mt-8 rounded-t-full gap-6 md:rounded-l-full rounded-r-xl">
          <figure className="w-72 flex justify-center items-center mx-auto">
            <img src={client2} alt="" className="w-72 h-72 rounded-full" />
          </figure>
          <div className="flex-1 pt-8 pr-8 pl-8 pb-4">
            <div className="flex gap-2 text-3xl text-yellow-400 my-4">
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
            </div>
            <h2 className="card-title">
              <FaQuoteLeft className="text-3xl my-3 text-gray-400" />
            </h2>
            <p>
              Very good Service!I recommend HealthLab Diagnostic Center. I got
              my test result very fast. Very useful diagnostic center for online
              as well as offline for booking appointment at any time.
            </p>
            <h2 className="card-title flex justify-end pr-5">
              <FaQuoteRight className="text-3xl text-right my-3 text-gray-400" />
            </h2>
          </div>
        </div>

        <div className="md:flex items-center  bg-blue-200 w-9/12 mx-auto shadow-xl mt-8 rounded-t-full gap-6 md:rounded-l-full rounded-r-xl">
          <figure className="w-72 flex justify-center items-center mx-auto">
            <img src={client3} alt="" className="w-72 h-72 rounded-full" />
          </figure>
          <div className="flex-1 pt-8 pr-8 pl-8 pb-4">
            <div className="flex gap-2 text-3xl text-yellow-400 my-4">
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
            </div>
            <h2 className="card-title">
              <FaQuoteLeft className="text-3xl my-3 text-gray-400" />
            </h2>
            <p>
              Very good Service!I recommend HealthLab Diagnostic Center. I got
              my test result very fast. Very useful diagnostic center for online
              as well as offline for booking appointment at any time.
            </p>
            <h2 className="card-title flex justify-end pr-5">
              <FaQuoteRight className="text-3xl text-right my-3 text-gray-400" />
            </h2>
          </div>
        </div>

        <div className="md:flex items-center  bg-blue-200 w-9/12 mx-auto shadow-xl mt-8 rounded-t-full gap-6 md:rounded-l-full rounded-r-xl">
          <figure className="w-72 flex justify-center items-center mx-auto">
            <img src={client4} alt="" className="w-72 h-72 rounded-full" />
          </figure>
          <div className="flex-1 pt-8 pr-8 pl-8 pb-4">
            <div className="flex gap-2 text-3xl text-yellow-400 my-4">
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
            </div>
            <h2 className="card-title">
              <FaQuoteLeft className="text-3xl my-3 text-gray-400" />
            </h2>
            <p>
              Very good Service!I recommend HealthLab Diagnostic Center. I got
              my test result very fast. Very useful diagnostic center for online
              as well as offline for booking appointment at any time.
            </p>
            <h2 className="card-title flex justify-end pr-5">
              <FaQuoteRight className="text-3xl text-right my-3 text-gray-400" />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
