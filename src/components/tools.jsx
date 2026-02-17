"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  RiNextjsFill,
  RiTailwindCssFill,
  RiSupabaseFill
} from "react-icons/ri";
import {
  FaReact,
  FaDatabase,
  FaFigma,
  FaUsers,
  FaPalette,
  FaCameraRetro
} from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import {
  SiAdobelightroom,
  SiAdobeindesign,
  SiAdobeillustrator,
  SiAdobepremierepro
} from "react-icons/si";
import {
  MdOutlineWeb,
  MdBrandingWatermark,
  MdArchitecture
} from "react-icons/md";
import { TbPhotoEdit } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";

const Tools = () => {
  const [activeSection, setActiveSection] = useState("frameworks");
  const [isFading, setIsFading] = useState(false); // Ny state til fade
  const [pillStyle, setPillStyle] = useState({});
  const tabsRef = useRef({});
  const tabContainerRef = useRef(null);

  // Initial fade-in ved mount
  useEffect(() => {
    setIsFading(true); // Start med fade-in
  }, []);

  // Opdater pill position
  useEffect(() => {
    if (tabsRef.current[activeSection] && tabContainerRef.current) {
      const activeTab = tabsRef.current[activeSection];
      const container = tabContainerRef.current;
      const containerLeft = container.getBoundingClientRect().left;
      const tabLeft = activeTab.getBoundingClientRect().left;
      const relativeLeft = tabLeft - containerLeft;

      setPillStyle({
        width: `${activeTab.offsetWidth}px`,
        height: `${activeTab.offsetHeight}px`,
        left: `${relativeLeft}px`,
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
      });
    }
  }, [activeSection]);

  // Håndter resize
  useEffect(() => {
    const handleResize = () => {
      if (tabsRef.current[activeSection] && tabContainerRef.current) {
        const activeTab = tabsRef.current[activeSection];
        const container = tabContainerRef.current;
        const containerLeft = container.getBoundingClientRect().left;
        const tabLeft = activeTab.getBoundingClientRect().left;
        const relativeLeft = tabLeft - containerLeft;

        setPillStyle({
          width: `${activeTab.offsetWidth}px`,
          height: `${activeTab.offsetHeight}px`,
          left: `${relativeLeft}px`,
          transition: "none"
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeSection]);

  const handleSectionChange = (section) => {
    if (section !== activeSection) {
      setIsFading(false); // Start fade-out
      setTimeout(() => {
        setActiveSection(section);
        setIsFading(true); // Start fade-in efter skift
      }, 500); // Vent til fade-out er færdig
    }
  };

  const registerTabRef = (el, key) => {
    if (el && !tabsRef.current[key]) {
      tabsRef.current[key] = el;
      if (key === activeSection && tabContainerRef.current) {
        const container = tabContainerRef.current;
        const containerLeft = container.getBoundingClientRect().left;
        const tabLeft = el.getBoundingClientRect().left;
        const relativeLeft = tabLeft - containerLeft;

        setPillStyle({
          width: `${el.offsetWidth}px`,
          height: `${el.offsetHeight}px`,
          left: `${relativeLeft}px`
        });
      }
    }
  };

  const categories = {
    frameworks: {
      title: "Frameworks & Languages",
      items: [
        { icon: <RiNextjsFill />, name: "Next.js", level: 45 },
        { icon: <FaReact />, name: "React", level: 45 },
        { icon: <TiHtml5 />, name: "HTML", level: 60 },
        { icon: <IoLogoCss3 />, name: "CSS", level: 70 },
        { icon: <IoLogoJavascript />, name: "JavaScript", level: 35 },
        { icon: <RiTailwindCssFill />, name: "Tailwind CSS", level: 65 },
        { icon: <FaDatabase />, name: "Rest API", level: 45 },
        { icon: <RiSupabaseFill />, name: "Supabase", level: 50 }
      ]
    },
    software: {
      title: "Tools",
      items: [
        { icon: <FaFigma />, name: "Figma", level: 50 },
        { icon: <VscVscode />, name: "VS Code", level: 55 },
        { icon: <SiAdobelightroom />, name: "Adobe Lightroom", level: 40 },
        { icon: <SiAdobeindesign />, name: "Adobe InDesign", level: 40 },
        { icon: <SiAdobeillustrator />, name: "Adobe Illustrator", level: 50 },
        { icon: <SiAdobepremierepro />, name: "Adobe Premiere", level: 35 }
      ]
    },
    skills: {
      title: "Skills",
      items: [
        { icon: <MdOutlineWeb />, name: "Web development", level: 65 },
        { icon: <FaPalette />, name: "UI design", level: 55 },
        { icon: <FaUsers />, name: "User experience", level: 50 },
        {
          icon: <MdArchitecture />,
          name: "Information architecture",
          level: 65
        },
        { icon: <MdBrandingWatermark />, name: "Branding", level: 40 },
        { icon: <FaCameraRetro />, name: "Photography", level: 50 },
        { icon: <TbPhotoEdit />, name: "Photo editing", level: 55 },
        { icon: <FaInstagram />, name: "Social media", level: 45 }
      ]
    }
  };

  return (
    <div className="bg-dark-gray py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12 text-white">
          <span className="bg-clip-text text-red-orange">
            Skills & Expertise
          </span>
        </h1>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div
            ref={tabContainerRef}
            className="inline-flex bg-cream p-1 rounded-full relative"
          >
            <div
              className="absolute top-1 bg-red-orange rounded-full z-0 shadow-lg"
              style={pillStyle}
            />
            {Object.keys(categories).map((key) => (
              <button
                key={key}
                ref={(el) => registerTabRef(el, key)}
                onClick={() => handleSectionChange(key)}
                className={`px-6 py-2 rounded-full font-medium z-10 relative transition-colors duration-300 ${
                  activeSection === key
                    ? "text-white"
                    : "text-dark-gray hover:text-red-orange"
                }`}
              >
                {categories[key].title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[28rem] relative">
          {activeSection === "frameworks" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.frameworks.items.map((item, index) => (
                <div
                  key={index}
                  className={`bg-cream rounded-xl overflow-hidden shadow-lg group 
                    hover:shadow-red-orange/20 transition-opacity duration-500 ease-in-out
                    ${isFading ? "opacity-100" : "opacity-0"}`}
                >
                  <div className="p-6 flex flex-col items-center">
                    <div className="text-5xl text-red-orange mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-dark-gray mb-3 text-center">
                      {item.name}
                    </h3>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                      <div
                        className="bg-gradient-to-r from-red-orange to-red-400 h-2 rounded-full"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between w-full mt-1">
                      <span className="text-xs text-gray-400">Beginner</span>
                      <span className="text-xs text-red-300">Expert</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === "software" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.software.items.map((item, index) => (
                <div
                  key={index}
                  className={`bg-cream rounded-xl overflow-hidden shadow-lg group 
                    hover:shadow-red-orange/20 transition-opacity duration-500 ease-in-out
                    ${isFading ? "opacity-100" : "opacity-0"}`}
                >
                  <div className="p-6 flex flex-col items-center">
                    <div className="text-5xl text-red-orange mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-dark-gray mb-3 text-center">
                      {item.name}
                    </h3>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                      <div
                        className="bg-gradient-to-r from-red-orange to-red-400 h-2 rounded-full"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between w-full mt-1">
                      <span className="text-xs text-gray-400">Beginner</span>
                      <span className="text-xs text-red-300">Expert</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === "skills" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.skills.items.map((item, index) => (
                <div
                  key={index}
                  className={`bg-cream rounded-xl overflow-hidden shadow-lg group 
                    hover:shadow-red-orange/20 transition-opacity duration-500 ease-in-out
                    ${isFading ? "opacity-100" : "opacity-0"}`}
                >
                  <div className="p-6 flex flex-col items-center">
                    <div className="text-5xl text-red-orange mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-dark-gray mb-3 text-center">
                      {item.name}
                    </h3>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                      <div
                        className="bg-gradient-to-r from-red-orange to-red-400 h-2 rounded-full"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between w-full mt-1">
                      <span className="text-xs text-gray-400">Beginner</span>
                      <span className="text-xs text-red-300">Expert</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tools;
