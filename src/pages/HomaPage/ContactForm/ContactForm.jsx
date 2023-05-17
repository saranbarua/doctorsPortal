import bg from "../../../assets/images/appointment.png";

export default function ContactForm() {
  return (
    <section
      className="mt-16 h-screen mb-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="items-center justify-center text-center">
        <h3 className="text-primary">Contact us</h3>
        <h3 className="text-white text-xl">Stay connected with us</h3>
        <div className="grid grid-flow-row grid-rows-3 items-center">
          <input
            type="Email Address"
            placeholder="Type here"
            className="input input-bordered input-md w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered input-md w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Your message"
            className="input input-bordered input-lg w-full max-w-xs"
          />
        </div>
      </div>
    </section>
  );
}
