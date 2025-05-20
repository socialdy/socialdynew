'use server'

import nodemailer from 'nodemailer';

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string | null;
  const message = formData.get('message') as string;

  // Basic validation
  if (!name || !email || !message) {
    return { success: false, message: 'Bitte füllen Sie alle erforderlichen Felder aus.' };
  }

  // Configure your email transporter
  // Use environment variables for security
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST, // e.g., smtp.your-email-provider.com
    port: parseInt(process.env.EMAIL_SERVER_PORT || '587', 10), // e.g., 587 or 465
    secure: process.env.EMAIL_SERVER_PORT === '465', // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_SERVER_USER, // your email address
      pass: process.env.EMAIL_SERVER_PASSWORD, // your email password or app-specific password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM, // Sender address (can be the same as user)
    to: 'office@socialdynamics.agency', // Receiver address
    subject: 'Neue Kontaktformular-Nachricht',
    text: `Name: ${name}\nEmail: ${email}\nTelefon: ${phone || 'Nicht angegeben'}\nNachricht:\n${message}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone || 'Nicht angegeben'}</p>
      <p><strong>Nachricht:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return { success: true, message: 'Nachricht erfolgreich gesendet!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.' };
  }
} 