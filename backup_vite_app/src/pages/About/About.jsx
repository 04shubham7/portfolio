import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from "react";

// Import your images
import photo1 from "@/assets/images/hero.jpg";
import photo2 from "@/assets/images/sk.jpg";
import photo3 from "@/assets/images/img3.jpg";
import photo4 from "@/assets/images/img4.jpg";

const photos = [photo1, photo2, photo3,photo4];

export default function About() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef();

  // Auto-advance logic
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    }, 3000); // Change 3000 to your preferred interval (ms)
    return () => clearInterval(intervalRef.current);
  }, []);

  // Pause on hover (optional)
  const pause = () => clearInterval(intervalRef.current);
  const resume = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    }, 3000);
  };

  const prevPhoto = () => setCurrent((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  const nextPhoto = () => setCurrent((prev) => (prev === photos.length - 1 ? 0 : prev + 1));

  return (
    <>
      <section id="about" className="py-16 md:py-32 bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-extrabold lg:text-5xl bg-gradient-to-r from-slate-200 via-slate-400 to-slate-100 bg-clip-text">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0 min-w-[450px] lg:min-w-[500px]">
              <div
                className="relative w-[450px] h-[450px] max-w-[90vw] mx-auto"
                onMouseEnter={pause}
                onMouseLeave={resume}
              >
                <img
                  src={photos[current]}
                  alt={`Profile ${current + 1}`}
                  className="rounded-xl shadow-lg w-full h-full object-cover object-center transition-all duration-500"
                />
                {/* Left Arrow */}
                <button
                  onClick={prevPhoto}
                  className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/80"
                  aria-label="Previous photo"
                >
                  &#8592;
                </button>
                {/* Right Arrow */}
                <button
                  onClick={nextPhoto}
                  className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/80"
                  aria-label="Next photo"
                >
                  &#8594;
                </button>
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-slate-200/90 drop-shadow-[0_0_6px_rgba(192,192,192,0.4)]">
                Hello! I'm Shubham Kumar, a dedicated full-stack web developer and B.Tech CSE student at IIIT Bhagalpur. I specialize in building high-performance web applications using modern technologies like React, Next.js, Tailwind CSS, and MongoDB. I've developed and deployed scalable platforms such as a remote interview system and an online campus canteen, focusing on real-time interactivity, clean UI, and secure authentication.
              </p>
              <p className="text-slate-300/80 drop-shadow-[0_0_6px_rgba(192,192,192,0.3)]">
                Currently, I'm interning with IIIT Bhagalpur to redesign the institute's official website using React and PostgreSQL, where I'm also developing an internal admin dashboard to streamline content management. With hands-on experience across frontend and backend stacks, I'm passionate about creating developer-friendly tools, improving user experiences, and building solutions that align with real-world needs.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-400 pl-4">
                  <p className="text-slate-100/80 italic drop-shadow-[0_0_8px_rgba(192,192,192,0.5)]">
                    I'm available for Internships, Open Source Contributions and Full-Time Jobs.
                  </p>
                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-slate-100/90">Shubham Kumar</cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
