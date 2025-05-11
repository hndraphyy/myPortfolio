import html from "../assets/svg/html.svg";
import css from "../assets/svg/css.svg";
import js from "../assets/svg/js.svg";
import react from "../assets/svg/react.svg";
import sass from "../assets/svg/sass.svg";
import tailwindcss from "../assets/svg/tailwindcss.svg";

export default function About() {
  return (
    <section className="pt-10 pb-5 md:pb-35" id="about">
      <div>
        <div className="relative">
          <h1 className="text-[30px] md:text-5xl text-white font-medium pb-5 md:pb-10">
            About Me
          </h1>
          <div className="w-290 h-[2px] bg-green-custom absolute left-38 md:left-63 top-[25px] md:top-[28px]"></div>
        </div>
        <p className="text-[16px] md:text-[20px] text-gray-400">
          Hi! I’m Hendra Aditya Pratama, a Frontend Developer who loves creating
          clean and modern websites. I work with HTML, CSS, JavaScript, React,
          and Tailwind CSS — focusing on building simple, fast, and visually
          appealing landing pages. I’ve worked on several personal and small
          freelance projects, and now I’m ready to help you build a standout and
          unique website. My goal is simple: to help clients establish a stylish
          and functional online presence.
        </p>
        <p className="text-[16px] md:text-[20px] text-gray-400 pt-5">
          Here are a few technologies I’ve been working with recently:
        </p>
        <div className="flex justify-start gap-10 md:gap-25 pt-2">
          <ul className="text-[16px] md:text-[20px] text-gray-400">
            <li>
              <span className="text-green-custom pr-3">-</span> Html
            </li>
            <li>
              <span className="text-green-custom pr-3">-</span>CSS
            </li>
            <li>
              <span className="text-green-custom pr-3">-</span>JavaScript
            </li>
            <li>
              <span className="text-green-custom pr-3">-</span>React JS
            </li>
          </ul>
          <ul className="text-[18px] md:text-[20px] text-gray-400">
            {/* <li><span className="text-green-custom pr-3">-</span>React Native</li> */}
            <li>
              <span className="text-green-custom pr-3">-</span>Sass
            </li>
            <li>
              <span className="text-green-custom pr-3">-</span>TailwindCSS
            </li>
            <li>
              <span className="text-green-custom pr-3">-</span>Laravel
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
