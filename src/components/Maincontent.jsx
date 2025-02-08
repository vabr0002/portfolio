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
            [entry.target.dataset.index]: entry.isIntersecting // Fjerner synlighed ved exit
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
    { title: "Her er et projekt", text: "Lorem ipsum dolor sit amet..." },
    { title: "Her er et projekt", text: "Voluptatum atque quos blanditiis..." },
    {
      title: "Her er et projekt",
      text: "Voluptatum repellendus placeat quos..."
    },
    {
      title: "Her er det sidste projekt",
      text: "Ullam, exercitationem praesentium..."
    }
  ];

  return (
    <div className="px-6 mt-20">
      <div className="mt-10 mb-10 flex justify-center">
        <h1>Mine Cases</h1>
      </div>

      {sections.map((section, index) => {
        const isEven = index % 2 === 0;
        const isVisible = visibleSections[index];

        return (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            data-index={index}
            className={`flex items-center mb-20 transition-all duration-1000 ${
              isEven ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Billede animation */}
            <img
              src="/ricardo-gomez-angel-opFPVxMRpP8-unsplash.jpg"
              alt=""
              className={`w-[40%] h-auto object-cover rounded-lg transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : isEven
                  ? "opacity-0 -translate-x-20"
                  : "opacity-0 translate-x-20"
              }`}
            />

            {/* Tekst animation */}
            <div
              className={`w-[60%] px-8 transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : isEven
                  ? "opacity-0 -translate-x-20"
                  : "opacity-0 translate-x-20"
              }`}
            >
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <p>{section.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Maincontent;
