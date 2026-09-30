"use client";

import React, { useState } from "react";
import { projects, Project } from "@/data/portfolioData";
import { 
  FolderGit2, 
  ArrowUpRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

const filterOptions = [
  { id: "all", label: "All Projects" },
  { id: "publication", label: "Published Novel" },
  { id: "ai-strategy", label: "AI & Marketing" },
  { id: "research", label: "Research & Innovation" },
  { id: "leadership", label: "Governance" },
];

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 border-t border-zinc-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold tracking-wider uppercase text-zinc-600 mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-amber-600" />
              <span>02 / SELECTED WORKS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-2">
              Featured Initiatives &amp; Creations
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base max-w-xl">
              From a full-length published crime novel to computational marketing algorithms and international research frameworks.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white border border-zinc-200 shadow-xs self-start md:self-auto">
            {filterOptions.map((filter) => {
              const active = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    active
                      ? "bg-zinc-900 text-white font-semibold shadow-xs"
                      : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const isHighlight = project.featured;
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  onClick={() => onSelectProject(project)}
                  className={`group relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 border ${
                    isHighlight
                      ? "bg-gradient-to-b from-white to-amber-50/25 border-amber-400/60 hover:border-amber-500 shadow-lg shadow-amber-500/5"
                      : "bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-md"
                  }`}
                >
                  {/* Top Row: Category & Badges */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold tracking-wide bg-zinc-100 border border-zinc-200 text-amber-700">
                          {project.categoryLabel}
                        </span>
                        {project.featuredBadge && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-amber-50 border border-amber-200 text-amber-700">
                            ★ {project.featuredBadge}
                          </span>
                        )}
                      </div>

                      <div className="w-8 h-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-500 group-hover:text-zinc-900 group-hover:border-zinc-300 group-hover:bg-zinc-200/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 mb-2 group-hover:text-amber-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-zinc-500 mb-3">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom: Tags & Milestone Metric */}
                  <div>
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="mb-4 pt-3 border-t border-zinc-100 flex items-center gap-2 text-xs font-medium text-zinc-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span className="truncate text-zinc-700">
                          {project.metrics[0]}
                        </span>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[11px] font-medium bg-zinc-100 border border-zinc-200/80 text-zinc-600 group-hover:text-zinc-900 group-hover:border-zinc-300 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-1.5 py-0.5 text-[11px] font-medium text-zinc-400">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
