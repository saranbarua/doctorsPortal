// import React from "react";
import img from "../../../assets/images/treatment.png";
export default function DentalCare() {
  return (
    <div className="hero min-h-screen  flex justify-center">
      <div className="w-4/5">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={img}
            className="flex items-center lg:w-2/5  rounded-lg shadow-2xl lg:mr-20"
          />
          <div>
            <h1 className="text-5xl font-bold text-[#3A4256]">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6 text-[#3A4256]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using Content here, content
              here, making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
