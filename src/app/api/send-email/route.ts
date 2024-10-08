import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();

  try {
    const data = await resend.emails.send({
      from: 'Blooming Furniture <onboarding@resend.dev>', // Use your verified domain here
      to: ['info@bloomingfurniture.co.za'], // The email where you want to receive submissions
      replyTo: email, // Set the reply-to as the submitter's email
      subject: 'New Blooming Furniture Contact Form Submission',
      html: `
        <h1>New Blooming Furniture Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}