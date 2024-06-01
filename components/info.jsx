import { useLanguage } from "@/contexts/language-provider";
import React from "react";

const Info = () => {
  const langs = useLanguage();
  return (
    <div className="col-span-5 dark:text-white">
      <div className="grid grid-cols-12 border-b border-dashed py-2">
        <div className="lg:col-span-3 col-span-4">
          <span className=" bg-colors-quinary text-white py-[2px] px-1 rounded-sm">
            {langs.agename} :
          </span>
        </div>
        <div className="lg:col-span-9 col-span-7">
          <p className="">{langs.age}</p>
        </div>
      </div>
      <div className="grid grid-cols-12 border-b border-dashed py-2">
        <div className="lg:col-span-3 col-span-4">
          <span className=" bg-colors-quinary text-white py-[2px] px-1 rounded-sm">
            {langs.citizenshipname} :
          </span>
        </div>
        <div className="lg:col-span-9 col-span-7">
          <p className="">{langs.citizenship}</p>
        </div>
      </div>
      <div className="grid grid-cols-12 border-b border-dashed py-2">
        <div className="lg:col-span-3 col-span-4">
          <span className=" bg-colors-quinary text-white py-[2px] px-1 rounded-sm">
            {langs.addressname} :
          </span>
        </div>
        <div className="lg:col-span-9 col-span-7">
          <p className="">{langs.address}</p>
        </div>
      </div>
      <div className="grid grid-cols-12 border-b border-dashed py-2">
        <div className="lg:col-span-3 col-span-4">
          <span className=" bg-colors-quinary text-white py-[2px] px-1 rounded-sm">
            {langs.phonename} :
          </span>
        </div>
        <div className="lg:col-span-9 col-span-7">
          <p className="">{langs.phone}</p>
        </div>
      </div>
      <div className="grid grid-cols-12 border-b border-dashed py-2">
        <div className="lg:col-span-3 col-span-4">
          <span className=" bg-colors-quinary text-white py-[2px] px-1 rounded-sm">
            {langs.emailname} :
          </span>
        </div>
        <div className="lg:col-span-9 col-span-7">
          <p className="">{langs.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
