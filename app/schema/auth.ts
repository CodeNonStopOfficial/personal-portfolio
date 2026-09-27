import z from "zod";

export const signUpSchema = z.object({
  name: z.string().min(3).max(30),
  email: z.email(),
  password: z.string().min(8).max(30),
});

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8).max(30),
});

export const userUpdateSchema = z.object({
  name: z.string().min(3).max(30),

  image: z
    .instanceof(File)
    .optional()
    .refine(
      (file) => !file || file.size <= 5 * 1024 * 1024,
      "Image must be less than 5MB",
    )
    .refine(
      (file) => !file || file.type.startsWith("image/"),
      "Only image files are allowed",
    ),

  heading: z
    .string()
    .min(2, "Heading must be at least 2 characters")
    .max(100, "Heading must be less than 100 characters"),

  tag: z
    .string()
    .min(3, "Professional title must be at least 3 characters")
    .max(50, "Professional title must be less than 80 characters"),

  bio: z
    .string()
    .min(20, "Bio must be at least 20 characters")
    .max(500, "Bio must be less than 300 characters"),

  about: z
    .string()
    .min(50, "About section must be at least 50 characters")
    .max(100, "About section must be less than 2000 characters"),

  location: z
    .string()
    .min(2, "Location is required")
    .max(50, "Location must be less than 100 characters"),

  linkedin: z.url().optional().or(z.literal("")),
  github: z.url().optional().or(z.literal("")),
  facebook: z.url().optional().or(z.literal("")),
  website: z.url().optional().or(z.literal("")),
  twitter: z.url().optional().or(z.literal("")),
  youtube: z.url().optional().or(z.literal("")),
});

export type UserUpdateInput = z.infer<typeof userUpdateSchema>;