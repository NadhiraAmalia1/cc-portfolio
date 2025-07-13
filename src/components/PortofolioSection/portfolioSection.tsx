"use client";

import React, { useEffect, useState } from "react";
import { SectionHeading } from "../SectionHeading";
import PortfolioCard from "./portfolio-card";
import ProjectModal from "./project-modal";
import { fetchProjects } from "@/data/fetchProjects";
import { Project } from "@/types/project";

export default function PortfolioSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
      }
    };

    getData();
  }, []);

  console.log("Projects State:", projects);
  return (
    <section
      id="portfolio"
      className="py-32 scroll-mt-20 bg-gradient-to-bl from-[#f6a691] via-white to-[#90d3d1]"
    >
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading background="Portfolio" title="My Projects" />

        {projects.length === 0 ? (
          <p className="text-center text-gray-600 mt-12">No projects found.</p>
        ) : (
          <div className="space-y-16">
            {projects.map((project, i) => (
              <PortfolioCard
                key={project.title}
                project={project}
                isReversed={i % 2 === 1}
                onSeeProject={() => setActiveProject(project)}
              />
            ))}
          </div>
        )}
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}