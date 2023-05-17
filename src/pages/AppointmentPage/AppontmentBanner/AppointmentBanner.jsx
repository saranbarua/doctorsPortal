import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import background from "../../../assets/images/bg.png";

export default function AppointmentBanner({ selected, setSelected }) {
  return (
    <header style={{ backgroundImage: `url(${background})` }} className="mb-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/src/assets/images/chair.png"
          className="lg:w-1/2 rounded-lg shadow-2xl"
        />
        <div className="mr-6">
          <DayPicker mode="single" selected={selected} onSelect={setSelected} />
        </div>
      </div>
    </header>
  );
}
