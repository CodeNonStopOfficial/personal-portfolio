import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GitHub } from "@/components/shared/icons";

const projects = [
  {
    title: "Project Management Platform",
    description:
      "A modern project management platform for organizing projects, managing tasks, and collaborating with teams.",
    image: "https://bentos-nuxtjs-rktheme.vercel.app/_nuxt/work1.CBmW8qa2.jpg",
    technologies: ["Next.js", "TypeScript", "Convex", "Tailwind CSS"],
    github: "https://github.com/yourusername/project-management",
    live: "https://your-project.com",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A responsive e-commerce application with product browsing, cart management, authentication, and order workflows.",
    image: "https://bentos-nuxtjs-rktheme.vercel.app/_nuxt/work1.CBmW8qa2.jpg",
    technologies: ["Next.js", "TypeScript", "Convex"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://your-project.com",
  },
  {
    title: "Developer Portfolio",
    description:
      "A performance-focused portfolio website designed to showcase projects, technical skills, and experience.",
    image: "https://bentos-nuxtjs-rktheme.vercel.app/_nuxt/work1.CBmW8qa2.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://your-portfolio.com",
  },
  {
    title: "Task Management App",
    description:
      "A clean task management application with task creation, status tracking, filtering, and responsive UI.",
    image: "https://bentos-nuxtjs-rktheme.vercel.app/_nuxt/work1.CBmW8qa2.jpg",
    technologies: ["React", "TypeScript", "Convex"],
    github: "https://github.com/yourusername/task-management",
    live: "https://your-project.com",
  },
  {
    title: "REST API Backend",
    description:
      "A backend service designed around RESTful APIs, authentication, database persistence, and clean application architecture.",
    image: "https://bentos-nuxtjs-rktheme.vercel.app/_nuxt/work1.CBmW8qa2.jpg",
    technologies: ["Java", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/yourusername/spring-api",
    live: "",
  },
  {
    title: "Analytics Dashboard",
    description:
      "A responsive analytics dashboard for visualizing application metrics and presenting data through reusable UI components.",
    image: "https://bentos-nuxtjs-rktheme.vercel.app/_nuxt/work1.CBmW8qa2.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yourusername/dashboard",
    live: "https://your-project.com",
  },
];

export function ProjectCard() {
  return (
    <div id="projects" className="w-full">
      <div className="mx-auto w-full">
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="
                group
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-[#0C0C0C]/60
                shadow-[inset_0_0.362176px_0.651917px_-1px_hsla(0,0%,100%,0.025),inset_0_3px_5.4px_-2px_hsla(0,0%,100%,0.036)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/20
              "
            >
              {/* Image */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-[#0d0d0f]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-black/10 transition group-hover:bg-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                {/* Title */}
                <div className="flex items-start justify-between gap-3">
                  <Link href={`/projects/${project.title}`} className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                    {project.title}
                  </Link>

                  <ArrowUpRight
                    size={18}
                    className="
                      mt-1
                      shrink-0
                      text-zinc-600
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-white
                    "
                  />
                </div>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-md
                        border
                        border-white/10
                        bg-white/3
                        px-2
                        py-1
                        text-[11px]
                        font-medium
                        text-zinc-400
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      border
                      border-white/10
                      px-3
                      py-2
                      text-xs
                      font-medium
                      text-zinc-300
                      transition
                      hover:bg-white/6
                      hover:text-white
                    "
                  >
                    <GitHub className="h-4 w-4" />
                    GitHub
                  </Link>

                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-lg
                        bg-white
                        px-3
                        py-2
                        text-xs
                        font-semibold
                        text-black
                        transition
                        hover:bg-zinc-200
                      "
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
