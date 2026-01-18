"use client";

import { motion } from "framer-motion";
import {
  Brain,
  CheckCircle,
  Code,
  Rocket,
  TrendingUp,
  Zap,
} from "lucide-react";
import { jsConcepts, performanceMetrics } from "./SharedData";

export default function JavaScriptSection() {
  return (
    <section
      className="py-20 px-4 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
      id="javascript"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 px-6 py-3 bg-yellow-400 dark:bg-yellow-600 rounded-full">
              <Zap className="w-6 h-6 text-yellow-900 dark:text-yellow-100" />
              <span className="text-yellow-900 dark:text-yellow-100 font-bold text-lg">
                JavaScript Expertise
              </span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Deep JavaScript Mastery
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Beyond syntax - understanding how JavaScript really works under the
            hood, from execution contexts to performance optimization
          </p>
        </motion.div>

        {/* Core Concepts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {jsConcepts.map((concept, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 group"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${concept.color} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {concept.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {concept.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                {concept.description}
              </p>
              <div className="pt-4 border-t border-gray-200 dark:border-slate-700">
                <div className="flex items-start gap-2">
                  <Rocket className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                    {concept.example}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance Optimization Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-3xl shadow-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <TrendingUp className="w-7 h-7 text-green-400" />
            Performance Optimization Impact
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {performanceMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <h4 className="font-semibold text-white mb-3">
                  {metric.metric}
                </h4>
                <div className="space-y-2 mb-3">
                  <div className="flex justify-between items-center">
                    <span className="text-red-400 text-sm">Before:</span>
                    <span className="text-white/70 text-sm">
                      {metric.before}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-400 text-sm">After:</span>
                    <span className="text-white/70 text-sm">
                      {metric.after}
                    </span>
                  </div>
                </div>
                <div className="pt-3 border-t border-white/20">
                  <div className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-bold mb-2">
                    {metric.improvement}
                  </div>
                  <p className="text-xs text-white/60">{metric.technique}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Code Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <Brain className="w-7 h-7 text-purple-500" />
            JavaScript Philosophy
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                What I Focus On
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  Understanding the &quot;why&quot; behind language features,
                  not just the &quot;how&quot;
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  Writing performant code that scales with user load
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  Leveraging async patterns for non-blocking operations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  Memory management and avoiding common pitfalls
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  Building reusable patterns with closures and higher-order
                  functions
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-500" />
                Real-World Applications
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  Built custom middleware with closure-based state management
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  Optimized event handlers for high-frequency user interactions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  Implemented efficient data structures (LRU Cache, Custom
                  Queues)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  Debugged complex async race conditions in production
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  Reduced memory leaks through proper cleanup and GC
                  understanding
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
