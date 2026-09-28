import React, { useRef, useEffect } from "react";

// Helper to generate random stars
function generateStars(count, width, height) {
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 1.2 + 0.3,
    speed: Math.random() * 0.2 + 0.05,
    opacity: Math.random() * 0.5 + 0.5,
  }));
}

export default function ParallaxCosmicBackground({
  starCount = 180,
  planetCount = 2,
  comet = true,
  style = {},
  className = "",
}) {
  const canvasRef = useRef(null);
  const parallaxRef = useRef({ x: 0, y: 0 });

  // Animate stars
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    let stars = generateStars(starCount, width, height);

    function animate() {
      ctx.clearRect(0, 0, width, height);
      // Parallax offset
      const px = parallaxRef.current.x * 0.08;
      const py = parallaxRef.current.y * 0.08;
      // Draw stars
      for (let s of stars) {
        ctx.save();
        ctx.globalAlpha = s.opacity;
        ctx.beginPath();
        ctx.arc(s.x + px, s.y + py, s.r, 0, 2 * Math.PI);
        ctx.fillStyle = "#fff";
        ctx.shadowColor = "#fff";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
        // Twinkle
        s.opacity += (Math.random() - 0.5) * 0.02;
        s.opacity = Math.max(0.3, Math.min(1, s.opacity));
      }
      requestAnimationFrame(animate);
    }
    animate();
    // Resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      stars = generateStars(starCount, width, height);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [starCount]);

  // Parallax effect
  useEffect(() => {
    const handleMouse = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      parallaxRef.current = { x: x * 40, y: y * 40 };
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  // Planets and comet (SVG/absolute divs)
  return (
    <div
      className={`fixed inset-0 -z-10 overflow-hidden pointer-events-none ${className}`}
      style={{ ...style }}
      aria-hidden="true"
    >
      {/* Starfield */}
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Planets */}
      <div
        className="absolute left-[-80px] top-[10%] md:left-[5vw] md:top-[12vh]"
        style={{ transform: "translateZ(0)" }}
      >
        <svg width="120" height="120" viewBox="0 0 120 120">
          <defs>
            <radialGradient id="planet1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#6ee7ff" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.8" />
            </radialGradient>
          </defs>
          <circle cx="60" cy="60" r="54" fill="url(#planet1)" />
        </svg>
      </div>
      <div
        className="absolute right-[-100px] bottom-[8%] md:right-[6vw] md:bottom-[10vh]"
        style={{ transform: "translateZ(0)" }}
      >
        <svg width="160" height="160" viewBox="0 0 160 160">
          <defs>
            <radialGradient id="planet2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#f472b6" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#a21caf" stopOpacity="0.8" />
            </radialGradient>
          </defs>
          <circle cx="80" cy="80" r="70" fill="url(#planet2)" />
        </svg>
      </div>
      {/* Comet */}
      {comet && (
        <div className="absolute left-[30vw] top-[20vh] animate-comet">
          <svg width="90" height="30" viewBox="0 0 90 30">
            <defs>
              <linearGradient id="comet" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#fff" stopOpacity="1" />
                <stop offset="80%" stopColor="#38bdf8" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
              </linearGradient>
            </defs>
            <ellipse cx="15" cy="15" rx="12" ry="12" fill="#fff" opacity="0.9" />
            <rect x="15" y="10" width="60" height="10" fill="url(#comet)" />
          </svg>
        </div>
      )}
      {/* Comet animation */}
      <style>{`
        .animate-comet {
          animation: comet-move 5s linear infinite alternate;
        }
        @keyframes comet-move {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(120px) translateX(180px) scale(0.7); opacity: 0; }
        }
      `}</style>
    </div>
  );
} 