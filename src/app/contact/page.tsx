import ContactForm from '@/components/contactForm';
import { getRouteMetadata } from '@/lib/routing';

export const metadata = getRouteMetadata('/contact/');

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
