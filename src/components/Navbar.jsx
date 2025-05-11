import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`w-full md:h-20 fixed z-[9999] bottom-0 md:top-0 left-0 right-0 bg-primary-custom transition-transform duration-300
        ${showNavbar ? "translate-y-0" : "translate-y-0 md:-translate-y-full"}
        ${isOpen ? "pointer-events-none" : "pointer-events-auto"}`}
      >
        <div className="mx-auto w-full max-w-[1440px] px-3 md:px-10">
          <nav className="text-kanit py-3 md:py-6 flex items-center justify-between">
            <h1 className="text-[1.2rem] font-semibold text-white">
              hendraaditya
            </h1>

            <ul className="hidden md:flex gap-10 text-[17px]">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white  hover:text-[#209d0f] transition duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex gap-2 md:hidden">
              <a
                href="https://wa.link/8qxinn"
                className="bg-green-custom px-3 py-1 text-[14px] text-white"
              >
                Contact
              </a>
              <button onClick={toggleMenu} className="z-50">
                <Menu size={28} className="text-white" />
              </button>
            </div>
          </nav>
        </div>
      </header>
      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-[99999] flex flex-col justify-center items-center gap-5 text-lg text-kanit transition-all duration-300 ease-in-out transform bg-primary-custom ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-amber-500 transition text-[24px] text-white"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </a>
        ))}

        <button
          onClick={toggleMenu}
          className="absolute bottom-15 border border-white text-white rounded-full p-4 transition"
        >
          <X size={38} />
        </button>
      </div>
    </>
  );
}
