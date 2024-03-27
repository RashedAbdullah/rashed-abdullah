import { AiOutlineToTop } from "react-icons/ai";

const GoToTop = ({ onScrollTop }) => {
  return (
    <button
      onClick={onScrollTop}
      className="fixed z-50 right-1 bottom-1 bg-colors-quinary w-8 h-8 rounded-full flex items-center justify-center text-white text-xl hover:scale-105 transition duration-300"
    >
      <AiOutlineToTop />
    </button>
  );
};

export default GoToTop;
