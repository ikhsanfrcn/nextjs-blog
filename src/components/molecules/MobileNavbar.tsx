"use client";
import { useState } from "react";
import { SearchBar } from "./searchBar";
import LoginRegister from "../organisms/LoginRegister";
import Link from "next/link";

export const MobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="md:hidden flex items-center space-x-2"
        onClick={toggleMenu}
      >
        <div className="w-6 h-0.5 bg-black transform transition-all duration-300 ease-in-out">
          <div
            className={`w-6 h-0.5 bg-black mb-1 transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-1" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-black mt-1 transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </div>
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden flex flex-col items-center mt-4 space-y-4`}
      >
        <div className="absolute top-16 left-0 w-full bg-white p-4">
          <div className="flex w-full px-4 gap-5 justify-center">
            <SearchBar />
            <LoginRegister />
          </div>
          <div className="grid pt-5 gap-7 items-start text-xl pt-10">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
