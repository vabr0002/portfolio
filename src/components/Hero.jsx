"use client";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="relative w-full h-screen">
      <img
        src="/maarten-deckers-T5nXYXCf50I-unsplash.jpg"
        alt="Hero Image"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50 text-center px-4">
        <h1
          className={`text-4xl md:text-6xl font-bold transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-80"
          }`}
        >
          Velkommen til Min Side
        </h1>
        <p
          className={`text-lg md:text-xl mt-4 transition-all duration-1000 delay-200 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-40"
          }`}
        >
          Gå på opdagelse i mine kompetancer og projekter!
        </p>
      </div>
    </div>
  );
};

export default Hero;
