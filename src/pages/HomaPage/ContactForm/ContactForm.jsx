import bg from "../../../assets/images/appointment.png";
import PrimaryBtn from "../../../components/Button/PrimaryBtn";

export default function ContactForm() {
  return (
    <section
      className="mt-16 py-9 mb-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex h-full justify-center items-center">
        <div className="md:w-1/3 w-4/5 text-center">
          <h3 className="text-primary">Contact us</h3>
          <h3 className="text-white md:text-xl">Stay connected with us</h3>
          <div className="w-full mt-5">
            <input
              type="Email Address"
              placeholder="Type here"
              className="input input-bordered input-md w-full mb-4"
            />
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered input-md w-full mb-4"
            />
            <textarea
              placeholder="Your message"
              className=" w-full rounded px-2 py-5 mb-3"
            ></textarea>
            <PrimaryBtn>Submit</PrimaryBtn>
          </div>
        </div>
      </div>
    </section>
  );
}
