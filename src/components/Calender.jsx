import { useState } from "react";
import { format } from "date-fns";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calender = () => {
  const date = new Date();
  const [selected, setSelected] = useState(date);

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <DayPicker
      className="bg-white w-80 p-6 rounded-xl"
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
  );
};

export default Calender;
