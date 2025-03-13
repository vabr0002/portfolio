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
  const [isChanging, setIsChanging] = useState(false);
  const [pillStyle, setPillStyle] = useState({});
  const tabsRef = useRef({});

  // Opdater pill position når activeSection ændres
  useEffect(() => {
    if (tabsRef.current[activeSection]) {
      const activeTab = tabsRef.current[activeSection];
      setPillStyle({
        width: `${activeTab.offsetWidth}px`,
        height: `${activeTab.offsetHeight}px`,
        transform: `translateX(${activeTab.offsetLeft}px)`,
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
      });
    }
  }, [activeSection]);

  const handleSectionChange = (section) => {
    if (section !== activeSection) {
      setActiveSection(section);
      setIsChanging(true);
      setTimeout(() => {
        setIsChanging(false);
      }, 300);
    }
  };

  const registerTabRef = (el, key) => {
    if (el && !tabsRef.current[key]) {
      tabsRef.current[key] = el;

      // Initier pill position når første tab bliver registreret
      if (key === activeSection) {
        setPillStyle({
          width: `${el.offsetWidth}px`,
          height: `${el.offsetHeight}px`,
          transform: `translateX(${el.offsetLeft}px)`
        });
      }
    }
  };

  const categories = {
    frameworks: {
      title: "Frameworks & Languages",
      items: [
        { icon: <RiNextjsFill />, name: "Next.js", level: 70 },
        { icon: <FaReact />, name: "React", level: 65 },
        { icon: <TiHtml5 />, name: "HTML", level: 90 },
        { icon: <IoLogoCss3 />, name: "CSS", level: 90 },
        { icon: <IoLogoJavascript />, name: "JavaScript", level: 70 },
        { icon: <RiTailwindCssFill />, name: "Tailwind CSS", level: 85 },
        { icon: <FaDatabase />, name: "Rest API", level: 50 },
        { icon: <RiSupabaseFill />, name: "Supabase", level: 60 }
      ]
    },
    software: {
      title: "Tools",
      items: [
        { icon: <FaFigma />, name: "Figma", level: 90 },
        { icon: <VscVscode />, name: "VS Code", level: 95 },
        { icon: <SiAdobelightroom />, name: "Adobe Lightroom", level: 65 },
        { icon: <SiAdobeindesign />, name: "Adobe InDesign", level: 60 },
        { icon: <SiAdobeillustrator />, name: "Adobe Illustrator", level: 55 },
        { icon: <SiAdobepremierepro />, name: "Adobe Premiere", level: 50 }
      ]
    },
    skills: {
      title: "Skills",
      items: [
        { icon: <MdOutlineWeb />, name: "Web development", level: 90 },
        { icon: <FaPalette />, name: "UI design", level: 85 },
        { icon: <FaUsers />, name: "User experience", level: 80 },
        {
          icon: <MdArchitecture />,
          name: "Information architecture",
          level: 75
        },
        { icon: <MdBrandingWatermark />, name: "Branding", level: 60 },
        { icon: <FaCameraRetro />, name: "Photography", level: 65 },
        { icon: <TbPhotoEdit />, name: "Photo editing", level: 60 },
        { icon: <FaInstagram />, name: "Social media", level: 50 }
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

        {/* Navigation Tabs med glidende pill animation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-cream p-1 rounded-full relative">
            {/* Moving pill background */}
            <div
              className="absolute bg-red-orange rounded-full z-0 shadow-lg"
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
          <div
            className={`transition-all duration-300 ${
              isChanging
                ? "opacity-0 transform translate-y-4"
                : "opacity-100 transform translate-y-0"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories[activeSection].items.map((item, index) => (
                <div
                  key={index}
                  className="bg-cream rounded-xl overflow-hidden shadow-lg group hover:shadow-red-orange/20 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="p-6 flex flex-col items-center">
                    <div className="text-5xl text-red-orange mb-4 transform group-hover:scale-110 transition-all duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-dark-gray mb-3 text-center">
                      {item.name}
                    </h3>

                    {/* Proficiency Bar uden animation */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
