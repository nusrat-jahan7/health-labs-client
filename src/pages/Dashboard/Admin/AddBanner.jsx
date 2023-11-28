import SectionTitle from "../../../components/SectionTitle";

const AddBanner = () => {
  return (
    <div>
      <SectionTitle
        heading="Add Banner"
        subHeading="Admin can add Banner from here for update the home Banner!"
      />

      <form action="" className="container flex flex-col mx-auto  space-y-12">
        <div className="grid grid-cols-4 gap-6 p-6 rounded-md">
          <div className="grid grid-cols-6 gap-4 w-8/12 mx-auto col-span-full">
            <div className="col-span-full">
              <label
                htmlFor="name"
                className="lg:text-lg lg:font-semibold text-blue-600"
              >
                Name
              </label>
              <input
                required
                id=""
                name="name"
                type="text"
                placeholder="Ex- Serum Foundation"
                className="w-full my-3 rounded-md p-3"
              />
            </div>
            <div className="col-span-full">
              <label
                htmlFor="website"
                className="lg:text-lg lg:font-semibold text-blue-600"
              >
                Image url
              </label>
              <input
                required
                id=""
                name="image"
                type="text"
                placeholder="https://"
                className="w-full p-3 my-3 rounded-md"
              />
            </div>
            <div className="col-span-full">
              <label
                htmlFor="name"
                className="lg:text-lg lg:font-semibold text-blue-600"
              >
                Title
              </label>
              <input
                required
                id=""
                name="title"
                type="text"
                placeholder="Ex- Serum Foundation"
                className="w-full my-3 rounded-md p-3"
              />
            </div>

            <div className="col-span-full">
              <label className="lg:text-lg lg:font-semibold text-blue-600">
                Coupon Code Name
              </label>
              <input
                required
                id=""
                name="code_name"
                type="text"
                placeholder="MED"
                className="w-full p-3 my-3 rounded-md"
              />
            </div>
            <div className="col-span-full">
              <label className="lg:text-lg lg:font-semibold text-blue-600">
                Coupon Rate
              </label>
              <input
                required
                id=""
                name="Rate"
                type="text"
                placeholder="0000"
                className="w-full p-3 my-3 rounded-md"
              />
            </div>
            <div className="col-span-full">
              <label className="lg:text-lg lg:font-semibold text-blue-600">
                Short Description
              </label>
              <input
                id=""
                name="description"
                type="text"
                placeholder=""
                className="w-full p-3 my-3 py-6 rounded-md-pink-700"
              />
            </div>
            <button
              type="submit"
              className="col-span-full lg:w-80 mx-auto btn bg-blue-600 text-white text-lg hover:bg-blue-800"
            >
              Add Banner
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBanner;
