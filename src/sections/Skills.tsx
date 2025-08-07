"use client";
import React from "react";
import {
  FaReact, FaNodeJs, FaCodeBranch, FaCss3Alt, FaHtml5, FaGithub, FaGitAlt, FaCuttlefish,
} from "react-icons/fa";
import {
  SiNextdotjs, SiMongodb, SiPostgresql, SiRedux, SiTailwindcss, SiJavascript,
  SiTypescript, SiBootstrap, SiAntdesign, SiExpress,
} from "react-icons/si";

import { SectionHeader } from "@/components/SectionHeader";
import { Card as MuiCard, CardContent } from "@mui/material";

const skills = [
  { icon: <FaReact size={24} className="text-sky-500 dark:text-sky-300" />, title: "React.js", color: "text-sky-500 dark:text-sky-300" },
  { icon: <SiNextdotjs size={24} className="text-gray-900 dark:text-white" />, title: "Next.js", color: "text-gray-900 dark:text-white" },
  { icon: <FaNodeJs size={24} className="text-green-600 dark:text-green-400" />, title: "Node.js", color: "text-green-600 dark:text-green-400" },
  { icon: <SiMongodb size={24} className="text-green-500 dark:text-green-300" />, title: "MongoDB", color: "text-green-500 dark:text-green-300" },
  { icon: <SiExpress size={24} className="text-gray-800 dark:text-gray-300" />, title: "Express.js", color: "text-gray-800 dark:text-gray-300" },
  { icon: <SiPostgresql size={24} className="text-blue-700 dark:text-blue-400" />, title: "PostgreSQL", color: "text-blue-700 dark:text-blue-400" },
  { icon: <SiRedux size={24} className="text-purple-500 dark:text-purple-300" />, title: "Redux", color: "text-purple-500 dark:text-purple-300" },
  { icon: <SiTailwindcss size={24} className="text-cyan-500 dark:text-cyan-300" />, title: "Tailwind CSS", color: "text-cyan-500 dark:text-cyan-300" },
  { icon: <SiBootstrap size={24} className="text-indigo-600 dark:text-indigo-300" />, title: "Bootstrap", color: "text-indigo-600 dark:text-indigo-300" },
  { icon: <SiAntdesign size={24} className="text-red-500 dark:text-red-300" />, title: "Ant Design", color: "text-red-500 dark:text-red-300" },
  { icon: <FaCss3Alt size={24} className="text-blue-500 dark:text-blue-300" />, title: "CSS", color: "text-blue-500 dark:text-blue-300" },
  { icon: <FaHtml5 size={24} className="text-orange-500 dark:text-orange-300" />, title: "HTML", color: "text-orange-500 dark:text-orange-300" },
  { icon: <SiJavascript size={24} className="text-yellow-500 dark:text-yellow-300" />, title: "JavaScript", color: "text-yellow-500 dark:text-yellow-300" },
  { icon: <SiTypescript size={24} className="text-blue-600 dark:text-blue-400" />, title: "TypeScript", color: "text-blue-600 dark:text-blue-400" },
  { icon: <FaGitAlt size={24} className="text-orange-600 dark:text-orange-400" />, title: "Git", color: "text-orange-600 dark:text-orange-400" },
  { icon: <FaGithub size={24} className="text-black dark:text-white" />, title: "GitHub", color: "text-black dark:text-white" },
  { icon: <FaCodeBranch size={24} className="text-emerald-500 dark:text-emerald-300" />, title: "REST APIs", color: "text-emerald-500 dark:text-emerald-300" },
  { icon: <FaCuttlefish size={24} className="text-gray-700 dark:text-gray-300" />, title: "C / C++", color: "text-gray-700 dark:text-gray-300" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Technical Proficiency"
          title="Skills"
          description="Technologies and tools I work with"
        />
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
          {skills.map((item, index) => (
            <MuiCard
              key={index}
              className="w-full max-w-[220px] h-[100px] hover:-rotate-3 transition duration-300 relative overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg"
            >
              <CardContent className="flex flex-row items-center justify-center h-full space-y-4">
                <div
                  className={`size-12 bg-gray-100 dark:bg-white/10 rounded-lg shadow-md flex items-center justify-center mt-2 ${item.color}`}
                >
                  {item.icon}
                </div>
                <h3 className="font-semibold text-sm text-gray-900 dark:text-white text-center ml-4">
                  {item.title}
                </h3>
              </CardContent>
            </MuiCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;