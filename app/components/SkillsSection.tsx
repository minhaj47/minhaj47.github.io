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

// Unified honeycomb positions for all 30 skills - properly spaced
// Hexagon dimensions: width=85px, height=98px (zoomed)
// For proper honeycomb: H_SPACING = width, V_SPACING = height * 0.75
const HEX_WIDTH = 115;
const HEX_HEIGHT = 128;
const H_SPACING = HEX_WIDTH + 2; // Add small gap
const V_SPACING = HEX_HEIGHT * 0.78; // Proper vertical for honeycomb interlocking

// Build honeycomb grid positions - 6 rows arranged by category
// Row pattern: 5, 5, 5, 5, 5, 5 hexagons (30 total)
const unifiedHexPositions = [
  // Row 1 - Backend (5 hexagons)
  { x: -2 * H_SPACING, y: -2.5 * V_SPACING },
  { x: -1 * H_SPACING, y: -2.5 * V_SPACING },
  { x: 0, y: -2.5 * V_SPACING },
  { x: 1 * H_SPACING, y: -2.5 * V_SPACING },
  { x: 2 * H_SPACING, y: -2.5 * V_SPACING },
  // Row 2 - Frontend (5 hexagons, offset by half)
  { x: -1.5 * H_SPACING, y: -1.5 * V_SPACING },
  { x: -0.5 * H_SPACING, y: -1.5 * V_SPACING },
  { x: 0.5 * H_SPACING, y: -1.5 * V_SPACING },
  { x: 1.5 * H_SPACING, y: -1.5 * V_SPACING },
  { x: 2.5 * H_SPACING, y: -1.5 * V_SPACING },
  // Row 3 - Database (5 hexagons)
  { x: -2 * H_SPACING, y: -0.5 * V_SPACING },
  { x: -1 * H_SPACING, y: -0.5 * V_SPACING },
  { x: 0, y: -0.5 * V_SPACING },
  { x: 1 * H_SPACING, y: -0.5 * V_SPACING },
  { x: 2 * H_SPACING, y: -0.5 * V_SPACING },
  // Row 4 - AI/ML (5 hexagons, offset by half)
  { x: -1.5 * H_SPACING, y: 0.5 * V_SPACING },
  { x: -0.5 * H_SPACING, y: 0.5 * V_SPACING },
  { x: 0.5 * H_SPACING, y: 0.5 * V_SPACING },
  { x: 1.5 * H_SPACING, y: 0.5 * V_SPACING },
  { x: 2.5 * H_SPACING, y: 0.5 * V_SPACING },
  // Row 5 - Mobile (5 hexagons)
  { x: -2 * H_SPACING, y: 1.5 * V_SPACING },
  { x: -1 * H_SPACING, y: 1.5 * V_SPACING },
  { x: 0, y: 1.5 * V_SPACING },
  { x: 1 * H_SPACING, y: 1.5 * V_SPACING },
  { x: 2 * H_SPACING, y: 1.5 * V_SPACING },
  // Row 6 - DevOps (5 hexagons, offset by half)
  { x: -1.5 * H_SPACING, y: 2.5 * V_SPACING },
  { x: -0.5 * H_SPACING, y: 2.5 * V_SPACING },
  { x: 0.5 * H_SPACING, y: 2.5 * V_SPACING },
  { x: 1.5 * H_SPACING, y: 2.5 * V_SPACING },
  { x: 2.5 * H_SPACING, y: 2.5 * V_SPACING },
];

// Category labels positioned around the honeycomb - properly aligned with rows
const categoryLabelPositions = [
  {
    category: "Backend",
    x: 2.95 * H_SPACING,
    y: -2.1 * V_SPACING,
    align: "left",
  },
  {
    category: "Frontend",
    x: -2.85 * H_SPACING,
    y: -1.1 * V_SPACING,
    align: "right",
  },
  {
    category: "Database",
    x: 2.95 * H_SPACING,
    y: -0.1 * V_SPACING,
    align: "left",
  },
  {
    category: "AI/ML",
    x: -2.61 * H_SPACING,
    y: 0.9 * V_SPACING,
    align: "right",
  },
  {
    category: "DevOps",
    x: 2.95 * H_SPACING,
    y: 1.9 * V_SPACING,
    align: "left",
  },
  {
    category: "Mobile",
    x: -2.7 * H_SPACING,
    y: 2.9 * V_SPACING,
    align: "right",
  },
];

