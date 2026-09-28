import { z } from "zod";

export const ProjectSchema = z.object({
  title: z
    .string()
    .trim()
    .min(10, "Title must be at least 10 characters")
    .max(50, "Title must be less than 50 characters"),

  smallDescription: z
    .string()
    .trim()
    .min(100, "Short description must be at least 50 characters")
    .max(200, "Short description must be less than 100 characters"),

  description: z
    .string()
    .trim()
    .max(1000, "Description must be less than 1000 characters")
    .optional(),

  image: z.instanceof(File, { message: "Please upload an image" }),
  liveUrl: z.url("Please provide a valid live URL").optional(),

  githubUrl: z.url("Please provide a valid GitHub URL").optional(),
});

export type ProjectType = z.infer<typeof ProjectSchema>;
