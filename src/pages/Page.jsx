import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Navbar from "../components/Navbar";
import Home from "../sections/HomeSection";
import About from "../sections/AboutSection";
import Projects from "../sections/ProjectsSection";
import Contact from "../sections/ContactSection";
import Footer from "../components/Footer";

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi dalam ms
      once: true, // animasi hanya berjalan sekali
    });
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-x-hidden">
      <div className="w-full max-w-[1440px] px-3 sm:px-[100px] lg:px-[45px] xl:px-[150px] text-kanit">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
