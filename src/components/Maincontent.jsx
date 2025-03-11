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
      title: "Frontend & Webudvikling",
      image: "/florian-olivo-4hbJ-eymZ1o-unsplash.jpg",
      text: [
        "Bygger responsive websites med HTML, CSS og JavaScript.",
        "Anvender moderne frameworks som React og Next.js.",
        "Styling og animationer med Tailwind CSS."
      ]
    },
    {
      title: "Designsystemer & UI/UX Konsistens",
      image: "/zac-wolff-7uSKXpksCKg-unsplash.jpg",
      text: [
        "Anvender designsystemer for konsistent og effektiv UI/UX.",
        "Strukturerer komponentbiblioteker til skalerbarhed og professionel æstetik.",
        "Sikrer ensartet design på tværs af platforme."
      ]
    },
    {
      title: "Informationsarkitektur & Brugeroplevelse",
      image: "/kelly-sikkema-lFtttcsx5Vk-unsplash.jpg",
      text: [
        "Optimerer informationsarkitektur for intuitiv navigation.",
        "Strømliner hierarkier og fjerner overflødige elementer.",
        "Fokuserer på enkle og brugervenlige designs."
      ]
    },
    {
      title: "Prototyping & Brugercentreret Design",
      image: "/prototyping.jpg",
      text: [
        "Designer funktionelle Figma-prototyper til brugertests.",
        "Optimerer løsninger iterativt baseret på brugerfeedback.",
        "Skaber brugervenlige designs, der balancerer forretningsmål og brugerbehov."
      ]
    }
  ];

  return (
    <div className="mx-auto px-6 sm:px-8 md:px-12 lg:px-16 mt-20">
      <div className="mt-10 mb-10 flex justify-center">
        <h1 className="text-4xl font-bold">Kompetancer</h1>
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
              className={`w-[50%] h-auto object-cover rounded-lg transition-all duration-1000 ${
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
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <ul className="list-disc pl-5">
                {section.text.map((point, i) => (
                  <li key={i} className="mb-2">
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
