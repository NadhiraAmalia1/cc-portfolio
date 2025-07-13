"use client";

import React from "react";
import { icons } from "./SkillData";
import { motion } from "framer-motion";

interface Props {
  active: string;
  setActive: (key: string) => void;
}

export default function SpinningIconCircle({ active, setActive }: Props) {
  return (
    <div className="relative w-full max-w-[320px] aspect-square mx-auto md:mx-0 flex items-center justify-center">
      {/* 🎈 Dekorasi lingkaran tumpuk (kanan belakang) */}
      <div className="absolute w-[150px] h-[150px] rounded-full bg-blue-200 top-[20%] left-[75%] -z-10 blur-sm opacity-60" />
      <div className="absolute w-[100px] h-[100px] rounded-full bg-yellow-200 top-[45%] left-[70%] -z-10 blur-sm opacity-50" />

      {/* 🌈 Lingkaran utama gradient */}
      <motion.div
        className="absolute w-[80%] aspect-square rounded-full bg-gradient-to-br from-[#90d3d1] via-[#b2efed] to-[#90d3d1] border-4 border-white z-0 shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* 🔄 Ikon-ikon berputar */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1, rotate: 360 }}
        transition={{
          opacity: { duration: 0.8 },
          scale: { duration: 0.8 },
          rotate: { repeat: Infinity, duration: 20, ease: "linear" },
        }}
      >
        {icons.map((item, index) => {
          const angle = (index / icons.length) * 2 * Math.PI;
          const radius = 40; // posisi melingkar dari pusat
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <button
              key={item.key}
              onClick={() => setActive(item.key)}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                active === item.key ? "scale-125 z-30" : "opacity-70"
              }`}
              style={{
                left: `calc(50% + ${x}%)`,
                top: `calc(50% + ${y}%)`,
              }}
            >
              <div
                className={`rounded-full p-3 sm:p-4 shadow-xl text-white hover:scale-110 transition ${item.color}`}
              >
                {item.icon}
              </div>
            </button>
          );
        })}
      </motion.div>

      {/* 🎯 Lingkaran tengah */}
      <div className="absolute top-1/2 left-1/2 w-[30%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full bg-white border-4 border-gray-200 shadow-inner flex items-center justify-center z-30">
        <span className="text-gray-800 text-sm">Click Icons</span>
      </div>
    </div>
  );
}