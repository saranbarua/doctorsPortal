import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review";
export default function Testimonial() {
  const review = [
    {
      id: 1,
      name: "Winson Carry",
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
      profilePic: people1,
    },
    {
      id: 2,
      name: "Johnson Derry",
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "NewYork City",
      profilePic: people2,
    },
    {
      id: 3,
      name: "kenson Marry",
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "Los Angels",
      profilePic: people3,
    },
  ];
  return (
    <section className="my-16">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl font-bold text-primary">Testonminal</h4>
          <h2 className="text-4xl">What our patient says!</h2>
        </div>
        <figure>
          <img src={quote} alt="" className="w-24 lg:w-48" />
        </figure>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {review.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </section>
  );
}
