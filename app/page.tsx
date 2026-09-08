import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIBuild from "@/components/WhatIBuild";
import About from "@/components/About";
import Experience from "@/components/Experience";
import EngineeringMetrics from "@/components/EngineeringMetrics";
import Projects from "@/components/Projects";
import Architecture from "@/components/Architecture";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#f5f5f5] focus:text-[#050505]">
        Skip to content
      </a>
      <div className="noise" aria-hidden />
      <CustomCursor />
      <Navbar />
      <main id="main">
        <Hero />
        <WhatIBuild />
        <About />
        <Experience />
        <EngineeringMetrics />
        <Projects />
        <Architecture />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
