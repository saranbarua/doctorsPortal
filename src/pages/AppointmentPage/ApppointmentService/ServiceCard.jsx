import React from "react";

export default function ServiceCard({ Service }) {
  const { data } = Service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p className="text-lg text-secondary text-center">{data}</p>
      </div>
    </div>
  );
}
