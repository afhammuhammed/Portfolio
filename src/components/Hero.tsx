"use client";

import React from "react";
import Image from "next/image";
import { stats } from "@/data/portfolioData";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  BookOpen, 
  Download, 
  MapPin, 
  ShieldCheck 
} from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenResume?: () => void;
  onSelectProject?: (projectId: string) => void;
}

export default function Hero({ onOpenResume, onSelectProject }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-[300px] h-[250px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-medium text-zinc-700 mb-6 shadow-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for opportunities</span>
              <span className="text-zinc-300">|</span>
              <span className="text-amber-600 font-medium">LPU Punjab</span>
            </motion.div>

            {/* Name Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.1] mb-4"
            >
              Afham Muhammed <br />
              <span className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-600 bg-clip-text text-transparent">
                Ashraf
              </span>
            </motion.h1>

            {/* Core Focus Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl font-medium text-amber-600 tracking-tight mb-4 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>BBA (AI & Digital Marketing) · Published Author</span>
            </motion.p>

            {/* The Vision Blockquote */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative p-4 sm:p-5 rounded-xl bg-white border border-zinc-200/90 mb-8 max-w-xl shadow-xs group hover:border-zinc-300 transition-all"
            >
              <div className="absolute -top-3 left-4 px-2 py-0.5 bg-zinc-100 border border-zinc-200 rounded text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
                The Vision
              </div>
              <p className="text-sm sm:text-base text-zinc-700 italic leading-relaxed">
                &ldquo;Bridging the gap between artificial intelligence, business strategy, and human storytelling. A data-driven strategist by day, and a published crime-thriller author by night.&rdquo;
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 text-white font-medium text-sm hover:bg-zinc-800 active:scale-[0.98] transition-all shadow-md shadow-zinc-900/10"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white text-zinc-800 font-medium text-sm border border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300 active:scale-[0.98] transition-all shadow-xs"
              >
                <span>View Works</span>
              </a>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-transparent text-zinc-600 font-medium text-sm border border-transparent hover:text-zinc-900 hover:bg-zinc-100 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4 text-zinc-500" />
                  <span>Resume</span>
                </button>
              )}
            </motion.div>
          </div>

          {/* Right Column: High-End Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Decorative background glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 via-zinc-200/40 to-indigo-300/20 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000"></div>

              {/* Main Card */}
              <div className="relative rounded-2xl bg-white border border-zinc-200 p-4 sm:p-5 shadow-xl overflow-hidden">
                {/* Photo Container */}
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200">
                  <Image
                    src="/avatar.jpg"
                    alt="Afham Muhammed Ashraf"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    priority
                  />

                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Book badge overlay */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md border border-zinc-200/80 px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-xs">
                    <BookOpen className="w-3 h-3 text-amber-600" />
                    <span className="text-[11px] font-medium text-zinc-800">Author</span>
                  </div>

                  {/* Location badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-zinc-300">
                    <span className="flex items-center gap-1 font-medium text-[11px] text-zinc-100 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      Punjab / Kerala, IN
                    </span>
                    <span className="flex items-center gap-1 font-medium text-[11px] text-emerald-400 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      Verified
                    </span>
                  </div>
                </div>

                {/* Card Footer Info */}
                <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900">Lovely Professional Univ.</h3>
                    <p className="text-xs text-zinc-500">1st Year · AI & Digital Marketing</p>
                  </div>
                  <button
                    onClick={() => {
                      if (onSelectProject) {
                        onSelectProject("its-just-a-character");
                      } else {
                        const el = document.getElementById("projects");
                        el?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded bg-amber-50 border border-amber-200 text-amber-700 hover:bg-amber-100/80 transition-colors font-medium"
                  >
                    <span>&ldquo;It&apos;s Just a Character&rdquo;</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlight Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-xl bg-white border border-zinc-200/80 hover:border-zinc-300 shadow-xs hover:shadow-sm transition-all"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                {stat.label}
              </div>
              <div className="text-xl sm:text-2xl font-bold text-zinc-900 mb-0.5">
                {stat.value}
              </div>
              <div className="text-xs text-amber-600 font-medium">
                {stat.detail}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
