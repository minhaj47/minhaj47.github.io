"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 pt-20"
      id="home"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                Full Stack Engineer & AI/ML Specialist
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Transforming
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ideas into Reality
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Passionate about creating scalable and intelligent solutions.
              Specializing in transforming complex ideas into beautifully
              crafted products.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-gray-50 dark:bg-slate-800 rounded-2xl">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  3K+
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Users Served
                </div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-slate-800 rounded-2xl">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  9+
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Projects Completed
                </div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-slate-800 rounded-2xl">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  1K+
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Problems Solved
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="group px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
              >
                Let&apos;s Talk
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-300"
              >
                View Projects
              </a>
            </div>

            {/* Trusted by text */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Trusted by universities and communities
            </p>
          </motion.div>

          {/* Right Side - Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8 shadow-2xl">
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-6 flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                  M
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Md. Minhajul Haque
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-1">
                  Computer Science & Engineering
                </p>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-6">
                  <MapPin className="w-4 h-4" />
                  <span>Sylhet, Bangladesh</span>
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                  <a
                    href="https://github.com/minhaj47"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-slate-600 rounded-full hover:scale-110 transition-transform duration-300 shadow-md"
                  >
                    <Github className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                  </a>
                  <a
                    href="https://linkedin.com/in/minhaj47"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-slate-600 rounded-full hover:scale-110 transition-transform duration-300 shadow-md"
                  >
                    <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                  </a>
                  <a
                    href="mailto:minhajul331047@gmail.com"
                    className="p-3 bg-white dark:bg-slate-600 rounded-full hover:scale-110 transition-transform duration-300 shadow-md"
                  >
                    <Mail className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                  </a>
                </div>
              </div>

              {/* Achievement Badges */}
              <div className="grid grid-cols-2 gap-3 mt-8">
                <div className="bg-white/80 dark:bg-slate-600/50 rounded-xl p-3 text-center">
                  <div className="text-yellow-500 mb-1">🏆</div>
                  <div className="text-xs font-semibold text-gray-900 dark:text-white">
                    Hackathon Winner
                  </div>
                </div>
                <div className="bg-white/80 dark:bg-slate-600/50 rounded-xl p-3 text-center">
                  <div className="text-green-500 mb-1">✓</div>
                  <div className="text-xs font-semibold text-gray-900 dark:text-white">
                    100% Success Rate
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
