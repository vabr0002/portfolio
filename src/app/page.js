"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Ommig from "@/components/Ommig";
import Maincontent from "@/components/Maincontent";
import Footer from "@/components/footer";
import ProgressLine from "@/components/ProgressLine";
import Tools from "@/components/tools";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <div id="maincontent">
        <Maincontent />
      </div>
      <div id="tools">
        <Tools />
      </div>
      <div id="ommig">
        <Ommig />
      </div>
      <Footer />
    </div>
  );
}
