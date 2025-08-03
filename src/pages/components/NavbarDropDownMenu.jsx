import React from "react";
import { motion } from "framer-motion";
import { Search, ArrowDownUp, FileBox } from "lucide-react";
import { NavbarRawDropDownData } from "./../../data/NavbarRawDropDownData";

const NavbarDropDownMenu = ({ dropKey = "" }) => {
  const data = NavbarRawDropDownData[dropKey];

  return (
    <div>
      {dropKey && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-full absolute left-0 p-20 mt-10 bg-white text-black flex gap-80 z-50"
        >
          {data.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold">{section.title}</h3>
              <ul className="mt-5">
                {section.items.map((item, i) => {
                  const Icon =
                    item.icon === "Search"
                      ? Search
                      : item.icon === "ArrowDownUp"
                      ? ArrowDownUp
                      : FileBox;

                  return (
                    <li
                      key={i}
                      className="flex gap-3 mt-5 hover:bg-gray-300 p-2 duration-200 rounded-md cursor-pointer"
                    >
                      <Icon className="bg-green-100 rounded-md h-8 w-8 p-2" />
                      {item.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default NavbarDropDownMenu;
