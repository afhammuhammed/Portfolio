"use client";

import React from "react";
import { personalInfo } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-zinc-200 bg-white/80 text-zinc-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-7 h-7 rounded bg-zinc-100 border border-zinc-200 flex items-center justify-center text-xs font-bold text-amber-600">
            AMA
          </div>
          <div className="text-xs font-medium text-zinc-600">
            <span>© {new Date().getFullYear()} {personalInfo.name}.</span>{" "}
            <span className="text-zinc-400">All rights reserved.</span>
          </div>
        </div>

        {/* Operational status */}
        <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Operational · LPU Punjab / Kerala</span>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-700 hover:text-zinc-950 hover:border-zinc-300 transition-all cursor-pointer hover:bg-zinc-200/70"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-amber-600" />
        </button>
      </div>
    </footer>
  );
}
