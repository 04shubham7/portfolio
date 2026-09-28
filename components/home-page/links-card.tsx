"use client";

import { Github, Linkedin } from "lucide-react";
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
      className="group bg-black border border-white/20 p-4 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors shrink-0 min-w-[64px] min-h-[64px]"
    >
      {children}
    </a>
  );

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex items-center gap-6 bg-black border border-white/20 p-8 w-full h-full transition-all duration-300 hover:bg-white/5">
        {/* Left side: Title */}
        <div className="text-5xl md:text-6xl font-black leading-none tracking-widest text-white uppercase flex flex-col justify-center h-full">
          <div>LIN</div>
          <div>KS.</div>
        </div>

        {/* Right side: Icon grid */}
        <div className="grid grid-cols-2 gap-0 border-t border-l border-white/20 w-full">
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
          <div className="bg-black border border-white/20 p-4 flex items-center justify-center text-white/20 shrink-0 min-w-[64px] min-h-[64px]">
            {/* Empty grid filler to make it 2x3 or evenly distributed */}
            <span className="font-mono text-xs uppercase tracking-widest">[N/A]</span>
          </div>
        </div>
      </div>
    </div>
  );
}
