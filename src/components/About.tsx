"use client";

import React, { useState } from "react";
import { personalInfo, corePillars } from "@/data/portfolioData";
import { 
  BrainCircuit, 
  TrendingUp, 
  BookOpen, 
  Compass, 
  CheckCircle2, 
  Sparkles,
  Award,
  Layers
} from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const [activePillar, setActivePillar] = useState<number>(0);

  const iconMap: Record<string, React.ReactNode> = {
    BrainCircuit: <BrainCircuit className="w-5 h-5 text-amber-600" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-amber-600" />,
    BookOpen: <BookOpen className="w-5 h-5 text-amber-600" />,
    Compass: <Compass className="w-5 h-5 text-amber-600" />
  };

  return (
    <section id="about" className="py-24 border-t border-zinc-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold tracking-wider uppercase text-zinc-600 mb-3">
            <Layers className="w-3.5 h-3.5 text-amber-600" />
            <span>01 / ABOUT & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            The Convergence of Technology &amp; Narrative
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg max-w-3xl leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>

        {/* Narrative Split: Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200 relative overflow-hidden shadow-xs hover:border-zinc-300 transition-all"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Career Trajectory</span>
            </div>
            <h3 className="text-xl font-semibold text-zinc-900 mb-3">
              Hybrid Professional Footprint
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              {personalInfo.vision}
            </p>
            <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center gap-4 text-xs font-medium text-zinc-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Data-Driven Analytics
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Entrepreneurial Focus
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200 relative overflow-hidden shadow-xs hover:border-zinc-300 transition-all"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>Multidisciplinary Mastery</span>
            </div>
            <h3 className="text-xl font-semibold text-zinc-900 mb-3">
              From Novel Writing to AI Systems
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Writing a full-length crime thriller requires deep psychological empathy, meticulous plotting, and unrelenting discipline—the exact qualities required to architect high-performance digital marketing systems and AI prompt workflows.
            </p>
            <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center gap-4 text-xs font-medium text-zinc-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                Published Crime-Thriller Novel
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                LPU Academic Excellence
              </span>
            </div>
          </motion.div>
        </div>

        {/* 4 Pillars Grid */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-6">
            Core Competencies &amp; Strategic Pillars
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {corePillars.map((pillar, index) => {
              const isSelected = activePillar === index;
              return (
                <div
                  key={pillar.title}
                  onClick={() => setActivePillar(index)}
                  className={`p-5 rounded-xl transition-all cursor-pointer border ${
                    isSelected
                      ? "bg-white border-amber-500 shadow-md shadow-amber-500/5 ring-1 ring-amber-500/20"
                      : "bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-xs"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200/60 flex items-center justify-center">
                      {iconMap[pillar.icon]}
                    </div>
                    <span className="text-[11px] font-semibold text-zinc-400">
                      0{index + 1}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-zinc-900 mb-2 tracking-tight">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-zinc-500 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                  <div className="space-y-1.5 pt-3 border-t border-zinc-100">
                    {pillar.bullets.map((b) => (
                      <div
                        key={b}
                        className="text-[11px] text-zinc-700 flex items-center gap-1.5 font-medium"
                      >
                        <span className="w-1 h-1 rounded-full bg-amber-500" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
