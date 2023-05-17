import React from "react";

export default function Review({ review }) {
  const { name, comment, location, profilePic } = review;
  console.log(review);
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <p>{comment}</p>
        <div className="flex items-center  mt-10">
          <div className="avatar mr-6">
            <div className="w-16 rounded-full ring ring-primary ring-offset-2">
              <img src={profilePic} />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">{name}</h3>
            <h4>{location}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
