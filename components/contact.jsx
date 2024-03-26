import React from "react";
import Title from "./title";
import ContactInfo from "./contact-info";
import ContactForm from "./contact-form";

const ContacetMe = () => {
  return (
    <div>
      <Title>Contact Me</Title>
      <div className="lg:grid grid-cols-2 gap-4 justify-center">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContacetMe;
