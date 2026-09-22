import Link from "next/link";
import { ArrowDown, ArrowRight, GiftIcon, Link2Icon } from "lucide-react";

const technologies = [
  "Next.js",
  "TypeScript",
  "React",
  "Convex",
  "Java",
  "Spring Boot",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/15" />

        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/10" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Availability */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm text-gray-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            Available for opportunities
          </div>

          {/* Greeting */}
          <p className="mb-4 text-base font-medium text-gray-600 dark:text-gray-400 sm:text-lg">
            Hi, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Virendra kumar<span className="text-blue-600">.</span>
          </h1>

          {/* Role */}
          <h2 className="mt-6 text-2xl font-semibold tracking-tight text-gray-700 dark:text-gray-200 sm:text-3xl md:text-4xl">
            Full Stack Developer <span className="text-blue-600">&</span>{" "}
            Software Engineer
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg sm:leading-8">
            I build modern, scalable web applications with{" "}
            <span className="font-medium text-gray-900 dark:text-white">
              Next.js, TypeScript, and Convex
            </span>
            , with a growing focus on{" "}
            <span className="font-medium text-gray-900 dark:text-white">
              Java and Spring Boot
            </span>{" "}
            backend engineering.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#projects"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200 sm:w-auto"
            >
              View Projects
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-all hover:bg-gray-50 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:w-auto"
            >
              Download Resume
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-black/10 p-2.5 text-gray-600 transition hover:border-black/20 hover:bg-black/5 hover:text-black dark:border-white/10 dark:text-gray-400 dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <GiftIcon className="h-5 w-5" aria-hidden="true" />
            </Link>

            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-black/10 p-2.5 text-gray-600 transition hover:border-black/20 hover:bg-black/5 hover:text-black dark:border-white/10 dark:text-gray-400 dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <Link2Icon className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>

          {/* Technologies */}
          <div className="mt-14">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
              Technologies I work with
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-black/10 bg-white/60 px-3 py-1.5 text-xs font-medium text-gray-600 backdrop-blur transition hover:border-blue-500/30 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <Link
          href="#about"
          aria-label="Scroll to About section"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-400 transition hover:text-gray-900 dark:hover:text-white sm:flex"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.25em]">
            Scroll
          </span>

          <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
