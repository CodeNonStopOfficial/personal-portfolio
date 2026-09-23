import Link from "next/link";
import { SignupForm } from "../_components/signup-form";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-[#090a0f]">
      <Link
        href="/"
        className={buttonVariants({
          variant: "outline",
          className: "absolute top-5 left-10",
        })}
      >
        <ArrowLeft size={4} />
        <span>Back</span>
      </Link>
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  );
}
