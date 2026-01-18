"use client";

import { motion } from "framer-motion";

// Surrounding hexagon positions - arranged in a loose honeycomb pattern around the center
const surroundingHexPositions = [
  // Inner ring - closer to center
  { x: -180, y: -100, scale: 0.6, opacity: 0.15 },
  { x: 180, y: -100, scale: 0.55, opacity: 0.12 },
  { x: -200, y: 80, scale: 0.5, opacity: 0.1 },
  { x: 200, y: 80, scale: 0.65, opacity: 0.14 },
  { x: 0, y: -180, scale: 0.5, opacity: 0.1 },
  { x: 0, y: 200, scale: 0.55, opacity: 0.12 },

  // Middle ring
  { x: -320, y: -40, scale: 0.45, opacity: 0.08 },
  { x: 320, y: -40, scale: 0.5, opacity: 0.1 },
  { x: -280, y: 160, scale: 0.4, opacity: 0.07 },
  { x: 280, y: 160, scale: 0.45, opacity: 0.08 },
  { x: -150, y: -220, scale: 0.4, opacity: 0.07 },
  { x: 150, y: -220, scale: 0.45, opacity: 0.08 },
  { x: -150, y: 260, scale: 0.35, opacity: 0.06 },
  { x: 150, y: 260, scale: 0.4, opacity: 0.07 },

  // Outer ring - farthest from center
  { x: -400, y: -150, scale: 0.35, opacity: 0.05 },
  { x: 400, y: -150, scale: 0.3, opacity: 0.04 },
  { x: -380, y: 100, scale: 0.3, opacity: 0.04 },
  { x: 380, y: 100, scale: 0.35, opacity: 0.05 },
  { x: -300, y: -200, scale: 0.25, opacity: 0.03 },
  { x: 300, y: -200, scale: 0.3, opacity: 0.04 },
  { x: -50, y: -300, scale: 0.3, opacity: 0.04 },
  { x: 50, y: 300, scale: 0.25, opacity: 0.03 },
  { x: -350, y: 250, scale: 0.25, opacity: 0.03 },
  { x: 350, y: 250, scale: 0.3, opacity: 0.04 },
];

// Hexagon SVG path for consistent shape
const HexagonOutline = ({
  size,
  strokeOpacity,
  className,
}: {
  size: number;
  strokeOpacity: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size * 1.15}
    viewBox="0 0 100 115"
    fill="none"
    className={className}
  >
    <path
      d="M50 2 L95 28 L95 87 L50 113 L5 87 L5 28 Z"
      stroke="currentColor"
      strokeWidth="1"
      strokeOpacity={strokeOpacity}
      fill="none"
    />
  </svg>
);

export default function SummarySection() {
  return (
    <section
      className="py-24 md:py-32 px-4 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
      id="summary"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="px-4 py-2 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 rounded-full text-sm font-medium inline-block mb-4">
            👑 The Queen Cell
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Summary
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            The central foundation around which all expertise revolves
          </p>
        </motion.div>

        {/* Queen Cell Honeycomb Layout */}
        <div className="relative flex justify-center items-center min-h-[500px] md:min-h-[600px]">
          {/* Surrounding outlined hexagons - symbolizing potential and growth */}
          {surroundingHexPositions.map((pos, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3 + idx * 0.03,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="absolute text-gray-400 dark:text-gray-600 hidden md:block"
              style={{
                left: `calc(50% + ${pos.x}px)`,
                top: `calc(50% + ${pos.y}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <HexagonOutline
                size={120 * pos.scale}
                strokeOpacity={pos.opacity * 5}
              />
            </motion.div>
          ))}

          {/* Mobile: Simplified surrounding hexagons */}
          <div className="md:hidden absolute inset-0">
            {[
              { x: -100, y: -80, scale: 0.5, opacity: 0.1 },
              { x: 100, y: -80, scale: 0.45, opacity: 0.08 },
              { x: -110, y: 80, scale: 0.4, opacity: 0.07 },
              { x: 110, y: 80, scale: 0.5, opacity: 0.1 },
              { x: 0, y: -130, scale: 0.35, opacity: 0.06 },
              { x: 0, y: 150, scale: 0.4, opacity: 0.07 },
            ].map((pos, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.05 }}
                viewport={{ once: true }}
                className="absolute text-gray-400 dark:text-gray-600"
                style={{
                  left: `calc(50% + ${pos.x}px)`,
                  top: `calc(50% + ${pos.y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <HexagonOutline
                  size={100 * pos.scale}
                  strokeOpacity={pos.opacity * 5}
                />
              </motion.div>
            ))}
          </div>

          {/* Central Queen Cell - Large Hexagon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            {/* Outer glow effect */}
            <div
              className="absolute inset-0 blur-3xl opacity-20 dark:opacity-15"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(251, 191, 36, 0.3) 0%, transparent 70%)",
                transform: "scale(1.5)",
              }}
            />

            {/* Queen Hexagon Container */}
            <div
              className="relative"
              style={{
                width: "min(340px, 85vw)",
                height: "min(390px, 98vw)",
              }}
            >
              {/* Hexagon Border - Outer */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  background:
                    "linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #B45309 100%)",
                }}
              />

              {/* Hexagon Inner Background */}
              <div
                className="absolute inset-[3px] bg-gradient-to-br from-white via-amber-50/30 to-white dark:from-slate-800 dark:via-slate-800 dark:to-slate-900"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              />

              {/* Subtle inner border */}
              <div
                className="absolute inset-[6px] border border-amber-200/30 dark:border-amber-700/20"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              />

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12">
                {/* Crown Icon */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                    <span className="text-lg md:text-xl">👑</span>
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 text-center"
                >
                  Full Stack Developer
                </motion.h3>

                {/* Divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="w-16 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mb-4"
                />

                {/* Summary Text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="text-xs md:text-sm text-gray-600 dark:text-gray-300 text-center leading-relaxed max-w-[240px] md:max-w-[260px]"
                >
                  Crafting scalable web solutions with expertise in modern
                  frameworks, AI integration, and cloud architecture. Passionate
                  about transforming complex problems into elegant, user-centric
                  experiences.
                </motion.p>

                {/* Key Attributes */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap justify-center gap-2 mt-4"
                >
                  {["Innovation", "Quality", "Impact"].map((trait, idx) => (
                    <span
                      key={trait}
                      className="px-2 py-1 text-[10px] md:text-xs font-medium text-amber-700 dark:text-amber-400 bg-amber-100/50 dark:bg-amber-900/20 rounded-full border border-amber-200/50 dark:border-amber-700/30"
                      style={{
                        animationDelay: `${idx * 0.1}s`,
                      }}
                    >
                      {trait}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 md:mt-16"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-amber-300 dark:to-amber-700" />
            <div className="w-2 h-2 rounded-full bg-amber-400/50 dark:bg-amber-600/50" />
            <div className="w-2 h-2 rounded-full bg-amber-500/70 dark:bg-amber-500/70" />
            <div className="w-2 h-2 rounded-full bg-amber-400/50 dark:bg-amber-600/50" />
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-amber-300 dark:to-amber-700" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
