import z from "zod";

export const forgetPasswordSchema = z.object({
  email: z
    .string({ message: "Invalid Email Input" })
    .nonempty("email is Required"),
});

export const otpSchema = z.object({
  otp: z
    .string({ message: "You must Provide otp" })
    .length(5, "Otp Must be 5 Characters only"),
});

export const resetPasswordSchema = z.object({
  password: z
    .string({ message: "Invalid Input" })
    .nonempty("You Must Provide Password")
    .regex(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character",
    ),
});

export const registerSchema = z.object({
  username: z
    .string({ message: "Invalid Username Input" })
    .nonempty("Username is Required")
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must be at most 30 characters"),
  email: z
    .string({ message: "Invalid Email Input" })
    .nonempty("Email is Required")
    .email("Invalid Email Format"),
  password: z
    .string({ message: "Invalid Input" })
    .nonempty("You Must Provide Password")
    .regex(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character",
    ),
});
