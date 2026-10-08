import { z } from "zod";

 export const schemasignup = z
  .object({
    name: z
      .string()
      .nonempty("Name is required")
      .min(3, "The name should be at least 3 characters"),

    email: z.email("Invalid email address"),

   password: z
  .string()
  .nonempty("Password is required")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character"
  ),

    rePassword: z.string(),

    phone: z
      .string()
      .nonempty("Phone number is required")
      .regex(
        /^(\+2)?01[0125][0-9]{8}$/,
        "Only Egyptian phone numbers are allowed"
      ),

    terms: z.boolean().refine((value) => value === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],

  });

 export type signupFormvalues = z.infer< typeof schemasignup>