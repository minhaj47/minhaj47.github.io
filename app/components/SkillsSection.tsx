"use client";

import { motion } from "framer-motion";
import { Hexagon } from "lucide-react";
import { categoryColors, skillsHoneycomb } from "./SharedData";

// Import colorful brand icons from react-icons
import {
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiGraphql,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFlutter,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiLangchain,
  SiTensorflow,
  SiKotlin,
  SiJetpackcompose,
  SiFirebase,
  SiSocketdotio,
  SiDocker,
  SiGit,
  SiAmazonwebservices,
  SiNginx,
  SiPostman,
  SiGooglegemini,
} from "react-icons/si";
import { TbApi, TbVectorBezier2, TbBrain } from "react-icons/tb";
import { BsSearch } from "react-icons/bs";

// Colorful icon mapping for skills with brand colors
const skillIconMap: Record<string, React.ReactNode> = {
  // Backend
  "Node.js": <SiNodedotjs className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#339933" }} />,
  Express: <SiExpress className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#ffffff" }} />,
  FastAPI: <SiFastapi className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#009688" }} />,
  "REST API": <TbApi className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#FF6B6B" }} />,
  GraphQL: <SiGraphql className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#E10098" }} />,

  // Frontend
  React: <SiReact className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#61DAFB" }} />,
  "Next.js": <SiNextdotjs className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#ffffff" }} />,
  TypeScript: <SiTypescript className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#3178C6" }} />,
  Tailwind: <SiTailwindcss className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#06B6D4" }} />,
  Flutter: <SiFlutter className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#02569B" }} />,

  // Database
  PostgreSQL: <SiPostgresql className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#4169E1" }} />,
  MySQL: <SiMysql className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#4479A1" }} />,
  MongoDB: <SiMongodb className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#47A248" }} />,
  Redis: <SiRedis className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#DC382D" }} />,
  Prisma: <SiPrisma className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#2D3748" }} />,

  // AI/ML
  LangChain: <SiLangchain className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#1C3C3C" }} />,
  RAG: <BsSearch className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#FF6B35" }} />,
  Qdrant: <TbVectorBezier2 className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#DC244C" }} />,
  Gemini: <SiGooglegemini className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#8E75B2" }} />,
  TensorFlow: <SiTensorflow className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#FF6F00" }} />,

  // Mobile
  Kotlin: <SiKotlin className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#7F52FF" }} />,
  Jetpack: <SiJetpackcompose className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#4285F4" }} />,
  Firebase: <SiFirebase className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#FFCA28" }} />,
  "React Native": <SiReact className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#61DAFB" }} />,
  "Socket.IO": <SiSocketdotio className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#010101" }} />,

  // DevOps
  Docker: <SiDocker className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#2496ED" }} />,
  Git: <SiGit className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#F05032" }} />,
  AWS: <SiAmazonwebservices className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#FF9900" }} />,
  Nginx: <SiNginx className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#009639" }} />,
  Postman: <SiPostman className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#FF6C37" }} />,
};

