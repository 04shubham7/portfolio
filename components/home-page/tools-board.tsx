/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";
import { FileText, Monitor, Play } from "lucide-react";

// 🎨 React Icons Imports
import { SiSpotify, SiGithub, SiDiscord, SiNotion, SiOpenai } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiClaude } from "react-icons/si";

type RailItem = {
  label: string;
  icon: React.ReactNode;
  link: string;
};

const rail: RailItem[] = [
  { label: "VS Code", icon: <VscVscode size={22} />, link: "https://code.visualstudio.com/" },
  { label: "Notion", icon: <SiNotion size={22} />, link: "https://www.notion.so/" },
  { label: "ChatGPT", icon: <SiOpenai size={22} />, link: "https://chat.openai.com/" },
  { label: "Claude", icon: <SiClaude size={22} />, link: "https://claude.ai" },
  { label: "Spotify", icon: <SiSpotify size={22} />, link: "https://spotify.com/" },
  { label: "GitHub", icon: <SiGithub size={22} />, link: "https://github.com/" },
  { label: "Discord", icon: <SiDiscord size={22} />, link: "https://discord.com/" },
];

export default function ToolsBoard() {
  return (
    <div className="bg-black border border-white/20 p-6 md:p-8 w-full h-full flex flex-col transition-all duration-300 hover:bg-white/5">
      <div className="flex gap-6 grow overflow-hidden">
        {/* Left Tool Rail */}
        <div className="bg-black border border-white/20 p-2 flex flex-col gap-2 w-[60px] min-w-[60px] items-center overflow-y-auto scrollbar-none">
          {rail.map((r, i) => (
            <a
              key={i}
              href={r.link}
              target="_blank"
              rel="noopener noreferrer"
              title={r.label}
              className={`w-10 h-10 bg-transparent border border-white/20 flex items-center justify-center text-white/50 hover:bg-white hover:text-black transition-colors shrink-0`}
            >
              {r.icon}
            </a>
          ))}
        </div>

        {/* Main Content (Scrollable Container) */}
        <div className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden scrollbar-none pr-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* --- LEFT COLUMN --- */}
            <div className="flex flex-col gap-4">
              {/* Daily Tool Stack */}
              <div className="leading-[0.95] mb-2">
                <div className="text-3xl font-black text-white uppercase tracking-widest">DAILY</div>
                <div className="text-xl font-light text-white/70 mt-1 tracking-widest uppercase">Tool</div>
                <div className="text-3xl font-black text-white mt-1 uppercase tracking-widest">
                  STACK<span className="text-white/40">.</span>
                </div>
              </div>

              {/* Blog Link (Monochrome) */}
              <Link href="/blog" className="relative block group">
                <div className="relative h-12 border border-white bg-white overflow-hidden transition-all duration-300 hover:bg-black">
                  <div className="relative flex items-center justify-center h-full">
                    <span className="text-black group-hover:text-white text-xl font-bold tracking-widest uppercase transition-colors">ブログ</span>
                  </div>
                </div>
              </Link>

              {/* Compact Spotify Card */}
              <a
                href="https://open.spotify.com/track/6DCZcSspjsKoFjzjrWoCdn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex p-3 gap-3 border border-white/20 bg-black relative overflow-hidden h-[100px] transition-colors hover:bg-white/5 group cursor-pointer"
              >
                <SiSpotify size={14} className="absolute top-3 right-3 text-white/30 group-hover:text-white transition-colors" />

                <div className="relative shrink-0 w-[74px] h-[74px] border border-white/20 overflow-hidden bg-black">
                  <img
                    src="https://images.unsplash.com/photo-1566170272238-b6854199c126?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Cover"
                    className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <Play size={20} fill="white" className="text-white ml-0.5" />
                  </div>
                </div>

                <div className="flex flex-col justify-center flex-1 min-w-0 pr-4">
                  {/* Track List */}
                  <div className="flex flex-col gap-[1px] text-[9px] text-white/50 mb-1">
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="w-1.5 text-right font-mono">1</span>
                      <span className="bg-white/20 text-[7px] font-bold px-[3px] text-white">E</span>
                      <span className="truncate text-white font-medium group-hover:text-white transition-colors">God&apos;s Plan <span className="opacity-50">· Drake</span></span>
                    </div>
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="w-1.5 text-right font-mono">2</span>
                      <span className="bg-white/20 text-[7px] font-bold px-[3px] text-white">E</span>
                      <span className="truncate group-hover:text-white transition-colors">Nonstop <span className="opacity-50">· Drake</span></span>
                    </div>
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="w-1.5 text-right font-mono">3</span>
                      <span className="bg-white/20 text-[7px] font-bold px-[3px] text-white">E</span>
                      <span className="truncate group-hover:text-white transition-colors">Elevate <span className="opacity-50">· Drake</span></span>
                    </div>
                  </div>

                  {/* Controls Row */}
                  <div className="mt-auto flex items-end justify-between">
                    <div>
                      <div className="text-[10px] font-semibold text-white uppercase tracking-widest truncate w-[100px]">Scorpion</div>
                      <button className="px-2 py-[2px] mt-1 bg-white group-hover:bg-black group-hover:text-white border border-white text-[8px] font-bold text-black uppercase tracking-widest transition-colors duration-300">
                        Play
                      </button>
                    </div>
                    <div className="w-6 h-6 border border-white bg-transparent group-hover:bg-white flex items-center justify-center shrink-0 transition-colors duration-300 ml-5">
                      <Play size={10} fill="currentColor" className="text-white group-hover:text-black ml-[1px]" />
                    </div>
                  </div>
                </div>
              </a>

              {/* Compact System Specs */}
              <Link href="/" className="relative border border-white/20 bg-black p-3 group flex-1 flex flex-col min-h-[90px] cursor-pointer hover:bg-white/5 transition-colors">
                <div className="relative flex flex-col h-full justify-between z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-transparent border border-white/20 text-white/50 group-hover:text-white group-hover:bg-white/10 transition-colors duration-300">
                      <Monitor size={14} />
                    </div>
                    <div className="leading-tight">
                      <div className="text-sm font-bold text-white tracking-widest uppercase">SYSTEM<span className="text-white/40">.</span></div>
                      <div className="text-[10px] text-white/50 uppercase tracking-widest">Gear & Specs</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 text-[9px] font-mono bg-transparent text-white border border-white/20">M3 (8-512)</span>
                    <span className="px-2 py-1 text-[9px] font-mono bg-transparent text-white border border-white/20">Snapdragon Gen 7s</span>
                    <span className="px-2 py-1 text-[9px] font-mono bg-transparent text-white border border-white/20">Dimensity 7000</span>
                  </div>
                </div>
              </Link>

              {/* Compact CP Tab */}
              <a
                href="https://codolio.com/profile/Shubham040711"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-black border border-white/20 flex items-center gap-3 justify-center hover:bg-white hover:text-black transition-colors cursor-pointer group"
              >
                <img src="/myprofileimage2.png" alt="SG" className="w-6 h-6 border border-white/50 object-cover grayscale group-hover:border-black" />
                <span className="text-lg font-black leading-none tracking-widest uppercase">CP</span>
                <span className="text-[10px] font-semibold uppercase tracking-widest opacity-60">Codolio Profile</span>
              </a>
            </div>

            {/* --- RIGHT COLUMN --- */}
            <div className="flex flex-col gap-4">
              {/* Compact Resume Button */}
              <div
                className="flex items-center justify-center gap-2 bg-white border border-white p-3 text-black hover:bg-black hover:text-white transition-colors cursor-pointer select-none group"
                onClick={() => {
                  window.open("https://drive.google.com/file/d/1aF0xd0S-B_ugURQ-MRXAWCYrohxbfXxf/view?usp=drive_link", "_blank");
                }}
              >
                <FileText size={16} />
                <span className="font-bold text-sm tracking-widest uppercase">_RESUME.</span>
              </div>

              {/* Excellence Tabs */}
              <div className="border border-white/20 bg-black">
                <div className="p-3 border-b border-white/20">
                  <div className="grid grid-cols-2 gap-2">
                    <Link href="/experience" className="block">
                      <div className="p-2 bg-transparent border border-white/20 hover:bg-white hover:text-black transition-colors text-center group">
                        <div className="text-xs sm:text-sm font-bold leading-tight tracking-widest uppercase">EXPER<br />IENCE.</div>
                      </div>
                    </Link>
                    <Link href="/achievements" className="block">
                      <div className="p-2 bg-transparent border border-white/20 hover:bg-white hover:text-black transition-colors text-center group">
                        <div className="text-xs sm:text-sm font-bold leading-tight tracking-widest uppercase">ACHIEV<br />EMENT.</div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="px-3 py-2 text-[9px] text-white/50 uppercase tracking-widest">
                  from excellences: <span className="font-mono">2023 onwards</span>
                </div>
              </div>

              {/* Quote */}
              <div className="px-2 text-center py-2 border border-white/10">
                <div className="text-white/70 text-sm font-light italic tracking-widest uppercase">“Into the Unknown”</div>
              </div>

              {/* Image card */}
              <div className="border border-white/20 bg-black flex-1 min-h-[120px] p-2">
                <img src="/anime.jpg" alt="Card Image" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          </div>

          {/* --- BOTTOM ROW: GITHUB GRAPH (Constrained Width & Height) --- */}
          <div className="mt-4 border border-white/20 bg-black p-4 text-white">
            <div className="w-full flex justify-center grayscale contrast-200 opacity-90 hover:grayscale-0 transition-all duration-700">
              <img
                src="https://ghchart.rshah.org/39d353/04shubham7"
                alt="GitHub Contributions"
                className="w-full h-auto max-h-[100px] object-contain pointer-events-none filter-invert"
              />
            </div>

            <div className="flex items-center justify-between text-[10px] mt-4 text-white/50 uppercase tracking-widest">
              <span>1127 contributions in the last year</span>
              <div className="flex items-center gap-1.5 font-mono">
                <span>Less</span>
                <div className="w-2 h-2 bg-white/10 border border-white/20"></div>
                <div className="w-2 h-2 bg-white/30 border border-white/20"></div>
                <div className="w-2 h-2 bg-white/50 border border-white/20"></div>
                <div className="w-2 h-2 bg-white/70 border border-white/20"></div>
                <div className="w-2 h-2 bg-white border border-white/20"></div>
                <span>More</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .filter-invert {
          filter: invert(1) hue-rotate(180deg);
        }
      `}</style>
    </div>
  );
}