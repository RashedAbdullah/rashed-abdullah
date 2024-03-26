import { aboutMe } from "@/data/about-me";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="bg-white shadow p-5">
      <div className="grid grid-cols-12 border-b border-dashed py-2">
        <div className="lg:col-span-3 col-span-4">
          <span className=" bg-colors-quinary text-white py-[2px] px-1 rounded-sm">
            Age:
          </span>
        </div>
        <div className="lg:col-span-9 col-span-7">
          <p className="">{aboutMe.age}</p>
        </div>
      </div>
      <div className="grid grid-cols-12 border-b border-dashed py-2">
        <div className="lg:col-span-3 col-span-4">
          <span className=" bg-colors-quinary text-white py-[2px] px-1 rounded-sm">
            Citizenship:
          </span>
        </div>
        <div className="lg:col-span-9 col-span-7">
          <p className="">{aboutMe.citizenship}</p>
        </div>
      </div>
      <div className="grid grid-cols-12 border-b border-dashed py-2">
        <div className="lg:col-span-3 col-span-4">
          <span className=" bg-colors-quinary text-white py-[2px] px-1 rounded-sm">
            Address:
          </span>
        </div>
        <div className="lg:col-span-9 col-span-7">
          <p className="">{aboutMe.address}</p>
        </div>
      </div>{" "}
      <div className="grid grid-cols-12 border-b border-dashed py-2">
        <div className="lg:col-span-3 col-span-4">
          <span className=" bg-colors-quinary text-white py-[2px] px-1 rounded-sm">
            Phone:
          </span>
        </div>
        <div className="lg:col-span-9 col-span-7">
          <p className="">{aboutMe.phone}</p>
        </div>
      </div>
      <div className="grid grid-cols-12 border-b border-dashed py-2">
        <div className="lg:col-span-3 col-span-4">
          <span className=" bg-colors-quinary text-white py-[2px] px-1 rounded-sm">
            E-mail:
          </span>
        </div>
        <div className="lg:col-span-9 col-span-7">
          <p className="">{aboutMe.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
