import { AiOutlineToTop } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      initial={{ x: 45 }}
      whileInView={{ x: 0 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.5 }}
      onClick={scrollToTop}
      exit={{ x: 40 }}
      className={`fixed z-50 right-1 bottom-1 bg-colors-quinary w-8 h-8 rounded-full flex items-center justify-center text-white text-xl hover:scale-105 transition duration-300 hover:bg-white hover:text-colors-quinary ${
        isVisible ? "visible" : "hidden"
      }`}
    >
      <AiOutlineToTop />
    </motion.button>
  );
};

export default GoToTop;
