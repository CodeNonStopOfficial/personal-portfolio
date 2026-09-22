import { ReactNode } from "react";
import { Navbar } from "@/components/shared/Navbar";

interface SharedLayoutProps {
  children: ReactNode;
}

export default function SharedLayout({
  children,
}: SharedLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="mx-auto min-h-screen w-full max-w-7xl px-4 md:px-6 lg:px-12">
        {children}
      </main>
    </div>
  );
}