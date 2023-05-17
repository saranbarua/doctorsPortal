import React from "react";
import ServiceCard from "./ServiceCard";

export default function AppointmentService() {
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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {ServiceData.map((Service) => (
        <ServiceCard key={Service.id} Service={Service}></ServiceCard>
      ))}
    </div>
  );
}
