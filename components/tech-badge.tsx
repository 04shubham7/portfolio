"use client";

import React from "react";
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiFastapi, 
  SiNpm, SiCloudflare, SiDocker, SiPostgresql, SiPrisma, 
  SiMongodb, SiRedis, SiCplusplus, SiPython, SiGo, SiJavascript,
  SiTypescript, SiStreamlit, SiShadcnui, SiVercel, SiFigma
} from "react-icons/si";
import { FaAws as SiAmazonaws } from "react-icons/fa";
import { VscTerminal } from "react-icons/vsc";
import { SiMajorleaguehacking, SiJsonwebtokens, SiGooglegemini, SiSocketdotio } from "react-icons/si";
import { GiCircularSaw } from "react-icons/gi";

const iconMap: Record<string, React.ReactNode> = {
  "React": <SiReact size={18} className="text-white group-hover:text-black transition-colors" />,
  "Next.js": <SiNextdotjs size={18} className="text-white group-hover:text-black transition-colors" />,
  "Nextjs": <SiNextdotjs size={18} className="text-white group-hover:text-black transition-colors" />,
  "Tailwind CSS": <SiTailwindcss size={18} className="text-white group-hover:text-black transition-colors" />,
  "Tailwindcss": <SiTailwindcss size={18} className="text-white group-hover:text-black transition-colors" />,
  "Node.js": <SiNodedotjs size={18} className="text-white group-hover:text-black transition-colors" />,
  "Nodejs": <SiNodedotjs size={18} className="text-white group-hover:text-black transition-colors" />,
  "Express": <SiExpress size={18} className="text-white group-hover:text-black transition-colors" />,
  "FastAPI": <SiFastapi size={18} className="text-white group-hover:text-black transition-colors" />,
  "NPM": <SiNpm size={18} className="text-white group-hover:text-black transition-colors" />,
  "Cloudflare": <SiCloudflare size={18} className="text-white group-hover:text-black transition-colors" />,
  "Docker": <SiDocker size={18} className="text-white group-hover:text-black transition-colors" />,
  "Postgres": <SiPostgresql size={18} className="text-white group-hover:text-black transition-colors" />,
  "PostgreSQL": <SiPostgresql size={18} className="text-white group-hover:text-black transition-colors" />,
  "Prisma": <SiPrisma size={18} className="text-white group-hover:text-black transition-colors" />,
  "MongoDB": <SiMongodb size={18} className="text-white group-hover:text-black transition-colors" />,
  "Redis": <SiRedis size={18} className="text-white group-hover:text-black transition-colors" />,
  "C++": <SiCplusplus size={18} className="text-white group-hover:text-black transition-colors" />,
  "Python": <SiPython size={18} className="text-white group-hover:text-black transition-colors" />,
  "GO": <SiGo size={18} className="text-white group-hover:text-black transition-colors" />,
  "JavaScript": <SiJavascript size={18} className="text-white group-hover:text-black transition-colors" />,
  "TypeScript": <SiTypescript size={18} className="text-white group-hover:text-black transition-colors" />,
  "AWS": <SiAmazonaws size={18} className="text-white group-hover:text-black transition-colors" />,
  "Streamlit": <SiStreamlit size={18} className="text-white group-hover:text-black transition-colors" />,
  "Shadcn": <SiShadcnui size={18} className="text-white group-hover:text-black transition-colors" />,
  "Vercel": <SiVercel size={18} className="text-white group-hover:text-black transition-colors" />,
  "Figma": <SiFigma size={18} className="text-white group-hover:text-black transition-colors" />,
  "Hackathon": <SiMajorleaguehacking size={18} className="text-white group-hover:text-black transition-colors" />,
  "JWT": <SiJsonwebtokens size={18} className="text-white group-hover:text-black transition-colors" />,
  "Convex": <GiCircularSaw size={18} className="text-white group-hover:text-black transition-colors" />,
  "Gemini": <SiGooglegemini size={18} className="text-white group-hover:text-black transition-colors" />,
  "Socket": <SiSocketdotio size={18} className="text-white group-hover:text-black transition-colors" />,
};

export const TechBadge = ({ tech, showName }: { tech: string; showName?: boolean }) => {
  const icon = iconMap[tech] || <VscTerminal size={18} className="text-white/50 group-hover:text-black transition-colors" />;
  
  return (
    <div
      className={
        showName 
          ? "group border border-white/20 bg-black text-white px-3 py-1.5 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 select-none hover:bg-white hover:text-black transition-colors cursor-default"
          : "group w-10 h-10 flex items-center justify-center border border-white/20 bg-black hover:bg-white hover:text-black transition-colors cursor-help"
      }
      title={tech}
    >
      {icon}
      {showName && <span>{tech}</span>}
    </div>
  );
};
