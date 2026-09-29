"use client";
import { UserPublicAdminType } from "@/app/data/user/get-user-public";
import { Facebook, GitHub, LinkedIn, YouTube } from "@/components/shared/icons";
import { ArrowDownToLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ProfileProp {
  user: UserPublicAdminType;
  imageUrl: string;
}

export function AboutSection({ user, imageUrl }: ProfileProp) {
  const pathname = usePathname();

  const about = pathname === "/about";

  function highlightName(text: string, name: string) {
    if (!text || !name) return text;

    const regex = new RegExp(
      `(${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
      "gi",
    );

    return text.split(regex).map((part, index) =>
      part.toLowerCase() === name.toLowerCase() ? (
        <span key={index} className={about ? "text-[#3cff00]" : "text-white"}>
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      ),
    );
  }
  return (
    <section className="w-full py-10">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Section 1 */}
        <div className="h-fit shadow-[inset_0_0.362176px_0.651917px_-1px_hsla(0,0%,100%,0.025),inset_0_3px_5.4px_-2px_hsla(0,0%,100%,0.036)] rounded-2xl border border-white/10 bg-[#121214] p-6 lg:col-span-1">
          <div className="min-h-fit">
            <div className="space-y-2">
              {imageUrl ? (
                <Image
                  src={
                    imageUrl ??
                    "https://clinquant-faloodeh-70c1be.netlify.app/images/about/profile.png"
                  }
                  alt="profile"
                  priority
                  width={500}
                  height={500}
                  className="object-cover rounded-2xl items-center justify-center mx-auto flex"
                />
              ) : (
                <Image
                  src="https://clinquant-faloodeh-70c1be.netlify.app/images/about/profile.png"
                  alt="profile"
                  priority
                  width={500}
                  height={500}
                  className="object-cover rounded-2xl items-center justify-center mx-auto flex"
                />
              )}
              <div className="text-center items-center justify-center">
                <h1 className="text-2xl font-semibold text-white">
                  {user?.name}
                </h1>
                <p className="text-[#9f9f9f] text-[18px] font-medium">
                  {user?.headline}
                </p>
              </div>
              <div className="flex items-center justify-center gap-3 pt-3">
                <Link
                  href={user?.facebook ?? "/"}
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/3 transition hover:border-white/20 hover:bg-white/8"
                >
                  <Facebook className="h-5 w-5" />
                </Link>

                <Link
                  href={user?.linkedin ?? "/"}
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/3 transition hover:border-white/20 hover:bg-white/8"
                >
                  <LinkedIn className="h-5 w-5" />
                </Link>

                <Link
                  href={user?.github ?? "/"}
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/3 transition hover:border-white/20 hover:bg-white/8"
                >
                  <GitHub className="h-5 w-5" />
                </Link>

                <Link
                  href={user?.youtube ?? "/"}
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/3 transition hover:border-white/20 hover:bg-white/8"
                >
                  <YouTube className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div
          className={`rounded-2xl h-fit  border border-white/10 p-5 shadow-[inset_0_0.362176px_0.651917px_-1px_hsla(0,0%,100%,0.025),inset_0_3px_5.4px_-2px_hsla(0,0%,100%,0.036)] sm:p-7 md:p-8 lg:col-span-3 lg:p-10 xl:p-12 ${about ? "bg-[#0B0909]" : "bg-[#121214] "}`}
        >
          <div className="flex flex-col justify-center">
            {/* Small Introduction */}
            <p className=" mb-4 text-sm font-medium tracking-wide  text-zinc-400 sm:text-base">
              {about ? "About Me" : "Hello There!"} 👋
            </p>

            {/* Main Heading */}
            <h1 className=" max-w-4xl text-2xl font-semibold leading-[1.15] tracking-tight  text-white sm:text-3xl md:text-5xl lg:text-5xl xl:text-7xl">
              <span className="text-zinc-500">
                {highlightName(user?.about ?? "", user?.name ?? "")}
              </span>
            </h1>

            {/* Description */}
            <p className=" mt-6 max-w-2xl text-sm leading-6  text-zinc-400 sm:text-base sm:leading-7 lg:text-lg ">
              {user?.bio}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="abc.pdf"
                download="abc.pdf"
                className=" inline-flex items-center justify-center rounded-lg bg-[#EB5D3A] px-5 py-3 text-sm font-semibold  text-white transition  hover:bg-black border border-gray-950/50 gap-3 "
              >
                Download CV
                <ArrowDownToLine size={16} />
              </Link>

              <Link
                href="/contact"
                className="
          inline-flex
          items-center
          justify-center
          rounded-lg
          border border-white/10
          bg-white/3
          px-5
          py-3
          text-sm
          font-semibold
          text-white
          transition
          hover:bg-white/8
        "
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
