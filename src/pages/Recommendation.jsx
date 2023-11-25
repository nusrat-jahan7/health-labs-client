import SectionTitle from "../components/SectionTitle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TipsCard from "../components/TipsCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Recommendation = () => {
  return (
    <div>
      <SectionTitle
        heading="Health Care Tips"
        subHeading="Our Health Care Professionals valueable tips are life savior! Please Have a Look"
      />
      <Carousel responsive={responsive} infinite={true} autoPlay={true}>
        <TipsCard />
        <TipsCard />
        <TipsCard />
        <TipsCard />
      </Carousel>
    </div>
  );
};

export default Recommendation;
