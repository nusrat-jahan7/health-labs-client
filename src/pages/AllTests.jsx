import AllTestCard from "../components/AllTestCard";
import "../App.css";
import Calender from "../components/Calender";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/Spinner";
import SectionTitle from "../components/SectionTitle";
import { FaSearch } from "react-icons/fa";

const AllTests = () => {
  const client = useAxiosPublic();

  const {
    data: tests,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["tests"],
    queryFn: () => client.get("/tests").then(({ data }) => data.result),
  });

  if (isLoading) {
    <Spinner />;
  }
  console.log(tests);
  return (
    <div>
      <div className="all-test-banner aspect-auto flex justify-center">
        <Calender />
      </div>
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          heading="All Tests"
          subHeading="All tests are available here for today! Please check it out"
        />
        <div className="mb-8 mt-4">
          <FaSearch className="absolute mt-4 ml-4 text-lg text-gray-400"></FaSearch>
          <input
            type="text"
            placeholder="Search here"
            className="input input-bordered w-full pl-10"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {tests?.map((test) => (
            <AllTestCard key={test._id} test={test} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTests;
