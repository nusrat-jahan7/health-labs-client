import { BounceLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "blue",
};

const Spinner = () => {
  return (
    <div className="sweet-loading">
      <BounceLoader
        color={"blue"}
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
