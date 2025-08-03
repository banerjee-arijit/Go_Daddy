import React, { useState } from "react";
import {
  Menu,
  User,
  ShoppingCart,
  CircleX,
  CircleQuestionMark,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NavBarList from "./NavBarList";
import NavbarDropDownMenu from "./NavbarDropDownMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropKey, setActiveDropKey] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleDropDownMenu = (key) => {
    setActiveDropKey((prev) => (prev === key ? "" : key));
  };

  return (
    <nav className="w-full max-w-full bg-[#2b2b2b] flex text-white justify-between p-4 relative">
      <div className="flex gap-3 items-center">
        <Menu className="sm:hidden cursor-pointer" onClick={toggleMenu} />
        <h3>Go-Daddy</h3>
        <ul className="hidden sm:flex gap-5 ml-10">
          <NavBarList
            isDropDownOpened={activeDropKey === "isDomainOpen"}
            toggleFunction={toggleDropDownMenu}
            dropKey="isDomainOpen"
            text="Domain"
          />
          <NavBarList
            isDropDownOpened={activeDropKey === "isWebsiteAndHoistingOpen"}
            toggleFunction={toggleDropDownMenu}
            dropKey="isWebsiteAndHoistingOpen"
            text="Website and Hosting"
          />
          <NavBarList text="Email" />
          <NavBarList
            isDropDownOpened={activeDropKey === "isSecurityOpen"}
            toggleFunction={toggleDropDownMenu}
            dropKey="isSecurityOpen"
            text="Security"
          />
          <NavBarList
            isDropDownOpened={activeDropKey === "isMarketingOpen"}
            toggleFunction={toggleDropDownMenu}
            dropKey="isMarketingOpen"
            text="Marketing"
          />
          <NavBarList text="Go-Daddy Airo@" />
          <NavBarList text="Pricing" />
        </ul>

        {/* Only one dropdown rendered */}
        <NavbarDropDownMenu dropKey={activeDropKey} />
      </div>

      <div className="flex items-center gap-3">
        <User className="sm:hidden" />
        <ul className="hidden sm:flex gap-3">
          <NavBarList text="Contact" />
          <NavBarList text="Help" />
          <NavBarList text="Sign In" />
        </ul>
        <ShoppingCart />
      </div>

      <AnimatePresence>
        {isMenuOpen && (
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
                onClick={toggleMenu}
              />
              <h3 className="font-bold">Go-Daddy</h3>
              <ul className="mt-6">
                <NavBarList text="Domain" bgColor />
                <NavBarList text="Website and Hosting" bgColor />
                <NavBarList text="Email" bgColor />
                <NavBarList text="Security" bgColor />
                <NavBarList text="Marketing" bgColor />
                <NavBarList text="Go-Daddy Airo@" bgColor />
                <NavBarList text="Pricing" bgColor />

                <div className="absolute flex flex-col bottom-0 mb-10">
                  <li className="hover:bg-gray-200 p-2 duration-200 rounded-md cursor-pointer flex items-center gap-4">
                    <CircleQuestionMark size={20} />
                    Help center
                  </li>
                  <li className="hover:bg-gray-200 p-2 duration-200 rounded-md cursor-pointer flex items-center gap-4">
                    <User size={20} />
                    Account
                  </li>
                  <li className="hover:bg-gray-200 p-2 duration-200 rounded-md cursor-pointer flex items-center gap-4">
                    <ShoppingCart size={20} />
                    Basket
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
