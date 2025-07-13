"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectData {
  title: string;
  imageUrl?: string;
  technologies: string[];
  situation: string;
  task: string;
  action: string;
  result: string;
  projectUrl?: string;
}

interface ProjectModalProps {
  project: ProjectData;
  onClose: () => void;
}

const backdropVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariant = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.2 } },
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // 🔐 Escape key close support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown); // cleanup
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
        variants={backdropVariant}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-xl p-6 max-w-2xl w-full relative shadow-xl"
          variants={modalVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()} // 🛡️ cegah klik dalam modal nutupin
        >
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
          >
            &times;
          </button>

          <h2 className="text-2xl font-bold mb-2 text-[#0F1C3F]">{project.title}</h2>

          {project.imageUrl && (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="rounded-lg mb-4 object-cover w-full h-48"
            />
          )}

          <div className="mb-4 flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs bg-amber-100 text-[#0F1C3F] px-2 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Situation:</strong> {project.situation}</p>
            <p><strong>Task:</strong> {project.task}</p>
            <p><strong>Action:</strong> {project.action}</p>
            <p><strong>Result:</strong> {project.result}</p>
          </div>

          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-[#9fdedc] text-white px-4 py-2 rounded-md hover:bg-[#7ed4d1] transition-colors"
            >
              Visit Project
            </a>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;