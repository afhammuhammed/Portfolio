"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/portfolioData";
import { 
  X, 
  CheckCircle2, 
  Award,
  Layers,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-zinc-200 p-6 sm:p-8 shadow-2xl z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-lg bg-zinc-100 border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Category & Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-zinc-100 border border-zinc-200 text-amber-700">
              {project.categoryLabel}
            </span>
            {project.featuredBadge && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 border border-amber-200 text-amber-700">
                ★ {project.featuredBadge}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mb-2">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-zinc-500 mb-6">
            {project.subtitle}
          </p>

          {/* Deep dive description */}
          <div className="mb-6 p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-600 text-sm leading-relaxed">
            {project.detailedDescription}
          </div>

          {/* Metrics & Highlights */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span>Key Recognitions &amp; Impact</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-white border border-zinc-200 flex items-start gap-2.5 text-xs text-zinc-700 shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Milestones / Execution */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-amber-600" />
              <span>Project Execution &amp; Phases</span>
            </h4>
            <div className="space-y-2">
              {project.milestones.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-zinc-600 font-normal"
                >
                  <span className="w-5 h-5 rounded-full bg-zinc-100 border border-zinc-200 text-amber-700 flex items-center justify-center shrink-0 text-[10px] font-semibold">
                    {idx + 1}
                  </span>
                  <span className="pt-0.5 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="mb-8 pt-4 border-t border-zinc-100">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2.5">
              Competencies &amp; Technologies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 border border-zinc-200/80 text-zinc-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-zinc-100 text-zinc-700 text-xs font-medium border border-zinc-200 hover:text-zinc-950 hover:bg-zinc-200/70 transition-colors cursor-pointer"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-900 text-white text-xs font-medium hover:bg-zinc-800 transition-all shadow-sm"
            >
              <span>Discuss this initiative</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
