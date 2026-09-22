
import { Code2, Database, Server, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Modern Frontend",
    description:
      "Building responsive and accessible interfaces with Next.js, React, TypeScript, and Tailwind CSS.",
  },
  {
    icon: Server,
    title: "Full Stack Development",
    description:
      "Creating complete web applications with clean architecture, APIs, authentication, and reliable data flows.",
  },
  {
    icon: Database,
    title: "Backend & Data",
    description:
      "Working with Convex and exploring Java, Spring Boot, PostgreSQL, and scalable backend architecture.",
  },
  {
    icon: Sparkles,
    title: "Continuous Learning",
    description:
      "Constantly improving my engineering skills through real-world projects, system design, and new technologies.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative border-t border-black/5 bg-gray-50/50 py-24 dark:border-white/10 dark:bg-white/[0.02] sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl md:text-5xl">
            Building software with{" "}
            <span className="text-blue-600">purpose.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg sm:leading-8">
            I'm a Full Stack Developer passionate about creating modern,
            reliable, and scalable web applications.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          {/* About Text */}
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-gray-950 dark:text-white">
              A little about me
            </h3>

            <div className="mt-6 space-y-5 text-base leading-7 text-gray-600 dark:text-gray-400">
              <p>
                I specialize in building modern web applications using{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  Next.js, React, TypeScript, and Convex
                </span>
                .
              </p>

              <p>
                I enjoy working across the full stack — from designing clean
                user interfaces to building backend logic, data models,
                authentication, and application architecture.
              </p>

              <p>
                Currently, I'm expanding my backend engineering skills with{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  Java, Spring Boot, PostgreSQL, and system design
                </span>{" "}
                with the goal of growing into a well-rounded Software Engineer.
              </p>

              <p>
                I believe good software is not only about making something
                work. It's about writing code that is{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  maintainable, scalable, accessible, and easy to understand.
                </span>
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h4 className="font-semibold text-gray-950 dark:text-white">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 overflow-hidden rounded-2xl border border-black/10 bg-white dark:border-white/10 dark:bg-white/[0.03] sm:grid-cols-4">
          <div className="border-b border-r border-black/10 p-6 text-center dark:border-white/10 sm:border-b-0">
            <p className="text-3xl font-bold text-gray-950 dark:text-white">
              10+
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Projects
            </p>
          </div>

          <div className="border-b border-black/10 p-6 text-center dark:border-white/10 sm:border-b-0 sm:border-r">
            <p className="text-3xl font-bold text-gray-950 dark:text-white">
              2+
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Years Learning
            </p>
          </div>

          <div className="border-r border-black/10 p-6 text-center dark:border-white/10">
            <p className="text-3xl font-bold text-gray-950 dark:text-white">
              6+
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Technologies
            </p>
          </div>

          <div className="p-6 text-center">
            <p className="text-3xl font-bold text-gray-950 dark:text-white">
              ∞
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Curiosity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
