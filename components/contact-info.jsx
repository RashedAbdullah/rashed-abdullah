import { useLanguage } from "@/contexts/language-provider";
import { aboutMe } from "@/data/about-me";
import { motion } from "framer-motion";

const ContactInfo = ({ lang }) => {
  const langs = useLanguage();
  return (
    <motion.div
      dir={lang === "ar" && "rtl"}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-colors-dark_card shadow p-5"
    >
      <div className="grid grid-cols-12 border-b border-dashed py-2">
        <div className="lg:col-span-3 col-span-4">
          <span className=" bg-colors-quinary text-white py-[2px] px-1 rounded-sm">
            {langs.agename} :
          </span>
        </div>
        <div className="lg:col-span-9 col-span-7 dark:text-white">
          <p>{langs.age}</p>
        </div>
      </div>
      <div className="grid grid-cols-12 border-b border-dashed py-2">
        <div className="lg:col-span-3 col-span-4">
          <span className=" bg-colors-quinary text-white py-[2px] px-1 rounded-sm">
            {langs.citizenshipname} :
          </span>
        </div>
        <div className="lg:col-span-9 col-span-7 dark:text-white">
          <p>{langs.citizenship}</p>
        </div>
      </div>
      <div className="grid grid-cols-12 border-b border-dashed py-2">
        <div className="lg:col-span-3 col-span-4">
          <span className=" bg-colors-quinary text-white py-[2px] px-1 rounded-sm">
            {langs.addressname} :
          </span>
        </div>
        <div className="lg:col-span-9 col-span-7 dark:text-white">
          <p>{langs.address}</p>
        </div>
      </div>{" "}
      <div className="grid grid-cols-12 border-b border-dashed py-2">
        <div className="lg:col-span-3 col-span-4">
          <span className=" bg-colors-quinary text-white py-[2px] px-1 rounded-sm">
            {langs.phonename} :
          </span>
        </div>
        <div className="lg:col-span-9 col-span-7 dark:text-white">
          <p>{langs.phone}</p>
        </div>
      </div>
      <div className="grid grid-cols-12 border-b border-dashed py-2">
        <div className="lg:col-span-3 col-span-4">
          <span className=" bg-colors-quinary text-white py-[2px] px-1 rounded-sm">
            {langs.emailname} :
          </span>
        </div>
        <div className="lg:col-span-9 col-span-7 dark:text-white">
          <p>{langs.email}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
