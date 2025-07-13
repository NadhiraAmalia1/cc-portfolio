"use client";

import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "@/components/HeroSection/Navbar";

export default function HeroSection() {
  return (
    <main>
      <section
        id="hero"
        className="relative min-h-screen bg-cover bg-center px-4 sm:px-6 py-10 overflow-hidden"
        style={{ backgroundImage: "url('/assets/hero-bg2.png')" }}
        aria-label="Hero Section"
      >
        {/* Orbit Atas & Blink Stars */}
        <div className="absolute inset-0 pointer-events-none overflow-visible z-0">
          <div className="absolute -top-[140px] -left-[190px] h-[340px]">
            <img src="/assets/circlestar.png" alt="Decorative orbit ring" className="h-full w-full" />

            <div className="absolute top-[150px] left-[200px] w-0 h-0 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute orbit-oval-up">
                <div className="spin-star h-12 w-12">
                  <img src="/assets/star2.png" alt="Orbiting star animation" className="drop-shadow-[0_0_10px_white]" />
                </div>
              </div>
            </div>

            <div className="absolute top-[180px] left-[190px]">
              <div className="absolute orbit-oval-up-1">
                <div className="spin-star h-10 w-10">
                  <img src="/assets/star2.png" alt="Orbiting star animation" className="drop-shadow-[0_0_10px_white]" />
                </div>
              </div>
            </div>
          </div>

          {[3, 4, 5].map((i) => {
            const positions = [
              "bottom-[40px] left-[30px]",
              "bottom-[8px] left-[60px]",
              "bottom-[45px] left-[120px]",
              "top-[8px] right-[10px]",
              "-top-[20px] right-[40px]",
              "top-[8px] right-[95px]",
            ];
            const delay = i * 300;
            return (
              <img
                key={i}
                src="/assets/blink.png"
                alt="Twinkling star"
                className={`h-[120px] absolute blink-twinkle ${positions[i]}`}
                style={{ animationDelay: `${delay}ms` }}
              />
            );
          })}
        </div>

        {/* Orbit Bawah */}
        <div className="absolute inset-0 pointer-events-none overflow-visible z-0 hidden sm:block">
          <div className="absolute -bottom-[100px] -right-[250px] h-[350px]">
            <img src="/assets/circlestar.png" alt="Decorative orbit ring" className="h-full w-full" />
          </div>

          <div className="absolute bottom-0 right-0">
            <div className="absolute orbit-oval-bottom">
              <div className="spin-star h-12 w-12">
                <img src="/assets/star2.png" alt="Orbiting star animation" className="drop-shadow-[0_0_10px_white]" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0">
            <div className="absolute orbit-oval-bottom1">
              <div className="spin-star h-10 w-10">
                <img src="/assets/star2.png" alt="Orbiting star animation" className="drop-shadow-[0_0_10px_white]" />
              </div>
            </div>
          </div>

          {[0, 1, 2].map((i) => {
            const positions = [
              "bottom-[40px] left-[30px]",
              "bottom-[8px] left-[60px]",
              "bottom-[45px] left-[120px]",
            ];
            const delay = i * 300;
            return (
              <img
                key={i}
                src="/assets/blink.png"
                alt="Twinkling star"
                className={`h-[120px] absolute blink-twinkle ${positions[i]}`}
                style={{ animationDelay: `${delay}ms` }}
              />
            );
          })}
        </div>

        {/* Konten */}
        <div className="flex flex-col items-center relative z-10">
          <div className="mb-3 -mt-4 w-full max-w-7xl">
            <Navbar />
          </div>

          <motion.div
            className="flex flex-col md:flex-row items-center md:items-start justify-center max-w-7xl w-full gap-6 md:gap-12 pt-4 md:pt-0 ipad-fix ipad-pro-fix fold-fix ipad-mini-fix nesthub-fix"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Avatar */}
            <div
              className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-80 bg-white shadow-lg mt-4 md:mt-10 shrink-0 hero-avatar"
              style={{ clipPath: "ellipse(50% 50% at 50% 50%)" }}
              aria-hidden="true"
            />

            {/* Teks */}
            <div className="flex flex-col items-center md:items-start text-white px-2 md:pl-10 mt-6 md:mt-10 text-center md:text-left max-w-xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-[magnolia] mb-4 text-[#0F1C3F] leading-tight text-center md:text-left">
  <div>Hello,</div>
  <div className="flex gap-1 mt-1 justify-center md:justify-start">
    <span>I’m&nbsp;</span>
    {"Nadhira".split("").map((char, i) => (
      <motion.span
        key={i}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: [0, 180, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 4,
          delay: i * 0.15,
        }}
        className="inline-block"
      >
        {char}
      </motion.span>
    ))}
  </div>
</h1>
              <h2 className="sr-only">Front-End Developer Portfolio</h2>
              <p className="text-base sm:text-lg md:text-xl mb-1">
                I’m a Fullstack Developer passionate about
              </p>
              <p className="text-base sm:text-lg md:text-xl mb-1">
                design, interaction, and building with purpose
              </p>
              <p className="text-base sm:text-lg md:text-xl mb-1">
                crafting thoughtful user experiences through
              </p>
              <p className="text-base sm:text-lg md:text-xl mb-6">
                clean code and creative vision.
              </p>

              {/* Tombol */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a
                  href="#about"
                  className="rounded-[40px] rounded-tl-none rounded-br-none font-[Huninn]
                  text-sm md:text-base lg:text-lg text-[#0F1C3F] bg-[#a7dbda]
                  border-4 border-[#88c6c3]
                  hover:shadow-[3px_3px_20px_#88c6c3]
                  px-4 py-1.5 md:px-5 md:py-2 lg:px-6 lg:py-2.5"
                >
                  More About Me
                </a>
                <a
                  href="#portfolio"
                  className="rounded-[40px] rounded-tr-none rounded-bl-none font-[Huninn]
                  text-sm md:text-base lg:text-lg text-[#0F1C3F] bg-[#a7dbda]
                  border-4 border-[#88c6c3]
                  hover:shadow-[3px_3px_20px_#88c6c3]
                  px-6 py-1.5 md:px-5 md:py-2 lg:px-6 lg:py-2.5"
                >
                  View Projects
                </a>
              </div>

              {/* Sosmed */}
              <div className="flex justify-center md:justify-start items-center gap-6 text-[#0F1C3F] text-3xl sm:text-[34px] mt-6 social-icons">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram className="hover:scale-125 transition-all duration-300" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="hover:scale-125 transition-all duration-300" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter className="hover:scale-125 transition-all duration-300" />
                </a>
                <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <FaWhatsapp className="hover:scale-125 transition-all duration-300" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}