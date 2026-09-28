"use client";

import React from "react";
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiFastapi, 
  SiNpm, SiCloudflare, SiDocker, SiPostman, SiPostgresql, SiPrisma, 
  SiMongodb, SiRedis, SiCplusplus, SiPython, SiGo 
} from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { VscTerminal } from "react-icons/vsc";

export default function TechStackCard() {
  const getIcon = (text: string) => {
    switch(text) {
      case "React": return <SiReact size={14} className="text-white group-hover:text-black transition-colors" />;
      case "Nextjs": return <SiNextdotjs size={14} className="text-white group-hover:text-black transition-colors" />;
      case "Shadcn": return <SiShadcnui size={14} className="text-white group-hover:text-black transition-colors" />;
      case "Tailwindcss": return <SiTailwindcss size={14} className="text-white group-hover:text-black transition-colors" />;
      case "Nodejs": return <SiNodedotjs size={14} className="text-white group-hover:text-black transition-colors" />;
      case "Express": return <SiExpress size={14} className="text-white group-hover:text-black transition-colors" />;
      case "FastAPI": return <SiFastapi size={14} className="text-white group-hover:text-black transition-colors" />;
      case "NPM": return <SiNpm size={14} className="text-white group-hover:text-black transition-colors" />;
      case "Cloudflare Workers": return <SiCloudflare size={14} className="text-white group-hover:text-black transition-colors" />;
      case "Docker": return <SiDocker size={14} className="text-white group-hover:text-black transition-colors" />;
      case "Postman": return <SiPostman size={14} className="text-white group-hover:text-black transition-colors" />;
      case "Postgres": return <SiPostgresql size={14} className="text-white group-hover:text-black transition-colors" />;
      case "Prisma ORM": return <SiPrisma size={14} className="text-white group-hover:text-black transition-colors" />;
      case "MongoDB": return <SiMongodb size={14} className="text-white group-hover:text-black transition-colors" />;
      case "Redis": return <SiRedis size={14} className="text-white group-hover:text-black transition-colors" />;
      case "C++": return <SiCplusplus size={14} className="text-white group-hover:text-black transition-colors" />;
      case "Python": return <SiPython size={14} className="text-white group-hover:text-black transition-colors" />;
      case "GO": return <SiGo size={14} className="text-white group-hover:text-black transition-colors" />;
      default: return <VscTerminal size={14} className="text-white/50 group-hover:text-black transition-colors" />;
    }
  };

  const renderBadge = (text: string) => (
    <div
      key={text}
      className="group border border-white/20 bg-black text-white hover:bg-white hover:text-black px-4 py-2 text-xs font-bold uppercase tracking-widest cursor-pointer flex items-center justify-center gap-3 select-none transition-colors"
    >
      <span>{getIcon(text)}</span>
      <span>{text}</span>
    </div>
  );

  return (
    <div className="bg-black border border-white/20 p-6 md:p-8 h-full transition-all duration-300 hover:bg-white/5 flex flex-col">
      <div className="text-3xl md:text-4xl font-black text-white mb-8 tracking-widest uppercase">
        SKILLS<span className="text-white/40">.</span>
      </div>
      
      <div className="flex-1 flex flex-col gap-6">
        <div>
          <div className="text-[10px] font-bold text-white/50 mb-3 uppercase tracking-widest border-b border-white/10 pb-2">Frontend</div>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Nextjs",
              "Shadcn",
              "Tailwindcss",
              "Zustand",
              "Tanstack Query",
            ].map(renderBadge)}
          </div>
        </div>
        
        <div>
          <div className="text-[10px] font-bold text-white/50 mb-3 uppercase tracking-widest border-b border-white/10 pb-2">Backend</div>
          <div className="flex flex-wrap gap-2">
            {["Nodejs", "Express", "FastAPI", "NPM"].map(renderBadge)}
          </div>
        </div>
        
        <div>
          <div className="text-[10px] font-bold text-white/50 mb-3 uppercase tracking-widest border-b border-white/10 pb-2">DB & Services</div>
          <div className="flex flex-wrap gap-2">
            {[
              "Cloudflare Workers",
              "Docker",
              "Postman",
              "Postgres",
              "Prisma ORM",
              "MongoDB",
              "Redis",
            ].map(renderBadge)}
          </div>
        </div>
        
        <div>
          <div className="text-[10px] font-bold text-white/50 mb-3 uppercase tracking-widest border-b border-white/10 pb-2">Others</div>
          <div className="flex flex-wrap gap-2">
            {["C++", "Python", "GO"].map(renderBadge)}
          </div>
        </div>
      </div>
    </div>
  );
}
