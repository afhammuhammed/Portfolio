"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import {
  Mail,
  Copy,
  Check,
  Phone,
  Send,
  MessageSquare,
  ArrowUpRight
} from "lucide-react";
import { LinkedInIcon, InstagramIcon } from "@/components/Icons";
import { motion } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    }, 900);
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-200 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold tracking-wider uppercase text-zinc-600 mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
            <span>06 / GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-2">
            Let&apos;s Connect &amp; Collaborate
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base max-w-xl">
            Ready to collaborate on AI initiatives, digital marketing campaigns, or creative storytelling ventures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Email Card with Copy button */}
              <div className="p-5 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-xs transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-amber-600" />
                    Direct Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border border-zinc-200 transition-all cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-zinc-500" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-base sm:text-lg font-medium text-zinc-900 hover:text-amber-600 transition-colors block break-all"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-xs transition-all">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-2 mb-2">
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  Phone &amp; WhatsApp
                </span>
                <a
                  href={personalInfo.socials.phone}
                  className="text-base sm:text-lg font-medium text-zinc-900 hover:text-amber-600 transition-colors block"
                >
                  {personalInfo.phone}
                </a>
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-xs transition-all group flex flex-col justify-between h-24"
                >
                  <div className="flex items-center justify-between text-zinc-400 group-hover:text-zinc-900">
                    <LinkedInIcon className="w-4 h-4 text-sky-600" />
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-zinc-900 block">LinkedIn</span>
                    <span className="text-[11px] font-medium text-zinc-500">Professional network</span>
                  </div>
                </a>

                <a
                  href={personalInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-xs transition-all group flex flex-col justify-between h-24"
                >
                  <div className="flex items-center justify-between text-zinc-400 group-hover:text-zinc-900">
                    <InstagramIcon className="w-4 h-4 text-rose-500" />
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-zinc-900 block">Instagram</span>
                    <span className="text-[11px] font-medium text-zinc-500">@afhm.co</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability Note */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs text-zinc-700">
              <span className="text-amber-700 font-semibold">Current Status:</span> Actively accepting select advisory roles, digital marketing consultations, and literary speaking engagements.
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200 shadow-xl">
              <h3 className="text-lg font-semibold text-zinc-900 mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-zinc-500 mb-6">
                Fill in the details below and your communication will be prioritized.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-2"
                >
                  <Check className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-zinc-900">Message Received!</h4>
                  <p className="text-xs text-emerald-700">
                    Thank you for reaching out. Afham will review your note and get back to you promptly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-sm focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-sm focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Project Collaboration / Inquiries"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-sm focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Share your proposal, project, or question..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-sm focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 text-white font-medium text-sm hover:bg-zinc-800 active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer shadow-sm"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
