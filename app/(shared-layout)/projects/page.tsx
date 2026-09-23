import { ProjectCard } from "./_components/ProjectCard";

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
             <ProjectCard/>
        </div>
      </div>
    </section>
  );
}
