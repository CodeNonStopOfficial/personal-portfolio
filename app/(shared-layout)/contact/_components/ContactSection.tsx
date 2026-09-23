
"use client";

import { FormEvent, useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";
import { GitHub, LinkedIn } from "@/components/shared/icons";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Virendra848305@gmail.com",
    href: "mailto:Virendra848305@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Patna, Bihar, India",
    href: "#",
  },
  {
    icon: Clock3,
    label: "Response Time",
    value: "Usually within 24 hours",
    href: "#",
  },
];

const projectTypes = [
  "Web Development",
  "Next.js Development",
  "TanStack Development",
  "MERN Stack Development",
  "UI/UX & Web Design",
  "Other",
];

const budgets = [
  "₹5K - ₹10K",
  "₹10K - ₹25K",
  "₹25K - ₹50K",
  "₹50K+",
  "Not sure yet",
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Connect your API / Formspree / Resend / backend here.
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden mt-5 rounded-2xl bg-[#09090b] py-16 sm:py-20 md:py-24 lg:py-28"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-blue-500/10 blur-[120px] sm:h-96 sm:w-96" />

        <div className="absolute bottom-[-10%] right-[-10%] h-72 w-72 rounded-full bg-violet-500/10 blur-[120px] sm:h-96 sm:w-96" />

        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/3 blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/3 px-3 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-blue-400" />

            <span className="text-xs font-medium text-zinc-400">
              Let&apos;s Work Together
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Have a project
            <span className="block bg-linear-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              in mind?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            Whether you have a complete idea or just a starting point, tell me
            what you&apos;re building. I&apos;d love to hear about it and see
            how I can help.
          </p>
        </motion.div>

        {/* Main Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8"
        >
          {/* Left Side */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-3xl border border-white/8 bg-[#111113] p-5 sm:p-7 lg:p-8"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="relative">
              {/* Availability */}
              <div className="mb-8 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>

                <span className="text-xs font-medium text-emerald-400">
                  Available for freelance projects
                </span>
              </div>

              <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Let&apos;s start a conversation.
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
                Have an idea, project, or business problem you want to solve?
                Send me a message and I&apos;ll get back to you as soon as
                possible.
              </p>

              {/* Contact Details */}
              <div className="mt-8 space-y-3">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group flex items-center gap-4 rounded-2xl border border-white/6 bg-white/2 p-4 transition-all duration-300 hover:border-white/12 hover:bg-white/4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/3 text-zinc-400 transition-colors duration-300 group-hover:text-blue-400">
                        <Icon className="h-4 w-4" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[11px] font-medium uppercase tracking-wider text-zinc-600">
                          {item.label}
                        </p>

                        <p className="mt-1 truncate text-sm text-zinc-300">
                          {item.value}
                        </p>
                      </div>

                      {item.label === "Email" && (
                        <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400" />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Social */}
              <div className="mt-8 border-t border-white/6 pt-7">
                <p className="mb-4 text-xs font-medium uppercase tracking-wider text-zinc-600">
                  Find me online
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="#"
                    aria-label="GitHub"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/3 text-zinc-400 transition-all duration-300 hover:border-white/15 hover:bg-white/6 hover:text-white"
                  >
                    <GitHub className="h-4 w-4" />
                  </Link>

                  <Link
                    href="#"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/3 text-zinc-400 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
                  >
                    <LinkedIn className="h-4 w-4" />
                  </Link>

                  <Link
                    href="mailto:virendra848305@gmail.com"
                    aria-label="Email"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/3 text-zinc-400 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
                  >
                    <Mail className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-3xl border border-white/8 bg-[#111113] p-5 sm:p-7 lg:p-8"
          >
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-violet-500/10 blur-[100px]" />

            {submitted ? (
              <div className="relative flex min-h-125 flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                  <CheckCircle2 className="h-8 w-8" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  Message received!
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-zinc-400">
                  Thanks for reaching out. I&apos;ll review your message and
                  get back to you as soon as possible.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-xl border border-white/8 bg-white/3 px-5 py-3 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/6 hover:text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative space-y-5"
              >
                {/* Form Header */}
                <div className="mb-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                      <MessageCircle className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Tell me about your project
                      </h3>

                      <p className="mt-0.5 text-xs text-zinc-500">
                        I&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-medium text-zinc-400"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-white/8 bg-white/2.5 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 transition-all duration-300 focus:border-blue-500/40 focus:bg-white/4 focus:ring-2 focus:ring-blue-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-medium text-zinc-400"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-white/8 bg-white/2.5 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 transition-all duration-300 focus:border-blue-500/40 focus:bg-white/4 focus:ring-2 focus:ring-blue-500/10"
                    />
                  </div>
                </div>

                {/* Project Type + Budget */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="project"
                      className="mb-2 block text-xs font-medium text-zinc-400"
                    >
                      Project Type
                    </label>

                    <select
                      id="project"
                      name="project"
                      defaultValue=""
                      required
                      className="w-full appearance-none rounded-xl border border-white/8 bg-[#151517] px-4 py-3 text-sm text-zinc-300 outline-none transition-all duration-300 focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/10"
                    >
                      <option value="" disabled>
                        Select project type
                      </option>

                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="mb-2 block text-xs font-medium text-zinc-400"
                    >
                      Budget
                    </label>

                    <select
                      id="budget"
                      name="budget"
                      defaultValue=""
                      className="w-full appearance-none rounded-xl border border-white/8 bg-[#151517] px-4 py-3 text-sm text-zinc-300 outline-none transition-all duration-300 focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/10"
                    >
                      <option value="" disabled>
                        Select budget
                      </option>

                      {budgets.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-medium text-zinc-400"
                  >
                    Project Details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell me about your project, goals, features, timeline, or anything else that might be useful..."
                    className="w-full resize-none rounded-xl border border-white/8 bg-white/2.5 px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-zinc-600 transition-all duration-300 focus:border-blue-500/40 focus:bg-white/4 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-zinc-200"
                >
                  Send Message

                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <p className="text-center text-[11px] leading-5 text-zinc-600">
                  By submitting this form, you agree to be contacted regarding
                  your project.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-zinc-600 sm:text-sm">
            Prefer email?
            <Link
              href="mailto:virendra848305@gmail.com"
              className="ml-1 text-zinc-400 transition-colors hover:text-blue-400"
            >
              virendra848305@gmail.com
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

