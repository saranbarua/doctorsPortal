/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Service/Services";
import DentalCare from "../DentalCare/DentalCare";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Testimonial from "../Testimmonial/Testimonial";
import ContactForm from "../ContactForm/ContactForm";

export default function Home() {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <DentalCare></DentalCare>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <ContactForm></ContactForm>
    </div>
  );
}
