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
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const images = [
    {
      src: "/IMG_2863.jpeg",
      text: "I am a proud father to a wonderful daughter."
    },
    {
      src: "/IMG_3841.jpeg",
      text: "I am highly active and love challenging myself in nature and the gym."
    },
    {
      src: "/IMG_1441.JPG",
      text: "I have a passion for cooking and exploring cultures from around the world."
    }
  ];

  return (
    <div className="h-screen flex flex-col justify-center items-center px-6 bg-cream mb-32">
      <section
        ref={sectionRef}
        className="max-w-7xl w-full text-center text-dark-gray"
      >
        <h1
          className={`text-4xl text-red-orange font-bold mb-4 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-80"
          }`}
        >
          About Me
        </h1>
        <div className="mb-12 max-w-2xl mx-auto">
          <p
            className={`text-lg leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-40"
            }`}
          >
            <strong>Valdemar Bang Bredvig</strong>, a 26-year-old passionate
            <strong> Web Developer</strong> and <strong>UX/UI-Designer</strong>.
            Originally from Odense, I now live in Copenhagen.
          </p>
          <p
            className={`text-lg leading-relaxed mt-4 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-40"
            }`}
          >
            I will complete my Multimedia Design degree at KEA in the summer of
            2025, after which I will continue with a Bachelor's in Web
            Development starting in August. With a positive and welcoming
            approach, I combine creativity and technical skills to craft
            user-friendly solutions.
          </p>
          <p
            className={`text-lg leading-relaxed mt-4 transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-40"
            }`}
          >
            I am responsible, eager to learn, and always ready to take on new
            challenges.
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
                className={`absolute text-lg font-semibold px-6 text-center transition-all duration-700 ease-in-out ${
                  hoveredIndex === index
                    ? "opacity-100 translate-y-0 text-red-orange"
                    : "opacity-0 translate-y-4 text-cream"
                }`}
              >
                {image.text}
              </p>
              {hoveredIndex !== null && hoveredIndex !== index && (
                <div className="absolute w-full h-full bg-dark-gray/50 rounded-lg transition-all duration-700"></div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Ommig;
