"use client";

import Image from "next/image";
import React from "react";

export function AboutSection() {
  return (
    <section
      id="about-me"
      className="relative w-full flex-col justify-center bg-white py-16 dark:bg-black"
    >
      <h1 className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
        About Me
      </h1>
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between space-y-8 px-8 md:flex-row md:space-y-0">
        {/* Left: Image Section */}
        <div className="w-full shrink-0 md:w-1/3">
          <Image
            src="/projects/me.png"
            alt="Mian Abdullah"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Right: About Text Section */}
        <div className="ml-8 flex w-full flex-col space-y-4 text-left md:w-2/3">
          <p className="text-neutral-600 dark:text-neutral-300 md:text-lg">
            Hi, I&apos;m Mian Abdullah, an Undergraduate at DePauw University
            majoring in Computer Science with a minor in Philosophy. I bring a
            wealth of diverse experiences from both the tech and leadership
            domains.
          </p>
          <p className="text-neutral-600 dark:text-neutral-300 md:text-lg">
            Throughout my academic career, I have developed over 10 technical
            projects and earned awards like the Top 3 Medal at the International
            Youth Math Contest and several recognitions in hackathons. In
            addition to my work as an SDE intern, I am deeply passionate about
            applying technology to solve real-world problems, particularly
            through leadership roles, whether it&apos;s promoting inclusive
            journalism or developing innovative tech solutions for businesses.
            My technical expertise spans Java, Python, C++, TypeScript, and many
            other languages and frameworks such as React, Next.js, and Docker. I
            have applied these skills in projects ranging from anomaly detection
            in IoT networks to developing AI task management tools like Smart
            Calendar, aimed at enhancing productivity.
          </p>
        </div>
      </div>
    </section>
  );
}
