import flouride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whittening from "../../../assets/images/whitening.png";
import Service from "./Service";

export default function Services() {
  const servicesData = [
    {
      id: 1,
      name: "Flouride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: flouride,
    },
    {
      id: 2,
      name: "Cavity Feeling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: cavity,
    },
    {
      id: 3,
      name: "teeth Whitenning",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: whittening,
    },
  ];
  return (
    <div className="mt-16">
      <div className="text-center">
        <h3 className="uppercase text-primary text-xl">Our Services</h3>
        <h2 className="text-3xl">Services We provide</h2>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
}
