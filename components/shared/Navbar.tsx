"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { Menu, X, ArrowUpRight, LogOut } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { data } = authClient.useSession();
  const [isOpen, setIsOpen] = useState(false);
  const user = data?.user.role === "admin";

  const closeMenu = () => setIsOpen(false);

  function handleLogout() {
    startTransition(async () => {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success("LogOut Successfully");
            router.push("/login");
          },
          onError: () => {
            toast.error("Logout Error...|");
          },
        },
      });
    });
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl px-4 md:px-6 lg:px-12">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between">
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/4 text-sm font-bold text-white transition group-hover:border-blue-500/40 group-hover:bg-blue-500/10">
            VK
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-tight text-white">
              Virendra Kumar
            </p>
            <p className="text-[11px] text-zinc-400">Full Stack Developer</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-[17px] font-medium text-white transition-colors hover:text-[#ffc107]"
            >
              {item.label}
            </Link>
          ))}
          {user && (
            <Link
              href="/admin/dashboard"
              className="rounded-md px-3 py-2 text-[17px] font-medium text-white transition-colors hover:text-[#ffc107]"
            >
              Dashboard
            </Link>
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center justify-center gap-2">
          <Link
            href="contact"
            className="group inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white px-4 py-2 text-sm font-semibold text-black transition-all hover:bg-zinc-200"
          >
            Let's Talk
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
          {data?.user && (
            <Button
              className="px-3 py-4 cursor-pointer"
              variant="destructive"
              onClick={handleLogout}
            >
              <LogOut className="size-4" />
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="rounded-lg border border-white/10 bg-white/4 p-2 text-zinc-300 transition hover:bg-white/8 hover:text-white md:hidden"
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-black transition-all duration-300 md:hidden ${
          isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col py-4 sm:px-6 gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="border-b border-white/15 px-2 rounded py-3.5 text-[18px] font-medium text-zinc-400 bg-[#121214] hover:bg-black transition-colors last:border-0 hover:text-white border gap-2"
            >
              {item.label}
            </Link>
          ))}

          {user && (
            <Link
              href="/admin/dashboard"
              className="border-b border-white/15 px-2 rounded py-3.5 text-[18px] font-medium text-zinc-400 bg-[#121214] hover:bg-black transition-colors last:border-0 hover:text-white border gap-2"
            >
              Dashboard
            </Link>
          )}
         <div className="flex flex-row gap-2 items-center justify-center text-center mt-4">
           <Link
            href="/contact"
            onClick={closeMenu}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </Link>
          <div>
            {data?.user && (
              <Button
                className="px-12 py-6 w-full font-bold cursor-pointer"
                variant="destructive"
                onClick={handleLogout}
              >
                <LogOut className="size-4" />
                LogOut
              </Button>
            )}
          </div>
         </div>
        </nav>
      </div>
    </header>
  );
}
