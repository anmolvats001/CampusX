import nodemailer from "nodemailer";
import SibApiV3Sdk from "sib-api-v3-sdk";

/**
 * Creates a Nodemailer transporter configured for Gmail or custom SMTP
 */
const getTransporter = (port = 465, secure = true) => {
  const cleanUser = (process.env.EMAIL_USER || "").trim();
  const cleanPass = (process.env.EMAIL_PASS || "").trim().replace(/\s+/g, "");

  // If explicitly custom SMTP host (not gmail)
  if (process.env.EMAIL_HOST && !process.env.EMAIL_HOST.includes("gmail")) {
    const customPort = Number(process.env.EMAIL_PORT) || 587;
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST.trim(),
      port: customPort,
      secure: customPort === 465,
      auth: {
        user: cleanUser,
        pass: cleanPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
      connectionTimeout: 5000,
      greetingTimeout: 5000,
      socketTimeout: 8000,
    });
  }

  // Gmail SMTP configuration (works locally and on paid cloud instances)
  return nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port,
    secure,
    auth: {
      user: cleanUser,
      pass: cleanPass,
    },
    tls: {
      rejectUnauthorized: false,
    },
    connectionTimeout: 5000,
    greetingTimeout: 5000,
    socketTimeout: 8000,
  });
};

/**
 * Send email via Brevo REST API (uses HTTPS port 443, never blocked by Render)
 */
const sendViaBrevo = async ({ to, subject, html, replyTo, cleanUser }) => {
  const apiKey = (process.env.BREVO_API_KEY || "").trim();
  if (!apiKey) return null;

  const senderEmail =
    (process.env.BREVO_SENDER || "").trim() ||
    cleanUser ||
    "campusconnect743@gmail.com";

  // Use direct HTTPS fetch for maximum speed and zero socket blocking
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender: {
        email: senderEmail,
        name: "Campus Connect",
      },
      to: [{ email: to }],
      subject,
      htmlContent: html,
      replyTo: replyTo ? { email: replyTo } : undefined,
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(
      `Brevo API error (${response.status}): ${data.message || JSON.stringify(data)}`
    );
  }
  return data;
};

/**
 * Send email via Resend REST API (uses HTTPS port 443, never blocked by Render)
 */
const sendViaResend = async ({ to, subject, html, replyTo, cleanUser }) => {
  const apiKey = (process.env.RESEND_API_KEY || "").trim();
  if (!apiKey) return null;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM || "Campus Connect <onboarding@resend.dev>",
      to: [to],
      subject,
      html,
      reply_to: replyTo || cleanUser || undefined,
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(`Resend API error: ${data.message || JSON.stringify(data)}`);
  }
  return data;
};

/**
 * Send email via Nodemailer SMTP (e.g. Gmail App Password)
 */
const sendViaSMTP = async ({ to, subject, html, replyTo, cleanUser }) => {
  try {
    const transporter = getTransporter(465, true);
    return await transporter.sendMail({
      from: `"Campus Connect" <${cleanUser}>`,
      to,
      subject,
      html,
      replyTo: replyTo || cleanUser,
    });
  } catch (err465) {
    console.warn("SMTP 465 failed, trying port 587:", err465.message);
    const fallbackTransporter = getTransporter(587, false);
    return await fallbackTransporter.sendMail({
      from: `"Campus Connect" <${cleanUser}>`,
      to,
      subject,
      html,
      replyTo: replyTo || cleanUser,
    });
  }
};

export const sendEmail = async ({ to, subject, html, replyTo }) => {
  const cleanUser = (process.env.EMAIL_USER || "").trim();
  const cleanPass = (process.env.EMAIL_PASS || "").trim().replace(/\s+/g, "");
  const hasBrevo = Boolean((process.env.BREVO_API_KEY || "").trim());
  const hasResend = Boolean((process.env.RESEND_API_KEY || "").trim());
  const hasSMTP = Boolean(cleanUser && cleanPass);
  const isRender = Boolean(process.env.RENDER);

  // Strategy on Render:
  // Render Free Tier blocks outbound SMTP ports (25, 465, 587) with a firewall.
  // Therefore, on Render, prioritize HTTPS REST APIs (Brevo / Resend) if configured!
  if (isRender) {
    if (hasBrevo) {
      try {
        return await sendViaBrevo({ to, subject, html, replyTo, cleanUser });
      } catch (brevoErr) {
        console.warn("Render Brevo API failed, checking alternatives:", brevoErr.message);
      }
    }

    if (hasResend) {
      try {
        return await sendViaResend({ to, subject, html, replyTo, cleanUser });
      } catch (resendErr) {
        console.warn("Render Resend API failed:", resendErr.message);
      }
    }

    if (hasSMTP) {
      try {
        return await sendViaSMTP({ to, subject, html, replyTo, cleanUser });
      } catch (smtpErr) {
        console.error("Render SMTP failed:", smtpErr.message);
        throw new Error(
          "Email delivery timed out. Render Free Tier blocks outbound SMTP ports (465/587). Please use Brevo API Key (BREVO_API_KEY) or Resend (RESEND_API_KEY) in Render Environment variables."
        );
      }
    }
  } else {
    // Strategy for Localhost / Standard Servers:
    // Try SMTP first (works immediately with Gmail App Password)
    if (hasSMTP) {
      try {
        return await sendViaSMTP({ to, subject, html, replyTo, cleanUser });
      } catch (smtpErr) {
        console.warn("Local SMTP failed, trying API fallback:", smtpErr.message);
      }
    }

    if (hasBrevo) {
      try {
        return await sendViaBrevo({ to, subject, html, replyTo, cleanUser });
      } catch (brevoErr) {
        console.warn("Brevo API fallback failed:", brevoErr.message);
      }
    }

    if (hasResend) {
      try {
        return await sendViaResend({ to, subject, html, replyTo, cleanUser });
      } catch (resendErr) {
        console.warn("Resend API fallback failed:", resendErr.message);
      }
    }
  }

  throw new Error(
    "Email service is not configured. Please set EMAIL_USER & EMAIL_PASS or BREVO_API_KEY in your environment variables."
  );
};


