/* eslint-disable react/prop-types */
export default function InfoCard({ card }) {
  const { name, description, icon, bgClass } = card;
  console.log(icon);
  return (
    <div className={`card card-side  text-white p-6 shadow-xl ${bgClass}`}>
      <figure>
        <img src={icon} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
