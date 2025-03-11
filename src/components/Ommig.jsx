"use client";

import React, { useState, useEffect, useRef } from "react";

const Ommig = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting); // Opdaterer isVisible baseret på synlighed
      },
      { threshold: 0.3 } // Udløser når 30% af sektionen er synlig eller forsvinder
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const images = [
    {
      src: "/IMG_2863.jpeg",
      text: "Jeg er en stolt far til en dejlig datter"
    },
    {
      src: "/IMG_3841.jpeg",
      text: "Jeg er meget aktiv og nyder at udfordre mig selv i naturen og i fitnesscenteret."
    },
    {
      src: "/IMG_1441.JPG",
      text: "Jeg holder meget af at lave mad og udforske kulturer fra hele verden"
    }
  ];

  return (
    <div className="h-screen flex flex-col justify-center items-center px-6 bg-black/50 mb-32">
      <section
        ref={sectionRef}
        className="max-w-7xl w-full text-center text-white"
      >
        <h1
          className={`text-4xl font-bold mb-4 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-80"
          }`}
        >
          Om mig
        </h1>
        <div className="mb-12 max-w-2xl mx-auto">
          <p
            className={`text-lg leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-40"
            }`}
          >
            <span className="font-semibold">
              Mit navn er Valdemar Bang Bredvig
            </span>
            , jeg er en 26-årig passioneret{" "}
            <span className="italic">webudvikler og UX/UI-designer</span>. Jeg
            kommer oprindeligt fra Odense og er nu bosat i København.
          </p>
          <p
            className={`text-lg leading-relaxed mt-4 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-40"
            }`}
          >
            Jeg afslutter min multimediedesigner-uddannelse på KEA til sommer
            2025 og fortsætter derefter på professionsbacheloren i webudvikling
            fra august. Med en glad og imødekommende tilgang kombinerer jeg
            kreativitet og teknisk kunnen for at skabe brugervenlige løsninger.
          </p>
          <p
            className={`text-lg leading-relaxed mt-4 transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-40"
            }`}
          >
            Jeg er ansvarsbevidst, lærenem og altid klar til at tage nye
            udfordringer op.
          </p>
        </div>
        <div className="flex flex-row gap-4 h-[50vh] mx-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-[calc(33.33%-15px)] h-full rounded-lg transition-all duration-500 relative overflow-hidden flex justify-center items-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.src}
                alt=""
                className={`absolute w-full h-full object-cover rounded-lg transition-all duration-700 ease-in-out ${
                  hoveredIndex === index
                    ? "opacity-0 scale-105"
                    : "opacity-100 scale-100"
                }`}
              />
              <p
                className={`absolute text-white text-lg font-semibold px-6 text-center transition-all duration-700 ease-in-out ${
                  hoveredIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                {image.text}
              </p>
              {hoveredIndex !== null && hoveredIndex !== index && (
                <div className="absolute w-full h-full bg-black/40 rounded-lg transition-all duration-700"></div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Ommig;
