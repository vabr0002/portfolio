"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Ommig from "@/components/Ommig";
import Maincontent from "@/components/Maincontent";
import Footer from "@/components/footer";

import Tools from "@/components/tools";

export default function Home() {
  return (
    <div className="w-full bg-cream m-0 p-0">
      <Navigation />
      <Hero />
      <div id="maincontent" className="w-full">
        <Maincontent />
      </div>
      <div id="tools" className="w-full">
        <Tools />
      </div>
      <div id="ommig" className="w-full">
        <Ommig />
      </div>
      <Footer />
    </div>
  );
}
