import { useLanguage } from "@/contexts/language-provider";
import { motion } from "framer-motion";

const ContactForm = ({ lang }) => {
  const langs = useLanguage();
  return (
    <motion.form
    dir={lang === "ar" ? "rtl" : undefined}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-colors-dark_card shadow p-5 mt-4 lg:mt-0"
    >
      <div>
        <input
          type="text"
          placeholder={langs.yourname}
          className="border-b focus:border-black outline-none w-full font-[200] p-1 transition my-2 dark:bg-colors-dark_bg"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder={langs.youremail}
          className="border-b focus:border-black outline-none w-full font-[200] p-1 transition my-2 dark:bg-colors-dark_bg"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder={langs.subject}
          className="border-b focus:border-black outline-none w-full font-[200] p-1 transition my-2 dark:bg-colors-dark_bg"
        />
      </div>
      <div>
        <textarea
          rows={3}
          cols={20}
          type="text"
          placeholder={langs.message}
          className="border-b focus:border-black outline-none w-full font-[200] p-1 transition my-2 dark:bg-colors-dark_bg"
        />
      </div>
      <div>
        <button className="bg-colors-quinary py-2 px-5 text-white hover:bg-blue-800 transition duration-300 lg:w-auto w-full">
          {langs.sendMessage}
        </button>
      </div>
    </motion.form>
  );
};

export default ContactForm;
