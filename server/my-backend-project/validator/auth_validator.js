import { z } from "zod";

//creating an object schema
const UserSchema = z.object({
  fname: z.string({ required_error: "First name is required" }).trim(),

  lname: z.string({ required_error: "Last name is required" }).trim(),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Please enter a valid email" })
    .max(255, { message: "Please enter less than 255 characters" }),

  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be at least 7 characters" })
    .max(255, { message: "Please enter less than 255 characters" }),

  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least 10 characters" }),
});

export default UserSchema;
