'use server';

import { Resend } from 'resend';

type FormState = {
  success: boolean;
  successMsg: string;
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function submitContactForm(
  previousState: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    new Resend(process.env.RESEND_TOKEN).emails.send({
      from: `${formData.get('name')?.toString() ?? 'Some user of the website'} <form@contact.florian-frauenfelder.ch>`,
      to: 'florian.l.frauenfelder@gmail.com',
      replyTo: formData.get('email')?.toString() ?? '',
      subject: `[Website] ${formData.get('subject')?.toString() ?? 'question'}`,
      html: `<p>From: "${formData.get('name')?.toString() ?? 'Some user of the website'}"</p><p>${formData.get('message')?.toString() ?? ''}</p>`,
    });
    return {
      success: true,
      successMsg: 'Message sent.',
      name: formData.get('name')?.toString() ?? '',
      email: formData.get('email')?.toString() ?? '',
      subject: formData.get('subject')?.toString() ?? 'question',
      message: `This message was sent successfully.\n---\n${formData.get('message')?.toString() ?? ''}`,
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      successMsg: 'Something went wrong.',
      name: formData.get('name')?.toString() ?? '',
      email: formData.get('email')?.toString() ?? '',
      subject: formData.get('subject')?.toString() ?? 'question',
      message: formData.get('message')?.toString() ?? '',
    };
  }
}
