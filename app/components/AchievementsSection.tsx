"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, Code, Trophy, Users } from "lucide-react";
import { achievements } from "./SharedData";

// Icon mapping for achievements
const iconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
};

export default function AchievementsSection() {
  return (
    <section className="py-20 px-4" id="achievements">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
            Achievements & Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
            Milestones and continuous learning journey
          </p>

          {/* Key Achievements */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                  {iconMap[achievement.iconName]}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Production Impact Stats */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 mb-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Production Impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">2-3K+</div>
                <div className="text-white/70 text-sm">Total Users Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-white/70 text-sm">Event Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">200+</div>
                <div className="text-white/70 text-sm">APIs Developed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">5+</div>
                <div className="text-white/70 text-sm">Live Applications</div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2 text-lg">
              <Award className="w-6 h-6 text-blue-500" />
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "Supervised ML: Regression & Classification",
                  issuer: "DeepLearning.AI",
                  instructor: "Andrew Ng",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Docker Training Course for Absolute Beginner",
                  issuer: "KodeKloud",
                  instructor: "",
                  color: "from-cyan-500 to-blue-500",
                },
                {
                  title: "AWS Academy Graduate - Cloud Foundations",
                  issuer: "Amazon Web Services",
                  instructor: "",
                  color: "from-orange-500 to-yellow-500",
                },
              ].map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 dark:bg-slate-700 rounded-xl p-4 hover:shadow-md transition-all duration-300"
                >
                  <div
                    className={`w-10 h-1 bg-gradient-to-r ${cert.color} rounded mb-3`}
                  ></div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">
                    {cert.issuer}
                    {cert.instructor && ` • ${cert.instructor}`}
                  </p>
                  <CheckCircle className="w-4 h-4 text-green-500 mt-2" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
