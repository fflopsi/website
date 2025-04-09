import ContactForm from '@/components/contactForm';
import getMetadata from '@/components/metadata';
import { getAttr } from '@/components/routing';

export const metadata = getMetadata(getAttr('/contact/', 'title'));

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
