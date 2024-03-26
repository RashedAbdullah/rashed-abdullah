import { AiOutlineToTop } from "react-icons/ai";

const GoToTop = () => {
  return (
    <button className="fixed z-50 right-0 bottom-0 bg-colors-quinary w-8 h-8 rounded-full flex items-center justify-center text-white text-xl hover:scale-105 transition duration-300">
      <AiOutlineToTop />
    </button>
  );
};

export default GoToTop;