export default function SkillsSection() {
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
          className="text-center"
        >
          <span className="px-4 py-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium inline-block mb-4">
            🐝 Tech Stack Beehive
          </span>
          <h2 className="text-4xl  md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Each colony represents a domain of expertise, working together in
            perfect harmony
          </p>
        </motion.div>

        {/* Unified Honeycomb - All skills merged */}
        <div className="relative flex justify-center items-center overflow-visible">
          <div
            className="relative"
            style={{ width: "1200px", height: "750px" }}
          >
            {/* Category Labels positioned around the honeycomb */}
            {categoryLabelPositions.map((labelPos, idx) => {
              const catColor = categoryColors[labelPos.category];
              return (
                <motion.div
                  key={labelPos.category}
                  initial={{
                    opacity: 0,
                    x: labelPos.align === "left" ? 30 : -30,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className={`absolute hidden lg:flex items-center gap-0 whitespace-nowrap z-30 ${
                    labelPos.align === "right" ? "flex-row-reverse" : ""
                  }`}
                  style={{
                    left: `calc(50% + ${labelPos.x}px)`,
                    top: `calc(50% + ${labelPos.y}px)`,
                    transform: `translateY(-50%)`,
                  }}
                >
                  {/* Connector line with gradient */}
                  <div
                    className={`h-[1px] w-14 ${labelPos.align === "left" ? "bg-gradient-to-r" : "bg-gradient-to-l"}`}
                    style={{
                      backgroundImage: `linear-gradient(${labelPos.align === "left" ? "to right" : "to left"}, ${catColor?.bg}80, ${catColor?.bg})`,
                    }}
                  />
                  {/* Modern pill label */}
                  <div className="relative group/label">
                    <div
                      className="absolute inset-0 rounded-lg blur-md opacity-40 group-hover/label:opacity-60 transition-opacity"
                      style={{ backgroundColor: catColor?.bg }}
                    />
                    <div
                      className="relative flex items-center gap-2 px-3 py-1.5 rounded-lg backdrop-blur-sm border"
                      style={{
                        background: `linear-gradient(135deg, ${catColor?.bg}15, ${catColor?.bg}25)`,
                        borderColor: `${catColor?.bg}50`,
                      }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          backgroundColor: catColor?.bg,
                          boxShadow: `0 0 6px ${catColor?.bg}`,
                        }}
                      />
                      <span
                        className="text-[11px] font-semibold tracking-wide uppercase"
                        style={{ color: catColor?.bg }}
                      >
                        {labelPos.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Mobile Category Legend */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-2 md:hidden">
              {Object.entries(categoryColors).map(([key, cat]) => (
                <div
                  key={key}
                  className="flex items-center gap-1 px-2 py-1 bg-white dark:bg-slate-800 rounded-full shadow-sm border"
                  style={{ borderColor: cat.bg }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: cat.bg }}
                  />
                  <span
                    className="text-[10px] font-medium"
                    style={{ color: cat.bg }}
                  >
                    {key}
                  </span>
                </div>
              ))}
            </div>

            {/* All hexagons in unified honeycomb */}
            {skillsHoneycomb.map((skill, idx) => {
              const pos = unifiedHexPositions[idx] || { x: 0, y: 0 };
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.02,
                    type: "spring",
                    stiffness: 120,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.2,
                    zIndex: 50,
                    transition: { duration: 0.2 },
                  }}
                  className="group absolute"
                  style={{
                    left: `calc(50% + ${pos.x}px)`,
                    top: `calc(50% + ${pos.y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className="relative cursor-pointer"
                    style={{
                      width: `${HEX_WIDTH}px`,
                      height: `${HEX_HEIGHT}px`,
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                  >
                    {/* Hexagon Glow Effect */}
                    <div
                      className="absolute inset-0 transition-all duration-300"
                      style={{
                        clipPath:
                          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        filter: `drop-shadow(0 0 6px ${skill.glow}) drop-shadow(0 0 10px ${skill.glow})`,
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

                    {/* Hexagon Inner */}
                    <div
                      className="absolute inset-[2px] transition-all duration-300 bg-slate-50 dark:bg-slate-900"
                      style={{
                        clipPath:
                          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      }}
                    />

                    {/* Enhanced Hover Glow */}
                    <div
                      className="absolute -inset-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                      style={{
                        background: `radial-gradient(circle, ${skill.glow}, transparent)`,
                      }}
                    />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-1 z-10">
                      <div className="text-white mb-1 group-hover:scale-110 transition-transform duration-300">
                        {skillIconMap[skill.icon] || (
                          <Hexagon className="w-6 h-6 md:w-7 md:h-7" />
                        )}
                      </div>
                      <div className="text-white text-[9px] md:text-[10px] font-bold text-center leading-tight px-1">
                        {skill.name}
                      </div>
                    </div>

                    {/* Shine effect on hover */}
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
