"use client";
"use client";
import { useEffect, useState } from "react";

const ProgressLine = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercent = (winScroll / height) * 100;
      setScrollPercentage(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculatePathLength = () => {
    // Total længde af stien fra top til cirklen
    const verticalPath = 400; // Højden af det første segment
    const horizontalPath = 300; // Bredden af det andet segment
    const remainingVerticalPath = window.innerHeight - 400; // Fra knækket til bunden
    return verticalPath + horizontalPath + remainingVerticalPath;
  };

  const pathLength = calculatePathLength();

  const getFillPercentage = () => {
    // Beregn hvor meget af stien der skal fyldes baseret på scrollen
    return Math.min(scrollPercentage * 2.5, 100); // 2.5 for at justere for at stien er længere end viewporten
  };

  return (
    <section className="relative h-[200vh]">
      <div className="absolute inset-0">
        <div
          className="line-segment absolute w-[2px] transition-all duration-500 ease-out"
          style={{
            top: 0,
            left: "10%",
            height: `${pathLength}px`,
            background: `linear-gradient(to bottom, #00ff00 ${getFillPercentage()}%, transparent ${getFillPercentage()}%)`
          }}
        >
          {/* Hvis du vil have en 'kink' i linjen, kan du bruge et baggrundsbillede eller svg her */}
        </div>
        <div
          className="line-segment absolute h-[2px] transition-all duration-500 ease-out"
          style={{
            top: "400px",
            left: "10%",
            width: "300px",
            // Dette segment bliver bare en del af den totale sti, så vi gør det usynligt
            background: "transparent"
          }}
        ></div>
      </div>
      {/* Resten af komponenten forblive som før */}
      <div
        className="text-bubble absolute top-[20%] left-[10%] bg-white bg-opacity-80 p-2 rounded-lg opacity-0 transition-opacity duration-1000"
        style={{ opacity: scrollPercentage > 30 ? 1 : 0 }}
      >
        Jeg er en udvikler med passion for React.
      </div>
      <div
        className="text-bubble absolute top-[60%] left-[50%] bg-white bg-opacity-80 p-2 rounded-lg opacity-0 transition-opacity duration-1000"
        style={{ opacity: scrollPercentage > 60 ? 1 : 0 }}
      >
        Jeg elsker at løse komplekse problemer.
      </div>
      <div
        id="end-circle"
        className="absolute w-12 h-12 rounded-full bg-green-500 opacity-0 transition-opacity duration-1000"
        style={{
          top: `${window.innerHeight - 50}px`,
          left: `${window.innerWidth / 2 - 25}px`,
          opacity: scrollPercentage > 80 ? 1 : 0
        }}
      ></div>
    </section>
  );
};

export default ProgressLine;
