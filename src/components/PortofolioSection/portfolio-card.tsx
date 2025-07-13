"use client";

import React from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  imageUrl?: string;
  technologies: string[];
  description: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  projectUrl?: string;
}

interface Props {
  project: Project;
  isReversed?: boolean;
  onSeeProject: () => void;
}

const PortfolioCard: React.FC<Props> = ({
  project,
  isReversed = false,
  onSeeProject,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isReversed ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`flex flex-col md:flex-row ${
        isReversed ? "md:flex-row-reverse" : ""
      } gap-8 items-center bg-white p-6 rounded-[60px] rounded-tr-none rounded-bl-none shadow-md`}
    >
      {/* Gambar */}
      {project.imageUrl && (
        <div className="w-full md:w-1/2 h-60 overflow-hidden rounded-xl">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
          />
        </div>
      )}

      {/* Konten */}
      <div className="md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold text-[#0F1C3F]">{project.title}</h3>
        <p className="text-[15px] text-gray-600">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs bg-amber-100 text-[#0F1C3F] px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          onClick={onSeeProject}
          aria-label={`See details of ${project.title}`}
          className="mt-2 bg-[#9fdedc] text-white text-md px-4 py-2 rounded-md hover:bg-[#7ed4d1] transition-colors"
        >
          See Project
        </button>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;