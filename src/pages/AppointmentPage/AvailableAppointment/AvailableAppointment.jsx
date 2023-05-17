import { format } from "date-fns";

export default function AvailableAppointment({ selected }) {
  const selectedDate = selected ? (
    <p>Available Services on {format(selected, "PPP")}</p>
  ) : (
    <p>Please pick a day.</p>
  );
  return (
    <div>
      <h4 className="text-xl font-semibold text-secondary text-center mb-3 mt-9">
        {selectedDate}
      </h4>
      <h4 className="text-center text-gray-500">PLease select a service</h4>
    </div>
  );
}
