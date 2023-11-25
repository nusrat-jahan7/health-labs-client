import AllTestCard from "../components/AllTestCard";
import tBanner from "/images/test-banner.jpg";

const AllTests = () => {
  return (
    <div>
      <img className="w-full h-96" src={tBanner} alt="" />
      <AllTestCard />
    </div>
  );
};

export default AllTests;
