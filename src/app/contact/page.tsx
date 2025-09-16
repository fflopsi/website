import ContactForm from '@/components/contactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Florian: Contact form',
  authors: [{ name: 'Florian Frauenfelder' }],
};

export default function Contact() {
  return (
    <>
      <h2>Contact me</h2>
      <p>
        If you have any questions, remarks, suggestions or spotted a bug on my
        website, you can use this contact form to send me a message:
      </p>
      <ContactForm />
    </>
  );
}
