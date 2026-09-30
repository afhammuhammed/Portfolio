"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolioData";
import {
  Menu,
  X,
  Mail,
  ArrowUpRight,
  FileText
} from "lucide-react";
import { LinkedInIcon, InstagramIcon } from "@/components/Icons";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenResume?: () => void;
}

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Leadership", href: "#leadership" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "projects", "experience", "leadership", "skills", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-zinc-200/80 shadow-xs py-3.5"
          : "bg-transparent border-b border-transparent py-5"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram / Brand */}
        <a
          href="#"
          className="group flex items-center gap-3 text-zinc-900 no-underline focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center text-sm font-bold tracking-wider text-amber-600 group-hover:border-amber-500/50 group-hover:scale-105 transition-all shadow-xs">
            AMA
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-zinc-900 group-hover:text-amber-600 transition-colors">
              {personalInfo.shortName}
            </span>
            <span className="text-[11px] text-zinc-500 tracking-wider uppercase font-medium">
              Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/80 border border-zinc-200/80 px-3 py-1.5 rounded-full backdrop-blur-sm shadow-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-3.5 py-1 text-xs font-medium rounded-full transition-colors ${isActive
                    ? "text-zinc-950 font-semibold"
                    : "text-zinc-600 hover:text-zinc-950"
                  }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-zinc-100 rounded-full border border-zinc-200/80"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Social Icons & Resume CTA */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-8 h-8 rounded-lg bg-zinc-100/80 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:border-zinc-300 hover:scale-105 transition-all"
          >
            <LinkedInIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href={personalInfo.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="w-8 h-8 rounded-lg bg-zinc-100/80 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:border-zinc-300 hover:scale-105 transition-all"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href={personalInfo.socials.email}
            aria-label="Email"
            className="w-8 h-8 rounded-lg bg-zinc-100/80 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:border-zinc-300 hover:scale-105 transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
          </a>

          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-750 bg-white hover:bg-zinc-50 border border-zinc-200 rounded-lg transition-all shadow-xs cursor-pointer hover:border-amber-500/40 text-zinc-700"
            >
              <FileText className="w-3 h-3 text-amber-600" />
              <span>Resume</span>
            </button>
          )}

          <a
            href="#contact"
            className="ml-1 inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-all shadow-xs hover:scale-[1.02]"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1 text-xs font-medium text-zinc-800 bg-white border border-zinc-200 rounded-md"
            >
              CV
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg bg-zinc-100 border border-zinc-200 text-zinc-700 hover:text-zinc-950 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-zinc-200 bg-white/98 backdrop-blur-xl px-4 pt-4 pb-6 overflow-hidden shadow-lg"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-zinc-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-zinc-900"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-zinc-900"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.email}
                  className="text-zinc-500 hover:text-zinc-900"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-1.5 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-md"
              >
                Let&apos;s Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
