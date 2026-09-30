"use client";

import React, { useEffect } from "react";
import { personalInfo, educationList, honorsList } from "@/data/portfolioData";
import { X, Printer, Mail, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white border border-zinc-200 p-6 sm:p-10 shadow-2xl z-10 text-zinc-800"
        >
          {/* Top Bar with actions */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-200">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Curriculum Vitae · Executive Summary
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => window.print()}
                className="p-2 rounded-lg bg-zinc-100 border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/70 transition-colors cursor-pointer"
                title="Print Resume"
              >
                <Printer className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                aria-label="Close"
                className="p-2 rounded-lg bg-zinc-100 border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/70 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Resume Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-base font-medium text-amber-700 mt-1">
              BBA (AI &amp; Digital Marketing) · Published Author
            </p>
            <div className="mt-3 flex flex-wrap gap-4 text-xs font-medium text-zinc-500">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-zinc-400" />
                {personalInfo.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                LPU Punjab / Kerala, India
              </span>
            </div>
          </div>

          {/* Objective / Vision */}
          <div className="mb-6 p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-700 leading-relaxed italic">
            &ldquo;{personalInfo.vision}&rdquo;
          </div>

          {/* Education */}
          <div className="mb-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-700 mb-4 pb-1 border-b border-zinc-200">
              Education
            </h2>
            <div className="space-y-4">
              {educationList.map((edu) => (
                <div key={edu.institution} className="text-xs">
                  <div className="flex justify-between font-semibold text-zinc-900 text-sm">
                    <span>{edu.degree}</span>
                    <span className="text-xs text-zinc-400 font-normal">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-zinc-500 font-medium text-xs mb-1">
                    {edu.institution}, {edu.location}
                  </div>
                  <p className="text-zinc-600 leading-relaxed">{edu.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Signature Publication */}
          <div className="mb-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-700 mb-4 pb-1 border-b border-zinc-200">
              Signature Publication &amp; Writing
            </h2>
            <div className="text-xs">
              <div className="flex justify-between font-semibold text-zinc-900 text-sm">
                <span>&ldquo;It&apos;s Just a Character&rdquo; (Published Novel)</span>
                <span className="text-xs font-medium text-amber-700">Author &amp; Creator</span>
              </div>
              <p className="text-zinc-600 leading-relaxed mt-1">
                Full-length psychological crime-thriller exploring deep themes of identity and mystery. Officially unveiled and released in the presence of the Honorable Chief Minister and the Education Minister of Kerala.
              </p>
            </div>
          </div>

          {/* Leadership & Accolades */}
          <div className="mb-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-700 mb-4 pb-1 border-b border-zinc-200">
              Key Honors &amp; Diplomatic Accolades
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {honorsList.slice(0, 6).map((h) => (
                <div key={h.title} className="p-3 rounded-lg bg-zinc-50 border border-zinc-200/80">
                  <div className="font-semibold text-zinc-900">{h.title}</div>
                  <div className="text-amber-700 font-medium text-[11px] mb-1">{h.award}</div>
                  <p className="text-zinc-600 text-[11px] leading-relaxed">{h.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-700 mb-4 pb-1 border-b border-zinc-200">
              Core Competencies
            </h2>
            <div className="flex flex-wrap gap-2 text-xs font-medium">
              {[
                "AI Marketing Integration",
                "Prompt Engineering",
                "Predictive Analytics",
                "Digital Campaigning",
                "Psychological Character Writing",
                "Model United Nations Diplomacy",
                "State-Level Public Speaking",
                "Institutional Governance",
                "Kung Fu (Orange Belt)"
              ].map((c) => (
                <span key={c} className="px-2.5 py-1 rounded bg-zinc-100 border border-zinc-200 text-zinc-700">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="mt-8 pt-6 border-t border-zinc-200 flex items-center justify-between text-xs font-medium text-zinc-500">
            <span>Verified Portfolio of Afham Muhammed Ashraf</span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-zinc-900 text-white font-medium font-sans hover:bg-zinc-800 transition-colors cursor-pointer shadow-xs"
            >
              Done Reading
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
