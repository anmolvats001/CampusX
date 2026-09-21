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
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });
  }

  // Gmail SMTP configuration (works reliably on Render, AWS, Heroku)
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
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
};

export const sendEmail = async ({ to, subject, html, replyTo }) => {
  const cleanUser = (process.env.EMAIL_USER || "").trim();
  const cleanPass = (process.env.EMAIL_PASS || "").trim().replace(/\s+/g, "");

  // Option 1: Nodemailer (Gmail App Password or SMTP)
  if (cleanUser && cleanPass) {
    try {
      // Try primary port 465 (secure SSL)
      const transporter = getTransporter(465, true);
      return await transporter.sendMail({
        from: `"Campus Connect" <${cleanUser}>`,
        to,
        subject,
        html,
        replyTo: replyTo || cleanUser,
      });
    } catch (primaryError) {
      console.warn("Primary SMTP attempt failed, trying fallback port 587 (TLS):", primaryError.message);
      try {
        // Fallback to port 587 (STARTTLS) in case port 465 is blocked by cloud hosting firewall
        const fallbackTransporter = getTransporter(587, false);
        return await fallbackTransporter.sendMail({
          from: `"Campus Connect" <${cleanUser}>`,
          to,
          subject,
          html,
          replyTo: replyTo || cleanUser,
        });
      } catch (fallbackError) {
        console.error("All Gmail/SMTP attempts failed:", fallbackError);
        if (fallbackError.code === "EAUTH") {
          throw new Error(
            "Gmail authentication failed. Make sure 2-Step Verification is enabled and you are using a 16-character Google 'App Password', NOT your standard Gmail account password."
          );
        }
        throw fallbackError;
      }
    }
  }

  // Option 2: Brevo API if BREVO_API_KEY is configured
  if (process.env.BREVO_API_KEY) {
    try {
      const client = SibApiV3Sdk.ApiClient.instance;
      client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

      const tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

      return await tranEmailApi.sendTransacEmail({
        sender: {
          email: process.env.BREVO_SENDER || "campusconnect743@gmail.com",
          name: "Campus Connect",
        },
        to: [{ email: to }],
        subject,
        htmlContent: html,
        replyTo: replyTo ? { email: replyTo } : undefined,
      });
    } catch (brevoError) {
      console.error("Brevo API error:", brevoError);
      throw brevoError;
    }
  }

  throw new Error(
    "Email service is not configured. Please set EMAIL_USER & EMAIL_PASS in your environment variables."
  );
};

