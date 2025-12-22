import SibApiV3Sdk from "sib-api-v3-sdk";

const client = SibApiV3Sdk.ApiClient.instance;

// Authenticate with API key
client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

const tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

export const sendEmail = async ({ to, subject, html }) => {
  return tranEmailApi.sendTransacEmail({
    sender: {
      email: "campusconnect743@gmail.com", // VERIFIED SENDER
      name: "Campus Connect",
    },
    to: [{ email: to }],
    subject,
    htmlContent: html,
  });
};
