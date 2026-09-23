"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  Palette,
  Server,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

type Service = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  accent: "blue" | "violet";
  technologies: string[];
  features: string[];
};

const services: Service[] = [
  {
    id: "01",
    title: "Next.js Development",
    description:
      "Fast, scalable, and SEO-friendly web applications built with modern Next.js architecture and best development practices.",
    icon: Code2,
    accent: "blue",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    features: [
      "SSR, SSG & dynamic routing",
      "API & database integration",
      "SEO-friendly architecture",
      "Responsive web applications",
    ],
  },

  {
    id: "02",
    title: "TanStack Development",
    description:
      "Modern and type-safe applications powered by the TanStack ecosystem for routing, data fetching, tables, and complex interfaces.",
    icon: Layers3,
    accent: "violet",
    technologies: [
      "TanStack Router",
      "TanStack Query",
      "TanStack Table",
      "React",
      "TypeScript",
    ],
    features: [
      "Advanced data fetching",
      "Type-safe routing",
      "Dynamic data tables",
      "Scalable frontend architecture",
    ],
  },

  {
    id: "03",
    title: "MERN Stack Development",
    description:
      "Complete full-stack applications using MongoDB, Express, React, and Node.js with secure APIs and scalable backend architecture.",
    icon: Server,
    accent: "blue",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "REST API"],
    features: [
      "Full-stack application development",
      "REST API development",
      "Authentication & authorization",
      "Database integration",
    ],
  },

  {
    id: "04",
    title: "UI/UX & Web Design",
    description:
      "Modern and responsive interfaces designed around usability, accessibility, visual consistency, and engaging interactions.",
    icon: Palette,
    accent: "violet",
    technologies: [
      "Figma",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
      "Design Systems",
    ],
    features: [
      "Responsive & mobile-first design",
      "Modern UI development",
      "Interactive animations",
      "Reusable design systems",
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const iconVariants: Variants = {
  hidden: {
    scale: 0,
    rotate: -15,
  },

  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: "backOut",
    },
  },
};

export default function ServicesType() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-[#09090b] py-6 sm:py-20 md:py-14 lg:py-18 mt-5 rounded-2xl"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-blue-500/10 blur-[120px] sm:h-96 sm:w-96" />

        <div className="absolute bottom-[-10%] right-[-10%] h-72 w-72 rounded-full bg-violet-500/10 blur-[120px] sm:h-96 sm:w-96" />

        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/3 blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
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
              Freelance Services
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            What I Can
            <span className="block bg-linear-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Build For You
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            I build modern, responsive, and scalable digital products using
            modern technologies and clean development practices.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2"
        >
          {services.map((service) => {
            const Icon = service.icon;

            const isBlue = service.accent === "blue";

            return (
              <motion.article
                key={service.id}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 20,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/8 bg-[#111113] p-5 shadow-2xl shadow-black/20 sm:p-6 md:p-7 lg:p-8"
              >
                {/* Hover Glow */}
                <div
                  className={`pointer-events-none absolute -right-28 -top-28 h-64 w-64 rounded-full opacity-50 blur-[100px] transition-all duration-700 group-hover:scale-125 group-hover:opacity-100 ${
                    isBlue ? "bg-blue-500/10" : "bg-violet-500/10"
                  }`}
                />

                {/* Top Gradient Border */}
                <div
                  className={`absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent ${
                    isBlue ? "via-blue-500/50" : "via-violet-500/50"
                  } to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Header */}
                <div className="relative flex items-start justify-between">
                  {/* Icon */}
                  <motion.div
                    variants={iconVariants}
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border transition-all duration-500 sm:h-16 sm:w-16 ${
                      isBlue
                        ? "border-blue-500/20 bg-blue-500/10 text-blue-400 group-hover:border-blue-500/40 group-hover:bg-blue-500/15"
                        : "border-violet-500/20 bg-violet-500/10 text-violet-400 group-hover:border-violet-500/40 group-hover:bg-violet-500/15"
                    }`}
                  >
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                  </motion.div>

                  {/* Number */}
                  <span className="select-none text-4xl font-bold tracking-tight text-white/4 transition-colors duration-500 group-hover:text-white/8 sm:text-5xl">
                    {service.id}
                  </span>
                </div>

                {/* Main Content */}
                <div className="relative mt-7">
                  <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400 sm:text-[15px] sm:leading-7">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="relative mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.08,
                      }}
                      className="flex min-w-0 items-start gap-2.5"
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          isBlue
                            ? "bg-blue-500/10 text-blue-400"
                            : "bg-violet-500/10 text-violet-400"
                        }`}
                      >
                        <Check className="h-3 w-3" />
                      </span>

                      <span className="min-w-0 text-xs leading-5 text-zinc-300 sm:text-sm">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="relative mt-7 border-t border-white/6 pt-6">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 sm:text-xs">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/[0.07] bg-white/2.5 px-2.5 py-1.5 text-[11px] text-zinc-400 transition-all duration-300 group-hover:border-white/12 group-hover:text-zinc-300 sm:text-xs"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="relative mt-7 flex flex-col gap-4 border-t border-white/6 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  {/* Availability */}
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span
                        className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${
                          isBlue ? "bg-blue-400" : "bg-violet-400"
                        }`}
                      />

                      <span
                        className={`relative inline-flex h-2 w-2 rounded-full ${
                          isBlue ? "bg-blue-400" : "bg-violet-400"
                        }`}
                      />
                    </span>

                    <span className="text-xs text-zinc-500">
                      Available for freelance
                    </span>
                  </div>

                  {/* CTA */}
                  <Link 
                    href="/contact"
                    className={`group/button inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 sm:w-auto ${
                      isBlue
                        ? "bg-blue-500/10 hover:bg-blue-500/20"
                        : "bg-violet-500/10 hover:bg-violet-500/20"
                    }`}
                  >
                    Contact Now
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
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
          className="mt-6 rounded-2xl border border-white/[0.07] bg-white/2 p-5 text-center sm:mt-8 sm:p-6"
        >
          <p className="text-sm text-zinc-400 sm:text-base">
            Have an idea or project in mind?
          </p>

          <Link
            href="/contact"
            className="mt-2 inline-block text-sm font-medium text-white transition-colors hover:text-blue-400 sm:text-base"
          >
            Let&apos;s build something together →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
