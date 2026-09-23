
import Link from "next/link"
import { User, Mail, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function SignupForm() {
  return (
    <div className="flex min-h-screen items-center justify-center py-10">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[120px]" />
      </div>

      <Card className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/8 bg-[#101116]/95 text-gray-100 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <CardHeader className="space-y-2 px-7 pb-5 pt-8 text-center">
          <CardTitle className="text-3xl font-bold tracking-tight">
            Create an Account
          </CardTitle>

          <CardDescription className="text-sm leading-6 text-gray-400">
            Enter your information below to create your account
          </CardDescription>
        </CardHeader>

        <CardContent className="px-7 pb-4">
          <form>
            <FieldGroup className="gap-3">
              {/* Full Name */}
              <Field>
                <FieldLabel
                  htmlFor="name"
                  className="mb-2 text-sm font-medium text-gray-200"
                >
                  Full Name
                </FieldLabel>

                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-gray-500" />

                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    autoComplete="name"
                    required
                    className="h-12 rounded-xl border-white/10 bg-[#15171e] pl-11 text-gray-100 placeholder:text-gray-600 transition-all focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/10"
                  />
                </div>
              </Field>

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
                <FieldLabel
                  htmlFor="password"
                  className="mb-2 text-sm font-medium text-gray-200"
                >
                  Password
                </FieldLabel>

                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-gray-500" />

                  <Input
                    id="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="new-password"
                    required
                    className="h-12 rounded-xl border-white/10 bg-[#15171e] pl-11 text-gray-100 placeholder:text-gray-600 transition-all focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/10"
                  />
                </div>
              </Field>

              {/* Submit */}
              <Field className="pt-2">
                <Button
                  type="submit"
                  className="h-12 w-full rounded-xl border-0 bg-linear-to-r from-indigo-500 to-violet-500 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:from-indigo-400 hover:to-violet-400 hover:shadow-indigo-500/30 active:scale-[0.99]"
                >
                  Create Account
                </Button>

                <FieldDescription className="pt-4 text-center text-sm text-gray-500">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                  >
                    Sign in
                  </Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
