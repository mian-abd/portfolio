"use client";
import React, { useState } from "react";
import Image from "next/image";

export function ExperienceSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="relative w-full bg-white py-20 dark:bg-black">
      <div className="mx-auto max-w-[min(92vw,1400px)] px-3 sm:px-4 lg:px-8">
        <h1
          id="experience"
          className="pb-12 pt-12 text-center text-4xl font-bold dark:text-white md:pt-24 md:text-7xl lg:text-8xl"
        >
          Experience
        </h1>
        
        <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
          {experience.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 p-4 md:p-5 shadow-lg transition-all duration-300 hover:shadow-2xl dark:from-neutral-800 dark:to-neutral-900 ${
                expandedCard === index ? 'md:col-span-2' : ''
              }`}
            >
              {/* Company Logo & Basic Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative h-12 w-12 md:h-14 md:w-14 overflow-hidden rounded-full bg-white p-2 shadow-md flex-shrink-0">
                    <Image
                      src={item.logo}
                      alt={`${item.company} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-white truncate">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base font-medium text-pink-600 dark:text-pink-400 truncate">
                      {item.company} - {item.location}
                    </p>
                    <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300">
                      {item.duration}
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={() => toggleCard(index)}
                  className="ml-3 rounded-lg border-2 border-neutral-300 bg-transparent px-4 py-2 text-xs md:text-sm font-bold text-neutral-700 transition-all duration-300 hover:scale-105 hover:border-neutral-400 hover:bg-neutral-50 hover:shadow-lg dark:border-neutral-600 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:bg-neutral-800 flex-shrink-0"
                >
                  {expandedCard === index ? "Hide" : "Details"}
                </button>
              </div>

              {/* Expanded Details */}
              {expandedCard === index && (
                <div className="mt-6 animate-in slide-in-from-top-2 duration-300">
                  <div className="rounded-lg bg-white/50 p-4 dark:bg-black/20">
                    <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-1">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start space-x-3 text-sm text-neutral-700 dark:text-neutral-300"
                        >
                          <span className="mt-1 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                          <span dangerouslySetInnerHTML={{ __html: achievement }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const experience = [
  {
    title: "Software Development Engineering Instructor",
    company: "iD Tech",
    location: "Texas, USA",
    duration: "May 2025 - Present",
    logo: "/logos/id tech.png",
    achievements: [
      "Taught <strong>300+ students</strong> Python, AI machine learning, C++ and VEX robotics, with TensorFlow via hands-on models",
      "Designed interactive coding/robotics projects, achieving <strong>97% student satisfaction</strong> and measurable proficiency gains",
      "Guided students in building AI chatbots with <strong>OpenAI APIs</strong>, cutting debugging time by <strong>40%</strong> through enhanced skills"
    ]
  },
  {
    title: "Full Stack Engineer Intern",
    company: "Legislative Intelligence",
    location: "Noblesville, IN, USA",
    duration: "Feb 2025 - May 2025",
    logo: "/logos/Legislative Intelligence.jpeg",
    achievements: [
      "Collaborated on end-to-end scalable data backend powering <strong>GPT chatbot</strong> for bill search, summarization, & vote tracking",
      "Automated targeted web scraping pipeline for MI, IL, IN bills with OpenState, lxml, and regex; <strong>78% faster</strong> data sourcing",
      "Validated data integrity, maintaining near <strong>0% failure</strong> rates in structured and unstructured text ingestion in AI ChatBot"
    ]
  },
  {
    title: "SDE Teacher & Lab Assistant",
    company: "DePauw University",
    location: "Greencastle, IN, USA",
    duration: "Aug 2024 - Present",
    logo: "/logos/Depauw University.jpeg",
    achievements: [
      "Amplified learning outcomes for <strong>90+ students</strong> in Intro to CS & Data Structures by providing tailored hands-on guidance",
      "Assisted <strong>3 faculty members</strong> to design bonus resources, boosting student performance by <strong>14%</strong> through targeted support"
    ]
  },
  {
    title: "Apprentice",
    company: "Tenzer Technology Center",
    location: "Greencastle, IN, USA",
    duration: "Aug 2023 - Aug 2024",
    logo: "/logos/Tenzer_Technology_Center-removebg.png",
    achievements: [
      "Spent 10 hours/week for research and self-study using <strong>R Studio, Tableau, Python, ArcGIS</strong> for data analysis",
      "Applied responsive design with <strong>VR integration</strong> and <strong>multimedia optimizations</strong> including <strong>3D modeling</strong> for <strong>8+ projects</strong>"
    ]
  },
  {
    title: "President, Co-Founder",
    company: "Mubtada",
    location: "Pakistan",
    duration: "Jun 2022 - May 2024",
    logo: "/logos/mubtata.jpg",
    achievements: [
      "Journalized for marginalized groups, especially victims of domestic violence, reaching <strong>5k+ people</strong> in just a month",
      "Raised <strong>PKR 500K+</strong> for journalism and got recognized by Nation's Largest NGO (Depilex Smileagain Foundation)"
    ]
  },
  {
    title: "SDE Intern",
    company: "Websitech Community Prvt. Limited",
    location: "Remote",
    duration: "May 2022 - Aug 2022",
    logo: "/logos/Websitech.jpeg",
    achievements: [
      "Completed <strong>12 hard coded projects</strong> in Java and Python including calculator, password generator etc",
      "Directed tech workshops for <strong>40+ peers & underclassmen</strong> featuring prototyping on figma, front end development"
    ]
  }
  
];
