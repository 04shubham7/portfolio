"use client";

import { Github, Linkedin, Download } from "lucide-react";
import React from "react";
import { SiDiscord, SiGmail, SiX } from "react-icons/si";

type LinkBtnProps = {
  href: string;
  title: string;
  children: React.ReactNode;
};

export default function LinksCard() {
  const LinkBtn = ({ href, title, children }: LinkBtnProps) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className="group bg-transparent border-r border-b border-zinc-800/50 p-4 flex items-center justify-center text-white hover:bg-zinc-800 transition-colors shrink-0 min-w-[64px] min-h-[64px] w-full h-full"
    >
      {children}
    </a>
  );

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-4 sm:gap-6 bg-zinc-900/40 rounded-2xl border border-zinc-800 p-6 sm:p-8 w-full h-full transition-all duration-300 hover:bg-zinc-800/50">
        {/* Left side: Title */}
        <div className="text-5xl md:text-6xl font-black leading-none tracking-widest text-white uppercase flex flex-col justify-center h-full text-center md:text-left shrink-0">
          <div className="md:hidden">LINKS<span className="text-white/40">.</span></div>
          <div className="hidden md:block">LIN</div>
          <div className="hidden md:block">KS<span className="text-white/40">.</span></div>
        </div>

        {/* Right side: Icon grid */}
        <div className="grid grid-cols-2 grid-rows-3 gap-0 border border-zinc-800 rounded-xl overflow-hidden w-full h-full flex-1">
          <LinkBtn href="https://github.com/04shubham7" title="GitHub">
            <Github size={26} className="transition-transform group-hover:scale-110" />
          </LinkBtn>
          <LinkBtn href="https://x.com/04shubham7" title="X (Twitter)">
            <SiX size={22} className="transition-transform group-hover:scale-110" />
          </LinkBtn>
          <LinkBtn href="mailto:shubham040711@gmail.com" title="Gmail">
            <SiGmail size={22} className="transition-transform group-hover:scale-110" />
          </LinkBtn>
          <LinkBtn href="https://discord.com/04shubham7" title="Discord">
            <SiDiscord size={22} className="transition-transform group-hover:scale-110" />
          </LinkBtn>
          <LinkBtn href="https://www.linkedin.com/in/04shubham7/" title="LinkedIn">
            <Linkedin size={24} className="transition-transform group-hover:scale-110" />
          </LinkBtn>
          <LinkBtn href="https://drive.google.com/file/d/1aF0xd0S-B_ugURQ-MRXAWCYrohxbfXxf/view?usp=drive_link" title="Download Resume">
            <Download size={22} className="transition-transform group-hover:scale-110" />
          </LinkBtn>
        </div>
      </div>
    </div>
  );
}
