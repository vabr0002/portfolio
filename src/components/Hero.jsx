"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-800">
      <div className="absolute inset-0 flex items-center justify-center text-white px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full">
          {/* Tekst */}
          <div
            className={`flex items-center justify-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-80"
            }`}
          >
            <p className="text-lg md:text-xl text-white">
              Jeg er en 26-årig multimediedesignerstuderende med fokus på
              webdesign og brugeroplevelser. Gennem min uddannelse har jeg
              opnået erfaring med design og udvikling af websites og
              brugergrænseflader, samt tekniske kompetencer inden for HTML, CSS
              og JavaScript. Mit mål er at skabe æstetisk tiltalende,
              brugercentrerede løsninger, der forener design og funktionalitet
              for en optimal brugeroplevelse.
            </p>
          </div>

          {/* Billed-stack */}
          <div className="relative flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:space-x-4">
            <Image
              src="/404017517_368455572436400_734122118462416329_n (1).jpg"
              alt="Top Image"
              width={250}
              height={266}
              className={`rounded-lg shadow-lg transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-40"
              }`}
            />
            <Image
              src="/2.img.jpg"
              alt="Bottom Image"
              width={250}
              height={266}
              className={`rounded-lg shadow-lg transition-all duration-1000 delay-300 md:-translate-y-10 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-40"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
