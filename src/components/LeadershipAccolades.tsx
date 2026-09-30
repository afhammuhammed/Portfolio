"use client";

import React, { useState } from "react";
import { honorsList } from "@/data/portfolioData";
import { 
  Award, 
  Globe2, 
  Mic2, 
  Swords, 
  Lightbulb, 
  Medal, 
  CheckCircle2 
} from "lucide-react";
import { motion } from "framer-motion";

export default function LeadershipAccolades() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Honors & Accolades" },
    { id: "Diplomacy & MUN", label: "Diplomacy & MUN" },
    { id: "Public Speaking", label: "Public Speaking" },
    { id: "Athletics & Discipline", label: "Athletics & Martial Arts" },
    { id: "Innovation", label: "Scientific Innovation" }
  ];

  const filteredHonors = honorsList.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category === selectedCategory;
  });

  const getIconForCategory = (cat: string) => {
    switch (cat) {
      case "Diplomacy & MUN":
        return <Globe2 className="w-4 h-4 text-sky-600" />;
      case "Public Speaking":
        return <Mic2 className="w-4 h-4 text-amber-600" />;
      case "Athletics & Discipline":
        return <Swords className="w-4 h-4 text-emerald-600" />;
      case "Innovation":
        return <Lightbulb className="w-4 h-4 text-indigo-600" />;
      default:
        return <Medal className="w-4 h-4 text-amber-600" />;
    }
  };

  return (
    <section id="leadership" className="py-24 border-t border-zinc-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold tracking-wider uppercase text-zinc-600 mb-3">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>04 / DIPLOMACY &amp; ACCOLADES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-2">
              Leadership, Oratory &amp; Discipline
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base max-w-xl">
              Excellence across Model United Nations conferences, state-level rhetoric, scientific competitions, and athletic martial arts.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-white border border-zinc-200 shadow-xs self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-zinc-900 text-white font-semibold shadow-xs"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accolades Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredHonors.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-5 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-zinc-100 border border-zinc-200">
                      {getIconForCategory(item.category)}
                    </span>
                    <span className="text-[11px] font-medium text-zinc-500">
                      {item.category}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-50 border border-amber-200 text-amber-700">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 tracking-tight mb-1">
                  {item.title}
                </h3>
                <div className="text-xs text-amber-600 font-medium mb-3">
                  {item.award}
                </div>

                <p className="text-xs text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center gap-1.5 text-[11px] font-medium text-zinc-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Achievement</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
