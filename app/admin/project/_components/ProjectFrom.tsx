"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { tryCatch } from "@/hooks/try-catch";
import { ProjectSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Plus } from "lucide-react";
import { useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import CreateProject from "../actions";
import { toast } from "@/components/ui/toast";
import { useRouter } from "next/navigation";

export function ProjectForm() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<z.infer<typeof ProjectSchema>>({
    resolver: zodResolver(ProjectSchema),
    defaultValues: {
      title: "",
      smallDescription: "",
      description: "",
      image: undefined,
      liveUrl: "",
      githubUrl: "",
    },
  });

  function onSubmit(value: z.infer<typeof ProjectSchema>) {
    startTransition(async () => {
      const { data, error } = await tryCatch(CreateProject(value));
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
        router.push("/projects");
      } else if (data.status === "error") {
        toast.add({
          type: "error",
          title: data?.message,
        });
      }
    });
  }
  return (
    <>
      <div className="w-full">
        <div className="mx-auto w-full rounded-2xl bg-card">
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup className="space-y-5">
              {/* Title */}
              <Controller
                name="title"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>
                      Project Title <span className="text-[#f00]">*</span>
                    </FieldLabel>

                    <Input
                      {...field}
                      id={field.name}
                      type="text"
                      placeholder="Enter your project title"
                      aria-invalid={fieldState.invalid}
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* Small Description + Image */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Controller
                  name="smallDescription"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>
                        Small Description
                        <span className="text-[#f00]">*</span>
                      </FieldLabel>

                      <Textarea
                        {...field}
                        id={field.name}
                        placeholder="Write a short description of your project..."
                        className="min-h-32 resize-y"
                        aria-invalid={fieldState.invalid}
                      />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="image"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>
                        Project Image
                        <span className="text-[#f00]">*</span>
                      </FieldLabel>

                      <div className="flex min-h-32 items-center justify-center rounded-lg border-2 border-dashed p-4 transition-colors hover:bg-muted/50">
                        <Input
                          id={field.name}
                          name={field.name}
                          type="file"
                          accept="image/png,image/jpeg,image/webp"
                          className="cursor-pointer border-0 shadow-none"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            field.onChange(file);
                          }}
                          aria-invalid={fieldState.invalid}
                        />
                      </div>

                      <p className="text-xs text-muted-foreground">
                        PNG, JPG or WebP. Maximum 5MB.
                      </p>

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>

              {/* Description */}
              <Controller
                name="description"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Description</FieldLabel>

                    <Textarea
                      {...field}
                      id={field.name}
                      placeholder="Describe your project in detail..."
                      className="min-h-48 resize-y"
                      aria-invalid={fieldState.invalid}
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* URLs */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Controller
                  name="liveUrl"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>
                        Project Live Link
                      </FieldLabel>

                      <Input
                        {...field}
                        id={field.name}
                        type="url"
                        placeholder="https://example.com"
                        aria-invalid={fieldState.invalid}
                      />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="githubUrl"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>GitHub Link</FieldLabel>

                      <Input
                        {...field}
                        id={field.name}
                        type="url"
                        placeholder="https://github.com/username/project"
                        aria-invalid={fieldState.invalid}
                      />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>
            </FieldGroup>

            {/* Actions */}
            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-start">
              <Button
                type="button"
                variant="destructive"
                className="w-full sm:w-auto px-8 py-4.5"
                onClick={() => form.reset()}
              >
                Reset Form
              </Button>

              <Button
                type="submit"
                disabled={isPending}
                className="w-full sm:w-auto px-8 py-4.5"
              >
                {isPending ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    <span>Loading...</span>
                  </>
                ) : (
                  <>
                    <Plus className="size-4" />
                    <span>Create Project</span>
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
