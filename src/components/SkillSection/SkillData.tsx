import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaCloud,
  FaCode, // ← pengganti untuk VS Code
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiLinux,
  SiPostman,
  SiJirasoftware,
} from "react-icons/si";
import type { JSX } from "react";

export interface Skill {
  name: string;
  icon: JSX.Element;
  percent: number;
  description: string;
}

export const skillsData: Record<string, Skill[]> = {
  frontend: [
    { name: "HTML", icon: <FaHtml5 size={32} />, percent: 88, description: "Markup language for web pages" },
    { name: "CSS", icon: <FaCss3Alt size={32} />, percent: 85, description: "Styling and layout techniques" },
    { name: "JavaScript", icon: <FaJs size={32} />, percent: 80, description: "Adds interactivity and dynamic behavior" },
    { name: "React", icon: <FaReact size={32} />, percent: 75, description: "Component-based JS library for UI" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={32} />, percent: 70, description: "Utility-first CSS framework" },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs size={32} />, percent: 85, description: "JavaScript runtime for server-side logic" },
    { name: "Express", icon: <SiExpress size={32} />, percent: 80, description: "Web framework for Node.js" },
    { name: "REST API", icon: <FaNodeJs size={32} />, percent: 78, description: "Designing and consuming RESTful services" },
    { name: "MongoDB", icon: <SiMongodb size={32} />, percent: 55, description: "NoSQL database for scalable apps" },
  ],
  devops: [
    { name: "Docker", icon: <FaDocker size={32} />, percent: 70, description: "Containerization for consistent environments" },
    { name: "CI/CD", icon: <FaCloud size={32} />, percent: 65, description: "Automated build and deployment pipelines" },
    { name: "Linux", icon: <SiLinux size={32} />, percent: 75, description: "Using Linux for server management" },
    { name: "AWS", icon: <FaCloud size={32} />, percent: 60, description: "Cloud infrastructure and services" },
  ],
  tools: [
    { name: "Git", icon: <FaGitAlt size={32} />, percent: 85, description: "Version control system" },
    { name: "VS Code", icon: <FaCode size={32} />, percent: 90, description: "Code editor of choice" },
    { name: "Postman", icon: <SiPostman size={32} />, percent: 60, description: "API testing tool" },
    { name: "Jira", icon: <SiJirasoftware size={32} />, percent: 70, description: "Project management and issue tracking" },
  ],
};

export const icons = [
  { key: "frontend", icon: <FaHtml5 size={24} />, label: "Frontend", color: "bg-[#192b5b]" },
  { key: "backend", icon: <FaNodeJs size={24} />, label: "Backend", color: "bg-[#f6a691]" },
  { key: "devops", icon: <FaCloud size={24} />, label: "DevOps", color: "bg-[#192b5b]" },
  { key: "tools", icon: <FaDatabase size={24} />, label: "Tools", color: "bg-[#f6a691]" },
];
