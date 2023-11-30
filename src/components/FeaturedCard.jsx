import { PiBrain } from "react-icons/pi";
import { FaUsers } from "react-icons/fa6";
import SectionTitle from "./SectionTitle";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { format } from "date-fns";
import { shuffleArray } from "../utils";

const FeaturedCard = () => {
  const date = new Date();
  const today = format(date, "dd-MM-yyyy");

  const client = useAxiosPublic();
  const { data: tests, isLoading } = useQuery({
    queryKey: ["tests"],
    queryFn: () => client.get(`/tests`).then(({ data }) => data.result),
  });

  if (isLoading) {
    return <Spinner />;
  }

  const shuffledTests = shuffleArray(tests);

  return (
    <div>
      <SectionTitle
        heading="Featured Tests"
        subHeading="Most Booked tests are here for today! Please check it out"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-5 gap-6 my-8">
        {shuffledTests?.slice(0, 4)?.map((el) => (
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img className="relative" src={el?.image} alt="" />
            </figure>
            <h2 className="text-white bg-lime-600 text-xl absolute right-0 mr-2 px-3 rounded-xl mt-2">
              {el?.discount_percent} %
            </h2>
            <div>
              <div className="p-4">
                <div className="text-center">
                  <h2 className=" text-2xl line-clamp-1 text-gray-600 font-bold">
                    {el?.title}
                  </h2>
                  <p className="text-2xl text-center text-gray-600 font-bold">
                    $ {el?.price}{" "}
                  </p>
                </div>
              </div>
              <div className="card-actions justify-end items-center">
                <Link
                  to={`/tests/${el?.slug}/${today}`}
                  className="btn border-0 rounded-t-none bg-blue-600 hover:bg-blue-800 text-lg text-white w-full uppercase"
                >
                  Details test
                  <HiArrowNarrowRight className="text-2xl "></HiArrowNarrowRight>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCard;
