import { Suspense } from "react";
import { ProjectCard } from "./_components/ProjectCard";
import { getAllProject } from "@/app/data/admin/get-all-projects";
import { notFound } from "next/navigation";
import { ProjectSkeleton } from "@/components/layouts/ProjectSkeleton";


export const dynamic = "force-dynamic";

export default function ProjectPage() {
  return (
    <section className="bg-[#121214] min-h-screen max-w-full px-4 py-4 mt-4 md:mt-6 lg:mt-8 shadow-[inset_0_0.362176px_0.651917px_-1px_hsla(0,0%,100%,0.025),inset_0_3px_5.4px_-2px_hsla(0,0%,100%,0.036)] rounded-2xl border border-white/10">
      <div className="x-auto w-full max-w-7xl md:px-6 lg:px-8">
        <div className="items-center justify-center text-center">
          <p className="mb-2 text-sm font-medium tracking-[0.2em] text-blue-400">
            PROJECTS
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Things I've built
          </h2>

          <p className="text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
            A selection of projects where I have focused on building practical,
            scalable, and user-friendly applications.
          </p>
        </div>
        <div className="max-w-full">
          <Suspense fallback={<ProjectListSkeleton />}>
            <PublicProjectCard />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

export async function PublicProjectCard() {
  const data = await getAllProject();
  if (!data) {
    return notFound();
  }
  // const projects = await Promise.all(
  //   data.map(async (project) => ({
  //     ...project,
  //     imageUrl: await getImageUrl(project.image),
  //   })),
  // );

  // const projects = await Promise.all(
  //   data.map(async (project) => ({
  //     ...project,
  //     imageUrl: project.image ? await getImageUrl(project.image) : null,
  //   })),
  // );

  return (
    <>
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {data.map((project, index) => (
          <ProjectCard key={index} data={project} />
        ))}
      </div>
    </>
  );
}

export function ProjectListSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <ProjectSkeleton key={index} />
      ))}
    </div>
  );
}
