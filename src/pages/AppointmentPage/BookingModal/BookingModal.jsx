export default function BookingModal({ treatment, selected }) {
  const { name, slots } = treatment; //treatment is appointment option
  //   console.log(slots);
  const hanndleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    console.log(slot, name, email);
  };
  return (
    <>
      {/* The button to open modal */}
      <input type="checkbox" id="Booking-Modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="Booking-Modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={hanndleBooking}
            className="grid grid-cols-1 gap-3 mt-5"
          >
            <input type="text" value={selected} className="input w-full" />
            {/* selecting slots in dynamically */}
            <select className="select select-bordered w-full">
              <option>Please select your time....</option>
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered "
            />
            <input
              type="text"
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full input-bordered"
              type="submit"
              value="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
}
