"use client";

import { motion, type Variants } from "framer-motion";

const experience = [
  {
    company: "Trafixel",
    role: "Software Engineer",
    period: "Dec 2025 — Jun 2026",
    description:
      "Built and maintained learning management systems, including admin dashboards, payment integrations, RBAC, and other core platform features.",
    technologies: ["React", "Next.js", "TypeScript", "RBAC", "Payments"],
  }
];

const education = [
  {
    institution: "CIMAGE College Patna",
    degree: "Bachelor's Degree in Computer Science",
    period: "2022 — 2026",
    description:
      "Focused on software engineering, web development, data structures, algorithms, and modern application development.",
  },
];

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const dotVariants: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.35,
      delay: 0.15,
      ease: "backOut",
    },
  },
};

export function EducationSection() {
  return (
    <section className="w-full overflow-hidden bg-[#09090b] py-14 sm:py-16 md:py-20 rounded-2xl shadow-[inset_0_0.362176px_0.651917px_-1px_hsla(0,0%,100%,0.025),inset_0_3px_5.4px_-2px_hsla(0,0%,100%,0.036)] border border-white/10">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-8 max-w-2xl sm:mb-10"
        >
          <span className="mb-3 inline-flex items-center rounded-full border border-white/10 bg-white/3 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500 sm:text-xs">
            Career & Education
          </span>

          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            Experience & Education
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500 sm:text-base">
            A brief overview of my professional experience and academic
            background.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="group relative min-w-0 overflow-hidden rounded-2xl border border-white/8 bg-[#111113] p-5 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] transition-all duration-300 hover:border-white/[0.14] sm:p-6 h-fit"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />

            <div className="relative">
              {/* Header */}
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600 sm:text-xs">
                    Experience
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl">
                    Work History
                  </h3>
                </div>

                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-zinc-400">
                  💼
                </div>
              </div>

              {/* Timeline */}
              <div className="relative">
                {experience.map((item, index) => (
                  <motion.article
                    key={`${item.company}-${item.period}`}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                    transition={{
                      delay: index * 0.15,
                    }}
                    className="relative pl-7 sm:pl-8"
                  >
                    {/* Timeline line */}
                    {index !== experience.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.7,
                          delay: index * 0.15 + 0.2,
                        }}
                        className="absolute left-1.75 top-5 w-px bg-linear-to-b from-blue-500/60 to-white/10"
                      />
                    )}

                    {/* Animated Point */}
                    <motion.div
                      variants={dotVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="absolute left-0 top-1"
                    >
                      {/* Pulse */}
                      <motion.div
                        animate={{
                          scale: [1, 1.7, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 rounded-full bg-blue-500"
                      />

                      {/* Dot */}
                      <div className="relative size-4 rounded-full border-4 border-[#111113] bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
                    </motion.div>

                    {/* Content */}
                    <div
                      className={
                        index !== experience.length - 1 ? "pb-10" : "pb-2"
                      }
                    >
                      {/* Top */}
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                        <div className="min-w-0">
                          <h4 className="wrap-break-word text-base font-semibold text-white sm:text-lg">
                            {item.role}
                          </h4>

                          <p className="mt-1 text-sm font-medium text-blue-400">
                            {item.company}
                          </p>
                        </div>

                        <span className="w-fit shrink-0 rounded-full border border-white/10 bg-white/3 px-2.5 py-1 text-[11px] text-zinc-500 sm:text-xs">
                          {item.period}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mt-4 text-sm leading-6 text-zinc-400">
                        {item.description}
                      </p>

                      {/* Technologies */}
                      <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                        {item.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-md border border-white/[0.07] bg-white/2.5 px-2 py-1 text-[10px] text-zinc-500 transition-all duration-200 hover:border-blue-500/30 hover:text-blue-400 sm:text-xs"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              EDUCATION
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="group relative min-w-0 overflow-hidden rounded-2xl border border-white/8 bg-[#111113] p-5 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] transition-all duration-300 hover:border-white/[0.14] sm:p-6 h-fit"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:bg-violet-500/20" />

            <div className="relative">
              {/* Header */}
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600 sm:text-xs">
                    Education
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl">
                    Academic Background
                  </h3>
                </div>

                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-zinc-400">
                  🎓
                </div>
              </div>

              {/* Timeline */}
              <div className="relative">
                {education.map((item, index) => (
                  <motion.article
                    key={`${item.institution}-${item.period}`}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                    transition={{
                      delay: index * 0.15,
                    }}
                    className="relative pl-7 sm:pl-8"
                  >
                    {/* Timeline line */}
                    {index !== education.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.7,
                          delay: index * 0.15 + 0.2,
                        }}
                        className="absolute left-1.75 top-5 w-px bg-linear-to-b from-violet-500/60 to-white/10"
                      />
                    )}

                    {/* Animated Point */}
                    <motion.div
                      variants={dotVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="absolute left-0 top-1"
                    >
                      {/* Pulse */}
                      <motion.div
                        animate={{
                          scale: [1, 1.7, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 rounded-full bg-violet-500"
                      />

                      {/* Dot */}
                      <div className="relative size-4 rounded-full border-4 border-[#111113] bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.8)]" />
                    </motion.div>

                    {/* Content */}
                    <div>
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                        <div className="min-w-0">
                          <h4 className="wrap-break-word text-base font-semibold leading-6 text-white sm:text-lg">
                            {item.degree}
                          </h4>

                          <p className="mt-1 wrap-break-word text-sm font-medium text-violet-400">
                            {item.institution}
                          </p>
                        </div>

                        <span className="w-fit shrink-0 rounded-full border border-white/10 bg-white/3 px-2.5 py-1 text-[11px] text-zinc-500 sm:text-xs">
                          {item.period}
                        </span>
                      </div>

                      <p className="mt-4 text-sm leading-6 text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
