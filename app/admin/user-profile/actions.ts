"use server";
import { z } from "zod";
import { requiredAdmin } from "@/app/data/admin/required-admin";
import { prisma } from "@/lib/prisma";
import { userUpdateSchema } from "@/app/schema/auth";
import { ApiResponse } from "@/lib/types";

export async function updateProfile(
  value: z.infer<typeof userUpdateSchema>,
): Promise<ApiResponse> {
  try {
    const session = await requiredAdmin();

    if (session?.user?.role !== "admin") {
      return {
        status: "error" as const,
        message: "Unauthorized",
      };
    }

    const validatedData = userUpdateSchema.parse(value);

    let imageKey: string | undefined;

    // // Upload image only if a new image was provided
    if (validatedData.image instanceof File) {
      const formData = new FormData();
      formData.append("file", validatedData.image);

      // Use an absolute URL on the server
      const baseUrl =
        process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

      const response = await fetch(`${baseUrl}/api/upload`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        return {
          status: "error",
          message: "File upload failed",
        };
      }

      const data = await response.json();
      imageKey = data.key;
    }

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

        ...(imageKey && {
          image: imageKey,
        }),

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
