"use client";

import Link from "next/link";
import React from "react";

export default function ProjectPoster() {
  return (
    <Link
      href="/projects"
      className="group relative bg-zinc-900/40 rounded-2xl border border-zinc-800 px-8 py-10 w-full text-left transition-colors duration-300 hover:bg-zinc-800/50 block overflow-hidden h-full flex flex-col justify-end"
    >
      <div className="absolute right-[-40px] top-[-40px] opacity-10 group-hover:opacity-20 transition-opacity">
        <div className="w-64 h-64 border-[40px] border-zinc-700" />
      </div>
      
      <div className="relative z-10 text-white font-black text-4xl md:text-5xl leading-none tracking-widest uppercase transition-colors">
        PRO<br />JECTS<span className="text-white/40">.</span>
      </div>
      <div className="absolute right-4 top-4 text-white/50 text-xs font-mono uppercase tracking-widest transition-colors">
        [ 工芸 ]
      </div>
    </Link>
  );
}
