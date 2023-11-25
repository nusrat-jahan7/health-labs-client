import "../App.css";
import { HiArrowNarrowRight } from "react-icons/hi";

const Banner = () => {
  return (
    <div className="banner">
      <div className="md:text-left text-center md:flex items-center md:justify-end md:max-w-7xl mx-auto py-10">
        <div className="space-y-7">
          <h1 className="lg:text-6xl text-4xl font-bold">
            {" "}
            <span className="text-blue-600">Your Health</span> <br />{" "}
            <span className="text-gray-600">Is Our Concern</span>
          </h1>
          <p className="lg:w-96 w-80 mx-auto md:mx-0 text-gray-600 text-lg">
            We are committed to providing state-of-the-art diagnostic services
            that empower you to take control of your well-being.
          </p>
          <h1 className="lg:text-4xl text-2xl font-bold text-gray-600">
            Get 50% Discount
          </h1>
          <p className="text-red-600 lg:text-xl font-semibold">
            Cupon Code : 00FRwt5x{" "}
          </p>
          <button className="btn text-lg bg-blue-600 text-white border-0 uppercase">
            More Info{" "}
            <HiArrowNarrowRight className="text-xl"></HiArrowNarrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
