import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { notFound } from "next/navigation";
import { GitHub } from "@/components/shared/icons";

const projects = [
  {
    id: "project-management",
    title: "Project Management Platform",
    description:
      "A modern project management platform designed to help teams organize projects, manage tasks, and collaborate efficiently.",
    image: "https://bentos-nuxtjs-rktheme.vercel.app/_nuxt/work1.CBmW8qa2.jpg",

    technologies: [
      "Next.js",
      "TypeScript",
      "Convex",
      "Tailwind CSS",
      "Arject",
      "Better Auth",
    ],

    github: "https://github.com/yourusername/project-management",
    live: "https://your-project.vercel.app",
    features: [
      "Project and workspace management",
      "Task creation and management",
      "Responsive dashboard",
      "Real-time data updates",
      "Reusable component architecture",
      "Modern dark UI",
    ],

    challenges: [
      {
        title: "Application Architecture",
        description:
          "Designed reusable components and separated UI, data, and application logic to keep the project maintainable.",
      },
      {
        title: "Responsive Design",
        description:
          "Built the interface to work consistently across mobile, tablet, and desktop screen sizes.",
      },
      {
        title: "Real-time Data",
        description:
          "Used Convex to handle application data and provide responsive real-time updates.",
      },
    ],

    learnings: [
      "Designing scalable frontend architecture",
      "Building reusable React components",
      "Working with real-time application data",
      "Improving responsive UI patterns",
      "Structuring full-stack applications",
    ],
  },
];

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((project) => project.title !== slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-[#121214]/45 min-h-screen max-w-full px-4 py-4 mt-4 md:mt-6 lg:mt-8 shadow-[inset_0_0.362176px_0.651917px_-1px_hsla(0,0%,100%,0.025),inset_0_3px_5.4px_-2px_hsla(0,0%,100%,0.036)] rounded-2xl border border-white/10">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto w-full max-w-7xl md:px-6 py-12 sm:py-16 lg:py-24">
          {/* Back */}
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>

          {/* Hero content */}
          <div className="mt-2 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-sm font-medium tracking-[0.2em] text-zinc-500">
                PROJECT
              </p>

              <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-4xl lg:text-4xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs font-medium text-zinc-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
                >
                  Live Demo
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/3 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/8"
                >
                  <GitHub className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>

            {/* Project metadata */}
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
              <div className="bg-[#121214] p-5 sm:p-6">
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Type
                </p>
                <p className="mt-2 text-sm font-medium text-white">
                  Full Stack
                </p>
              </div>

              <div className="bg-[#121214] p-5 sm:p-6">
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Stack
                </p>
                <p className="mt-2 text-sm font-medium text-white">
                  Modern Web
                </p>
              </div>

              <div className="bg-[#121214] p-5 sm:p-6">
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Frontend
                </p>
                <p className="mt-2 text-sm font-medium text-white">Next.js</p>
              </div>

              <div className="bg-[#121214] p-5 sm:p-6">
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Backend
                </p>
                <p className="mt-2 text-sm font-medium text-white">Convex</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="mx-auto w-full max-w-7xl py-10 md:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-[#121214] shadow-2xl">
          <Image
            src={project.image}
            alt={`${project.title} project screenshot`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1280px"
            className="object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#121214] shadow-2xl mt-5 px-4 py-4">
          <h1 className="text-3xl text-blue-700 py-2">Project Description</h1>
          <p className="text-[18px] font-medium">{project.description}</p>
        </div>
      </section>
      {/* Features */}
      <section className="border-y border-white/10 bg-[#080809]">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-[0.2em] text-zinc-500">
              04
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Key Features
            </h2>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-[#121214] p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-zinc-400" />

                <span className="text-sm leading-6 text-zinc-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section>
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-medium tracking-[0.2em] text-zinc-500">
                05
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Technology Stack
              </h2>
            </div>

            <div className="flex flex-wrap content-start gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-white/10 bg-[#121214] px-4 py-3 text-sm text-zinc-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="border-y border-white/10 bg-[#080809]">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-[0.2em] text-zinc-500">
              06
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Challenges & Solutions
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {project.challenges.map((challenge, index) => (
              <div
                key={challenge.title}
                className="grid gap-4 rounded-2xl border border-white/10 bg-[#121214] p-6 sm:p-8 md:grid-cols-[80px_1fr] md:gap-8"
              >
                <span className="text-sm font-medium text-zinc-600">
                  0{index + 1}
                </span>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {challenge.title}
                  </h3>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
                    {challenge.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learnings */}
      <section>
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-medium tracking-[0.2em] text-zinc-500">
                07
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                What I Learned
              </h2>
            </div>

            <div className="space-y-4">
              {project.learnings.map((learning) => (
                <div
                  key={learning}
                  className="flex items-center gap-3 border-b border-white/10 pb-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-zinc-500" />

                  <p className="text-sm text-zinc-300 sm:text-base">
                    {learning}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#080809]">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="text-sm font-medium tracking-[0.2em] text-zinc-500">
            EXPLORE MORE
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Interested in seeing more of my work?
          </h2>

          <Link
            href="/projects"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            View All Projects
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
