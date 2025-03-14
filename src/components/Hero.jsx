"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="relative w-full h-screen bg-dark-gray">
      <div className="absolute inset-0 flex items-center justify-center text-cream px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full">
          {/* Tekst */}
          <div
            className={`flex items-center justify-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-80"
            }`}
          >
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-cream mb-2">
                VALDEMAR BANG BREDVIG
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold text-red-orange">
                MULTIMEDIA DESIGNER & FRONTEND DEVELOPER
              </h2>
              <div className="flex gap-6 mt-4 justify-start">
                <a
                  href="https://github.com/vabr0002"
                  className="text-cream hover:text-red-orange transform hover:scale-105 transition-all duration-200"
                >
                  <FaGithub className="text-3xl md:text-4xl" />
                </a>
                <a
                  href="https://www.instagram.com/valdemarbredvig/"
                  className="text-cream hover:text-red-orange transform hover:scale-105 transition-all duration-200"
                >
                  <FaInstagram className="text-3xl md:text-4xl" />
                </a>
                <a
                  href=""
                  className="text-cream hover:text-red-orange transform hover:scale-105 transition-all duration-200"
                >
                  <FaLinkedin className="text-3xl md:text-4xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Billed-stack */}
          <div className="relative flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:space-x-4">
            <Image
              src="/404017517_368455572436400_734122118462416329_n (1).jpg"
              alt="Top Image"
              width={280}
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
              width={280}
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
