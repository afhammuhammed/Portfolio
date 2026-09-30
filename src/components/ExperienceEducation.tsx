"use client";

import React, { useState } from "react";
import { educationList, milestonesList } from "@/data/portfolioData";
import { 
  GraduationCap, 
  Milestone, 
  MapPin, 
  CheckCircle2, 
  Building,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

export default function ExperienceEducation() {
  const [activeTab, setActiveTab] = useState<"education" | "milestones">("education");

  return (
    <section id="experience" className="py-24 border-t border-zinc-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold tracking-wider uppercase text-zinc-600 mb-3">
              <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
              <span>03 / ACADEMICS &amp; MILESTONES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-2">
              Education &amp; Key Trajectory
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base max-w-xl">
              Academic foundation at Lovely Professional University and significant leadership positions held throughout my journey.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center p-1 rounded-xl bg-white border border-zinc-200 shadow-xs self-start md:self-auto">
            <button
              onClick={() => setActiveTab("education")}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "education"
                  ? "bg-zinc-900 text-white font-semibold shadow-xs"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </button>
            <button
              onClick={() => setActiveTab("milestones")}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "milestones"
                  ? "bg-zinc-900 text-white font-semibold shadow-xs"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              <Milestone className="w-3.5 h-3.5" />
              <span>Major Milestones</span>
            </button>
          </div>
        </div>

        {/* Content Section */}
        {activeTab === "education" ? (
          <div className="space-y-6">
            {educationList.map((edu, idx) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 border border-amber-200 text-amber-700 inline-block mb-2">
                      Academic Degree
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                      {edu.degree}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-zinc-500 mt-1">
                      <span className="flex items-center gap-1.5 text-zinc-700">
                        <Building className="w-3.5 h-3.5 text-amber-600" />
                        {edu.institution}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-lg bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-700 shrink-0 self-start">
                    {edu.period}
                  </div>
                </div>

                <p className="text-sm text-zinc-600 mb-5 leading-relaxed bg-zinc-50 p-4 rounded-xl border border-zinc-200/80">
                  {edu.focus}
                </p>

                <div className="space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                    Key Highlights &amp; Involvements:
                  </div>
                  {edu.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-xs text-zinc-600 leading-relaxed font-normal"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {milestonesList.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all relative"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 border border-amber-200 text-amber-700">
                        {item.badge}
                      </span>
                      <span className="text-xs font-medium text-zinc-500">
                        {item.organization}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                      {item.title}
                    </h3>
                    <div className="text-xs font-medium text-amber-600 mt-1">
                      {item.role}
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-lg bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-700 shrink-0 self-start">
                    {item.period}
                  </div>
                </div>

                <p className="text-sm text-zinc-600 mb-5 leading-relaxed bg-zinc-50 p-4 rounded-xl border border-zinc-200/80">
                  {item.description}
                </p>

                <div className="space-y-2">
                  {item.achievements.map((ach, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-xs text-zinc-600 font-normal"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
