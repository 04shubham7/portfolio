/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Edge = "bottom" | "top" | "left" | "right";

export default function ProfileCard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"fade-in" | "fade-out">("fade-in");
  const [catPeeking, setCatPeeking] = useState(false);
  const [catPosition, setCatPosition] = useState<Edge>("bottom");

  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [paws, setPaws] = useState<{ x: number; y: number; id: number }[]>([]);

  const rotatingWords = [
    "backends",
    "frontends",
    "full-stack apps",
    "MERN stack",
  ];

  // ⏱ time + text rotation
  useEffect(() => {
    setMounted(true);
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const wordTimer = setInterval(() => {
      setFadeState("fade-out");
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setFadeState("fade-in");
      }, 400);
    }, 2500);

    return () => {
      clearInterval(timerId);
      clearInterval(wordTimer);
    };
  }, []);

  // 🖱 cursor tracking + paw trail
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });

      // add paw
      const id = Date.now();
      setPaws((prev) => [...prev.slice(-8), { x: e.clientX, y: e.clientY, id }]);

      // remove after delay
      setTimeout(() => {
        setPaws((prev) => prev.filter((p) => p.id !== id));
      }, 800);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const getRandomEdge = () => {
    const edges: Edge[] = ["bottom", "top", "left", "right"];
    return edges[Math.floor(Math.random() * edges.length)];
  };

  const handleYoruClick = () => {
    if (catPeeking) return;
    setCatPosition(getRandomEdge());
    setCatPeeking(true);
    setTimeout(() => setCatPeeking(false), 2000);
  };

  const formattedTime = currentTime
    .toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    })
    .replace(",", "");

  return (
    <>
      {/* CARD */}
      <div className="bg-zinc-900/40 rounded-2xl border border-zinc-800 p-8 w-full h-full flex flex-col relative z-20 transition-all duration-300 hover:bg-zinc-800/50">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left w-full">
          <img
            src="/sk.jpg"
            alt="SK"
            className="w-[72px] h-[72px] border border-white/20 object-cover grayscale shrink-0 mb-2 sm:mb-0"
          />

          <div className="flex-1 w-full">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
              <div>
                <div className="text-2xl font-semibold text-white tracking-tight">Shubham Kumar</div>
                <div className="text-sm text-white/50 tracking-widest uppercase mt-1">@04shubham7</div>
              </div>

              <div
                onClick={handleYoruClick}
                className="cursor-pointer text-white/40 hover:text-white p-2 text-xs font-medium uppercase tracking-widest transition-colors mt-2 sm:mt-0"
              >
                [ Cat ]
              </div>
            </div>

            <p className="text-white mt-6 text-lg font-light leading-relaxed">
              I build{" "}
              <span
                className={`font-semibold text-white underline decoration-white/40 underline-offset-4 transition-all duration-700 ${
                  fadeState === "fade-in"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2"
                }`}
              >
                {rotatingWords[currentWordIndex]}
              </span>
            </p>

            <p className="text-white/60 mt-3 font-light leading-relaxed">
              Hello, I’m Shubham. A Full-Stack Developer and B.Tech CSE student at IIIT Bhagalpur.
            </p>
          </div>
        </div>

        <div className="mt-auto pt-6 text-xs text-white/50 flex items-center tracking-widest uppercase">
          <span className="w-1.5 h-1.5 bg-white mr-3"></span>
          Available for work
          <span className="ml-auto font-mono" suppressHydrationWarning>{mounted ? formattedTime : ""}</span>
        </div>
      </div>

      {/* ✧ PAW TRAIL (Changed to Sparkles) */}
      {paws.map((paw) => (
        <motion.div
          key={paw.id}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.8 }}
          className="fixed text-white text-xs pointer-events-none z-40"
          style={{ left: paw.x, top: paw.y }}
        >
          ✧
        </motion.div>
      ))}

      {/* 🐱 CAT */}
      <AnimatePresence>
        {catPeeking && (
          <motion.div
            initial={{
              x:
                catPosition === "left"
                  ? "-100%"
                  : catPosition === "right"
                  ? "100%"
                  : 0,
              y:
                catPosition === "top"
                  ? "-100%"
                  : catPosition === "bottom"
                  ? "100%"
                  : 0,
            }}
            animate={{
              x: cursor.x * 0.02, // 👈 follows cursor slightly
              y: cursor.y * 0.02,
            }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            className={`fixed z-50 pointer-events-none ${
              catPosition === "bottom"
                ? "bottom-0 left-1/2 -translate-x-1/2"
                : catPosition === "top"
                ? "top-0 left-1/2 -translate-x-1/2"
                : catPosition === "left"
                ? "left-0 top-1/2 -translate-y-1/2"
                : "right-0 top-1/2 -translate-y-1/2"
            }`}
          >
            <div className="flex flex-col items-center relative">

              {/* BAYMAX HEAD */}
              <div className="bg-white rounded-[40px] w-32 h-20 shadow-2xl relative flex items-center justify-center border-2 border-zinc-200/50">
                {/* EYES & CONNECTING LINE */}
                <div className="flex items-center relative">
                  {/* Left Eye */}
                  <div className="w-5 h-5 bg-black rounded-full z-10"></div>
                  {/* Connecting Line */}
                  <div className="w-8 h-[2px] bg-black"></div>
                  {/* Right Eye */}
                  <div className="w-5 h-5 bg-black rounded-full z-10"></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}