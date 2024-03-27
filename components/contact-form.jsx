import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <motion.form
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow p-5 mt-4 lg:mt-0"
    >
      <div>
        <input
          type="text"
          placeholder="Your Name"
          className="border-b focus:border-black outline-none w-full font-[200] p-1 transition my-"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Your Email"
          className="border-b focus:border-black outline-none w-full font-[200] p-1 transition my-2"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Subject"
          className="border-b focus:border-black outline-none w-full font-[200] p-1 transition my-2"
        />
      </div>
      <div>
        <textarea
          rows={3}
          cols={20}
          type="text"
          placeholder="Subject"
          className="border-b focus:border-black outline-none w-full font-[200] p-1 transition my-2"
        />
      </div>
      <div>
        <button className="bg-colors-quinary py-2 px-5 text-white hover:bg-blue-800 transition duration-300 lg:w-auto w-full">
          Send Message
        </button>
      </div>
    </motion.form>
  );
};

export default ContactForm;
