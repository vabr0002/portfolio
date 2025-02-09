import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Ommig from "@/components/Ommig";
import Maincontent from "@/components/Maincontent";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Maincontent />
      <Ommig />
      <Footer />
    </div>
  );
}
