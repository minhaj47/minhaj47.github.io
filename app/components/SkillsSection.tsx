"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Brain,
  CircleDot,
  Cloud,
  Code,
  Container,
  Cylinder,
  Database,
  FileCode2,
  Flame,
  GitBranch,
  Hexagon,
  Layers,
  Leaf,
  Link,
  Plug,
  Radio,
  Rocket,
  Search,
  Send,
  Server,
  Share2,
  Smartphone,
  Sparkles,
  Triangle,
  Wind,
  Zap,
} from "lucide-react";
import { categoryColors, skillsHoneycomb } from "./SharedData";

// Icon mapping for skills
const skillIconMap: Record<string, React.ReactNode> = {
  Hexagon: <Hexagon className="w-6 h-6 md:w-7 md:h-7" />,
  Zap: <Zap className="w-6 h-6 md:w-7 md:h-7" />,
  Rocket: <Rocket className="w-6 h-6 md:w-7 md:h-7" />,
  Plug: <Plug className="w-6 h-6 md:w-7 md:h-7" />,
  Share2: <Share2 className="w-6 h-6 md:w-7 md:h-7" />,
  Atom: <Atom className="w-6 h-6 md:w-7 md:h-7" />,
  Triangle: <Triangle className="w-6 h-6 md:w-7 md:h-7" />,
  FileCode2: <FileCode2 className="w-6 h-6 md:w-7 md:h-7" />,
  Wind: <Wind className="w-6 h-6 md:w-7 md:h-7" />,
  Smartphone: <Smartphone className="w-6 h-6 md:w-7 md:h-7" />,
  Database: <Database className="w-6 h-6 md:w-7 md:h-7" />,
  Cylinder: <Cylinder className="w-6 h-6 md:w-7 md:h-7" />,
  Leaf: <Leaf className="w-6 h-6 md:w-7 md:h-7" />,
  Layers: <Layers className="w-6 h-6 md:w-7 md:h-7" />,
  Link: <Link className="w-6 h-6 md:w-7 md:h-7" />,
  Search: <Search className="w-6 h-6 md:w-7 md:h-7" />,
  CircleDot: <CircleDot className="w-6 h-6 md:w-7 md:h-7" />,
  Sparkles: <Sparkles className="w-6 h-6 md:w-7 md:h-7" />,
  Brain: <Brain className="w-6 h-6 md:w-7 md:h-7" />,
  Code: <Code className="w-6 h-6 md:w-7 md:h-7" />,
  Flame: <Flame className="w-6 h-6 md:w-7 md:h-7" />,
  Radio: <Radio className="w-6 h-6 md:w-7 md:h-7" />,
  Container: <Container className="w-6 h-6 md:w-7 md:h-7" />,
  GitBranch: <GitBranch className="w-6 h-6 md:w-7 md:h-7" />,
  Cloud: <Cloud className="w-6 h-6 md:w-7 md:h-7" />,
  Server: <Server className="w-6 h-6 md:w-7 md:h-7" />,
  Send: <Send className="w-6 h-6 md:w-7 md:h-7" />,
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
                      {skillIconMap[skill.icon] || (
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
