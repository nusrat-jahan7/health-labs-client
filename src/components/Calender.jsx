import { format } from "date-fns";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calender = ({ setSelectedDate, selectedDate }) => {
  const today = new Date();
  let footer = <p>Please pick a day.</p>;
  if (selectedDate) {
    footer = <p>You picked {format(selectedDate, "PP")}.</p>;
  }

  const isDayDisabled = (day) => {
    return day < today;
  };

  return (
    <DayPicker
      disabled={isDayDisabled}
      className="bg-white w-80 p-6 rounded-xl"
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
      footer={footer}
    />
  );
};

export default Calender;
