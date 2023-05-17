/* eslint-disable react/prop-types */
export default function Service({ service }) {
  //   console.log(service);
  const { name, description, img } = service;
  return (
    <div className="card mx-2 hover:bg-sky-500 hover:text-white  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl " />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
