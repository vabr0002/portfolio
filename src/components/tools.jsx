"use client";

import React, { useState } from "react";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa6";
import { RiSupabaseFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiAdobelightroom } from "react-icons/si";
import { SiAdobeindesign } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { MdOutlineWeb } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaPalette } from "react-icons/fa";
import { MdBrandingWatermark } from "react-icons/md";
import { MdArchitecture } from "react-icons/md";
import { FaCameraRetro } from "react-icons/fa";
import { TbPhotoEdit } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";

const Tools = () => {
  const [activeSection, setActiveSection] = useState(null);

  const frameworksAndLanguages = [
    { icon: <RiNextjsFill />, name: "Next.js" },
    { icon: <FaReact />, name: "React" },
    { icon: <TiHtml5 />, name: "HTML" },
    { icon: <IoLogoCss3 />, name: "CSS" },
    { icon: <IoLogoJavascript />, name: "JavaScript" },
    { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
    { icon: <FaDatabase />, name: "Rest API" },
    { icon: <RiSupabaseFill />, name: "Supabase" }
  ];

  const software = [
    { icon: <FaFigma />, name: "Figma" },
    { icon: <VscVscode />, name: "VS Code" },
    { icon: <SiAdobelightroom />, name: "Adobe Lightroom" },
    { icon: <SiAdobeindesign />, name: "Adobe InDesign" },
    { icon: <SiAdobeillustrator />, name: "Adobe Illustrator" },
    { icon: <SiAdobepremierepro />, name: "Adobe Premiere" }
  ];

  const skills = [
    { icon: <MdOutlineWeb />, name: "Web development" },
    { icon: <FaPalette />, name: "UI design" },
    { icon: <FaUsers />, name: "User experience" },
    { icon: <MdArchitecture />, name: "Information architecture" },
    { icon: <MdBrandingWatermark />, name: "Branding" },
    { icon: <FaCameraRetro />, name: "Photography" },
    { icon: <TbPhotoEdit />, name: "Photo editing" },
    { icon: <FaInstagram />, name: "Social media" }
  ];

  // Hjælpefunktion til at få den aktive liste
  const getActiveList = () => {
    if (activeSection === "frameworks") return frameworksAndLanguages;
    if (activeSection === "software") return software;
    if (activeSection === "skills") return skills;
    return [];
  };

  return (
    <div className="flex items-center justify-center my-16 bg-gray-800">
      <div className="w-full max-w-[40rem] mx-auto p-6">
        {/* Overskrift */}
        <h1 className="text-3xl font-bold text-center mb-8 text-white">
          Skills & Tools
        </h1>

        {/* Knapper */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <button
            onClick={() =>
              setActiveSection(
                activeSection === "frameworks" ? null : "frameworks"
              )
            }
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 border border-gray-300 ${
              activeSection === "frameworks"
                ? "bg-white text-black"
                : "bg-transparent text-white hover:bg-gray-600 hover:text-white"
            }`}
          >
            Frameworks & Languages
          </button>
          <button
            onClick={() =>
              setActiveSection(activeSection === "software" ? null : "software")
            }
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 border border-gray-300 ${
              activeSection === "software"
                ? "bg-white text-black"
                : "bg-transparent text-white hover:bg-gray-600 hover:text-white"
            }`}
          >
            Tools
          </button>
          <button
            onClick={() =>
              setActiveSection(activeSection === "skills" ? null : "skills")
            }
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 border border-gray-300 ${
              activeSection === "skills"
                ? "bg-white text-black"
                : "bg-transparent text-white hover:bg-gray-600 hover:text-white"
            }`}
          >
            Skills
          </button>
        </div>

        {/* Container med fast højde og centrering */}
        <div className="h-[16rem] overflow-hidden flex justify-center">
          {activeSection && (
            <div className="max-w-md mx-auto px-4">
              <div className="grid grid-cols-2 gap-6">
                {getActiveList().map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 transition-all duration-300 ease-in-out group"
                  >
                    <div className="text-3xl text-white group-hover:scale-110  transition-all duration-300">
                      {item.icon}
                    </div>
                    <p className="text-lg text-white">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tools;
