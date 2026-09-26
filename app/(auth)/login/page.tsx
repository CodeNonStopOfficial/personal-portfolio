import Link from "next/link";
import { LoginForm } from "../_components/login-form";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center py-8 bg-black">
      <Link href="/" className={buttonVariants({
         variant : "outline",
         className :"absolute top-5 left-4 md:left-10"
      })}>
          <ArrowLeft size={4}/>
          <span>Back</span>
      </Link>
      <div className="w-full">
        <LoginForm />
      </div>
    </div>
  )
}
