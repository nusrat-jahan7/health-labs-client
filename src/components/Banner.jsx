import { Link } from "react-router-dom";
import "../App.css";
import { HiArrowNarrowRight } from "react-icons/hi";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Spinner from "./Spinner";
import { useQuery } from "@tanstack/react-query";

const Banner = () => {
  const client = useAxiosPublic();

  const { data: banners, isLoading } = useQuery({
    queryKey: ["/banners"],
    queryFn: () => client.get(`/banners`).then(({ data }) => data.result),
  });

  if (isLoading) {
    return <Spinner />;
  }

  const activeBanner = banners?.find((banner) => banner.isActive === true);

  return (
    <div
      className="aspect-auto w-full h-auto bg-cover bg-center"
      style={{ backgroundImage: `url('${activeBanner?.image}')` }}
    >
      <div className="md:text-left text-center md:flex items-center md:justify-end md:max-w-7xl mx-auto py-10">
        <div className="space-y-7">
          <h1 className="lg:text-6xl text-4xl font-bold">
            {" "}
            <span className="text-blue-600">{activeBanner?.title}</span>
          </h1>
          <p className="lg:w-96 w-80 mx-auto md:mx-0 text-gray-600 text-lg">
            {activeBanner?.text}
          </p>
          <h1 className="lg:text-4xl text-2xl font-bold text-gray-600">
            Get {activeBanner?.discount_rate}% Discount
          </h1>
          <p className="text-red-600 lg:text-xl font-semibold">
            Coupon Code: {activeBanner?.coupon}{" "}
          </p>
          <Link
            to="/all-test"
            className="btn text-lg bg-blue-600 hover:bg-blue-800 text-white border-0 uppercase"
          >
            More Info{" "}
            <HiArrowNarrowRight className="text-xl"></HiArrowNarrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
