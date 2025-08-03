import React from "react";
import {
  Menu,
  User,
  ShoppingCart,
  CircleX,
  CircleQuestionMark,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavBarList from "./NavBarList";
import NavbarDropDownMenu from "./NavbarDropDownMenu";

const Navbar = () => {
  const [isMenuopen, setIsMenuOpen] = useState(false);
  const [isDropDownOpened, setIsDropDownOpened] = useState({
    isDomainOpen: false,
    isWebsiteAndHoistingOpen: false,
    isSecurityOpen: false,
    isMarketingOpen: false,
  });

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleDropDownMenu = (key) => {
    setIsDropDownOpened((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <nav className="w-full max-w-full bg-[#2b2b2b] flex text-white justify-between p-4">
      <div className="flex gap-3 items-center">
        <Menu
          className="sm:hidden cursor-pointer"
          onClick={() => toggleMenu()}
        />
        <h3>Go-Daddy</h3>
        <ul className="hidden sm:flex gap-5 ml-10">
          <NavBarList
            isDropDownOpened={isDropDownOpened}
            toggleFunction={toggleDropDownMenu}
            dropKey={"isDomainOpen"}
            text={"Domain"}
          />
          <NavBarList
            isDropDownOpened={isDropDownOpened}
            toggleFunction={toggleDropDownMenu}
            dropKey={"isWebsiteAndHoistingOpen"}
            text={"Website and Hoisting"}
          />
          <NavBarList text={"Email"} />
          <NavBarList
            isDropDownOpened={isDropDownOpened}
            toggleFunction={toggleDropDownMenu}
            dropKey={"isSecurityOpen"}
            text={"Security"}
          />
          <NavBarList
            isDropDownOpened={isDropDownOpened}
            toggleFunction={toggleDropDownMenu}
            dropKey={"isMarketingOpen"}
            text={"Marketing"}
          />
          <NavBarList text={"Go-Daddy Airo@"} />
          <NavBarList text={"Pricing"} />
        </ul>
        {isDropDownOpened["isDomainOpen"] && (
          <NavbarDropDownMenu dropKey="isDomainOpen" />
        )}
        {isDropDownOpened["isWebsiteAndHoistingOpen"] && (
          <NavbarDropDownMenu dropKey="isWebsiteAndHoistingOpen" />
        )}
      </div>

      {/* Responsive List-------------------------------------- */}

      <div className="flex items-center gap-3">
        <User className="sm:hidden" />
        <ul className="hidden sm:flex gap-3">
          <NavBarList text={"Contact"} />
          <NavBarList text={"Help"} />
          <NavBarList text={"Sign In"} />
        </ul>
        <ShoppingCart />
      </div>
      <AnimatePresence>
        {isMenuopen && (
          <div className="fixed inset-0 backdrop-blur-xs z-40">
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              exit={{ x: -100 }}
              transition={{ duration: 0.1 }}
              className="h-screen absolute left-0 top-0 bg-white text-black w-72 p-8 z-50"
            >
              <CircleX
                className="absolute right-3 hover:text-red-500 duration-200 cursor-pointer"
                onClick={() => toggleMenu()}
              />
              <h3 className="font-bold">Go-Daddy</h3>
              <ul className="mt-6">
                <NavBarList text={"Domain"} bgColor={true} />
                <NavBarList text={"Website and Hosting"} bgColor={true} />
                <NavBarList text={"Email"} bgColor={true} />
                <NavBarList text={"Security"} bgColor={true} />
                <NavBarList text={"Marketing"} bgColor={true} />
                <NavBarList text={"Go-Daddy Airo@"} bgColor={true} />
                <NavBarList text={"Pricing"} bgColor={true} />

                <div className="absolute flex flex-col bottom-0 mb-10">
                  <li className="hover:bg-gray-200 p-2 duration-200 rounded-md cursor-pointer flex items-center gap-4">
                    <span>
                      <CircleQuestionMark size={20} />
                    </span>
                    Help center
                  </li>
                  <li className="hover:bg-gray-200 p-2 duration-200 rounded-md cursor-pointer flex items-center gap-4">
                    <User size={20} />
                    Account
                  </li>
                  <li className="hover:bg-gray-200 p-2 duration-200 rounded-md cursor-pointer flex items-center gap-4">
                    <ShoppingCart size={20} />
                    basket
                  </li>
                </div>
              </ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
