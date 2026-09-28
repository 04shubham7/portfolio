"use client";

import React from "react";
import { Container, Section } from "@/components/craft";
import { TechBadge } from "@/components/tech-badge";
import { Calendar, Trophy, Rocket, Code, Award } from "lucide-react";

const achievementsData = [
  {
    id: 1,
    title: "Finalist - SIH 2024",
    subtitle: "Smart India Hackathon 2024",
    year: "2024",
    icon: <Trophy size={18} className="text-white group-hover:text-black transition-colors" />,
    type: "Finalist",
    technologies: ["Python", "Streamlit"],
    description: [
      "Developed a traffic control optimization system using Reinforced Learning, simulating in SUMO environment.",
      "Created an innovative solution for smart traffic management that reached the finals of India's largest hackathon.",
      "Collaborated with a team to build the 'fikc.' project that addresses real-world traffic optimization challenges."
    ]
  },
  {
    id: 2,
    title: "Winner - NMIT Hacks 25",
    subtitle: "Hackathon Competition",
    year: "Winner",
    icon: <Award size={18} className="text-white group-hover:text-black transition-colors" />,
    type: "Winner",
    technologies: ["Python", "FastAPI", "React", "TypeScript"],
    description: [
      "Won the NMIT Hackathon with the 'Medical-AI' project - an intelligent diagnostic assistant.",
      "Built a comprehensive system for analyzing medical images (X-rays, CT scans, MRIs, and ultrasounds).",
      "Implemented AI-powered report generation and integrated doctor search with chat-based explanations."
    ]
  },
  {
    id: 3,
    title: "Open Source Contributor",
    subtitle: "Active in Developer Community",
    year: "Active",
    icon: <Code size={18} className="text-white group-hover:text-black transition-colors" />,
    type: "Contributor",
    technologies: ["JavaScript", "TypeScript", "React", "Node.js", "Python"],
    description: [
      "Actively contributing to various open source projects and maintaining personal repositories.",
      "Building projects like Recipe Finder, rentwheel, codeweb, and many other innovative applications.",
      "Sharing knowledge and code with the developer community through GitHub contributions."
    ]
  },
  {
    id: 4,
    title: "Hackathon Participations",
    subtitle: "odoo-hack, nextgen-hack and more",
    year: "2023-2025",
    icon: <Rocket size={18} className="text-white group-hover:text-black transition-colors" />,
    type: "Participant",
    technologies: ["JavaScript", "Nextjs", "MongoDB", "TypeScript"],
    description: [
      "Successfully participated in multiple hackathons including odoo-hack and nextgen-hack.",
      "Built projects like Quick Desk (ticket management system) and MediFind (medical inventory system).",
      "Demonstrated consistent performance in competitive programming and rapid prototyping."
    ]
  }
];

export default function AchievementsPage() {
  return (
    <Section className="min-h-screen bg-black text-white selection:bg-white selection:text-black py-0">
      <Container className="max-w-4xl mx-auto px-6 py-12 sm:py-24">
        {/* Header */}
        <div className="mb-16 border-b border-white/20 pb-8">
          <h1 className="text-4xl sm:text-5xl font-black mb-4 tracking-widest uppercase">ACHIEVEMENTS.</h1>
          <p className="text-white/50 text-lg font-light tracking-widest uppercase">
            Recognitions across competitions and projects.
          </p>
        </div>

        {/* Achievements List */}
        <div className="space-y-16">
          {achievementsData.map((achievement) => (
            <div
              key={achievement.id}
              className="relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 transition-colors duration-300 hover:bg-zinc-800/50 group"
            >
              {/* Top Row: Title & Subtitle & Badge & Year */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 border-b border-zinc-800 pb-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 border border-white/20 bg-black flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors">
                      {achievement.icon}
                    </div>
                    <span className="text-2xl sm:text-3xl font-black text-white tracking-widest uppercase">{achievement.title}</span>
                    {achievement.type === "Winner" && (
                      <div className="border border-white bg-white text-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                        Winner
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/70 font-semibold uppercase tracking-widest text-sm">
                    <span className="text-white">{achievement.subtitle}</span>
                  </div>
                </div>

                <div className="flex flex-col md:items-end gap-1 text-white/40 font-mono text-xs pt-2">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{achievement.year}</span>
                  </div>
                </div>
              </div>

              {/* Technologies Section */}
              <div className="mb-8">
                <h4 className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-4">Core Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {achievement.technologies.map((tech) => (
                    <TechBadge key={tech} tech={tech} showName />
                  ))}
                </div>
              </div>

              {/* Description Section */}
              <div>
                <h4 className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-4">Impact & Contributions</h4>
                <ul className="space-y-4">
                  {achievement.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="mt-[6px] w-2 h-2 border border-white bg-transparent shrink-0 group-hover:bg-white transition-colors"></span>
                      <p className="text-white/70 leading-relaxed font-light">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}