import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const NavBarList = ({
  isDropDownOpened = false,
  toggleFunction = () => {},
  dropKey = "",
  text,
  bgColor = false,
}) => {
  return (
    <div>
      <li
        className={`${
          bgColor ? "hover:bg-gray-200 text-black" : "hover:bg-gray-700"
        } p-2 duration-200 rounded-md cursor-pointer`}
        onClick={() => dropKey && toggleFunction(dropKey)}
      >
        <span className="flex items-center gap-2">
          {text}
          {dropKey &&
            (isDropDownOpened ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            ))}
        </span>
      </li>
    </div>
  );
};

export default NavBarList;
