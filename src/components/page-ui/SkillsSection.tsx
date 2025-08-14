import Link from "next/link";
import React from "react";
import { FaCss3Alt, FaHtml5, FaJava, FaPython } from "react-icons/fa";
import { SiMongodb, SiMysql, SiTypescript } from "react-icons/si";
import { TbBrandNextjs, TbBrandReact } from "react-icons/tb";

import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

export function SkillsSection() {
  return (
    <div className="mx-auto max-w-5xl px-8 pb-8">
      <h1
        id="skills"
        className="max-w-5xl pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl"
      >
        Skills
      </h1>
      <div
        className={
          "grid grid-cols-1 gap-6  py-10 md:grid-cols-2 lg:grid-cols-3"
        }
      >
        {skills.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            className="relative mx-auto flex h-[13rem] w-full max-w-full flex-col items-start border border-black/[0.2] p-4 dark:border-white/[0.2]"
          >
            <Icon className="absolute -left-3 -top-3 size-6 text-black dark:text-white" />
            <Icon className="absolute -bottom-3 -left-3 size-6 text-black dark:text-white" />
            <Icon className="absolute -right-3 -top-3 size-6 text-black dark:text-white" />
            <Icon className="absolute -bottom-3 -right-3 size-6 text-black dark:text-white" />

            <EvervaultCard text={item.title} icon={item.icon} />
          </Link>
        ))}
      </div>
    </div>
  );
}

const skills = [
  {
    title: "Java",
    link: "https://www.oracle.com/java/",
    icon: <FaJava />,
  },
  {
    title: "Python",
    link: "https://www.python.org/",
    icon: <FaPython />,
  },
  {
    title: "TypeScript",
    link: "https://www.typescriptlang.org/",
    icon: <SiTypescript />,
  } /*
    {
        title: 'JavaScript',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        icon: <FaJs />
    },*/,
  {
    title: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    icon: <FaHtml5 />,
  },
  {
    title: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: <FaCss3Alt />,
  },
  {
    title: "React.js",
    link: "https://react.dev/",
    icon: <TbBrandReact />,
  },
  {
    title: "Next.js",
    link: "https://nextjs.org/",
    icon: <TbBrandNextjs />,
  } /*
    {
        title: 'Docker',
        link: 'https://www.docker.com/',
        icon: <SiDocker />
    },
    {
        title: 'PostgreSQL',
        link: 'https://www.postgresql.org',
        icon: <SiPostgresql />
    },*/,
  {
    title: "MongoDB",
    link: "https://www.mongodb.com/",
    icon: <SiMongodb />,
  },
  {
    title: "MySQL",
    link: "https://www.mysql.com/",
    icon: <SiMysql />,
  },
];
