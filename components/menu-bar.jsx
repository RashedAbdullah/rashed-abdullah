import { FiMenu } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { menuList } from "@/data/menu-list";

const MenuBar = ({ onView, isHide, setIsHide }) => {
  return (
    <div
      className={`fixed right-0 top-0 flex transition duration-500 ${
        isHide ? "translate-x-44" : ""
      } `}
    >
      <div className=" text-xl p-3">
        <button onClick={() => setIsHide(!isHide)}>
          {isHide ? (
            <FiMenu color="white" />
          ) : (
            <AiOutlineCloseCircle color="white" />
          )}
        </button>
      </div>
      <div>
        <ul className="bg-colors-quinary text-white h-screen">
          {menuList.map((menu) => (
            <li key={menu}>
              <button
                onClick={onView}
                className="py-3 pr-24 px-5 hover:bg-blue-800 transition duration-300 w-full"
              >
                {menu}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
