"use client";

import React from "react";
import Link from "next/link";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, AlertDialogCancel } from "@/components/ui/alert-dialog";


const hubItems = [
  {
    key: "experience",
    label: "Experience",
    emoji: "[+]",
    bg: "bg-white/5",
    content: <ExperienceOnly />,
  },
  {
    key: "achievements",
    label: "Achievements",
    emoji: "[*]",
    bg: "bg-white/5",
    content: <AchievementsOnly />,
  },
  {
    key: "blog",
    label: "Blog",
    emoji: "[~]",
    bg: "bg-white/5",
    content: (
      <div className="p-6 border border-white/20 bg-black">
        <h3 className="text-xl font-semibold text-white mb-2 uppercase tracking-widest">Latest writings</h3>
        <p className="text-white/60 text-sm mb-6 font-light">Head over to the blog for recent posts and updates.</p>
        <Link href="/blog" className="inline-block border border-white bg-white text-black px-6 py-2 text-sm font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">Go to Blog</Link>
      </div>
    ),
  },
];

export default function ContentHub() {
  return (
    <div className="bg-zinc-900/40 rounded-2xl border border-zinc-800 p-6 md:p-8 w-full transition-all duration-300 hover:bg-zinc-800/50 flex flex-col h-full">
      <div className="text-3xl md:text-4xl font-bold text-white tracking-widest uppercase leading-tight mb-6">DAILY<br/>Tool<br/>STACK.</div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border border-zinc-800 rounded-xl overflow-hidden">
        {hubItems.map((item) => (
          <AlertDialog key={item.key}>
            <AlertDialogTrigger asChild>
              <button className={`group text-left p-6 border-r border-b border-zinc-800/50 hover:bg-zinc-800 transition-colors flex flex-col justify-between h-full min-h-[120px]`}>
                <span className="text-white font-semibold uppercase tracking-widest text-sm">{item.label}</span>
                <span className="text-white/40 text-lg self-end mt-4 font-mono" aria-hidden>
                  {item.emoji}
                </span>
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-h-[80vh] overflow-y-auto bg-black border border-white/20 rounded-none p-0">
              <AlertDialogHeader className="p-6 border-b border-white/20">
                <div className="flex items-center justify-between">
                  <AlertDialogTitle className="text-white uppercase tracking-widest">{item.label}</AlertDialogTitle>
                  <AlertDialogCancel className="h-8 w-8 flex items-center justify-center border border-white/20 bg-transparent text-white hover:bg-white hover:text-black transition-colors rounded-none">✕</AlertDialogCancel>
                </div>
              </AlertDialogHeader>
              <div className="p-6">{item.content}</div>
            </AlertDialogContent>
          </AlertDialog>
        ))}
        {/* Blog extra rectangle within grid */}
        <Link href="/blog" className="p-6 border-r border-b border-white/20 bg-white/5 text-white font-semibold uppercase tracking-widest text-center hover:bg-white hover:text-black transition-colors flex items-center justify-center text-sm">Blog Posts</Link>
      </div>
      {/* Tools scroller at the bottom */}
      <div className="mt-auto pt-6 overflow-x-auto scrollbar-none">
        <div className="flex gap-2 min-w-max pb-1">
          {['VS Code','Vercel','Figma','Notion','Linear','GitHub','Postman'].map((tool)=> (
            <span key={tool} className="px-4 py-1.5 bg-transparent text-white/70 text-xs uppercase tracking-widest border border-white/20 hover:bg-white hover:text-black transition-colors cursor-default">{tool}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Inline-only sections to avoid duplicating full Experience UI
function ExperienceOnly() {
  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-px bg-white/20"></div>
        <div className="flex flex-col gap-8 pt-2 pb-2">
          <div className="relative flex items-start gap-6">
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-white border border-black"></div>
            <div className="ml-6 border border-white/20 bg-black p-5 w-full hover:bg-white/5 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h2 className="font-semibold text-base text-white uppercase tracking-widest">Web Developer Intern</h2>
                <span className="text-xs text-white/50 font-mono tracking-widest">June 2025 - July 2025</span>
              </div>
              <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-3">IIIT Bhagalpur</p>
              <p className="text-white/50 text-xs leading-relaxed font-light">Worked on developing and customizing the official website of IIIT Bhagalpur using React and PostgreSQL.</p>
            </div>
          </div>
          <div className="relative flex items-start gap-6">
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-transparent border border-white"></div>
            <div className="ml-6 border border-white/20 bg-black p-5 w-full hover:bg-white/5 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h2 className="font-semibold text-base text-white uppercase tracking-widest">Web Dev Freelancer</h2>
                <span className="text-xs text-white/50 font-mono tracking-widest">May 2024 - July 2024</span>
              </div>
              <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-3">City Public School</p>
              <p className="text-white/50 text-xs leading-relaxed font-light">Worked on developing and customizing the official website of City Public School using HTML, CSS, and JavaScript.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AchievementsOnly() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="border border-white/20 bg-black p-5 flex flex-col gap-3 hover:bg-white/5 transition-colors">
        <div className="flex items-center gap-3 border-b border-white/10 pb-3">
          <span className="text-white font-mono">[1]</span>
          <h3 className="font-semibold text-white uppercase tracking-widest text-sm">Finalist - SIH 2024</h3>
        </div>
        <div className="flex justify-between items-end mt-2">
          <p className="text-white/50 text-xs font-light">Smart India Hackathon</p>
          <span className="text-xs text-white/30 font-mono">2024</span>
        </div>
      </div>
      <div className="border border-white/20 bg-black p-5 flex flex-col gap-3 hover:bg-white/5 transition-colors">
        <div className="flex items-center gap-3 border-b border-white/10 pb-3">
          <span className="text-white font-mono">[2]</span>
          <h3 className="font-semibold text-white uppercase tracking-widest text-sm">Winner - NMIT Hacks</h3>
        </div>
        <div className="flex justify-between items-end mt-2">
          <p className="text-white/50 text-xs font-light">Hackathon Competition</p>
          <span className="text-xs text-white/30 font-mono">2025</span>
        </div>
      </div>
      <div className="border border-white/20 bg-black p-5 flex flex-col gap-3 hover:bg-white/5 transition-colors">
        <div className="flex items-center gap-3 border-b border-white/10 pb-3">
          <span className="text-white font-mono">[3]</span>
          <h3 className="font-semibold text-white uppercase tracking-widest text-sm">Open Source</h3>
        </div>
        <div className="flex justify-between items-end mt-2">
          <p className="text-white/50 text-xs font-light">Active Contributor</p>
          <span className="text-xs text-white/30 font-mono">2024</span>
        </div>
      </div>
    </div>
  )
}
