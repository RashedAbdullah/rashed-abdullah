import React from "react";
import Profile from "./profile";

const Header = () => {
  return (
    <div>
      <header className="lg:h-[300px] h-[150px] bg-center flex flex-col-reverse bg-cover w-full bg-[url('/code-image.webp')] bg-[#304FFF90] bg-blend-multiply"></header>
      <Profile />
    </div>
  );
};

export default Header;
