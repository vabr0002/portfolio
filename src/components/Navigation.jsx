import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-cream flex items-center justify-between  px-6 mx-auto text-red-orange z-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold  tracking-wide text-red-orange">
          VA
        </h1>
        <h3 className="text-xl text-gray-500 mt-[-8px] translate-x-2">
          WEB DEVELOPMENT
        </h3>
      </div>

      <div className="flex gap-8">
        <Link
          href="#maincontent"
          className="bg-cream text-dark-gray rounded-full px-4 py-2 transition-all duration-300 border border-transparent hover:border-red-orange hover:bg-transparent hover:text-red-orange"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("maincontent");
          }}
        >
          Kompetancer
        </Link>
        <Link
          href="#tools"
          className="bg-cream text-dark-gray rounded-full px-4 py-2 transition-all duration-300 border border-transparent hover:border-red-orange hover:bg-transparent hover:text-red-orange"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("tools");
          }}
        >
          Skills & Tools
        </Link>
        <Link
          href="#ommig"
          className="bg-cream text-dark-gray rounded-full px-4 py-2 transition-all duration-300 border border-transparent hover:border-red-orange hover:bg-transparent hover:text-red-orange"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("ommig");
          }}
        >
          About Me
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
