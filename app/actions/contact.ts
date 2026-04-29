'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
}) {
  const { name, email, inquiryType, message } = formData;

  const { data, error } = await resend.emails.send({
    from: 'Ellason Art Website <website@ellason.art>',
    to: ['info@ellason.art', 'info@steamworks.io'],
    replyTo: email,
    subject: `New Contact Request from ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1f1e1c;">New Contact Inquiry</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #666; width: 130px;"><strong>Name</strong></td>
            <td style="padding: 8px 0; color: #1f1e1c;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666;"><strong>Email</strong></td>
            <td style="padding: 8px 0; color: #1f1e1c;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666;"><strong>Inquiry Type</strong></td>
            <td style="padding: 8px 0; color: #1f1e1c;">${inquiryType || '—'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666; vertical-align: top;"><strong>Message</strong></td>
            <td style="padding: 8px 0; color: #1f1e1c; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>
        <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />
        <p style="color: #999; font-size: 12px;">Sent via ellason.art/contact</p>
      </div>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return { success: false, error: error.message };
  }

  return { success: true, id: data?.id };
}
