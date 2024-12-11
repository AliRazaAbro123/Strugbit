// import nodemailer from "nodemailer";
// import { NextResponse } from "next/server"; // Import NextResponse

// // Named export for the POST request handler
// export async function POST(req) {
//   // Parse the incoming JSON request body
//   const { username, email, message } = await req.json();

//   if (!username || !email || !message) {
//     return NextResponse.json({ error: "All fields are required." }, { status: 400 });
//   }

//   try {
//     // Create a transporter using Gmail SMTP settings
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587, // Gmail's SMTP port
//       secure: false, // Use TLS
//       auth: {
//         user: process.env.GMAIL_USER, // Your Gmail address (stored in .env)
//         pass: process.env.GMAIL_PASS, // Your Gmail app password (stored in .env)
//       },
//     });

//     // Email options
//     const mailOptions = {
//       from: `"${username}" <${email}>`, // Sender address
//       to: process.env.RECIPIENT_EMAIL, // Recipient's email address (stored in .env)
//       subject: "New Contact Form Submission",
//       text: `Name: ${username}\nEmail: ${email}\nMessage: ${message}`,
//     };

//     // Send the email
//     await transporter.sendMail(mailOptions);

//     return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
//   }
// }
