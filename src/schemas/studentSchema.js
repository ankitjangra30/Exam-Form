import { z } from "zod";

export const studentRegisterSchema = z
  .object({
    name: z.string().min(3, "Name is required"),

    email: z.string().email("Enter a valid email"),

    mobile: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid mobile number"),

    rollNumber: z.string().min(1, "Roll number is required"),

    university: z.string().min(1, "University number is required"),

    course: z.string().min(1, "Please select a course"),

    dob: z.string().min(1, "Date of birth is required"),

    password: z.string().min(6, "Password must be at least 6 characters"),

    confirmPassword: z.string().min(1, "Please confirm your password"),

    // terms: z.boolean().refine((value) => value === true, {
    //     message: "You must accept the terms",
    //   }),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );