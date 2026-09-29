import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GitHub } from "@/components/shared/icons";
import { ProjectAllType } from "@/app/data/admin/get-all-projects";
import { getImageUrl } from "@/app/data/user/get-file-bucket";
interface iAppProps {
  data: ProjectAllType;
}

export async function ProjectCard({ data }: iAppProps) {
  const technologies = ["Java", "Spring Boot", "PostgreSQL"];
  const imageURL = await getImageUrl(data.image) || null;
  return (
    <div id="projects" className="w-full">
      <div className="mx-auto w-full">
        <div>
          <div
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
              {imageURL ? (
                <Image
                  src={imageURL && "https://bentos-nuxtjs-rktheme.vercel.app/_nuxt/work1.CBmW8qa2.jpg"}
                  alt={data?.title}
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
              ):(
                <Image
                  src={"https://bentos-nuxtjs-rktheme.vercel.app/_nuxt/work1.CBmW8qa2.jpg"}
                  alt={data?.title}
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
              )}
              <div className="absolute inset-0 bg-black/10 transition group-hover:bg-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              {/* Title */}
              <div className="flex items-start justify-between gap-3">
                <Link
                  href={`/projects/${data?.title}`}
                  className="text-lg font-semibold tracking-tight line-clamp-1 text-white sm:text-xl"
                >
                  {data?.title}
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
              <p className="mt-3 text-sm leading-6 text-zinc-400 line-clamp-2">
                {data?.smallDescription}
              </p>

              {/* Technologies */}
              <div className="mt-5 flex flex-wrap gap-2">
                {technologies.map((technology) => (
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
                  href={data?.githubUrl ?? ""}
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

                {data?.liveUrl && (
                  <Link
                    href={data.liveUrl ?? ""}
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
          </div>
        </div>
      </div>
    </div>
  );
}
