"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { JSX } from "react";

interface SkillCardProps {
  index: number;
  name: string;
  icon: JSX.Element;
  percent: number;
  description: string;
}

export default function SkillCard({
  index,
  name,
  icon,
  percent,
  description,
}: SkillCardProps) {
  const [currentPercent, setCurrentPercent] = useState(0);
  const [startBarAnimation, setStartBarAnimation] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startBarAnimation) return;

    let start = 0;
    const duration = percent * 30;
    const stepTime = duration / percent;

    const step = () => {
      start += 1;
      setCurrentPercent(start);
      if (barRef.current) {
        barRef.current.style.width = `${start}%`;
      }
      if (start < percent) {
        setTimeout(step, stepTime);
      }
    };

    step();
  }, [startBarAnimation]);

  return (
    <motion.div
      className="group [perspective:1000px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.3, // 🧠 delay masuk berdasarkan urutan
      }}
      viewport={{ once: true }}
      onAnimationComplete={() => setStartBarAnimation(true)} // ✅ trigger bar/percent
    >
      <div className="relative bg-white rounded-xl shadow-md p-4 text-center transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* FRONT */}
        <div className="[backface-visibility:hidden] transition">
          <div className="flex justify-center mb-2 text-2xl text-[#f6a691]">
            {icon}
          </div>
          <div className="text-lg font-semibold">{name}</div>
          <div className="text-sm text-gray-500 mb-1">{currentPercent}%</div>
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              ref={barRef}
              className="h-full bg-[#f6a691] rounded-full"
              style={{ width: "0%" }}
            />
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 bg-white/90 rounded-xl shadow-md p-4 flex items-center justify-center text-sm text-gray-700 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="text-center">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
