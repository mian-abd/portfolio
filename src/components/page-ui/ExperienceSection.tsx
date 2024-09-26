'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { TracingBeam } from '@/components/ui/tracing-beams';

export function ExperienceSection() {
    return (
        <>
            <h1 id="experience" className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                Experience
            </h1>
            <TracingBeam className="px-6">
                <div className="relative mx-auto max-w-2xl pb-32 pt-4 text-white antialiased">
                    {experience.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10 mt-4 md:mt-0">
                            <h2 className={twMerge('text-xl text-black dark:text-white')}>{item.title}</h2>
                            <span className="w-fit rounded-full py-1 text-sm italic text-neutral-800 dark:text-neutral-200">{item.badge}</span>
                            <div className="prose prose-sm dark:prose-invert mt-2 text-sm text-black dark:text-white">{item.description}</div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </>
    );
}

const experience = [
    {
        title: 'Tenzer Technology Center',
        description: (
            <ul className="list-disc">
                <li>Spent 10 hours/week for research and self-study using R Studio, Tableau, Python, ArcGIS for data analysis </li>
                <li>Applied responsive design with VR integration and multimedia optimizations including 3D modeling for 8+ projects</li>
            </ul>
        ),
        badge: 'Apprentice/Aug 2023 - Present'
    },
    {
        title: 'DePauw University',
        description: (
            <ul className="list-disc">
                <li>Enhanced learning for 50+ students in Intro to CS & Data Structures by providing hands-on guidance.</li>
                <li>Assisted 3 faculty members to design personalized resources, boosting student performance through targeted support.</li>
            </ul>
        ),
        badge: 'SDE Teacher & Lab Assistant/Aug 2024 - Present'
    },
    {
        title: 'Websitech Community Prvt. Limited',
        description: (
            <ul className="list-disc">
                <li>Completed 12 hard coded projects in Java and Python including calculator, password generator etc</li>
                <li>Directed tech workshops for 40+ peers & underclassmen featuring prototyping on figma, front end development</li>
            </ul>
        ),
        badge: 'SDE Intern/May 2022 - Aug 2022'
    },
    {
        title: 'Mubtada',
        description: (
            <ul className="list-disc">
                <li>Journalized for marginalized groups, especially victims of domestic violence, reaching 5k+ people in just a month</li>
                <li>Raised PKR 500K+ for journalism and got recognized by Nation's Largest NGO (Depilex Smileagain Foundation)</li>
            </ul>
        ),
        badge: 'President, Co-Funder/Jun 2022 - May 2024'
    }
];
