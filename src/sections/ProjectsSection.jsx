import { useState, useEffect, useRef } from "react";

import Project1 from "../assets/images/project1.png";
import Project2 from "../assets/images/project2.png";
import UrlIcon from "../assets/svg/urlicon.svg";
import ProjectMobile1 from "../assets/images/projectMobile.png";
import ProjectMobile2 from "../assets/images/projectMobile2.png";
import Book from "../assets/svg/book.svg";
import Project3 from "../assets/images/project3.png";

export default function Projects() {
  return (
    <section className="pt-10 md:pt-0 pb-10 md:pb-35" id="projects">
      <div className="relative flex justify-center items-center">
        <h1 className="text-[30px] md:text-5xl text-center text-white font-medium pb-5 md:pb-10">
          Projects
        </h1>
        <div className="w-[2px] h-10 md:h-15 bg-green-custom absolute top-14 md:top-17"></div>
        <div className="w-2 md:w-3 h-2 md:h-3 bg-green-custom absolute top-26 md:top-35 rounded-full"></div>
      </div>
      {/* dekstop */}
      <div className=" hidden md:flex flex-col items-center pt-37 gap-30">
        <div className="flex flex-col md:flex-row items-center  gap-10">
          <div className="md:w-1/2 flex  flex-col gap-y-3">
            <h1 className="text-4xl font-medium">Foral</h1>
            <div className="flex items-center gap-2 ">
              <span className="px-5 font-light py-1 text-[17px] bg-gray-700 rounded-2xl">
                React JS
              </span>
              <span className="px-5 font-light py-1 text-[17px] bg-gray-700 rounded-2xl">
                TailwindCSS
              </span>
            </div>
            <p className="font-light mt-2 text-[18px] text-gray-400">
              Foral is a responsive landing page designed to showcase a
              photographer's portfolio. Built with React, Vite, and TailwindCSS,
              the project focuses on elegant visual design, a modern layout, and
              a clean, professional user experience.
            </p>
            <div className="flex pt-3 gap-4">
              <a
                href="https://forallandingpage.netlify.app/"
                className="bg-green-custom  px-7 py-3 text-center"
                target="_blank"
              >
                Visit Website
              </a>
              {/* <a
                href="#"
                className="bg-transparent border-green-700 border-1  px-7 py-3 text-center"
                target="_blank"
              >
                Case Study
              </a> */}
            </div>
          </div>
          <img
            src={Project1}
            alt="Project Foral"
            className="md:w-1/2 object-cover"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-center gap-10">
          <img
            src={Project2}
            alt="Project Foral"
            className="md:w-1/2 object-cover"
          />
          <div className="md:w-1/2 flex  flex-col gap-y-3">
            <h1 className="text-4xl font-medium">EasyCashier</h1>
            <div className="flex items-center gap-2 ">
              <span className="px-5 font-light py-1 text-[17px] bg-gray-700 rounded-2xl">
                Laravel
              </span>
              <span className="px-5 font-light py-1 text-[17px] bg-gray-700 rounded-2xl">
                Sass
              </span>
              <span className="px-5 font-light py-1 text-[17px] bg-gray-700 rounded-2xl">
                Bootstrap
              </span>
            </div>
            <p className="font-light mt-2 text-[18px] text-gray-400">
              EasyCashier is a Point of Sale (POS) system built for desktop
              applications using Laravel, Electron, SQL, and DataTables. I
              handled the frontend, developing the interface with Laravel Blade,
              Sass, and Bootstrap, featuring product management and professional
              invoice printing.
            </p>
            <div className="flex pt-3 gap-4">
              {/* <a
                href="https://forallandingpage.netlify.app/"
                className="bg-green-custom  px-7 py-3 text-center"
                target="_blank"
              >
                Visit Website
              </a> */}
              {/* <a
                href="#"
                className="bg-transparent border-green-700 border-1  px-7 py-3 text-center"
                target="_blank"
              >
                Case Study
              </a> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center  gap-10">
          <div className="md:w-1/2 flex  flex-col gap-y-3">
            <h1 className="text-4xl font-medium">Klinin Laundry</h1>
            <div className="flex items-center gap-2 ">
              <span className="px-5 font-light py-1 text-[17px] bg-gray-700 rounded-2xl">
                React JS
              </span>
              <span className="px-5 font-light py-1 text-[17px] bg-gray-700 rounded-2xl">
                TailwindCSS
              </span>
            </div>
            <p className="font-light mt-2 text-[18px] text-gray-400">
              Klinin Laundry adalah halaman landing responsif yang dirancang
              untuk menampilkan layanan laundry profesional. Dibangun
              menggunakan React, Vite, dan TailwindCSS, proyek ini menekankan
              desain yang bersih, tata letak modern, dan pengalaman pengguna
              yang nyaman, mencerminkan keandalan dan kemudahan dari penyedia
              layanan laundry terpercaya.
            </p>
            <div className="flex pt-3 gap-4">
              <a
                href="https://klinin-website.vercel.app/"
                className="bg-green-custom  px-7 py-3 text-center"
                target="_blank"
              >
                Visit Website
              </a>
              {/* <a
                href="#"
                className="bg-transparent border-green-700 border-1  px-7 py-3 text-center"
                target="_blank"
              >
                Case Study
              </a> */}
            </div>
          </div>
          <img
            src={Project3}
            alt="Project Foral"
            className="md:w-1/2 object-cover"
          />
        </div>
      </div>
      {/* mobile */}
      <div className="flex md:hidden flex-col items-center pt-3 gap-4">
        <div className=" flex md:hidden flex-col items-center pt-20 gap-30">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-7">
            <img
              src={Project1}
              alt="Project Foral"
              className="md:w-1/2 object-cover"
            />
            <div className="md:w-1/2 flex  flex-col gap-y-2 md:">
              <h1 className="text-[25px] font-medium">Foral</h1>
              <div className="flex items-center gap-2 ">
                <span className="px-4 font-light py-1 text-[14px] bg-gray-700 rounded-2xl">
                  React JS
                </span>
                <span className="px-4 font-light py-1 text-[14px] bg-gray-700 rounded-2xl">
                  TailwindCSS
                </span>
              </div>
              <p className="font-light mt-2 text-[16px] text-gray-400">
                Foral is a responsive landing page designed to showcase a
                photographer's portfolio. Built with React, Vite, and
                TailwindCSS, the project focuses on elegant visual design, a
                modern layout, and a clean, professional user experience.
              </p>
              <div className="flex pt-3 gap-4">
                <a
                  href="https://forallandingpage.netlify.app/"
                  className="bg-green-custom  px-5 py-2 text-center text-[14px]"
                  target="_blank"
                >
                  Visit Website
                </a>
                {/* <a
                  href="#"
                  className="bg-transparent border-green-700 border-1 text-[14px] px-5 py-2 text-center"
                  target="_blank"
                >
                  Case Study
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className=" flex md:hidden flex-col items-center pt-15 gap-30">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-7">
            <img
              src={Project2}
              alt="Project Foral"
              className="md:w-1/2 object-cover"
            />
            <div className="md:w-1/2 flex  flex-col gap-y-2">
              <h1 className="text-[25px] font-medium">EasyCashier</h1>
              <div className="flex items-center gap-2 ">
                <span className="px-4 font-light py-1 text-[14px] bg-gray-700 rounded-2xl">
                  Laravel
                </span>
                <span className="px-4 font-light py-1 text-[14px] bg-gray-700 rounded-2xl">
                  Sass
                </span>
                <span className="px-4 font-light py-1 text-[14px] bg-gray-700 rounded-2xl">
                  Bootstrap
                </span>
              </div>
              <p className="font-light mt-2 text-[16px] text-gray-400">
                EasyCashier is a Point of Sale (POS) system built for desktop
                applications using Laravel, Electron, SQL, and DataTables. I
                handled the frontend, developing the interface with Laravel
                Blade, Sass, and Bootstrap, featuring product management and
                professional invoice printing.
              </p>
              <div className="flex pt-3 gap-4">
                {/* <a
                  href="https://forallandingpage.netlify.app/"
                  className="bg-green-custom  px-5 py-2 text-center text-[14px]"
                  target="_blank"
                >
                  Visit Website
                </a> */}
                {/* <a
                  href="#"
                  className="bg-transparent border-green-700 border-1 text-[14px] px-5 py-2 text-center"
                  target="_blank"
                >
                  Case Study
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className=" flex md:hidden flex-col items-center pt-20 gap-30">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-7">
            <img
              src={Project3}
              alt="Project Foral"
              className="md:w-1/2 object-cover"
            />
            <div className="md:w-1/2 flex  flex-col gap-y-2 md:">
              <h1 className="text-[25px] font-medium">Klinin Laundry</h1>
              <div className="flex items-center gap-2 ">
                <span className="px-4 font-light py-1 text-[14px] bg-gray-700 rounded-2xl">
                  React JS
                </span>
                <span className="px-4 font-light py-1 text-[14px] bg-gray-700 rounded-2xl">
                  TailwindCSS
                </span>
              </div>
              <p className="font-light mt-2 text-[16px] text-gray-400">
                Klinin Laundry adalah halaman landing responsif yang dirancang
                untuk menampilkan layanan laundry profesional. Dibangun
                menggunakan React, Vite, dan TailwindCSS, proyek ini menekankan
                desain yang bersih, tata letak modern, dan pengalaman pengguna
                yang nyaman, mencerminkan keandalan dan kemudahan dari penyedia
                layanan laundry terpercaya.
              </p>
              <div className="flex pt-3 gap-4">
                <a
                  href="https://klinin-website.vercel.app/"
                  className="bg-green-custom  px-5 py-2 text-center text-[14px]"
                  target="_blank"
                >
                  Visit Website
                </a>
                {/* <a
                  href="#"
                  className="bg-transparent border-green-700 border-1 text-[14px] px-5 py-2 text-center"
                  target="_blank"
                >
                  Case Study
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
