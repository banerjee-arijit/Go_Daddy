import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const NavBarList = ({
  isDropDownOpened = false,
  toggleFunction = undefined,
  dropKey = "",
  text,
  bgColor = false,
}) => {
  return (
    <div>
      <li
        className={`${
          bgColor ? "hover:bg-gray-200" : "hover:bg-gray-700"
        } p-2 duration-200 rounded-md cursor-pointer`}
        onClick={() => toggleFunction(dropKey)}
      >
        <span className="flex gap-2">
          {text}
          {dropKey ? (
            isDropDownOpened[dropKey] ? (
              <ChevronUp />
            ) : (
              <ChevronDown />
            )
          ) : null}
        </span>
      </li>
    </div>
  );
};

export default NavBarList;
