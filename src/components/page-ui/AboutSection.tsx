'use client';

import Image from 'next/image';
import React from 'react';

export function AboutSection() {
    return (
        <section id="about-me" className="relative w-full flex-col justify-center bg-white py-16 dark:bg-black">
            <h1 className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">About Me</h1>
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-between space-y-8 px-8 md:flex-row md:space-y-0">
                {/* Left: Image Section */}
                <div className="w-full shrink-0 md:w-1/3">
                    <Image src="/projects/me.png" alt="Mian Abdullah" width={400} height={400} className="rounded-lg object-cover" />
                </div>

                {/* Right: About Text Section */}
                <div className="ml-8 flex w-full flex-col space-y-4 text-left md:w-2/3">
                    <p className="text-neutral-600 dark:text-neutral-300 md:text-lg">
                        I am a passionate Computer Science student with experience as an SDE intern, fitness athlete, and entrepreneur. My journey in
                        software engineering started with building full-stack applications and learning industry practices. I strive to create impact
                        through technology and am continuously improving my skills in Java, React, and Next.js, among others.
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-300 md:text-lg">
                        Currently, I am studying at DePauw University and balancing my academic responsibilities with my role as a Campus Resident
                        Assistant. I love taking on new challenges and exploring creative solutions for real-world problems.
                    </p>
                </div>
            </div>
        </section>
    );
}
