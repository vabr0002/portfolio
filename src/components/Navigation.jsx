import React from "react";
import Link from "next/link";

const Navigation = () => {
  // Funktion til at scrolle til en sektion
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full flex items-center justify-between py-4 px-6 max-w-7xl mx-auto text-white z-10 ">
      <div>LOGO</div>

      <div className="text-white flex gap-8">
        <Link
          href="#maincontent"
          className="bg-slate-300 text-black rounded-full px-4 py-2 hover:bg-transparent transition-all duration-500 hover:text-white"
          onClick={(e) => {
            e.preventDefault(); // Forhindrer standard routing
            scrollToSection("maincontent"); // Scroller til Maincontent
          }}
        >
          Kompetancer
        </Link>
        <Link
          href="#tools"
          className="bg-slate-300 text-black rounded-full px-4 py-2 hover:bg-transparent transition-all duration-500 hover:text-white"
          onClick={(e) => {
            e.preventDefault(); // Forhindrer standard routing
            scrollToSection("tools"); // Scroller til Tools
          }}
        >
          Skills & Tools
        </Link>
        <Link
          href="#ommig"
          className="bg-slate-300 text-black rounded-full px-4 py-2 hover:bg-transparent transition-all duration-500 hover:text-white"
          onClick={(e) => {
            e.preventDefault(); // Forhindrer standard routing
            scrollToSection("ommig"); // Scroller til Ommig
          }}
        >
          About Me
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
