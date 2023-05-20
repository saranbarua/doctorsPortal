export default function ServiceCard({ Service }) {
  const { data } = Service;
  return (
    <div className="card w-96 mt-5 shadow-xl">
      <div className="card-body">
        <p className="text-lg text-secondary text-center">{data}</p>
      </div>
    </div>
  );
}
