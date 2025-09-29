import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import ParallaxCosmicBackground from "@/components/ui/ParallaxCosmicBackground";

const projects = [
{
  "title": "TalkAi",
  "description": "An advanced conversational AI platform enabling real-time chat with intelligent agents. Features secure authentication, responsive design, and seamless integration for users to interact and automate tasks.",
  "src": "talkai-logo.png",
  "link": "https://i.postimg.cc/pLFDGP6F/Screenshot-2025-09-15-124911.png",
  "color": "#34a853",
  "githubLink": "https://github.com/04shubham7/TalkAi",
  "liveLink": "https://talkai-live.vercel.app/"
},
  {
  "title": "PassM",
  "description": "A modern password manager web application with secure authentication, mobile compatibility, and a beautiful UI. Users can sign in, manage their credentials, and enjoy a seamless experience across devices.",
  "src": "passm-logo.png",
  "link": "https://i.postimg.cc/wBpRWTfC/Screenshot-2025-07-14-002004.png",
  "color": "#2563eb",
  "githubLink": "https://github.com/04shubham7/PassM",
  "liveLink": "https://pass-m-3itr.vercel.app/"
},
  {
    title: "Campus Canteen",
    description:
      "A website for the canteens of different colleges where students can order food and get it delivered to their rooms.",
    src: "rock.jpg",
    link: "https://i.postimg.cc/cHk8TzBX/Screenshot-2025-07-01-170943.png",
    color: "#5196fd",
    githubLink: "https://github.com/04shubham7/Campus-Canteen",
    liveLink: "https://campus-canteen.vercel.app/",
  },
  {
    title: "A sleek portfolio built with React and Tailwind CSS ",
    description:
      "A sleek portfolio built with React and Tailwind CSS to showcase your skills, projects, and experience in a modern design.",
    src: "tree.jpg",
    link: "https://i.postimg.cc/MT6y9V2K/Screenshot-2025-07-01-171007.png",
    color: "#8f89ff",
    githubLink: "https://github.com/04shubham7/portfolio",
    liveLink: "",
  },
  {
    title: "City Public School",
    description:
      "A website for the school where students can view their results, timetable, and other important information.",
    src: "water.jpg",
    link: "https://i.postimg.cc/nVvXXM63/Screenshot-2024-05-28-110137.png",
    color: "#fff",
    githubLink: "https://github.com/04shubham7/City-Public-School",
  },
  {
  "title": "ImgToPDF Vert",
  "description": "A user-friendly web application that converts images to PDF files quickly and efficiently. Supports multiple image uploads, seamless PDF generation, and works smoothly across devices with an intuitive interface.",
  "src": "imgtopdf-logo.png",
  "link": "https://i.postimg.cc/c1cHZG1S/Screenshot-2025-07-14-125117.png",
  "color": "#22c55e",
  "githubLink": "https://github.com/04shubham7/ImgtoPdf",
  "liveLink": "https://imgtopdf-vert.vercel.app/"
},
{
  "title": "To-Do List",
  "description": "A streamlined to-do list web application designed for efficient task management. Users can add, edit, and remove tasks, mark them as complete, and enjoy a clean, responsive interface that works seamlessly across devices.",
  "src": "todolist-logo.png",
  "link": "https://i.postimg.cc/7ZzhFGfB/Screenshot-2025-07-14-125831.png",
  "color": "#f59e42",
  "githubLink": "https://github.com/04shubham7/To-do-list/",
  "liveLink": "https://to-do-list-murex-eta-77.vercel.app/"
},
{
  "title": "Weather Pro",
  "description": "A modern weather web application delivering real-time forecasts with a sleek and user-friendly interface. Users can search for any city to view current weather, temperature, humidity, wind speed, and more, all optimized for seamless use across devices.",
  "src": "weatherpro-logo.png",
  "link": "https://i.postimg.cc/T1BNFH4H/Screenshot-2025-07-14-125312.png",
  "color": "#38bdf8",
  "githubLink": "https://github.com/04shubham7/Weather_pro",
  "liveLink": "https://weather-pro-six.vercel.app/"
},


];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <ParallaxCosmicBackground />
      <main className="bg-black text-slate-100 min-h-screen" ref={container}>
        <section className="text-white w-full">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 mt-10 ml-6 bg-gradient-to-r from-slate-100 via-purple-300 to-slate-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(200,180,255,0.7)]">
            Projects
          </h2>
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Code
                  </span>
                </motion.a>

                {/* Live Link */}
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Live
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};
