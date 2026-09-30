"use client";

import React from "react";
import { skillCategories } from "@/data/portfolioData";
import { Cpu, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-zinc-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold tracking-wider uppercase text-zinc-600 mb-3">
            <Cpu className="w-3.5 h-3.5 text-amber-600" />
            <span>05 / CAPABILITIES &amp; TOOLSET</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-2">
            Skills &amp; Technical Competencies
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base max-w-xl">
            A versatile toolkit spanning artificial intelligence, computational marketing, narrative crafting, and institutional diplomacy.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-zinc-100">
                  <Terminal className="w-4 h-4 text-amber-600" />
                  <h3 className="text-base font-semibold text-zinc-900 tracking-tight">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        skill.highlight
                          ? "bg-amber-50 text-amber-900 border border-amber-200 shadow-xs hover:border-amber-300"
                          : "bg-zinc-100 text-zinc-700 border border-zinc-200/80 hover:border-zinc-300 hover:bg-zinc-200/60 hover:text-zinc-900"
                      }`}
                    >
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      )}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] font-medium text-zinc-500">
                <span>{group.skills.length} Competencies</span>
                <span className="text-amber-700 font-medium">Active Focus</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
