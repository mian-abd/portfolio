"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSwift,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiExpo,
  SiFastapi,
  SiFirebase,
  SiKotlin,
  SiMicrosoftazure,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNumpy,
  SiOpenapiinitiative,
  SiPlotly,
  SiTableau,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiVisualbasic,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-white py-20 dark:bg-black">
      <div className="mx-auto max-w-[min(92vw,1400px)] px-3 sm:px-4 lg:px-8">
        <h1
          id="skills"
          className="pb-12 pt-12 text-center text-4xl font-bold dark:text-white md:pt-24 md:text-7xl lg:text-8xl"
        >
          Skills
        </h1>
        
        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <h2 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 md:text-2xl">
                {category.title}
              </h2>
              <div className="grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
                {category.skills.map((skill, skillIndex) => {
                  const globalIndex = categoryIndex * 100 + skillIndex;
                  return (
                    <Link
                      key={globalIndex}
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl dark:from-neutral-800 dark:to-neutral-900"
                      onMouseEnter={() => setHoveredSkill(globalIndex)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="mb-2 text-2xl md:text-3xl text-neutral-700 dark:text-neutral-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-xs font-medium text-center text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors duration-300">
                        {skill.title}
                      </span>
                      
                      {/* Hover tooltip */}
                      {hoveredSkill === globalIndex && (
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                          {skill.title}
                        </div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { title: "Python", link: "https://www.python.org/", icon: <FaPython /> },
      { title: "Java", link: "https://www.oracle.com/java/", icon: <FaJava /> },
      { title: "C++", link: "https://cplusplus.com/", icon: <SiCplusplus /> },
      { title: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: <FaJs /> },
      { title: "TypeScript", link: "https://www.typescriptlang.org/", icon: <SiTypescript /> },
      { title: "Kotlin", link: "https://kotlinlang.org/", icon: <SiKotlin /> },
      { title: "Swift", link: "https://swift.org/", icon: <FaSwift /> },
      { title: "VB.Net", link: "https://docs.microsoft.com/en-us/dotnet/visual-basic/", icon: <SiVisualbasic /> },
      { title: "SQL", link: "https://www.w3schools.com/sql/", icon: <SiMysql /> },
      { title: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", icon: <FaHtml5 /> },
      { title: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", icon: <FaCss3Alt /> }
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { title: "React.js", link: "https://react.dev/", icon: <FaReact /> },
      { title: "Next.js", link: "https://nextjs.org/", icon: <SiNextdotjs /> },
      { title: "Node.js", link: "https://nodejs.org/", icon: <FaNodeJs /> },
      { title: "React Native", link: "https://reactnative.dev/", icon: <FaReact /> },
      { title: "Expo", link: "https://expo.dev/", icon: <SiExpo /> },
      { title: "TensorFlow", link: "https://www.tensorflow.org/", icon: <SiTensorflow /> },
      { title: "NumPy", link: "https://numpy.org/", icon: <SiNumpy /> },
      { title: "FastAPI", link: "https://fastapi.tiangolo.com/", icon: <SiFastapi /> },
      { title: "Tailwind CSS", link: "https://tailwindcss.com/", icon: <SiTailwindcss /> },
      { title: "Plotly", link: "https://plotly.com/", icon: <SiPlotly /> }
    ]
  },
  {
    title: "Databases & Cloud",
    skills: [
      { title: "MongoDB", link: "https://www.mongodb.com/", icon: <SiMongodb /> },
      { title: "MySQL", link: "https://www.mysql.com/", icon: <SiMysql /> },
      { title: "PostgreSQL", link: "https://www.postgresql.org/", icon: <BiLogoPostgresql /> },
      { title: "Firebase", link: "https://firebase.google.com/", icon: <SiFirebase /> },
      { title: "AWS", link: "https://aws.amazon.com/", icon: <FaAws /> },
      { title: "Azure", link: "https://azure.microsoft.com/", icon: <SiMicrosoftazure /> }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { title: "Docker", link: "https://www.docker.com/", icon: <FaDocker /> },
      { title: "Git", link: "https://git-scm.com/", icon: <FaGitAlt /> },
      { title: "Tableau", link: "https://www.tableau.com/", icon: <SiTableau /> },
      { title: "OpenAI APIs", link: "https://openai.com/api/", icon: <SiOpenapiinitiative /> }
    ]
  }
];
