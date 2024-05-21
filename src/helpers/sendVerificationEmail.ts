import { resend } from "@/lib/resend";

import VerificationEmail from "../../emails/VerificationEmail";

import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Anonymous_Feed | Verification Code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return { sucess: true, message: "Verification email send sucessfully" };
  } catch (emailError) {
    console.error("Error sending verification email", emailError);
    return { sucess: false, message: "failed to send verification email" };
  }
}
