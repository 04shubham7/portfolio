"use client";

import Link from "next/link";
import React from "react";

export default function ProjectPoster() {
  return (
    <Link
      href="/projects"
      className="group relative bg-zinc-900/40 rounded-2xl border border-zinc-800 px-8 py-10 w-full text-left transition-colors duration-300 hover:bg-zinc-800/50 block overflow-hidden h-full flex flex-col justify-end"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/0 via-zinc-800/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute right-[-40px] top-[-40px] opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700">
        <div className="w-64 h-64 border-[40px] border-zinc-700" />
      </div>
      
      <div className="relative z-10 flex justify-between items-end w-full">
        <div className="text-white font-black text-4xl md:text-5xl leading-none tracking-widest uppercase transition-colors">
          PRO<br />JECTS<span className="text-white/40">.</span>
        </div>
        <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-black -rotate-45 group-hover:rotate-0 transition-transform duration-300"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>
      </div>
      <div className="absolute right-4 top-4 text-white/50 text-xs font-mono uppercase tracking-widest transition-colors">
        [ 工芸 ]
      </div>
    </Link>
  );
}
