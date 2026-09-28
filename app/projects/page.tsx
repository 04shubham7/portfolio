"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projectData } from "@/data/projectData";
import { Container, Section } from "@/components/craft";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronUp, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { TechBadge } from "@/components/tech-badge";

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({});

  const categories = [
    { key: "all", label: "ALL" },
    { key: "web", label: "WEB" },
    { key: "ai", label: "AI" },
    { key: "hackathon", label: "HACKATHON" },
    { key: "core", label: "CORE" },
  ];

  const filteredProjects = [...projectData]
    .reverse()
    .filter((project) => {
      const categories = Array.isArray(project.category) ? project.category : [project.category];
      return (
        (selectedCategory === "all" || categories.includes(selectedCategory)) &&
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

  const toggleExpand = (title: string) => {
    setExpandedProjects(prev => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <Section className="min-h-screen bg-black selection:bg-white selection:text-black py-0">
      <Container className="max-w-6xl mx-auto w-full px-6 pt-12 sm:pt-24 pb-32">
        {/* Header */}
        <div className="mb-16 border-b border-white/20 pb-8">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-8 tracking-widest uppercase">PROJECTS.</h1>
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            <Input
              placeholder="SEARCH PROJECTS..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-black text-white border-white/20 placeholder:text-white/30 max-w-sm rounded-none h-12 uppercase tracking-widest font-mono text-xs focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-0"
            />
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border transition-colors duration-300 ${
                    selectedCategory === cat.key 
                      ? "bg-white text-black border-white" 
                      : "bg-black text-white border-white/20 hover:bg-white/10"
                  }`}
                  onClick={() => setSelectedCategory(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length === 0 ? (
             <div className="col-span-full flex flex-col items-center justify-center py-20 text-center border border-dashed border-white/20">
             <span className="text-2xl font-black text-white mb-2 tracking-widest uppercase">No projects found.</span>
             <span className="text-white/50 tracking-widest uppercase text-xs">Try adjusting your search or category filter.</span>
           </div>
          ) : (
            filteredProjects.map((project) => {
              const isExpanded = expandedProjects[project.title] || false;
              
              return (
                <div
                  key={project.title}
                  className="flex flex-col group h-full border border-white/20 bg-black transition-colors duration-300 hover:bg-white/5"
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] border-b border-white/20 flex items-center justify-center p-6 bg-black">
                    {project.image ? (
                      <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain object-center"
                          unoptimized
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/20 font-black text-xl uppercase tracking-widest">
                        NO IMAGE
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-6">
                    <h2 className="text-xl sm:text-2xl font-black text-white mb-4 tracking-widest uppercase">
                      {project.title}
                    </h2>
                    
                    <p className={`text-white/60 text-sm leading-relaxed mb-6 font-light ${!isExpanded ? "line-clamp-2" : ""}`}>
                      {project.description}
                    </p>

                    <button 
                      onClick={() => toggleExpand(project.title)}
                      className="flex items-center gap-2 text-white font-bold text-[10px] uppercase tracking-widest transition-colors mb-6 w-fit hover:text-white/50"
                    >
                      {isExpanded ? "SHOW LESS" : "READ MORE"}
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>

                    {/* Expandable Content (Links) */}
                    {isExpanded && (
                      <div className="flex gap-4 mb-6 pt-4 border-t border-white/10">
                        {project.url && (
                          <Link 
                            href={project.url} 
                            target="_blank" 
                            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest"
                          >
                            <Github size={14} /> SOURCE
                          </Link>
                        )}
                        {project.live && (
                          <Link 
                            href={project.live} 
                            target="_blank" 
                            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest"
                          >
                            <ExternalLink size={14} /> LIVE
                          </Link>
                        )}
                      </div>
                    )}

                    {/* Tech Badges (Pushed to bottom) */}
                    <div className="mt-auto pt-6 border-t border-white/10 flex flex-wrap gap-2">
                      {project.tech?.map((tech: string, i: number) => (
                        <TechBadge key={`${tech}-${i}`} tech={tech} showName />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </Container>
    </Section>
  );
}