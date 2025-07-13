"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { SectionHeading } from "../SectionHeading";

const experienceCards = [
  {
    title: "Web Development Bootcamp",
    label: "FULLSTACK TRAINING",
    timeline: "2025 – Present",
    details:
      "Completed an intensive bootcamp focusing on React, Next.js, Tailwind CSS, REST API, and CMS integration. Built multiple full-stack projects and improved best practices for responsive and accessible web applications.",
    color: "bg-gradient-to-tr from-[#f6a691] via-[#fbbbac] to-[#f4cc8d]",
    rounded: "rounded-[80px] rounded-tr-none rounded-bl-none",
  },
  {
    title: "Freelance Font Designer",
    label: "CREATIVE DESIGN",
    timeline: "2022 – 2023",
    details:
      "Designed a custom handwritten font using Illustrator and FontForge. The font was used for branding materials, combining aesthetic appeal and readability.",
    color: "bg-gradient-to-br from-[#f4cc8d] via-[#fbbbac] to-[#f6a691]",
    rounded: "rounded-[80px] rounded-tl-none rounded-br-none",
  },
  {
    title: "Private Tutor & Mentor",
    label: "TEACHING & GUIDANCE",
    timeline: "2020 – 2021",
    details:
      "Guided elementary school students in basic math. Focused on patience, creativity, and clear communication.",
    color: "bg-gradient-to-br from-[#f6a691] via-[#fbbbac] to-[#f4cc8d]",
    rounded: "rounded-[80px] rounded-tl-none rounded-br-none",
  },
  {
    title: "Poster Design & UI/UX Events",
    label: "PROJECTS & COMPETITIONS",
    timeline: "2018 – 2019",
    details:
      "Created posters for school events and joined UI/UX design competitions. Although not always winning, gained valuable experience in ideation, teamwork, and presenting design thinking.",
    color: "bg-gradient-to-tr from-[#f4cc8d] via-[#fbbbac] to-[#f6a691]",
    rounded: "rounded-[80px] rounded-tr-none rounded-bl-none",
  },
];

// Fixed version of peekMap
const peekMap: { [key: number]: string } = {
  0: "translate-x-[-8%] translate-y-[8%]",
  1: "translate-x-[8%] translate-y-[8%]",
  2: "translate-x-[-8%] translate-y-[-8%]",
  3: "translate-x-[8%] translate-y-[-8%]",
};

export default function ExperienceSection() {
  const [openCard, setOpenCard] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="relative min-h-screen overflow-hidden bg-[#90d3d1] text-gray-600 flex items-center justify-center px-4 sm:px-6 py-16 sm:py-24"
    >
      {/* Twinkling Stars */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SectionHeading background="Experience" title="Things I’ve Worked On" />
        </motion.div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6 mb-6">
          {experienceCards.slice(0, 2).map((card, index) => {
            const cardIndex = index;
            const isOpen = openCard === cardIndex;
            const peekClass = peekMap[cardIndex];

            return (
              <div
                key={cardIndex}
                onClick={() => setOpenCard(isOpen ? null : cardIndex)}
                className="relative h-44 sm:h-48 md:h-52 lg:h-56 cursor-pointer"
              >
                {/* BACK */}
                <motion.div
                  key={`back-${cardIndex}`}
                  animate={
                    isOpen
                      ? { y: [120, -20, 0], scale: [0.92, 1.02, 1], zIndex: 20 }
                      : { y: [-120, 20, 0], scale: [1, 0.88, 0.92], zIndex: 0 }
                  }
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  className={clsx(
                    "absolute inset-0 px-4 py-3 flex flex-col justify-center items-center text-center bg-white text-gray-800 shadow-xl",
                    card.rounded,
                    !isOpen && `opacity-60 ${peekClass}`
                  )}
                >
                  <h4 className="text-lg font-semibold">{card.label}</h4>
                  <p className="text-xs italic text-gray-400 mb-1">{card.timeline}</p>
                  <p className="text-sm leading-relaxed">{card.details}</p>
                </motion.div>

                {/* FRONT */}
                <motion.div
                  key={`front-${cardIndex}`}
                  animate={
                    isOpen
                      ? { y: [-120, 20, 0], scale: [1, 0.88, 0.92], zIndex: 0 }
                      : { y: [120, -20, 0], scale: [0.92, 1.02, 1], zIndex: 20 }
                  }
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  className={clsx(
                    "absolute inset-0 px-4 py-3 flex flex-col justify-center items-center text-center text-white shadow-md",
                    card.color,
                    card.rounded,
                    isOpen && `opacity-60 ${peekClass}`
                  )}
                >
                  <p className="text-sm font-medium mb-2 opacity-90">{card.label}</p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">{card.title}</h2>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Center Circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-center mb-6"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="w-28 h-28 border-2 border-dashed border-gray-500 rounded-full flex items-center justify-center bg-white shadow-sm"
          >
            <span className="text-gray-500 text-sm font-medium">3+ Years</span>
          </motion.div>
        </motion.div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6">
          {experienceCards.slice(2, 4).map((card, index) => {
            const cardIndex = index + 2;
            const isOpen = openCard === cardIndex;
            const peekClass = peekMap[cardIndex];

            return (
              <div
                key={cardIndex}
                onClick={() => setOpenCard(isOpen ? null : cardIndex)}
                className="relative h-44 sm:h-48 md:h-52 lg:h-56 cursor-pointer"
              >
                {/* BACK */}
                <motion.div
                  key={`back-${cardIndex}`}
                  animate={
                    isOpen
                      ? { y: [120, -20, 0], scale: [0.92, 1.02, 1], zIndex: 20 }
                      : { y: [-120, 20, 0], scale: [1, 0.88, 0.92], zIndex: 0 }
                  }
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  className={clsx(
                    "absolute inset-0 px-4 py-3 flex flex-col justify-center items-center text-center bg-white text-gray-800 shadow-xl",
                    card.rounded,
                    !isOpen && `opacity-60 ${peekClass}`
                  )}
                >
                  <h4 className="text-lg font-semibold">{card.label}</h4>
                  <p className="text-xs italic text-gray-400 mb-1">{card.timeline}</p>
                  <p className="text-sm leading-relaxed">{card.details}</p>
                </motion.div>

                {/* FRONT */}
                <motion.div
                  key={`front-${cardIndex}`}
                  animate={
                    isOpen
                      ? { y: [-120, 20, 0], scale: [1, 0.88, 0.92], zIndex: 0 }
                      : { y: [120, -20, 0], scale: [0.92, 1.02, 1], zIndex: 20 }
                  }
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  className={clsx(
                    "absolute inset-0 px-4 py-3 flex flex-col justify-center items-center text-center text-white shadow-md",
                    card.color,
                    card.rounded,
                    isOpen && `opacity-60 ${peekClass}`
                  )}
                >
                  <p className="text-sm font-medium mb-2 opacity-90">{card.label}</p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">{card.title}</h2>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add twinkle animation */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.4);
          }
        }
        .animate-twinkle {
          animation: twinkle 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}