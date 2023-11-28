import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UpdateTest = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <SectionTitle heading="Update Test" />

      <form
        action=""
        className="container flex flex-col mx-auto mt-4 space-y-12"
      >
        <div className="grid grid-cols-4 gap-6 p-6 rounded-md">
          <div className="grid grid-cols-6 gap-4 w-full mx-auto col-span-full ">
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="name"
                className="lg:text-lg lg:font-semibold text-blue-600"
              >
                Test Name
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
            <div className="col-span-full sm:col-span-3">
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
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="brand"
                className="lg:text-lg lg:font-semibold text-blue-600"
              >
                Select Date
              </label>
              <div>
                <DatePicker
                  className="w-full p-3 my-3 rounded-md"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="type"
                className="lg:text-lg lg:font-semibold text-blue-600"
              >
                Slots
              </label>
              <select
                required
                name="type"
                className="select my-3 w-full rounded-md"
              >
                <option value={""} disabled selected>
                  Set Slots
                </option>
                <option>10.00 AM - 10.30 AM</option>
                <option>10.30 AM - 11.00 AM</option>
                <option>11.00 AM - 11.30 AM</option>
                <option>11.30 AM - 12.00 PM</option>
                <option>12.00 PM - 12.30 PM</option>
                <option>12.30 PM - 01.00 PM</option>
                <option>02.00 PM - 02.30 PM</option>
                <option>02.30 PM - 03.00 PM</option>
                <option>03.00 PM - 03.30 PM</option>
                <option>03.30 PM - 04.00 PM</option>
              </select>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="lg:text-lg lg:font-semibold text-blue-600">
                Price
              </label>
              <input
                required
                id=""
                name="price"
                type="text"
                placeholder="$"
                className="w-full p-3 my-3 rounded-md"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="lg:text-lg lg:font-semibold text-blue-600">
                Promo Code
              </label>
              <input
                required
                id=""
                name="code"
                type="text"
                placeholder=""
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
          </div>
          <button
            type="submit"
            className="col-span-full lg:w-80 mx-auto btn bg-blue-600 text-white hover:bg-blue-800"
          >
            Add Test
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTest;
