import React from "react";
import { Github, LinkedinIcon, Mail } from "lucide-react";

const Footer = () => (
  <footer className="w-full py-6 px-8 border-t border-white/20 bg-black text-white/50 flex flex-col md:flex-row items-center justify-between text-xs font-mono uppercase tracking-widest gap-4">
    <span className="font-bold">SHUBHAM KUMAR © {new Date().getFullYear()}</span>
    <div className="flex gap-6">
      <a href="https://github.com/04shubham7" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 flex items-center gap-2">
        <Github size={16} /> <span className="hidden sm:inline">GITHUB</span>
      </a>
      <a href="https://www.linkedin.com/in/04shubham7/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 flex items-center gap-2">
        <LinkedinIcon size={16} /> <span className="hidden sm:inline">LINKEDIN</span>
      </a>
      <a href="mailto:shubham040711@gmail.com" className="hover:text-white transition-colors duration-200 flex items-center gap-2">
        <Mail size={16} /> <span className="hidden sm:inline">EMAIL</span>
      </a>
    </div>
  </footer>
);

export default Footer;
