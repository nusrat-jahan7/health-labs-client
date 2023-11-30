import AllTestCard from "../components/AllTestCard";
import "../App.css";
import Calender from "../components/Calender";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../components/SectionTitle";
import { FaSearch } from "react-icons/fa";
import { format } from "date-fns";
import { useState } from "react";

const AllTests = () => {
  const client = useAxiosPublic();
  const date = new Date();

  const [selectedDate, setSelectedDate] = useState(date);
  const today = format(selectedDate, "dd-MM-yyyy");
  const todayDate = format(selectedDate, "PP");

  const { data: tests } = useQuery({
    queryKey: ["tests", today],
    queryFn: () =>
      client.get(`/tests?date=${today}`).then(({ data }) => data.result),
  });

  return (
    <div>
      <div className="all-test-banner aspect-auto h-auto">
        <div className="overlay">
          <div className=" flex justify-center ">
            <Calender
              setSelectedDate={setSelectedDate}
              selectedDate={selectedDate}
            />
          </div>
        </div>
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
            <AllTestCard
              key={test._id}
              test={test}
              date={todayDate}
              today={today}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTests;
