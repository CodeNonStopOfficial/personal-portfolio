"use client";
import Link from "next/link";
import { Mail, Lock, Loader2 } from "lucide-react";

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
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import {loginSchema} from "@/app/schema/auth"
export function LoginForm() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(data: z.infer<typeof loginSchema>) {
    startTransition(async () => {
      console.log(data)
    });
  }
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
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup className="gap-5">
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor={field.name}
                      className="mb-2 text-sm font-medium text-gray-200"
                    >
                      Email
                    </FieldLabel>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-gray-500" />
                      <Input
                        {...field}
                        id={field.name}
                        type="email"
                        placeholder="m@example.com"
                        autoComplete="email"
                        required
                        aria-invalid={fieldState.invalid}
                        className="h-12 rounded-xl border-white/10 bg-[#15171e] pl-11 text-gray-100 placeholder:text-gray-600 transition-all focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/10"
                      />
                    </div>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              {/* Password */}
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor={field.name}
                      className="mb-2 text-sm font-medium text-gray-200"
                    >
                      Password
                    </FieldLabel>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-gray-500" />
                      <Input
                        {...field}
                        id={field.name}
                        type="text"
                        placeholder="Password"
                        autoComplete="new-password"
                        required
                        aria-invalid={fieldState.invalid}
                        className="h-12 rounded-xl border-white/10 bg-[#15171e] pl-11 text-gray-100 placeholder:text-gray-600 transition-all focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/10"
                      />
                    </div>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* Buttons */}
              <Field className="pt-1">
                <Button
                  type="submit"
                  disabled={isPending}
                  className="h-12 w-full rounded-xl border-0 bg-linear-to-r from-indigo-500 to-violet-500 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:from-indigo-400 hover:to-violet-400 hover:shadow-indigo-500/30 active:scale-[0.99]"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      <span>Loading...</span>
                    </>
                  ) : (
                    <span>Sign In</span>
                  )}
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
