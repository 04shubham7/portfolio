"use client";

import React from "react";
import { Container, Section } from "@/components/craft";
import { TechBadge } from "@/components/tech-badge";
import { MapPin, Calendar } from "lucide-react";

const experienceData = [
  {
    id: 1,
    title: "Web Developer Intern",
    company: "IIIT Bhagalpur",
    type: "Completed",
    duration: "June 2025 - July 2025",
    location: "On-Site",
    technologies: ["React", "PostgreSQL"],
    description: [
      "Worked on developing and customizing the official website of IIIT Bhagalpur using React and PostgreSQL."
    ],
    links: {
      website: "#"
    }
  },
  {
    id: 2,
    title: "Web Developer Freelancer",
    company: "City Public School",
    type: "Completed",
    duration: "May 2024 - July 2024",
    location: "Remote",
    technologies: ["HTML", "CSS", "JavaScript"],
    description: [
      "Worked on developing and customizing the official website of City Public School using HTML, CSS, and JavaScript."
    ],
    links: {
      website: "#"
    }
  }
];

export default function ExperiencePage() {
  return (
    <Section className="min-h-screen bg-black text-white selection:bg-white selection:text-black py-0">
      <Container className="max-w-4xl mx-auto px-6 py-12 sm:py-24">
        {/* Header */}
        <div className="mb-16 border-b border-white/20 pb-8">
          <h1 className="text-4xl sm:text-5xl font-black mb-4 tracking-widest uppercase">EXPERIENCE.</h1>
          <p className="text-white/50 text-lg font-light tracking-widest uppercase">
            Work experiences across companies and roles.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-16">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="relative border border-white/20 bg-black p-8 transition-colors duration-300 hover:bg-white/5 group"
            >
              {/* Top Row: Company & Title & Status & Date */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 border-b border-white/10 pb-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-black text-white tracking-widest uppercase">{exp.company}</span>
                    {exp.type === "Working" && (
                      <div className="border border-white bg-white text-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                        Working
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-white/70 font-semibold uppercase tracking-widest text-sm">
                    <span className="text-white">{exp.title}</span>
                    <div className="flex items-center gap-2 text-white/40 font-mono text-xs">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:items-end gap-1 text-white/40 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{exp.duration}</span>
                  </div>
                </div>
              </div>

              {/* Technologies Section */}
              <div className="mb-8">
                <h4 className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-4">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <TechBadge key={tech} tech={tech} showName />
                  ))}
                </div>
              </div>

              {/* Description Section */}
              <div>
                <h4 className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-4">What I&apos;ve done</h4>
                <ul className="space-y-4">
                  {exp.description.map((item, idx) => (
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