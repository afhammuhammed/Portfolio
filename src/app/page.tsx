"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ExperienceEducation from "@/components/ExperienceEducation";
import LeadershipAccolades from "@/components/LeadershipAccolades";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import ResumeModal from "@/components/ResumeModal";
import { projects, Project } from "@/data/portfolioData";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleSelectProjectById = (projectId: string) => {
    const found = projects.find((p) => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#09090b] relative selection:bg-amber-100 selection:text-amber-900">
      {/* Background grid texture */}
      <div className="fixed inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col">
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        <main className="flex-1">
          <Hero
            onOpenResume={() => setIsResumeOpen(true)}
            onSelectProject={handleSelectProjectById}
          />
          <About />
          <Projects onSelectProject={(project) => setSelectedProject(project)} />
          <ExperienceEducation />
          <LeadershipAccolades />
          <Skills />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
