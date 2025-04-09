'use server';

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
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    success: true,
    successMsg: 'Message sent.',
    name: formData.get('name')?.toString() ?? '',
    email: formData.get('email')?.toString() ?? '',
    subject: formData.get('subject')?.toString() ?? 'question',
    message: formData.get('message')?.toString() ?? '',
  };
}
