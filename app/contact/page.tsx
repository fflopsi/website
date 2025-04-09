import getMetadata from '@/components/metadata';
import { getAttr } from '@/components/routing';
import Form from 'next/form';

export const metadata = getMetadata(getAttr('/contact/', 'title'));

async function submit() {
  'use server';
  console.log('Form submitted');
}

export default function Contact() {
  return (
    <>
      <h2>Contact me</h2>
      <p>
        If you have any questions, remarks, suggestions or spotted a bug on my
        website, you can use this contact form to send me a message:
      </p>
      <Form action={submit}>
        <div className='form-grid'>
          <label htmlFor='name'>Name *: </label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Firstname Lastname'
            maxLength={32}
            required
          />
          <label htmlFor='email'>Email address: </label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='my.name@gmail.com'
            maxLength={64}
          />
          <label htmlFor='subject'>Subject: </label>
          <select id='subject' name='subject' defaultValue={'question'}>
            <option value='ta'>Concerning TA</option>
            <option value='question'>Question</option>
            <option value='suggestion'>Suggestion</option>
            <option value='bug'>Bug</option>
            <option value='other'>Other</option>
          </select>
        </div>
        <label htmlFor='message'>Your message *:</label>
        <br />
        <textarea
          id='message'
          name='message'
          placeholder={`Your message to me...\nDon't share any sensitive info like passwords and such.`}
          rows={4}
          cols={64}
          required
        />
        <br />
        <label>
          <i>*: Required</i>
        </label>
        <br />
        <button type='submit'>Submit message</button>
      </Form>
    </>
  );
}
