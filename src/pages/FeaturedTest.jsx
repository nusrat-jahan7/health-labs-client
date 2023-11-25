import FeaturedCard from "../components/FeaturedCard";
import fBanner from "/images/featured-banner.jpg";

const FeaturedTest = () => {
  return (
    <div>
      <img className="w-full h-96" src={fBanner} alt="" />
      <FeaturedCard />
    </div>
  );
};

export default FeaturedTest;
