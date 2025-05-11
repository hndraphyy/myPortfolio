import Navbar from "../components/Navbar";
import Home from "../sections/HomeSection";
import About from "../sections/AboutSection";
import Projects from "../sections/ProjectsSection";
import Contact from "../sections/ContactSection";
import Footer from "../components/Footer";

export default function Page() {
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
