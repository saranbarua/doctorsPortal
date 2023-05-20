import { useState } from "react";
import AppointmentBanner from "../AppontmentBanner/AppointmentBanner";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";
import AppointmentService from "../ApppointmentService/AppointmentService";

export default function Appoinment() {
  const [selected, setSelected] = useState(new Date());
  return (
    <div>
      <AppointmentBanner
        selected={selected}
        setSelected={setSelected}
      ></AppointmentBanner>
      <AvailableAppointment
        selected={selected}
        setselected={setSelected}
      ></AvailableAppointment>
      <AppointmentService selected={selected}></AppointmentService>
    </div>
  );
}
