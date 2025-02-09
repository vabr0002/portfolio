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
    {
      title: "Prototyping & Brugercentreret Design",
      text: [
        "Gennem min uddannelse har jeg arbejdet med en række cases, hvor vi har designet og udviklet funktionelle prototyper i Figma.",
        "Disse prototyper er blevet anvendt til brugertests, hvilket har givet værdifuld indsigt i brugeradfærd og behov.",
        "Feedback fra testene er systematisk implementeret for at optimere og finjustere løsningerne.",
        "Den iterative proces har givet mig erfaring med at skabe velgennemtænkte, brugervenlige løsninger, der matcher både forretningsmål og brugerforventninger."
      ]
    },
    {
      title: "Designsystemer & UI/UX Konsistens",
      text: [
        "Har opnået solid erfaring med at arbejde med designsystemer gennem flere projekter.",
        "Forstår vigtigheden af systematiske designprincipper for at skabe en ensartet og effektiv brugeroplevelse.",
        "Designs og komponentbiblioteker struktureres, så de sikrer en konsistent og professionel æstetik på tværs af platforme.",
        "Effektiv brug af designsystemer har gjort min design- og udviklingsproces mere skalerbar og strømlinet."
      ]
    },
    {
      title: "Informationsarkitektur & Brugeroplevelse",
      text: [
        "Erfaring med at optimere informationsarkitektur for bedre navigation og brugervenlighed.",
        "Har arbejdet med restrukturering af hjemmesider for at gøre dem mere intuitive og letforståelige.",
        "Har fjernet unødvendige elementer og forbedret informationshierarkiet for en mere strømlinet oplevelse.",
        "Fokus på simple, brugervenlige designløsninger, der gør det lettere for brugere at finde relevant information."
      ]
    },
    {
      title: "Udviklerkompetencer: Frontend & Webudvikling",
      text: [
        "Solid erfaring med at bygge responsive hjemmesider ved hjælp af HTML, CSS og JavaScript.",
        "Stærk forståelse for moderne CSS-teknikker, herunder Flexbox, Grid, animationer og pre-processors som SCSS.",
        "Erfaring med at gøre websites mere dynamiske og interaktive gennem JavaScript (ES6+).",
        "Grundlæggende forståelse af React og Next.js, herunder komponentbaseret udvikling, state management og routing.",
        "Har arbejdet med Tailwind CSS for at opbygge skalerbare og vedligeholdelsesvenlige UI-løsninger.",
        "Forstår vigtigheden af performance-optimering, SEO og accessibility (a11y) i moderne webudvikling."
      ]
    }
  ];

  return (
    <div className="mx-auto px-6 sm:px-8 md:px-12 lg:px-16 mt-20 ">
      <div className="mt-10 mb-10 flex justify-center">
        <h1 className="text-4xl font-bold">Mine Skills</h1>
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
              src="/ricardo-gomez-angel-opFPVxMRpP8-unsplash.jpg"
              alt=""
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
