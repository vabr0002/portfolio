import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="absolute top-0 left-0 w-full flex items-center justify-between py-4 px-6 max-w-7xl mx-auto text-white z-10">
      <div>LOGO</div>

      <div className="text-white flex gap-8">
        <Link
          href="aboutme"
          className="bg-slate-300 text-black rounded-full px-4 py-2 hover:bg-transparent transition-all duration 300 hover:text-white"
        >
          About Me
        </Link>
        <Link
          href="cases"
          className="bg-slate-300 text-black rounded-full px-4 py-2 hover:bg-transparent transition-all duration 300 hover:text-white"
        >
          Cases
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
