import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(3, "username must be atleast 3 characters")
  .max(20, "username must no more than 20 character")
  .regex(/^[a-zA-Z0-9_]+$/, "username must not contain special character");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "invalid email address" }),
  password: z.string().min(6, { message: "password must be atleeast 6 char" }),
});
