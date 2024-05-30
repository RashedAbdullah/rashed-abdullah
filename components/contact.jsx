import React from "react";
import Title from "./title";
import ContactInfo from "./contact-info";
import ContactForm from "./contact-form";
import { useLanguage } from "@/contexts/language-provider";

const ContacetMe = ({ lang }) => {
  const langs = useLanguage();
  return (
    <div>
      <Title>{langs.contact}</Title>
      <div className="lg:grid grid-cols-2 gap-4 justify-center">
        <ContactInfo lang={lang} />
        <ContactForm lang={lang} />
      </div>
    </div>
  );
};

export default ContacetMe;
