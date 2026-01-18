"use client";

import { motion } from "framer-motion";
import { Cpu, ExternalLink, Github, Play, Trophy, Zap } from "lucide-react";
import { useState } from "react";
import { Project, projects } from "./SharedData";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            From production systems to learning experiments
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { key: "all", label: "All" },
              { key: "production", label: "Production" },
              { key: "ai", label: "AI/ML" },
              { key: "automation", label: "Automation" },
              { key: "hackathon", label: "Hackathon" },
              { key: "learning", label: "Learning" },
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              fadeInUp={fadeInUp}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  fadeInUp: {
    initial: { opacity: number; y: number };
    animate: { opacity: number; y: number };
    transition: { duration: number };
  };
}

function ProjectCard({ project, fadeInUp }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
    >
      {/* Project Header */}
      <div className={`h-32 bg-gradient-to-r ${project.gradient} p-6 relative`}>
        {project.isHackathon && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <Trophy className="w-3 h-3" /> Winner
          </div>
        )}
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="text-white/80 text-sm">{project.subtitle}</p>
        <span className="absolute bottom-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs">
          {project.semester}
        </span>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Key Features:
          </h4>
          <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
            {project.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-1">
                <span className="text-green-500">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tech.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 rounded text-xs"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 rounded text-xs">
              +{project.tech.length - 5}
            </span>
          )}
        </div>

        {/* Impact Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
            <Zap className="w-3 h-3" />
            {project.impact}
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-xs font-medium hover:shadow-md transition-all"
            >
              <ExternalLink className="w-3 h-3" /> Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 bg-gray-900 dark:bg-gray-700 text-white rounded-lg text-xs font-medium hover:shadow-md transition-all"
            >
              <Github className="w-3 h-3" /> Code
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 bg-red-500 text-white rounded-lg text-xs font-medium hover:shadow-md transition-all"
            >
              <Play className="w-3 h-3" /> Demo
            </a>
          )}
          {project.mobileAppUrl && (
            <a
              href={project.mobileAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 bg-green-500 text-white rounded-lg text-xs font-medium hover:shadow-md transition-all"
            >
              <Cpu className="w-3 h-3" /> App
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
