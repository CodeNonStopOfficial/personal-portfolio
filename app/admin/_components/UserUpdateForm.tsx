"use client";

import { CurrentUserType } from "@/app/data/admin/get-current-user";
import { userUpdateSchema } from "@/app/schema/auth";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { updateProfile } from "../user-profile/actions";
import { tryCatch } from "@/hooks/try-catch";
import { toast } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import { Loader2, Plus } from "lucide-react";

type UserUpdateFormProps = {
  user: CurrentUserType;
};

export function UserUpdateFrom({ user }: UserUpdateFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof userUpdateSchema>>({
    resolver: zodResolver(userUpdateSchema),
    defaultValues: {
      name: user.name ?? "",
      image: undefined,
      heading: user.headline ?? "",
      bio: user.bio ?? "",
      tag: user.tag ?? "",
      about: user.about ?? "",
      linkedin: user.linkedin ?? "",
      github: user.github ?? "",
      facebook: user.facebook ?? "",
      website: user.website ?? "",
      twitter: user.twitter ?? "",
      youtube: user.youtube ?? "",
      location: user.location ?? "",
    },
  });

  function onSubmit(value: z.infer<typeof userUpdateSchema>) {
    startTransition(async () => {
      const { data, error } = await tryCatch(updateProfile(value));
      if (error) {
        toast.add({
          type: "error",
          title: "Unexpected Error Please Try Again",
        });
        return;
      }
      if (data.status === "success") {
        toast.add({
          type: "success",
          title: data?.message,
        });
        form.reset();
        router.push("/");
      } else if (data.status === "error") {
        toast.add({
          type: "error",
          title: data?.message,
        });
      }
    });
  }

  return (
    <div className="mx-auto w-full max-w-6xl py-6">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FieldGroup className="space-y-6">
          {/* ================= BASIC INFORMATION ================= */}
          <div className="rounded-2xl border bg-card shadow-sm">
            <div className="border-b px-6 py-5">
              <h2 className="text-base font-semibold">Basic Information</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Your name, profile image, and professional identity.
              </p>
            </div>

            <div className="p-6">
              <div className="grid gap-6 md:grid-cols-[180px_1fr]">
                {/* Image */}
                <Controller
                  name="image"
                  control={form.control}
                  render={({ field: { onChange, name, ref }, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel
                        htmlFor={name}
                        className="text-center justify-center items-center"
                      >
                        Profile Image
                      </FieldLabel>

                      <div className="flex flex-col items-center gap-3">
                        <div className="flex size-32 items-center justify-center overflow-hidden rounded-full border-2 border-dashed bg-muted">
                          <div className="text-center">
                            <span className="text-3xl">👤</span>
                            <p className="mt-1 text-[10px] text-muted-foreground">
                              Upload image
                            </p>
                          </div>
                        </div>

                        <Input
                          ref={ref}
                          name={name}
                          id={name}
                          type="file"
                          accept="image/*"
                          aria-invalid={fieldState.invalid}
                          onChange={(e) => {
                            onChange(e.target.files?.[0] ?? undefined);
                          }}
                          className="cursor-pointer text-xs"
                        />
                      </div>

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                {/* Name + Tag */}
                <div className="grid gap-5">
                  <Controller
                    name="name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>Full Name</FieldLabel>

                        <Input
                          {...field}
                          id={field.name}
                          placeholder="John Doe"
                          aria-invalid={fieldState.invalid}
                          className="h-11"
                        />

                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />

                  <Controller
                    name="tag"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>
                          Professional Tagline
                        </FieldLabel>

                        <Input
                          {...field}
                          id={field.name}
                          placeholder="Java Full Stack Developer"
                          aria-invalid={fieldState.invalid}
                          className="h-11"
                        />

                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================= PROFILE CONTENT ================= */}
          <div className="rounded-2xl border bg-card shadow-sm">
            <div className="border-b px-6 py-5">
              <h2 className="text-base font-semibold">Profile Content</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Tell people about yourself and what you do.
              </p>
            </div>

            <div className="grid gap-6 p-6">
              <Controller
                name="heading"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>
                      Profile Heading
                    </FieldLabel>

                    <Textarea
                      {...field}
                      id={field.name}
                      rows={3}
                      placeholder="A short introduction or professional headline..."
                      aria-invalid={fieldState.invalid}
                      className="resize-none"
                    />

                    <div className="flex justify-between">
                      <p className="text-xs text-muted-foreground">
                        Keep it short and impactful.
                      </p>
                    </div>

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="about"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>About</FieldLabel>

                    <Textarea
                      {...field}
                      id={field.name}
                      rows={6}
                      placeholder="Write something about yourself, your experience, and what you do..."
                      aria-invalid={fieldState.invalid}
                      className="resize-y"
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="bio"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Bio</FieldLabel>

                    <Textarea
                      {...field}
                      id={field.name}
                      rows={5}
                      placeholder="Write a short professional bio..."
                      aria-invalid={fieldState.invalid}
                      className="resize-y"
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
          </div>

          {/* ================= SOCIAL LINKS ================= */}
          <div className="rounded-2xl border bg-card shadow-sm">
            <div className="border-b px-6 py-5">
              <h2 className="text-base font-semibold">
                Social & Professional Links
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Add links where people can find and connect with you.
              </p>
            </div>

            <div className="grid gap-5 p-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* LinkedIn */}
              <Controller
                name="linkedin"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>LinkedIn</FieldLabel>

                    <Input
                      {...field}
                      id={field.name}
                      type="url"
                      placeholder="https://linkedin.com/in/username"
                      aria-invalid={fieldState.invalid}
                      className="h-11"
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* GitHub */}
              <Controller
                name="github"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>GitHub</FieldLabel>

                    <Input
                      {...field}
                      id={field.name}
                      type="url"
                      placeholder="https://github.com/username"
                      aria-invalid={fieldState.invalid}
                      className="h-11"
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* Website */}
              <Controller
                name="website"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>
                      Personal Website
                    </FieldLabel>

                    <Input
                      {...field}
                      id={field.name}
                      type="url"
                      placeholder="https://example.com"
                      aria-invalid={fieldState.invalid}
                      className="h-11"
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* Facebook */}
              <Controller
                name="facebook"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Facebook</FieldLabel>

                    <Input
                      {...field}
                      id={field.name}
                      type="url"
                      placeholder="https://facebook.com/username"
                      aria-invalid={fieldState.invalid}
                      className="h-11"
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* YouTube */}
              <Controller
                name="youtube"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>YouTube</FieldLabel>

                    <Input
                      {...field}
                      id={field.name}
                      type="url"
                      placeholder="https://youtube.com/@username"
                      aria-invalid={fieldState.invalid}
                      className="h-11"
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* Twitter */}
              <Controller
                name="twitter"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Twitter / X</FieldLabel>

                    <Input
                      {...field}
                      id={field.name}
                      type="url"
                      placeholder="https://x.com/username"
                      aria-invalid={fieldState.invalid}
                      className="h-11"
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
          </div>

          {/* ================= LOCATION ================= */}
          <div className="rounded-2xl border bg-card shadow-sm">
            <div className="border-b px-6 py-5">
              <h2 className="text-base font-semibold">Location</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Let people know where you are based.
              </p>
            </div>

            <div className="p-6">
              <Controller
                name="location"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Location</FieldLabel>

                    <Input
                      {...field}
                      id={field.name}
                      type="text"
                      placeholder="Patna, Bihar, India"
                      aria-invalid={fieldState.invalid}
                      className="h-11"
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
          </div>
        </FieldGroup>

        {/* ================= ACTIONS ================= */}
        <div className="flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-start">
          <Button
            type="submit"
            disabled={isPending}
            className="w-full gap-2 px-8 py-4.5 sm:w-auto"
          >
            {isPending ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                <span>Saving...</span>
              </>
            ) : (
              <>
                <Plus className="size-4" />
                <span>Update Profile</span>
              </>
            )}
          </Button>
          <Button
            type="button"
            variant="destructive"
            className="w-full sm:w-auto py-4.5 px-8"
            onClick={() => form.reset()}
          >
            Reset Changes
          </Button>
        </div>
      </form>
    </div>
  );
}
