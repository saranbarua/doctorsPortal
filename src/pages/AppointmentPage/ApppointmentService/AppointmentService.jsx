import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";

export default function AppointmentService({ selected }) {
  const ServiceData = [
    {
      id: 1,
      data: "Teeth OrthoDontics",
    },
    {
      id: 2,
      data: "Cosmetic Dentisty",
    },
    {
      id: 3,
      data: "Teeth Cleaning",
    },
    {
      id: 4,
      data: "Dontesy Cleaning",
    },
    {
      id: 5,
      data: "Cavitry Protection",
    },
    {
      id: 6,
      data: "All Cleaning",
    },
  ];
  const [appointmentOptions, setAppointmentOptions] = useState([]); //data load from json file
  const [treatment, setTreatment] = useState(null);
  //useEffect used for data loading
  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-5">
        {ServiceData.map((Service) => (
          <ServiceCard key={Service.id} Service={Service}></ServiceCard>
        ))}
      </div>
      <h4 className="text-secondary text-lg text-center font-bold m-10">
        Available slots for Teeth Orgonuts
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option.id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {/* if get treatment value then show booking modal name */}
      {treatment && (
        <BookingModal selected={selected} treatment={treatment}></BookingModal>
      )}
    </div>
  );
}
