import React from "react";
import Profile from "./profile";

const Header = ({ lang }) => {
  return (
    <div className="relative">
      <header className="lg:h-[300px] h-[150px] bg-center flex flex-col-reverse bg-cover w-full bg-[url('/code-image.webp')] bg-[#304FFF50] bg-blend-multiply"></header>
      <Profile lang={lang} />
    </div>
  );
};

export default Header;
