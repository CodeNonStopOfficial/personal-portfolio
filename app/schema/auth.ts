import z from "zod";

export const signUpSchema = z.object({
  name: z
    .string()
    .min(8, { message: "Name at lest 8 character" })
    .max(35, { message: "Name less then 35 character" }),
  email: z.email({ message: "Email is Required" }),
  password: z
    .string()
    .min(4, { message: "password at least 4 character" })
    .max(50, { message: "Password less then 50 charcters" }),
});

export const singInSchema = z.object({
  email: z.email(),
  password: z.string().min(4).max(50),
});
