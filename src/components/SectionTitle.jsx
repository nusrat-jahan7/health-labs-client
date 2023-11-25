const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div>
      <div className="text-center text-gray-600 mt-20">
        <h1 className="text-5xl font-bold "> {heading} </h1>
        <p className="text-lg font-semibold py-3 text-gray-500">{subHeading}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
