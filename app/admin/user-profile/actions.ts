"use server"
import { z } from "zod";
import { requiredAdmin } from "@/app/data/admin/required-admin";
import { prisma } from "@/lib/prisma";
import { userUpdateSchema } from "@/app/schema/auth";

export async function updateProfile(
  value: z.infer<typeof userUpdateSchema>
) {
  try {
    const session = await requiredAdmin();

    if (session?.user?.role !== "admin") {
      return {
        status: "error" as const,
        message: "Unauthorized",
      };
    }

    const validatedData = userUpdateSchema.parse(value);

    await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        name: validatedData.name,
        headline: validatedData.heading,
        tag: validatedData.tag,
        bio: validatedData.bio,
        about: validatedData.about,
        location: validatedData.location,

        linkedin: validatedData.linkedin || null,
        github: validatedData.github || null,
        facebook: validatedData.facebook || null,
        website: validatedData.website || null,
        twitter: validatedData.twitter || null,
        youtube: validatedData.youtube || null,
      },
    });

    return {
      status: "success" as const,
      message: "Profile updated successfully",
    };
  } catch (error) {
    console.error(error);

    return {
      status: "error" as const,
      message: "Failed to update profile",
    };
  }
}