import Link from "next/link";
import { Mail, Lock } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  return (
    <div
      className={cn("flex min-h-screen items-center justify-center px-4 py-10")}
    >
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[120px]" />
      </div>

      <Card className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/8 bg-[#101116]/95 text-gray-100 shadow-2xl shadow-black/40 backdrop-blur-xl">
        {/* Header */}
        <CardHeader className="space-y-3 px-7 pb-5 pt-8 text-center">
          <CardTitle className="text-3xl font-bold tracking-tight">
            Welcome Back
          </CardTitle>

          <CardDescription className="text-sm leading-6 text-gray-400">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>

        {/* Content */}
        <CardContent className="px-7 pb-8">
          <form>
            <FieldGroup className="gap-5">
              {/* Email */}
              <Field>
                <FieldLabel
                  htmlFor="email"
                  className="mb-2 text-sm font-medium text-gray-200"
                >
                  Email
                </FieldLabel>

                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-gray-500" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                    autoComplete="email"
                    required
                    className="h-12 rounded-xl border-white/10 bg-[#15171e] pl-11 text-gray-100 placeholder:text-gray-600 transition-all focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/10"
                  />
                </div>
              </Field>

              {/* Password */}
              <Field>
                <div className="mb-2 flex items-center justify-between">
                  <FieldLabel
                    htmlFor="password"
                    className="text-sm font-medium text-gray-200"
                  >
                    Password
                  </FieldLabel>

                  <Link
                    href="/forgot-password"
                    className="text-xs font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-gray-500" />

                  <Input
                    id="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    required
                    className="h-12 rounded-xl border-white/10 bg-[#15171e] pl-11 text-gray-100 placeholder:text-gray-600 transition-all focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/10"
                  />
                </div>
              </Field>

              {/* Buttons */}
              <Field className="pt-1">
                <Button
                  type="submit"
                  className="h-12 w-full rounded-xl border-0 bg-linear-to-r from-indigo-500 to-violet-500 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:from-indigo-400 hover:to-violet-400 hover:shadow-indigo-500/30 active:scale-[0.99]"
                >
                  Login
                </Button>

                {/* Divider */}
                <div className="relative my-2">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-white/8" />
                  </div>

                  <div className="relative flex justify-center">
                    <span className="bg-[#101116] px-3 text-xs text-gray-500">
                      OR
                    </span>
                  </div>
                </div>

                <FieldDescription className="pt-4 text-center text-sm text-gray-500">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/signup"
                    className="font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                  >
                    Sign up
                  </Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
