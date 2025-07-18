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
  const siteKey = '6LdtGYUrAAAAALmAOd-PSkICuKw65bMJNh1FS_Ox';
  const siteKeyHidden = '6LcGOYUrAAAAAPIVkoLzsJPbWlzt_QZoAQ0sWPzE';
  const recaptchaResponse = await fetch(
    `https://recaptchaenterprise.googleapis.com/v1/projects/website-466113/assessments?key=${process.env.GOOGLE_API_KEY}`,
    {
      method: 'POST',
      body: JSON.stringify({
        event: {
          token: formData.get('g-recaptcha-response')?.toString() ?? '',
          siteKey: siteKeyHidden,
          expectedAction: 'contact_form',
        },
      }),
    },
  );
  const recaptchaData = await recaptchaResponse.json();

  try {
    if (
      !recaptchaData?.riskAnalysis?.score ||
      recaptchaData?.tokenProperties?.valid !== true
    ) {
      console.log('Recaptcha failed', JSON.stringify(recaptchaData, null, 2));
      throw new Error('Recaptcha failed');
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: `${formData.get('name')?.toString() ?? 'Some user of the website'} <form@contact.florian-frauenfelder.ch>`,
      to: 'ffrauenfelde@student.ethz.ch',
      replyTo: formData.get('email')?.toString() ?? '',
      subject: `[Website] ${formData.get('subject')?.toString() ?? 'Question'}`,
      html: `<p>From: "${formData.get('name')?.toString() ?? 'Some user of the website'}"</p><p>${formData.get('message')?.toString() ?? ''}</p>`,
    });
    if (error) {
      return {
        success: false,
        successMsg: `Something went wrong: ${error.name}: ${error.message}`,
        name: formData.get('name')?.toString() ?? '',
        email: formData.get('email')?.toString() ?? '',
        subject: formData.get('subject')?.toString() ?? 'Question',
        message: formData.get('message')?.toString() ?? '',
      };
    }
    if (
      formData.get('copy') === 'true' &&
      formData.get('email')?.toString() !== ''
    ) {
      const { data, error } = await resend.emails.send({
        from: `Contact form on florian-frauenfelder.ch <form@contact.florian-frauenfelder.ch>`,
        to: formData.get('email')!.toString(),
        replyTo: 'ffrauenfelde@student.ethz.ch',
        subject: `[Contact form on florian-frauenfelder.ch] ${formData.get('subject')?.toString() ?? 'Question'}`,
        html: `<p><i>You submitted the following contact form:</i></p><p>From: "${formData.get('name')?.toString() ?? 'Some user of the website'}"</p><p>${formData.get('message')?.toString() ?? ''}</p>`,
      });
      if (error) {
        return {
          success: false,
          successMsg: `Something went wrong: ${error.name}: ${error.message}`,
          name: formData.get('name')?.toString() ?? '',
          email: formData.get('email')?.toString() ?? '',
          subject: formData.get('subject')?.toString() ?? 'Question',
          message: formData.get('message')?.toString() ?? '',
        };
      }
    }
    return {
      success: true,
      successMsg: 'Message sent.',
      name: '',
      email: '',
      subject: 'Question',
      message: `This message was sent successfully.\n---\n${formData.get('message')?.toString() ?? ''}`,
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      successMsg: `Something went wrong: ${e}`,
      name: formData.get('name')?.toString() ?? '',
      email: formData.get('email')?.toString() ?? '',
      subject: formData.get('subject')?.toString() ?? 'Question',
      message: formData.get('message')?.toString() ?? '',
    };
  }
}
