"use server";
import nodemailer from "nodemailer";

interface EmailParams {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendEmail({
  firstname,
  lastname,
  email,
  phone,
  message,
}: EmailParams): Promise<{ success: boolean; error?: unknown }> {
  const transporter = nodemailer.createTransport({
    service: "Gmail", // You can use any email service you prefer
    auth: {
      user: "niktestpython@gmail.com", // Your email
      pass: process.env.EMAIL_PASS, // Your email password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "ppnikita52@gmail.com", // Recipient email
    subject: "New Contact Form Submission",
    text: `You have received a message from ${firstname} ${lastname}.
           Email: ${email}
           Phone: ${phone}
           Message: ${message}
           Please contact him/her.`,
    html: `<p>You have received a message from <strong>${firstname} ${lastname}</strong>.</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>Message:</strong> ${message}</p>
           <p>Please contact him/her.</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return { success: true };
  } catch (error) {
    console.error("Error sending email: ", error);
    throw new Error("Failed to send email");
  }
}
