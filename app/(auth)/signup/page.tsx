import Link from "next/link";
import { SignupForm } from "../_components/signup-form";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";


export default function SignupPage() {

  return (
    <div className="flex min-h-svh w-full items-center justify-center py-4 px-4 bg-[#090a0f]">
      <Link
        href="/"
        className={buttonVariants({
          variant: "outline",
          className: "absolute top-5 left-4 md:left-10",
        })}
      >
        <ArrowLeft size={4} />
        <span>Back</span>
      </Link>
      <div className="w-full">
        <SignupForm />
      </div>
    </div>
  );
}
