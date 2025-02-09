"use client";

import React, { useState } from "react";

const Ommig = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [
    {
      src: "/matthew-henry-VviFtDJakYk-unsplash.jpg",
      text: "Jeg er en passioneret designer med fokus på brugeroplevelser."
    },
    {
      src: "/parrish-freeman-P6OPPjvx4tk-unsplash.jpg",
      text: "Jeg elsker at arbejde med kreative processer og prototyping."
    },
    {
      src: "/ricardo-gomez-angel-opFPVxMRpP8-unsplash.jpg",
      text: "Min baggrund i webudvikling giver mig et stærkt teknisk fundament."
    }
  ];

  return (
    <div className="h-screen flex flex-col justify-center items-center px-6">
      <section className="max-w-7xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Om mig</h1>
        <p className="mb-6">
          Mere beskrivende tekst Lorem, ipsum dolor sit amet consectetur
          adipisicing elit...
        </p>
        <div className="flex flex-row gap-4 h-[50vh] mx-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-[calc(33.33%-15px)] h-full rounded-lg transition-all duration-500 relative overflow-hidden flex justify-center items-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Billedet - forsvinder når hoveredIndex === index */}
              <img
                src={image.src}
                alt=""
                className={`absolute w-full h-full object-cover rounded-lg transition-all duration-700 ease-in-out ${
                  hoveredIndex === index
                    ? "opacity-0 scale-105"
                    : "opacity-100 scale-100"
                }`}
              />

              {/* Tekst - bliver synlig når hoveredIndex === index */}
              <p
                className={`absolute text-white text-lg font-semibold px-6 text-center transition-all duration-700 ease-in-out ${
                  hoveredIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                {image.text}
              </p>

              {/* Effekt på de andre billeder */}
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
