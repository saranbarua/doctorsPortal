export default function AppointmentOption({ appointmentOption, setTreatment }) {
  const { name, slots } = appointmentOption;
  console.log(AppointmentOption);
  return (
    <div className="card  shadow-xl">
      <div className="card-body ">
        <div className="grid justify-center">
          <h2 className="card-title text-primary text-xl">{name}</h2>
          <p className="text-sm text-center">
            {slots.length > 0 ? slots[0] : "Try another day"}
          </p>
          <p className="text-sm text-center">
            {slots.length} {slots.length > 1 ? "spaces" : "space"} available
          </p>
        </div>

        <div className="card-actions justify-center">
          {/* The button to open modal */}
          <label
            htmlFor="Booking-Modal"
            onClick={() => setTreatment(appointmentOption)}
            className="btn btn-primary"
          >
            BOOK APPOINTMENT
          </label>
        </div>
      </div>
    </div>
  );
}
