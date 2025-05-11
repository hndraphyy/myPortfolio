import { useState } from "react";
import { Send, Instagram, Mail } from "lucide-react";
import lineHero from "../assets/images/lineHero.png";
import imgHero from "../assets/svg/myface.svg";

export default function Home() {
  const [boxStyle, setBoxStyle] = useState({});
  const [circleStyle, setCircleStyle] = useState({});
  const [blockStyle, setBlockStyle] = useState({});

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left - width / 5;
    const y = e.clientY - top - height / 5;

    const rotateX = (-y / height) * 15;
    const rotateY = (x / width) * 15;

    setBoxStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: "transform 0.1s ease",
    });

    const moveX = (x / width) * 20;
    const moveY = (y / height) * 20;

    setCircleStyle({
      transform: `translate(${moveX}px, ${moveY}px)`,
      transition: "transform 0.1s ease",
    });

    // Gerak berlawanan
    setBlockStyle({
      transform: `translate(${-moveX}px, ${-moveY}px)`,
      transition: "transform 0.1s ease",
    });
  };

  const handleMouseLeave = () => {
    setBoxStyle({
      transform: "rotateX(0deg) rotateY(0deg)",
      transition: "transform 0.3s ease",
    });
    setCircleStyle({
      transform: "translate(0px, 0px)",
      transition: "transform 0.3s ease",
    });
    setBlockStyle({
      transform: "translate(0px, 0px)",
      transition: "transform 0.3s ease",
    });
  };

  return (
    <section
      className="pt-10 md:pt-15 lg:pt-0 xl:pt-15 pb-10 md:pb-35"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id="home"
    >
      <main className="text-kanit flex justify-between items-center flex-col sm:flex-col lg:flex-row gap-20 md:gap-0">
        {/* Left Text Section */}
        <div className="md:text-start text-center md:pt-32">
          <div className="pb-1 md:pb-5 relative">
            <h1 className="text-3xl md:text-6xl text-white text-green-custom font-medium">
              Hello
            </h1>
            <span className="hidden md:block absolute left-40 bottom-7 w-[20px] h-[20px] rounded-2xl bg-green-custom opacity-50 transition-transform duration-500 ease-out hover:scale-[5]"></span>
          </div>
          <span className="relative">
            <h1 className="text-4xl md:text-6xl md:pl-8 pb-3 md:pb-5 font-light">
              i'm Hendra
            </h1>
            <img
              src={lineHero}
              alt="______"
              className="absolute h-[2px] left-[-45px] md:left-[-250px] w-[100px] md:w-[260px] bottom-2 md:top-[42%]"
            />
          </span>
          <h1 className="text-4xl md:text-6xl pb-7 md:pb-12 font-medium">
            Frontend Developer
          </h1>

          <div className="flex justify-center md:justify-start items-center gap-5 md:gap-8">
            <a
              href="https://wa.link/8qxinn"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center text-[17px] md:text-[19px] text-kanit px-7 py-3 md:px-10 md:py-4 bg-green-custom relative overflow-hidden transition-all duration-300"
            >
              Contact Me
              <Send
                size={20}
                className="right-6 md:right-9 w-7 bg-[#0e7015] absolute transform -translate-x-3 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              />
            </a>
            <a
              href="mailto:hendraaditya1913@gmail.com"
              className="hover:text-green-custom hover:opacity-80 transition duration-300"
              aria-label="Email"
            >
              <Mail size={28} className="hidden md:block" />
              <Mail size={23} className="block md:hidden" />
            </a>
            <a
              href="https://www.instagram.com/hndradityaa?igsh=bWFnNG91ZzF5ODNn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-custom hover:opacity-80 transition duration-300"
              aria-label="Instagram"
            >
              <Instagram size={28} className="hidden md:block" />
              <Instagram size={23} className="block md:hidden" />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative md:mt-34 flex justify-center w-full md:w-[inherit] lg:mr-[20px]">
          <div
            className="w-[70px] h-[70px] md:w-[120px] md:h-[120px] rounded-full bg-green-custom absolute right-[20px] top-[-30px] md:right-[-50px] md:top-[-50px] z-10 opacity-40"
            style={circleStyle}
          />
          <div
            className="w-[70px] h-[70px] md:w-[120px] md:h-[120px]  bg-green-custom absolute left-[20px] top-[120px] md:left-[-50px] md:top-[200px] z-10 opacity-40"
            style={blockStyle}
          />
          <div
            className="w-[75%] h-[240px]  md:w-[380px] md:h-[400px] bg-hero-color flex justify-center items-center rounded-2xl"
            style={boxStyle}
          />
          <img
            src={imgHero}
            alt="face"
            className="absolute w-[240px] md:w-full bottom-0 pointer-events-none z-20 mask-blur-edge"
          />
        </div>
      </main>
    </section>
  );
}
