import { Github, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-footer-custom  text-white pt-10 md:pt-20 pb-20 md:pb-10 text-kanit">
      <div className="flex justify-between w-full max-w-[1440px] mx-auto px-3 sm:px-[100px] lg:px-[45px] xl:px-[150px]">
        <div className="flex flex-col gap-2">
          <a className="text-[18px] md:text-3xl font-medium">hendraaditya</a>
          <p className="text-gray-400 font-light text-[14px] md:text-[20px]">
            Interested in collaborating? <br className="block lg:hidden" /> Feel
            free to email
            <a
              href="mailto:hendraaditya1913@gmail.com"
              className="pl-1 underline"
            >
              hendraaditya1913@gmail.com
            </a>
          </p>
          <div className="flex gap-4 md:gap-5 pt-2">
            <a
              href="https://www.instagram.com/hndradityaa?igsh=bWFnNG91ZzF5ODNn"
              target="_blank"
              className="flex items-center gap-2 hover:underline"
            >
              <Instagram className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
            </a>
            <a
              href="https://wa.link/8qxinn"
              target="_blank"
              className="flex items-center gap-2 hover:underline"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
            </a>
            <a
              href="https://github.com/HendraKae"
              target="_blank"
              className="flex items-center gap-2 hover:underline"
            >
              <Github className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
            </a>
          </div>

          <p className="text-gray-400 font-light text-[14px] md:text-[18px] pt-10">
            &copy; 2025 hendraaditya. All rights reserved.
          </p>
        </div>
        <div className="relative">
          <div className="w-[70px] h-[70px] md:w-[70px] md:h-[70px] rounded-full bg-green-custom absolute right-[-30px] top-[30px] md:right-[-170px] md:top-[-50px] z-10 opacity-30" />
          <div className="hidden md:block w-[70px] h-[70px] md:w-[150px] md:h-[150px] rounded-full bg-green-custom absolute right-[20px] top-[-30px] md:right-[-80px] md:top-[-50px] z-10 opacity-40" />
          <div className="w-[50px] h-[50px] md:w-[30px] md:h-[30px]  bg-green-custom absolute bottom-[-10px] z-10 opacity-26 rotate-80 backdrop-blur-lg" />
          <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]  bg-green-custom absolute bottom-7 right-10 md:bottom-7 md:right-20 z-10 opacity-30 rotate-50" />
        </div>
      </div>
    </footer>
  );
}
