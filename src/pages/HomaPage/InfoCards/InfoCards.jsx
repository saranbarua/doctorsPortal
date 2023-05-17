import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";
export default function InfoCards() {
  const cardData = [
    {
      id: 1,
      name: "Opennig Hours",
      description: "Open 9.am to 10.00 pm",
      icon: clock,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      id: 2,
      name: "Visit us Locations",
      description: "Open 9.am to 10.00 pm",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact Now",
      description: "Open 9.am to 10.00 pm",
      icon: phone,
      bgClass: "bg-primary",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {cardData.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
}
