/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Handler } from "@netlify/functions";

export const handler: Handler = async (event) => {
  try {
    const { to, subject, message, from_name } = JSON.parse(event.body || "{}");
    if (
      !process.env.EMAILJS_SERVICE_ID ||
      !process.env.EMAILJS_TEMPLATE_ID ||
      !process.env.EMAILJS_API_KEY
    ) {
      throw new Error("EmailJS configuration is missing");
    }
    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          origin: "http://localhost", // required by EmailJS
        },

        body: JSON.stringify({
          service_id: process.env.EMAILJS_SERVICE_ID,
          template_id: process.env.EMAILJS_TEMPLATE_ID,
          user_id: process.env.EMAILJS_API_KEY,
          template_params: {
            to_email: to,
            subject,
            message,
            from_name,
          },
        }),
      },
    );

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(errText);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error: any) {
    console.log("Email sending error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
