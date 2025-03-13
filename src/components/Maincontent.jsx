"use client";

import React, { useEffect, useState, useRef } from "react";

const Maincontent = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.dataset.index]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const sections = [
    {
      title: "Frontend & Web Development",
      image: "/florian-olivo-4hbJ-eymZ1o-unsplash.jpg",
      text: [
        "Develop responsive websites using HTML, CSS, and JavaScript.",
        "Leverage modern frameworks such as React and Next.js.",
        "Implement styling and animations with Tailwind CSS."
      ]
    },
    {
      title: "Design Systems & UI/UX Consistency",
      image: "/zac-wolff-7uSKXpksCKg-unsplash.jpg",
      text: [
        "Utilize design systems to ensure consistent and efficient UI/UX.",
        "Structure component libraries for scalability and professional aesthetics.",
        "Maintain uniform design across platforms."
      ]
    },
    {
      title: "Information Architecture & User Experience",
      image: "/kelly-sikkema-lFtttcsx5Vk-unsplash.jpg",
      text: [
        "Optimize information architecture for intuitive navigation.",
        "Streamline hierarchies and eliminate redundant elements.",
        "Focus on simple and user-friendly designs."
      ]
    },
    {
      title: "Prototyping & User-Centered Design",
      image: "/prototyping.jpg",
      text: [
        "Design functional Figma prototypes for user testing.",
        "Iteratively refine solutions based on user feedback.",
        "Create user-friendly designs that balance business objectives and user needs."
      ]
    }
  ];

  return (
    <div className="mx-auto px-6 sm:px-8 md:px-12 lg:px-16 mt-20 bg-cream">
      <div className="mt-10 mb-10 flex justify-center">
        <h1 className="text-6xl font-bold text-red-orange">Competence</h1>
      </div>

      {sections.map((section, index) => {
        const isEven = index % 2 === 0;
        const isVisible = visibleSections[index];

        return (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            data-index={index}
            className={`flex items-center mb-20 transition-all duration-1000 w-full lg:w-4/5 mx-auto ${
              isEven ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Billede animation */}
            <img
              src={section.image}
              alt={section.title}
              className={`w-[50%] h-auto object-cover rounded-lg shadow-lg transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : isEven
                  ? "opacity-0 -translate-x-20"
                  : "opacity-0 translate-x-20"
              }`}
            />

            {/* Tekst animation */}
            <div
              className={`w-[50%] transition-all duration-1000 delay-200 text-left ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : isEven
                  ? "opacity-0 -translate-x-20"
                  : "opacity-0 translate-x-20"
              } ${isEven ? "pl-8" : "pr-8"}`}
            >
              <h2 className="text-3xl font-semibold text-red-orange mb-4">
                {section.title}
              </h2>
              <ul className="list-disc pl-5 text-dark-gray">
                {section.text.map((point, i) => (
                  <li key={i} className="mb-2 ">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Maincontent;