export default function SkillsSection() {
  // Honeycomb pattern positions - organized in offset rows
  const hexagonPositions = [
    // Row 1 (5 hexagons)
    { top: "5%", left: "20%" },
    { top: "5%", left: "32%" },
    { top: "5%", left: "44%" },
    { top: "5%", left: "56%" },
    { top: "5%", left: "68%" },
    // Row 2 (6 hexagons - offset)
    { top: "18%", left: "14%" },
    { top: "18%", left: "26%" },
    { top: "18%", left: "38%" },
    { top: "18%", left: "50%" },
    { top: "18%", left: "62%" },
    { top: "18%", left: "74%" },
    // Row 3 (5 hexagons)
    { top: "31%", left: "20%" },
    { top: "31%", left: "32%" },
    { top: "31%", left: "44%" },
    { top: "31%", left: "56%" },
    { top: "31%", left: "68%" },
    // Row 4 (6 hexagons - offset)
    { top: "44%", left: "14%" },
    { top: "44%", left: "26%" },
    { top: "44%", left: "38%" },
    { top: "44%", left: "50%" },
    { top: "44%", left: "62%" },
    { top: "44%", left: "74%" },
    // Row 5 (5 hexagons)
    { top: "57%", left: "20%" },
    { top: "57%", left: "32%" },
    { top: "57%", left: "44%" },
    { top: "57%", left: "56%" },
    { top: "57%", left: "68%" },
    // Row 6 (4 hexagons - offset)
    { top: "70%", left: "26%" },
    { top: "70%", left: "38%" },
    { top: "70%", left: "50%" },
    { top: "70%", left: "62%" },
  ];

  // Violet glow positions for intersections
  const violetGlowPositions = [
    // Row 1-2 intersections
    { top: "11%", left: "20%", delay: 0 },
    { top: "11%", left: "32%", delay: 0.2 },
    { top: "11%", left: "44%", delay: 0.4 },
    { top: "11%", left: "56%", delay: 0.6 },
    { top: "11%", left: "68%", delay: 0.8 },
    // Row 2-3 intersections
    { top: "24%", left: "14%", delay: 0.3 },
    { top: "24%", left: "26%", delay: 0.5 },
    { top: "24%", left: "38%", delay: 0.7 },
    { top: "24%", left: "50%", delay: 0.9 },
    { top: "24%", left: "62%", delay: 1.1 },
    { top: "24%", left: "74%", delay: 1.3 },
    // Row 3-4 intersections
    { top: "37%", left: "20%", delay: 0.4 },
    { top: "37%", left: "32%", delay: 0.6 },
    { top: "37%", left: "44%", delay: 0.8 },
    { top: "37%", left: "56%", delay: 1.0 },
    { top: "37%", left: "68%", delay: 1.2 },
    // Row 4-5 intersections
    { top: "50%", left: "14%", delay: 0.5 },
    { top: "50%", left: "26%", delay: 0.7 },
    { top: "50%", left: "38%", delay: 0.9 },
    { top: "50%", left: "50%", delay: 1.1 },
    { top: "50%", left: "62%", delay: 1.3 },
    { top: "50%", left: "74%", delay: 1.5 },
    // Row 5-6 intersections
    { top: "63%", left: "20%", delay: 0.6 },
    { top: "63%", left: "32%", delay: 0.8 },
    { top: "63%", left: "44%", delay: 1.0 },
    { top: "63%", left: "56%", delay: 1.2 },
    { top: "63%", left: "68%", delay: 1.4 },
  ];

  return (
    <section
      className="py-32 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
      id="skills"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium inline-block mb-4">
            🐝 Tech Stack Beehive
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technologies I Master
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Each colony represents a domain of expertise, working together in
            perfect harmony
          </p>

          {/* Category Legend */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Object.entries(categoryColors).map(([key, cat]) => (
              <div
                key={key}
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-md"
              >
                <div
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{
                    backgroundColor: cat.bg,
                    boxShadow: `0 0 10px ${cat.bg}80`,
                  }}
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Single Unified Beehive */}
        <div className="relative max-w-6xl mx-auto flex justify-center">
          <div className="relative" style={{ width: "900px", height: "700px" }}>
            {/* Violet Glow Intersections */}
            <div className="absolute inset-0 pointer-events-none">
              {violetGlowPositions.map((pos, idx) => (
                <div
                  key={idx}
                  className="absolute"
                  style={{
                    top: pos.top,
                    left: pos.left,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full bg-violet-400 opacity-80 blur-xl animate-pulse"
                    style={{ animationDelay: `${pos.delay}s` }}
                  />
                  <div
                    className="absolute inset-0 w-8 h-8 rounded-full bg-violet-500 opacity-60 blur-lg animate-pulse"
                    style={{ animationDelay: `${pos.delay}s` }}
                  />
                  <div
                    className="absolute inset-0 w-8 h-8 rounded-full bg-violet-600 opacity-40 blur-md animate-pulse"
                    style={{ animationDelay: `${pos.delay}s` }}
                  />
                </div>
              ))}
            </div>

            {skillsHoneycomb.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.05,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.2,
                  zIndex: 50,
                  transition: { duration: 0.2 },
                }}
                className="group absolute"
                style={{
                  top: hexagonPositions[idx]?.top || "0%",
                  left: hexagonPositions[idx]?.left || "0%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  className="relative w-20 h-24 md:w-24 md:h-28 cursor-pointer"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  {/* Hexagon Glow Effect - Behind */}
                  <div
                    className="absolute inset-0 transition-all duration-300"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      filter: `drop-shadow(0 0 8px ${skill.glow}) drop-shadow(0 0 12px ${skill.glow}) drop-shadow(0 0 16px ${skill.glow})`,
                    }}
                  />

                  {/* Hexagon Border Outer */}
                  <div
                    className="absolute inset-0 transition-all duration-300"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      backgroundColor: skill.color,
                    }}
                  />

                  {/* Hexagon Inner - Transparent (creates border effect) */}
                  <div
                    className="absolute inset-[3px] transition-all duration-300 bg-slate-50 dark:bg-slate-900"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                  />

                  {/* Enhanced Hover Glow */}
                  <div
                    className="absolute -inset-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"
                    style={{
                      background: `radial-gradient(circle, ${skill.glow}, transparent)`,
                    }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-2 z-10">
                    <div className="text-white mb-1 group-hover:scale-125 transition-transform duration-300">
                      {skillIconMap[skill.name] || (
                        <Hexagon className="w-6 h-6 md:w-7 md:h-7" />
                      )}
                    </div>
                    <div className="text-white text-[10px] md:text-xs font-bold text-center leading-tight">
                      {skill.name}
                    </div>
                  </div>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      background:
                        "linear-gradient(135deg, transparent 0%, white 50%, transparent 100%)",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats with Glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-slate-700">
            <div className="grid grid-cols-3 gap-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-2xl" />
                <div className="relative">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                    30+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Technologies
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-2xl" />
                <div className="relative">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    6
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Colonies
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-2xl" />
                <div className="relative">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                    5+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Years Learning
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
