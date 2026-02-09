"use client";

import Image from "next/image";
import React, { useState } from "react";

export function AboutSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="about-me"
      className="relative w-full flex-col justify-center bg-white py-20 dark:bg-black"
    >
      <div className="mx-auto max-w-7xl px-8">
        <h1 className="pb-12 pt-12 text-center text-4xl font-bold dark:text-white md:pt-24 md:text-7xl lg:text-8xl">
          About Me
        </h1>

        {/* TOP-ALIGN COLUMNS ON DESKTOP */}
        <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-16 lg:gap-20">
          {/* Left: Image Section */}
                     <div className="flex w-full justify-center md:w-1/2 lg:w-2/5 self-start">
             {/* Square wrapper so we control crop; removed my-auto */}
             <div 
               className="relative aspect-square w-full max-w-[550px] cursor-pointer"
               onMouseMove={handleMouseMove}
               onMouseEnter={() => setIsHovering(true)}
               onMouseLeave={() => setIsHovering(false)}
               onClick={() => window.open('https://www.linkedin.com/in/mian-abd/', '_blank')}
             >
               <Image
                 src="/projects/me.png"
                 alt="Mian Abdullah"
                 fill
                 sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
                 className="rounded-2xl object-cover object-top shadow-2xl transition-transform duration-300 hover:scale-105"
                 priority
               />
               <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
               
               {/* LinkedIn Button that follows cursor */}
               {isHovering && (
                 <div
                   className="absolute z-10 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
                   style={{
                     left: mousePosition.x,
                     top: mousePosition.y,
                   }}
                 >
                   <div className="flex items-center space-x-2 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white shadow-lg whitespace-nowrap">
                     <span>View LinkedIn Profile</span>
                     <svg 
                       className="h-4 w-4 flex-shrink-0" 
                       fill="none" 
                       stroke="currentColor" 
                       viewBox="0 0 24 24"
                     >
                       <path 
                         strokeLinecap="round" 
                         strokeLinejoin="round" 
                         strokeWidth={2} 
                         d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                       />
                     </svg>
                   </div>
                 </div>
               )}
             </div>
           </div>

          {/* Right: About Text Section */}
          <div className="flex w-full flex-col space-y-6 text-left md:w-1/2 lg:w-3/5 self-start">
            <div className="space-y-6">
              <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-200 md:text-xl">
                <strong>Hey, thanks for stopping by my portfolio!</strong>
              </p>

              <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 md:text-xl">
                I&apos;m <span className="font-semibold text-neutral-800 dark:text-neutral-100">Mian Abdullah</span>, a junior at DePauw University pursuing a Bachelor&apos;s in Computer Science & Philosophy.
              </p>

              <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300 md:text-lg">
                I&apos;m a first-generation learner originally from Lahore, Pakistan. I&apos;ve completed <span className="font-bold text-blue-600 dark:text-blue-400">4+ internships</span> in strategy & AI, full-stack, and ML (including BCforward, Legislative Intelligence, iD Tech), taught <span className="font-bold text-blue-600 dark:text-blue-400">312+ students</span> coding and robotics, co-founded <span className="font-bold text-blue-600 dark:text-blue-400">Plutores</span> (Web3 mortgage tech) and <span className="font-bold text-blue-600 dark:text-blue-400">Mubtada</span>, and built <span className="font-bold text-blue-600 dark:text-blue-400">30+ projects</span> from GPT-powered apps to ML and mobile. On campus, I&apos;ve held <span className="font-bold text-blue-600 dark:text-blue-400">leadership in 6+ clubs</span> and served as Vice President of DePauw Robotics.
              </p>

              <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300 md:text-lg">
                Outside the tech world, you&apos;ll often find me on the soccer field, at a table tennis match, or engaging in spirited debate—especially on topics that bridge <span className="font-semibold text-neutral-800 dark:text-neutral-200">computer science, logic, and finance</span>.
              </p>

              <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300 md:text-lg">
                I believe in creating spaces where collaboration, curiosity, and innovation thrive. Would love to connect, exchange ideas, and explore potential collaborations.
              </p>
            </div>

            {/* Contact Info */}
            <div className="rounded-lg bg-neutral-50 p-6 dark:bg-neutral-900/50">
              <div className="flex flex-col space-y-3 text-center md:flex-row md:items-center md:justify-center md:space-x-8 md:space-y-0">
                <a
                  href="mailto:abdullahmian549@gmail.com"
                  className="flex items-center justify-center space-x-2 text-blue-600 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <span className="text-lg">📧</span>
                  <span className="text-sm font-medium md:text-base">abdullahmian549@gmail.com</span>
                </a>
                <span className="hidden text-neutral-400 md:inline">•</span>
                <a
                  href="tel:7657122522"
                  className="flex items-center justify-center space-x-2 text-blue-600 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <span className="text-lg">📞</span>
                  <span className="text-sm font-medium md:text-base">(765) 712-2522</span>
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6 text-center">
              <a
                href="#contact-me"
                className="inline-block transform rounded-lg border-2 border-neutral-300 bg-transparent px-8 py-4 text-xl font-bold text-neutral-700 transition-all duration-300 ease-in-out hover:scale-105 hover:border-neutral-400 hover:bg-neutral-50 hover:shadow-lg dark:border-neutral-600 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:bg-neutral-800"
              >
                Let&apos;s Get In Touch!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
