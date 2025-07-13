"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillsData } from "./SkillData";
import SkillCard from "./SkillCard";
import SpinningIconCircle from "./SpinningIconCircle";
import { SectionHeading } from "../SectionHeading";

export default function SkillSection() {
  const [active, setActive] = useState("frontend");

  return (
    <section
      id="skills"
      className="w-full py-20 px-4 bg-gradient-to-br from-[#90d3d1] via-white to-[#f6a691]"
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <SectionHeading background="Skills" title="Powered By" />
      </motion.div>

      {/* Content Grid */}
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-12 max-w-7xl mx-auto">
        {/* Skill Cards */}
        <div className="w-full max-w-[700px]">
          <motion.h2
            key={active}
            className="text-3xl font-bold mb-6 capitalize text-[#0F1C3F] text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
              duration: 0.8,
            }}
          >
            {active} Skills
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skillsData[active].map((skill, index) => (
              <SkillCard
                key={skill.name}
                index={index}
                name={skill.name}
                icon={skill.icon}
                percent={skill.percent}
                description={skill.description}
              />
            ))}
          </div>
        </div>

        {/* Spinning Icon Circle */}
        <SpinningIconCircle active={active} setActive={setActive} />
      </div>
    </section>
  );
}