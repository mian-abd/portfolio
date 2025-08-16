"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaReact, FaPython } from "react-icons/fa";
import { SiTensorflow, SiFastapi } from "react-icons/si";

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-white py-20 dark:bg-black">
      <div className="mx-auto max-w-[min(92vw,1400px)] px-3 sm:px-4 lg:px-8">
        <h1
          id="projects"
          className="pb-12 pt-12 text-center text-4xl font-bold dark:text-white md:pt-24 md:text-7xl lg:text-8xl"
        >
          My Projects
        </h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:from-neutral-800 dark:to-neutral-900"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white p-2 shadow-md dark:bg-neutral-700">
                <div className="text-2xl text-neutral-700 dark:text-neutral-300">
                  {project.icon}
                </div>
              </div>

              {/* Project Title */}
              <h3 className="mb-3 text-lg font-bold text-neutral-800 dark:text-white">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="mb-6 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                {project.description}
              </p>

              {/* GitHub Button */}
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rounded-lg border-2 border-neutral-300 bg-transparent px-4 py-2 text-sm font-bold text-neutral-700 transition-all duration-300 hover:scale-105 hover:border-neutral-400 hover:bg-neutral-50 hover:shadow-lg dark:border-neutral-600 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:bg-neutral-800"
              >
                <FaGithub className="text-base" />
                <span>View Project</span>
                <FaExternalLinkAlt className="text-xs" />
              </Link>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 text-center">
          <Link
            href="https://github.com/mian-abd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 rounded-lg border-2 border-neutral-300 bg-transparent px-8 py-4 text-lg font-bold text-neutral-700 transition-all duration-300 hover:scale-105 hover:border-neutral-400 hover:bg-neutral-50 hover:shadow-lg dark:border-neutral-600 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:bg-neutral-800"
          >
            <FaGithub className="text-xl" />
            <span>View All Projects on GitHub</span>
            <FaExternalLinkAlt className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "GTG App",
    description: "Cross-platform iOS/Android app using Expo and React Native, serving 2,000+ campus users with Firebase authentication and real-time data sync achieving ~150ms response time.",
    icon: <FaReact />,
    link: "https://github.com/mian-abd/GTG"
  },
  {
    title: "Portfolio Optimizer",
    description: "Full-stack Markowitz-based stock/ETF recommendation system with interactive Plotly UI, achieving 15% lower volatility and 95% reduction in API calls through smart caching.",
    icon: <SiFastapi />,
    link: "https://github.com/mian-abd/Portfolio-Optimizer"
  },
  {
    title: "Distributed Anomaly Detection",
    description: "ML-powered cybersecurity system for IoT networks using novel charge-assignment algorithms, reducing false positive rates by 26% and improving detection accuracy by 40%.",
    icon: <FaPython />,
    link: "https://github.com/mian-abd/Distributed-Anomaly-Detection-Using-Machine-Learning-Techniques"
  },
  {
    title: "Face Recognition ML",
    description: "Real-time face recognition system using Siamese Neural Networks with one-shot learning capability, trained on 176K+ images with 38.9M parameter architecture.",
    icon: <SiTensorflow />,
    link: "https://github.com/mian-abd/face-recognition-ML"
  }
];
