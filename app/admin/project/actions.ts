"use server";

import { requiredAdmin } from "@/app/data/admin/required-admin";
import { prisma } from "@/lib/prisma";
import { ApiResponse } from "@/lib/types";
import { ProjectSchema, ProjectType } from "@/lib/zodSchema";

export default async function CreateProject(
  value: ProjectType,
): Promise<ApiResponse> {
  try {
    const session = await requiredAdmin();

    if (session?.user?.role !== "admin") {
      return {
        status: "error" as const,
        message: "Unauthorized",
      };
    }

    const result = ProjectSchema.safeParse(value);

    if (!result.success) {
      return {
        status: "error" as const,
        message: "Invalid project data",
      };
    }

    const data = result.data;

    let imageKey: string | undefined;

  

    await prisma.project.create({
      data: {
        title: data.title,
        smallDescription: data.smallDescription,
        description: data.description,

        ...(imageKey && {
          image: imageKey,
        }),

        githubUrl: data.githubUrl,
        liveUrl: data.liveUrl,
        user: {
          connect: {
            id: session.user.id,
          },
        },
      },
    });

    return {
      status: "success" as const,
      message: "Project created successfully",
    };
  } catch (error) {
    console.error("CREATE_PROJECT_ERROR:", error);

    return {
      status: "error" as const,
      message: "Something went wrong while creating the project",
    };
  }
}
