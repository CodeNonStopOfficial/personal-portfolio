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
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
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
            render={({ field: { onChange, name, ref }, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={name}>Image</FieldLabel>

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
                <FieldLabel htmlFor={field.name}>Tag and Aim</FieldLabel>

                <Input
                  {...field}
                  id={field.name}
                  placeholder="Java Full Stack Developer"
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="heading"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Heading</FieldLabel>

                <Textarea
                  {...field}
                  id={field.name}
                  rows={5}
                  cols={10}
                  placeholder="Write a Heading.."
                  aria-invalid={fieldState.invalid}
                />

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
                  rows={5}
                  cols={10}
                  placeholder="Write About.."
                  aria-invalid={fieldState.invalid}
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
                  cols={10}
                  placeholder="Write a Bio.."
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Controller
              name="linkedin"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Linkeding Link</FieldLabel>

                  <Input
                    {...field}
                    id={field.name}
                    type="url"
                    placeholder="https://linkeding.com"
                    aria-invalid={fieldState.invalid}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="github"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Github Link</FieldLabel>

                  <Input
                    {...field}
                    id={field.name}
                    type="url"
                    placeholder="https://github.com"
                    aria-invalid={fieldState.invalid}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="website"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Website Link</FieldLabel>

                  <Input
                    {...field}
                    id={field.name}
                    type="url"
                    placeholder="https://www.abc.com"
                    aria-invalid={fieldState.invalid}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="facebook"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Facebook Link</FieldLabel>

                  <Input
                    {...field}
                    id={field.name}
                    type="url"
                    placeholder="https://www.abc.com"
                    aria-invalid={fieldState.invalid}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="youtube"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Youtube Link</FieldLabel>

                  <Input
                    {...field}
                    id={field.name}
                    type="url"
                    placeholder="https://youtube.com"
                    aria-invalid={fieldState.invalid}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="twitter"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Twitter Link</FieldLabel>

                  <Input
                    {...field}
                    id={field.name}
                    type="url"
                    placeholder="https://twitter.com"
                    aria-invalid={fieldState.invalid}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="location"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Linkeding Link</FieldLabel>

                  <Input
                    {...field}
                    id={field.name}
                    type="text"
                    placeholder="Enter a Location"
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
        <div className="flex items-center justify-start gap-2 mt-8">
          <Button
            type="submit"
            variant="outline"
            disabled={isPending}
            className="px-10  font-medium py-4.5"
          >
            {isPending ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                <span>Loading...</span>
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
            className="px-12 font-medium py-4.5"
            variant="destructive"
            onClick={() => form.reset()}
          >
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
}
