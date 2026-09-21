import nodemailer from "nodemailer";
import SibApiV3Sdk from "sib-api-v3-sdk";

export const sendEmail = async ({ to, subject, html, replyTo }) => {
  // Option 1: Nodemailer (SMTP / Gmail App Password configured in .env)
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || "gmail",
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: Number(process.env.EMAIL_PORT) || 465,
      secure: Number(process.env.EMAIL_PORT) === 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    return await transporter.sendMail({
      from: `"Campus Connect" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
      replyTo: replyTo || process.env.EMAIL_USER,
    });
  }

  // Option 2: Brevo API if BREVO_API_KEY is configured
  if (process.env.BREVO_API_KEY) {
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
  }

  throw new Error(
    "Email service is not configured. Please set EMAIL_USER & EMAIL_PASS (Gmail App Password) or BREVO_API_KEY in your backend .env file."
  );
};

