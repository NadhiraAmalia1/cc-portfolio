"use client";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { useScrollStore } from "@/store/scrollStore";

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const burgerRef = useRef<HTMLDivElement>(null);

  const setLastSection = useScrollStore((state) => state.setLastSection);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledPastHero(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <div className="flex justify-center sm:justify-center relative z-[9999]">
      <nav
        className="
          nav-animated flex items-center
          rounded-[40px] rounded-tl-none rounded-br-none
          shadow-[3px_3px_20px_#e1b865]
          px-5 py-3 relative
          bg-white
          ml-0 scale-90
          lg:ml-[200px] lg:scale-100
          sm:ml-0 sm:scale-90
          max-sm:ml-auto max-sm:mr-1
          max-sm:px-1 max-sm:py-1
        "
      >
        {/* Desktop & Medium Navigation */}
        <div className={`${isScrolledPastHero ? "hidden" : "hidden sm:flex"} items-center`}>
          <ul className="flex space-x-0.5">
            {navLinks.map(({ label, id }) => (
              <li key={id}>
                <motion.a
                  href={`#${id}`}
                  onClick={() => setLastSection(id)}
                  whileHover={{
                    scale: 1.08,
                    rotate: [0, -3, 3, -3, 2, 0],
                  }}
                  animate={{ rotate: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  className="text-[#0F1C3F] hover:text-white text-lg font-semibold font-[Huninn] tracking-wide opacity-90 px-6 block cursor-pointer"
                >
                  {label}
                </motion.a>
              </li>
            ))}
          </ul>

          {/* More Button */}
          <div className="relative ml-4">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{
                scale: 0.94,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center text-[#0F1C3F] font-[Huninn] text-xl cursor-pointer transition duration-300"
            >
              More
              <i className={`fas ${isDropdownOpen ? "fa-angle-up" : "fa-angle-down"} ml-2`}></i>
            </motion.button>

            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute top-[200%] -left-36 md:-left-10 -translate-x-1/2 bg-[#f3e4cf] shadow-xl rounded-2xl p-5 grid grid-cols-2 gap-6 w-[480px] z-[9999]"
              >
                {[
                  {
                    title: "Portfolio",
                    desc: "See my recent works",
                    img: "/assets/portfolio-preview.jpg",
                    id: "portfolio",
                  },
                  {
                    title: "Testimonial",
                    desc: "What people say about me",
                    img: "/images/testimonial-preview.jpg",
                    id: "testimonial",
                  },
                ].map(({ title, desc, img, id }) => (
                  <a
                    href={`#${id}`}
                    onClick={() => setLastSection(id)}
                    key={title}
                    className="relative group w-full h-36 rounded-xl overflow-hidden cursor-pointer"
                  >
                    <div className="absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110">
                      <img src={img} alt={title} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/15 transition-all duration-500" />
                    <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
                      <h4 className="text-white font-semibold text-base mb-1">{title}</h4>
                      <p className="text-sm text-white/80">{desc}</p>
                    </div>
                  </a>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Burger Button - bisa klik semua area */}
      <div
        ref={burgerRef}
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        className={`${
          isScrolledPastHero ? "fixed" : "sm:hidden"
        } top-3 right-4 z-[9999] bg-[#f3e4cf] rounded-[40px] rounded-tl-none rounded-br-none px-5 py-2 flex items-center shadow-md cursor-pointer transition active:scale-95`}
      >
        <span className="text-[#0F1C3F] font-[Huninn] text-base font-semibold mr-3 select-none">
          Menu
        </span>
        <span className="text-[#0F1C3F] text-xl">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </span>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-[72px] right-4 bg-[#f3e4cf] rounded-[40px] rounded-tl-none rounded-br-none shadow-xl p-4 z-[9998]"
        >
          <div className="flex flex-col space-y-3">
            {[
              "Home",
              "About",
              "Skills",
              "Portfolio",
              "Experience",
              "Testimonial",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => {
                  setMobileMenuOpen(false);
                  setLastSection(item.toLowerCase());
                }}
                className="text-[#0F1C3F] text-base font-[Huninn] bg-white rounded-[30px] rounded-tl-none rounded-br-none px-4 py-2 hover:bg-[#e1b865]/20 transition cursor-pointer"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}