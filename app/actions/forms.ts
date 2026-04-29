"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

async function verifyRecaptcha(token: string | null): Promise<boolean> {
  if (!token) return false;
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${token}`;
  try {
    const res = await fetch(verifyUrl, { method: "POST" });
    const data = await res.json();
    return data.success && data.score >= 0.5;
  } catch {
    return false;
  }
}

// ─── Commission Inquiry ────────────────────────────────────────────────────────

export async function submitCommission(formData: FormData) {
  const token = formData.get("token") as string;
  const isHuman = await verifyRecaptcha(token);

  if (!isHuman) return { error: "Spam detected. Message rejected." };

  let htmlContent = "<h3>New Commission Request</h3>";
  let replyToEmail = "info@ellason.art";

  formData.forEach((value, key) => {
    if (key !== "token" && typeof value === "string") {
      htmlContent += `<p><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</p>`;
      if (key.toLowerCase() === "email") replyToEmail = value;
    }
  });

  try {
    const { error } = await resend.emails.send({
      from: "Ellason Art Website <website@ellason.art>",
      to: ["info@ellason.art", "info@steamworks.io"],
      replyTo: replyToEmail,
      subject: "New Commission Request",
      html: htmlContent,
    });

    if (error) return { error: "Failed to send request." };
    return { success: true };
  } catch {
    return { error: "An unexpected error occurred." };
  }
}

// ─── Review Submission ─────────────────────────────────────────────────────────

export async function submitReview(formData: FormData) {
  const token = formData.get("token") as string;
  const isHuman = await verifyRecaptcha(token);

  if (!isHuman) return { error: "Spam detected. Message rejected." };

  let htmlContent = "<h3>New Review Submitted</h3>";

  formData.forEach((value, key) => {
    if (key !== "token" && typeof value === "string") {
      htmlContent += `<p><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</p>`;
    }
  });

  try {
    const { error } = await resend.emails.send({
      from: "Ellason Art Website <website@ellason.art>",
      to: ["info@ellason.art", "info@steamworks.io"],
      subject: "New Client Review Submitted",
      html: htmlContent,
    });

    if (error) return { error: "Failed to send review." };
    return { success: true };
  } catch {
    return { error: "An unexpected error occurred." };
  }
}
