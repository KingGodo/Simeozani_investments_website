import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import BusinessAreas from "@/components/sections/Businessareas";
import StrategicFocus from "@/components/sections/Strategicfocus";
import CommitmentAfrica from "@/components/sections/CommitmentAfrica";
import LeadershipPhilosophy from "@/components/sections/LeadershipPhilosophy";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="sectors">
        <BusinessAreas />
      </section>
      <section id="transformation">
        <StrategicFocus />
      </section>
      <section id="sustainability">
        <CommitmentAfrica />
      </section>
      <section id="insights">
        <LeadershipPhilosophy />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}